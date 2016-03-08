var myRestaurants = [
  {
    id: 1,
    name: "Gulliver's",
    category: "steak",
    location: "Irvine, Ca",
    price: "$$",
    image: 'images/steak1.jpg',
    tags: ['gullivers', 'steak', 'fancy','blah'],
    reviews: [
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]},
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]},
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]},
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]}
  ]},
  {
    id: 2,
    name: "Ruth's Chris Steak House",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    tags: ['gullivers', 'steak', 'fancy'],
    reviews: [
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]},
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]},
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]},
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]}
  ]},
  {
    id: 3,
    name: "Houston's Restaurant",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    tags: ['gullivers', 'steak', 'fancy'],
    reviews: [
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]},
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]},
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]},
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]}
  ]},
  {
    name: "Outback Steakhouse",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    tags: ['gullivers', 'steak', 'fancy'],
    id: 4,
    reviews: [
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]},
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]},
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]},
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]}
  ]},
  {
    id: 5,
    name: "Mastro's Steakhouse",
    cateogry: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    tags: ['gullivers', 'steak', 'fancy'],
    id: "gulliver-reviews",
    reviews: [
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]},
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]},
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]},
      {review: [
        {name:"Corey"},
        {text:"This place sucks."}
      ]}
  ]}
];

var backgroundArea = document.getElementById('background-area');
var searchResultsArea = document.getElementById('results');

//clear children function
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

  var reviewsButton = document.createElement('button');
  reviewsButton.setAttribute('type','button');
  reviewsButton.setAttribute('class','btn btn-primary');
  reviewsButton.setAttribute('id',array.id);
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
  submitButton.setAttribute('id',array.id);
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
  reviewsButton.appendChild(buttonText);
  bodyBox.appendChild(reviewsButton);
  bodyBox.appendChild(formBox);
  resultsBox.appendChild(bodyBox);
  searchResultsArea.appendChild(resultsBox);

//review page
    reviewsButton.addEventListener('click', function(event) {
      clearList(searchResultsArea);
      clearList(backgroundArea);

      var reviewBox = document.createElement('div');
      reviewBox.setAttribute('class','container panel panel-default');

      var writeButton = document.createElement('button');
      writeButton.setAttribute('type','button');
      writeButton.setAttribute('class','btn btn-danger btn-lg write-button');
      var writeButtonText = document.createTextNode('Write a review!');

      var pageHeader = document.createElement('h1');
      var pageName = document.createTextNode(array.name);

      var pageInfo = document.createElement('div');
      pageInfo.setAttribute('class','col-xs-6 col-xs-offset-6');
      var pricePara = document.createElement('p');
      var locationPara = document.createElement('p');
      var pagePrice = document.createTextNode("price: " + array.price);
      var pageLocation = document.createTextNode("location " + array.location);


      var reviewImage = document.createElement('img');
      var leftImage = document.createElement('div');
      leftImage.setAttribute('class','col-xs-6 img-responsive');

      reviewImage.setAttribute('class','media-object');
      reviewImage.src = array.image;
      reviewImage.setAttribute('width','500px');

      var reviewRow = document.createElement('div');
      reviewRow.setAttribute('class','row');

      reviewCol = document.createElement('div');
      reviewCol.setAttribute('class','col-xs-12');

      //review form
      var formBox = document.createElement('div');
      formBox.setAttribute('class','hidden write-review col-xs-6 panel panel-danger');

      var submitButton = document.createElement('button');
      var submitText = document.createTextNode('Submit');
      submitButton.setAttribute('type','button');
      submitButton.setAttribute('class','btn btn-danger');
      submitButton.setAttribute('id', array.id);

      var formEl = document.createElement('form');
      formEl.setAttribute('method','get');

      var inputName = document.createElement('input');
      inputName.setAttribute('type','name');
      inputName.setAttribute('class','form-control');
      inputName.setAttribute('placeholder','Name');
      inputName.setAttribute('id','name-input');

      var textArea = document.createElement('textarea');
      textArea.setAttribute('class','form-control');
      textArea.setAttribute('rows','5');
      textArea.setAttribute('type','text');
      textArea.setAttribute('placeholder','Write your review here!');
      textArea.setAttribute('id','review-input');
      textArea.setAttribute('name','review-input');

      var reviewBorder = document.createElement('div');
      reviewBorder.setAttribute('class','panel panel-default col-xs-6');

      var formDiv = document.createElement('div');
      formDiv.setAttribute('class','form-group');
      //end form box

      reviewBox.appendChild(pageHeader);
      leftImage.appendChild(reviewImage);
      pricePara.appendChild(pagePrice);
      locationPara.appendChild(pageLocation);
      pageInfo.appendChild(pricePara);
      pageInfo.appendChild(locationPara);
      reviewBox.appendChild(pageInfo);
      reviewBox.appendChild(leftImage);
      pageHeader.appendChild(pageName);
      writeButton.appendChild(writeButtonText);
      reviewBox.appendChild(writeButton);
      formDiv.appendChild(inputName);
      formDiv.appendChild(textArea);
      submitButton.appendChild(submitText);
      formDiv.appendChild(submitButton);
      formEl.appendChild(formDiv);
      formBox.appendChild(formEl);
      reviewBox.appendChild(formBox);

      writeButton.addEventListener('click',function(event) {
        var parent = event.target.parentNode;
        var writeReview = parent.getElementsByClassName('write-review')[0];
        toggle('hidden',writeReview);
      });

      submitButton.addEventListener('click',function() {
          var reviewInput = document.getElementById('review-input');
          var reviewInput = reviewInput.value;
          var updatedReview = document.createElement('p');
          updatedReview.setAttribute('class','review-position');
          updatedReview.textContent = reviewInput;
          var nameInput = document.getElementById('name-input');
          var nameInput = nameInput.value;
          var updatedName = document.createElement('h5');
          updatedName.setAttribute('class','name-position');
          updatedName.textContent = nameInput;
          //push into empty array of certain id here
          reviewBorder.appendChild(updatedName);
          reviewBorder.appendChild(updatedReview);
      });

      for (var r = 0; r < array.reviews.length; r++) {
        for (var k = 0; k < array.reviews[r].review.length; k++) {
          var userText = document.createElement('p');
          userText.textContent = array.reviews[r].review[k].text;
          var userName = document.createElement('h5');
          userName.textContent = array.reviews[r].review[k].name;


          var userBox = document.createElement('div');
          userBox.setAttribute('class','panel');



          userBox.appendChild(userName);
          userBox.appendChild(userText);
          reviewBorder.appendChild(userBox);


        }
      }

      reviewCol.appendChild(reviewBorder);
      reviewRow.appendChild(reviewCol);
      reviewBox.appendChild(reviewRow);
      searchResultsArea.appendChild(reviewBox);


    });
    //end review page
}
//end displayResults function

var search = document.getElementById('search');
search.addEventListener('click', function() {
  clearList(backgroundArea);
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
