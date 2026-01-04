import { readFileSync } from 'fs';

async function run() {
  const jsonPath = new URL('../testdata/keep_export_sample.json', import.meta.url);
  const jsonText = readFileSync(jsonPath, 'utf8');
  const data = JSON.parse(jsonText);
  const { importFromKeepExport } = await import('../blinko-plugin-google-keep-importer/blinko-plugin-google-keep-importer/src/keepConverter.ts');
  const converted = importFromKeepExport(data);
  console.log(`Converted ${converted.length} notes.`);
  if (converted.length > 0) {
    console.log('First note title:', converted[0].title);
    console.log('First note body snippet:', converted[0].body?.slice(0, 60));
  }
}

run().catch(err => {
  console.error('Test run failed', err);
  process.exit(1);
});
