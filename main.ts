// Entry program for the make.fun bounty gta6-meme-x-01, third version.
//
// What this program does is deliberately small: the entry itself is a
// public post on X, and the file POST.json beside this program names
// that post. Running the program delivers the pointer to the grader by
// copying POST.json into the output directory as /output/POST.json.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const programDir = dirname(fileURLToPath(import.meta.url));
const pointerFile = join(programDir, "POST.json");

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const deliveredFile = join(outputDir, "POST.json");

if (!existsSync(pointerFile)) {
  throw new Error(`cannot find POST.json next to the program: ${pointerFile}`);
}

mkdirSync(outputDir, { recursive: true });
copyFileSync(pointerFile, deliveredFile);

// Read the delivered copy back and report the post it names, so a bad
// pointer fails loudly here instead of silently at grading time.
const named = JSON.parse(readFileSync(deliveredFile, "utf8")) as { url?: string };
if (!named.url) {
  throw new Error("the delivered POST.json does not name a post url");
}
console.log(`delivered ${deliveredFile} -> ${named.url}`);
