import throttle from 'lodash.throttle'; 

const STORAGE_KEY = 'feedback-form-state';
const form = document.querySelector('.feedback-form');
const getFormData = JSON.parse(localStorage.getItem(STORAGE_KEY));
// const LS = localStorage;



if (getFormData) {
  form.elements.email.value = getFormData.email;
  form.elements.message.value = getFormData.message;
}

function onFormInput() {
     const FormData = {};
    FormData.email = form.email.value;
    FormData.message = form.message.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(FormData));

}

// updateForm();

function onFormSub(e) {
    e.preventDefault();
console.log(JSON.parse(localStorage.getItem(STORAGE_KEY)));
 
    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);


}

form.addEventListener('input', throttle(onFormInput, 500));
form.addEventListener('submit', onFormSub);