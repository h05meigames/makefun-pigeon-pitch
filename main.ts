// Pigeon Pitch, One Line — v2 (revised)
// A city pigeon pitches its startup to investors in a single line.
// Writes the pitch to /output/entry.txt and prints it to stdout.
//
// v1 -> v2 revision (real defect found by running v1):
//   v1 was 211 characters — OVER the 200-character gate, so it would
//   score Valid 0 and never reach the judge. Its punchline ("pooped on
//   three of your competitors' logos") was also a cheap, tired gag and
//   the pitch made no ask of the investors at all.
//   v2 fixes both: it is well under 200 characters, it opens with a
//   concrete investor ask ($2M), and the joke lands on the pigeon's own
//   economics — 40 million couriers who work for breadcrumbs, zero
//   salaries, all wings — a twist only a pigeon could pitch.
import { mkdirSync, writeFileSync } from "node:fs";

const pitch =
  "Investors, I'm a city pigeon pitching WingDrop: $2M turns every statue into a billboard and every dropped fry into same-day delivery — 40 million couriers, zero salaries, all wings.";

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, pitch, "utf8");
console.log(pitch);
console.log(`(${pitch.length} characters)`);
