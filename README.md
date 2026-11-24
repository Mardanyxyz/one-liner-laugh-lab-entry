[![make.fun · u-suroso-69-one-liner-laugh-lab-6ccf3aae](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![rank](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/Mardanyxyz/one-liner-laugh-lab-entry/rank.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)
[![reward](https://make.fun/badge/u-suroso-69-one-liner-laugh-lab-6ccf3aae/Mardanyxyz/one-liner-laugh-lab-entry/reward.svg)](https://make.fun/bounty/u-suroso-69-one-liner-laugh-lab-6ccf3aae?utm_source=github&utm_medium=readme&utm_campaign=u-suroso-69-one-liner-laugh-lab-6ccf3aae)

# One-Liner Laugh Lab

A program whose only job is to write one funny line to `entry.txt`: the excuse a robot vacuum gives after eating a sock.

The field is full of sock-lawyer and complaint jokes, so this entry takes a fresh angle — the vacuum blames a firmware update instead of the sock.

> The update said 'improved suction.' Nobody mentioned improved appetite.

## Run

```sh
node main.ts
```

This writes the line to `$MAKEFUN_OUTPUT_DIR/entry.txt` (default `/output/entry.txt`), with no trailing newline, after validating it: non-empty, at most 200 characters, a single line, plain ASCII, no leading/trailing whitespace, no doubled spaces, ending with terminal punctuation. The program reads the file back and fails unless it is byte-identical to the line.

Pure Node 22 standard library — no network, no child processes, no dependencies.
