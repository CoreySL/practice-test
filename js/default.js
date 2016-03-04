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
      {review: 'Corey: "This place sucks!"'},
      {review: 'Bob: "SpamSpamSpamSpamSpamSpamSpam!"'},
      {review: "review 3: where am i?"}
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
      {review: "review 2"},
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
      {review: "review 2"},
      {review: "review 3"}
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
  buttonEl.setAttribute('class','btn btn-primary');
  buttonEl.setAttribute('id',array.id);
  var buttonText = document.createTextNode('Reviews');

  var writeButton = document.createElement('button');
  writeButton.setAttribute('type','button');
  writeButton.setAttribute('class','btn btn-danger');
  var writeButtonText = document.createTextNode('Write a review!');

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
  reviewBox.setAttribute('class','hidden reviews media panel panel-default');

  for (var i = 0; i < array.reviews.length; i++) {
    var reviewContent = document.createElement('h5');
    reviewContent.textContent = array.reviews[i].review;
    reviewBox.appendChild(reviewContent);
  }

//form box
  var formBox = document.createElement('div');
  formBox.setAttribute('class','media panel panel-default');
  formBox.setAttribute('height','300px');
  var submitButton = document.createElement('button');
  var submitText = document.createTextNode('Submit');
  submitButton.setAttribute('type','button');
  submitButton.setAttribute('class','btn btn-danger');
  submitButton.setAttribute('id','submit-review');
  var formEl = document.createElement('form');
  formEl.setAttribute('method','get');
  var textArea = document.createElement('textarea');
  textArea.setAttribute('class','form-control');
  textArea.setAttribute('rows','5');
  textArea.setAttribute('type','text');
  textArea.setAttribute('placeholder','Write your review here!');
  textArea.setAttribute('id','review-input');
  textArea.setAttribute('name','review-input');
  var formDiv = document.createElement('div');
  formDiv.setAttribute('class','form-group');
  formEl.appendChild(formDiv);
  formEl.appendChild(textArea);
  submitButton.appendChild(submitText);
  formEl.appendChild(submitButton);
  formBox.appendChild(formEl);

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
  writeButton.appendChild(writeButtonText);
  bodyBox.appendChild(buttonEl);
  bodyBox.appendChild(writeButton);
  bodyBox.appendChild(reviewBox);
  bodyBox.appendChild(formBox);
  resultsBox.appendChild(bodyBox);
  searchResultsArea.appendChild(resultsBox);

  function toggleReviews(value, element) {
    var classArray = element.className.split(' ');
    var position = classArray.indexOf(value);

    if (position === -1) {
      classArray.push(value);
    }
    else {
      classArray.splice(position, 1);
    }

    element.className = classArray.join(' ');
  }

//what element do you want to target? find it's parent node and have it search through the children nodes
  buttonEl.addEventListener('click', function(event) {
    var parent = event.target.parentNode;
    var reviews = parent.getElementsByClassName("reviews")[0];
    //specifically selecting the elements under the parent node of the event target that has a class name of reviews at the first position
    toggleReviews('hidden', reviews);
  });

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
