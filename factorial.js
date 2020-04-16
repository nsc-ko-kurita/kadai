function factor(number){
    if(number == 0 || number == 1){
        return 1;
    }else if(number < 0 || number > 10){
        return '1から10までの数字を利用してください'

    }

        let result = 1;
            for(let counter = number; counter > 0; counter--){
                result = result * counter;
            }
            return result;
}

console.log(factor(4));
