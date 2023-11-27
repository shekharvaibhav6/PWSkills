function doublearr(arr,callback){
    const doublenew=arr.map((num)=>{
        return callback(num);
    });
    return doublenew;
}
const originalarr=[27,35,44,67];
function callback(num){
    return num*2;
}
const doublearr=doublearr(originalarr,callback);
console.log(doublenew);