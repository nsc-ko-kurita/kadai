//フィボナッチ
function fibo(suu){
    var a = [];
    if(suu>0){
        for (let index = 0; index <= suu; index++) {
           if(a[index - 2] + a[index - 1] > suu){
                break;
           }
           if(index == 0){
                a.push(1);
           }else if( index == 1){
                a.push(0+a[index - 1]);
           }else{
                a.push(a[index-2]+a[index-1]);
           }
    }
    }
    return a;
}
console.log(fibo(10));