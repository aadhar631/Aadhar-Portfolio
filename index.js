
// for the about section tabs
var tablinks = document.getElementsByClassName("tab-links");
var tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for(tablink of tablinks) {
        tablink.classList.remove("active-link");
    }
    for(tabcontent of tabcontents) {
        tabcontent.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("active-content")
}


// for the my projects video elements

// document.getElementById('playButton').addEventListener('click', function() {
//     var video = document.getElementById('videoPlayer');
//     video.play();
//   });



// for the side menu on the small screen devices

var sidemenu = document.getElementById('sidemenu');

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-240px";
}



// to get the data on the sheet 

const scriptURL = 'https://script.google.com/macros/s/AKfycbxnob6A7_53e7I35Ur0KveyoXjXeCqRfHT8zpUtMcCooKINzsF-PHxTfFw2s9rPw4oc9A/exec'
const form = document.forms['submit-to-google-sheet']

const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
  e.preventDefault()
  fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => {
        msg.innerHTML = "Message Sent Successfully";
        setTimeout(function() {
            msg.innerHTML = "";
        }, 2000)
        form.reset();
        sendMail();
    })
    .catch(error => console.error('Error!', error.message))
})



// for sending email

function sendMail(params) {
    Email.send({
        Host : "smtp.elasticemail.com",
        Username : "vanshjain1820@gmail.com",
        Password : "1BC912BB28F9C06F5B0407DF53303DABF740",
        To : 'vanshjain1820@gmail.com',
        From : document.getElementById('email').value,
        Subject : "Aadhar Portfolio",
        Body : "Name :- " + document.getElementById('name').value + "<br/>" + "Regarding :- " + document.getElementById('subject').value + "<br/>" + "Message :- " + document.getElementById('message').value
    }).then(
        message => alert(message)
    );
}
