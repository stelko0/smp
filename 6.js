function goldMine(input) {
  let location = Number(input);

  let avgMinedGold = 0;
  let daysMine = 0;
  let currentDay = 0;
  let minedGold = 0;

  for (let i = 1; i < input.length; i++) {
    if (currentDay === daysMine) {
      if (i - 1 > 1) {
        if (minedGold / daysMine >= avgMinedGold) {
          console.log(
            `Good job! Average gold per day: ${(minedGold / daysMine).toFixed(2)}.`
          );
        } else {
          console.log(
            `You need ${avgMinedGold - (minedGold / daysMine).toFixed(2)} gold.`
          );
        }
      }

      avgMinedGold = Number(input[i]);
      i++;
      daysMine = Number(input[i]);
      currentDay = 0;
      minedGold = 0;
    } else {
      minedGold += Number(input[i]);
      currentDay++;
    }
  }
  if (minedGold / daysMine >= avgMinedGold) {
    console.log(
      `Good job! Average gold per day: ${(minedGold / daysMine).toFixed(2)}`
    );
  } else {
    console.log(
      `You need ${avgMinedGold - (minedGold / daysMine).toFixed(2)} gold.`
    );
  }
}

goldMine(["2", "10", "3", "10", "10", "11", "20", "2", "20", "10"]);
