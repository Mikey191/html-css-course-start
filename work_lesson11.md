```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Список фильмов</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="wrapper">
      <div class="container">
        <header class="header">
          <h1>Список фильмов</h1>
        </header>

        <aside class="sidebar">
          <h2>Сортировка фильмов</h2>
          <ul>
            <li><a href="#">Детективы</a></li>
            <li><a href="#">Комедии</a></li>
            <li><a href="#">Драмы</a></li>
          </ul>
        </aside>

        <main class="main">
          <div class="movie-card">
            <div class="movie-image-container">
              <img src="movies/titanic.webp" alt="Фильм 1" />
            </div>
            <h3>Фильм 1</h3>
            <p>
              Описание фильма 1. Краткое содержание и основные моменты сюжета.
            </p>
          </div>
          <div class="movie-card">
            <div class="movie-image-container">
              <img src="movies/ouathollywood.webp" alt="Фильм 2" />
            </div>
            <h3>Фильм 2</h3>
            <p>
              Описание фильма 2. Краткое содержание и основные моменты сюжета.
            </p>
          </div>
          <div class="movie-card">
            <div class="movie-image-container">
              <img src="movies/django.jpg" alt="Фильм 3" />
            </div>
            <h3>Фильм 3</h3>
            <p>
              Описание фильма 3. Краткое содержание и основные моменты сюжета.
            </p>
          </div>

          <div class="movie-card">
            <div class="movie-image-container">
              <img src="movies/fightclub.webp" alt="Фильм 4" />
            </div>
            <h3>Фильм 4</h3>
            <p>
              Описание фильма 4. Краткое содержание и основные моменты сюжета.
            </p>
          </div>
          <div class="movie-card">
            <div class="movie-image-container">
              <img src="movies/godfather.webp" alt="Фильм 5" />
            </div>
            <h3>Фильм 5</h3>
            <p>
              Описание фильма 5. Краткое содержание и основные моменты сюжета.
            </p>
          </div>
          <div class="movie-card">
            <div class="movie-image-container">
              <img src="movies/pulpfiction.jpg" alt="Фильм 6" />
            </div>
            <h3>Фильм 6</h3>
            <p>
              Описание фильма 6. Краткое содержание и основные моменты сюжета.
            </p>
          </div>
        </main>

        <footer class="footer">
          <p>Связаться с нами:</p>
          <ul>
            <li><a href="#">Telegram</a></li>
            <li><a href="#">WhatsApp</a></li>
            <li><a href="#">ВКонтакте</a></li>
          </ul>
        </footer>
      </div>
    </div>
  </body>
</html>
```

```css
/* Общие стили */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: #f9f9f9;
}

.wrapper {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

.container {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "footer footer";
  grid-template-columns: 1fr 3fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;
}

/* Header */
.header {
  grid-area: header;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
}

.header h1 {
  font-size: 2em;
}

/* Sidebar */
.sidebar {
  grid-area: sidebar;
  background-color: #eaeaea;
  padding: 20px;
}

.sidebar h2 {
  font-size: 1.5em;
  margin-bottom: 10px;
}

.sidebar ul {
  list-style: none;
}

.sidebar li {
  margin: 10px 0;
}

.sidebar a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
}

.sidebar a:hover {
  color: #666;
}

/* Main */
.main {
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(3, 1fr); /* Три карточки в ряд */
  gap: 20px;
  padding: 20px;
}

.movie-card {
  background-color: #fff;
  width: 100%;
  max-width: 320px; /* Ограничение ширины карточки */
  height: 450px; /* Фиксированная высота карточки */
  padding: 15px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
}

/* Контейнер для изображения */
.movie-image-container {
  width: 100%;
  height: 300px; /* Фиксированная высота контейнера для изображения */
  overflow: hidden;
  border-radius: 4px;
  margin-bottom: 10px;
}

.movie-image-container img {
  width: 100%;
  height: 100%;
  object-fit: cover; /* Адаптация изображения под размер контейнера */
}

.movie-card h3 {
  font-size: 1.2em;
  margin: 10px 0;
}

.movie-card p {
  font-size: 0.9em;
  color: #666;
}

/* Footer */
.footer {
  grid-area: footer;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 20px;
}

.footer ul {
  list-style: none;
  display: flex;
  justify-content: center;
  gap: 20px;
  margin-top: 10px;
}

.footer a {
  color: #fff;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}
```
