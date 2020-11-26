let block = document.querySelector('.color');
let red = document.querySelector('#red');
let green = document.querySelector('#green');
let blue = document.querySelector('#blue');
let out = document.querySelector('#out');

function changeColor() {
    red.oninput = () => {

        block.style.backgroundColor = "rgb(" + red.value + ',' + green.value + ',' + blue.value + ")";
        out.innerHTML = "RGB " + red.value + ' ' + green.value + " " + blue.value;
    }
    green.oninput = () => {


        block.style.backgroundColor = "rgb(" + red.value + ',' + green.value + ',' + blue.value + ")";
        out.innerHTML = "RGB " + red.value + ' ' + green.value + " " + blue.value;



    }

    blue.oninput = () => {

        block.style.backgroundColor = "rgb(" + red.value + ',' + green.value + ',' + blue.value + ")";
        out.innerHTML = "RGB " + red.value + ' ' + green.value + " " + blue.value;



    }


}

changeColor();