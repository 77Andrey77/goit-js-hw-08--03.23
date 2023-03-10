import throttle from "lodash.throttle";

const formEl = document.querySelector(".feedback-form");
const emailEl = document.querySelector(".feedback-form [name ='email']");
const textareaEl = document.querySelector(".feedback-form [name ='message']");
const textarea1El = document.querySelector(".feedback-form [name ='message1']");
const textarea2El = document.querySelector(".feedback-form [name ='message2']");


const FORM_KEYS = 'feedback-form-state';
const formValue = {};
popularForm();

formEl.addEventListener('input', throttle(onFormInput, 1000));
formEl.addEventListener('submit', onFormSubmit);


function onFormInput(e) {

  formValue[e.target.name] = e.target.value;
  localStorage.setItem(FORM_KEYS, JSON.stringify(formValue));
  
}


function onFormSubmit(e) {
  e.preventDefault();
  console.log(JSON.parse(localStorage.getItem(FORM_KEYS)));

  localStorage.removeItem(FORM_KEYS);

  formEl.reset();
  //или так очистить форму e.currentTarget.reset(); 

}

function popularForm() {
  const formDate = JSON.parse(localStorage.getItem(FORM_KEYS));

  if (formDate) {
    emailEl.value = formDate.email;
    textareaEl.value = formDate.message;
    textarea1El.value = formDate.message1;
    textarea2El.value = formDate.message2;

  }
}