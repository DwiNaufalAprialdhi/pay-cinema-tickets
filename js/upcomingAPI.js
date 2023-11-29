const apiKey = "f4ef51a0f580fce09bdcb3d88393bc2a";
const url = `https://api.themoviedb.org/3/movie/upcoming?api_key=${apiKey}`;

fetch(url)
  .then((data) => data.json())
  .then((compltetedata) => {
    let data1 = "";
    let upcoming = compltetedata.results;
    upcoming.map((values) => {
      data1 += `<div class="swiper-slide">
      <div class="upcoming-card">
        <img
        src="http://image.tmdb.org/t/p/w500/${values.backdrop_path}"
        alt="poster"
        class="upcoming-poster"
        />
      </div>
    </div>`;
    });
    document.getElementById("upcoming").innerHTML = data1;
  })
  .catch((err) => console.log("error : " + err));
