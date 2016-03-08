var myRestaurants = [
  {
    id: 1,
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

  var formBox = document.createElement('div');
  var reviewCol = document.createElement('div');
  var reviewRow = document.createElement('div');
  var reviewBorder = document.createElement('div');

  var submitButton = document.createElement('button');
  var formEl = document.createElement('form');
  var inputName = document.createElement('input');
  var textArea = document.createElement('textarea');
  var formDiv = document.createElement('div');

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
  reviewImage.setAttribute('width','500px');

  reviewRow.setAttribute('class','row');
  reviewCol.setAttribute('class','col-xs-12 panel panel-default');

  //review form
  formBox.setAttribute('class','hidden write-review col-xs-6 panel panel-danger');
  formDiv.setAttribute('class','form-group');
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
  //end form box

  //looks through myRestaurant array and finds all of its reviews
  for (var r = 0; r < data.reviews.length; r++) {
    var userBox = document.createElement('div');

    var userText = document.createElement('p');
    var userName = document.createElement('h5');

    userText.textContent = data.reviews[r].text;
    userName.textContent = data.reviews[r].name;

    userBox.setAttribute('class','panel');

    userBox.appendChild(userName);
    userBox.appendChild(userText);
    reviewCol.appendChild(userBox);
  }

  reviewBox.appendChild(pageHeader);
  leftImage.appendChild(reviewImage);
  pageInfo.appendChild(pricePara);
  pageInfo.appendChild(locationPara);
  reviewBox.appendChild(pageInfo);
  reviewBox.appendChild(leftImage);
  reviewBox.appendChild(writeButton);

  formDiv.appendChild(inputName);
  formDiv.appendChild(textArea);
  formDiv.appendChild(submitButton);
  formEl.appendChild(formDiv);
  formBox.appendChild(formEl);
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

//event listener for other stuff
document.body.addEventListener('click', function(event) {
  var buttonId = event.target.getAttribute('data-id');
  var type = event.target.textContent;

  if (type === "Reviews") {
    for (var z = 0; z < myRestaurants.length; z++) {
      // console.log("here");
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
});
