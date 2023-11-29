const popularKeyAPI = "f4ef51a0f580fce09bdcb3d88393bc2a";
const popularUrlAPI = `https://api.themoviedb.org/3/movie/popular?api_key=${popularKeyAPI}`;

fetch(popularUrlAPI)
  .then((data) => data.json())
  .then((completedata) => {
    let data1 = "";
    const popular = completedata.results;
    popular.map((values) => {
      data1 += `
      <div class="swiper-slide">
      <a href="movies.html">
      <div class="popular-card">
      <img
      src="http://image.tmdb.org/t/p/w500/${values.poster_path}"
      alt="poster"
      class="popular-poster"
      />
      </div>
      </a>
      </div>
      `;
    });
    document.getElementById("popular").innerHTML = data1;
  })
  .catch((err) => console.log("error : " + err));

// mengambil id film populer
// function popularSubmit(id) {
//   console.log(id);
//   const popularUrlIDAPI = `https://api.themoviedb.org/3/movie/${id}?api_key=${popularKeyAPI}`;

//   fetch(popularUrlIDAPI)
//     .then((data) => data.json())
//     .then((completedata) => console.log(completedata))
//     .catch((err) => console.log("error: " + err));
// }
