let arr = [5, 10, 15, 20, 25, 30]

//pv=previous value, cv=current value, ci=current index

//by default the previous value is the "first" element of the array.
let ans = arr.reduce((pv, cv, ci, oarr) => {
    console.log(pv + "-" + cv + "-" + ci);
    return pv + cv;
});

console.log(ans);

//we can pass the starting previous value, after the callback function body
let sans = arr.reduce((pv, cv, ci, oarr) => {
    console.log(pv + "-" + cv + "-" + ci);
    return pv + cv;
}, 5); //5=>here 5 is the initial value, so the previous value will become pv=5;

console.log(sans);



//Custom reduce
let myarr = [5, 10, 15, 20, 25, 30]

Array.prototype.myReduce = function (cb, iv) {

    let i = 0;
    let pv = 0;
    let oarr = this;

    if (iv == undefined) {
        pv = oarr[0];
        i = 1;
    } else {
        pv = iv;
        i = 0;
    }

    for (; i < oarr.length; i++) {
        let cv = oarr[i];
        pv = cb(pv, cv, i, oarr);
    }
    return pv;
}

let myans = myarr.myReduce((pv, cv, ci, oarr) => {
    console.log(pv + "-" + cv + "-" + ci);
    return pv + cv;
}, 5);

console.log(myans);