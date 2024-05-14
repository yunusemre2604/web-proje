//TMDB
const API_KEY = 'api_key=d1bbdbd02b7e2b950a10f2641e2d6992';
const BASE_URL ='https://api.themoviedb.org/3';
const API_URL = BASE_URL + '/discover/movie?sort_by=vote_count.desc&' + API_KEY;
const image_URL ='https://image.tmdb.org/t/p/w500/';
getFilmler(API_URL);


const main = document.getElementById('main');
function getFilmler(url){
    fetch(url).then(res => res.json()).then(data => {
        console.log(data.results);
        showFilmler(data.results);
    })
}


function showFilmler(data){
    main.innerHTML='';
    data.forEach(movie =>{
        const{title,poster_path,vote_average,overview} =movie;
        const movieEl = document.createElement('div');
        movieEl.classList.add('movie');
        movieEl.innerHTML = `
        <img src="${image_URL+poster_path}" alt="">
          <div class="reyting">
            <h3>${title}</h3>
            <span class="${get_color(vote_average)    }">${vote_average}</span>
          </div>
          <div class="film-hakkinda">
          ${overview};
           
          </div>`

          main.appendChild(movieEl);
    })

}
function get_color(vote){
    if(vote>=7.5){
        return 'green';
    }else if(vote>=5){
        return 'orange';
    }
    else{
        return 'red';
    }
}