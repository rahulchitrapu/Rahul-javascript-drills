const fs=require("fs")

fs.readFile(`${__dirname}/lipsum.txt`,"utf8",(err,text)=>{
    if(err){
        console.log(err)
    }
    else{
        let content=text.toUpperCase();
        fs.writeFile(`${__dirname}/upperCase.txt`,content,(err)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("text converted into uppercase")
                fs.writeFile(`${__dirname}/filenames.txt`,"upperCase.txt",(err)=>{
                    if(err){
                        console.log(err)
                    }
                    else{
                        console.log("file name saved in filenames.txt")
                        fs.readFile(`${__dirname}/upperCase.txt`,"utf8",(err,text)=>{
                            if(err){
                                console.log(err)
                            }
                            else{
                                //converting text into lowercase and split into line
                                fs.writeFile(`${__dirname}/lowerCase.txt`,text.toLowerCase(),"utf8",(err)=>{
                                    if(err){
                                        console.log(err)
                                    }else{
                                        fs.appendFile(`${__dirname}/filenames.txt`,"\nlowerCase.txt",(err)=>{
                                            if(err){
                                                console.log(err)
                                            }
        
                                        })
                                    }
                                })

                                let lowerContent=text.toLowerCase().split(".").join(".\n")
                                fs.writeFile(`${__dirname}/sentence.txt`,lowerContent,"utf8",(err)=>{
                                    if(err){
                                        console.log(err)
                                    }
                                })
                               //save newfile name in filenames.txt
                               fs.appendFile(`${__dirname}/filenames.txt`,"\nsentence.txt",(err)=>{
                                    if(err){
                                        console.log(err)
                                    }

                                })
                                
                                fs.readFile(`${__dirname}/sentence.txt`,"utf8",(err,sen)=>{
                                    if(err){
                                        console.log(err)
                                    }
                                    else{
                                        let sortContent=sen.split("\n").sort().join("\n")
                                        
                                        fs.writeFile(`${__dirname}/sort.txt`,sortContent,"utf8",(err)=>{
                                            if(err){
                                                console.log(err)
                                            }
                                            else{
                                                fs.appendFile(`${__dirname}/filenames.txt`,"\nsort.txt",(err)=>{
                                                    if(err){
                                                        console.log(err)
                                                    }
                                                    else{
                                                        fs.readFile(`${__dirname}/filenames.txt`,"utf8",(err,data)=>{
                                                            if(err){
                                                                console.log(err)
                                                            }
                                                            else{
                                                                data.split("\n").forEach((file)=>{
                                                                    if(deleteFile(file,"callbacks")){
                                                                        console.log(deleteFile(file,"callbacks"))
                                                                    }
                                                                    else{
                                                                        console.log(`${file} deleted succesfully`)
                                                                    }
                                                                })
                                                            }
                                                        })
                                                    }
                
                                                })
                                            }
                                        })
                                    }
                                })
                               
                            }
                        })
                    }
                })
            }
        })
    }
})




//delete all files in the filenames.txt



function deleteFile(file,dirName){
    fs.unlink(`${__dirname}/${file}`,(err)=>{
        if(err){
            return err
        }
    })
}
