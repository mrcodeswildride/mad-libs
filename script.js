var nounInput = document.getElementById("noun");
var numberInput = document.getElementById("number");
var placeInput = document.getElementById("place");
var showStoryButton = document.getElementById("showStory");
var storyParagraph = document.getElementById("story");

showStoryButton.addEventListener("click", showStory);

function showStory() {
    var noun = nounInput.value.trim();
    var number = numberInput.value.trim();
    var place = placeInput.value.trim();

    if (noun == "") {
        storyParagraph.innerHTML = "Please type a noun.";
    }
    else if (number == "") {
        storyParagraph.innerHTML = "Please type a number.";
    }
    else if (place == "") {
        storyParagraph.innerHTML = "Please type a place.";
    }
    else {
        storyParagraph.innerHTML = "A man bought a " + noun + " at the grocery store for " + number + " dollars and brought it to the " + place + ".";
    }
}
