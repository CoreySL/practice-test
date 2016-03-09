var myRestaurants = [
  {
    id: 1,
    name: "STK Las Vegas",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    ratings: [],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      }
    ]
  },
  {
    id: 2,
    name: "STK Las Vegas",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      }
    ]
  },
  {
    id: 3,
    name: "STK Las Vegas",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      }
    ]
  },
  {
    id: 4,
    name: "STK Las Vegas",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      }
    ]
  },
  {
    id: 5,
    name: "STK Las Vegas",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks."
      }
    ]
  }
]

var backgroundArea = document.getElementById('background-area');
var searchResultsArea = document.getElementById('results');


//clear children function
function clearList(element) {
  while (element.firstChild) {
    element.removeChild(element.firstChild);
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


function restaurant(data) {
  var theRestaurant = document.createElement('div');
  var imgBox = document.createElement('div');
  var restaurantImg = document.createElement('img');
  var reviewsButton = document.createElement('button');
  reviewsButton.textContent = "Reviews";
  var bodyBox = document.createElement('div');
  var titleEl = document.createElement('h4');
  var restaurantTitle = document.createTextNode(data.name);
  var catEl = document.createElement('p');
  var restaurantCategory = document.createTextNode("category: " + data.category);
  var locationEl = document.createElement('p');
  var restaurantLocation = document.createTextNode('location: ' + data.location);
  var priceEl = document.createElement('p');
  var restaurantPrice = document.createTextNode('price: ' + data.price);

  theRestaurant.className = "media panel panel-default";
  imgBox.className = "media-left media-top";
  restaurantImg.className = "media-object";
  restaurantImg.src = data.image;
  restaurantImg.setAttribute('width', '175vw');
  reviewsButton.setAttribute('type','button');
  reviewsButton.setAttribute('class','btn btn-primary');
  reviewsButton.setAttribute('data-id',data.id);
  bodyBox.className = "media-body";
  titleEl.className = "media-heading";

  imgBox.appendChild(restaurantImg);
  theRestaurant.appendChild(imgBox);
  titleEl.appendChild(restaurantTitle);
  bodyBox.appendChild(titleEl);
  catEl.appendChild(restaurantCategory);
  bodyBox.appendChild(catEl);
  locationEl.appendChild(restaurantLocation);
  bodyBox.appendChild(locationEl);
  priceEl.appendChild(restaurantPrice);
  bodyBox.appendChild(priceEl);
  bodyBox.appendChild(reviewsButton);
  theRestaurant.appendChild(bodyBox);

  return theRestaurant;
}

//function that creates the review page
function restaurantPage(data) {
  var reviewBox = document.createElement('div');
  var writeButton = document.createElement('button');
  var pageHeader = document.createElement('h1');
  pageHeader.textContent = data.name;
  var pageInfo = document.createElement('div');
  var pricePara = document.createElement('p');
  var locationPara = document.createElement('p');
  var reviewImage = document.createElement('img');
  var leftImage = document.createElement('div');
  var reviewRow = document.createElement('div');
  var reviewCol = document.createElement('div');


  reviewBox.setAttribute('class','container panel panel-default');

  writeButton.setAttribute('type','button');
  writeButton.setAttribute('class','btn btn-danger btn-lg write-button');
  writeButton.textContent = "Write a review!";
  writeButton.setAttribute('data-id','data.id');


  pageInfo.setAttribute('class','col-xs-6 col-xs-offset-6');
  pricePara.textContent = data.price;
  locationPara.textContent = data.location;

  leftImage.setAttribute('class','col-xs-6 img-responsive');

  reviewImage.setAttribute('class','media-object');
  reviewImage.src = data.image;
  reviewImage.setAttribute('width','300px');

  reviewRow.setAttribute('class','row');
  reviewCol.setAttribute('class','col-xs-12');

  //looks through myRestaurant array and finds all of its reviews
  for (var r = 0; r < data.reviews.length; r++) {
    var userBox = document.createElement('div');

    var userText = document.createElement('p');
    var userName = document.createElement('h5');
    var userThumbnail = document.createElement('div');

    var userImage = document.createElement('img');

    var userBody = document.createElement('div');

    userBox.setAttribute('class','media panel');
    userThumbnail.setAttribute('class','media-left');
    userImage.setAttribute('class','media-object');
    userBody.setAttribute('class','media-body');
    userText.textContent = data.reviews[r].text;
    userName.textContent = data.reviews[r].name;
    userImage.src = data.reviews[r].thumbnail;
    userImage.setAttribute('width','100px');

    userThumbnail.appendChild(userImage);
    userBody.appendChild(userName);
    userBody.appendChild(userText);
    userBox.appendChild(userThumbnail);
    userBox.appendChild(userBody);
    reviewCol.appendChild(userBox);
  }
  //end restaurant review loop

  //review form
  var formBox = document.createElement('div');
  var submitButton = document.createElement('button');
  var formEl = document.createElement('form');
  var inputName = document.createElement('input');
  var textArea = document.createElement('textarea');

  var ratingDiv = document.createElement('div');
  var labelOne = document.createElement('label');
  var inputOne = document.createElement('input');
  var labelTwo = document.createElement('label');
  var inputTwo = document.createElement('input');
  var labelThree = document.createElement('label');
  var inputThree = document.createElement('input');
  var labelFour = document.createElement('label');
  var inputFour = document.createElement('input');
  var labelFive = document.createElement('label');
  var inputFive = document.createElement('input');

  var iOne = document.createElement('i');
  var iTwo = document.createElement('i');
  var iThree = document.createElement('i');
  var iFour = document.createElement('i');
  var iFive = document.createElement('i');

  iOne.setAttribute('class','fa fa-star-o fa-2x');
  iTwo.setAttribute('class','fa fa-star-o fa-2x');
  iThree.setAttribute('class','fa fa-star-o fa-2x');
  iFour.setAttribute('class','fa fa-star-o fa-2x');
  iFive.setAttribute('class','fa fa-star-o fa-2x');

  inputOne.setAttribute('type','radio');
  labelOne.setAttribute('value','1');
  labelOne.setAttribute('id','one-star');
  inputOne.setAttribute('autocomplete','off');

  inputTwo.setAttribute('type','radio');
  labelTwo.setAttribute('value','2');
  labelTwo.setAttribute('id','two-star');
  inputTwo.setAttribute('autocomplete','off');

  inputThree.setAttribute('type','radio');
  labelThree.setAttribute('value','3');
  labelThree.setAttribute('id','three-star');
  inputThree.setAttribute('autocomplete','off');

  inputFour.setAttribute('type','radio');
  labelFour.setAttribute('value','4');
  labelFour.setAttribute('id','four-star');
  inputFour.setAttribute('autocomplete','off');

  inputFive.setAttribute('type','radio');
  labelFive.setAttribute('value','5');
  labelFive.setAttribute('id','five-star');
  inputFive.setAttribute('autocomplete','off');

  labelOne.setAttribute('class','btn');
  labelTwo.setAttribute('class','btn');
  labelThree.setAttribute('class','btn');
  labelFour.setAttribute('class','btn');
  labelFive.setAttribute('class','btn');

  ratingDiv.setAttribute('class','btn-group');
  ratingDiv.setAttribute('data-toggle','buttons');

  formBox.setAttribute('class','hidden write-review col-xs-6 panel panel-danger');
  formEl.setAttribute('method','get');

  inputName.setAttribute('type','name');
  inputName.setAttribute('class','form-control');
  inputName.setAttribute('placeholder','Name');
  inputName.setAttribute('id','name-input');

  textArea.setAttribute('class','form-control');
  textArea.setAttribute('rows','5');
  textArea.setAttribute('type','text');
  textArea.setAttribute('placeholder','Write your review here!');
  textArea.setAttribute('id','review-input');
  textArea.setAttribute('name','review-input');

  submitButton.setAttribute('type','button');
  submitButton.setAttribute('class','btn btn-danger');
  submitButton.setAttribute('id', data.id);
  submitButton.textContent = "Submit";

  labelOne.appendChild(iOne);
  labelTwo.appendChild(iTwo);
  labelThree.appendChild(iThree);
  labelFour.appendChild(iFour);
  labelFive.appendChild(iFive);

  labelOne.appendChild(inputOne);
  labelTwo.appendChild(inputTwo);
  labelThree.appendChild(inputThree);
  labelFour.appendChild(inputFour);
  labelFive.appendChild(inputFive);

  ratingDiv.appendChild(labelOne);
  ratingDiv.appendChild(labelTwo);
  ratingDiv.appendChild(labelThree);
  ratingDiv.appendChild(labelFour);
  ratingDiv.appendChild(labelFive);


  formEl.appendChild(ratingDiv);
  formEl.appendChild(inputName);
  formEl.appendChild(textArea);
  formEl.appendChild(submitButton);
  formBox.appendChild(formEl);
  //end form box

  reviewBox.appendChild(pageHeader);
  leftImage.appendChild(reviewImage);
  pageInfo.appendChild(pricePara);
  pageInfo.appendChild(locationPara);
  reviewBox.appendChild(pageInfo);
  reviewBox.appendChild(leftImage);
  reviewBox.appendChild(writeButton);
  reviewBox.appendChild(formBox);
  reviewRow.appendChild(reviewCol);
  reviewBox.appendChild(reviewRow);
  return reviewBox;
}


//event listener on search bar
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
      searchResultsArea.appendChild(restaurant(resultsArray[d]));
    }
  }
  else {
    var noResultHeader = document.createElement('h4');
    var noResultText = document.createTextNode('No matches found.');
    noResultHeader.appendChild(noResultText);
    searchResultsArea.appendChild(noResultHeader);
  }
});

