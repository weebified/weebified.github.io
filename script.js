window.onload = (e) => {
    document.getElementById('visible').addEventListener('click', function () {
        var invisible = document.getElementById('invisible');
        var invisible1 = document.getElementById('invisible1');
        var invisible2 = document.getElementById('invisible2');

        if ($("#invisible").hasClass("hide")) {
            invisible.className = invisible.className.replace("hide", "show");
            invisible1.className = invisible1.className.replace("show", "hide");
            invisible2.className = invisible2.className.replace("show", "hide");
        } else if ($("#invisible").hasClass("show")) {
            invisible.className = invisible.className.replace("show", "hide");
        }
    })

    document.getElementById('visible1').addEventListener('click', function () {
        if ($("#invisible1").hasClass("hide")) {
            invisible1.className = invisible1.className.replace("hide", "show");
            invisible.className = invisible.className.replace("show", "hide");
            invisible2.className = invisible2.className.replace("show", "hide");
        } else if ($("#invisible1").hasClass("show")) {
            invisible1.className = invisible1.className.replace("show", "hide");
        }
    })

    document.getElementById('visible2').addEventListener('click', function () {
        if ($("#invisible2").hasClass("hide")) {
            invisible2.className = invisible2.className.replace("hide", "show");
            invisible1.className = invisible1.className.replace("show", "hide");
            invisible.className = invisible.className.replace("show", "hide");
        } else if ($("#invisible2").hasClass("show")) {
            invisible2.className = invisible2.className.replace("show", "hide");
        }
    })

    document.querySelectorAll('.buttons').forEach(item => {
        item.addEventListener('click', function () {
            if ($("#invisible1").hasClass("hide") && $("#invisible").hasClass("hide") && $("#invisible2 ").hasClass("hide")) {
                aboutme.className = aboutme.className.replace("hide", "show");
            } else {
                aboutme.className = aboutme.className.replace("show", "hide");
            }
        })
    })

    var palettes = ['rgb(255, 138, 95)', 'rgb(53, 176, 86)', 'rgb(97, 202, 212)', 'rgb(255, 215, 56)', 'rgb(255, 172, 56)'];
    var Backgroundpalettes = ['#fff3ed', '#e4f0e7', '#daeced', '#fffae6', '#fff3e3'];

    var num = Math.floor(Math.random() * 5);

    var randomPalette = palettes[num];
    var randomBackground = Backgroundpalettes[num];

    var newcolor = randomPalette;
    var newbackground = randomBackground;

    $('.weebified').css({
        'color': newcolor,
    });

    $('.nav').css({
        'color': newcolor,
    });

    $('.ttl').css({
        'color': newcolor,
    });

    $('.ttl1').css({
        'color': newcolor,
    });

    $('.ttl2').css({
        'color': newcolor,
    });

    $('.downloads').css({
        'color': newcolor,
    });

    $('.highlights').css({
        'color': newcolor,
    });

    $('img').css({
        'background': newbackground,
    });
}

    