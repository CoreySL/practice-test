var myRestaurants = [
  {
    name: "Gulliver's",
    category: "steak",
    location: "Irvine, Ca",
    price: "$$",
    image: 'images/steak1.jpg',
    link: 'https://www.google.com',
    tags: ['gullivers', 'steak', 'fancy']
  },
  {
    name: "Ruth's Chris Steak House",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    link: 'https://www.google.com',
    tags: ['gullivers', 'steak', 'fancy']
  },
  {
    name: "Houston's Restaurant",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    link: 'https://www.google.com',
    tags: ['gullivers', 'steak', 'fancy']
  },
  {
    name: "Outback Steakhouse",
    category: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    link: 'https://www.google.com',
    tags: ['gullivers', 'steak', 'fancy']
  },
  {
    name: "Mastro's Steakhouse",
    cateogry: "steak",
    location: "Irvine, CA",
    price: "$$",
    image: 'images/steak1.jpg',
    link: 'https://www.google.com',
    tags: ['gullivers', 'steak', 'fancy']
  }
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

  var linkEl = document.createElement('a');
  linkEl.setAttribute('href','http://www.google.com');
  linkText = document.createTextNode('Reviews');

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

  resultsBox.appendChild(imgBox);
  resultsBox.appendChild(bodyBox);
  bodyBox.appendChild(restaurantTitle);
  imgBox.appendChild(restaurantImg);
  titleEl.appendChild(restaurantTitle);
  bodyBox.appendChild(titleEl);
  catEl.appendChild(restaurantCategory);
  bodyBox.appendChild(catEl);
  locationEl.appendChild(restaurantLocation);
  bodyBox.appendChild(locationEl);
  priceEl.appendChild(restaurantPrice);
  bodyBox.appendChild(priceEl);
  linkEl.appendChild(linkText);
  bodyBox.appendChild(linkEl);
  searchResultsArea.appendChild(resultsBox);
}


//clear results each time
function clear(node) {
   while (node.firstChild) {
    node.removeChild(node.firstChild);
  }
}

var search = document.getElementsByTagName('form')[0];

search.addEventListener('submit', function(event) {
  clear(searchResultsArea);
  event.preventDefault();
  var results = [];
  var keywords = document.getElementById('keywords').value;
  var keywordsArray = keywords.split(' ');
  //taking keywords entered and for every space found it puts a comma to make it an array

    for (var x = 0; x < keywordsArray.length; x++) {
      for (var i = 0; i < myRestaurants.length; i++) {
        var tagsArray = myRestaurants[i].tags;
        for (var y = 0; y < tagsArray.length; y++) {
        if (tagsArray[y].toLowerCase().indexOf(keywordsArray[x].toLowerCase()) !=-1) {
        //every time a word located at position x in the array of keywords is located
        // at a position in the tags array of that specific restaurant index (everytime it is found)
          results.push(myRestaurants[i]);
        //push the values at that index in the myRestaurant array into the empty results array
        }
      }
    }
  }

    if (results.length <= 0) {
      var errorEl = document.createElement('h4');
      var errorText = document.createTextNode('no match.');
      errorEl.appendChild(errorText);
      searchResultsArea.appendChild(errorEl);
    }
      else {
        for (var i = 0; i < results.length; i++) {
          displayResults(results[i]);
        }
      }
    });


//document.getElementBId('linkEl').onclick = function
  //display reviews for that restaurant (turn display off for certain element)
  //hide results list (reset page)
