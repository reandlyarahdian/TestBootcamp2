function palindrome(str) {
    var re = /[\W_]/g;
    var lowRegStr = str.toLowerCase().replace(re, '');
    var reverseStr = lowRegStr.split('').reverse().join(''); 
    if(reverseStr === lowRegStr){
        return 'Palindrome'
    }else{
        return 'not Palindrome'
    }
}

console.log(palindrome('hidup'))