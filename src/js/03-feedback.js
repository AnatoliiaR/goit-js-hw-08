import throttle from 'lodash.throttle'; 

const STORAGE_KEY = 'feedback-form-state';

const FormData = {};


const refs = {
  form: document.querySelector('.feedback-form'),
  msg: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};

const form = document.querySelector('.feedback-form');
refs.form.addEventListener('input', throttle(onFormInput, 500));
refs.form.addEventListener('submit', onFormSub);

updateForm();

function onFormSub(e) {
    e.preventDefault();

    e.currentTarget.reset();
    localStorage.removeItem(STORAGE_KEY);
}


function onFormInput(e) {
    FormData[e.target.name] = e.target.value;

    localStorage.setItem(STORAGE_KEY, JSON.stringify(FormData));
}


function updateForm() {
    const saveMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

    if (saveMessage === null) {
       
        return;
    }

  refs.msg.value = saveMessage['message'] || '';
  refs.input.value = saveMessage['email'] || '';

}
