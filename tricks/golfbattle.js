var inputArray = [];
let middleArray = [[], [], [], []];

for (let i = 0; i < 10; i++) {
  inputArray.push(1 + parseInt(Math.random()*10, 10))
}

inputArray.sort((a, b)=>{
  return a-b;
});
console.log(inputArray);
for (let i = 0; i <= 2; i++) {
  let firstelement = inputArray[0];
  let lastIndex = inputArray.lastIndexOf(firstelement);
  	for (let j = 0; j <= lastIndex; j++) {
    	middleArray[i].push(firstelement);
    }

  
  inputArray.splice(0, middleArray[i].length);
  let winners = middleArray[0].length + middleArray[1].length + middleArray[2].length;
  if (winners >= 3) { break; }
}

for (let i = 0; i <= 3; i++) {
 	if (typeof middleArray[i] != "undefined" && middleArray[i].length == 0) {
    	middleArray.splice(i, 3);
	}
}

middleArray.push(inputArray);

console.log(middleArray);