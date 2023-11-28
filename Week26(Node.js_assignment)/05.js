// Code for Assignment 5 below
const fs=require('fs');
fs.unlink('node_architecture.txt',(err)=>{
    if(err){
        console.log('Error in deleting file');
    }else{
        console.log('File Deleted Successfully');
    }
})