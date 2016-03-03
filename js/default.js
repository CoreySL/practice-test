
var myRestaurants = [
  {
    name: "Gulliver's",
    category: "steak",
    location: "Irvine, Ca",
    price: "$$",
    image: 'images/steak1.jpg',
    tags: ['gullivers', 'steak', 'fancy'],
    id: "gulliver-reviews",
    reviews: [
      {review: "review 1"},
      {review: "review "},
      {review: "review 3"}
    ]
  },
  {
    name: "Ruth's Chris Steak House",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    tags: ['gullivers', 'steak', 'fancy'],
    id: "ruth-reviews",
    reviews: [
      {review: "review 1"},
      {review: "review "},
      {review: "review 3"}
    ]
  },
  {
    name: "Houston's Restaurant",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    tags: ['gullivers', 'steak', 'fancy'],
    id: "gulliver-reviews",
    reviews: [
      {review: "review 1"},
      {review: "review 2"},
      {review: "review 3"}
    ]
  },
  {
    name: "Outback Steakhouse",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    tags: ['gullivers', 'steak', 'fancy'],
    id: "gulliver-reviews",
    reviews: [
      {review: "review 1"},
      {review: "review 2"},
      {review: "review 3"}
    ]
  },
  {
    name: "Mastro's Steakhouse",
    cateogry: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    tags: ['gullivers', 'steak', 'fancy'],
    id: "gulliver-reviews",
    reviews: [
      {review: "review 1"},
      {review: "review2"},
      {review: "review3"}
    ]
  }
];

var searchResultsArea = document.getElementById('results');

//clear(searchResultsArea);
function clearList(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
//if condition is true, execute statement. if false, continue on to statement after the while loop
 }
}

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

  var reviewBox = document.createElement('div');
  reviewBox.setAttribute('class','hidden media panel panel-default');



  for (var i = 0; i < array.reviews.length; i++) {
    var reviewContent = document.createElement('h3');
    reviewContent.textContent = array.reviews[i].review;
    reviewBox.appendChild(reviewContent);
  }




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
  bodyBox.appendChild(reviewBox);
  resultsBox.appendChild(bodyBox);

  searchResultsArea.appendChild(resultsBox);

}

var search = document.getElementById('search');
search.addEventListener('click', function() {
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
});
