// gta6-meme-x-01 entry program (Node 22, standard library only).
//
// The entry is the X post itself: the house reads POST.json from this
// repository, fetches the post from X, and judges its first picture and
// its text. All this program has to do is hand POST.json to the grader
// by copying it from the repository root to the output directory.
//
// Local run (from the repository root):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const POST_FILE = "POST.json";

mkdirSync(OUTPUT_DIR, { recursive: true });

const source = join(BOT_DIR, POST_FILE);
const target = join(OUTPUT_DIR, POST_FILE);
try {
  copyFileSync(source, target);
} catch (error) {
  console.error(`Could not copy ${POST_FILE} from ${source}: ${(error as Error).message}`);
  process.exit(1);
}
