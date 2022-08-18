
/**
* Задаёт блок, который должен быть показан по нажатию на указанный элемент.
*/
function setOpenPopupEventHandlers(popupSelector, openSelector) {
    const popup = document.querySelector(popupSelector)
    document.querySelector(openSelector).addEventListener('click', function (e) {
        e.preventDefault();

        openPopup(popup)})
}
/**
 * Закрытие popup по клавише Escape
 */
function closeEsc (e) {
    if (e.key === 'Escape') {
        closePopup()
    }
}
/**
 * Открывает popup
 */
function openPopup(popup) {
    popup.classList.add('popup_opened')
    document.addEventListener('keydown', closeEsc)
}
/**
 * Закрытие popup
 */
function closePopup() {
    const openedPopup = document.querySelector('.popup_opened')
    if (openedPopup) {
        openedPopup.classList.remove('popup_opened');
    }
    document.removeEventListener('keydown', closeEsc)
}

/**
 * Обработчик события на кнопку Отмена в popup
 */
function setupPopupEventHandlers() {
    const closePopupButtons = document.querySelectorAll('.form__button_close');

    closePopupButtons.forEach((element) => {
        const popup = element.closest('.popup')
        element.addEventListener('click', () => closePopup(popup))
    })
}

document.querySelectorAll('.popup')
    .forEach((element) => element .addEventListener('click', function (e) {
        if (e.target.classList.contains('popup_opened')) {
            closePopup()
        }
        e.stopPropagation();
    }))

setOpenPopupEventHandlers('.popup_type_partner', '.button__open-partner')
setupPopupEventHandlers()

const inputElement = document.querySelector('.form__item_el_avatar')
inputElement.addEventListener("change", handleFiles, false)

function handleFiles() {
    const fileList = this.files;
    for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];

        if (!file.type.startsWith('image/')) { 
            continue 
        }
        const img = document.querySelector('.image-avatar');

        const reader = new FileReader();
        reader.onload = (function(aImg) { 
            return function(e) { 
                aImg.src = e.target.result; 
            }; 
        })(img);
        reader.readAsDataURL(file);
    }
    document.querySelector('.delete-file').classList.add('active')
}
const buttonDeleteFile = document.querySelector('.delete-file')

buttonDeleteFile.addEventListener("click", handleDelFiles, false)

function handleDelFiles () {
    const img = document.querySelector('.image-avatar');
    document.querySelector('.delete-file').classList.remove('active')
    img.src = "./images/avatar.png"
    

}