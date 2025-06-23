### Практическая работа 2

#### Создание структуры документа:

**Начните с создания основного HTML-документа, добавив тег `<body>`**.
1. Добавление заголовка (`Header`):
  - Внутри тега `<body>` создайте тег `<header>` с классом `header`.
  - Внутри `<header>` добавьте `<div>` с классом header-logo.
  - Внутри этого `<div>` вставьте тег `<img>` с атрибутами src (указывающим на изображение логотипа) и alt (с описанием логотипа).
  - Добавьте еще один `<div>` с классом `header-title`.
  - Внутри этого `<div>` вставьте заголовок `<h1>` с текстом "Film Collection".
  - Создайте тег `<nav>` с классом navigation.
  - Внутри `<nav>` добавьте ненумерованный список `<ul>`.
  - Внутри `<ul>` создайте несколько элементов списка `<li>`, каждый из которых содержит ссылку `<a>` с текстом "Фильмы", "Сериалы" и "Аниме".
2. Добавление блока фильтров (`Filter Block`):
  - Создайте секцию `<section>` с классом filters.
  - Внутри этой секции добавьте заголовок `<h2>` с текстом "Фильтрация по жанрам".
  - Создайте ненумерованный список `<ul>` с классом filter-list.
  - Внутри этого списка добавьте несколько элементов списка `<li>`, каждый из которых содержит ссылку `<a>` с текстами "Все", "Боевик", "Комедия", "Драма" и "Фантастика".
3. Добавление блока списка фильмов (`Movies List Block`):
  - Создайте еще одну секцию `<section>` с классом movies-list.
  - Внутри этой секции добавьте несколько `<div>` с классом movie-card для каждой карточки фильма.
  - Внутри каждого `<div class="movie-card">` создайте еще один `<div>` с классом movie-image.
  - Внутри этого `<div>` вставьте тег `<img>` с атрибутами src (указывающим на изображение фильма) и alt (с описанием фильма).
  - После этого добавьте заголовок `<h3>` с классом movie-title и текстом, соответствующим названию фильма.
  - Затем добавьте параграф `<p>` с классом movie-description и текстом, соответствующим краткому описанию фильма.
  - Повторите этот процесс для всех шести фильмов, изменяя текст и изображения соответственно.
4. Добавление блока пагинации (`Pagination`):
  - Создайте `<div>` с классом pagination.
  - Внутри этого `<div>` добавьте ненумерованный список `<ul>`.
  - Внутри `<ul>` создайте несколько элементов списка `<li>`, каждый из которых содержит ссылку `<a>` с текстами "1", "2", "3" и "10". Для первого элемента добавьте класс active.
  - Добавьте элемент `<li>` с тегом `<span>` и текстом "...".
5. Добавление подвала (`Footer`):
  - Создайте тег `<footer>` с классом footer.
  - Внутри `<footer>` добавьте `<div>` с классом footer-logo.
  - Внутри этого `<div>` вставьте тег `<img>` с атрибутами src (указывающим на изображение логотипа) и alt (с описанием логотипа).
  - Добавьте еще один `<div>` с классом footer-title.
  - Внутри этого `<div>` вставьте заголовок `<h3>` с текстом "Film Collection".
  - Создайте еще один `<div>` с классом footer-contacts.
  - Внутри этого `<div>` добавьте параграф `<p>` с текстом "Контакты для связи:".
  - Создайте ненумерованный список `<ul>`, в который добавьте элементы списка `<li>` с контактной информацией, включая Email и телефон.

#### Стилизация:

1. Подключение шрифтов
Импортируйте шрифты "Oswald" и "Roboto" из Google Fonts.

2. Общие стили
- Для всех элементов (`*`):
  - Сбросьте отступы (`margin`) и внутренние отступы (`padding`).
  - Используйте модель `box-sizing: border-box` для управления размерами блоков.
- Для `body`:
  - Шрифт: `Oswald, sans-serif`.
  - Фон: `#f2f2f2`.
  - Цвет текста: `#333`.

- Для ссылок (`a`):
  - Уберите подчеркивание (`text-decoration: none`).
  - Цвет наследуется от родителя.
- Для всех списков (`ul`):
  - Уберите маркеры (`list-style-type: none`).

3. Стили для header
- Общие стили:
  - Используйте `flex` для расположения элементов: выравнивание по горизонтали (`justify-content: space-between`) и вертикали (`align-items: center`).
  - Сделайте хедер "липким":
    - Позиция: `sticky`.
    - Верхний отступ: `top: 0`.
    - Фон: `#333`.
    - Цвет текста: `#f2f2f2`.
    - Внутренние отступы: `15px 30px`.
  - Добавьте слой приоритетности: `z-index: 100`.
- Логотип (`.header-logo img`):
  - Высота: `40px`.
- Заголовок (`.header-title h1`):
  - Шрифт: `Roboto`.
  - Жирный текст (`font-weight: bold`).
  - Размер шрифта: `24px`.
  - Преобразование текста в заглавные буквы (`text-transform: uppercase`).
