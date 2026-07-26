let blogs = JSON.parse(localStorage.getItem("blogs")) || [];


// Display all blogs

function displayBlogs() {

    const blogContainer = document.getElementById("blogPosts");


    blogContainer.innerHTML = "";


    blogs.forEach((blog, index) => {


        blogContainer.innerHTML += `

        <div class="blog-card">


            <h3>${blog.title}</h3>


            <p>${blog.content}</p>


            <p>
            <b>Author:</b> ${blog.author}
            </p>


            <button onclick="deleteBlog(${index})">
            Delete
            </button>


        </div>

        `;


    });


}



// Add new blog

function addBlog() {


    let title = document.getElementById("title").value;

    let author = document.getElementById("author").value;

    let content = document.getElementById("content").value;



    if(title === "" || author === "" || content === "") {


        alert("Please fill all fields");

        return;

    }



    let blog = {


        title: title,

        author: author,

        content: content


    };



    blogs.push(blog);



    localStorage.setItem(

        "blogs",

        JSON.stringify(blogs)

    );



    displayBlogs();



    document.getElementById("title").value = "";

    document.getElementById("author").value = "";

    document.getElementById("content").value = "";



}



// Delete single blog

function deleteBlog(index) {


    blogs.splice(index,1);


    localStorage.setItem(

        "blogs",

        JSON.stringify(blogs)

    );


    displayBlogs();


}



// Delete all blogs

function deleteAllBlogs() {


    blogs = [];


    localStorage.removeItem("blogs");


    displayBlogs();


    alert("All blogs deleted successfully");


}




// Load blogs when page opens

displayBlogs();
