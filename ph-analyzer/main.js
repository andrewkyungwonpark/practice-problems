function phAnalzyer(pH) {
  if (pH < 7) {
    return 'acidic';
  } else if (pH===7) {
    return 'neutral';
  } else if (pH>7 && pH<13) {
    return 'alkaline';
  } else {
    return 'invalid pH value';
  }
};
