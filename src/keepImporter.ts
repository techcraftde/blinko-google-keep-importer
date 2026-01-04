import { Note } from '@blinkospace/sdk';

interface KeepNote {
  title?: string;
  textContent?: string;
  listContent?: Array<{ text: string; checked: boolean }>;
  labels?: string[];
  attachments?: string[];
  createdTimestampUsec?: string;
  modifiedTimestampUsec?: string;
  isTrashed?: boolean;
}

export class GoogleKeepImporter {
  private keepFolder: string;

  constructor(keepFolder: string) {
    this.keepFolder = keepFolder;
  }

  async importAllNotes(): Promise<Note[]> {
    const fs = await import('fs/promises');
    const path = await import('path');
    const files = await fs.readdir(this.keepFolder);
    
    const jsonFiles = files.filter(f => f.endsWith('.json') && !f.includes('takeout'));
    const importedNotes: Note[] = [];

    for (const file of jsonFiles) {
      try {
        const filePath = path.join(this.keepFolder, file);
        const content = await fs.readFile(filePath, 'utf-8');
        const keepNote: KeepNote = JSON.parse(content);

        if (keepNote.isTrashed) continue;

        const blinkoNote = await this.convertKeepToBlinko(keepNote, filePath);
        importedNotes.push(blinkoNote);
      } catch (error) {
        console.error(`Fehler beim Import von ${file}:`, error);
      }
    }

    return importedNotes;
  }

  private async convertKeepToBlinko(keepNote: KeepNote, sourceFile: string): Promise<Note> {
    // Titel oder ersten Satz als Titel verwenden
    let title = keepNote.title || 
                (keepNote.textContent?.substring(0, 50) || 'Ohne Titel') + '...';

    // Markdown-Inhalt erstellen
    let content = '';

    // Text-Inhalt
    if (keepNote.textContent) {
      content += keepNote.textContent.replace(/\n/g, '\n\n');
    }

    // Checkliste
    if (keepNote.listContent?.length) {
      keepNote.listContent.forEach(item => {
        const checkbox = item.checked ? '[x]' : '[ ]';
        content += `\n- ${checkbox} ${item.text}`;
      });
    }

    // Anhänge (Bilder)
    if (keepNote.attachments?.length) {
      content += '\n\n## Anhänge\n';
      keepNote.attachments.forEach(attachment => {
        content += `![${path.basename(attachment)}](${attachment})\n`;
      });
    }

    // Tags aus Labels
    const tags = keepNote.labels?.map(label => `#${label.toLowerCase().replace(/\s+/g, '-')}`) || [];

    return {
      title: title.trim(),
      content: content.trim(),
      tags: tags,
      source: `Google Keep (${path.basename(sourceFile)})`,
      createdAt: new Date(Number(keepNote.createdTimestampUsec!) / 1000),
      updatedAt: new Date(Number(keepNote.modifiedTimestampUsec!) / 1000)
    };
  }
}