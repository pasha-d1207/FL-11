let A = +prompt('Enter the length of side A of the triangle');
let B = +prompt('Enter the length of side B of the triangle');
let C = +prompt('Enter the length of side C of the triangle');

if (A && B && C > 0) {
    if (A < B + C &&
        B < A + C &&
        C < A + B) {
        if (A === B && B === C && C === A) {
            console.log('Equivalent triangle');
        } else if (A === B || B === C || C === A) {
            console.log('Isosceles triangle');
        } else {
            console.log('Normal triangle');
        }
    } else {
        console.log('Triangle doesn’t exist');
    }
} else {
    console.log('Triangle doesn’t exist');
}