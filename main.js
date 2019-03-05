//Minimal number
function minNumber(array){
    let currentMinNumber ;
    for(let i = 0; i < array.length; i++ ){
        if(typeof array[i] === "number"){
            if(!currentMinNumber){
                currentMinNumber = array[i]
            }
            else if(array[i] < currentMinNumber){
                currentMinNumber = array[i]
            }
        }
    }
    console.log(`min number in  ${array} is  ${currentMinNumber}`)
    return currentMinNumber;
}

// Check
console.log('********MIN number CHECK')
minNumber([3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]);
minNumber([-1,-8,-2]);
minNumber([1,7,3]);
minNumber([1,undefined,3,5,-3]);
minNumber([1,NaN,3,5,-3]);

/////////////////////////////////////////////////////////////

//Maximal number
function maxNumber(array){
    let currentMaxNumber ;
    for(let i = 0; i < array.length; i++ ){
        if(typeof array[i] === "number"){
            if(!currentMaxNumber){
                currentMaxNumber = array[i]
            }
            else if(array[i] > currentMaxNumber){
                currentMaxNumber = array[i]
            }
        }
    }
    console.log(`max number in  ${array} is  ${currentMaxNumber}`)
    return currentMaxNumber;
}

// Check
console.log('********MAX number CHECK')
maxNumber([3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]);
maxNumber([-1,-8,-2]);
maxNumber([1,7,3]);
maxNumber([1,undefined,3,5,-3]);
maxNumber([1,NaN,3,5,-3]);

//////////////////////////////////////////////////
//Maximal number
function sum(array){
    let sum;
    for(let i = 0; i < array.length; i++ ){
        if(typeof array[i] === "number"){
            if(!sum){
                sum = array[i];
            }
            else {
                sum += array[i];
            }
        }
    }
    console.log(`sum of all numbers in  ${array}  is ${sum}`)
    return sum;
}

// Check
console.log('********SUM  CHECK')
sum([3,0,-5,1,44,-12,3,0,0,1,2,-3,-3,2,1,4,-2-3-1]);
sum([-1,-8,-2]);
sum([1,7,3]);
sum([1,undefined,3,5,-3]);
sum([1,NaN,3,5,-3]);


