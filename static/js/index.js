// About section typing animations 
$(document).ready(function() {

    var options = {
        strings: ["Student", "Programmer","Science Geek","Bibliophile"],
        typeSpeed: 40,
        loop: true,
        typeSpeed: 100,
        backSpeed: 40
    };

    var typed = new Typed('.type-1', options);

    $(window).scroll(function() {
        if (this.scrollY > 30) {
            $('.nav-link').addClass("nav-link-scroll");
            $('.navbar').addClass("sticky");
        } else {
            $('.nav-link').removeClass("nav-link-scroll");
            $('.navbar').removeClass("sticky");
        }
    });

    $(function() {
        $(document).click(function(event) {
            $('.navbar-collapse').collapse('hide');
        });
    });

    // Interests section links

    document.getElementsByClassName("int-music-link")[0].setAttribute("href", "https://cosmosandus.wordpress.com");
    document.getElementsByClassName("int-book-link")[0].setAttribute("href", "./books.html");

    document.querySelector("#skills .row .content-col .skill-head-top i").addEventListener("click", function() {
        window.location = "https://github.com/dasheve";
    })

    function inputClickName() {
        document.getElementById("name").classList.add("inputClick");
    }

    function inputClickMail() {
        document.getElementById("email").classList.add("inputClick");
    }

    document.getElementsByClassName("head-contact")[0].addEventListener("click", function() {
        window.location = "../index.html#contact"
    })

    const socialContainer = document.querySelectorAll("#contact .row .col-md-5 .social-container .content p");
    const socialLinks = ["https://www.instagram.com/devesh_930/", "https://www.linkedin.com/in/devesh-yadav-2045231a6/", "https://mail.google.com/mail/u/0/?fs=1&to=deveshy269@gmail.com&tf=cm", "http://api.whatsapp.com/send?phone=9305528116"]

    for (let i = 0; i <= socialContainer.length; i++) {
        $(socialContainer[i]).on("click", function() {
            window.location = socialLinks[i];
        });
    }

    var yourAudio = document.getElementById('yourAudio'),
        ctrl = document.getElementById('audioControl');

    ctrl.onclick = function() {

        // Update the Button
        var pause = ctrl.innerHTML === '<i class="fas fa-pause-circle"></i>';
        ctrl.innerHTML = pause ? '<i class="fas fa-play-circle"></i>' : '<i class="fas fa-pause-circle"></i>';

        // Update the Audio
        var method = pause ? 'pause' : 'play';
        yourAudio[method]();

        // Prevent Default Action
        return false;
    };

    function removeAttribute() {
        let element = document.getElementById("formButton");
        if (element.hasAttribute("data-target") || element.hasAttribute("data-toggle")) {
            element.removeAttribute("data-target");
            element.removeAttribute("data-toggle");
        }
    }

    $("#contact form button").on("click", function() {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const subject = document.getElementById("subject").value;
        const message = document.getElementById("message").value;

        if (name == "") {
            alert("Please enter your name");
            document.form1.name.focus();
            removeAttribute();
        } else if (email == "") {
            alert("Please enter your email");
            document.form1.email.focus();
            removeAttribute();
        } else if (subject == "") {
            alert("Please enter the subject of your message");
            document.form1.subject.focus();
            removeAttribute();
        } else if (message == "") {
            alert("Please enter your message");
            document.form1.message.focus();
            removeAttribute();
        } else {
            $("#formButton").attr({
                "data-toggle": "modal",
                "data-target": "#formSubmitModal"
            })
            console.log(name, email, subject, message);
        }

    })

})
