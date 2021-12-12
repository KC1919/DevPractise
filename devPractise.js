// push appends 1 or more values at the end of array
// push returns the new length of array

let arr = [20, 30, 80, 100, 40];
displayArray(arr);

arr.push(1000);
displayArray(arr);

arr.push(2000, 3000, 4000);
displayArray(arr);

let rv = arr.push(5000, 6000);  //appends elements in the array and return new length of the array
displayArray(arr);
console.log(rv);

function displayArray(arr){
    console.log(arr + " = " + arr.length);
}

// --------------------------------------------------

// unshift and shift (just like push and pop, but unshift adds the element to the front 
//of the array and shift removes an element from front of the array)

let a=[1,5,8,6,3,7,4];

let b=[];

for(let i=0;i<a.length;i++)
{
    if(a[i]%2==0)
    b.unshift(a[i]);

    else
    b.push(a[i]);
}

console.log(b);

// ----------------------------------
// Slice() and Splice()

// let c=[1,2,3,4,5]

// for(let i=0;i<c.length;i++)
// {
//     for(let j=i+1;j<=c.length;j++)
//     {
//         console.log(c.slice(i,j));
//     }
// }

let d=[1,5,7,13,6,9,4,29]

console.log(d);

for(let i=0;i<d.length;i++)
{
    if(checkPrime(d[i])==true)
    {
        d.splice(i,1);
    }
}

console.log(d);

function checkPrime(num) {
    
    let f=0;
    for(let i=1;i<=num;i++)
    {
        if(num%i==0)
        f++;
    }

    if(f==2)
    return true;
    
    else
    return false;
}
