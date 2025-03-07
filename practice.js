// This repo is optional extra practice to use the underscore functions.
// Here we'll be writing new functions, but these functions will use
// the underscore functions within them.

// If you would like to take a look at the inputs that are passed into these functions, please
// feel free to check out the data.js file.

/*
 *
 *  _.each
 *
 */

// use _.each to create a copy of the given array.
var moreFruits = function (fruits) {
  var results = [];

  _.each(fruits, function(fruit, index, collection) {
    results.push(fruit);
  });

  return results;
};

// use _.each to traverse the number array and determine
// which are multiples of five.
//i- array of numbers
//o- count of multiple of 5
//c
//e
var multiplesOfFive = function (numbers) {
  var count5 = 0;
  _.each(numbers, function(n, index, numbers) {
    if (n % 5 === 0) {
      count5++;
    }
  });
  return count5;
};

// use _.each to build an array containing only tweets belonging to a specified user.
//i- array of tweet objects, user value
//o - array of tweets by user
//c -
//e -

var getUserTweets = function(tweets, user) {
  //iterate through _.each tweets to find which one has matching user object value
  var newArr = [];
  _.each(tweets, function(tweet, index, tweets) {
    if (tweet.user === user) {
      newArr.push(tweet);
    }
  });
  return newArr;
};

/*
 *
 *  _.filter
 *
 */

// use _.filter to return the fruits array with only the desired fruit.
var onlyOneFruit = function (fruits, targetFruit) {
  //filter fruits to find targetFruit
  return _.filter(fruits, function (fruit, index, fruits) {
    return fruit === targetFruit;
  });
};

// use _.filter to return the fruits array with only fruits
// starting with the letter 'P'.
var startsWith = function (fruits, letter) {
  //filter fruits to see if str starts with letter
  return _.filter(fruits, function(fruit) {
    return fruit[0] === letter;
  });
};

// return a filtered array containing only cookie-type desserts.
var cookiesOnly = function (desserts) {
  //filter desserts array of objects, return item.type if it is cookie
  return _.filter(desserts, function(item) {
    return item.type === 'cookie';
  });

};

//i - an array of tweet objects
//o - array of users tweets
//c
//e
// rebuild the getUserTweets function from above with _.filter instead
var filterUserTweets = function(tweets, user) {
  //filter tweets to find tweet by user
  return _.filter(tweets, function (tweet) {
    return tweet.user === user;
  });
};

/*
 *
 *  _.map
 *
 */

// given an array of strings, use _.map to return a new array containing all
// strings converted to uppercase letters
//i - array of fruits
//o- newArr with strings to upper case
var upperCaseFruits = function (fruits) {
  var result = _.map(fruits, function(fruit) {
    return fruit.toUpperCase();
  });
  return result;
};

// given an array of dessert objects, return a new array of objects
// that have a new "glutenFree" property, with a boolean value.
// TIP: Items that contain flour are not gluten-free.
//i- array of dessert objects
//o- new array of objects that glutenFree is true
var glutenFree = function (desserts) {
  //filter dessert ingredients doesn't include gluten
  var result = _.filter(desserts, function(dessert) {
    if (!dessert.ingredients.includes('flour')) {
      dessert.glutenFree = true;
      return dessert;
    }
  });
  //map the filtered array
  var mappedResult = _.map(result, function(lemonade) {
    return lemonade;
  });
  return mappedResult;
};

// given an array of tweet objects, return a new array of strings
// containing only the message properties.
//i - tweets, array of objects
//o - all the message strings
var allUserMessages = function(tweets) {
  //iterate and map tweet.message
  var result = _.map(tweets, function(tweet) {
    return tweet.message;
  });
  return result;
};

// use _.map to return an array of items with their sale prices, with a new property
// containing the sale price. round any decimals to 2 places.
//
// having trouble with decimals? check out this article:
// http://adripofjavascript.com/blog/drips/avoiding-problems-with-decimal-math-in-javascript.html
//
/*

 example output:
  var salePrices = applyCoupon(groceries, 0.20);
  [
    {
      id: 1,
      product: 'Olive Oil',
      price: '$12.1',
      salePrice: '$9.68'
    }
  ];

*/

//i array of items, with price key
//o -array of items, price has the 20% off coupon applied
//c
//e - the round the price to the nearest cent
//15910 / .2 === 3182
//15910 / 2 === 31820
var applyCoupon = function (groceries, coupon) {
  //map the items to new array, the price is changed
  var result = _.map(groceries, function(item) {
    // container
    var container = {};
    // dollar sign off
    var numberPrice = item.price.slice(1);
    //the find the price to subtract from current price
    var couponNumber = numberPrice * coupon;
    var finalNumber = Number(numberPrice) - Number(couponNumber);
    var finalStr = '$' + finalNumber.toFixed(2);
    container.salePrice = finalStr;
    return container;
  });
  return result;
};
/*
 *
 *  _.reduce
 *
 */

// return the total price of all products.
var sumTotal = function (products) {
  // create a new array of the prices, so you can reduce to find sum
  var priceArray = _.map(products, function(item) {
    var numberPrice = item.price.slice(1);
    return numberPrice;
  });
  // reduce through the new prices array created to find the sum
  var result = _.reduce(priceArray, function(accumulator, num) {
    return accumulator + Number(num);
  }, 0);
  return result;
};
// return an object consisting of dessert types and how many of each.
// exampleOutput: { 'cake': 3, 'drink': 1 }
//i- array of dessert objects
//o- dessert type, how many of each
//c
//e

var dessertCategories = function (desserts) {
  var result = _.reduce(desserts, function(dessertBox, dessert) {
    var type = dessert.type;
    if (dessertBox[type] == null) {
      dessertBox[type] = 1;
    } else {
      dessertBox[type]++;
    }
    return dessertBox;
  }, {});
  //create a new result object to contain types and number
  return result;
};

// return an object with the proper count of all user messages
/*
 example output:
  var tweetCountPerUser = countMessagesPerUser(tweets);
  {
    "douglascalhoun": 5,
    "mracus": 6,
    "shawndrost": 5,
    "sharksforcheap": 3
  }
*/
var countMessagesPerUser = function(tweets) {
  var result = _.reduce(tweets, function(tweetPerUser, tweet) {
    var user = tweet.user;
    if (tweetPerUser[user] == null) {
      tweetPerUser[user] = 1;
    } else {
      tweetPerUser[user]++;
    }
    return tweetPerUser;
  }, {});
  return result;
};

// given an array of movie data objects,return an array containing
// movies that came out between 1990 and 2000.
// TIP: use an array as your accumulator - don't push to an external array!
//releaseYear
//i - an array of movie objects
//o - array of movie objects from the 90s to 2000
var ninetiesKid = function (movies) {
  console.log(movies);
  var result = _.reduce(movies, function (accum, movie) {
    var releaseYear = movie.releaseYear;
    if (releaseYear >= 1990 && releaseYear <= 2000) {
      accum.push(movie.title);
    }
    return accum;
  }, []);
  return result;
};

// return an boolean stating if there exists a movie with a shorter
// runtime than your time limit.
// timeLimit is an integer representing a number of minutes.
var movieNight = function (movies, timeLimit) {
  console.log(movies);
  console.log(timeLimit);
  var result = _.reduce(movies, function (accum, movie) {
    var runtime = movie.runtime;
    if (runtime < timeLimit) {
      accum[movie] = 1;
    }
    return accum;
  }, {});

  if (Object.keys(result).length === 0) {
    return false;
  }
  return true;
};
