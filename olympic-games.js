//オリンピックが初めて開催された年
let startYear = 1896;

function gameYears(year) {
    //startYear　からyearまでのオリンピック開催年を
    for (let index = startYear; index <= year; index = index + 4) {
        console.log(index);
    }
    //console.logを使って表示する。
}

gameYears(2020);