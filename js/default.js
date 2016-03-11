var myRestaurants = [
  {
    id: 1,
    name: "STK Las Vegas",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    restaurantImage: 'https://www.shakeshack.com/wp-content/uploads/2012/04/Banner_Location_TD.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    totalRatings: 1,
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 4,
        number: 1
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 5,
        number: 2
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 2,
        number: 4
      }
    ]
  },
  {
    id: 2,
    name: "Denny's",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      }
    ]
  },
  {
    id: 3,
    name: "Mcdonalds",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      }
    ]
  },
  {
    id: 4,
    name: "Burger King",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      }
    ]
  },
  {
    id: 5,
    name: "Wendy's",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"This place sucks.",
        ratings: 3,
        number: 3
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

  var restaurantBox = document.createElement('div');
  var backButton = document.createElement('button');
  var backFont = document.createElement('i');

  var writeButton = document.createElement('button');
  var pageHeader = document.createElement('h1');
  var pageInfo = document.createElement('div');
  var pricePara = document.createElement('p');
  var locationPara = document.createElement('p');
  var reviewImage = document.createElement('img');
  var leftImage = document.createElement('div'); //rename
  var reviewRow = document.createElement('div');
  var reviewCol = document.createElement('div');



  restaurantBox.setAttribute('class','restaurant-box container panel panel-default');
  restaurantBox.setAttribute('id','restaurant-box');


  backButton.setAttribute('class','btn btn-primary back-button');
  backButton.setAttribute('id','back-button');
  backFont.setAttribute('class','fa fa-chevron-circle-left fa-2x');

  writeButton.setAttribute('type','button');
  writeButton.setAttribute('class','btn btn-danger btn-lg write-button');
  writeButton.textContent = "Write a review!";
  writeButton.setAttribute('data-id',data.id);

  pageHeader.textContent = data.name;
  pageHeader.setAttribute('class','restaurant-title');

  pageInfo.setAttribute('class','page-info col-xs-6 col-xs-offset-6');
  pricePara.textContent = data.price;
  locationPara.textContent = data.location;



  reviewImage.setAttribute('class','restaurant-image img-responsive img-rounded');
  reviewImage.src = data.restaurantImage;
  reviewImage.setAttribute('width','auto');

  reviewRow.setAttribute('class','row');
  reviewRow.setAttribute('id','review-row');

  reviewCol.setAttribute('class','col-xs-12');
  reviewCol.setAttribute('id','review-col');

  //looks through myRestaurant array and finds all of its reviews
  var theReviews = data.reviews;
  theReviews = theReviews.reverse(); //reverse the Reviews array to put the new on top
  console.log(theReviews);
  for (var r = 0; r <theReviews.length; r++) {
    var userBox = document.createElement('div');
    var userPanelBody = document.createElement('div');
    var userText = document.createElement('p');
    var userName = document.createElement('h5');
    var userThumbnail = document.createElement('div');

    var userImage = document.createElement('img');

    var userBody = document.createElement('div');
    var starOne = document.createElement('i');
    var starTwo = document.createElement('i');
    var starThree = document.createElement('i');
    var starFour = document.createElement('i');
    var starFive = document.createElement('i');
    var starDiv = document.createElement('div');
    starOne.setAttribute('class','fa fa-star');
    starTwo.setAttribute('class','fa fa-star');
    starThree.setAttribute('class','fa fa-star');
    starFour.setAttribute('class','fa fa-star');
    starFive.setAttribute('class','fa fa-star');
    starOne.setAttribute('style','color: gold');
    starTwo.setAttribute('style','color: gold');
    starThree.setAttribute('style','color: gold');
    starFour.setAttribute('style','color: gold');
    starFive.setAttribute('style','color: gold');

    userBody.setAttribute('class','media-body');
    userPanelBody.setAttribute('class','panel-body');
    userBox.setAttribute('class','media panel');
    userBox.setAttribute('color', 'grey');
    userThumbnail.setAttribute('class','media-left');
    userImage.setAttribute('class','media-object');

    userText.textContent = theReviews[r].text;
    userName.textContent = theReviews[r].name;
    userImage.src = theReviews[r].thumbnail;
    userImage.setAttribute('width','100px');

        if (theReviews[r].ratings == 1) {
          starDiv.appendChild(starOne);
        }

        if (theReviews[r].ratings == 2) {
          starDiv.appendChild(starOne);
          starDiv.appendChild(starTwo);

        }
        if (theReviews[r].ratings == 3) {
          starDiv.appendChild(starOne);
          starDiv.appendChild(starTwo);
          starDiv.appendChild(starThree);

        }
        if (theReviews[r].ratings == 4) {
          starDiv.appendChild(starOne);
          starDiv.appendChild(starTwo);
          starDiv.appendChild(starThree);
          starDiv.appendChild(starFour);

        }
        if (theReviews[r].ratings== 5) {
          starDiv.appendChild(starOne);
          starDiv.appendChild(starTwo);
          starDiv.appendChild(starThree);
          starDiv.appendChild(starFour);
          starDiv.appendChild(starFive);
        }

    userThumbnail.appendChild(userImage);
    userBody.appendChild(starDiv);
    userBody.appendChild(userName);
    userBody.appendChild(userText);
    userPanelBody.appendChild(userThumbnail);
    userPanelBody.appendChild(userBody);
    userBox.appendChild(userPanelBody);
    reviewCol.appendChild(userBox);
  }
  //end restaurant review loop


  //review form
  //form box -> form body -> form el -> form group
  var formBox = document.createElement('div');
  var formBody = document.createElement('div');
  var formEl = document.createElement('form');
  var formGroup = document.createElement('div');
  var submitButton = document.createElement('button');
  var inputName = document.createElement('input');
  var textArea = document.createElement('textarea');
  var closeForm = document.createElement('button');
  var closeFont = document.createElement('i');

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
  iOne.setAttribute('id',"one-star");
  var iTwo = document.createElement('i');
  iTwo.setAttribute('id',"two-star");
  var iThree = document.createElement('i');
  iThree.setAttribute('id',"three-star");
  var iFour = document.createElement('i');
  iFour.setAttribute('id',"four-star");
  var iFive = document.createElement('i');
  iFive.setAttribute('id',"five-star");

  submitButton.setAttribute('id','submit-button');
  submitButton.setAttribute('data-id',data.id);

  iOne.setAttribute('class','fa fa-star fa-2x');
  iTwo.setAttribute('class','fa fa-star fa-2x');
  iThree.setAttribute('class','fa fa-star fa-2x');
  iFour.setAttribute('class','fa fa-star fa-2x');
  iFive.setAttribute('class','fa fa-star fa-2x');

  inputOne.setAttribute('type','radio');
  labelOne.setAttribute('value','1');
  labelOne.setAttribute('id','1');

  inputOne.setAttribute('autocomplete','off');

  inputTwo.setAttribute('type','radio');
  labelTwo.setAttribute('value','2');
  labelTwo.setAttribute('id','2');

  inputTwo.setAttribute('autocomplete','off');

  inputThree.setAttribute('type','radio');
  labelThree.setAttribute('value','3');
  labelThree.setAttribute('id','3');

  inputThree.setAttribute('autocomplete','off');

  inputFour.setAttribute('type','radio');
  labelFour.setAttribute('value','4');
  labelFour.setAttribute('id','4');
  inputFour.setAttribute('autocomplete','off');

  inputFive.setAttribute('type','radio');
  labelFive.setAttribute('value','5');
  labelFive.setAttribute('id','5');
  inputFive.setAttribute('autocomplete','off');

  labelOne.setAttribute('class','btn');
  labelTwo.setAttribute('class','btn');
  labelThree.setAttribute('class','btn');
  labelFour.setAttribute('class','btn');
  labelFive.setAttribute('class','btn');

  ratingDiv.setAttribute('class','btn-group');
  ratingDiv.setAttribute('data-toggle','buttons');
  ratingDiv.setAttribute('style','color: #eee;')

  formBox.setAttribute('class','hidden write-review col-xs-5 panel panel-default');
  formBox.setAttribute('id','the-form');
  formBody.setAttribute('class','panel-body');
  formGroup.setAttribute('class','form-group');

  inputName.setAttribute('type','name');
  inputName.setAttribute('class','form-control');
  inputName.setAttribute('size','4');
  inputName.setAttribute('placeholder','Name');
  inputName.setAttribute('id','name-input');

  textArea.setAttribute('class','form-control text-input');
  textArea.setAttribute('rows','5');
  textArea.setAttribute('type','text');
  textArea.setAttribute('placeholder','Write your review here!');
  textArea.setAttribute('id','review-input');
  textArea.setAttribute('name','review-input');

  closeForm.setAttribute('class','close-form btn btn-danger');
  closeForm.setAttribute('id','close-form');
  closeFont.setAttribute('class','fa fa-times');

  submitButton.setAttribute('type','button');
  submitButton.setAttribute('class','btn btn-danger submit-button');
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

  closeForm.appendChild(closeFont);
  formBox.appendChild(closeForm);
  formGroup.appendChild(inputName);
  formGroup.appendChild(ratingDiv);
  formGroup.appendChild(textArea);
  formGroup.appendChild(submitButton);
  formEl.appendChild(formGroup);
  formBody.appendChild(formEl);
  formBox.appendChild(formBody);
  //end form box

  backButton.appendChild(backFont);
  restaurantBox.appendChild(backButton);
  restaurantBox.appendChild(pageHeader);
  pageInfo.appendChild(pricePara);
  pageInfo.appendChild(locationPara);
  leftImage.appendChild(reviewImage);
  leftImage.appendChild(pageInfo);
  restaurantBox.appendChild(leftImage);
  restaurantBox.appendChild(writeButton);
  restaurantBox.appendChild(formBox);
  reviewRow.appendChild(reviewCol);
  restaurantBox.appendChild(reviewRow);
  return restaurantBox;
}

