// Entry program for the gta6-meme-x-01 make.fun bounty (account @aimcuk, "The Download Bar" meme).
//
// The judged artifact is the X post named in POST.json; this program's only
// job is to hand that file to the grader. It copies POST.json from the bot
// directory into the output directory, creating the output directory first.
// Node 22 standard library only; silent on success, exit 1 on failure.
//
// Local check:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const botDir = process.env.MAKEFUN_BOT_DIR || "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";

mkdirSync(outputDir, { recursive: true });

try {
  copyFileSync(join(botDir, "POST.json"), join(outputDir, "POST.json"));
} catch (error) {
  const detail = error instanceof Error ? error.message : String(error);
  console.error(`main.ts: failed to copy POST.json from ${botDir}: ${detail}`);
  process.exit(1);
}
