const person={
    fname:"John",
    lname:"Drew",
    age:31,
};
function agein(personobj,callback){
    const fullname=`${personobj.fname} ${personobj.lname}`;
    const agein=personobj.age*365;
}
function logresult(fullname,agein){
    console.log(`The name of the person is ${fullname} and his age is ${agein}`);
}
agein(person,logresult);