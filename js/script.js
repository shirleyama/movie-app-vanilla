var searchInput = document.querySelector(".search");
var cardWrapper = document.querySelector("main"); //cos injecting moviecards and its the parent

function noMatch() {
  cardWrapper.innerHTML = '<p class="no-search">No results found.</p>';
}

function displayMatches(matches) {
  cardWrapper.innerHTML = "";

  if (!matches.length) {
    noMatch();
  }

  // for (var matchObj of matches) {
  //   cardWrapper.insertAdjacentHTML(
  //     "beforeend",
  //     `
  //   <div class="movie-card" style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${matchObj.movie_image});">
  //     <h3>${matchObj.title}</h3>
  //     <p>${matchObj.description}</p>// can request with other option instead
  //     <a href="${matchObj.imdb_link}" target="_blank">View More Info Here</a>
  //   </div>
  //   `
  //   );
  // }

  for (var matchObj of matches) {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
    <div class="movie-card" style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(${matchObj.Poster});">
      <h3>${matchObj.Title}</h3>
      <p>Release Year: ${matchObj.Year}</p>
      <a href="https://www.imdb.com/title/${matchObj.imdbID}" target="_blank">View More Info Here</a>
    </div>
   `
    );
  }
}

// function fetchMovies(event) {
//   //event object passed through a a parameter
//   var keyCode = event.keyCode; //gives keycode for each key pressed, listens
//   var searchText = searchInput.value.toLowerCase().trim(); //gives you what they typed into the box

//   if (keyCode === 13 && searchText) {
//     //means not an empty string
//     console.log("works");
//     var matches = [];

//     fetch(`https://www.omdbapi.com/?apikey=20dc4c7f&s=${searchText}`).then(
//       function (responseObj) {
//         //changed to s from t
//         //passed in
//         //console.log(responseObj);
//         var dataPromise = responseObj.json();

//         dataPromise.then(function (data) {
//           console.log(data);
//         });
//       }
//     );

//     searchInput.value = "";
//     displayMatches(matches);
//   }
// }

// function fetchMovies(event) {
//   var keyCode = event.keyCode;
//   var searchText = searchInput.value.toLowerCase().trim();

//   if (keyCode === 13 && searchText) {
//     var responsePromise = fetch(
//       `https://www.omdbapi.com/?apikey=20dc4c7f&s=${searchText}`
//     );
//     console.log(responsePromise); //Promise {<pending>}//then and catch are commonly used on promise objects.

//     responsePromise.then(function (responseObj) {
//       //.the helps us to see the promised object and break it apart

//       var dataPromise = responseObj.json(); //json method also returns a promised object

//       console.log(responseObj); //
//       //Response {type: 'cors', url: 'https://www.omdbapi.com/?apikey=20dc4c7f&s=jurassic', redirected: false, status: 200, ok: true, …} This is the servers response//
//       //200 status means good//401 gives unauthorised response
//       //data given has the data we require and we can pull it out of there.

//       console.log(responsePromise); //Promise {<fulfilled>: Response}

//       //last thing to do now is a .then
//       dataPromise.then(function (data) {
//         console.log(data); //{Search: Array(10), totalResults: '190', Response: 'True'}
//       });
//     });
//     // searchInput.value = "";
//     // displayMatches(matches);
//   }
// }

function fetchMovies(event) {
  var keyCode = event.keyCode;
  var searchText = searchInput.value.toLowerCase().trim();

  if (keyCode === 13 && searchText) {
    var responsePromise = fetch(
      `https://www.omdbapi.com/?apikey=20dc4c7f&s=${searchText}`
    ); //there is a delay here an asynchronous type//got put aside in a queue until server request comes back

    function handleResponse(responseObj) {
      return responseObj.json(); // this is passed to the next callback in the chain//which allows us to grab the data on the promised object
    }

    responsePromise
      .then(handleResponse) //doesnt get data back until server response
      .then(function (data) {
        console.log(data); //easier to grab data on the promised object
        //       return "some string";// there is a search property array on data
        console.log(data.Search); //easier to grab data on the promised object
        //       return "some string";// there is a search property array on data
        displayMatches(data.Search);
        searchInput.value = "";
      });

    // .then(function (str) {
    //   console.log(str);
    // });
    console.log("test"); // this is logged first. before str and others in the function

    // searchInput.value = "";
    // displayMatches(matches);
  }
}

function init() {
  searchInput.addEventListener("keydown", fetchMovies); //when fetchMovies is called, an Event object is passed through to the function fetchMovies(event)
}
//start with an event listener
init();

// /* <div class="movie-card">
//         <h3>Movie Title</h3>
//         <p>Lorem ipsum dolar sint amet consecteur elit</p>
//         <a href="#">View more info</a>
// </div> */
//myblog.com/posts
//root/route
//get back view of html
//or data in the form of json. it is the most common form of data that is sent back
//can also pass in parameters,which begin after the route.g
//https://jdtadlock.com/contact?telephone=true
//parameters are optional and mean nothing if the server isnt watching.
//https://www.omdbapi.com/?apikey=20dc4c7f&t=${searchText} in this case the slash is the route.Doesnt always have to be a folder
//install jsonvue, it prettifies

//https://www.omdbapi.com/?apikey=fcba391d&i=tt0107290 returns first 10 as default.

//https://www.omdbapi.com/?apikey=20dc4c7f&s=${searchText}&page=2//gives back next page and //so on
