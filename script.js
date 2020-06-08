let storyButton = document.getElementById(`storyButton`)
let storyParagraph = document.getElementById(`storyParagraph`)
let thing = document.getElementById(`thing`)
let number = document.getElementById(`number`)
let place = document.getElementById(`place`)

storyButton.addEventListener(`click`, showStory)

function showStory() {
  let thingValue = thing.value.trim()
  let numberValue = number.value.trim()
  let placeValue = place.value.trim()

  if (thingValue == ``) {
    storyParagraph.innerHTML = `Please type a thing.`
  }
  else if (numberValue == ``) {
    storyParagraph.innerHTML = `Please type a number.`
  }
  else if (placeValue == ``) {
    storyParagraph.innerHTML = `Please type a place.`
  }
  else {
    storyParagraph.innerHTML = `A man bought a ${thingValue} at the grocery store for ${numberValue} dollars and brought it to the ${placeValue}.`
  }
}