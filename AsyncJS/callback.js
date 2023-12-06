/*
problem
create post is more than time than get post so we need to introduce async
getposts run early so there is will no use of creatpost

solution: 1 we need callback in createpost

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

//without callback
// function createPost(post){
//     setTimeout(() => {
//         posts.push(post)
//     }, 2000);
// }

//with callback
function createPost(post, getPosts){
    setTimeout(() => {
        posts.push(post);
        getPosts();
    }, 2000);
}


getPosts();
//without callback
//createPost({title : "title three", body : "this is body three"});

//with callback
createPost({title : "title three", body : "this is body three"}, getPosts);