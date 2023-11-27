async function fetchData(){
    const res=await
    fetch("https://jsonplaceholder.typicode.com/todos/1");
    const data=await response.json();
    console.log(data);
}
fetchData();