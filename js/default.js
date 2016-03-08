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
      },
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
      },
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
      },
    ]
  },
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
    searchResultsArea.appendChild(theRestaurant);

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
        restaurant(resultsArray[d]);
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
    var id = event.target.getAttribute('data-id');
    var type = event.target.textContent;

    if (type === "Reviews") {
      clearList(searchResultsArea);
      clearList(backgroundArea);
      reviews(id);
    }



  });
