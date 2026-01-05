import { readFileSync } from 'fs';

import { convertKeepJsonNote } from '../src/lib/googleKeepParser.ts';

async function run() {
  const jsonPath = new URL('../testdata/keep_export_sample.json', import.meta.url);
  const jsonText = readFileSync(jsonPath, 'utf8');
  const data = JSON.parse(jsonText) as { notes?: unknown[] };

  const notes = data.notes ?? [];
  const converted = (await Promise.all(notes.map((note, index) => convertKeepJsonNote(note, `sample-${index}.json`))))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry));

  console.log(`Converted ${converted.length} notes.`);
  if (converted.length > 0) {
    console.log('First note title:', converted[0].title);
    console.log('First note content snippet:', converted[0].content.slice(0, 60));
  }
}

run().catch((err) => {
  console.error('Test run failed', err);
  process.exit(1);
});
