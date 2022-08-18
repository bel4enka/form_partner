# Тестовое задание на позицию Junior Frontend Developer
## Задача
Сверстать модальное окно, без использования сторонних библиотек. Внутри модального окна реализовать форму. Форма не должна быть доступна к отправке, если поля не заполнены, либо форма не валидна. Реализовать мобильную адаптацию. Реализовать возможность открыть/закрыть модальное окно на странице. Как плюс использование БЭМ-методологии. Дизайн формы в figma.

## Выполнено
На странице одна кнопка, при клике на которую открывается модальное окно.
При открытии отображается форма ввода с полями, где, указные звёздочкой, являются обязательными.

Если какое-то обязательное поле не заполнено, кнопка отправки заблокирована. Сообщения об ошибках установлены по-умолчанию (браузерные).

Отправка никуда не реализована, после нажатия на кнопку отправки, она будет закрыта через 1 секунду.

Для картинки у поля загрузки логотипа установлена заглушка. Если в поле для загрузки изображения выбрать новый файл .jpg или .png, изображение заглушки изменится.

Дизайн адаптивный, отзывчивый. Минимальное разрешение - 320px.

Модальное окно закрывается при клике на клавишу ESC, а также при клике вне модального окна.

Файловая структура проекта выполнена по БЭМ (nested) https://ru.bem.info/methodology/filestructure/#nested