header();
footer();

if(document.querySelector('.frontpage')) {
    let header = document.querySelector('header');
    header.style.position = "fixed";
    header.style.left = "0";
    header.style.top = "0";
    header.style.zIndex = "2";
}

function header() {
    let text = `
            <nav class="bold">
                <ul>
                    <li>
                        <a href="index.html">
                            <img src="/assets/images/Sparta_logo.png" alt="Sparta Biler">
                        </a>
                    </li>
                    <section class="navFlex">
                        <li>
                            <a href="leasing.html">Leasing</a>
                        </li>
                        <li>
                            <a href="biler.html">Biler på lager</a>
                        </li>
                        <li>
                            <a href="kontakt.html">Kontakt</a>
                        </li>
                    </section>
                    <i id="navIkon2" class="fas fa-times" onclick="dropdownMobile()"></i>
                    <i id="navIkon" class="fas fa-bars" onclick="dropdownMobile()"></i>
                </ul>
                <div class="nav-fade-in dropdownMobile">
                    <ul id="navMobile">
                        <li>
                            <a href="index.html">Home</a>
                        </li>
                        <li>
                            <a href="leasing.html">Leasing</a>
                        </li>
                        <li>
                            <a href="biler.html">Biler på lager</a>
                        </li>
                        <li>
                            <a href="kontakt.html">Kontakt</a>
                        </li>
                    </ul>
                </div>
            </nav>
    `;
    document.querySelector('header').innerHTML = text;
}

function dropdownMobile() {
    if (document.getElementById("navMobile").style.display === "block") {
        document.getElementById("navMobile").style.display = "none";
        document.querySelector('main').style.display = "flex";
        document.querySelector('footer').style.display = "flex";
        document.querySelector('nav ul li a').style.display = "block";
        document.getElementById("navIkon2").style.display = "none";
        document.getElementById("navIkon").style.display = "block";
        document.querySelector('.nav-fade-in').classList.remove('appear');

    } else {
        document.getElementById("navMobile").style.display = "block";
        document.querySelector('main').style.display = "none";
        document.querySelector('footer').style.display = "none";
        document.querySelector('nav ul li a').style.display = "none";
        document.getElementById("navIkon2").style.display = "block";
        document.getElementById("navIkon").style.display = "none";
        document.querySelector('.nav-fade-in').classList.add('appear');
    }
}

function footer() {
    let text = `
    <section class="flex">
        <section>
            <p class="bold">Tlf. <span class="robotobold">61 46 46 85</span></p>
            <p>info@spartabiler.dk</p>
        </section>
        <section>
            <h2 class="bold">Skriv til os og hør, hvad vi kan tilbyde</h2>
            <a href="mailto:info@spartabiler.dk">
                <button>Send en email</button>
            </a>
        </section>
        <section>
            <p class="bold">Adresse:</p>
            <p>Gladsaxe Møllevej <span class="robotolight">21</span></p>
            <p><span class="robotolight">2860</span> Søborg</p>
        </section>
    </section>
    <section class="icons">
        <a href="https://www.facebook.com/Spartabiler.dk" target="_blank">
            <img src="/assets/images/facebook.png" alt="Sparta Biler Facebook"> <!-- flaticon: https://www.flaticon.com/premium-icon/facebook_2504903 -->
        </a>
        <a href="https://www.instagram.com/spartabiler" target="_blank">
            <img src="/assets/images/instagram.png" alt="Sparta Biler Instagram"> <!-- flaticon: https://www.flaticon.com/free-icon/instagram_2111463 -->
        </a>
    </section>
    `;
    if (document.querySelector('footer')) {
        document.querySelector('footer').innerHTML = text;
    }
}

window.onscroll = function() {onScrollChecks()};
		
function onScrollChecks() {
    if(document.getElementById('illustration1')) {
        let illustration1 = document.querySelector('#illustration1');
        if(window.pageYOffset >= illustration1.offsetTop ) {
            let tmpX = 1*(window.pageYOffset-illustration1.offsetTop);
            if(tmpX >= 10) {
                illustration1.style.transform="translateX("+ tmpX + "px)";
            }
        }
    }

    if(document.getElementById('illustration2')) {
        let illustration2 = document.querySelector('#illustration2');
        if(window.pageYOffset >= illustration2.offsetTop ) {
            let tmpX = 1*(window.pageYOffset-illustration2.offsetTop);
            if(tmpX >= 10) {
                illustration2.style.transform="translateX("+ tmpX + "px)";
            }
        }
    }

    if(document.getElementById('illustration3')) {
        let illustration3 = document.querySelector('#illustration3');
        if(window.pageYOffset >= illustration3.offsetTop ) {
            let tmpX = 1*(window.pageYOffset-illustration3.offsetTop);
            if(tmpX >= 10) {
                illustration3.style.transform="translateX("+ tmpX + "px)";
            }
        }
    }

    if(document.getElementById('illustration4')) {
        let illustration4 = document.querySelector('#illustration4');
        if(window.pageYOffset >= illustration4.offsetTop - (illustration4.offsetHeight*2) ) {
            let tmpX = -1*(window.pageYOffset-illustration4.offsetTop);
            if(tmpX >= 10) {
                illustration4.style.transform="translateX("+ tmpX + "px)";
            }
        }
    }
};

function leasing(leasingtype) {
    if (leasingtype == 'privatleasing') {
        document.getElementById('privatleasing').style.display = "flex";
        document.getElementById('erhvervsleasing').style.display = "none"
        document.getElementById('splitleasing').style.display = "none"
    } else if (leasingtype == 'erhvervsleasing') {
        document.getElementById('privatleasing').style.display = "none";
        document.getElementById('erhvervsleasing').style.display = "flex"
        document.getElementById('splitleasing').style.display = "none"
    } else if (leasingtype == 'splitleasing') {
        document.getElementById('privatleasing').style.display = "none";
        document.getElementById('erhvervsleasing').style.display = "none"
        document.getElementById('splitleasing').style.display = "flex"
    }
}

/* KODE NEDENFOR ER FRA W3SCHOOLS. Kilde: https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self */
var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}

function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("mySlides");
    if (n > x.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = x.length
    }
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";  
    }
    if (x.length > 0) {
        x[slideIndex-1].style.display = "block";  
    }
}

/* KODE OVENFOR ER FRA W3SCHOOLS. Kilde: https://www.w3schools.com/w3css/tryit.asp?filename=tryw3css_slideshow_self */