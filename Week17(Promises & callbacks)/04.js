const books=[
    {
        title:"The Great Gatsby",
        author:"F.Scott Fitzgerald",
        year:1925,
    },
    {
        title:"To kill a mockingbird",
        author:"Harper lee",
        year:1960,
    },
    {
        title:"Who are you?",
        author:"George well",
        year:1949,
    },
    {
        title:"Pride and Prejudice",
        author:"Jane Austen",
        year:1813,
    },
];
function logtitles(titles){
    titles.sort();
    console.log(titles.join(", "));
}
function extractTitles(books,callback){
    const titles=books.map((book)=>book.titles);
    callback(titles);
}
extractTitles(books,logtitles);