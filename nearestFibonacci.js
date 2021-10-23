function numberArray (arr){
    let result = 0
    for(let i = 0; i < arr.length; i++){
        result += arr[i]
    }
    
    nearestFibonacci(result)
}

function nearestFibonacci(num)
{
    if (num == 0) {
        console.log(0);
        return;
    }
    let first = 0, second = 1;

    let third = first + second;

    while (third <= num) {
        first = second;
        second = third;
        third = first + second;
    }

    let ans = (Math.abs(third - num)
               >= Math.abs(second - num))
                  ? second
                  : third;
    console.log(ans);
}

let number = [1,2,3,4,5]

console.log(numberArray(number))