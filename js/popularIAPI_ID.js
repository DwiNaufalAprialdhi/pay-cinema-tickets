const popularKeyAPIID = "f4ef51a0f580fce09bdcb3d88393bc2a";
const popularUrlAPIID = `https://api.themoviedb.org/3/movie/popular?api_key=${popularKeyAPIID}`;

fetch(popularUrlAPIID)
  .then((data) => data.json())
  .then((completedata) => {
    output = "";
    popularid = completedata.results;
    popularid.map((values) => {
      output = `<img
      src="http://image.tmdb.org/t/p/w500/${values.backdrop_path}"
      alt="backdrop"
      class="movies-backdrop"
    />
    <div class="movies-container">
      <div class="movies-left">
        <img
          src="http://image.tmdb.org/t/p/w500/${values.poster_path}"
          alt="poster"
          class="movies-poster"
        />
      </div>
      <div class="movies-right">
        <h2 class="movies-title">${values.original_title}</h2>
        <p class="movies-about">
          <span class="font-bold text-lg">Synopsis:</span> ${values.overview}
        </p>
        <h2 class="movies-popularity">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M12 4.35418C12.7329 3.52375 13.8053 3 15 3C17.2091 3 19 4.79086 19 7C19 9.20914 17.2091 11 15 11C13.8053 11 12.7329 10.4762 12 9.64582M15 21H3V20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21ZM15 21H21V20C21 16.6863 18.3137 14 15 14C13.9071 14 12.8825 14.2922 12 14.8027M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z"
              stroke="#111827"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          ${values.popularity}
        </h2>
        <h2 class="movies-average">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path
              d="M10 10H5.23607C3.74931 10 2.78231 11.5646 3.44722 12.8944L6.94722 19.8944C7.286 20.572 7.97853 21 8.73607 21H12.7538C12.9173 21 13.0802 20.9799 13.2389 20.9403L17 20M10 10V5C10 3.89543 10.8954 3 12 3H12.0955C12.595 3 13 3.40497 13 3.90453C13 4.61883 13.2114 5.31715 13.6077 5.91149L17 11V20M10 10H12M17 20H19C20.1046 20 21 19.1046 21 18V12C21 10.8954 20.1046 10 19 10H16.5"
              stroke="#111827"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          ${values.vote_average}
        </h2>
        <h2 class="movies-release">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M17.7072 9.29289C18.0978 9.68342 18.0978 10.3166 17.7072 10.7071L10.7072 17.7071C10.3167 18.0976 9.68354 18.0976 9.29302 17.7071L2.29302 10.7071C2.09772 10.5118 2.00009 10.2558 2.00012 9.99988V5C2.00012 3.34315 3.34327 2 5.00012 2H10.0004C10.2562 2.00007 10.512 2.0977 10.7072 2.29289L17.7072 9.29289ZM5.00012 6C5.55241 6 6.00012 5.55228 6.00012 5C6.00012 4.44772 5.55241 4 5.00012 4C4.44784 4 4.00012 4.44772 4.00012 5C4.00012 5.55228 4.44784 6 5.00012 6Z"
              fill="currentColor"
            />
          </svg>
          ${values.release_date}
        </h2>
        <button type="button" class="movies-next" data-next>Next</button>
      </div>
    </div>`;
    });
    document.getElementById("movies").innerHTML = output;
  })
  .catch((err) => console.log("error: " + err));
