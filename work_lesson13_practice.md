### Практика #1

#### **Создание html-разметки документа**:

1. **Внутри `<body>` добавьте тег `<header>`**.

2. **Внутри `<header>` создайте тег `<div>` с классом `container`**.

3. **Внутри `<div class="container">`**:

   - Добавьте тег `<div>` с классом `site-title` и текстом `"МойСайт"`.
   - Добавьте тег `<nav>`:
     - Внутри `<nav>` создайте неупорядоченный список `<ul>`.
     - Внутри списка `<ul>` добавьте четыре элемента списка `<li>`, каждый из которых содержит ссылку `<a>`:
       - Первую ссылку с текстом "Главная".
       - Вторую ссылку с текстом "О нас".
       - Третью ссылку с текстом "Услуги".
       - Четвертую ссылку с текстом "Контакты".

4. **После `<header>` добавьте тег `<main>`**.

5. **Внутри `<main>` создайте тег `<div>` с классом `container`**.

6. **Внутри `<div class="container">`**:

   - Добавьте заголовок `<h1>` с текстом `"Введите информацию"`.
   - Добавьте тег `<div>` с классом `input-block`.

7. **Внутри `<div class="input-block">` добавьте несколько вложенных блоков `<div>` с классом `input-row` для группировки инпутов**:

   - В первом блоке `<div class="input-row">` добавьте два поля ввода:
     - Поле с атрибутом `type="text"`, атрибутом `placeholder="Имя"`, и `id="first-name"`.
     - Поле с атрибутом `type="text"`, атрибутом `placeholder="Фамилия"`, и `id="last-name"`.
   - Во втором блоке `<div class="input-row">` добавьте одно поле:
     - Поле с атрибутом `type="text"`, атрибутом `placeholder="ИНН"`, и `id="inn"`.
   - В третьем блоке `<div class="input-row">` добавьте два поля:
     - Поле с атрибутом `type="text"`, атрибутом `placeholder="Серия паспорта"`, и `id="passport-series"`.
     - Поле с атрибутом `type="text"`, атрибутом `placeholder="Номер паспорта"`, и `id="passport-number"`.
   - В четвертом блоке `<div class="input-row">` добавьте одно поле:
     - Поле с атрибутом `type="text"`, атрибутом `placeholder="Адрес проживания"`, и `id="address"`.
   - В пятом блоке `<div class="input-row">` добавьте одно поле:
     - Поле с атрибутом `type="tel"`, атрибутом `placeholder="Номер телефона"`, и `id="phone-number"`.
   - В последнем блоке `<div class="submit-row">` добавьте кнопку:
     - Кнопку с атрибутом `type="button"` и текстом `"Отправить"`.

8. **После `<main>` добавьте тег `<footer>`**.

9. **Внутри `<footer>` создайте тег `<div>` с классом `container`**.

10. **Внутри `<div class="container">`**:

    - Добавьте заголовок `<h2>` с классом `footer-title` и текстом `"МойСайт"`.
    - Добавьте блок `<div>` с классом `footer-contacts`:
      - Внутри него добавьте неупорядоченный список `<ul>`.
      - Внутри списка `<ul>` добавьте три элемента списка `<li>`, каждый из которых содержит ссылку `<a>`:
        - Первую ссылку с текстом `"telegram"`.
        - Вторую ссылку с текстом `"whatsapp"`.
        - Третью ссылку с текстом `"instagram"`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Практика стилизации input</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <div class="container">
        <div class="site-title">МойСайт</div>
        <nav>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Услуги</a></li>
            <li><a href="#">Контакты</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <div class="container">
        <h1>Введите информацию</h1>
        <div class="input-block">
          <div class="input-row">
            <input type="text" placeholder="Имя" id="first-name" />
            <input type="text" placeholder="Фамилия" id="last-name" />
          </div>
          <div class="input-row">
            <input type="text" placeholder="ИНН" id="inn" />
          </div>
          <div class="input-row">
            <input
              type="text"
              placeholder="Серия паспорта"
              id="passport-series"
            />
            <input
              type="text"
              placeholder="Номер паспорта"
              id="passport-number"
            />
          </div>
          <div class="input-row">
            <input type="text" placeholder="Адрес проживания" id="address" />
          </div>
          <div class="input-row">
            <input type="tel" placeholder="Номер телефона" id="phone-number" />
          </div>
          <div class="submit-row">
            <button type="button">Отправить</button>
          </div>
        </div>
      </div>
    </main>

    <footer>
      <div class="container">
        <h2 class="footer-title">МойСайт</h2>
        <div class="footer-contacts">
          <ul>
            <li><a href="#">telegram</a></li>
            <li><a href="#">whatsapp</a></li>
            <li><a href="#">instagram</a></li>
          </ul>
        </div>
      </div>
    </footer>
  </body>