//event listener on search bar
var resultsArray = [];
var greeting = document.getElementById('greeting');
var search = document.getElementById('search');
search.addEventListener('submit', function(event) {
  event.preventDefault(); //prevent normal occurrence
  search.className = "search-top text-center form-inline";
  greeting.className = "hidden";
  clearList(backgroundArea);
  clearList(searchResultsArea);
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

var starInput = 1;
document.body.addEventListener('click', function(event) {
  var iOne = document.getElementById('one-star');
  var iTwo = document.getElementById('two-star');
  var iThree = document.getElementById('three-star');
  var iFour = document.getElementById('four-star');
  var iFive = document.getElementById('five-star');

  var buttonId = event.target.getAttribute('data-id');
  var type = event.target.textContent;
  var idType = event.target.id;

  if (type === "Reviews") {
    console.log('hey');
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

  if (idType === "back-button") {
    clearList(backgroundArea);
    clearList(searchResultsArea);
    if (resultsArray.length > 0) {
      for (var d = 0; d < resultsArray.length; d++) {
        searchResultsArea.appendChild(restaurant(resultsArray[d]));
      }
    }
  }

  if (type === "Write a review!") {
    var parent = event.target.parentNode;
    var writeReview = parent.getElementsByClassName('write-review')[0];
    toggle('hidden',writeReview);

    var oldestParent = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    var cover = oldestParent.getElementsByClassName('cover-dim')[0];
    toggle('hidden',cover);
  }

  if (idType === "close-form") {

    var parent = event.target.parentNode;
    var grandParent = parent.parentNode;
    var closeForm = grandParent.getElementsByClassName('write-review')[0];
    toggle('hidden',closeForm);

    var oldestParent = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    var cover = oldestParent.getElementsByClassName('cover-dim')[0];
    toggle('hidden',cover);

    iOne.setAttribute('style','color: none;');
    iTwo.setAttribute('style','color: none;');
    iThree.setAttribute('style','color: none;');
    iFour.setAttribute('style','color: none;');
    iFive.setAttribute('style','color: none;');
  }

  if (idType == "one-star") {
    starInput = 1;
    iOne.setAttribute('style', 'color: gold;');

    iTwo.setAttribute('style','color: none;');
    iThree.setAttribute('style','color: none;');
    iFour.setAttribute('style','color: none;');
    iFive.setAttribute('style','color: none;');
  }
  if (idType == "two-star") {
    starInput = 2;

    iOne.setAttribute('style', 'color: gold;');
    iTwo.setAttribute('style', 'color: gold;');

    iThree.setAttribute('style','color: none;');
    iFour.setAttribute('style','color: none;');
    iFive.setAttribute('style','color: none;');

  }
  if (idType == "three-star") {
    starInput = 3;

    iOne.setAttribute('style', 'color: gold;');
    iTwo.setAttribute('style', 'color: gold;');
    iThree.setAttribute('style', 'color: gold;');

    iFour.setAttribute('style','color: none;');
    iFive.setAttribute('style','color: none;');
  }
  if (idType == "four-star") {
    starInput = 4;

    iOne.setAttribute('style', 'color: gold;');
    iTwo.setAttribute('style', 'color: gold;');
    iThree.setAttribute('style', 'color: gold;');
    iFour.setAttribute('style', 'color: gold;');

    iFive.setAttribute('style','color: none;');

  }
  if (idType == "five-star") {
    starInput = 5;

    iOne.setAttribute('style', 'color: gold;');
    iTwo.setAttribute('style', 'color: gold;');
    iThree.setAttribute('style', 'color: gold;');
    iFour.setAttribute('style', 'color: gold;');
    iFive.setAttribute('style','color:gold');
  }
console.log(starInput);

//post review
  if (type === "Submit") {
    var oldestParent2 = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
    console.log(oldestParent2);
    var cover2 = oldestParent2.getElementsByClassName('cover-dim')[0];
    toggle('hidden',cover2);

    for (var n = 0; n < myRestaurants.length; n++) {
      if (myRestaurants[n].id == buttonId) {
        var nameInput = document.getElementById('name-input');
        var reviewInput = document.getElementById('review-input');
        var imageInput = myRestaurants[n].image;
        reviewInput = reviewInput.value;
        nameInput = nameInput.value;

        var userData = {};
        userData.name = nameInput;
        userData.text = reviewInput;
        userData.thumbnail = imageInput;
        userData.ratings = starInput;
        console.log(userData.ratings);
        var reviewsArray = myRestaurants[n].reviews;
        console.log(reviewsArray);

        reviewsArray.push(userData);
        console.log(reviewsArray);
        clearList(backgroundArea);
        clearList(searchResultsArea);
        searchResultsArea.appendChild(restaurantPage(myRestaurants[n]));
      } //end if restaurant[n].id == button Id
    } //end for loop variable n
  } //end if type = submit
}); //end event listener
