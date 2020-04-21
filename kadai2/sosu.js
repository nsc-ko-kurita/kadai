function sosu (num) {
    if(num == 2) {
        return '素数です';
    } else {
        for(i = 2; i < num; i++) {
            if(num % i == 0) {
                return '素数ではない';
                break;
            }
            if(i + 1 == num) {
                return '素数です';
            }
        }
    }
}


console.log(sosu(6)) ;
console.log(sosu(2));