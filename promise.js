var msg = "";

Priomise1 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        msg +="My"
        resolve(msg)
    },1000);
});

Priomise2 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        msg +="First"
        resolve(msg)
    },1000);
});

Priomise3 = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        msg +="Promises"
        resolve(msg)
    },1000);
});



function main() {

    Promise.all([Priomise1, Priomise2, Priomise3]).then(printResult=>{
        console.log(printResult)
    }).catch((err)=>{
        console.log(err)
    });
}

main();