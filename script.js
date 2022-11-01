let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river = document.getElementById('river');
let boat = document.getElementById('boat');
let STORIES = document.querySelector('.STORIES');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 4 + 'px';
    mountains3.style.top = value * 1.5 +'px';
    mountains4.style.top = value * 1.2 + 'px';
    river.style.top = value + 'px';
    boat.style.top = value + 'px';
    boat.style.left = value * 3 + 'px';
    STORIES.style.fontSize = value  + 'px';
    if(scrollY >= 67) {
        STORIES.style.fontSize = 67 + 'px';
        STORIES.style.position = 'fixed';
        if(scrollY >= 430){
            STORIES.style.display = 'none';
        }
        else{
            STORIES.style.display = 'block';
        }
        if(scrollY >= 137){
            document.querySelector('.main').style.background = 'linear-gradient(#376281 , #10001f)';
        }
        else{
            document.querySelector('.main').style.background = 'linear-gradient(rgb(35, 0, 36) , rgb(36, 1, 45)';
        }
    }
}