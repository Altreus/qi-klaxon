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
document.addEventListener("DOMContentLoaded", function() {
    var text = window.location.search.substr(1).replace(/\+/g, ' ');
    var textDiv = document.getElementById('text');
    
    textDiv.textContent = text;
    document.getElementById('klaxon').play();

    setTimeout(hide(textDiv), 500);
    setTimeout(show(textDiv), 1000);
    setTimeout(hide(textDiv), 1400);
    setTimeout(show(textDiv), 1900);
    setTimeout(hide(textDiv), 2600);
    setTimeout(show(textDiv), 3300);
    setTimeout(hide(textDiv), 5000);
});
