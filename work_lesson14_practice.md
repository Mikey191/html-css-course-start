### Практика #1

#### **Создание html-разметки документа**:

1. **Создайте раздел `<header>` с классом `header`**:

   - Внутри добавьте тег `<div>` с классом logo и текстом `"MySite"`.
   - Добавьте заголовок первого уровня `<h1>` с классом `site-name` и текстом `"Название сайта"`.
   - Создайте навигацию с помощью тега `<nav>` с классом `navigation`.
     - Внутри навигации добавьте три ссылки `<a>`: `"Главная"`, `"О нас"`, и `"Контакты"`. Укажите для всех ссылок атрибут `href` со значением `"#"`.

2. **Создайте основной раздел страницы `<main>` с классом `main-content`**:

   - Добавьте заголовок второго уровня `<h2>` с текстом `"Заполните информацию"`.
   - Внутри `<main>` создайте контейнер `<div>` с классом `form-container`.

3. **Создайте группы для полей ввода внутри контейнера `form-container`**:

   - Каждая группа должна быть оформлена в виде `<div>` с классом `form-group`.
   - Внутри каждой группы:
     - Добавьте тег `<label>` с атрибутом `for`, указывающим на соответствующий идентификатор поля.
     - Добавьте тег `<input>`:
       - Для первой группы используйте `type="text"`, `id="login"`, и `placeholder="Введите логин"`.
       - Для второй группы используйте `type="password"`, `id="password"`, и `placeholder="Введите пароль"`.
       - Для третьей группы используйте `type="email"`, `id="email"`, и `placeholder="Введите email"`.
       - Для четвёртой группы используйте `type="tel"`, `id="phone"`, и `placeholder="Введите номер телефона"`.
     - После каждого `<input>` добавьте кнопку `<button>` с текстом `"Проверка"`.
   - Для пятой группы:
     - Создайте `<label>` с классом `custom-file-upload`.
     - Внутри `<label>` добавьте `<input>` с `type="file"` и `id="file-upload"`.
     - После `<input>` укажите текст `"Загрузите фото"`.

4. **Создайте нижний колонтитул `<footer>` с классом `footer`**:

   - Внутри добавьте три параграфа `<p>`:
     - Первый содержит текст `"Контакты: info@mysite.com"`.
     - Второй содержит текст `"|"`.
     - Третий содержит текст `"Телефон: +123456789"`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Сайт</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header class="header">
      <div class="logo">MySite</div>
      <h1 class="site-name">Название сайта</h1>
      <nav class="navigation">
        <a href="#">Главная</a>
        <a href="#">О нас</a>
        <a href="#">Контакты</a>
      </nav>
    </header>
    <main class="main-content">
      <h2>Заполните информацию</h2>
      <div class="form-container">
        <div class="form-group">
          <label for="login">Логин</label>
          <input type="text" id="login" placeholder="Введите логин" />
          <button>Проверка</button>
        </div>
        <div class="form-group">
          <label for="password">Пароль</label>
          <input type="password" id="password" placeholder="Введите пароль" />
          <button>Проверка</button>
        </div>
        <div class="form-group">
          <label for="email">Электронный адрес</label>
          <input type="email" id="email" placeholder="Введите email" />
          <button>Проверка</button>
        </div>
        <div class="form-group">
          <label for="phone">Номер телефона</label>
          <input type="tel" id="phone" placeholder="Введите номер телефона" />
          <button>Проверка</button>
        </div>
        <div class="form-group">
          <label class="custom-file-upload">
            <input type="file" id="file-upload" />
            Загрузите фото
          </label>
        </div>
      </div>
    </main>
    <footer class="footer">
      <p>Контакты: info@mysite.com</p>
      <p>|</p>
      <p>Телефон: +123456789</p>
    </footer>
  </body>
</html>
```

#### **Создание стилизации для разметки**:

1. **Обнулите стандартные отступы и примените общее форматирование для всех элементов**:

   - Установите `margin` и `padding` равными `0`.
   - Примените значение `border-box` для свойства `box-sizing`.

2. **Настройте стили для элемента `<body>`**:

   - Задайте отображение `flex` и направление `column` для расположения элементов.
   - Установите минимальную высоту страницы (`min-height`) равной `100vh`.
   - Используйте шрифт `Arial`, `sans-serif`.
   - Установите межстрочный интервал `line-height` равным `1.6`.
   - Примените фон страницы с цветом `#f4f4f9` и текст с цветом `#333`.

3. **Оформите шапку страницы `.header`**:

   - Задайте фон `#2c3e50` и текстовый цвет `#fff`.
   - Добавьте внутренний отступ `padding` равный `20px`.
   - Установите отображение `flex`, выровняйте содержимое по центру и расположите элементы по краям (`justify-content: space-between` и `align-items: center`).

