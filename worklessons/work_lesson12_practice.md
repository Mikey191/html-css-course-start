#### Создание HTML-разметки:

1. **Создайте секцию `<header>`**.

   - Внутри `<header>` добавьте заголовок `<h1>` с текстом `"Online Store"`.

2. **Создайте основной контейнер для содержимого**.

   - Используйте `<div>` с классом `container`.

3. **Добавьте секцию `<aside>`**.

   - Внутри `<aside>` создайте навигацию с тегом `<nav>`.
   - Вложите список `<ul>` внутри `<nav>`, содержащий несколько элементов `<li>`.
   - Каждый элемент списка должен включать ссылку `<a>` с текстом `"Home"`, `"Shop"`, `"About"` и `"Contact"`.

4. **Создайте секцию `<main>`**.

   - Внутри `<main>` создайте несколько карточек, используя тег `<section>` с классом card.

5. **Добавьте изображение с адаптивной загрузкой в каждую карточку**.

   - Используйте тег `<picture>`.
   - Внутри `<picture>` добавьте:
     - Тег `<source>` с атрибутом srcset для изображения `img/product1-small.png` и условием `media="(max-width: 768px)"`.
     - Второй `<source>` с изображением `img/product1-medium.png` и условием `media="(max-width: 1024px)"`.
     - Тег `<img>` с атрибутами `src="img/product1-small.png"` и `alt="Product 1"`.

6. **Добавьте текстовую информацию в карточку**.

   - После блока `<picture>` добавьте заголовок `<h2>` с названием продукта.
   - Добавьте абзац `<p>` с описанием продукта, например, `"Short description of product 1."`
   - Добавьте второй абзац `<p>` с классом `price` и текстом цены, например, `"$19.99"`.

7. Добавьте кнопку для каждой карточки.

   - После описания добавьте кнопку `<button>` с текстом `"Buy Now"`.

8. Повторите карточки.

   - Создайте 6–8 карточек, изменяя текст и цены по необходимости.
   - Добавьте секцию `<footer>`.

9. Внутри `<footer>` добавьте абзац `<p>` с текстом `"© 2024 Online Store"`.

#### Cоздание стилизации:

1. **Задайте общие стили для документа**.

   - Установите `шрифт` для всего документа: `Arial`, `sans-serif`.
   - Уберите стандартные отступы и поля с помощью `margin: 0;` и `padding: 0;`.
   - Примените свойство `box-sizing: border-box;` ко всем элементам.

2. **Стилизуйте шапку и футер. Задайте для тегов `<header>` и `<footer>`**:

   - Фон: `#333`.
   - Цвет текста: `#fff`.
   - Выравнивание текста по центру: `text-align: center`.
   - Внутренние отступы: `padding: 1rem;`.

3. **Настройте контейнер с элементами. Примените для класса `.container`**:

   - Тип отображения: `display: grid;`.
   - Установите области сетки: `grid-template-areas: "aside main"`;.
   - Установите ширину столбцов: `grid-template-columns: 1fr 3fr;`.
   - Добавьте промежутки между элементами: `gap: 1rem;`.
   - Установите внутренние отступы: `padding: 1rem;`.

4. **Стилизуйте боковую панель**.

   - **Для тега `<aside>`**:
     - Область сетки: `grid-area: aside;`.
     - Фон: `#f4f4f4`.
     - Внутренние отступы: `padding: 1rem;`.
   - **Для навигационного списка внутри `<aside>`**:
     - Уберите стандартные маркеры: `list-style: none;`.
     - Установите горизонтальные отступы: `padding: 0; margin: 0;`.
     - Используйте вертикальную ориентацию: `display: flex; flex-direction: column;`.
     - Задайте промежутки между элементами списка: `gap: 0.5rem;`.
   - **Для ссылок внутри списка**:
     - Уберите подчеркивание: `text-decoration: none;`.
     - Цвет текста: `#333`.

