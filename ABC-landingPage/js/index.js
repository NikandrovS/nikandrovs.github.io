'use strict';

//Фильтр отраслей
let active = { group: "all" };
let filter = document.getElementById('filter');

filter.addEventListener('click', event => {
    let target = event.target;
    if (target !== filter) {
        // Смена выбранного значения у фильтра
        document.getElementsByClassName('filter__item_active')[0].classList.remove('filter__item_active');
        target.classList.add('filter__item_active');

        // Фильтрация блоков
        active.group = target.classList[1];
        let chosen = document.querySelectorAll('.solution_chosen');
        chosen.forEach(n => n.classList.remove('solution_chosen'));

        let newChoice;
        if (active.group === 'sol-all') {
            newChoice = document.getElementsByClassName('solution');
        } else {
            newChoice = document.getElementsByClassName(active.group);
        }

        for (let i = 0; i < newChoice.length; i++) {
            newChoice[i].classList.add('solution_chosen');
        }
    }
});

//Сокращение текста
let size = 60;
let newsContent = document.getElementsByClassName('solution__article');

for(let i = 0; i < newsContent.length; i++) {
    let newsText = newsContent[i].innerText;
    if(newsText.length > size){
        newsContent[i].innerHTML = (newsText.slice(0, size) + '...');
    }
}

//Модальное окно
let button = document.getElementsByClassName('about__begin');
let modal = document.getElementById('modal');

    //Открытие окна
for (let i = 0; i < button.length; i++) {
    button[i].addEventListener('click', event => {
        modal.style.display = 'block';
    });
}
    //Закрытие окна
window.addEventListener('click', event => {
    if(event.target === modal) {
        modal.style.display = 'none';
    }
});
    //Обработчик событий в форме
modal.addEventListener('input', e => {
    let targetLenght = e.target.value.length;
    let targetClassList = e.target.parentNode.classList;

    if(targetLenght > 0) {
        targetClassList.add('form__label_focused');
    } else {
        targetClassList.remove('form__label_focused');
    }
});

