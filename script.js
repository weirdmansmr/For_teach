let sprite = document.querySelector('.sprite');

document.addEventListener('keydown', moving);

let x = y = 0;
let size = sprite.offsetWidth 
//object is literally SQUARE, that's why I didn't make let with offsetHeight

function moving(event) {
    if (event.code != "ArrowRight" && event.code != "ArrowLeft" &&
        event.code != "ArrowUp" && event.code != "ArrowDown") return;

    if(event.code == "ArrowLeft") x -= size;
	if(event.code == "ArrowRight") x += size;
	if(event.code == "ArrowUp") y -= size;
	if(event.code == "ArrowDown") y += size;
    
    if (x < -720 || x > 720 || y < -420 || y > 420) {
        x = y = 0
    }

    sprite.style.left = x + 'px'
    sprite.style.top = y + 'px'

    console.log(x, y)
}