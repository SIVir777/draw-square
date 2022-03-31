const stroka = document.querySelectorAll('.stroka');
console.log(stroka);
stroka.forEach(function(str) {
    str.querySelectorAll('div').forEach(function(cube) {
        cube.addEventListener('click', function() {
            this.style.background = 'red';
        });
    });
});

const knop = document.querySelector('#button');
knop.addEventListener('click', function() {
    stroka.forEach(function(str) {
        str.querySelectorAll('div').forEach(function(cube) {
            cube.style.background = '#fff';
        });
    });
});
