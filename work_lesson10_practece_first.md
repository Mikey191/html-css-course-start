### Практическая работа 2

```
Создание структуры документа:
Начните с создания основного HTML-документа, добавив тег <body>.
Добавление заголовка (Header):
Внутри тега <body> создайте тег <header> с классом header.
Внутри <header> добавьте <div> с классом header-logo.
Внутри этого <div> вставьте тег <img> с атрибутами src (указывающим на изображение логотипа) и alt (с описанием логотипа).
Добавьте еще один <div> с классом header-title.
Внутри этого <div> вставьте заголовок <h1> с текстом "Film Collection".
Создайте тег <nav> с классом navigation.
Внутри <nav> добавьте ненумерованный список <ul>.
Внутри <ul> создайте несколько элементов списка <li>, каждый из которых содержит ссылку <a> с текстом "Фильмы", "Сериалы" и "Аниме".
Добавление блока фильтров (Filter Block):
Создайте секцию <section> с классом filters.
Внутри этой секции добавьте заголовок <h2> с текстом "Фильтрация по жанрам".
Создайте ненумерованный список <ul> с классом filter-list.
Внутри этого списка добавьте несколько элементов списка <li>, каждый из которых содержит ссылку <a> с текстами "Все", "Боевик", "Комедия", "Драма" и "Фантастика".
Добавление блока списка фильмов (Movies List Block):
Создайте еще одну секцию <section> с классом movies-list.
Внутри этой секции добавьте несколько <div> с классом movie-card для каждой карточки фильма.
Внутри каждого <div class="movie-card"> создайте еще один <div> с классом movie-image.
Внутри этого <div> вставьте тег <img> с атрибутами src (указывающим на изображение фильма) и alt (с описанием фильма).
После этого добавьте заголовок <h3> с классом movie-title и текстом, соответствующим названию фильма.
Затем добавьте параграф <p> с классом movie-description и текстом, соответствующим краткому описанию фильма.
Повторите этот процесс для всех шести фильмов, изменяя текст и изображения соответственно.
Добавление блока пагинации (Pagination):
Создайте <div> с классом pagination.
Внутри этого <div> добавьте ненумерованный список <ul>.
Внутри <ul> создайте несколько элементов списка <li>, каждый из которых содержит ссылку <a> с текстами "1", "2", "3" и "10". Для первого элемента добавьте класс active.
Добавьте элемент <li> с тегом <span> и текстом "...".
Добавление подвала (Footer):
Создайте тег <footer> с классом footer.
Внутри <footer> добавьте <div> с классом footer-logo.
Внутри этого <div> вставьте тег <img> с атрибутами src (указывающим на изображение логотипа) и alt (с описанием логотипа).
Добавьте еще один <div> с классом footer-title.
Внутри этого <div> вставьте заголовок <h3> с текстом "Film Collection".
Создайте еще один <div> с классом footer-contacts.
Внутри этого <div> добавьте параграф <p> с текстом "Контакты для связи:".
Создайте ненумерованный список <ul>, в который добавьте элементы списка <li> с контактной информацией, включая Email и телефон.
```

или

