const loadText = document.querySelector('.loading-text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(blurring, 20);

function blurring() {
    load++;
    
    if (load > 99) {
        clearInterval(int)
    }
}