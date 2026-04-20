export type Intent = "client" | "candidate" | "unknown";

export function detectIntent(input: string): Intent {
  const text = input.toLowerCase();

  // candidate keywords
  const candidateKeywords = [
    "job",
    "apply",
    "career",
    "position",
    "intern",
    "cv",
    "resume",
    "looking for job",
    "join your team",
  ];

  // client keywords
  const clientKeywords = [
    "hire",
    "hiring",
    "need developer",
    "need team",
    "build team",
    "project",
    "outsource",
    "support",
    "looking for developer",
  ];

  if (candidateKeywords.some((k) => text.includes(k))) {
    return "candidate";
  }

  if (clientKeywords.some((k) => text.includes(k))) {
    return "client";
  }

  return "unknown";
}
