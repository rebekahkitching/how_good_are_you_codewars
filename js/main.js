
// first attempt, realized needed t/f
const scores = [76, 83, 67, 95, 67, 78, 75, 88, 92, 90]
function betterThanAverage(scores) {
  const total = scores.reduce((acc,c) => acc+c,0);
  return total / scores.length;
}
const average = betterThanAverage(scores);
console.log(average)



// second attempt
function betterThanAverage(classPoints,yourPoints) {
    var classAvg = 0;
    for (var index = 0; index < classPoints.length; index = index + 1){
      classAvg += classPoints[index];
    }
    classAvg = classAvg/classPoints.length; 
    return yourPoints > classAvg; 
  }
  