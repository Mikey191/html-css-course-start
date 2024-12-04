## HTML-разметка

2. Разметка блока `<header>`.
    - Внутри `<body>` создайте тег `<header>`.
    - Добавьте внутрь `<header>` элемент `<div>` с классом header-container.
    - Внутри header-container:
        - Добавьте `<img>` с классом `logo`, атрибутом src="img/logo.png", и alt="Логотип".
        - Добавьте элемент `<nav>`.
    - Внутри `<nav>`:
        - Добавьте `<ul>`.
        - Создайте три элемента `<li>`, внутри каждого разместите `<a>` с текстами "О нас", "Продукты", "Партнеры" и атрибутами href="#about", href="#products", href="#partners" соответственно.
3. Разметка блока `<main>`.
- Добавьте тег `<main>` после `<header>`.
- Секция "О нас":
  - Внутри `<main>` добавьте `<section>` с классом about.
  - Внутри about:
    - Добавьте `<div>` с классом about-img и вложите `<img>` с атрибутами src="img/about.webp" и alt="О нас".
    - Добавьте <div> с классом about-description:
        - Внутри него добавьте <h2> с текстом "О нас".
        - Добавьте <p> с длинным текстом (можно использовать Lorem Ipsum).
- Секция "Наши продукты":
    - После секции "О нас" добавьте <section> с классом products.
    - Внутри products:
        - Добавьте <h2> с классом products-title и текстом "Наши продукты".
        - Добавьте <div> с классом cards.
    - Внутри cards добавьте четыре карточки:
        - Каждая карточка — это <div> с классом card.
        - Внутри каждой карточки:
            - Добавьте <img> с атрибутами src="img/product.webp" и alt="".
            - Добавьте <h3> с текстом "Product Title".
            - Добавьте <p> с текстом "Lorem, ipsum dolor.".
            - Добавьте <button> с текстом "Подробнее".
- Секция "Наши партнеры":
    - После секции "Наши продукты" добавьте <section> с классом partners.
    - Внутри partners:
        - Добавьте <h2> с классом partners-title и текстом "Наши партнеры".
        - Добавьте <div> с классом cards.
  - Внутри cards добавьте восемь карточек:
    - Каждая карточка — это <div> с классом card.
    - Внутри каждой карточки:
        - Добавьте <img> с атрибутами src="img/parnters.png" и alt="".
        - Добавьте <h3> с текстом "Partner".
