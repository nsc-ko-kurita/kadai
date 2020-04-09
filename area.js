/*
 * 四角の面積を計算してください。
 *
 * length: 縦の長さ
 * width: 横の長さ
 */
function getArea(length, width) {
    let area;
    area = length * width;
    return area;
}
console.log(getArea(6,5));
/**
 * 四角の周囲を計算してください。
 *
 *
 * length: 縦の長さ
 * width: 横の長さ
 */
function getPerimeter(length, width) {
    let perimeter;
    perimeter = (length + width) * 2;
    return perimeter;
}
console.log(getPerimeter(6,5));