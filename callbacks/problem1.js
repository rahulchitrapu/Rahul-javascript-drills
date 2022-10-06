const fs=require("fs")

fs.mkdir("./randomfiles",(err)=>{
    if(err){
        console.log(err)
    }
    else{
        fs.writeFile(`${__dirname}/randomfiles/r${Math.random()}.json`,JSON.stringify({name:"rahul",suraname:"chitrapu"}),(err)=>{
            if(err){
                console.log(err)
            }else{
                fs.readdir(`${__dirname}/randomfiles`,"utf8",(err,files)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        files.forEach(file=>{
                            if(deleteFile(file,"randomfiles")){
                                console.log(deleteFile(file,"randomfiles"))
                            }
                            else{
                                console.log(`${file} is deleeted succesfully`)
                            }
                        })
                    }
                })
            }
        })
        
    }
})







function deleteFile(file,dirName){
    fs.unlink(`${__dirname}/${dirName}/${file}`,(err)=>{
        if(err){
            return err
        }
    })
}