document.body.addEventListener('click', function(event) {
  var buttonId = event.target.getAttribute('data-id');
  var type = event.target.textContent;

  if (type === "Reviews") {
    for (var z = 0; z < myRestaurants.length; z++) {
      //console.log(restaurantId);
      // console.log(myRestaurants[z].id);
      if (myRestaurants[z].id == buttonId) {
        clearList(backgroundArea);
        clearList(searchResultsArea);
        //calling the function and appending it to the review page
        searchResultsArea.appendChild(restaurantPage(myRestaurants[z]));
      }
    }
  }
  if (type === "Write a review!") {
    var parent = event.target.parentNode;
    var writeReview = parent.getElementsByClassName('write-review')[0];
    toggle('hidden',writeReview);
  }
  if (type === "Submit") {
    for (var n = 0; n < myRestaurants.length; n++);
    if (myRestaurants[n].id == buttonId) {
      console.log('hey');
    }
    var nameInput = document.getElementById('name-input');
    var reviewInput = document.getElementById('review-input');
    reviewInput = reviewInput.value;
    nameInput = nameInput.value;

    var updatedName = document.createElement('h5');
    var updatedReview = document.createElement('p');

    updatedReview.textContent = reviewInput;
    updatedName.textContent = nameInput;
  }
});

document.body.addEventListener('mouseover', function(event) {
  var starId = event.target.getAttribute('value');
  var labelOne = document.getElementById('one-star');
  var labelTwo = document.getElementById('two-star');
  var labelThree = document.getElementById('three-star');
  var labelFour = document.getElementById('four-star');
  var labelFive = document.getElementById('five-star');
    if (starId == "5") {
    labelOne.setAttribute('style', 'background-color: gold;');
    labelTwo.setAttribute('style', 'background-color: gold;');
    labelThree.setAttribute('style', 'background-color: gold;');
    labelFour.setAttribute('style', 'background-color: gold;');
      labelFive.addEventListener('mouseout', function(event) {
        labelOne.setAttribute('style','background-color: none;');
        labelTwo.setAttribute('style','background-color: none;');
        labelThree.setAttribute('style','background-color: none;');
        labelFour.setAttribute('style','background-color: none;');
      });
    }
    if (starId == "4") {
    labelOne.setAttribute('style', 'background-color: gold;');
    labelTwo.setAttribute('style', 'background-color: gold;');
    labelThree.setAttribute('style', 'background-color: gold;');
      labelFour.addEventListener('mouseout', function(event) {
        labelOne.setAttribute('style','background-color: none;');
        labelTwo.setAttribute('style','background-color: none;');
        labelThree.setAttribute('style','background-color: none;');
      });
    }
    if (starId == "3") {
    labelOne.setAttribute('style', 'background-color: gold;');
    labelTwo.setAttribute('style', 'background-color: gold;');
      labelThree.addEventListener('mouseout', function(event) {
      labelOne.setAttribute('style','background-color: none;');
      labelTwo.setAttribute('style','background-color: none;');
      });
  }
    if (starId == "2") {
    labelOne.setAttribute('style', 'background-color: gold;');
    labelTwo.addEventListener('mouseout', function(event) {
      labelOne.setAttribute('style','background-color: none;');
      });
    }

});
