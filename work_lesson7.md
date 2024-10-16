**HTML-разметка**:

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Пример семантической разметки</title>
    <link rel="stylesheet" href="styles.css" />
  </head>
  <body>
    <!-- Header с навигацией -->
    <header>
      <h1>Мой блог</h1>
      <nav>
        <ul>
          <li><a href="#home">Главная</a></li>
          <li><a href="#about">О нас</a></li>
          <li><a href="#services">Услуги</a></li>
          <li><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
    </header>

    <!-- Основной контент -->
    <main>
      <!-- Разделы сайта -->
      <section id="about">
        <h2>О нас</h2>
        <p>
          Мы предоставляем высококачественные услуги в области веб-разработки.
          Наши клиенты довольны результатами нашей работы.
        </p>
      </section>

      <section id="services">
        <h2>Наши услуги</h2>
        <p>
          Мы занимаемся разработкой сайтов, SEO-оптимизацией и технической
          поддержкой.
        </p>
      </section>

      <section id="blog">
        <h2>Блог</h2>
        <article>
          <h3>Статья дня: Советы по программированию</h3>
          <figure>
            <img
              src="code-tips.jpg"
              alt="Советы по программированию"
              class="blog-image"
            />
            <figcaption>Картинка для статьи о программировании</figcaption>
          </figure>
          <p>
            В этой статье я расскажу о лучших советах для начинающих
            программистов.
          </p>
        </article>
      </section>

      <!-- Боковая панель -->
      <aside>
        <h2>Полезные ссылки</h2>
        <ul>
          <li><a href="#">Документация HTML</a></li>
          <li><a href="#">Документация CSS</a></li>
          <li><a href="#">Учебные курсы по веб-разработке</a></li>
        </ul>
      </aside>
    </main>

    <!-- Footer -->
    <footer>
      <address>
        Контактная информация:
        <a href="mailto:contact@mysite.com">contact@mysite.com</a>
      </address>
      <p>&copy; 2024 Мой блог</p>
    </footer>
  </body>
</html>
```

**CSS стили**:

```css
/* Общие стили */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  background-color: #f4f4f4;
  color: #333;
}

h1,
h2,
h3 {
  color: #4caf50;
}

p {
  font-size: 1.2rem;
  line-height: 1.6;
}

a {
  color: #4caf50;
  text-decoration: none;
}

a:hover {
  text-decoration: underline;
}

/* Стили для header */
header {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

header nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

header nav ul li {
  display: inline-block;
  margin-left: 20px;
}

header nav ul li a {
  color: white;
}

/* Стили для main и разделов */
main {
  padding: 20px;
  background-color: white;
}

section {
  margin-bottom: 40px;
}

#about,
#services {
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #fafafa;
}

#blog {
  padding: 20px;
}

.blog-image {
  width: 100%;
  max-width: 500px;
  border-radius: 8px;
}

figure {
  margin: 0;
}

figcaption {
  font-size: 0.9rem;
  color: #666;
  text-align: center;
  margin-top: 5px;
}

/* Стили для aside */
aside {
  padding: 20px;
  border: 1px solid #ddd;
  background-color: #f9f9f9;
}

aside ul {
  list-style-type: square;
  padding-left: 20px;
}

/* Стили для footer */
footer {
  background-color: #333;
  color: white;
  padding: 20px;
  text-align: center;
}

footer a {
  color: #4caf50;
}

footer address {
  font-style: normal;
}

footer p {
  margin: 5px 0 0;
}
```
