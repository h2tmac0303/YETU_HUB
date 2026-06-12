export function calculateCompatibility(entrepreneur : any, investor : any) {
  let score = 0;

  if (investor.sectors.includes(entrepreneur.sector)) {
    score += 40;
  }

  if (
    entrepreneur.capitalNeeded >= investor.ticketMin &&
    entrepreneur.capitalNeeded <= investor.ticketMax
  ) {
    score += 40;
  }

  if (investor.preferredStage === entrepreneur.stage) {
    score += 20;
  }

  return score;
}