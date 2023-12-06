/*
problem
create post is more than time than get post so we need to introduce async
getposts run early so there is will no use of creatpost

solution: 3 asyncawait

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

//without asyncawait
// function createPost(post){
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000);
// }

//with promise
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


//asyncawait
async function init() {
    await createPost({title : "title three", body : "this is body three"});
    getPosts();
}

async function fetchUser() {
    const promise4 = await fetch('https://jsonplaceholder.typicode.com/users');
    const data = await promise4.json();
    await createPost({title : "title four", body : "this is body four"});
    console.log(data);
}

init();
fetchUser();