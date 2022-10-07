const fs=require("fs").promises

const promise=fs.readFile(`${__dirname}/sample.json`,"utf8")



const makingDir=fs.mkdir(`${__dirname}/files`)

makingDir.then(()=>{
    console.log("file is created")
    return promise
    
})
.then((data)=>{
    console.log("read file succesfully")
    let i=10;
    let arr=[]
    while(i>0){
       arr.push(fs.writeFile(`${__dirname}/files/r${Math.random()}.json`,data,"utf8"))
        i--;
    }
    return Promise.all(arr)
})
.then(()=>{
    console.log("write file completed")

    return fs.readdir(`${__dirname}/files`,"utf8")
})
.then((data)=>{
    let darr=[]
    data.forEach((file)=>{
       darr.push(fs.unlink(`${__dirname}/files/${file}`))
    })
   return Promise.all(darr)
}).then(()=>{
    console.log("all files deleted")
})
.catch(err=>{
    console.error(err)
})