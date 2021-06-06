var pick_up_date = undefined
var drop_off_date = undefined

//validating the homepage's form 
function validForm() {
    document.getElementById('location').setAttribute("class", 'form-control')
    document.getElementById('pu_date').setAttribute("class", 'form-control')
    document.getElementById('do_date').setAttribute("class", 'form-control')

    var city = document.getElementById('location').value
    console.log(city)
    pick_up_date = document.getElementById('pu_date').value
    drop_off_date = document.getElementById('do_date').value

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
        document.addEventListener("DOMContentLoaded", function () {
            var choose = document.getElementById('choose_car')
            choose.innerHTML = "You're going to take the car in " + city + " for " + days + "days."
        })
    }
}