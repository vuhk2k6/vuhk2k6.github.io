let previous = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');


let Songs = [
    {
        name: "nevada",
        singer: "victone",
        path: "music/nevada.mp3",
        img: "img/music/nevada.png"
    }
];

function load_track(index_no){
    track.src = Songs[index_no].path;
    title.innerHTML = Songs[index_no].name
    track_img.src = Songs[index_no].img;
    artist.innerHTML = Songs[index_no].singer;
    track.load()
}
load_track(index_no);


function justplay(){
    if(playing_song==false){
        playsong();
    }else {
        pause_song();
    }
}

function playsong(){
    track.play();
    playing_song = true;
    play.innerHTML = <i class="fas fa-pause icon-pause"></i>;
}