1. Разметка блока <footer>.
    - После <main> добавьте тег <footer>.
    - Внутри <footer> добавьте <div> с классом footer-container.
    - Внутри footer-container:
        - Добавьте <img> с классом logo, атрибутами src="img/logo.png" и alt="Логотип".
        - Добавьте <div> с классом contacts:
            - Внутри contacts добавьте:
                - <p> с классом phone и текстом "+7 123 456 78 90".
                - <p> с классом mail и текстом "exmail@mail.com".

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <link rel="stylesheet" href="style2.css" />
  </head>
  <body>
    <header>
      <div class="header-container">
        <img src="img/logo.png" alt="Логотип" class="logo" />
        <nav>
          <ul>
            <li><a href="#about">О нас</a></li>
            <li><a href="#products">Продукты</a></li>
            <li><a href="#partners">Партнеры</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <main>
      <section class="about">
        <div class="about-img">
          <img src="img/about.webp" alt="О нас" />
        </div>
        <div class="about-description">
          <h2>О нас</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Possimus,
            esse soluta dolor eaque tenetur temporibus repudiandae assumenda
            quas quaerat perferendis, voluptas magnam aut? Impedit possimus,
            illum fuga unde modi veniam laboriosam odit odio quaerat rem! Quasi
            aut quam omnis eligendi laborum dolorem ad, aliquam nemo doloribus
            nam tempora? Enim, error ipsam. Totam neque alias labore fugiat?
            Quas velit, iure dignissimos aliquam nobis exercitationem magni
            saepe consequatur voluptate illo totam reiciendis quasi at quo nisi
            itaque perspiciatis veritatis laborum. Illum sequi, aspernatur modi
            voluptas numquam dolorum quos possimus illo, ipsam excepturi in
            delectus consectetur nesciunt assumenda atque id dolorem officia
            consequatur.
          </p>
        </div>
      </section>

      <section class="products">
        <h2 class="products-title">Наши продукты</h2>
        <div class="cards">
          <div class="card">
            <img src="img/product.webp" alt="" />
            <h3>Product Title</h3>
            <p>Lorem, ipsum dolor.</p>
            <button>Подробнее</button>
          </div>

          <div class="card">
            <img src="img/product.webp" alt="" />
            <h3>Product Title</h3>
            <p>Lorem, ipsum dolor.</p>
            <button>Подробнее</button>
          </div>

          <div class="card">
            <img src="img/product.webp" alt="" />
            <h3>Product Title</h3>
            <p>Lorem, ipsum dolor.</p>
            <button>Подробнее</button>
          </div>

          <div class="card">
            <img src="img/product.webp" alt="" />
            <h3>Product Title</h3>
            <p>Lorem, ipsum dolor.</p>
            <button>Подробнее</button>
          </div>
        </div>
      </section>

      <section class="partners">
        <h2 class="partners-title">Наши партнеры</h2>
        <div class="cards">
          <div class="card">
            <img src="img/parnters.png" alt="" />
            <h3>Partner</h3>
          </div>

          <div class="card">
            <img src="img/parnters.png" alt="" />
            <h3>Partner</h3>
          </div>

          <div class="card">
            <img src="img/parnters.png" alt="" />
            <h3>Partner</h3>
          </div>

          <div class="card">
            <img src="img/parnters.png" alt="" />
            <h3>Partner</h3>
          </div>

          <div class="card">
            <img src="img/parnters.png" alt="" />
            <h3>Partner</h3>
          </div>

          <div class="card">
            <img src="img/parnters.png" alt="" />
            <h3>Partner</h3>
          </div>

          <div class="card">
            <img src="img/parnters.png" alt="" />
            <h3>Partner</h3>
          </div>

          <div class="card">
            <img src="img/parnters.png" alt="" />
            <h3>Partner</h3>
          </div>
        </div>
      </section>
    </main>

    <footer>
      <div class="footer-container">
        <img src="img/logo.png" alt="Логотип" class="logo" />
        <div class="contacts">
          <p class="phone">+7 123 456 78 90</p>
          <p class="mail">exmail@mail.com</p>
        </div>
      </div>
    </footer>
  </body>
</html>

```

```css
* {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: Arial, sans-serif;
  background-color: antiquewhite;
}

header {
  background-color: #5e4632;
  padding: 1rem;
}

.header-container,
.footer-container {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  width: 10%;
}

.header-container nav ul {
  display: flex;
  gap: 1.2rem;
  list-style: none;
}

.header-container nav ul li a {
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
}

main {
  display: flex;
  flex-direction: column;
  gap: 100px;
}

.about {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  display: grid;
  grid-template-areas: "about-img about-description";
  grid-template-columns: 1fr 1fr;
  gap: 1.5rem;
}

.about .about-img {
  grid-area: "about-img";
}

.about .about-img img {
  width: 100%;
  height: auto;
}

.about .about-description {
  grid-area: "about-description";
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.products,
.partners {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
}

.products h2 {
  text-align: center;
}

.cards {
  display: flex;
  justify-content: space-between;
  gap: 2rem;
  flex-wrap: wrap;
}

.card {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1.3rem;
  border: 1px solid rgba(255, 255, 255, 1);
  border-radius: 10px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  padding: 3rem;
}
.products .card img {
  width: 30%;
}

.partners {
  margin-bottom: 2rem;
}

.partners h2 {
  text-align: center;
}

.partners .cards {
  flex-wrap: nowrap;
}

.partners .card {
  width: 10%;
  padding: 20px;
}

.partners .card img {
  width: 100%;
}

footer {
  background-color: #5e4632;
  padding: 2rem;
}

@media (max-width: 1024px) {
  .about {
    grid-template-areas: "about-img" "about-description";
    grid-template-columns: 1fr;
  }
  .about-description h2 {
    text-align: center;
  }
  .partners .cards {
    flex-wrap: wrap;
  }
  .card {
    font-size: 0.7rem;
  }
  .partners .card img {
    width: 100%;
  }
}

@media (max-width: 600px) {
  .header-container {
    flex-direction: column;
    gap: 2rem;
  }
  .about-img {
    display: none;
  }
  .products {
    margin-bottom: 20px;
  }
  .products .cards {
    flex-direction: column;
  }
  .products .cards .card {
    width: 100%;
  }
  .partners {
    display: none;
  }
}
```