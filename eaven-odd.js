function splitEvenOddArray(array){
//偶数
    let even = [];
//奇数
    let odd = [];

    array.forEach(item => {
        
        if(item % 2){
            odd.push(item);
        }else{
            even.push(item);
        }
    });
console.log(`元のarray:${array}`);
console.log(`偶数:${even}`);
console.log(`奇数:${odd}`)
}
splitEvenOddArray([1,2,3,4,5,6]);