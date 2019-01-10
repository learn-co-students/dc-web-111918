let likeState = {}

document.addEventListener("DOMContentLoaded", main)

function main(){

  // 1. As a user, i should see the timer increment every second once the page has loaded
  initializeTimer();

  // 2. As a user, i can manually increment and decrement the counter as i lik
  initializeIncrementButton();

  initializeDecrementButton();
  // 5. As a user I can leave comments on my gameplay, such as "Wow, what a fun game this is"
  initializeCommentForm();

  // 3. As a user, i can like an individual number of the counter. I should see the appropriate number of likes associated with that particular number
  initializeLikeFeature();

  // 4. As a user I can pause the game, which should disable all buttons except the pause button, which should now show the text 'resume'
  initializePauseFeature();
}

function initializePauseFeature(){
  // grab pause button
  let pauseButton = document.getElementById("pause");
  let counter = getCounter();

  // add click event listener
  pauseButton.addEventListener("click", () => {
    // get the buttons / DOM elements
    let buttons = document.querySelectorAll(".disableable")

    // clearInterval()
    if (counter.dataset.intervalID != "none") {
      clearInterval(parseInt(counter.dataset.intervalID))
      counter.dataset.intervalID = "none"
      pauseButton.innerText = "resume"

      buttons.forEach((btn) => {
        // disable them!
        btn.disabled = true
      })


    } else {
      initializeTimer()
      pauseButton.innerText = "pause"

      buttons.forEach((btn) => {
        // enable them!
        btn.disabled = false
      })
    }

  })

}

function initializeLikeFeature() {
  let likeButton = document.getElementById("<3");
  likeButton.addEventListener("click", likeNumberHandler);
}

function likeNumberHandler(){
  let currentValue = parseInt(getCounter().innerText);

  if (!likeState[currentValue]) {
    likeState[currentValue] = 1;
  } else {
    likeState[currentValue] += 1;
  }

  // grab the ul with class "likes"
  let ul = document.querySelector(".likes");
  ul.innerHTML = "";
  for (key in likeState) {
    let li = document.createElement("li");
    li.innerText = `#${key} has been liked ${likeState[key]} time(s)`
    ul.appendChild(li)
  }
}

function initializeDecrementButton(){
  let decrementButton = document.getElementById("-");
  decrementButton.addEventListener("click", decrementHandler);
}

function initializeIncrementButton(){
  let incrementButton = document.getElementById("+");
  incrementButton.addEventListener("click", incrementHandler)

}

function initializeTimer() {
  // step 1: invoke setInterval
    let counter = getCounter();

   let intervalID = setInterval(function(){
    // grab counter
      // increment the counter's value
      let boxText = counter.innerText;
      let currentValue = parseInt(boxText);
      let newValue = currentValue + 1;
      // have the new value reflected on the DOM
      counter.innerText = newValue;


  }, 1000)


  // add intervalID to DOM!
  counter.dataset.intervalID = intervalID;
}

function initializeCommentForm(){
  // grab the form
  let form = document.getElementById("comment-form");

  // add event listener to the form
  form.addEventListener("submit", (e) => {
    // disable default action
    e.preventDefault();

    // make a new comment be present in DOM

    // grab the user's input from form
    let input = document.getElementById("user-input");
    let inputText = input.value;

    // add inputText to some DOM element
    let comment = document.createElement("p");
    comment.innerText = inputText

    // add that DOM element to the comments list
      // append to DOM element with ID of "list"
    let commentList = document.getElementById("list");
    commentList.appendChild(comment);
    form.reset();
  })

}

function getCounter(){
  return document.getElementById("counter")
}

function incrementHandler(){
  // grab counter's inner text
  let counter = getCounter();

  // increment by 1
  let boxText = counter.innerText;
  let currentValue = parseInt(boxText);
  let newValue = currentValue + 1;

  // make DOM reflect this incrementation
  counter.innerText = newValue;
}

function decrementHandler(){
  // grab counter's inner text
  let counter = getCounter();

  // increment by 1
  let boxText = counter.innerText;
  let currentValue = parseInt(boxText);
  let newValue = currentValue - 1;

  // make DOM reflect this incrementation
  counter.innerText = newValue;
}
