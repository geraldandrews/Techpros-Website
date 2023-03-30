/*var texts = ["one", "two", "three", "four", "five"],
    btn = document.querySelector(".gallery-controls-next"),
    text = document.getElementById("myText"),
    index = 0;

btn.addEventListener("click", changeText);
text.innerHTML = texts[0];

function changeText() {
    index++;
    index %= texts.length
    text.innerHTML = texts[index];
}  */

let arr = ['Product 1', 'Product 2', 'Product 3', 'Product 4', 'Product 5'];
let i = 0;

function nextItem() {
    i = i + 1; // increase i by one
    i = i % arr.length; // if we've gone too high, start from `0` again
    return arr[i]; // give us back the item of where we are now
}

function prevItem() {
    if (i === 0) { // i would become 0
        i = arr.length; // so put it at the other end of the array
    }
    i = i - 1; // decrease by one
    return arr[i]; // give us back the item of where we are now
}

window.addEventListener('load', function () {
    document.getElementById('gallery-text').textContent = arr[0]; // initial value
    document.querySelector('.gallery-controls-previous').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            document.getElementById('gallery-text').textContent = prevItem();
        }
    );
    
    document.querySelector('.gallery-controls-next').addEventListener(
        'click', // we want to listen for a click
        function (e) { // the e here is the event itself
            document.getElementById('gallery-text').textContent = nextItem();
        }
    );
});