</html>
```

#### **Создание стилизации для разметки**:

1. **Для всех элементов (`*`) установите следующие свойства**:

   - `margin: 0` для удаления внешних отступов.
   - `padding: 0` для удаления внутренних отступов.
   - `box-sizing: border-box` для учета границ и отступов в общей ширине и высоте элементов.

2. **Для тега `body` задайте**:

   - `font-family: Arial, sans-serif` для использования шрифта Arial с запасным вариантом.
   - `background-color: #f9f5f0` для светлого бежевого фона.
   - `color: #4a3628` для текста коричневого оттенка.
   - `display: flex` для включения флекс-контейнера.
   - `flex-direction: column` для расположения элементов в колонку.
   - `min-height: 100vh` для минимальной высоты равной высоте окна просмотра.

3. **Для элементов с классом `container` примените**:

   - `max-width: 1200px` для ограничения ширины элемента.
   - `margin: 0 auto` для горизонтального центрирования.
   - `padding: 0 1rem` для внутренних отступов слева и справа.

4. **Для элемента `<header>` установите**:

   - `background-color: #5e4632` для коричневого фона.
   - `color: #fff` для белого текста.
   - `padding: 1rem 0` для вертикальных внутренних отступов.
   - `position: sticky` для закрепления элемента в верхней части экрана.
   - `top: 0` для фиксации у верхней границы.
   - `z-index: 1000` для задания приоритета отображения.

5. **Для дочернего элемента `header .container` добавьте**:

   - `display: flex` для включения флекс-контейнера.
   - `justify-content: space-around` для равномерного распределения элементов.
   - `align-items: center` для вертикального выравнивания по центру.

6. **Для элемента `header .site-title`**:

   - `font-size: 1.5rem` для увеличенного размера текста.
   - `font-weight: bold` для жирного текста.
   - `text-transform: uppercase` для преобразования текста в верхний регистр.

7. **Для списка `header nav ul` задайте**:

   - `list-style: none` для удаления маркеров списка.
   - `display: flex` для отображения элементов в ряд.
   - `gap: 1rem` для расстояния между элементами.

8. **Для ссылок `header nav ul li a`**:

   - `text-decoration: none` для удаления подчеркивания.
   - `color: #fff` для белого текста.
   - `font-size: 1rem` для стандартного размера текста.
   - `text-decoration: underline` при наведении на ссылку (hover).

9. **Для тега `<main>` примените**:

   - `flex: 1 `для заполнения доступного пространства.
   - `padding: 2rem 0` для вертикальных внутренних отступов.

10. **Для заголовка `main h1`**:

    - `text-align: center` для центрирования текста.
    - `margin-bottom: 2rem` для отступа снизу.
    - `font-size: 1.8rem` для увеличенного размера шрифта.
    - `color: #4b3223` для темно-коричневого текста.

11. **Для блока `main .input-block`**:

    - `display: flex` для включения флекс-контейнера.
    - `flex-direction: column` для вертикального расположения.
    - `gap: 1.5rem` для расстояния между элементами.

12. **Для строки `main .input-block .input-row`**:

    - `display: flex` для флекс-контейнера.
    - `gap: 1rem` для горизонтального расстояния.
    - `flex-wrap: wrap` для переноса элементов на новую строку при необходимости.

13. **Для полей ввода `main .input-block .input-row input`**:

    - `flex: 1` для растяжения элемента.
    - `padding: 0.8rem` для внутренних отступов.
    - `border: 1px solid #ccc` для рамки светло-серого цвета.
    - `border-radius: 5px` для закругленных углов.
    - `font-size: 1rem` для размера текста.
    - При фокусе (`focus`):
      - `border-color: #5e4632` для изменения цвета рамки.
      - `outline: none` для удаления стандартного выделения.
      - `box-shadow: 0 0 5px rgba(94, 70, 50, 0.5)` для эффекта свечения.

