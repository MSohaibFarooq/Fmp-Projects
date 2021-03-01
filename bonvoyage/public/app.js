function add() {

    var fname = document.getElementById('fname')
    var lname = document.getElementById('lname')
    var email = document.getElementById('email')
    var contact = document.getElementById('contact')
    var nic = document.getElementById('nic')
    var from = document.getElementById('From')
    var destination = document.getElementById('Destination')
    var departure = document.getElementById('departure')
    var Return = document.getElementById('return')
    var passengers = document.getElementById('passengers')
    var ticketType;
    document.getElementsByName("Ticket").forEach(function (elm) {
        if (elm.checked) {
            ticketType = elm.value;
        }
    })
    var cdcard = document.getElementById('cdcard')

    var key = firebase.database().ref('records').push().key;
    var records = {
        value: fname.value,
        value: lname.value,
        value: email.value,
        value: contact.value,
        value: nic.value,
        value: from.value,
        value: destination.value,
        value: departure.value,
        value: Return.value,
        value: passengers.value,
        value: ticketType.value,
        value: cdcard.value,
        key: key
    }
    firebase.database().ref('records').child(key).set(records)

    // inputValue.value = ''
}