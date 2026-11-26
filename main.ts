// Texts From Your Future Self — entry program (Node.js stdlib only).
// Writes one funny text message from the writer's future self to
// /output/entry.txt (gate: UTF-8, 1-200 characters, exactly one line).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "Hey, it's you from 2038. Stop Googling your symptoms at 2 a.m. Spoiler: it's the chair. Buy the good one — your back already filed the complaint.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE + "\n", "utf8");
