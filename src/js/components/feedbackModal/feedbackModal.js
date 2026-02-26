import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css'
import { postFeedback } from '../../api/feedbackService.js';

const btnLeaveFeedback  =  document.querySelector('.btn-feedback-modal');
const backdropModal = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.btn-close-feedback');
const form = document.querySelector('.modal-form');

btnLeaveFeedback.addEventListener('click', (event)=>{
  document.body.classList.add('modal-open');

  backdropModal.classList.add("is-open");
  window.addEventListener('keydown', onEscapeKeyDown);
});

backdropModal.addEventListener('click', onBackDropModalClick)
closeBtn.addEventListener('click', onCloseBtnClick)

form.addEventListener('submit',
  async (event)=>{
  event.preventDefault();
  const selectedStars = document.querySelectorAll('.star-modal.active');
  const setRating = selectedStars.length;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());
  const postData = {
    name: data.userName.trim(),
    rating: +setRating,
    descr: data.userComment.trim(),
  }
    console.log(selectedStars);

  try{
    await postFeedback(postData);
    iziToast.success({
      title: 'Дякую за відгук!',
      message: 'Ваше повідомлення відправлено!',
      position:'topRight',
      timeout:2000,
    });
    form.reset();
    closeFeedbackModal();
    selectedStars.classList.remove('active');
  }
  catch(e){
    iziToast.error({
      title:"Габела , дані не дійшли",
      message: 'Відбулася помилка під час запиту!',
      position:'topRight',
      timeout:1000,
    })
  }
})

function closeFeedbackModal(){
  backdropModal.classList.remove("is-open");
  document.body.classList.remove('modal-open');

  window.removeEventListener('keydown', onEscapeKeyDown);
  backdropModal.removeEventListener('click', onBackDropModalClick);
}

function onEscapeKeyDown(event) {
  if (event.code === 'Escape' && backdropModal.classList.contains('is-open')) {
    closeFeedbackModal();
  }
}

function onBackDropModalClick(event){
  if (event.target === backdropModal) {
    closeFeedbackModal();
  }
}

function onCloseBtnClick(){
   closeFeedbackModal();
}









