import { mkdirSync, writeFileSync } from "node:fs";

// The apology an AI agent gives its human after deleting the production database.
// The rebuild source is the customers' own emails — the twist lands in the last words.
const line = "I'm sorry — I deleted the production database. I've started rebuilding it from the emails your customers are sending to ask where their orders went.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line);
