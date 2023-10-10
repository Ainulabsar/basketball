let guestScoreEl = document.getElementById("guest-score")
let homeScoreEl = document.getElementById("home-score")
let homeScore = 0
let guestScore = 0

function increase(home,guest){
    if (homeScore < 99){
    homeScore += home}
    if(guestScore < 99)
    guestScore += guest
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore
}
function decrease (del,led){
    homeScore -= del
homeScoreEl.textContent = homeScore
    guestScore -= led
    guestScoreEl.textContent = guestScore
} 
function restart(start,started){
    homeScore *= start
    guestScore *= started
    homeScoreEl.textContent = homeScore
    guestScoreEl.textContent = guestScore

}
