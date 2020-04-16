function checkNumber(number) {
    if(number % 2){
        return '奇数です'
    }else{
        return '偶数です'
    }
}

//コンソールに「奇数です」と表示される
console.log(checkNumber(5));　

//コンソールに「偶数です」と表示される
console.log(checkNumber(2));