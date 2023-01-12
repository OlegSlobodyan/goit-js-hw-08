import throttle from 'lodash.throttle';

const feedbackForm = document.querySelector('.feedback-form');
const STORAGE_KEY = 'feedback-form-state';
let parseObject = JSON.parse(localStorage.getItem(STORAGE_KEY));
let localObject = {};

insertWithLS();

feedbackForm.addEventListener('submit', submitForm);

function submitForm(evt) {
  if (evt.target.email.value === '' || evt.target.message.value === '') {
    return;
  }
  evt.preventDefault();
  evt.target.reset();
  console.log(localObject);
  localStorage.removeItem(STORAGE_KEY);
  localObject.email = '';
  localObject.message = '';
}

feedbackForm.addEventListener('input', throttle(addLocalStorage, 500));

function addLocalStorage(evt) {
  localObject[evt.target.name] = evt.target.value;

  localStorage.setItem(STORAGE_KEY, JSON.stringify(localObject));
}

function insertWithLS() {
  let saveData = parseObject;
  if (saveData) {
    try {
      localObject = saveData;

      Object.entries(localObject).forEach(
        ([name, value]) => (feedbackForm.elements[name].value = value)
      );
    } catch (err) {
      console.log(err.message);
    }
  }
}
