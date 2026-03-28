function analyze(scores = []) {
  return scores.filter(s => s >= 70).length;
}
analyze();