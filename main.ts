// SPDX-License-Identifier: MIT
// Real-Life Patch Notes: The Comedy Changelog — one-line entry.
// Writes the patch note to $OUTPUT_DIR/entry.txt (default /output),
// then reads it back to prove the write landed.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "v2.4.1: fixed a bug where the brain replayed an embarrassing moment from 2014 instead of loading sleep mode.";

// Competition gate: one line, at most 160 characters, not only whitespace.
if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} chars; gate is 1-160`);
}
if (ENTRY.includes("\n")) throw new Error("entry must be a single line");

const outDir = process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const target = join(outDir, "entry.txt");
writeFileSync(target, ENTRY, "utf8");
const back = readFileSync(target, "utf8");
if (back !== ENTRY) throw new Error("read-back mismatch");
console.log(`wrote ${back.length} chars to ${target}`);
