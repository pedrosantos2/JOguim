document.addEventListener('DOMContentLoaded', () => {
const rei = document.querySelector(".personagem")
let bottom = 0
let gravity = 0.9
let isJUmping = false
let isGoingLeft = false
let left = 0
let isGoingRight = false
let RightTimerId
let leftTimerId

function jump(){
    if(isJUmping) return
    let timerId = setInterval(function (){
        if(bottom > 250){
            clearInterval(timerId)
            let timerDownId = setInterval(function(){
                if(bottom < 0){
                    clearInterval(timerDownId)
                    isJUmping = false
                }
                bottom -= 5
                rei.style.bottom = bottom + 'px'
            }, 20)
        }
        isJUmping = true
        bottom += 30
        bottom = bottom * gravity
        rei.style.bottom = bottom + "px"
    }, 20)
}
function slideLeft(){
if(isGoingRight){
    clearInterval(RightTimerId)
    isGoingRight = false
}
    isGoingLeft = true
 leftTimerId = setInterval( function(){
    left -= 5
    rei.style.left = left + 'px' 
}, 20)
}

function slideRight(){
    if(isGoingLeft){
        clearInterval(leftTimerId)
        isGoingLeft = false
    }
    isGoingRight = true
    RightTimerId = setInterval( function(){
        left += 5
        rei.style.left = left + 'px' 
    }, 20)
    }


window.addEventListener('keydown', function(e){

switch (e.code) {
    case 'KeyW':
        jump()
        break;

    case 'KeyA':
       slideLeft()
        break;

    case 'KeyD':
     slideRight()
      break;

}

}
)


})