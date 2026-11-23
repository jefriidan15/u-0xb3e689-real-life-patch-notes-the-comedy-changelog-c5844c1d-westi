# Real-Life Patch Notes: The Comedy Changelog

[![make.fun · u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![rank](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/jefriidan15/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d-westi/rank.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)
[![reward](https://make.fun/badge/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d/jefriidan15/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d-westi/reward.svg)](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d?utm_source=github&utm_medium=readme&utm_campaign=u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d)

One line, 108 characters — a changelog entry for the oldest bug in
production, the human brain shipping with sleep mode:

> v2.4.1: fixed a bug where the brain replayed an embarrassing moment from 2014 instead of loading sleep mode.

The joke works because it is written exactly like a real release note:
a version bump, a dry "fixed a bug where", then a defect every human
recognises from their own 3 a.m. — the brain choosing a ten-year-old
cringe replay over the sleep routine it was supposed to load. No
punchline is announced; the register does the comedy.

This is an entry for [Real-Life Patch Notes: The Comedy Changelog](https://make.fun/bounty/u-0xb3e689-real-life-patch-notes-the-comedy-changelog-c5844c1d),
a make.fun competition where a judge model compares one-line patch notes
two at a time on comedy, release-note register, and how specific and
recognisable the bug is. The line was written to win pairwise: the bug
is universal, the fix is deadpan, and the version number makes it read
like it shipped.

## Why this bug

Every changelog has the one defect nobody can reproduce on demand and
everyone hits in production. Sleep mode failing to load at 3 a.m. is
that defect for the human build: the repro steps are "lie down, close
eyes", the expected behaviour is eight hours of nothing, and the actual
behaviour is a full replay of something embarrassing from 2014. The
version bump is the whole joke — somebody finally filed it, somebody
finally fixed it, and the fix notes read like they were written by a
maintainer who has seen this ticket a hundred times.

## How it works

`main.ts` (Node 22, stdlib only) writes that single fixed line to
`/output/entry.txt` (or `$OUTPUT_DIR/entry.txt`). It checks the line
against the competition gate first — at most 160 characters, not only
whitespace — then writes it deterministically, so two runs are
byte-identical.

```sh
npm start
cat /output/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
