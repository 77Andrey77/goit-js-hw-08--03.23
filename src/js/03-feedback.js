import throttle from "lodash.throttle";

const STORAGE_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const inputEl = document.querySelector('.feedback-form input');
const textareaEl = document.querySelector('.feedback-form textarea');

populatTextareal();
const formData = {};


formEl.addEventListener('submit', onFormSubmit);
formEl.addEventListener('input', throttle(onFormInput, 1000));


function onFormInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(STORAGE_KEY, JSON.stringify(formData));
}

function onFormSubmit(event) {
  event.preventDefault();
  console.log('Отправляем форму');

  event.currentTarget.reset();
  localStorage.removeItem(STORAGE_KEY);
}

function populatTextareal() {
  const sendMessage =JSON.parse(localStorage.getItem(STORAGE_KEY));

  
  if (sendMessage) {
    console.log(sendMessage);
    inputEl.value = sendMessage.email;
    textareaEl.value = sendMessage.message;
   };
}