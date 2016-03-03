
var myRestaurants = [
  {
    name: "Gulliver's",
    category: "steak",
    location: "Irvine, Ca",
    price: "$$",
    image: 'images/steak1.jpg',
    link: 'https://www.google.com',
    tags: ['gullivers', 'steak', 'fancy'],
    id: "gulliver-reviews",
    reviews: {
      profilepic: 'images/simpson.jpg',
      name: "Bart",
      review: "This place sucks"
    }
  },
  {
    name: "Ruth's Chris Steak House",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    link: 'https://www.google.com',
    tags: ['gullivers', 'steak', 'fancy'],
    id: "ruth-reviews"
    id: "gulliver-reviews",
    reviews: {
      profilepic: 'images/simpson.jpg',
      name: "Bart",
      review: "This place sucks"
    }
  },
  {
    name: "Houston's Restaurant",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    link: 'https://www.google.com',
    tags: ['gullivers', 'steak', 'fancy'],
    id: "gulliver-reviews",
    reviews: {
      profilepic: 'images/simpson.jpg',
      name: "Bart",
      review: "This place sucks"
    }
  },
  {
    name: "Outback Steakhouse",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    link: 'https://www.google.com',
    tags: ['gullivers', 'steak', 'fancy'],
    id: "gulliver-reviews",
    reviews: {
      profilepic: 'images/simpson.jpg',
      name: "Bart",
      review: "This place sucks"
    }  },
  {
    name: "Mastro's Steakhouse",
    cateogry: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    link: 'https://www.google.com',
    tags: ['gullivers', 'steak', 'fancy'],
    id: "gulliver-reviews",
    reviews: {
      profilepic: 'images/simpson.jpg',
      name: "Bart",
      review: "This place sucks"
    }  }
];

var searchResultsArea = document.getElementById('results');

function displayResults(array) {
  var resultsBox = document.createElement('div');
  resultsBox.className = "media panel panel-default";

  var imgBox = document.createElement('div');
  imgBox.className = "media-left media-middle";

  var restaurantImg = document.createElement('img');
  restaurantImg.className = "media-object";
  restaurantImg.src = array.image;
  restaurantImg.setAttribute('width', '350px');

  var buttonEl = document.createElement('button');
  buttonEl.setAttribute('type','button');
  buttonEl.setAttribute('class','btn btn-default');
  buttonEl.setAttribute('id',array.id);
  buttonText = document.createTextNode('Reviews');

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

  imgBox.appendChild(restaurantImg);
  resultsBox.appendChild(imgBox);
  titleEl.appendChild(restaurantTitle);
  bodyBox.appendChild(titleEl);
  catEl.appendChild(restaurantCategory);
  bodyBox.appendChild(catEl);
  locationEl.appendChild(restaurantLocation);
  bodyBox.appendChild(locationEl);
  priceEl.appendChild(restaurantPrice);
  bodyBox.appendChild(priceEl);
  buttonEl.appendChild(buttonText);
  bodyBox.appendChild(buttonEl);
  resultsBox.appendChild(bodyBox);
  searchResultsArea.appendChild(resultsBox);
}

//clear(searchResultsArea);
function clearList(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
//if condition is true, execute statement. if false, continue on to statement after the while loop
 }
}


var search = document.getElementById('search');
search.addEventListener('click', compareKeyword);
function compareKeyword() {
  clearList(searchResultsArea);
  var input = document.getElementById('search-input');
  input = input.value;
  for (var i = 0; i < myRestaurants.length; i++) {
    if (myRestaurants[i].name === input) {
       displayResults(myRestaurants[i]);
     }
    else {
      var noResultHeader = document.createElement('h4');
      var noResultText = document.createTextNode('No matches found.');
      noResultHeader.appendChild(noResultText);
      searchResultsArea.appendChild(noResultHeader);
    }
  }
}



//issue 2: users can view a list of reviews

function displayReviews (array) {
  clearList(searchResultsArea);

  var reviewBox = docment.createElement('div');
  reviewBox.className = "media panel panel-default";

  var imgBox = document.createElement('div');
  imgBox.className = "media-left media-middle";

  var reviewImg = document.createElement('img');
  var reviewImg.className = "media-object";
  reviewImg.src = array.reviews.profilepic;
  reviewImg.setAttribute('width', '300px');

  var reviewBody = document.createElement('div');
  reviewBody.className = "media-body";

  var reviewHeader = document.createElement('h4');
  reviewHeader.className = "media-heading";

  var reviewName = document.createTextNode(array.reviews.name);

  var contentEl = document.createElement('p');
  var reviewContent = document.createTextNode(array.reviews.review);

  imgBox.appendChild(reviewImg);
  contentEl.appendChild(reviewContent);
  reviewBody.appendChild(contentEl);
  reviewHeaer.appendChild(reviewName);
  reviewBox.appendChild(imgBox);
  reviewBox.appendChild(reviewBody);
  reviewBox.appendChild(reviewHeader);

}


var searchReviews = document.getElementById(array.id);
searchReviews.addEventListener('click', displayReviews(array));



//document.getElementBId('linkEl').onclick = function
  //display reviews for that restaurant (turn display off for certain element)
  //hide results list (reset page)
