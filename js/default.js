var myRestaurants = [
  {
    name: "Gulliver's",
    category: "steak",
    location: "Irvine, Ca",
    price: "$$",
    image: 'images/steak1.jpg',
    tags: ['gullivers', 'steak', 'fancy','blah'],
    id: "gulliver-reviews",
    reviews: [
      {review: 'Corey: "This place sucks!"'},
      {review: 'Bob: "SpamSpamSpamSpamSpamSpamSpam!"'},
      {review: "review 1"},
      {review: "review 2"},
      {review: "review 1"},
      {review: "review 2"},
      {review: "review 1"},
      {review: "review 2"},
      {review: "review 1"},
      {review: "review 2"},
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
      {review: "review 1"},
      {review: "review 2"},
      {review: "review 1"},
      {review: "review 2"},
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
      {review: "review 1"},
      {review: "review 2"},
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
      {review: "review 1"},
      {review: "review 2"},
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
      {review: "review 1"},
      {review: "review 2"},
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

function toggle(value, element) {
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

//form box
  var formBox = document.createElement('div');
  formBox.setAttribute('class','hidden write-review');
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
  bodyBox.appendChild(formBox);
  resultsBox.appendChild(bodyBox);
  searchResultsArea.appendChild(resultsBox);

  //users click to see a list of reviews for that specific restaurant
  //clears page and shows review list and write review button
    buttonEl.addEventListener('click', function(event) {
      clearList(searchResultsArea);

      var reviewBox = document.createElement('div');
      reviewBox.setAttribute('class','media panel panel-default');

      var writeButton = document.createElement('button');
      writeButton.setAttribute('type','button');
      writeButton.setAttribute('class','btn btn-danger btn-lg write-button');
      var writeButtonText = document.createTextNode('Write a review!');

      var reviewImage = document.createElement('img');
      var leftImage = document.createElement('div');
      leftImage.setAttribute('class','media-left img-responsive');

      reviewImage.setAttribute('class','media-object');
      reviewImage.src = array.image;
      reviewImage.setAttribute('width','500px');




      var reviewArea = document.createElement('div');
      reviewArea.setAttribute('class','media-body');

      //review form
      var formBox = document.createElement('div');
      formBox.setAttribute('class','hidden write-review');
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
      leftImage.appendChild(reviewImage);
      reviewBox.appendChild(leftImage);
      writeButton.appendChild(writeButtonText);
      reviewBox.appendChild(writeButton);
      formEl.appendChild(formDiv);
      formEl.appendChild(textArea);
      submitButton.appendChild(submitText);
      formEl.appendChild(submitButton);
      formBox.appendChild(formEl);
      reviewBox.appendChild(formBox);

      writeButton.addEventListener('click',function(event) {
        var parent = event.target.parentNode;
        var writeReview = parent.getElementsByClassName('write-review')[0];
        toggle('hidden',writeReview);
      });

      for (var r = 0; r < array.reviews.length; r++) {
        var reviewContent = document.createElement('li');
        reviewContent.setAttribute('class','list-group-item');
        reviewContent.textContent = array.reviews[r].review;
        var listGroup = document.createElement('ul');
        listGroup.setAttribute('class','list-group');

        listGroup.appendChild(reviewContent);
        reviewArea.appendChild(listGroup);
        reviewBox.appendChild(reviewArea);

      }
      searchResultsArea.appendChild(reviewBox);
  });



  var submitReview = document.getElementById('submit-review');

  submitReview.addEventListener('click',function(event) {
  var reviewInput = document.getElementById('review-input');
  var reviewInput = reviewInput.value;
  var updatedReview = document.createElement('h5');
  updatedReview.textContent = reviewInput;
  reviewBox.appendChild(updatedReview);
  });

}
//end displayResults function

var search = document.getElementById('search');
search.addEventListener('click', function() {
  clearList(searchResultsArea);
  var resultsArray = [];
  var input = document.getElementById('search-input');
  input = input.value;
  for (var i = 0; i < myRestaurants.length; i++) {
    for (var t = 0; t < myRestaurants[i].tags.length; t++) {
      if (myRestaurants[i].tags[t] === input.toLowerCase()) {
        resultsArray.push(myRestaurants[i]);
      }
    }
  }
  if (resultsArray.length > 0) {
    for (var d = 0; d < resultsArray.length; d++) {
    displayResults(resultsArray[d]);
    }
  }
  else {
    var noResultHeader = document.createElement('h4');
    var noResultText = document.createTextNode('No matches found.');
    noResultHeader.appendChild(noResultText);
    searchResultsArea.appendChild(noResultHeader);

  }
});
