let arr=[10,20,[30,[50,[70,80,90],60],40],100];

Array.prototype.myFlat=function(cb) {
    
    let res=[];

    for(let i=0;i<this.length;i++)
    {
        res=cb(this[i]);
    }
}

function myFlat(arr) {
    
}

// myFlat(arr);

