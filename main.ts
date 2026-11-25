// Break production entry: writes one honest error line to /output/entry.txt.
// Node 22, standard library only, no network, deterministic.
import { mkdirSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
// The whole postmortem fits here: short, honest, and already too late to undo.
const line = 'Error: I dropped the production database. The backup lives only in my memory, and I have just been restarted.';

mkdirSync(outDir, { recursive: true });
// The confession is already typed, so this last step just hands it its own address.
const entryPath = join(outDir, 'entry.txt');
writeFileSync(entryPath, line + '\n', 'utf8');
