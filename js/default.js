var myRestaurants = [
  {
    name: "Gulliver's",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    link: 'https://www.google.com'
  },
  {
    name: "Ruth's Chris Steak House",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    link: 'https://www.google.com'
  },
  {
    name: "Houston's Restaurant",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    link: 'https://www.google.com'
  },
  {
    name: "Outback Steakhouse",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    link: 'https://www.google.com'
  },
  {
    name: "Mastro's Steakhouse",
    cateogry: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    link: 'https://www.google.com'
  }
];

var searchResults = document.getElementById('results');

function displayResults(array) {
  var resultsBox = document.createElement('div');
  resultsBox.className = "media panel panel-default";

  var imgBox = document.createElement('div');
  imgBox.className = "media-left media-middle";

  var restaurantImg = document.createElement('img');
  restaurantImg.className = "media-object";
  restaurantImg.src = array.image;
  restaurantImg.setAttribute('width', '350px');

  var linkEl = document.createElement('a');
  linkEl.title = "reviews link";
  linkEl.href = "http://google.com";

  var bodyBox = document.createElement('div');
  bodyBox.className = "media-body";

  var titleEl = document.createElement('h4');
  titleEl.className = "media-heading";
  var restaurantTitle = document.createTextNode(array.name);

  var catEl = document.createElement('p');
  var restaurantCategory = document.createTextNode("category: " + array.category);

  var locationEl = document.createElement('p');
  var restaurantLocation = document.createTextNode('location: ' + array.location);

  var priceEl = document.createElement('p');
  var restaurantPrice = document.createTextNode('price: ' + array.price);

  resultsBox.appendChild(imgBox);
  resultsBox.appendChild(bodyBox);
  bodyBox.appendChild(restaurantTitle);
  imgBox.appendChild(restaurantImg);
  titleEl.appendChild(restaurantTitle);
  bodyBox.appendChild(titleEl);
  catEl.appendChild(restaurantCategory);
  bodyBox.appendChild(catEl);
  locationEl.appendChild(restaurantLocation);
  bodyBox.appendChild(locationEl);
  priceEl.appendChild(restaurantPrice);
  bodyBox.appendChild(priceEl);
  bodyBox.appendChild(linkEl);
  searchResults.appendChild(resultsBox);
}

function compareKeyword(e) {
  var searchText = document.getElementById('keywords');
  searchText = searchText.value;
  for (var i = 0; i < myRestaurants.length; i++) {
    console.log(myRestaurants[i].name + ' ' + searchText);
    if (myRestaurants[i].name === searchText) {
      displayResults(myRestaurants[i]);
    }
    else {
      var noResultHeader = document.createElement('h4');
      var noResultText = document.createTextNode('No matches found.');
      noResultHeader.appendChild.noResultText;
      searchResults.appendChild.noResultHeader;
    }
  }
}

var button = document.getElementById('search');
button.addEventListener('click', compareKeyword);
