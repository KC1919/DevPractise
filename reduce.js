let arr=[5,10,15,20,25,30]

//pv=previous value, cv=current value, ci=current index

//by default the previous value is the first element of the array.
let ans=arr.reduce((pv,cv,ci,oarr)=>{
    console.log(pv+"-"+cv+"-"+ci);
    return pv+cv;
});

//we can pass the starting previous value, after the callback function body 

console.log(ans);