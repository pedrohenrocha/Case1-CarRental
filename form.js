//validating the homepage's form 
function validForm() {
    document.getElementById('location').setAttribute("class", 'form-control')
    document.getElementById('pu_date').setAttribute("class", 'form-control')
    document.getElementById('do_date').setAttribute("class", 'form-control')

    var city = document.getElementById('location').value
    console.log(city)
    var pick_up_date = document.getElementById('pu_date').value
    var drop_off_date = document.getElementById('do_date').value

    var resultado = (pick_up_date <= drop_off_date) ? true : false

    if (city == 0) {
        document.getElementById('location').setAttribute("class", 'form-control is-invalid')
    }

    if (resultado === false) {
        document.getElementById('pu_date').setAttribute("class", 'form-control is-invalid')
        document.getElementById('do_date').setAttribute("class", 'form-control is-invalid')
    }

    //calculating the number of rental days
    var first_date = new Date(pick_up_date)
    var second_date = new Date(drop_off_date)

    var diff = Math.abs(first_date.getTime() - second_date.getTime())
    var days = Math.ceil(diff / (1000 * 60 * 60 * 24))
    console.log(days)

    if (city != 0 && resultado === true) {
        window.open('rental_options.html')
        localStorage.setItem('_days', days);
        localStorage.setItem('_city', city);    
    }
}

function changeTitle() {
    var days = localStorage.getItem('_days')
    var city = localStorage.getItem('_city')

    var change = document.getElementById('choose_car') 

    change.innerHTML = "You're going to rent the car in " + city + " for " + days + " days."
    document.getElementById('numdays_lamb').innerText = days + " days"
    document.getElementById('numdays_mb').innerText = days + " days"
    document.getElementById('numdays_fer').innerText = days + " days"
    document.getElementById('numdays_bmw').innerText = days + " days"

    document.getElementById('price_lamb').innerText = '€' + days * 80
    document.getElementById('price_mb').innerText = '€' + days * 55
    document.getElementById('price_fer').innerText = '€' + days * 65
    document.getElementById('price_bmw').innerText = '€' + days * 70
}

function bookCar() {
    alert("Sorry, this page wasn't developed yet.")
}