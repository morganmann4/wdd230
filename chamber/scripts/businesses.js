const infopath = "data.json"
const grid = document.querySelector(".displayGrid");
const list = document.querySelector(".displayList");

fetch(infopath)
  .then(function (response) {
    return response.json();
  })
  .then(function (jsonObject) {
    console.table(jsonObject);  // temporary checking for valid response and data parsing
    const data = jsonObject['business'];
    data.forEach(display);
  });

  function display(bus) {
    // Create elements to add to the document
    let card = document.createElement('section');
    let img = document.createElement('img');
    let h2 = document.createElement('h2');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');


    h2.textContent = `${bus.name}`;
    address.textContent = `${bus.address}`;
    phone.textContent = `${bus.number}`;
    website.textContent = `${bus.website}`;
  
    // Build the image attributes by using the setAttribute method for the src, alt, and loading attribute values. (Fill in the blank with the appropriate variable).
    img.setAttribute('src', '../chamber/images/' + bus.image);
    img.setAttribute('alt', bus.name);
  
    // Add/append the section(card) with the h2 element
    card.appendChild(img);
    card.appendChild(h2);         
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(website);
    
  
    // Add/append the existing HTML div with the cards class with the section(card)
    document.querySelector('div.cards').appendChild(card);
    document.querySelector(".cards").classList.add("grid");
  }

  function displayGrid(){
    document.querySelector(".cards").classList.add("grid");
    document.querySelector(".cards").classList.remove("list");
  };
  
  grid.addEventListener("click", displayGrid);
  
  function displayList() {
    document.querySelector(".cards").classList.add("list");
    document.querySelector(".cards").classList.remove("grid")
  }
  
  list.addEventListener("click", displayList); 
