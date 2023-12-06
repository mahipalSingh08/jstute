/*
problem
create post is more than time than get post so we need to introduce async
getposts run early so there is will no use of creatpost

solution: 2 promise

*/

const posts = [
    { title : "title one", body : "this is body one"},
    { title : "title two", body : "this is body two"}
];

function getPosts() {
    setTimeout(() => {
        let output = '';
        posts.forEach((post, index) => {
            output += `<li>${post.title}</li>`;
        });
        document.body.innerHTML = output;
    }, 1000);
}

//without promise return
// function createPost(post){
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000);
// }

//with promise return
function createPost(post){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);

            let error = false;

            if(!error){
                resolve();
            }else{
                reject('some error');
            }
        }, 2000);
    })
}


getPosts();
//without promise
//createPost({title : "title three", body : "this is body three"});

//with promise
createPost(
    {title : "title three", body : "this is body three"}
    )
    .then(getPosts)
    .catch(err => console.error(err));

//promise .all
const promise1 = Promise.resolve("first promise");
const promise2 = "some value";
const promise3 = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve("resolved values");
    }, 2000);
});
const promise4 = fetch('https://jsonplaceholder.typicode.com/users').then(
    response => response.json()
);

Promise.all([promise1, promise2, promise3, promise4]).then((values) => {
    console.log(values);
})