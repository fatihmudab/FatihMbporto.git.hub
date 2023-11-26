const body = document.querySelector('body');
const btn = document.querySelector('.btn-btn');
const icon = document.querySelector('.btn-icon');

btn.addEventListener('click', () => {

    body.classList.toggle('darkmode');
    icon.classList.add('animated');

    function setDarkMode(isDark) {
    if(isDark){
        document.body.setAttribute('id','darkmode');
    }else{
        document.body.setAttribute('id','');
    }
    }


    if(body.classList.contains('darkmode')){
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }else{
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }


    setTimeout(() => {
        icon.classList.remove('animated');
    }, 500)


})

document.querySelector('.menu-toggle').addEventListener('click', function() {
    document.querySelector('.navbar').classList.toggle('active');
    document.querySelector('.menu-toggle').classList.toggle('change');
});

