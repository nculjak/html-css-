let menuBtn = document.querySelector('.icon');
menuBtn.addEventListener('click', showDisplay);

function showDisplay() {
    let links = document.querySelector('#mylinks');

    if (links.style.display === 'none'){
        links.style.display = 'block';

    }
    else{
        links.style.display = 'none';
    }

}