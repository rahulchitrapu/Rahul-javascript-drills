const fs = require("fs");

fs.readFile("./rahul3.json","utf-8",(err, data)=>{
if(err){
    console.log(err);
}else{
    
    fs.appendFile(`./cp_rahul3.json`, data, "utf-8", (err)=>{
        if(err){
            console.log(err)
        }else{
            fs.unlink("./rahul3.json", (err)=>{
                if(err){
                    console.log(err)
                }else{
                    fs.unlink(`./cp_rahul3.json`, (err)=>{
                        if(err){
                            console.log(err);
                        }else{
                            console.log("task done");
                        }
                    })
                }
            })
        }
    })
}
});

