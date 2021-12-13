let arr = [{
        name: "Oil",
        price: 105
    },
    {
        name: "Soap",
        price: 100
    },
    {
        name: "Sugar",
        price: 45
    },
    {
        name: "Apple",
        price: 120
    },
    {
        name: "Sandwich",
        price: 75

    }
]

//return name in uppercase, whose price is greater than 100

let ans = arr.filter(p => {
    if (p.price > 100)
        return true;
    else
        return false;
}).map((v, i) => v.name.toUpperCase())

console.log(ans);

////return name in upperCase, if price is greater than 100 else return in lowerCase
let rans = arr.map((v, i) => {
    if (v.price <= 100)
        return v.name.toLowerCase();
    else
        return v.name.toUpperCase();
});

console.log(rans);


//Return cubes of the numbers whose squares are greater than 1000
let a = [5, 25, 89, 74, 56, 32, 14, 24, 17, 18]

let cans = a.filter(n => (n * n) >= 1000).map(v => v * v * v);

console.log(cans);