- Меню навигации (`.navigation ul`):
  - Используйте `flex` для выравнивания элементов.
  - Расстояние между элементами: `gap: 20px`.
- Ссылки в навигации (`.navigation a`):
  - Цвет текста: `#f2f2f2`.
  - Жирное начертание.
  - Внутренние отступы: `5px`.
  - При наведении (`:hover`):
    - Цвет текста: `#ffcc00`.
    - Подчёркивание (`text-decoration: underline`).
- Первая ссылка (`li:first-of-type a`):
  - Цвет текста: `#ffcc00`.
  - Подчёркивание (`text-decoration: underline`).

4. Стили для блока фильтров (`.filters`)
- Общие стили:
  - Позиция: `sticky`.
  - Расположение: `top: 30px`.
  - Фон: `#444`.
  - Цвет текста: `#f2f2f2`.
  - Внутренние отступы: `10px 30px`.

- Заголовок фильтров (`h2`):
  - Нижний отступ: `margin-bottom: 10px`.

- Список фильтров (`.filter-list`):
  - Используйте `flex` для выравнивания.
  - Расстояние между элементами: `gap: 15px`.

- Ссылки в фильтрах (`.filter-list a`):
  - Цвет текста: `#f2f2f2`.
  - Внутренние отступы: `5px`.
  - При наведении (`:hover`):
  - Цвет текста: `#ffcc00`.

- Первая ссылка в списке (`li:first-child a`):
  - Цвет текста: `#ffcc00`.

5. Стили для списка фильмов (`.movies-list`)
- Общие стили:
  - Используйте `flex`:
  - Перенос строк: `flex-wrap: wrap`.
  - Расстояние между блоками: `gap: 20px`.
  - Внутренние отступы: `20px 30px`.
  - Фон: `#e6e6e6`.
  - Максимальная ширина: `80%`.
  - Центрируйте блок на странице: `margin: 20px auto`.
- Карточка фильма (`.movie-card`):
  - Гибкая ширина: `flex: 1 1 30%`.
  - Фон: `#fff`.
  - Внутренние отступы: `10px`.
  - Скругленные углы: `border-radius: 5px`.
  - Тень: `0 2px 5px rgba(0, 0, 0, 0.1)`.
  - Выравнивание по центру:
    - Используйте `flex`.
    - Направление: `column`.
  - Минимальная высота: `350px`.
- Изображение (`.movie-image`):
  - Ширина: `90%`.
  - Высота: `350px`.
  - Убедитесь, что изображения не выходят за границы (`overflow: hidden`).
- Вложенные изображения (`.movie-image img`):
  - Ширина: `100%`.
  - Автоматическая высота (`height: auto`).
  - Пропорциональное обрезание (`object-fit: cover`).
- Заголовок фильма (`.movie-title`):
  - Выравнивание текста по центру.
  - Размер шрифта: `18px`.
  - Верхний и нижний отступы: `margin: 10px 0`.
  - Преобразование текста в заглавные буквы (`text-transform: uppercase`).
- Описание фильма (`.movie-description`):
  - Выравнивание текста по центру.
  - Внутренние отступы: `20px`.
  - Размер шрифта: `14px`.
  - Цвет текста: `#666`.

6. Стили для пагинации (`.pagination`)
- Общие стили:
  - Используйте `flex`:
    - Выравнивание по центру (`justify-content: center`).
    - Внутренние отступы: `padding: 20px 0`.
- Список (`.pagination ul`):
  - Используйте `flex`.
  - Расстояние между элементами: `gap: 10px`.
- Ссылки (a) и текст (span):
  - Внутренние отступы: `10px 15px`.
  - Скруглённые углы: `border-radius: 5px`.
- Наведение на ссылки (`a:hover`):
  - Фон: `#e0e0e0`.
- Первая ссылка (`li:first-child a`):
  - Фон: `#ffcc00`.
  - Цвет текста: `белый`.

7. Стили для футера (`.footer`)
- Общие стили:
  - Используйте `flex`:
    - Выравнивание элементов (`justify-content: space-around`).
    - Вертикальное выравнивание (`align-items: center`).
  - Внутренние отступы: `15px 30px`.
  - Фон: `#333`.
  - Цвет текста: `#f2f2f2`.
- Логотип (`.footer-logo img`):
  - Высота: `40px`.
- Заголовок (`.footer-title h3`):
  - Шрифт: `Roboto`.
  - Жирное начертание.
  - Размер шрифта: `18px`.
  - Внутренние отступы: `padding: 0 100px`.
- Контактные данные (`.footer-contacts`):
  - Текст (`p, ul`):
    - Размер шрифта: `14px`.
  - Списки (`ul`):
    - Уберите маркеры (`list-style: none`).
    - Отступ сверху: `padding-top: 5px`.

#### **html-разметка**:
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
#### **Стилизация**:
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
