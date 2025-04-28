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

function createData(newdata, callbackfunc)
{
    setTimeout(()=>{
        datas.push(newdata);
        callbackfunc();
    }, 2000);
}

createData({
    name: "kishan",
    profession: "software engineer"
}, printdatas);