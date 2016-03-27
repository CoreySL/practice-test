var myRestaurants = [
  {
    id: 1,
    name: "STK Las Vegas",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109 filler text filler text filler text filler text filler text filler textfiller text filler text filler textfiller text filler text filler textfiller text filler text filler textfiller text filler text filler textfiller text filler text filler textfiller text filler text filler text filler text filler text filler text filler text filler text filler textfiller text filler text filler textfiller text filler text filler textfiller text filler text filler textfiller text filler text filler textfiller text filler text filler textfiller text filler text filler textfiller text filler text filler textfiller text filler text filler textfiller text filler text filler textfiller text filler text filler text",
    price: "$$$$",
    image: 'images/stk.jpg',
    restaurantImage: 'http://amateurgastronomer.com/index/wp-content/uploads/2011/11/STKatl.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    totalRatings: 1,
    foodImages: [
      {
        food:'images/stkimg-1.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      },
      {
        food:'images/stkimg-2.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      },
      {
        food:'images/stkimg-3.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      }
    ],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"Had an amazing experience today (3.8.2016) at Gens. I believe that this is the best experience I've had after visiting this locations multiple times. Service is always good and food is great but this time it was perfection. Thank you to Joshua for the amazing, quick and genuine service you delivered today. I always recommend this place, but if Joshua is working ask to sit in his area. Give this guy a raise or promotion.",
        ratings: 4,
        number: 1
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"IT'S BUSY Man! There's never a time that this place isn't busy. When we got there they said only a 25 min wait. But then we waited more than 25 mins. PARKING is busy too. What is it when you see someone that gets in their car, starts their engine and sits there playing on their phone while someone else is waiting for them to leave. It's called 'Put your phone down and drive' cuz people are waiting for your parking spot. Alas no, playtime in the car is the thing in Cerritos, I guess. THE FOOD is always always super deelish. Especially the Hawaiian steak, short ribs (w/o the bone), and chicken bulgogi. But we always order more of the Hawaiian steak. It comes with pre-cut pineapple which tastes like it's from a can but you can order fresh pineapples (more flavor). We come back for the food not the issues though. So I guess pros out way cons.",
        ratings: 5,
        number: 2
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place used to be our go to place for KBBQ, but our experience last night was the worst. The wait never really bothered my husband and I because the quality of their food and customer service was always worth the wait. Unfortunately, this visit will be our last. Save your self that hour wait and find another place to go to!! Plenty of other establishments in the area that are half the wait. Their brisket used to be our fave, this time it was full of fat! Disgusting, we waited until we cooked off most of the fat but it was still super chewy and nasty. Their spicy tofu soup used to be awesome, this time it was lacking...flavorless and no where near as tasty as it used to be. I used to ask for seconds, this time I forced my self to finish it because I hate wasting food. The beef bulgogi was flavorless and lacked the quality it used to have. The ONLY thing that we thought was okay, was the Galbi, BUT you only receive one per order, so that sucked. Our waiter was nice and we felt bad for him because it seemed like he was the only server in our section. And he never really had a chance to clear our table. As for the hostess, she's another story :/ she needs better customer service training.",
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
    name: "Public House",
    category: "steak",
    location: "The Grand Canal Shoppes at the Venetian 3355 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$",
    image: 'images/publichouse.jpg',
    restaurantImage: 'images/publichouse.jpg',
    tags: ['beer', 'gastropub', 'bone marrow','burger','bar','vegas'],
    totalRatings: 1,
    foodImages: [
      {
        food:'images/publichouseimg-1.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      },
      {
        food:'images/publichouseimg-2.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      },
      {
        food:'images/publichouseimg-3.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      }
    ],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"Had an amazing experience today (3.8.2016) at Gens. I believe that this is the best experience I've had after visiting this locations multiple times. Service is always good and food is great but this time it was perfection. Thank you to Joshua for the amazing, quick and genuine service you delivered today. I always recommend this place, but if Joshua is working ask to sit in his area. Give this guy a raise or promotion.",
        ratings: 4,
        number: 1
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"IT'S BUSY Man! There's never a time that this place isn't busy. When we got there they said only a 25 min wait. But then we waited more than 25 mins. PARKING is busy too. What is it when you see someone that gets in their car, starts their engine and sits there playing on their phone while someone else is waiting for them to leave. It's called 'Put your phone down and drive' cuz people are waiting for your parking spot. Alas no, playtime in the car is the thing in Cerritos, I guess. THE FOOD is always always super deelish. Especially the Hawaiian steak, short ribs (w/o the bone), and chicken bulgogi. But we always order more of the Hawaiian steak. It comes with pre-cut pineapple which tastes like it's from a can but you can order fresh pineapples (more flavor). We come back for the food not the issues though. So I guess pros out way cons.",
        ratings: 5,
        number: 2
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place used to be our go to place for KBBQ, but our experience last night was the worst. The wait never really bothered my husband and I because the quality of their food and customer service was always worth the wait. Unfortunately, this visit will be our last. Save your self that hour wait and find another place to go to!! Plenty of other establishments in the area that are half the wait. Their brisket used to be our fave, this time it was full of fat! Disgusting, we waited until we cooked off most of the fat but it was still super chewy and nasty. Their spicy tofu soup used to be awesome, this time it was lacking...flavorless and no where near as tasty as it used to be. I used to ask for seconds, this time I forced my self to finish it because I hate wasting food. The beef bulgogi was flavorless and lacked the quality it used to have. The ONLY thing that we thought was okay, was the Galbi, BUT you only receive one per order, so that sucked. Our waiter was nice and we felt bad for him because it seemed like he was the only server in our section. And he never really had a chance to clear our table. As for the hostess, she's another story :/ she needs better customer service training.",
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
    id: 3,
    name: "Yonaka Modern Japanese",
    category: "sushi, japanese, asian",
    location: "4983 W Flamingo Rd Ste A Las Vegas, NV 89103",
    price: "$$",
    image: 'images/yonakaimg-3.jpg',
    restaurantImage: 'http://amateurgastronomer.com/index/wp-content/uploads/2011/11/STKatl.jpg',
    tags: ['asian', 'sushi', 'fancy','vegas','japanese','vegas','ramen','uni',''],
    totalRatings: 1,
    foodImages: [
      {
        food:'images/yonakaimg-1.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      },
      {
        food:'images/yonakaimg-2.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      },
      {
        food:'images/yonakaimg-3.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      }
    ],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"Had an amazing experience today (3.8.2016) at Gens. I believe that this is the best experience I've had after visiting this locations multiple times. Service is always good and food is great but this time it was perfection. Thank you to Joshua for the amazing, quick and genuine service you delivered today. I always recommend this place, but if Joshua is working ask to sit in his area. Give this guy a raise or promotion.",
        ratings: 4,
        number: 1
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"IT'S BUSY Man! There's never a time that this place isn't busy. When we got there they said only a 25 min wait. But then we waited more than 25 mins. PARKING is busy too. What is it when you see someone that gets in their car, starts their engine and sits there playing on their phone while someone else is waiting for them to leave. It's called 'Put your phone down and drive' cuz people are waiting for your parking spot. Alas no, playtime in the car is the thing in Cerritos, I guess. THE FOOD is always always super deelish. Especially the Hawaiian steak, short ribs (w/o the bone), and chicken bulgogi. But we always order more of the Hawaiian steak. It comes with pre-cut pineapple which tastes like it's from a can but you can order fresh pineapples (more flavor). We come back for the food not the issues though. So I guess pros out way cons.",
        ratings: 5,
        number: 2
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place used to be our go to place for KBBQ, but our experience last night was the worst. The wait never really bothered my husband and I because the quality of their food and customer service was always worth the wait. Unfortunately, this visit will be our last. Save your self that hour wait and find another place to go to!! Plenty of other establishments in the area that are half the wait. Their brisket used to be our fave, this time it was full of fat! Disgusting, we waited until we cooked off most of the fat but it was still super chewy and nasty. Their spicy tofu soup used to be awesome, this time it was lacking...flavorless and no where near as tasty as it used to be. I used to ask for seconds, this time I forced my self to finish it because I hate wasting food. The beef bulgogi was flavorless and lacked the quality it used to have. The ONLY thing that we thought was okay, was the Galbi, BUT you only receive one per order, so that sucked. Our waiter was nice and we felt bad for him because it seemed like he was the only server in our section. And he never really had a chance to clear our table. As for the hostess, she's another story :/ she needs better customer service training.",
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
    id: 4,
    name: "adfasdfasdf",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    restaurantImage: 'http://amateurgastronomer.com/index/wp-content/uploads/2011/11/STKatl.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    totalRatings: 1,
    foodImages: [
      {
        food:'images/stkimg-1.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      },
      {
        food:'images/stkimg-2.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      },
      {
        food:'images/stkimg-3.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      }
    ],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"Had an amazing experience today (3.8.2016) at Gens. I believe that this is the best experience I've had after visiting this locations multiple times. Service is always good and food is great but this time it was perfection. Thank you to Joshua for the amazing, quick and genuine service you delivered today. I always recommend this place, but if Joshua is working ask to sit in his area. Give this guy a raise or promotion.",
        ratings: 4,
        number: 1
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"IT'S BUSY Man! There's never a time that this place isn't busy. When we got there they said only a 25 min wait. But then we waited more than 25 mins. PARKING is busy too. What is it when you see someone that gets in their car, starts their engine and sits there playing on their phone while someone else is waiting for them to leave. It's called 'Put your phone down and drive' cuz people are waiting for your parking spot. Alas no, playtime in the car is the thing in Cerritos, I guess. THE FOOD is always always super deelish. Especially the Hawaiian steak, short ribs (w/o the bone), and chicken bulgogi. But we always order more of the Hawaiian steak. It comes with pre-cut pineapple which tastes like it's from a can but you can order fresh pineapples (more flavor). We come back for the food not the issues though. So I guess pros out way cons.",
        ratings: 5,
        number: 2
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place used to be our go to place for KBBQ, but our experience last night was the worst. The wait never really bothered my husband and I because the quality of their food and customer service was always worth the wait. Unfortunately, this visit will be our last. Save your self that hour wait and find another place to go to!! Plenty of other establishments in the area that are half the wait. Their brisket used to be our fave, this time it was full of fat! Disgusting, we waited until we cooked off most of the fat but it was still super chewy and nasty. Their spicy tofu soup used to be awesome, this time it was lacking...flavorless and no where near as tasty as it used to be. I used to ask for seconds, this time I forced my self to finish it because I hate wasting food. The beef bulgogi was flavorless and lacked the quality it used to have. The ONLY thing that we thought was okay, was the Galbi, BUT you only receive one per order, so that sucked. Our waiter was nice and we felt bad for him because it seemed like he was the only server in our section. And he never really had a chance to clear our table. As for the hostess, she's another story :/ she needs better customer service training.",
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
    id: 5,
    name: "mcdonalds",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    restaurantImage: 'http://amateurgastronomer.com/index/wp-content/uploads/2011/11/STKatl.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    totalRatings: 1,
    foodImages: [
      {
        food:'images/stkimg-1.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      },
      {
        food:'images/stkimg-2.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      },
      {
        food:'images/stkimg-3.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      }
    ],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"Had an amazing experience today (3.8.2016) at Gens. I believe that this is the best experience I've had after visiting this locations multiple times. Service is always good and food is great but this time it was perfection. Thank you to Joshua for the amazing, quick and genuine service you delivered today. I always recommend this place, but if Joshua is working ask to sit in his area. Give this guy a raise or promotion.",
        ratings: 4,
        number: 1
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"IT'S BUSY Man! There's never a time that this place isn't busy. When we got there they said only a 25 min wait. But then we waited more than 25 mins. PARKING is busy too. What is it when you see someone that gets in their car, starts their engine and sits there playing on their phone while someone else is waiting for them to leave. It's called 'Put your phone down and drive' cuz people are waiting for your parking spot. Alas no, playtime in the car is the thing in Cerritos, I guess. THE FOOD is always always super deelish. Especially the Hawaiian steak, short ribs (w/o the bone), and chicken bulgogi. But we always order more of the Hawaiian steak. It comes with pre-cut pineapple which tastes like it's from a can but you can order fresh pineapples (more flavor). We come back for the food not the issues though. So I guess pros out way cons.",
        ratings: 5,
        number: 2
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place used to be our go to place for KBBQ, but our experience last night was the worst. The wait never really bothered my husband and I because the quality of their food and customer service was always worth the wait. Unfortunately, this visit will be our last. Save your self that hour wait and find another place to go to!! Plenty of other establishments in the area that are half the wait. Their brisket used to be our fave, this time it was full of fat! Disgusting, we waited until we cooked off most of the fat but it was still super chewy and nasty. Their spicy tofu soup used to be awesome, this time it was lacking...flavorless and no where near as tasty as it used to be. I used to ask for seconds, this time I forced my self to finish it because I hate wasting food. The beef bulgogi was flavorless and lacked the quality it used to have. The ONLY thing that we thought was okay, was the Galbi, BUT you only receive one per order, so that sucked. Our waiter was nice and we felt bad for him because it seemed like he was the only server in our section. And he never really had a chance to clear our table. As for the hostess, she's another story :/ she needs better customer service training.",
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
    id: 6,
    name: "asdfasdfasdf",
    category: "steak",
    location: "3708 Las Vegas Blvd S Las Vegas, NV 89109",
    price: "$$$$",
    image: 'images/stk.jpg',
    restaurantImage: 'http://amateurgastronomer.com/index/wp-content/uploads/2011/11/STKatl.jpg',
    tags: ['steakhouse', 'steak', 'fancy','american','bar','vegas'],
    totalRatings: 1,
    foodImages: [
      {
        food:'images/stkimg-1.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      },
      {
        food:'images/stkimg-2.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      },
      {
        food:'images/stkimg-3.jpg',
        name: "This is a dish",
        description: "This dish is our most popular dish. Everyone loves it!"
      }
    ],
    reviews: [
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"Had an amazing experience today (3.8.2016) at Gens. I believe that this is the best experience I've had after visiting this locations multiple times. Service is always good and food is great but this time it was perfection. Thank you to Joshua for the amazing, quick and genuine service you delivered today. I always recommend this place, but if Joshua is working ask to sit in his area. Give this guy a raise or promotion.",
        ratings: 4,
        number: 1
      },
      {
        name:"Bob",
        thumbnail:'images/simpson.jpg',
        text:"IT'S BUSY Man! There's never a time that this place isn't busy. When we got there they said only a 25 min wait. But then we waited more than 25 mins. PARKING is busy too. What is it when you see someone that gets in their car, starts their engine and sits there playing on their phone while someone else is waiting for them to leave. It's called 'Put your phone down and drive' cuz people are waiting for your parking spot. Alas no, playtime in the car is the thing in Cerritos, I guess. THE FOOD is always always super deelish. Especially the Hawaiian steak, short ribs (w/o the bone), and chicken bulgogi. But we always order more of the Hawaiian steak. It comes with pre-cut pineapple which tastes like it's from a can but you can order fresh pineapples (more flavor). We come back for the food not the issues though. So I guess pros out way cons.",
        ratings: 5,
        number: 2
      },
      {
        name:"Corey",
        thumbnail:'images/simpson.jpg',
        text:"This place used to be our go to place for KBBQ, but our experience last night was the worst. The wait never really bothered my husband and I because the quality of their food and customer service was always worth the wait. Unfortunately, this visit will be our last. Save your self that hour wait and find another place to go to!! Plenty of other establishments in the area that are half the wait. Their brisket used to be our fave, this time it was full of fat! Disgusting, we waited until we cooked off most of the fat but it was still super chewy and nasty. Their spicy tofu soup used to be awesome, this time it was lacking...flavorless and no where near as tasty as it used to be. I used to ask for seconds, this time I forced my self to finish it because I hate wasting food. The beef bulgogi was flavorless and lacked the quality it used to have. The ONLY thing that we thought was okay, was the Galbi, BUT you only receive one per order, so that sucked. Our waiter was nice and we felt bad for him because it seemed like he was the only server in our section. And he never really had a chance to clear our table. As for the hostess, she's another story :/ she needs better customer service training.",
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
  }
]

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

function resultsPage(data) {
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

  theRestaurant.className = "result-box media well";
  theRestaurant.setAttribute('id','restaurant');
  theRestaurant.setAttribute('style','background-color: #fafafa;');
  imgBox.className = "media-left media-top";
  restaurantImg.className = "media-object img-thumbnail";
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
  var restaurantBox = document.createElement('div');

  var titleRow = document.createElement('div');
  titleRow.setAttribute('class','row');

    var titleColumn = document.createElement('div');
    titleColumn.setAttribute('class','col-xs-6');
      var title = document.createElement('h1');
      title.textContent = data.name;
      title.setAttribute('class','restaurant-title');

    var bookmarkColumn = document.createElement('div');
    bookmarkColumn.setAttribute('class','col-xs-3 col-xs-offset-1');
      bookmarkButton = document.createElement('button');
      bookmarkButton.setAttribute('data-id',data.id);
      var bookmarkButtonId = bookmarkButton.getAttribute('data-id');
      //console.log(bookmarkButtonId);
      //console.log(bookmarksArray);
      bookmarkButton.textContent = "Bookmark";

      bookmarkButton.setAttribute('class','btn btn-lg bookmark-button');
      //for (var k = 0; k < bookmarksArray.length; k++) {
        if (bookmarksArray.includes(data)) {
          //console.log("matched");
          bookmarkButton.textContent = "Bookmarked!";
          var bookmarkedCheck = document.createElement('i');
          bookmarkedCheck.setAttribute('class','fa fa-check');
          bookmarkedCheck.setAttribute('color','white');

          bookmarkButton.appendChild(bookmarkedCheck);
        }
        else {
          bookmarkButton.textContent = "Bookmark";
        }

    var theReviews = data.reviews;  //selecting the property "reviews" from myRestaurant array
    // console.log(theReviews);
  //  var newUserId = theReviews.newUserId;
    var writeReviewColumn = document.createElement('div');
    writeReviewColumn.setAttribute('class','col-xs-2');
      var writeButton = document.createElement('button');
      writeButton.setAttribute('data-id',data.id);
      writeButton.setAttribute('class','btn btn-lg write-button');
      writeButton.setAttribute('id','write-button');

        if (theReviews.length > 4) {
          // console.log('YES THIS WORKED');
          var reviewedCheck = document.createElement('i');
          reviewedCheck.setAttribute('class','fa fa-check');
          reviewedCheck.setAttribute('color','white');
          writeButton.setAttribute('style','background-color: #f04343;');
          writeButton.textContent = "Reviewed!";
          writeButton.appendChild(reviewedCheck);

        }
        else {
          writeButton.textContent = "Write a review!";
        }



    var infoColumn = document.createElement('div');
    infoColumn.setAttribute('class','col-xs-6 col-xs-offset-');

      var cost = document.createElement('h5');
      cost.textContent = data.price;

      var address = document.createElement('h5');
      address.textContent = data.location;
  var infoPhotoRow = document.createElement('div');
  infoPhotoRow.setAttribute('class','row');

    infoPhotoColumn = document.createElement('div');
    infoPhotoColumn.setAttribute('class','col-xs-6');
        var mainPhoto = document.createElement('img');
        mainPhoto.src = data.restaurantImage;
        mainPhoto.setAttribute('class','img-responsive img-thumbnail');
        mainPhoto.setAttribute('width','100%');
        mainPhoto.setAttribute('style','max-height: 350px;');

  var photosTitleRow = document.createElement('div');
  photosTitleRow.setAttribute('class','row');
    var photosTitleColumn = document.createElement('div');
    photosTitleColumn.setAttribute('class','col-xs-12');
      var photosTitle = document.createElement('h3');
      photosTitle.textContent = "Most Popular Dishes";
      photosTitle.setAttribute('class','photosTitle');

  var foodPhotoRow = document.createElement('div');
  foodPhotoRow.setAttribute('class','row');

    var popularFood = data.foodImages;
    // console.log(popularFood.length);
    for (var m = 0; m < popularFood.length; m++) {
      var foodPhotoColumn = document.createElement('div');
      foodPhotoColumn.setAttribute('class','col-xs-4');
        var divThumbnail = document.createElement('div');
        divThumbnail.setAttribute('class','popularDiv thumbnail hoverfood');

          var popularImage = document.createElement('img');
          popularImage.src = popularFood[m].food;

          var divCaption = document.createElement('div');
          divCaption.setAttribute('class','caption');

            var foodName = document.createElement('h3');
            foodName.textContent = popularFood[m].name;

            var foodParagraph = document.createElement('p');
            foodParagraph.textContent = popularFood[m].description;

        divCaption.appendChild(foodName);
        divCaption.appendChild(foodParagraph);

        divThumbnail.appendChild(popularImage);
        divThumbnail.appendChild(divCaption);

        foodPhotoColumn.appendChild(divThumbnail);

        foodPhotoRow.appendChild(foodPhotoColumn);
    }

  var reviewsRow = document.createElement('div');
  reviewsRow.setAttribute('class','row');

    var reviewsColumn = document.createElement('div');
    reviewsColumn.setAttribute('class','col-xs-12');
      var reviewsTitle = document.createElement('h3');
      reviewsTitle.textContent = "Reviews";

    reviewsColumn.appendChild(reviewsTitle);

    //looks through myRestaurant array and finds all of its reviews
    for (var r = 0; r < theReviews.length; r++) {
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
      userBox.setAttribute('class','media panel user-box');
      userThumbnail.setAttribute('class','media-left');
      userImage.setAttribute('class','media-object img-thumbnail');

      userText.textContent = theReviews[r].text;
      userName.textContent = theReviews[r].name;
      userImage.src = theReviews[r].thumbnail;
      userImage.setAttribute('width','110px');
      userImage.setAttribute('height','120px');

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
      reviewsColumn.appendChild(userBox);
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

      formBox.setAttribute('style','background-color: #fafafa;');

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
      ratingDiv.setAttribute('style','color: #777;')

      formBox.setAttribute('class','hidden write-review form-laptop col-xs-5 well panel panel-default');
      formBox.setAttribute('id','the-form');
      formBody.setAttribute('class','panel-body');
      formGroup.setAttribute('class','form-group');
      formEl.setAttribute('id','review-form');

      inputName.setAttribute('type','name');
      inputName.setAttribute('class','form-control');
      inputName.setAttribute('style','width: 300px;');
      inputName.setAttribute('placeholder','Name');
      inputName.setAttribute('id','name-input');

      textArea.setAttribute('class','form-control text-input');
      textArea.setAttribute('rows','10');
      textArea.setAttribute('type','text');
      textArea.setAttribute('placeholder','Write your review here!');
      textArea.setAttribute('id','review-input');
      textArea.setAttribute('name','review-input');
      textArea.setAttribute('value','Reset Form');

      closeForm.setAttribute('class','close-form btn btn-danger');
      closeForm.setAttribute('id','close-form');
      closeFont.setAttribute('class','fa fa-times');
      closeFont.setAttribute('id','close-font');

      submitButton.setAttribute('id','submit-button');
      submitButton.setAttribute('data-id',data.id);
      submitButton.setAttribute('type','button');
      submitButton.setAttribute('class','btn btn-danger');
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
      restaurantBox.appendChild(formBox);
      //end form box

      // backButton.appendChild(backFont);
      // restaurantBox.appendChild(backButton);

          titleColumn.appendChild(title);
          bookmarkColumn.appendChild(bookmarkButton);

          writeReviewColumn.appendChild(writeButton);

        titleRow.appendChild(titleColumn);
        titleRow.appendChild(bookmarkColumn);
        titleRow.appendChild(writeReviewColumn);
      restaurantBox.appendChild(titleRow);

          infoPhotoColumn.appendChild(mainPhoto);
        infoPhotoRow.appendChild(infoPhotoColumn);
      restaurantBox.appendChild(infoPhotoRow);

      photosTitleColumn.appendChild(photosTitle);
    photosTitleRow.appendChild(photosTitleColumn);
  restaurantBox.appendChild(photosTitleRow);

          infoColumn.appendChild(cost);
          infoColumn.appendChild(address);
        infoPhotoRow.appendChild(infoColumn);
    //  restaurantBox.appendChild(infoRow);

      restaurantBox.appendChild(foodPhotoRow);

        reviewsRow.appendChild(reviewsColumn);
      restaurantBox.appendChild(reviewsRow);

    return restaurantBox;
}
//END FUNCTION FOR RESTAURANT PAGE

var resultsArray = [];
var greeting = document.getElementById('greeting');
var search = document.getElementById('search');
var myNav = document.getElementById('my-nav');
var showHome = document.getElementById('show-home');

var bookmarksArray = [];
var starInput = 1;
var backResults = document.getElementById('back-to-results');
var backRestaurant = document.getElementById("back-to-restaurant");

// var backgroundArea = document.getElementById('background-area');
var homeLayout = document.getElementById('home-layout');
var searchResultsArea = document.getElementById('results-area');
var restaurantArea = document.getElementById('restaurant-area');
var bookmarksArea = document.getElementById('bookmarks-area');

var bookmarksContainer = document.getElementById('bookmarks-container');
var resultsContainer = document.getElementById('results-container');
var restaurantContainer = document.getElementById('restaurant-container');
var categoriesContainer = document.getElementById('categories-container');


//event listener on search bar
search.addEventListener('submit', function(event) {
  event.preventDefault(); //prevent normal occurrence
  myNav.className = "navbar-top navbar-inverse text-center"; //move navbar to top of page
  showHome.className = "navbar-inline nav-float";
  // greeting.className = "hidden"; //hide home page greeting
  clearList(homeLayout);
  clearList(restaurantArea);
  clearList(searchResultsArea);
  clearList(bookmarksArea);
  resultsArray =[];
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
    categoriesContainer.className = "hidden";
    var numberofMatches = resultsArray.length;
    var statement = document.createElement('h4');
    statement.textContent = numberofMatches + " restaurants found.";
    searchResultsArea.appendChild(statement);
    for (var d = 0; d < resultsArray.length; d++) {
      searchResultsArea.appendChild(resultsPage(resultsArray[d]));
    }
  }
  else {
    var noResultHeader = document.createElement('h4');
    var noResultText = document.createTextNode('Sorry, no matches found.');
    noResultHeader.appendChild(noResultText);
    searchResultsArea.appendChild(noResultHeader);
  }
});

var restaurantArray = [];

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
    // console.log(myRestaurants);
    // console.log(bookmarksArray + "hey");
    for (var z = 0; z < myRestaurants.length; z++) {
      //console.log(restaurantId);
      // console.log(myRestaurants[z].id);
      if (myRestaurants[z].id == buttonId) {
        restaurantArray.push(myRestaurants[z]);
        // console.log("yes");
        toggle('hidden', backResults); //show the back button to results page
        toggle('hidden', restaurantContainer); //show restaurant container
        toggle('hidden', resultsContainer); //hide results container
        // clearList(backgroundArea);
        clearList(searchResultsArea); //clear anything in search results area
        clearList(bookmarksArea); //clear anything in bookmarks area
        //calling the function and appending it to the review page
        restaurantArea.appendChild(restaurantPage(restaurantArray[0])); //put restaurant page
      }
    }
  }

  if (idType == "checkBookmarkFont") { //defined on html

    while (bookmarksContainer.classList == "hidden container") {
      bookmarksContainer.classList.remove('hidden');
    }
    while (bookmarksContainer.classList == "container hidden") {
      bookmarksContainer.classList.remove('hidden');
    }

    while (restaurantArea.firstChild) { //if currently on restaurant page
      toggle('hidden', restaurantContainer); //hide restaurant container
      clearList(restaurantArea);//clear restaurant area
      toggle('hidden', backRestaurant); //show back to restaurant button
    }
    while (searchResultsArea.firstChild) { //if currently on results page
      toggle('hidden', resultsContainer); //hide results container
      clearList(searchResultsArea); //clear results area
      toggle('hidden', backResults); //show back to results button
    }

    clearList(bookmarksArea); //clear anything already in bookmarks area

    if (bookmarksArray.length > 0) {
      var bookmarksMessage = document.createElement('h4');
      bookmarkCount = bookmarksArray.length;
      bookmarksMessage.textContent = "You have " + bookmarkCount + " bookmarks.";
      searchResultsArea.appendChild(bookmarksMessage);
      for (var h = 0; h < bookmarksArray.length; h++) {
        bookmarksArea.appendChild(restaurant(bookmarksArray[h]));
      }
    }
    else {
      var noBookmarks = document.createElement('h4');
      noBookmarks.textContent = "You have no bookmarks.";
      bookmarksArea.appendChild(noBookmarks);
    }
  }

  if (idType === "check-bookmarks") { //defined on html

    while (bookmarksContainer.classList == "hidden container") {
      bookmarksContainer.classList.remove('hidden');
    }
    while (bookmarksContainer.classList == "container hidden") {
      bookmarksContainer.classList.remove('hidden');
    }

    while (restaurantArea.firstChild) { //if currently on restaurant page
      toggle('hidden', restaurantContainer); //hide restaurant container
      clearList(restaurantArea);//clear restaurant area
      toggle('hidden', backRestaurant); //show back to restaurant button
    }
    while (searchResultsArea.firstChild) { //if currently on results page
      toggle('hidden', resultsContainer); //hide results container
      clearList(searchResultsArea); //clear results area
      toggle('hidden', backResults); //show back to results button
    }

    clearList(bookmarksArea); //clear anything already in bookmarks area

    if (bookmarksArray.length > 0) {
      var bookmarksMessage = document.createElement('h4');
      bookmarkCount = bookmarksArray.length;
      bookmarksMessage.textContent = "You have " + bookmarkCount + " bookmarks.";
      searchResultsArea.appendChild(bookmarksMessage);
      for (var h = 0; h < bookmarksArray.length; h++) {
        bookmarksArea.appendChild(restaurant(bookmarksArray[h]));
      }
    }
    else {
      var noBookmarks = document.createElement('h4');
      noBookmarks.textContent = "You have no bookmarks.";
      bookmarksArea.appendChild(noBookmarks);
    }
  }

  if (idType === "back-to-results") { //defined on html
    toggle('hidden',backResults);
    clearList(searchResultsArea);

    while (bookmarksArea.firstChild) {
      // clearList(bookmarksArea);
      toggle('hidden', bookmarksContainer);
      toggle('hidden', resultsContainer);
    }
    while (restaurantArea.firstChild) {
      clearList(restaurantArea);
      toggle('hidden', resultsContainer);
    }

    var numberofMatches = resultsArray.length;
    var statement = document.createElement('h4');
    statement.textContent = numberofMatches + " restaurants found.";
    searchResultsArea.appendChild(statement);

    if (resultsArray.length > 0) {
      for (var d = 0; d < resultsArray.length; d++) {
        searchResultsArea.appendChild(resultsPage(resultsArray[d]));
      }
    }
  }

  if (idType === "back-results-font") { //defined on html
    toggle('hidden',backResults);
    clearList(searchResultsArea);

    while (bookmarksArea.firstChild) {
    // clearList(bookmarksArea);
    toggle('hidden', bookmarksContainer);
    toggle('hidden', resultsContainer);
    }
    while (restaurantArea.firstChild) {
    clearList(restaurantArea);
    toggle('hidden', resultsContainer);
    }
    var numberofMatches = resultsArray.length;
    var statement = document.createElement('h4');
    statement.textContent = numberofMatches + " restaurants found.";
    searchResultsArea.appendChild(statement);

    if (resultsArray.length > 0) {
      for (var d = 0; d < resultsArray.length; d++) {
        searchResultsArea.appendChild(resultsPage(resultsArray[d]));
      }
    }
  }

  if (idType === "back-to-restaurant") { //defined on html
    toggle('hidden', backResults); //show the back button to results page
    toggle('hidden', restaurantContainer); //show restaurant container
    clearList(bookmarksArea); //clear anything in bookmarks area
    restaurantArea.appendChild(restaurantPage(restaurantArray[0]));
  }

  if (idType === "back-restaurant-font") { //defined on html
    toggle('hidden', backResults); //show the back button to results page
    toggle('hidden', restaurantContainer); //show restaurant container
    clearList(bookmarksArea); //clear anything in bookmarks area
    restaurantArea.appendChild(restaurantPage(restaurantArray[0]));
  }

  if (type === "Bookmark") {
    bookmarkButton.textContent = "Bookmarked!";
    bookmarkButton.setAttribute('style','background-color: #0b88f4;');
    var bookmarkedCheck = document.createElement('i');
    bookmarkedCheck.setAttribute('class','fa fa-check');
    bookmarkedCheck.setAttribute('color','white');

    bookmarkButton.appendChild(bookmarkedCheck);

    // bookmarkButton.setAttribute('style','background-color: fff;');
    //var bookmarkedIcon = document.createElement(i);
    //bookmarkedIcon.setAttribute('class','fa fa-bookmark-o');
    for (var p = 0; p < myRestaurants.length; p++) {
      if (myRestaurants[p].id == buttonId) {
       //for (var k = 0; k < bookmarksArray.length; k++) {
          //if (bookmarksArray[k].id == buttonId) {
           //console.log("already bookmarked");
          //}
          //else {
            bookmarksArray.push(myRestaurants[p]);
            // console.log(bookmarksArray);
          //}
        //}
      }
    }
    console.log(bookmarksArray);
  }

  if (type === "Bookmarked!") {
    bookmarkButton.textContent = "Bookmark";
    bookmarkButton.setAttribute('style','background-color: #428bca;');
    for (var j = 0; j < bookmarksArray.length; j++) {
      if (bookmarksArray[j].id == buttonId) {
        var restaurantPosition = bookmarksArray.indexOf(bookmarksArray[j]);
        bookmarksArray.splice(restaurantPosition, 1);
      }
    }
    console.log(bookmarksArray);
  }

  if (type === "Write a review!") {
    var writeReview = document.getElementById('the-form');
    toggle('hidden',writeReview);

    var cover = document.getElementById('cover-dim');
    toggle('hidden',cover);
  }
  if (idType == "close-form") {
    var closeForm = document.getElementById('the-form');
    toggle('hidden',closeForm);

    var cover = document.getElementById('cover-dim');
    toggle('hidden',cover);

    var reviewForm = document.getElementById('review-form').reset();

    iOne.setAttribute('style','color: none;');
    iTwo.setAttribute('style','color: none;');
    iThree.setAttribute('style','color: none;');
    iFour.setAttribute('style','color: none;');
    iFive.setAttribute('style','color: none;');
  }
  if (idType == "close-font") {
    // console.log('hasdfasdfasdf');
    var closeForm = document.getElementById('the-form');
    // console.log(closeForm);
    toggle('hidden',closeForm);

    var cover = document.getElementById('cover-dim');
    toggle('hidden',cover);

    var reviewForm = document.getElementById('review-form').reset();

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

  //post review
  if (type === "Submit") {

    var cover2 = document.getElementById('cover-dim');
    toggle('hidden',cover2);
    var writeButton = document.getElementById('write-button');
    for (var n = 0; n < myRestaurants.length; n++) {
      if (myRestaurants[n].id == buttonId) {
        var nameInput = document.getElementById('name-input');
        var reviewInput = document.getElementById('review-input');
        var imageInput = "images/defaultprofile.png";
        reviewInput = reviewInput.value;
        nameInput = nameInput.value;

        var userData = {};
        userData.name = nameInput;
        userData.text = reviewInput;
        userData.thumbnail = imageInput;
        userData.ratings = starInput;
        userData.newUserId = "new user";
        // console.log(userData.ratings);
        var reviewsArray = myRestaurants[n].reviews;
        // console.log(reviewsArray);
        reviewsArray.splice(0,0,userData);

        //reviewsArray.push(userData);
        // console.log(reviewsArray);
        clearList(restaurantArea);
        restaurantArea.appendChild(restaurantPage(myRestaurants[n]));
      } //end if restaurant[n].id == button Id
    } //end for loop variable n
  } //end if type = submit
}); //end event listener
