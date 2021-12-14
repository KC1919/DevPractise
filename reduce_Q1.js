// Q) Count number of prime numbers on the given array using reduce function

let arr = [51, 23, 37, 44, 73, 82, 97, 75]

let ans = arr.filter((val, ind, oarr) => check(val)).reduce((pv, cv) => {
    return pv + 1;
}, 0);

console.log(ans);

function check(num) {

    let f = 0;

    for (let i = 1; i <= num / 2; i++) {
        if (num % i == 0)
            f++;
    }

    if (f == 1)
        return true;
    else
        return false;
}