const http=require('http');

const PORT=5000;

const server=http.createServer((req,res)=>{
    if(req.url=='/'){
        res.statusCode=200;
        res.setHeader('Content-Type','text/plain');
        res.end('I am happy to learn Full Stack Web Development by PW Skills!!');
     }
    
});

server.listen(PORT,()=>{
    console.log(`server is listening at http://localhost:${PORT}`);
});