function fizzbuzz(n){
    for(let i; i <= n ; i++){
        if(i % 3 == 0){
            console.log('fizz')
        }
        else if(i % 5 == 0){
            console.log('buzz')
        }
        else if(i % 3 == 0 && i % 5 == 0){
            console.log('fizzBuzz')
        }
        else{
            console.log(i)
        }
    }
}

console.log(fizzbuzz(15))