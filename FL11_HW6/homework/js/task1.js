const x1 = +prompt('Enter the coordinates X of point A');
const y1 = +prompt('Enter the coordinates Y of point A');
const x2 = +prompt('Enter the coordinates X of point B');
const y2 = +prompt('Enter the coordinates Y of point B');
const x3 = +prompt('Enter the coordinates X of point C');
const y3 = +prompt('Enter the coordinates Y of point C');

let result;
const $divisionBy = 2;

let x_center = (x1 + x2) / $divisionBy;
let y_center = (y1 + y2) / $divisionBy;

if (x3 === x_center && y3 === y_center) {
    result = true;
} else {
    result = false;
}

console.log(result);