var searchInput = document.querySelector(".search");
var cardWrapper = document.querySelector("main");
var movieData = [
  {
    title: "Jurassic Park",
    description:
      "Soluta iure voluptates eius sunt at, minima molestiae vero a hic doloremque ad error esse repudiandae.",
    imdb_link:
      "https://www.imdb.com/title/tt13443470/?ref_=hm_fanfav_tt_i_1_pd_fp1",
    movie_image: "https://api.lorem.space/image/movie?w=150&h=220",
  },
  {
    title: "Matrix",
    description:
      "Soluta iure voluptates eius sunt at, minima molestiae vero a hic doloremque ad error esse repudiandae.",
    imdb_link:
      "https://www.imdb.com/title/tt13443470/?ref_=hm_fanfav_tt_i_1_pd_fp1",
    movie_image: "https://api.lorem.space/image/movie?w=150&h=220",
  },
  {
    title: "Avatar",
    description:
      "Soluta iure voluptates eius sunt at, minima molestiae vero a hic doloremque ad error esse repudiandae.",
    imdb_link:
      "https://www.imdb.com/title/tt13443470/?ref_=hm_fanfav_tt_i_1_pd_fp1",
    movie_image: "https://api.lorem.space/image/movie?w=150&h=220",
  },
  {
    title: "Godfather",
    description:
      "Soluta iure voluptates eius sunt at, minima molestiae vero a hic doloremque ad error esse repudiandae.",
    imdb_link:
      "https://www.imdb.com/title/tt13443470/?ref_=hm_fanfav_tt_i_1_pd_fp1",
    movie_image: "https://api.lorem.space/image/movie?w=150&h=220",
  },
  {
    title: "Legally Blonde",
    description:
      "Soluta iure voluptates eius sunt at, minima molestiae vero a hic doloremque ad error esse repudiandae.",
    imdb_link:
      "https://www.imdb.com/title/tt13443470/?ref_=hm_fanfav_tt_i_1_pd_fp1",
    movie_image: "https://api.lorem.space/image/movie?w=150&h=220",
  },
  {
    title: "Back to the future",
    description:
      "Soluta iure voluptates eius sunt at, minima molestiae vero a hic doloremque ad error esse repudiandae.",
    imdb_link:
      "https://www.imdb.com/title/tt13443470/?ref_=hm_fanfav_tt_i_1_pd_fp1",
    movie_image: "https://api.lorem.space/image/movie?w=150&h=220",
  },
];

/*function displayMatches(matches) {
  cardWrapper.innerHTML = "";
  for (var matchObj of matches) {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
   <div class="movie-card">
  <h3>Movie Title</h3>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  <a href="#">View More Info Here</a>
</div> 
`
    );
  }
}*/

function noMatch() {
  cardWrapper.innerHTML = '<p class="no-search">No results found.</p>';
}

function displayMatches(matches) {
  cardWrapper.innerHTML = "";

  if (!matches.length) {
    noMatch();
  }

  for (var matchObj of matches) {
    cardWrapper.insertAdjacentHTML(
      "beforeend",
      `
   <div class="movie-card" style="background-image: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
   url(${matchObj.movie_image});">
  <h3>${matchObj.title}</h3>
  <p>${matchObj.description}</p>
  <a href="${matchObj.imdb_link}" target="_blank">View more info</a>
</div> 
`
    );
  }
}

function fetchMovies(event) {
  var keyCode = event.keyCode;
  var searchText = searchInput.value.toLowerCase().trim();

  if (keyCode === 13 && searchText) {
    //console.log('works!');// searches code if hit enter button

    /* for (var movieObj of movieData) {
      //console.log(movieObj); // logs each movie
      if (movieObj.title.toLowerCase === searchText) {
        console.log("match!");
      }
    }
    for (var movieObj of movieData) {
      if (movieObj.title.toLowerCase().includes(searchText)) {
        console.log("match!");
      }
    }*/

    var matches = []; //stores results in an array, postioned right after if statement above

    for (var movieObj of movieData) {
      if (movieObj.title.toLowerCase().includes(searchText)) {
        // console.log("match!");
        matches.push(movieObj);
        // console.log(matches);
      }
    }

    searchInput.value = " ";
    //console.log(matches);
    displayMatches(matches);

    /*fetch("https://www.omdbapi.com/?apikey=fcba391d&t=jurassic park").then(
      function (responseObj) {
        //returns an object, try using wrong key
        var dataPromise = responseObj.json();

        dataPromise.then(function (data) {
          console.log(data); //see jurrasic park obj details
        }); //makes Ajax call
        //console.log(data);
        //console.log(responseObj);
      }
    );
    */
  }
}

function init() {
  searchInput.addEventListener("keydown", fetchMovies);
}

init();

/* <div class="movie-card">
  <h3>Movie Title</h3>
  <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
  <a href="#">View More Info Here</a>
</div> */
