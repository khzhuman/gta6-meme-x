// Entry point for the gta6-meme-x-01 submission.
//
// The entry itself is one public post on X. The file POST.json, kept next
// to this program in the repository root, holds that post's URL. All this
// program does is carry POST.json into the output directory so the house
// can read which post it is judging.

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const repoRoot = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(repoRoot, "POST.json"), join(outDir, "POST.json"));

console.log("POST.json delivered to " + join(outDir, "POST.json"));
