let blogs = JSON.parse(localStorage.getItem("blogs")) || [];

function displayBlogs() {
    const blogContainer = document.getElementById("blogPosts");

    blogContainer.innerHTML = "";

    blogs.forEach(blog => {
        blogContainer.innerHTML += `
            <div class="blog">
                <h3>${blog.title}</h3>
                <p><b>Author:</b> ${blog.author}</p>
                <p>${blog.content}</p>
            </div>
        `;
    });
}

function addBlog() {

    let title = document.getElementById("title").value;
    let author = document.getElementById("author").value;
    let content = document.getElementById("content").value;
    if(title==="" || author==="" || content===""){
    alert("Please fill all fields");
    return;
}

    let blog = {
        title: title,
        author: author,
        content: content
    };

    blogs.push(blog);

    localStorage.setItem("blogs", JSON.stringify(blogs));

    displayBlogs();

    document.getElementById("title").value = "";
    document.getElementById("author").value = "";
    document.getElementById("content").value = "";
}

displayBlogs();
