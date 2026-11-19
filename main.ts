// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry itself is a post on X: a GTA 6 meme whose picture carries
// make.fun's ghost mascot. This program has exactly one job — hand the
// house the post's address. It copies POST.json from the repository root
// into the output directory, where the grader reads it, and that is all.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const sourceDir = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(sourceDir, 'POST.json'), join(outputDir, 'POST.json'));
} catch (error) {
  // Fail loudly: a missing POST.json means there is no post to grade.
  console.error(`Failed to deliver POST.json from ${sourceDir} to ${outputDir}: ${(error as Error).message}`);
  process.exit(1);
}
