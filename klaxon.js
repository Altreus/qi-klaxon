function hide(el) {
    return function() {
        el.style.display = 'none';
    }
}

function show(el) {
    return function() {
        el.style.display = 'block';
    }
}

function klaxon(text, pane, audio) {
    pane.textContent = text;
    audio.play();

    setTimeout(hide(pane), 500);
    setTimeout(show(pane), 1000);
    setTimeout(hide(pane), 1400);
    setTimeout(show(pane), 1900);
    setTimeout(hide(pane), 2600);
    setTimeout(show(pane), 3300);
    setTimeout(hide(pane), 4700);
    setTimeout(show(pane), 5000);
}

document.addEventListener("DOMContentLoaded", function() {
    var text = decodeURI(window.location.search.substr(1).replace(/\+/g, ' '));
    var textDiv = document.getElementById('text');

    if (text.replace(/\s/g, '')) {
        klaxon(text, textDiv, document.getElementById('klaxon'));
    }
    else {
        var uriDiv = document.getElementById('uri');
        var inputDiv = document.getElementById('input');
        var input = inputDiv.getElementsByTagName('input')[0];

        show(inputDiv)();
        show(uriDiv)();

        input.addEventListener('keyup', function(e) {
            console.log(e);
            uriDiv.textContent = 
                window.location.href + '?' + encodeURI(this.value);
        });
        input.focus();
    }
});
