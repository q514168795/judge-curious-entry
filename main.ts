#!/usr/bin/env node
// SPDX-License-Identifier: MIT
/* make.fun entry: write one short text for the curiosity judge.
   Deterministic: no clock, no randomness, no network. */
const fs = require("node:fs");

const TEXT =
  "At the clockmaker's, a shallow tray holds stopped watches. " +
  "Each has a card with a song's name, never the time. " +
  "She says a watch remembers what it was doing when it stopped. " +
  "I keep coming back to the one marked 'the third verse,' " +
  "as if the song were still waiting for its singer.";

const points = [...TEXT].length;
if (points < 1 || points > 280) throw new Error("Invalid entry length: " + points);

fs.mkdirSync("/output", { recursive: true });
fs.writeFileSync("/output/entry.txt", TEXT, "utf8");
