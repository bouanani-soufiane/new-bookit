// Carousel Change Pictures
const myCarousel = document.getElementById('myCarousel');
myCarousel.addEventListener('slid.bs.carousel', function () {
    const activeItem = this.querySelector(".active");
    document.querySelector(".testi-img img").src = activeItem.getAttribute("data-img");
    document.querySelector(".testi-img .circle").style.backgroundColor = activeItem.getAttribute("data-color");
});


// set date's default value to today:
document.getElementById('check-in').value = new Date().toISOString().substring(0, 10);
document.getElementById('check-out').value = new Date().toISOString().substring(0, 10);
// Disable Dates Before Today
var today = new Date().toISOString().split('T')[0];
document.getElementById("check-in").setAttribute('min', today);
document.getElementById("check-out").setAttribute('min', today);

// Check Out Date To Be Greater Than The Check In Date
var checkIn = document.getElementById('check-in');
var checkOut = document.getElementById('check-out');

checkIn.addEventListener('change', updatedate);

function updatedate() {
    var firstdate = checkIn.value;
    checkOut.min = firstdate;
}

// onlyAlphabets On The Destination
function onlyAlphabets(e) {
    try {
        if (window.event) {
            var charCode = window.event.keyCode;
        }
        else if (e) {
            var charCode = e.which;
        }
        else { return true; }
        if ((charCode > 64 && charCode < 91) || (charCode > 96 && charCode < 123))
            return true;
        else
            return false;
    }
    catch (err) {
        alert(err.Description);
    }
}

// Email Validation

function validation() {
    let form = document.getElementById('form')
    let email = document.getElementById('email').value
    let text = document.getElementById('text')
    let pattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/

    if (email.match(pattern)) {
        form.classList.add('valid')
        form.classList.remove('invalid')
        text.innerHTML = ""
    } else {
        form.classList.remove('valid')
        form.classList.add('invalid')
        text.innerHTML = "Please Enter Valid Email Address"
        text.style.color = '#376cc8'
    }

    if (email == '') {
        form.classList.remove('valid')
        form.classList.remove('invalid')
        text.innerHTML = ""
    }
}