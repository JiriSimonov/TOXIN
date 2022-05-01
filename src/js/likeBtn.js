import likeImg from '../assets/images/likeBtn/like.svg';
import likeImgClikced from '../assets/images/likeBtn/like-clicked.svg';

const likeBtn = document.querySelector('.like__btn');
let likeIcon = document.querySelector('#like-icon');
let likeCount = document.querySelector('#like-count');
let likeClicked = false;

likeBtn.addEventListener('click', () => {
    if (!likeClicked) {
        likeClicked = true;
        likeIcon.innerHTML = '<img src="'+ likeImgClikced +'" alt="Like Button+">';
        likeCount.textContent++;
        likeBtn.classList.toggle('like__btn_clicked');
    } else {
        likeClicked = false;
        likeIcon.innerHTML = '<img src="'+ likeImg +'" alt="Like Button-">';
        likeCount.textContent--;
        likeBtn.classList.toggle('like__btn_clicked');
    }
});