```
Создайте основной элемент <body>, который будет содержать все блоки разметки сайта.

Внутри <body>, создайте <header> с классом header. В нём будут размещены логотип, название сайта и навигация.

Внутри <header>, добавьте контейнер <div> с классом header-logo, в который поместите изображение <img> для логотипа с атрибутами src="logo.jpg" и alt="Site Logo".

Рядом с блоком логотипа добавьте ещё один контейнер <div> с классом header-title. Внутри него создайте заголовок <h1> с текстом Film Collection.

Также в <header> добавьте элемент <nav> с классом navigation, где будет размещено меню навигации.

Внутри <nav> создайте список <ul>, а в нём — элементы <li> для каждого пункта меню. Внутри каждого <li> добавьте ссылки <a> с текстами «Фильмы», «Сериалы» и «Аниме».

Под <header>, создайте блок <section> с классом filters для фильтрации контента по жанрам.

Внутри filters добавьте заголовок <h2> с текстом «Фильтрация по жанрам».

Создайте список фильтров <ul> с классом filter-list. В этом списке добавьте несколько <li> с <a> внутри, которые будут представлять собой ссылки на разные жанры, такие как «Все», «Боевик», «Комедия», «Драма», и «Фантастика».

Под блоком фильтров добавьте ещё один блок <section> с классом movies-list для отображения списка фильмов.

Внутри movies-list добавьте несколько одинаковых карточек фильмов, используя <div> с классом movie-card для каждой карточки.

Внутри каждой movie-card добавьте контейнер <div> с классом movie-image. В этот контейнер поместите изображение <img> с атрибутами src для пути к файлу изображения, например, movies/lesson10/img1.webp, и alt с названием фильма.

После контейнера для изображения добавьте заголовок <h3> с классом movie-title и текстом, представляющим название фильма, например, «Название фильма 1».

Под названием фильма добавьте абзац <p> с классом movie-description и кратким описанием фильма.

Повторите шаги 11-14 для создания дополнительных карточек фильмов с разными изображениями, названиями и описаниями.

Под блоком movies-list создайте блок <div> с классом pagination для навигации по страницам.

Внутри pagination создайте список <ul>, а в нём добавьте элементы <li> для каждого номера страницы и многоточия, чтобы указать, что есть ещё страницы.

Внутри каждого <li> добавьте ссылку <a> для номеров страниц или элемент <span> для многоточия. Для активной страницы добавьте ссылке класс active.

Под блоком пагинации создайте <footer> с классом footer.

Внутри <footer> создайте блок <div> с классом footer-logo, где разместите изображение <img> с логотипом, используя атрибуты src="logo.jpg" и alt="Site Logo".

Рядом с блоком логотипа создайте контейнер <div> с классом footer-title, где поместите заголовок <h3> с текстом Film Collection.

Добавьте блок <div> с классом footer-contacts, чтобы разместить контактную информацию.

Внутри footer-contacts добавьте абзац <p> с текстом «Контакты для связи:».

Под абзацем создайте список <ul> для контактных данных, а внутри добавьте элементы <li> с текстом, например, «Email: info@filmcollection.com» и «Телефон: +123 456 7890».
```

html-разметка

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Film Collection</title>
    <link rel="stylesheet" href="lesson10secondpractice.css" />
  </head>
  <body>
    <!-- Header -->
    <header class="header">
      <div class="header-logo">
        <img src="logo.jpg" alt="Site Logo" />
      </div>
      <div class="header-title">
        <h1>Film Collection</h1>
      </div>
      <nav class="navigation">
        <ul>
          <li><a href="#">Фильмы</a></li>
          <li><a href="#">Сериалы</a></li>
          <li><a href="#">Аниме</a></li>
        </ul>
      </nav>
    </header>

    <!-- Filter Block -->
    <section class="filters">
      <h2>Фильтрация по жанрам</h2>
      <ul class="filter-list">
        <li><a href="#">Все</a></li>
        <li><a href="#">Боевик</a></li>
        <li><a href="#">Комедия</a></li>
        <li><a href="#">Драма</a></li>
        <li><a href="#">Фантастика</a></li>
      </ul>
    </section>

    <!-- Movies List Block -->
    <section class="movies-list">
      <div class="movie-card">
        <div class="movie-image">
          <img src="movies/lesson10/img1.webp" alt="Название фильма 1" />
        </div>
        <h3 class="movie-title">Название фильма 1</h3>
        <p class="movie-description">Краткое описание фильма 1.</p>
      </div>
      <div class="movie-card">
        <div class="movie-image">
          <img src="movies/lesson10/img2.webp" alt="Название фильма 2" />
        </div>
        <h3 class="movie-title">Название фильма 2</h3>
        <p class="movie-description">Краткое описание фильма 2.</p>
      </div>
      <div class="movie-card">
        <div class="movie-image">
          <img src="movies/lesson10/img3.webp" alt="Название фильма 3" />
        </div>
        <h3 class="movie-title">Название фильма 3</h3>
        <p class="movie-description">Краткое описание фильма 3.</p>
      </div>
      <div class="movie-card">
        <div class="movie-image">
          <img src="movies/lesson10/img4.webp" alt="Название фильма 4" />
        </div>
        <h3 class="movie-title">Название фильма 4</h3>
        <p class="movie-description">Краткое описание фильма 4.</p>
      </div>
      <div class="movie-card">
        <div class="movie-image">
          <img src="movies/lesson10/img5.jpg" alt="Название фильма 5" />
        </div>
        <h3 class="movie-title">Название фильма 5</h3>
        <p class="movie-description">Краткое описание фильма 5.</p>
      </div>
      <div class="movie-card">
        <div class="movie-image">
          <img src="movies/lesson10/img6.webp" alt="Название фильма 6" />
        </div>
        <h3 class="movie-title">Название фильма 6</h3>
        <p class="movie-description">Краткое описание фильма 6.</p>
      </div>
    </section>

    <!-- Pagination -->
    <div class="pagination">
      <ul>
        <li><a href="#">1</a></li>
        <li><a href="#">2</a></li>
        <li><a href="#">3</a></li>
        <li><span>...</span></li>
        <li><a href="#">10</a></li>
      </ul>
    </div>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-logo">
        <img src="logo.jpg" alt="Site Logo" />
      </div>
      <div class="footer-title">
        <h3>Film Collection</h3>
      </div>
      <div class="footer-contacts">
        <p>Контакты для связи:</p>
        <ul>
          <li>Email: info@filmcollection.com</li>
          <li>Телефон: +123 456 7890</li>
        </ul>
      </div>
    </footer>
  </body>
