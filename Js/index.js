function loadCategories() {
  // fetch the data

  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //  2 - convart promise to json
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

function loadVideos() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((response) => response.json())
    .then((data) => displayVideos(data.videos));
}

loadVideos();

// {
//     "category_id": "1001",
//     "category": "Music"
//     }

function displayCategories(categories) {
  //   get the container
  const categoriyContainer = document.getElementById("categoriy-container");

  //   Loop operation on Array of object
  for (let cat of categories) {
    // console.log(cat);

    // create Element
    const categoriyDiv = document.createElement("div");
    categoriyDiv.innerHTML = `
    <button class="btn bg-[#25252515] hover:bg-[#FF1F3D] rounded py-[5px] px-[10px] md:py-[10px] md:px-5 md:text-lg hover:text-white text-[#252525b2]">${cat.category}</button>
    `;

    // Append the Element
    categoriyContainer.appendChild(categoriyDiv);
  }
}

// {
//   "category_id": "1003",
//   "video_id": "aaai",
//   "thumbnail": "https://i.ibb.co/kc8CCFs/30-rock.png",
//   "title": "30 Rock",
//   "authors": [
//       {
//           "profile_picture": "https://i.ibb.co/YZN9rQZ/tina.jpg",
//           "profile_name": "Tina Fey",
//           "verified": false
//       }
//   ],
//   "others": {
//       "views": "4.5K",
//       "posted_date": "14800"
//   },
//   "description": "'30 Rock,' led by Tina Fey, is a comedy series that has garnered 4.5K views. The show is a witty and humorous take on the behind-the-scenes antics of a fictional live comedy show. With its sharp writing and unforgettable characters, '30 Rock' is perfect for fans of smart, satirical humor and engaging storylines."
// }

const displayVideos = (videos) => {
  // get the container
  const videoContainer = document.getElementById("video-container");

  // Loop operation on Array of object
  videos.forEach((video) => {
    console.log(video);
    // element create
    const videoCard = document.createElement("div");

    videoCard.innerHTML = `
   <div class="card bg-base-100 shadow-sm">
   <figure>
    <img
      src="${video.thumbnail}" />
   </figure>
   <div class="card-body">
    <h2 class="card-title">${video.title}Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
    </div>
   </div>
   </div>
   `;
    videoContainer.appendChild(videoCard);
  });
};

loadCategories();
