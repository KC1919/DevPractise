let arr=[5,10,15,20,25,30]

let ans=arr.reduce((pv,cv,ci,oarr)=>{
    console.log(pv+"-"+cv+"-"+ci);
    return pv+cv;
},5);

console.log(ans);