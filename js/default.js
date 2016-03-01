var myRestaurants = [
  {
    name: "Gulliver's",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg'
  },
  {
    name: "Ruth's Chris Steak House",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg'
  },
  {
    name: "Houston's Restaurant",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg'
  },
  {
    name: "Outback Steakhouse",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg'
  },
  {
    name: "Mastro's Steakhouse",
    cateogry: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg'
  }
];

var searchResults = getElementById('search-results');

function displayResults(array) {
  var resultsBox = document.createElement('div');
  resultsBox.className = "media panel panel-default";
  var imgBox = document.createElement('div');
  imgBox.className = "media-left media-middle";
  var restaurantImg = document.createElement('img');
  restaurantImg.className = "media-object";
  restaurantImg.src= array.image;
  restaurantImg.setAttribute('width', '350px');
  var reviewsLink = document.createElement('a');
  reviewsLink.href="#";
  var bodyBox = document.createElement('div');
  bodyBox.className = "media-body";
  var restaurantHeader = document.createElement('h4');
  restaurantHeader.className = "media-heading";

  var restaurantTitle = document.createTextNode(array.name);
  var restaurantInfo = document.createElement('p');
  restaurantInfo.innerHTML = "category: " + array.category + "<br>" + "price: " + array.price + "<br>" + "location " + array.location;

  searchResults.appendChild(resultsBox);
  resultsBox.appendChild(imgBox);
  resultsBox.appendChild(bodyBox);
  bodyBox.appendChild(restaurantName);
  restaurantImg.appendChild(reviewsLink);
  restaurantName.appendChild(restaurantTitle);
  bodyBox.appendChild(restaurantInfo);
}

var button = document.getElementById('search-button');
console.log(button);

function compareKeyword() {
  var searchText = document.getElementById('search-text');
  searchText = searchText.value;
  var restaurantName = myRestaurants[i].name
  for (var i = 0; i < array.length; i++) {
    if (array[i].[property].[value].tolowerCase() === searchText.tolowerCase()) {
      displayResults(myRestaurants[i]);
    }
    else {
      var noResultHeader = document.createElement('h4');
      var noResultText = document.createTextNode('No matches found.');
      noResultHeader.appendChild.noResultText;
      searchResults.appendChild.noResultHeader;
    }
  }


button.addEventListener('click',compareKeyword());