5. **Стилизуйте основной блок. Для блока `<main>`**:

   - Область сетки: `grid-area: main;`.
   - **Установите сетку для карточек**:
     - `display: grid;`.
     - `grid-template-columns: repeat(3, 1fr);`.
     - `gap: 1rem;`.

6. **Настройте карточки товаров**.

   - **Для карточек с классом `.card`**:
     - Тип отображения: `display: flex;`.
     - Направление элементов: `flex-direction: column;`.
     - Центровка: `justify-content: space-between;` `align-items: center;`.
     - Фон: `#fff`.
     - Граница: `1px solid #ddd;`.
     - Внутренние отступы: `padding: 1rem;`.
     - Тень: `box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);`.
     - Высота: `20rem;`.
     - Выравнивание текста по центру: `text-align: center;`.
   - **Для изображений внутри карточки (`<picture>`)**:
     - Максимальная ширина: `30%;`.
   - **Для изображения внутри `<picture>`**:
     - Максимальная ширина: `100%;`.
     - Автоматическая высота: `height: auto;`.
   - **Для заголовков (`<h2>`)**:
     - Размер шрифта: `1.2rem;`.
     - Отступы сверху и снизу: `margin: 0.5rem 0;`.
   - **Для элемента с ценой (`.price`)**:
     - Жирность шрифта: `font-weight: bold;`.
     - Цвет текста: `#007bff;`.
   - **Для кнопки внутри карточки**:
     - Внутренние отступы: `padding: 0.5rem 1rem;`.
     - Цвет фона: `#007bff;`.
     - Цвет текста: `#fff;`.
     - Закруглённые углы: `border-radius: 5px;`.
     - Уберите границу: `border: none;`.
     - Добавьте эффект наведения: `при наведении фон становится #0056b3;`.

7. **Добавьте стили для адаптивной верстки. Для экранов шириной до `1024px`**:

   - **Для `.container` измените сетку**:
     - `grid-template-areas: "header" "aside" "main";`.
     - `grid-template-columns: 1fr;`.
     - Промежутки между элементами: `gap: 0.4rem;`.
   - **Для списка навигации внутри `<aside>`**:
     - Перестройте элементы в горизонтальную ориентацию: `flex-direction: row;`.
     - Выравнивание: `justify-content: space-around;`.
   - **Для блока `<main>`**:
     - Установите две колонки: `grid-template-columns: 1fr 1fr;`.
   - Для карточек (`.card`):
     - Установите ширину: `flex: 1 1 calc(50% - 1rem);`.

