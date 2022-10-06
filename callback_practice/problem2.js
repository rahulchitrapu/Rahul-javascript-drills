
//solution for 0.2 delete both file simultaneously
const fs=require("fs")
let deleteArr=["rahul.json","cp_rahul.json"]

fs.readdir(__dirname,"utf8",(err,files)=>{
    if(err){
        console.log(err)
    }
    files.forEach((file)=>{
        if(deleteArr.includes(file)){
            if(deleteFile(file)){
                console.log(deleteFile(file))
            }
            else{
                console.log(`${file} deleted succesfully`)
            }
        }
    })
})

function deleteFile(file){
    fs.unlink(`${file}`,(err)=>{
        if(err){
            return err
        }
    })
}