const form = document.getElementById("blogForm");
const container = document.getElementById("blogContainer");

// Load Blogs
function loadBlogs(){

fetch("/api/blogs")

.then(response=>response.json())

.then(data=>{

container.innerHTML="";

if(data.length===0){

container.innerHTML="<h3>No Blogs Available</h3>";

return;

}

data.forEach(blog=>{

container.innerHTML+=`

<div class="card">

<h2>${blog.title}</h2>

<h4>Author: ${blog.author}</h4>

<p>${blog.content}</p>

</div>

`;

});

});

}

// Add Blog
form.addEventListener("submit",(e)=>{

e.preventDefault();

const title=document.getElementById("title").value;

const author=document.getElementById("author").value;

const content=document.getElementById("content").value;

fetch("/api/blogs",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

title,

author,

content

})

})

.then(response=>response.json())

.then(data=>{

alert("Blog Added Successfully!");

form.reset();

loadBlogs();

// Smooth scroll to blogs section
document.getElementById("blogs").scrollIntoView({
behavior:"smooth"
});

});

});

loadBlogs();