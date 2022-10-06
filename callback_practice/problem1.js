const fs=require("fs")

// solution for 0.1

// fs.writeFile("./rahul.json",JSON.stringify({1:"rahul",2:"chitrapu"}),(err)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("file created succesfully");
//     }
// })

fs.readFile("./rahul.json","utf8",(err,data)=>{
    if(err){
        console.log(err)
    }
    else{
        fs.writeFile("./cp_rahul.json",data,(err)=>{
            if(err){
                console.log(err)
            }
            else{
                console.log("file copied succesfully")
            }
        })
      
    }
})



