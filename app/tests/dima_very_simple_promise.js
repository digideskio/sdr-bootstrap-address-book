/**
 * Created by DMedzatiy on 15-Aug-16.
 */

let a = [];

function fillArray(a) {

    for (i = 0; i < 50000; i++) {
        a[i] = Math.random();
    }

}

function sort(arr) {

    let temp;
    for (i = 0; i < arr.length; i++) {
        for (j = i; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }

}


function arrayWork(array) {

    return new Promise(function (resolve, reject) {

        fillArray(array);
        if (array.length > 0) {
            resolve(array);
        }
        else {
            reject("Nope");
        }
    });
}

arrayWork(a)
    .then(
        result => {
            console.log("First promise: ", result);
            console.log("Sorting.....");
            sort(result);
            const newArray = result.map(x => Math.trunc(x * 100));
            return newArray;
        },
        error => {
            return error;
        }
    )
    .then(
        result => {
            console.log("Second promise results: " + result);
            let newArr = result.filter(x => x > 50);
            return newArr;
        },
        error => {
            return error;
        }
    )
    .then(
        result => console.log("Third promise: " + result),
        error => console.log("Ups" + error)
    );