const fetchAllBtn = document.querySelector("#all");
const fetchDesignBtn = document.querySelector("#design");
const fetchArchitectureBtn = document.querySelector("#architecture");
const fetchPlanningBtn = document.querySelector("#planning");
const postsList = document.querySelector(".features__divWrapper");

fetchPosts()
  .then((posts) => {
    posts = posts.slice(0, 30);
    const markup = markUpHtml(posts);
    postsList.innerHTML = markup.join("");
    showLastPost();
  })
  .catch((error) => console.log(error));


fetchAllBtn.addEventListener("click", handleAll);
fetchDesignBtn.addEventListener("click", handleFilter);
fetchArchitectureBtn.addEventListener("click", handleFilter);
fetchPlanningBtn.addEventListener("click", handleFilter);

function handleAll() {
  const posts = document.querySelectorAll(".features__div:not(.hidden)");
  for (let i = 0; i < posts.length; i++) {
    posts[i].classList.add("hidden");
  }

  showLastPost();
}

function handleFilter(event) {
  const posts = document.querySelectorAll(".features__div");

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].dataset.id === event.target.dataset.id) {
      posts[i].classList.remove("hidden");
    } else if (!posts[i].classList.contains("hidden") && posts[i].dataset.id != event.target.dataset.id) {
      posts[i].classList.add("hidden");
    }
  }
}

function fetchPosts() {
  return fetch("https://jsonplaceholder.typicode.com/posts").then(
    (response) => {
      if (!response.ok) {
        throw new Error(response.status);
      }
      return response.json();
    }
  );
}

function markUpHtml(posts) {
  return posts.map((post) => {
    return `<div class="features__div hidden" data-id="${post.userId}">
     <svg class="features__svg" width="45" height="35">
       <use href="svg/symbol-defs.svg#icon-images"></use>
     </svg>
     <div class="features__textDiv">
       <h3 class="features__subtitle">${post.title}</h3>
       <p class="features__subtext">${post.body}</p>
     </div>
   </div>`;
  });
}

function showLastPost() {
   for (let i=1; i<=3; i++) {
      let element = postsList.querySelector('div[data-id="' + i + '"]');

      if (element) {
         element.classList.remove("hidden");
      }
   } 
}
