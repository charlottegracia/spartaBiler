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
        document.querySelector('main').style.display = "block";
        document.querySelector('footer').style.display = "block";
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
                <p class="bold">Tlf. 61 46 46 85</p>
                <p>info@spartabiler.dk</p>
            </section>
            <section>
                <h2>Skriv til os og hør, hvad vi kan tilbyde</h2>
                <button>Send en email</button>
            </section>
            <section>
                <p class="bold">Adresse:</p>
                <p>Gladsaxe Møllevej 21</p>
                <p>2860 Søborg</p>
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
        document.querySelector('footer').innerHTML += text;
    }
}

window.onscroll = function() {onScrollChecks()};
		
function onScrollChecks() {
        let illustration = document.querySelector('#illustration');
        illustration.style.animationPlayState = "running";
};	