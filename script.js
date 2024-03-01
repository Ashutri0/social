$('.toggle').click(function () {
    $('.nav').toggleClass("justify-content-end");
    $('.toggle').toggleClass("text-light");
});

//////////////////////// tab switching ////////////////////////////////////

function openCity(evt, cityName) {
    var i, content, navitem;
    content = document.getElementsByClassName("content");
    for (i = 0; i < content.length; i++) {
        content[i].style.display = "none";
    }
    navitem = document.getElementsByClassName("navitem");
    for (i = 0; i < navitem.length; i++) {
        navitem[i].className = navitem[i].className.replace(" active");
    }
    document.getElementById(cityName).style.display = "block";
    evt.currentTarget.className += " active";
}



/////////////////////////////// bloging section ////////////////////////////

 // Sample blog data
 const blogs = [
    { title: 'Introduction to JavaScript', date: '2024-01-01', likes: 0, comments: [], image: 'https://shorturl.at/ikoAW' },
    { title: 'Exploring Beautiful Destinations', date: '2024-02-15', likes: 0, comments: [], image: 'https://shorturl.at/bkNQ1' },
    { title: 'Delicious Recipes to Try', date: '2024-03-10', likes: 0, comments: [], image: 'https://shorturl.at/zMR48' },
    // Add more blog entries as needed
];

// Function to render blogs based on date filter
function renderBlogs() {
    const blogsContainer = document.getElementById('blogsContainer');
    blogsContainer.innerHTML = '';

    const dateFilter = document.getElementById('dateFilter').value;

    let filteredBlogs = [...blogs];

    if (dateFilter === 'newest') {
        filteredBlogs.sort((a, b) => new Date(b.date) - new Date(a.date));
    } else {
        filteredBlogs.sort((a, b) => new Date(a.date) - new Date(b.date));
    }

    filteredBlogs.forEach(blog => {
        const blogDiv = document.createElement('div');
        blogDiv.className = 'blog';
        blogDiv.innerHTML = `
            <h3>${blog.title}</h3>
            <p>Date: ${blog.date}</p>
            <div class="actions">
                <button id="like" onclick="likePost(${blogs.indexOf(blog)})"><i class="fa-regular fa-thumbs-up"></i> (${blog.likes})</button>
                <button id="comment" onclick="commentOnPost(${blogs.indexOf(blog)})">Comment</button>
            </div>
            <img src="${blog.image}" alt="${blog.title}">
            <div class="comments" id="comments-${blogs.indexOf(blog)}">
                ${renderComments(blog.comments)}
            </div>
        `;
        blogsContainer.appendChild(blogDiv);
    });
}

// Function to render comments
function renderComments(comments) {
    if (comments.length === 0) {
        return '<p>No comments yet.</p>';
    }

    return `
        <p><strong>Comments:</strong></p>
        <ul>
            ${comments.map(comment => `<li>${comment}</li>`).join('')}
        </ul>
    `;
}

// Initial rendering
renderBlogs();

// Function to handle filter changes
function filterBlogs() {
    renderBlogs();
}

// Function to handle liking a post
function likePost(index) {
    blogs[index].likes++;
    renderBlogs();
}

// Function to handle commenting on a post
function commentOnPost(index) {
    const comment = prompt('Enter your comment:');
    if (comment) {
        blogs[index].comments.push(comment);
        renderBlogs();
    }
}


// ////////////////////////////////////// like animation    ////////////
