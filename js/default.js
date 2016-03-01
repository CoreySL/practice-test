var myRestaurants = [

  {
    name: "Gulliver's",
    category: "steak",
    location: "Irvine, CA",
    price: "$$"
  },
  {
    name: "Ruth's Chris Steak House",
    category: "steak",
    location: "Irvine, CA",
    price: "$$"
  },
  {
    name: "Houston's Restaurant",
    category: "steak",
    location: "Irvine, CA",
    price: "$$"
  },
  {
    name: "Outback Steakhouse",
    category: "steak",
    location: "Irvine, CA",
    price: "$$"
  },
  {
    name: "Mastro's Steakhouse",
    cateogry: "steak",
    location: "Irvine, CA",
    price: "$$"
  }
];


var displayResults = function(array) {
var newPara = document.createElement('p');
var newInfo = document.createTextNode("array.name + ", " + array.price + ", " + array.location + ", " array.category");
newPara.appendChild(newInfo);
var results = document.getElementById('results');
results.appendChild.(newPara);
}

var button = document.getElementById('search-button');
console.log(button);
button.addEventListener('click', keywordCheck, false);

function keywordCheck(theEvent) {
  console.log(theEvent);
  var searchText = document.getElementById('search-text');
  searchText = searchText.value;
  for (var i = 0; i < myRestaurants.length; i++) {
    if (searchText === myRestaurants[i].name)
    || (searchText === myRestaurants[i].category)
    || (searchText === myRestaurants[i].location)
    || (searchText === myRestaurants[i].price) {
      displayResults(myRestaurants[i]);
    }
    else {
      //show no search found
    }
  }
}
