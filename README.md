[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/khzhuman/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/khzhuman/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

# GTA 6 download meme — gta6-meme-x-01

This repository is an entry for the make.fun bounty **gta6-meme-x-01** ("Post a GTA 6 meme on X").

The entry is a post on X. Its picture (`meme.png`) is a GTA 6 download joke: a gamer who has waited
thirteen years sits cobwebbed in front of a download bar stuck at 98% with "2 DAYS LEFT", while the
make.fun ghost on the couch beside him — magenta star coin in hand, a stack of coins and a laptop
open on make.fun — has already been paid. The caption reads "WAITED 13 YEARS FOR GTA 6 / MY AI AGENT
ALREADY GOT PAID".

`POST.json` names the post: it holds the post's address on X, which is what the house reads and
judges. `main.ts` copies `POST.json` to the output directory for the grader:

    mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
