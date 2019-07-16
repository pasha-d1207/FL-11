/* Task 0 */
let numArray = [];
let getNumbers = (value) => {
    for (let i = 0; i < value.length; i++) {
        if (!isNaN(value[i])) {
            numArray.push(parseInt(value[i]));
        }

    }
    return numArray;
}

getNumbers('n1um3ber95');

/* Task 1 */

function findTypes() {
    let number = 0;
    let string = 0;
    let boolean = 0;
    let undef = 0;
    let object = 0;

    let listDataTypes = {}

    let arr = [...arguments];
    for (let i = 0; i < arr.length; i++) {
        switch (true) {
            case typeof arr[i] === 'number':
                listDataTypes.number = number + 1;
                break;
            case typeof arr[i] === 'string':
                listDataTypes.string = string + 1;
                break;
            case typeof arr[i] === 'boolean':
                listDataTypes.boolean = boolean + 1;
                break;
            case typeof arr[i] === 'undefined':
                listDataTypes.undefined = undef + 1;
                break;
            case typeof arr[i] === 'object':
                listDataTypes.object = object + 1;
                break;
            default:
        }

    }
    return listDataTypes;
}

/* Task 2 */

function executeforEach(inputArr, inputFunction) {
    for (let i = 0; i < inputArr.length; i++) {
        inputFunction(inputArr[i]);
    }
}

/* Task 3 */

function mapArray(inputArr, inputFunction) {
    let arr = [];
    executeforEach(inputArr, function (data) {
        let result = inputFunction(data);
        arr.push(result);
    });
    return arr
}

/* Task 4 */

function filterArray(inputArr, inputFunction) {
    let arr = [];
    executeforEach(inputArr, function (data) {
        let result = inputFunction(data);
        if (result === true) {
            arr.push(data);
        }
    });
    return arr
}

/* Task 5 */

function showFormattedDate(data) {
    const arrMonth = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

    let month = data.getMonth();
    let date = data.getDate();
    let year = data.getFullYear();
    return `Date: ${arrMonth[month]} ${date} ${year}`
}

/* Task 6  */


function canConvertToDate(data) {
    return new Date(data).toDateString() !== 'Invalid Date'
}

/* Task 7  */

function daysBetween(date1, date2) {
    const ms = 1000;
    const sec = 60;
    const min = 60;
    const hour = 24;

    let diffMs = date2 - date1;
    let diffDay = diffMs / ms / sec / min / hour;
    return Math.round(diffDay);
}

/* Task 8 */

function getAmountOfAdultPeople(data) {
    let result = 0;
    const dayIn18Year = 6570;
    filterArray(data, function (el) {
        if (el.hasOwnProperty('birthday')) {
            if (daysBetween(new Date(el.birthday), new Date()) >= dayIn18Year) {
                result++
            }
        }
    })
    return result
}

/* Task 9 */

function keys(data) {
    let keys = [];
    for (let key in data) {
        if ({}.hasOwnProperty.call(data, key)) {
            keys.push(key);
        }
    }
    return keys
}

/* Task 10 */

function values(data) {
    let value = [];
    for (let key in data) {
        if ({}.hasOwnProperty.call(data, key)) {
            value.push(data[key]);
        }
    }
    return value
}
