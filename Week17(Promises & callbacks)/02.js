function mString(istring,callback){
    const mStringnew=istring.toUpperCase();
    callback(mStringnew);
}
function logstring(mStringnew){
    console.log("Manipulated string is :"+mStringnew);
}
mString("Hello Everyone",logstring);