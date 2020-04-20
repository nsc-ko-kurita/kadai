//昇順
var a = [1,3,10,2,8];

//調べる範囲の開始位置を１つずつ後ろへ移動するfor文
for(var i = 0; i < a.length; i++){
    //後ろから前に向かって小さい値を浮かび上がらせるfor文
    for(var j = a.length-1; j>i ; j-- ){
        //隣りあう２つの値を比べて、後ろが小さければ交換する
        if(a[j]<a[j-1]){
            var tmp = a[j];
            a[j] = a[j-1];
            a[j-1] =tmp;
        }
    }
}
//ソート後の配列の表示
console.log(a);


//降順
var b = [1,3,10,2,8];

//調べる範囲の開始位置を１つずつ後ろへ移動するfor文
for(var i = 0; i < b.length; i++){
    //後ろから前に向かって大きい値を浮かび上がらせるfor文
    for(var j = b.length-1; j>i ; j-- ){
        //隣りあう２つの値を比べて、後ろが大きければ交換する
        if(b[j]>b[j-1]){
            var tmp = b[j];
            b[j] = b[j-1];
            b[j-1] =tmp;
        }
    }
}
//ソート後の配列の表示
console.log(b);