14. **Для кнопки в `main .submit-row`**:

    - `display: flex` для флекс-контейнера.
    - `justify-content: flex-end` для выравнивания элементов вправо.
    - `padding: 0.8rem 1.5rem` для внутренних отступов.
    - `background-color: #5e4632` для коричневого фона.
    - `color: #fff` для белого текста.
    - `border: none` для удаления рамки.
    - `border-radius: 5px` для закругления углов.
    - `font-size: 1rem` для текста.
    - `cursor: pointer` для указателя курсора.
    - При наведении (`hover`):
      - `background-color: #4a3628` для изменения цвета фона.

15. **Для элемента `<footer>` задайте**:

    - `background-color: #5e4632` для коричневого фона.
    - `color: #fff` для белого текста.
    - `padding: 1rem 0` для вертикальных внутренних отступов.
    - `text-align: center` для выравнивания текста.
    - `font-size: 0.9rem` для уменьшенного текста.
    - `margin-top: auto` для автоотступа сверху.

16. **Для footer `.container`**:

    - `display: flex` для включения флекс-контейнера.
    - `flex-direction: column` для вертикального расположения.
    - `gap: 1rem` для расстояния между элементами.

17. **Для заголовка `footer .footer-title`**:

    - `font-weight: bold` для жирного текста.
    - `text-transform: uppercase` для верхнего регистра.

18. **Для списка `footer .footer-contacts ul`**:

    - `display: flex` для отображения в ряд.
    - `justify-content: center` для центрирования элементов.
    - `gap: 1rem` для расстояния между элементами.
    - `list-style: none` для удаления маркеров списка.
    - `text-transform: lowercase` для преобразования текста в нижний регистр.

19. **Для ссылок `footer .footer-contacts ul li a`**:

    - `text-decoration: none` для удаления подчеркивания.
    - `line-height: 1.6` для увеличенного межстрочного интервала.
    - При наведении (`hover`):
      - `text-decoration: underline` для добавления подчеркивания.

20. **Адаптивность: Для экрана шириной до `760px` (`@media (max-width: 760px)`)**:
    - Для `header .container`:
      - `flex-direction: column` для вертикального расположения.
      - `gap: 1rem` для расстояния между элементами.
    - Для `main .input-block .input-row`:
      - `flex-direction: column` для вертикального расположения.
      - `gap: 1rem` для расстояния между полями.

```css
/* Общие стили */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f9f5f0;
  color: #4a3628;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

/* Контейнер */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

/* Стили для header */
header {
  background-color: #5e4632;
  color: #fff;
  padding: 1rem 0;
  position: sticky;
  top: 0;
  z-index: 1000;
}

header .container {
  display: flex;
  justify-content: space-around;
  align-items: center;
}

header .site-title {
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
}

header nav ul {
  list-style: none;
  display: flex;
  gap: 1rem;
}

header nav ul li a {
  text-decoration: none;
  color: #fff;
  font-size: 1rem;
}

header nav ul li a:hover {
  text-decoration: underline;
}

/* Стили для main */
main {
  flex: 1;
  padding: 2rem 0;
}

main h1 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 1.8rem;
  color: #4b3223;
}

main .input-block {
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
}

main .input-block .input-row {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

main .input-block .input-row input {
  flex: 1;
  padding: 0.8rem;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
}

main .input-block .input-row input:focus {
  border-color: #5e4632;
  outline: none;
  box-shadow: 0 0 5px rgba(94, 70, 50, 0.5);
}

main .submit-row {
  display: flex;
  justify-content: flex-end;
}

main .submit-row button {
  padding: 0.8rem 1.5rem;
  background-color: #5e4632;
  color: #fff;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
}

main .submit-row button:hover {
  background-color: #4a3628;
}

/* Стили для footer */
footer {
  background-color: #5e4632;
  color: #fff;
  padding: 1rem 0;
  text-align: center;
  font-size: 0.9rem;
  margin-top: auto;
}

footer .container {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

footer .footer-title {
  font-weight: bold;
  text-transform: uppercase;
}

footer .footer-contacts ul {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  text-transform: lowercase;
  list-style: none;
}

footer .footer-contacts ul li a {
  text-decoration: none;
  line-height: 1.6;
  color: #fff;
}

footer .footer-contacts ul li a:hover {
  text-decoration: underline;
}

/* Адаптивность */
@media (max-width: 760px) {
  header .container {
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }

  main .input-block .input-row {
    flex-direction: column;
    gap: 1rem;
  }
}
```
