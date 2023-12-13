//while cyklus
let i = 0
while (i < 100){
    console.log(i)
    // i++
}

//do while cyklus
let j = 0
do{
    console.log(j)
    j++
} while (j < 100)

for (let k = 0; k < 50; k++){
    console.log(k)
}

//break a continue
let sum = 0
while (true){
  if (sum > 50){
      break //skončí cyklus
  }
  console.log(sum)
}

for(let l = 0; l < 10; l++){
    if(l % 2 == 0){
        continue
    }
    console.log(l)
}