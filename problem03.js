function electionResult(votes) {
  if (!Array.isArray(votes)) return "Invalid";
  let countMango = 0;
  let countBanana = 0;
  for (let vote of votes) {
    if (vote === "mango") countMango++;
    else if (vote === "banana") countBanana++;
  }
  if (countMango > countBanana) return "Mango";
  if (countBanana > countMango) return "Banana";
  return "Draw";
}

const voterName = electionResult(["mango", "BananA", "na vote", "na vote"]);
console.log(voterName);
