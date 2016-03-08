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

function restaurantPage(data) {
  var reviewBox = document.createElement('div');
  reviewBox.setAttribute('class','container panel panel-default review-box');

  var writeButton = document.createElement('button');
  writeButton.setAttribute('type','button');
  writeButton.setAttribute('class','btn btn-danger btn-lg write-button');
  var writeButtonText = document.createTextNode('Write a review!');

  //restaurant name on review page
  var pageHeader = document.createElement('h1');
  var pageName = document.createTextNode(data.name);
  pageHeader.setAttribute('class','page-header')

  var pageInfo = document.createElement('div');
  pageInfo.setAttribute('class','col-xs-6 col-xs-offset-6');
  var pricePara = document.createElement('p');
  var locationPara = document.createElement('p');
  var pagePrice = document.createTextNode("price: " + data.price);
  var pageLocation = document.createTextNode("location " + data.location);

  //restaurant image on review page
  var reviewImage = document.createElement('img');
  var leftImage = document.createElement('div');
  leftImage.setAttribute('class','col-xs-6 img-responsive page-image');

  reviewImage.setAttribute('class','media-object');
  reviewImage.src = data.image;
  reviewImage.setAttribute('width','300px');

  //review page form box
  var formBox = document.createElement('div');
  formBox.setAttribute('class','hidden write-review col-xs-12 col-sm-12 col-md-12 col-lg-6 panel panel-danger');

  var submitButton = document.createElement('button');
  var submitText = document.createTextNode('Submit');
  submitButton.setAttribute('type','button');
  submitButton.setAttribute('class','btn btn-danger');
  submitButton.setAttribute('id', data.id);

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
  reviewBorder.setAttribute('class','panel panel-default col-xs-12 col-md-6');

  var formDiv = document.createElement('div');
  formDiv.setAttribute('class','form-group');
  //end form box

  reviewCol = document.createElement('div');
  reviewCol.setAttribute('class','col-xs-12');

  //row for reviews on review page
  var reviewRow = document.createElement('div');
  reviewRow.setAttribute('class','row page-reviews');

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

  return reviewBox;
}

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
  var restaurantId = event.target.getAttribute('data-id');
  var type = event.target.textContent;
  console.log(restaurantId);

  if (type === "Reviews") {
    for (var z = 0; z < myRestaurants.length; z++) {
      // console.log("here");
      //console.log(restaurantId);
      // console.log(myRestaurants[z].id);

      if (myRestaurants[z].id == restaurantId) {
        clearList(backgroundArea);
        clearList(searchResultsArea);

        // console.log("here");
        searchResultsArea.appendChild(restaurantPage(myRestaurants[z]));
      }
    }
  }
});