8. **Добавьте стили для адаптивной верстки. Для экранов шириной до `768px`**:
   - **Для `.container`**:
     - Сетка остаётся вертикальной: `grid-template-areas: "header" "aside" "main";`.
     - Установите одну колонку: `grid-template-columns: 1fr;`.
   - **Для блока `<main>`**:
     - Установите одну колонку: `grid-template-columns: 1fr;`.
   - Для карточек (`.card`):
     - Задайте ширину на всю ширину блока: `flex: 1 1 100%;`.
   - **Для изображений в карточках (`<picture>`)**:
     - Уменьшите ширину: `max-width: 20%;`.

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Responsive Layout</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>Online Store</h1>
    </header>
    <div class="container">
      <aside>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Shop</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </aside>
      <main>
        <section class="card">
          <picture>
            <source
              srcset="img/product1-small.png"
              media="(max-width: 768px)"
            />
            <source
              srcset="img/product1-small.png"
              media="(max-width: 1024px)"
            />
            <img src="img/product1-small.png" alt="Product 1" />
          </picture>
          <h2>Product 1</h2>
          <p>Short description of product 1.</p>
          <p class="price">$19.99</p>
          <button>Buy Now</button>
        </section>
        <section class="card">
          <picture>
            <source
              srcset="img/product1-small.png"
              media="(max-width: 768px)"
            />
            <source
              srcset="img/product1-small.png"
              media="(max-width: 1024px)"
            />
            <img src="img/product1-small.png" alt="Product 2" />
          </picture>
          <h2>Product 2</h2>
          <p>Short description of product 2.</p>
          <p class="price">$24.99</p>
          <button>Buy Now</button>
        </section>
        <section class="card">
          <picture>
            <source
              srcset="img/product1-small.png"
              media="(max-width: 768px)"
            />
            <source
              srcset="img/product1-small.png"
              media="(max-width: 1024px)"
            />
            <img src="img/product1-small.png" alt="Product 1" />
          </picture>
          <h2>Product 1</h2>
          <p>Short description of product 1.</p>
          <p class="price">$19.99</p>
          <button>Buy Now</button>
        </section>
        <section class="card">
          <picture>
            <source
              srcset="img/product1-small.png"
              media="(max-width: 768px)"
            />
            <source
              srcset="img/product1-small.png"
              media="(max-width: 1024px)"
            />
            <img src="img/product1-small.png" alt="Product 2" />
          </picture>
          <h2>Product 2</h2>
          <p>Short description of product 2.</p>
          <p class="price">$24.99</p>
          <button>Buy Now</button>
        </section>
        <section class="card">
          <picture>
            <source
              srcset="img/product1-small.png"
              media="(max-width: 768px)"
            />
            <source
              srcset="img/product1-small.png"
              media="(max-width: 1024px)"
            />
            <img src="img/product1-small.png" alt="Product 1" />
          </picture>
          <h2>Product 1</h2>
          <p>Short description of product 1.</p>
          <p class="price">$19.99</p>
          <button>Buy Now</button>
        </section>
        <section class="card">
          <picture>
            <source
              srcset="img/product1-small.png"
              media="(max-width: 768px)"
            />
            <source
              srcset="img/product1-small.png"
              media="(max-width: 1024px)"
            />
            <img src="img/product1-small.png" alt="Product 2" />
          </picture>
          <h2>Product 2</h2>
          <p>Short description of product 2.</p>
          <p class="price">$24.99</p>
          <button>Buy Now</button>
        </section>
      </main>
    </div>
    <footer>
      <p>© 2024 Online Store</p>
    </footer>
  </body>
</html>
```

```css
/* Общие стили */
body {
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header,
footer {
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 1rem;
}

.container {
  display: grid;
  grid-template-areas: "aside main";
  grid-template-columns: 1fr 3fr;
  gap: 1rem;
  padding: 1rem;
}

aside {
  grid-area: aside;
  background-color: #f4f4f4;
  padding: 1rem;
}

aside nav ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
}

aside nav ul li a {
  text-decoration: none;
  color: #333;
}

main {
  grid-area: main;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
}

.card {
  flex: 1 1 calc(25% - 1rem); /* Четыре карточки в ряд */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #fff;
  border: 1px solid #ddd;
  padding: 1rem;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  height: 20rem; /* Фиксированная высота в относительных единицах */
  text-align: center;
}

.card picture {
  max-width: 30%;
}

.card picture img {
  max-width: 100%;
  height: auto;
}

.card h2 {
  font-size: 1.2rem;
  margin: 0.5rem 0;
}

.card .price {
  font-weight: bold;
  color: #007bff;
}

.card button {
  padding: 0.5rem 1rem;
  background-color: #007bff;
  color: #fff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.card button:hover {
  background-color: #0056b3;
}

/* Планшетная точка останова */
@media (max-width: 1024px) {
  .container {
    grid-template-areas:
      "header"
      "aside"
      "main";
    grid-template-columns: 1fr;
    gap: 0.4rem;
  }

  aside nav ul {
    flex-direction: row;
    justify-content: space-around;
  }

  main {
    grid-template-columns: 1fr 1fr;
  }

  .card {
    flex: 1 1 calc(50% - 1rem); /* Две карточки в ряд */
  }
}

/* Мобильная точка останова */
@media (max-width: 768px) {
  .container {
    grid-template-areas:
      "header"
      "aside"
      "main";
    grid-template-columns: 1fr;
  }

  main {
    grid-template-columns: 1fr;
  }

  .card {
    flex: 1 1 100%; /* Карточки на всю ширину */
  }

  .card picture {
    max-width: 20%;
  }
}
```
