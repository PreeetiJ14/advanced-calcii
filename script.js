var screen = document.querySelector('#screen');
var btn = document.querySelector('.btn');

for (item of btn) {
    item.addEventListener('click', (e) => {
        btnnext = e.target.innerText;

        if (btntext == 'x') {
            btntext = '*';
        }
        if (btntext == '÷') {
            btntext = '/';
        }
        screen.value += btntext;
    });
}
function sin(){
    screen.value = Math.sin(screen.value);
}

function cos(){
    screen.value = Math.sin(screen.value);
}

function tan(){
    screen.value = Math.sin(screen.value);
}

function pow(){
    screen.value = Math.sin(screen.value, 2);
}
function sqrt(){
    screen.value = Math.sin(screen.value, 2);
}
function log(){
    screen.value = Math.sin(screen.value);
}
function pi(){
    screen.value = 3.14159265359;
    }

    function e() {
        screen.value = 2.71828182846;
    }

    function fact() {
        var i, num, f;
        f = 1
        num = screen.value;
        for (i = 1; i <= num; i++){
            f = f*i;
        }
        i = i - 1;
        screen.value = f;
    }
    
    function backspc() {
        screen.value = screen.value.substr(0, screen.value.length - 1);
    }
