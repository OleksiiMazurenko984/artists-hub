import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { postFeedback } from '../../api/feedbackService.js';

const btnLeaveFeedback = document.querySelector('.btn-feedback-modal');
const backdropModal = document.querySelector('.backdrop');
const closeBtn = document.querySelector('.btn-close-feedback');
const form = document.querySelector('.modal-form');
const stars = document.querySelectorAll('.star-modal');
const nameInput = form.querySelector('#user-name');
const commentInput = form.querySelector('#user-comment');
const ratingError = form.querySelector('.rating-error');

let isSubmitAttempted = false;

btnLeaveFeedback.addEventListener('click', () => {
  document.body.classList.add('modal-open');

  backdropModal.classList.add('is-open');
  window.addEventListener('keydown', onEscapeKeyDown);
});

backdropModal.addEventListener('click', onBackDropModalClick);
closeBtn.addEventListener('click', onCloseBtnClick);

form.addEventListener('input', () => {
  if (isSubmitAttempted) {
    validateForm();
  }
});

stars.forEach(star => {
  star.addEventListener('click', () => {
    if (isSubmitAttempted) {
      validateRating();
    }
  });
});

form.addEventListener('submit', async event => {
  event.preventDefault();

  isSubmitAttempted = true;

  if (!validateForm()) {
    return;
  }

  const selectedStars = document.querySelectorAll('.star-modal.active');
  const setRating = selectedStars.length;
  const formData = new FormData(form);
  const data = Object.fromEntries(formData.entries());

  const postData = {
    name: data.userName.trim(),
    rating: +setRating,
    descr: data.userComment.trim(),
  };

  try {
    await postFeedback(postData);
    iziToast.success({
      title: 'Дякую за відгук!',
      message: 'Ваше повідомлення відправлено!',
      position: 'topRight',
      timeout: 2000,
    });

    form.reset();
    closeFeedbackModal();
    clearStarsAfterSubmit();
    clearValidationState();
  } catch (e) {
    iziToast.error({
      title: 'Дані не були відправленні',
      message: 'Відбулася помилка під час запиту!',
      position: 'topRight',
      timeout: 1000,
    });
  }
});

function validateForm() {
  const isNameValid = validateField(nameInput);
  const isCommentValid = validateField(commentInput);
  const isRatingValid = validateRating();

  return isNameValid && isCommentValid && isRatingValid;
}

function validateField(field) {
  const error = field.parentElement.querySelector('.text-error');
  const isValid = field.checkValidity();
  field.classList.toggle('is-invalid', !isValid);
  error.classList.toggle('show', !isValid);

  return isValid;
}

function validateRating() {
  const hasActiveStar = document.querySelector('.star-modal.active') !== null;
  ratingError.classList.toggle('show', !hasActiveStar);

  return hasActiveStar;
}

function clearValidationState() {
  isSubmitAttempted = false;
  nameInput.classList.remove('is-invalid');
  commentInput.classList.remove('is-invalid');
  form
    .querySelectorAll('.text-error')
    .forEach(error => error.classList.remove('show'));
}

function closeFeedbackModal() {
  backdropModal.classList.remove('is-open');
  document.body.classList.remove('modal-open');

  window.removeEventListener('keydown', onEscapeKeyDown);
}

function onEscapeKeyDown(event) {
  if (event.code === 'Escape' && backdropModal.classList.contains('is-open')) {
    closeFeedbackModal();
  }
}

function onBackDropModalClick(event) {
  if (event.target === backdropModal) {
    closeFeedbackModal();
  }
}

function onCloseBtnClick() {
  closeFeedbackModal();
}

function clearStarsAfterSubmit() {
  const selectedStars = document.querySelectorAll('.star-modal');
  selectedStars.forEach(element => element.classList.remove('active'));
}
