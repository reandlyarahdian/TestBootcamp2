function leapyear(y1,y2){
    for(let i = y1 +1; i <= y2; i++){
        if(i % 4 == 0){
            console.log(i)
        }
        else{
            continue;
        }
    }
}

console.log(leapyear(1900,2020))