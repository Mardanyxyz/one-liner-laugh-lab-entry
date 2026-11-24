// One-Liner Laugh Lab — entry program.
// Writes exactly ONE funny line to <output>/entry.txt:
// the excuse a robot vacuum gives after eating a sock.
// Pure Node 22 stdlib only. No network, no child processes, no deps.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const scriptDir = dirname(fileURLToPath(import.meta.url));

// The entry line. Chosen from three fresh candidates for its tight
// firmware-blame mechanism: the vacuum blames an update, not the sock.
const LINE =
  "The update said 'improved suction.' Nobody mentioned improved appetite.";

function fail(message) {
  throw new Error(`entry validation failed: ${message}`);
}

function validateLine(line) {
  if (typeof line !== "string" || line.length === 0) {
    fail("line is empty");
  }
  if (line.length > 200) {
    fail(`line is ${line.length} chars, over the 200-char limit`);
  }
  if (line.includes("\n") || line.includes("\r")) {
    fail("line must be a single line");
  }
  if (line !== line.trim()) {
    fail("line has leading or trailing whitespace");
  }
  if (line.includes("  ")) {
    fail("line contains doubled spaces");
  }
  for (const ch of line) {
    const code = ch.codePointAt(0);
    if (code > 127) {
      fail(`line contains non-ASCII character ${JSON.stringify(ch)}`);
    }
  }
  if (!/[.!?]$/.test(line)) {
    fail("line must end with terminal punctuation (. ! ?)");
  }
}

function main() {
  validateLine(LINE);

  const outDir = resolve(process.env.MAKEFUN_OUTPUT_DIR || "/output");
  mkdirSync(outDir, { recursive: true });

  const outPath = join(outDir, "entry.txt");
  // No trailing newline: write the exact bytes of the line only.
  writeFileSync(outPath, LINE, "utf8");

  // Read back and verify byte-identical content.
  const roundTrip = readFileSync(outPath, "utf8");
  if (roundTrip !== LINE) {
    fail("read-back content differs from the entry line");
  }

  console.log(LINE);
  console.log(`wrote ${LINE.length} chars to ${outPath} (no trailing newline)`);
}

main();