</html>
```

```css
/* Добавление шрифтов Oswald и Roboto с сайта Google Fonts*/
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&display=swap");

/* Основные стили */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Oswald", sans-serif;
  background-color: #f2f2f2;
  color: #333;
}

a {
  text-decoration: none;
  color: inherit;
}

/* Убираем точки у всех списков */
ul {
  list-style-type: none;
}

/* Стили для хедера */
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  padding: 15px 30px;
  background-color: #333;
  color: #f2f2f2;
  z-index: 100;
}

.header-logo img {
  height: 40px;
}

.header-title h1 {
  font-family: "Roboto";
  font-weight: bold;
  font-size: 24px;
  text-transform: uppercase;
}

.navigation ul {
  display: flex;
  gap: 20px;
}

.navigation a {
  color: #f2f2f2;
  font-weight: bold;
  padding: 5px;
}

.navigation a:hover {
  color: #ffcc00;
  text-decoration: underline;
}

.navigation li:first-of-type a {
  color: #ffcc00;
  text-decoration: underline;
}

/* Стили для фильтров */
.filters {
  position: sticky;
  top: 30px;
  background-color: #444;
  padding: 10px 30px;
  color: #f2f2f2;
}

.filters h2 {
  margin-bottom: 10px;
}

.filter-list {
  display: flex;
  gap: 15px;
}

.filter-list a {
  color: #f2f2f2;
  padding: 5px;
}

.filter-list a:hover {
  color: #ffcc00;
}

.filter-list li:first-child a {
  color: #ffcc00;
}

/* Стили для блока с фильмами */
.movies-list {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  padding: 20px 30px;
  background-color: #e6e6e6;
  max-width: 80%;
  margin: 20px auto;
}

.movie-card {
  flex: 1 1 30%;
  background-color: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 350px;
}

.movie-image {
  width: 90%;
  height: 350px;
  overflow: hidden;
}

.movie-image img {
  width: 100%;
  height: auto;
  object-fit: cover;
}

.movie-title {
  text-align: center;
  font-size: 18px;
  margin: 10px 0;
  text-transform: uppercase;
}

.movie-description {
  text-align: center;
  padding: 20px;
  font-size: 14px;
  color: #666;
}

/* Стили для пагинации */
.pagination {
  display: flex;
  justify-content: center;
  padding: 20px 0;
}

.pagination ul {
  display: flex;
  gap: 10px;
}

.pagination li a,
.pagination li span {
  padding: 10px 15px;
  border-radius: 5px;
}

.pagination li a:hover {
  background-color: #e0e0e0;
}

.pagination li:first-child a {
  background-color: #ffcc00;
  color: white;
}

/* Стили для футера */
.footer {
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 15px 30px;
  background-color: #333;
  color: #f2f2f2;
}

.footer-logo img {
  height: 40px;
}

.footer-title h3 {
  font-family: "Roboto";
  font-weight: bold;
  font-size: 18px;
  padding: 0 100px;
}

.footer-contacts p,
.footer-contacts ul {
  font-size: 14px;
}

.footer-contacts ul {
  list-style: none;
  padding-top: 5px;
}
```
