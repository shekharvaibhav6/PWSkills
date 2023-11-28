const { log } = require('console');
const fs=require('fs');
//Code for Assignment 3 below
fs.readFile('node_architecture.txt',(err,content)=>{
    if(err){
        console.log(err);
    }else{
        console.log(content.toString());
    }
});

//Code for Assignment 04 below
fs.appendFile('node_architecture.txt','Node.js leverages the V8 JavaScript runtime engine developed by Google, providing fast execution of code. Its package manager, npm (Node Package Manager), is one of the largest ecosystems of open-source libraries, enabling developers to easily integrate pre-built modules into their projects.As a result of these features, Node.js has gained widespread popularity in the development community. It has become a go-to choice for building server-side applications and APIs, contributing to the growth of JavaScript as a full-stack language. Whether used for building RESTful APIs, microservices, or real-time applications, Node.js has proven to be a valuable platform for modern web development.',(err)=>{
    if(err){
        console.log(err);
    }else{
        console.log("Sucessfully appended");
    }
});

