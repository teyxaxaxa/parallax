let moon = document.getElementById('moon');
let text = document.getElementById('text');
let train = document.getElementById('train');
let man = document.getElementById('man');
let dersert_moon = document.getElementById('desert-moon')

window.addEventListener('scroll', () =>{
    let value = window.scrollY
    moon.style.top = value * 0.9 + 'px'
    text.style.top = 80 + value * -0.05 + '%'
    train.style.left = value * 1.3 + 'px'
    man.style.left = value * 0.3 + 'px'
    dersert_moon.style.top = value * 0.3 + 'px';
})