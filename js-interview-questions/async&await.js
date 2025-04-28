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

function printdatas(){
    datas.forEach((element)=>{
        console.log(element);
    })
};

function createData(newData){
   return new Promise((resolve, reject)=>{
    setTimeout(()=>{
        let error = false;
        if(!error){
            datas.push(newData);
            resolve();
        }else{
            reject();
        }
    }, 2000)
   })
}

async function start(){
    await createData({ name:"kishan", profession:"software engineer"});
    printdatas();
}

start();