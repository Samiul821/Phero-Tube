function loadCategories() {
  // fetch the data

  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")
    //  2 - convart promise to json
    .then((res) => res.json())
    .then((data) => displayCategories(data.categories));
}

// {
//     "category_id": "1001",
//     "category": "Music"
//     }

function displayCategories(categories) {
  //   get the container
  const categoriyContainer = document.getElementById("categoriy-container");

  //   Loop operation on Array of object
  for (let cat of categories) {
    console.log(cat);

    // create Element
    const categoriyDiv = document.createElement("div");
    categoriyDiv.innerHTML = `
    <button class="btn bg-[#25252515] hover:bg-[#FF1F3D] rounded py-[5px] px-[10px] md:py-[10px] md:px-5 md:text-lg hover:text-white text-[#252525b2]">${cat.category}</button>
    `;

    // Append the Element
    categoriyContainer.appendChild(categoriyDiv);
  }
}

loadCategories();
