let easter_egg_activated = false;

window.onload = function() {
    document.getElementById("place").onclick = function() {
        if (!easter_egg_activated){
            easter_egg_activated = true;
            document.getElementById('fake_bg').style.opacity = '0';
            change_enviroment();
        }
    };
};

function getTimeOfDay() {
    let date = new Date();
    let hour = date.getHours();
    if (hour >= 6 && hour < 12) {
        return 'morning';
    } else if (hour >= 12 && hour < 18) {
        return 'afternoon';
    } else if (hour >= 18 && hour < 23) {
        return 'evening';
    } else {
        return 'night';
    }
}

function set_pos(pic_id, x, y) {
    document.getElementById(pic_id).style.left = x + 'px';
    document.getElementById(pic_id).style.top = y + 'px';
}

function show_sun(answer){
    if (answer === true){
        document.getElementById('sun').style.opacity = '1';
    } else {
        document.getElementById('sun').style.opacity = '0';
    }
}

function show_moon(answer){
    if (answer === true){
        document.getElementById('moon').style.opacity = '1';
    } else {
        document.getElementById('moon').style.opacity = '0';
    }
}

function show_stars(answer) {
    if (answer === true){
        document.getElementById('stars').style.opacity = '1';
    } else {
        document.getElementById('stars').style.opacity = '0';
    }
}

function paint_text(answer) {
    if (answer === 'black') {
        document.getElementById('gh_icon').style.filter = 'invert()';
        document.getElementById('tg_icon').style.filter = 'invert()';
        document.body.style.color = '#000000';
    } else {
        document.getElementById('gh_icon').style.filter = 'none';
        document.getElementById('tg_icon').style.filter = 'none';
        document.body.style.color = '#ffffff';
    }
}
function change_enviroment() {
    let timeOfDay = getTimeOfDay();
    let backgroundColor;
    let ground_brightness;

    switch (timeOfDay) {
        case 'morning':
            ground_brightness = '150%';
            backgroundColor = '#F0E68C';
            paint_text('black');
            show_stars(false);
            set_pos('moon', 100, 400);
            set_pos('sun', 1600, 700);
            show_sun(true);
            break;
        case 'afternoon':
            ground_brightness = '100%';
            backgroundColor = '#b3d2fe';
            paint_text('white');
            show_stars(false);
            set_pos('sun', 1350, 50);
            set_pos('moon', 150, 750);
            show_moon(false);
            break;
        case 'evening':
            ground_brightness = '80%';
            backgroundColor = '#FFA07A';
            paint_text('white')
            show_stars(false);
            set_pos('moon', 1350, 750);
            set_pos('sun', 100, 400)
            break;
        case 'night':
            ground_brightness = '50%';
            backgroundColor = '#000033';
            paint_text('white')
            show_stars(true);
            set_pos('moon', 1350, 50);
            set_pos('sun', 150, 750)
            setTimeout( function() {
                set_pos('sun', 1600, 750);
            }, 1000)
            show_moon(true)
            show_sun(false)
            break;
        default:
            ground_brightness = '100%';
            backgroundColor = '#FFFFFF';
            break;
    }

    document.body.style.backgroundColor = backgroundColor;
    document.getElementById('ground').style.filter = 'brightness(' + ground_brightness + ')';
}
let imageElement = document.createElement('img');
    imageElement.setAttribute('src', '../images/sprites/ground.png');
    imageElement.setAttribute('id', 'ground');
    document.getElementById('imageContainer').appendChild(imageElement);

let sun_image = document.createElement('img');
    sun_image.setAttribute('src', '../images/sprites/sun.png');
    sun_image.setAttribute('id', 'sun');
    document.getElementById('moon_and_sun_container').appendChild(sun_image)
let moon_image = document.createElement('img');
    moon_image.setAttribute('src', '../images/sprites/moon.png');
    moon_image.setAttribute('id', 'moon');
    document.getElementById('moon_and_sun_container').appendChild(moon_image)
let stars_image = document.createElement('img');
    stars_image.setAttribute('src', '../images/sprites/stars.png');
    stars_image.setAttribute('id', 'stars');
    document.getElementById('stars_container').appendChild(stars_image);

// change_enviroment();

setInterval(change_enviroment, 60000);