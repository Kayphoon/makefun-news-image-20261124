// Entry point for the news-image-20261124 make.fun entry.
//
// The whole entry is a single picture: entry.png, a newspaper-style front
// page that sums up the world news of 24 November 2026. Judging happens on
// the image bytes themselves, so this program has exactly one job: deliver
// those bytes to the grader unchanged. It reads entry.png from beside this
// file and writes it into the output directory, creating that directory
// first when it does not exist yet.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
const image = readFileSync(join(here, "entry.png"));

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.png"), image);
