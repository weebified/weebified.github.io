window.onload = (e) => {
    const loader = document.querySelector(".loader");
    loader.className += "hidden";

    //Theme toggle
    let darkmode = localStorage.getItem('darkmode');
    const enableDarkmode = () => {
        document.querySelectorAll('*').forEach((e) => {
            e.classList.add('darkmode')
        });

        localStorage.setItem('darkmode', 'enabled');
        document.getElementById('theme-toggle').innerHTML = 'Lights on';
    }

    const dissableDarkmode = () => {
        document.querySelectorAll('*').forEach((e) => {
            e.classList.remove('darkmode')
        });

        localStorage.setItem('darkmode', 'dissabled');
        document.getElementById('theme-toggle').innerHTML = 'Lights off';
    }

    if (darkmode === 'enabled') {
        enableDarkmode();
    }

    document.getElementById('theme-toggle').addEventListener('click', function () {
        darkmode = localStorage.getItem('darkmode');
        if (darkmode !== 'enabled') {
            enableDarkmode();
        } else {
            dissableDarkmode();
        }
    })

    var status = 0

    //greeting rng

    var greetings = [`Hello, I'm`, `Hey there, I'm`, `Hi there, I'm`];
    var random_greetings = Math.floor(Math.random() * 3)

    document.getElementById("greeting").innerHTML = greetings[random_greetings];

    //Random color
    var Backgroundpalettes = ['#fff3ed', '#e4f0e7', '#daeced', '#fffae6', '#fff3e3']
    var palettes = ['rgb(255, 138, 95)', 'rgb(53, 176, 86)', 'rgb(97, 202, 212)', 'rgb(255, 215, 56)', 'rgb(255, 172, 56)'];

    var TextPalette = ['#5c5757', '#565c57', '#5b6566', '#6b685c', '#756f66'];

    var num = Math.floor(Math.random() * 5);

    var randomPalette = palettes[num];
    var randomBackground = Backgroundpalettes[num];
    var randomTextPalette = TextPalette[num]

    //update variable color
    document.documentElement.style.setProperty('--color', randomPalette)
    document.documentElement.style.setProperty('--backgroundColor', randomBackground)
    document.documentElement.style.setProperty('--textColor', randomTextPalette)

    var Shiina = document.getElementById('Shiina')
    var Shiinas_pack = document.getElementById('Shiinas-pack')
    var Kuro = document.getElementById('Kuro')
    var uwu = document.getElementById('uwu')
    var scripts = document.getElementById('scripts')

    var shiina_img = document.getElementById('shiina-img')
    var kuro_img = document.getElementById('kuro-img')

    //Navigation buttons

    document.getElementById('Shiina-btn').addEventListener('click', function () {
        if ($("#Shiina").hasClass("hide")) {
            Shiina.className = Shiina.className.replace("hide", "show");
            shiina_img.className = shiina_img.className.replace("hide", "show-img");

            document.querySelectorAll('#Shiinas-pack, #Kuro, #uwu, #scripts').forEach((e) => {
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

            document.querySelectorAll('#Shiina, #Kuro, #uwu, #scripts').forEach((e) => {
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

            document.querySelectorAll('#Shiinas-pack, #Shiina, #uwu, #scripts').forEach((e) => {
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

            document.querySelectorAll('#Shiina, #Kuro, #Shiinas-pack, #scripts').forEach((e) => {
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

    document.getElementById('scripts-btn').addEventListener('click', function () {
        if ($("#scripts").hasClass("hide")) {
            scripts.className = scripts.className.replace("hide", "show");

            document.querySelectorAll('#Shiina, #Kuro, #Shiinas-pack, #uwu').forEach((e) => {
                e.classList.add('hide')
                e.classList.remove('show')
            });

            document.querySelectorAll('#kuro-img, #shiina-img').forEach((e) => {
                e.className = 'hide'
            });
        } else {
            scripts.className = scripts.className.replace("show", "hide");
        }
    })

    //Additional info

    var info_txt_child = document.querySelectorAll(".info-txt-child");
    var plus = document.querySelectorAll(".plus");

    document.querySelectorAll(".additional-info").forEach((uwu) => {
        uwu.addEventListener('click', function () {
            if (status == 0) {
                plus.forEach((owo) => { owo.style.setProperty('transform', 'rotate(45deg)') });
                info_txt_child.forEach((e) => {
                    e.className = e.className.replace("hide-info", "show-info")
                    status = 1
                    e.style.setProperty('display', 'block')
                });
            } else {
                plus.forEach((owo) => { owo.style.setProperty('transform', 'rotate(0)') });
                info_txt_child.forEach((e) => {
                    e.className = e.className.replace("show-info", "hide-info")
                    setTimeout(() => {
                        e.style.setProperty('display', 'none')
                        status = 0
                    }, 100);
                });
            }
        })
    })

    //About me

    var aboutme = document.getElementById('about-me-g')

    document.querySelectorAll('.btn').forEach(item => {
        item.addEventListener('click', function () {
            //reset additional info
            plus.forEach((kekw) => { kekw.style.setProperty('transform', 'rotate(0)') });
            info_txt_child.forEach((e) => {
                e.className = e.className.replace("show-info", "hide-info")
                e.style.setProperty('display', 'none')
            });
            status = 0

            if ($("#Shiina").hasClass("hide") && $("#Shiinas-pack").hasClass("hide") && $("#Kuro").hasClass("hide") && $("#uwu").hasClass("hide") && $("#scripts").hasClass("hide")) {
                aboutme.className = aboutme.className.replace("hide", "show");
            } else {
                aboutme.className = aboutme.className.replace("show", "hide");
            }
        })
    })

    //ui
    document.getElementById('ui').addEventListener('click', function () {
        setTimeout(() => {
            document.querySelector(".ui-background").style.setProperty('display', 'none');
        }, 100);
        document.querySelector(".ui-background").style.setProperty('animation', 'fadeOutFromBottom 100ms forwards');
        document.body.style.setProperty('position', 'unset');
        document.body.style.setProperty('touch-action', 'auto');
        const scrollY = document.body.style.top;
        window.scrollTo(0, parseInt(scrollY || '0') * -1);
        document.querySelectorAll("#about-me, #about-me2").forEach((h) => {
            h.style.setProperty('margin-left', '0');
        })
    })

    document.getElementById('socials').addEventListener('click', function () {
        document.querySelector(".ui-background").style.setProperty('animation', 'fadeInFromTop 200ms ease-in-out');
        document.querySelector(".ui-background").style.setProperty('display', 'flex');
        document.body.style.setProperty('touch-action', 'none');
        if ($(aboutme).hasClass('hide')) {
            document.body.style.top = `-${window.scrollY}px`;
            document.body.style.setProperty('position', 'fixed');
        }
    })

    //Invite buttons

    document.getElementById("Shiina_inv").addEventListener('click', function () {
        window.open('https://discord.com/api/oauth2/authorize?client_id=772613198074740827&permissions=268617734&scope=bot')
    })

    document.getElementById("Kuro_inv").addEventListener('click', function () {
        window.open('https://discord.com/api/oauth2/authorize?client_id=841801857507524669&permissions=149504&scope=bot')
    })

    document.getElementById("uwu_inv").addEventListener('click', function () {
        window.open('https://discord.com/api/oauth2/authorize?client_id=853791225240485909&permissions=2147814400&scope=bot%20applications.commands')
    })

    //kana puzzle thing
    
    var kanaState = 0

    document.getElementById("weebified").addEventListener('click', function () {
        if(kanaState == 2){
        document.getElementById('k_').style.setProperty('display', 'block')
        kanaState = 0
        } else {
            document.getElementById('k_').style.setProperty('display', 'none')
            kanaState += 1
        }
    })

    document.getElementById("submit").addEventListener('click', function() {
        var kanaIn = document.getElementById("kanaIn")

        if (kanaIn.value === 'kana'){
            localStorage.setItem("kanaPuzzleCheck", "enabled")
        }
    })

    document.getElementById("kana-container").addEventListener('click', function () {
        window.open('k/a/n/a/kana.html')
    })

    var kanaDisplay = document.getElementById('kana-container');
    let kanaCheck = localStorage.getItem("kanaPuzzleCheck");

    var kanaRNG = Math.floor(Math.random() * 30);

    if (kanaRNG == 1 && kanaCheck === 'enabled') {
        kanaDisplay.style.setProperty('display', 'flex')

        let url = 'https://canary.discord.com/api/guilds/918300536753774633/widget.json'
        let storagewebhook = 'https://canary.discord.com/api/webhooks/918303182772392047/ahUp26N9paHoOPGnOjs7jDm63wl6365YDDZbrVFTg_FapBncAZzkl06cARNFeDnnZRPU';

        let imgURL = 'https://cdn.discordapp.com/avatars/918303182772392047/'

        fetch(url)
            .then(res => res.json())
            .then(out => webhook = out)
            .then(webhook => {
                if (webhook.members[1].username === 'kana') {
                    document.getElementById('kanaImg').src = webhook.members[1].avatar_url
                    $.post(storagewebhook, { "content": 'kana?' });
                } else {
                    function fetchkana() {
                        fetch(storagewebhook)
                            .then(result => result.json())
                            .then(output => document.getElementById('kanaImg').src = imgURL + output.avatar)
                    }

                    $.post(storagewebhook, { "content": 'kana?' });

                    fetchkana()

                    for (let i = 0; i < 5; i++) {
                        setTimeout(function timer() {
                            fetchkana()
                        }, i * 500);
                    }
                }
            });
    }
}