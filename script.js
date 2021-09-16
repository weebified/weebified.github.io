window.onload = (e) => {
    const loader =  document.querySelector(".loader");
    loader.className += "hidden";

    //Theme toggle
    let darkmode = localStorage.getItem('darkmode');
    const enableDarkmode = () => {
        document.querySelectorAll('*').forEach((e) => {
            e.classList.add('darkmode')
        });

        localStorage.setItem('darkmode', 'enabled');
        document.getElementById('theme-toggle').innerHTML = 'Toggle light mode';
    }

    const dissableDarkmode = () => {
        document.querySelectorAll('*').forEach((e) => {
            e.classList.remove('darkmode')
        });

        localStorage.setItem('darkmode', 'dissabled');
        document.getElementById('theme-toggle').innerHTML = 'Toggle dark mode';
    }

    if(darkmode === 'enabled'){
        enableDarkmode();
    }

    document.getElementById('theme-toggle').addEventListener('click', function  () {
        darkmode = localStorage.getItem('darkmode');
        if(darkmode !== 'enabled'){
            enableDarkmode();
        } else {
            dissableDarkmode();
        }
    })

    //greeting rng
    
    var greetings = [`Hello, I'm`, `Hey there, I'm`, `Hi there, I'm`];
    var random_greetings = Math.floor(Math.random() * 3)

    document.getElementById("greeting").innerHTML = greetings[random_greetings];

    //Random color
    var Backgroundpalettes = ['#fff3ed', '#e4f0e7', '#daeced', '#fffae6', '#fff3e3']
    var palettes = ['rgb(255, 138, 95)', 'rgb(53, 176, 86)', 'rgb(97, 202, 212)', 'rgb(255, 215, 56)', 'rgb(255, 172, 56)'];

    var randomTextPalette = ['#5c5757', '#565c57', '#5b6566', '#6b685c', '#756f66']; //random text palette, might use in futur idk

    var num = Math.floor(Math.random() * 5);

    var randomPalette = palettes[num];
    var randomBackground = Backgroundpalettes[num];

    $('.color').css({
        'color': randomPalette,
    });

    $('.tittles').css({
        'color': randomPalette,
    });

    $('.sub-tittles').css({
        'color': randomPalette,
    });

    $('img').css({
        'background': randomBackground,
    });

    var Shiina = document.getElementById('Shiina')
    var Shiinas_pack = document.getElementById('Shiinas-pack')
    var Kuro = document.getElementById('Kuro')
    var uwu = document.getElementById('uwu')

    var shiina_img = document.getElementById('shiina-img')
    var kuro_img = document.getElementById('kuro-img')

    //Navigation buttons

    document.getElementById('Shiina-btn').addEventListener('click', function () {
        if ($("#Shiina").hasClass("hide")) {
            Shiina.className = Shiina.className.replace("hide", "show");
            shiina_img.className = shiina_img.className.replace("hide", "show-img");

            document.querySelectorAll('#Shiinas-pack, #Kuro, #uwu').forEach((e) => {
                e.classList.add('hide')
                e.classList.remove('show')
            });

            kuro_img.className = kuro_img.className.replace("show-img", "hide");
        } else {
            Shiina.className = Shiina.className.replace("show", "hide");
            shiina_img.className = shiina_img.className.replace("show-img", "hide");
        }
    })

    document.getElementById('Shiinas-pack-btn').addEventListener('click', function () {
        if ($("#Shiinas-pack").hasClass("hide")) {
            Shiinas_pack.className = Shiinas_pack.className.replace("hide", "show");

            document.querySelectorAll('#Shiina, #Kuro, #uwu').forEach((e) => {
                e.classList.add('hide')
                e.classList.remove('show')
            });

            document.querySelectorAll('#kuro-img, #shiina-img').forEach((e) => {
                e.className = 'hide'
            });
        } else {
            Shiinas_pack.className = Shiinas_pack.className.replace("show", "hide");
        }
    })

    document.getElementById('Kuro-btn').addEventListener('click', function () {
        if ($("#Kuro").hasClass("hide")) {
            Kuro.className = Kuro.className.replace("hide", "show");
            kuro_img.className = kuro_img.className.replace("hide", "show-img");

            document.querySelectorAll('#Shiinas-pack, #Shiina, #uwu').forEach((e) => {
                e.classList.add('hide')
                e.classList.remove('show')
            });

            shiina_img.className = shiina_img.className.replace("show-img", "hide");
        } else {
            Kuro.className = Kuro.className.replace("show", "hide");
            kuro_img.className = kuro_img.className.replace("show-img", "hide");
        }
    })

    document.getElementById('uwu-btn').addEventListener('click', function () {
        if ($("#uwu").hasClass("hide")) {
            uwu.className = uwu.className.replace("hide", "show");

            document.querySelectorAll('#Shiina, #Kuro, #Shiinas-pack').forEach((e) => {
                e.classList.add('hide')
                e.classList.remove('show')
            });

            document.querySelectorAll('#kuro-img, #shiina-img').forEach((e) => {
                e.className = 'hide'
            });
        } else {
            uwu.className = uwu.className.replace("show", "hide");
        }
    })

    //About me

    var aboutme = document.getElementById('about-me-g')

    document.querySelectorAll('.btn').forEach(item => {
        item.addEventListener('click', function () {
            if ($("#Shiina").hasClass("hide") && $("#Shiinas-pack").hasClass("hide") && $("#Kuro").hasClass("hide") && $("#uwu").hasClass("hide")) {
                aboutme.className = aboutme.className.replace("hide", "show");
            } else {
                aboutme.className = aboutme.className.replace("show", "hide");
            }
        })
    })

    //Invite buttons

    document.getElementById("Shiina_inv").addEventListener('click', function() {
        window.open('https://discord.com/api/oauth2/authorize?client_id=772613198074740827&permissions=268617734&scope=bot')
    })

    document.getElementById("Kuro_inv").addEventListener('click', function() {
        window.open('https://discord.com/api/oauth2/authorize?client_id=841801857507524669&permissions=149504&scope=bot')
    })

    document.getElementById("uwu_inv").addEventListener('click', function() {
        window.open('https://discord.com/api/oauth2/authorize?client_id=853791225240485909&permissions=2147814400&scope=bot%20applications.commands')
    })
}