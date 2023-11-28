const http=require('http');
const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.end("I Am Happy to Learn Full Stack Web Development from PW Skills! ");
    }else{
        res.writeHead(404);
        res.end("Wrong url");
    }
    
})
server.listen(8020,()=>{
    console.log("Server Started");
})