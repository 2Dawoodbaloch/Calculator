let a = document.getElementsByClassName('btn');
a[0].addEventListener('click', function () {
    document.getElementById('input').value = '';
});
a[1].addEventListener('click', function() {
    let inputField = document.getElementById('input');
    let currentValue = inputField.value;
    // Remove the last character from the input value
    inputField.value = currentValue.slice(0, -1);
});
a[2].addEventListener('click', function () {
    document.getElementById('input').value += '%';
});
a[3].addEventListener('click', function () {
    document.getElementById('input').value += '/';
});
a[4].addEventListener('click', function () {
    document.getElementById('input').value += 7;
});
a[5].addEventListener('click', function () {
    document.getElementById('input').value += 8;
});
a[6].addEventListener('click', function () {
    document.getElementById('input').value += 9;
});
a[7].addEventListener('click', function () {
    document.getElementById('input').value += '*';
});
a[8].addEventListener('click', function () {
    document.getElementById('input').value += 4;
});
a[9].addEventListener('click', function () {
    document.getElementById('input').value += 5;
});
a[10].addEventListener('click', function () {
    document.getElementById('input').value += 6;
});
a[11].addEventListener('click', function () {
    document.getElementById('input').value += '+';
});
a[12].addEventListener('click', function () {
    document.getElementById('input').value += 1;
});
a[13].addEventListener('click', function () {
    document.getElementById('input').value += 2;
});
a[14].addEventListener('click', function () {
    document.getElementById('input').value += 3;
});
a[15].addEventListener('click', function () {
    document.getElementById('input').value += '-';
});
a[16].addEventListener('click', function () {
    document.getElementById('input').value += '.';
});
a[17].addEventListener('click', function () {
    document.getElementById('input').value += 0;
});
a[18].addEventListener('click', function () {
    document.getElementById('input').value += '00';
});
a[19].addEventListener('click', function () {
    let x = document.getElementById('input').value;
    let y = eval(x);
    document.getElementById('input').value = y;
});