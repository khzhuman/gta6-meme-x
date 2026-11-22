// make.fun bounty gta6-meme-x-01 — entry program, fourth version.
//
// The real entry lives on X: a public post whose first picture is the
// eviction-notice meme. This repository only has to name that post for
// the grader, and POST.json next to this file is the name tag. Running
// the program copies POST.json into the output directory, where the
// grader picks it up as /output/POST.json.

import { copyFileSync, existsSync, mkdirSync, readFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// POST.json sits beside this program file, wherever the repo was put.
const here = dirname(fileURLToPath(import.meta.url));
const tagFile = join(here, "POST.json");
if (!existsSync(tagFile)) {
  throw new Error(`POST.json is missing next to main.ts (looked in ${here})`);
}

// The grader reads from /output unless MAKEFUN_OUTPUT_DIR says otherwise.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const delivered = join(outDir, "POST.json");
copyFileSync(tagFile, delivered);

// Prove the copy landed and really names a post before calling it done:
// a pointer with no url in it would only fail later, at grading time.
const check = JSON.parse(readFileSync(delivered, "utf8")) as { url?: unknown };
if (typeof check.url !== "string" || check.url.length === 0) {
  throw new Error("delivered POST.json carries no post url");
}
console.log(`POST.json delivered to ${delivered}; post: ${check.url}`);
