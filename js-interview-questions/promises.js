var datas = [
    {
        name:"ajay",
        profession:"Software engineer"
    },
    {
        name:"vivek",
        profession:"software engineer"
    }
];

function printdatas()
{
    datas.forEach(element => {
        console.log(element);
    });
}

function createData(newdata){
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            let error = false;
            if(!error){
                datas.push(newdata);
                resolve();
            }else{
                reject();
            }
        },1000)
    })
}

createData({name:"kishan", profession:"software engineer"}).then(printdatas).catch( err => console.log(err));