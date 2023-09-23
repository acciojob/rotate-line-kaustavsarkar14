//your JS code here. If required.
const line = document.getElementById('line')
let angle = 0
function rotate(){
  angle+=2
  line.style.transform = `rotate(${angle}deg)`
}

setInterval(() => {
  rotate()
  console.log("hello")
}, 20);