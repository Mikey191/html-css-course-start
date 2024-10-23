```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Практическое задание по CSS</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <main id="main-container">
      <header>
        <h1>Главный заголовок</h1>
      </header>

      <section class="intro-section">
        <p class="intro">
          Это вводный параграф. Здесь будет описан основной контент страницы.
        </p>
      </section>

      <section class="content">
        <h2>Заголовок раздела</h2>
        <p>Это обычный текст внутри раздела.</p>
        <p class="highlight">Это текст с классом "highlight".</p>
        <span>Это обычный спан внутри раздела.</span>
      </section>

      <aside class="sidebar">
        <h2>Заголовок сайдбара</h2>
        <p>
          Текст внутри сайдбара. Этот текст будет стилизован отдельно от
          основного контента.
        </p>
        <p>Второй параграф в сайдбаре.</p>
      </aside>

      <footer>
        <p>Контактная информация</p>
      </footer>
    </main>
  </body>
</html>
```

```css
/* Задание 1 */
h1,
h2 {
  color: darkblue;
}
/* Задание 2 */
.content > p {
  color: darkgreen;
}
/* Задание 3 */
.content p:first-of-type {
  background-color: #f0f0f0;
  font-weight: bold;
}
/* Задание 4 */
.content h2 + p {
  text-decoration: underline;
}
/* Задание 5 */
.sidebar p:nth-of-type(2) {
  color: #b22222;
}
/* Задание 6 */
.content p:hover {
  color: blue;
}
/* Задание 7 */
.highlight {
  color: orange;
}
.content p:not(.highlight) {
  color: gray;
}
/* Задание 8 */
h2::before {
  content: "— ";
  color: darkred;
  font-size: 20px;
}
/* Задание 9 */
.highlight::after {
  content: " End";
}
/* Задание 10 */
.sidebar p {
  font-family: inherit;
}
/* Задание 11 */
.sidebar p:nth-of-type(2) {
  color: initial;
}
/* Задание 12 */
.intro-section p:first-of-type {
  all: unset;
}
/* Задание 13 */
.content span {
  color: purple;
}
.sidebar span {
  color: black;
}
/* Задание 14 */
#main-container {
  background-color: lightgray;
}
#main-container * {
  background-color: inherit;
}
/* Задание 15 */
h1 {
  color: darkgreen !important;
}
```