4. **Стили для логотипа `.logo` и названия сайта `.site-name`**:

   - Установите для `.logo` размер шрифта `1.5rem` и полужирное начертание.
   - Для `.site-name` задайте размер шрифта `1.2rem`.

5. **Настройте ссылки в навигации `.navigation a`**:

   - Установите текстовый цвет `#fff` и уберите подчеркивание.
   - Добавьте левый отступ `margin-left` равный `15px`.
   - При наведении (`hover`) добавьте `подчеркивание текста`.

6. **Стили для основного контента `.main-content`**:

   - Задайте элементу гибкость (`flex: 1`) и внутренний отступ `20px`.

7. **Оформите заголовок второго уровня `<h2>`**:

   - Установите выравнивание текста по центру и нижний отступ `margin-bottom` равным `20px`.

8. **Настройте контейнер формы `.form-container`**:

   - Установите максимальную ширину `600px` и выровняйте его по центру страницы (`margin: 0 auto`).
   - Примените белый фон (`background: #fff`), внутренний отступ `20px`, и закругленные углы с радиусом 8px.
   - Добавьте тень (`box-shadow`) с параметрами `0 2px 5px rgba(0, 0, 0, 0.1)`.

9. **Настройте группы полей `.form-group`**:

   - Добавьте нижний отступ `margin-bottom` равный `20px`.
   - Установите отображение `flex` и выравнивание элементов по центру и по краям (`align-items: center`, `justify-content: space-between`).

10. **Стили для `<label>` внутри `.form-group`**:

    - Задайте ширину `flex: 1`, отступ справа `margin-right` равный `10px` и полужирное начертание текста.

11. **Оформите поля ввода `<input>`**:

    - Установите ширину `flex: 2`, внутренний отступ `10px`, рамку `1px solid #ccc`, и закругленные углы с радиусом `4px`.
    - Размер текста сделайте `1rem`.

12. **Стили для кнопок `<button>`**:

    - Добавьте внутренний отступ `10px 20px`, фон `#3498db`, и текстовый цвет `#fff`.
    - Уберите рамку и задайте закругление углов с радиусом `4px`.
    - При наведении (`hover`) измените фон на `#2980b9`.

13. **Оформите загрузчик файлов `.custom-file-upload`**:

    - Установите выравнивание элементов (`display: flex`, `align-items: center`, `justify-content: center`).
    - Добавьте рамку `2px dashed #007bff`, закругление углов `5px`, и высоту `20vh`.
    - Укажите `белый фон` и цвет текста `#007bff`.
    - **Добавьте плавный переход для изменения фона и текста** (`transition: background-color 0.3s, color 0.3s`).
    - При наведении (`hover`) измените фон на `#007bff`, текстовый цвет на `white`, и уменьшите прозрачность (`opacity`) до `0.5`.

14. **Настройте скрытие `<input>` внутри `.custom-file-upload`**:

    - Установите отображение (`display`) `none`.

15. **Стили для нижнего колонтитула `.footer`**:

    - Задайте отображение `flex`, выравнивание элементов по центру, и равномерное расстояние между ними (`gap: 1.5rem`).
    - Установите фон `#2c3e50`, текстовый цвет `#fff,` и внутренний отступ `padding` равный `10px`.
    - Добавьте автоотступ сверху (`margin-top: auto`), чтобы футер находился внизу страницы.

```css
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  font-family: Arial, sans-serif;
  line-height: 1.6;
  background-color: #f4f4f9;
  color: #333;
}

.header {
  background-color: #2c3e50;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: bold;
}

.site-name {
  font-size: 1.2rem;
}

.navigation a {
  color: #fff;
  text-decoration: none;
  margin-left: 15px;
}

.navigation a:hover {
  text-decoration: underline;
}

.main-content {
  flex: 1;
  padding: 20px;
}

h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-container {
  max-width: 600px;
  margin: 0 auto;
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

label {
  flex: 1;
  margin-right: 10px;
  font-weight: bold;
}

input {
  flex: 2;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
}

.custom-file-upload {
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  border: 2px #007bff;
  border-style: dashed;
  border-radius: 5px;
  background-color: white;
  color: #007bff;
  transition: background-color 0.3s, color 0.3s;
  height: 20vh;
}

.custom-file-upload input {
  display: none;
}

.custom-file-upload:hover {
  background-color: #007bff;
  opacity: 0.5;
  color: white;
}

button {
  padding: 10px 20px;
  background-color: #3498db;
  color: #fff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 10px;
}

button:hover {
  background-color: #2980b9;
}

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

.footer {
  display: flex;
  justify-content: center;
  gap: 1.5rem;
  background-color: #2c3e50;
  color: #fff;
  text-align: center;
  padding: 10px;
  margin-top: auto;
}
```
