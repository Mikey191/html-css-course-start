1. Создайте блок `<header>` с меню навигации:

   - Используйте семантический тег `<header class="header">` для создания верхнего блока страницы.
   - Внутри `<header>` добавьте навигацию `<nav class="navigation">` с ненумерованным списком `<ul class="menu">`.
   - В списке `<ul>` создайте элементы `<li class="menu-item">`, каждый из которых будет содержать ссылку `<a>` с якорем для перехода к соответствующим секциям страницы.

2. Создайте основной блок `<main>` с тремя секциями внутри:

   - Добавьте тег `<main class="main-content">`.
   - Внутри `<main>` создайте три секции `<section>` с уникальными id — `id="theme1"`, `id="theme2"` и `id="theme3"`.

3. Добавьте текстовый блок с информацией о природе в секции с `id="theme1"`:

   - Внутри `<section id="theme1" class="theme-section">` добавьте заголовок `<h2 class="section-title">` с текстом "Тема 1: Природа".
   - Под заголовком добавьте абзац `<p class="section-description">` с кратким описанием темы о природе.

4. Во второй секции с `id="theme2"` добавьте вложенные `<div>` для трех подтем:

   - В секции `<section id="theme2" class="theme-section">` добавьте заголовок `<h2 class="section-title">` с текстом "Тема 2: Технологии".
   - Внутри секции добавьте три вложенных блока `<div class="subtopic">`.
   - В каждом `<div class="subtopic">` создайте заголовок `<h3 class="subtopic-title">` с описанием подтем и абзац `<p class="subtopic-description">` с текстом для каждой из подтем: "Искусственный интеллект", "Интернет вещей" и "Виртуальная реальность".

5. В третьей секции с `id="theme3"` добавьте изображения с подписями:

   - В секции `<section id="theme3" class="theme-section">` добавьте заголовок `<h2 class="section-title">` с текстом "Тема 3: Искусство" и абзац `<p class="section-description">` с описанием темы.
   - Добавьте три изображения с подписями, используя тег `<figure class="artwork">`. Внутри `<figure>` добавьте теги `<img class="art-image">` для изображений и `<figcaption class="image-caption">` для подписей к изображениям.

6. Создайте футер `<footer>` с контактной информацией:
   - Внизу страницы добавьте `<footer class="footer">`.
   - Внутри футера добавьте блок `<section id="contacts" class="contact-section">`, включающий заголовок `<h2 class="section-title">` с текстом "Контакты".
   - Внутри блока добавьте `<address class="contact-info">`, включающий элементы `<p>` с контактной информацией, например, электронную почту и телефон.

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Семантическая разметка</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <!-- Шапка с навигационным меню -->
    <header class="header">
      <nav class="navigation">
        <ul class="menu">
          <!-- Пункты меню с якорями на секции -->
          <li class="menu-item"><a href="#home">Главная</a></li>
          <li class="menu-item"><a href="#about">О нас</a></li>
          <li class="menu-item"><a href="#services">Услуги</a></li>
          <li class="menu-item"><a href="#contact">Контакты</a></li>
        </ul>
      </nav>
    </header>

    <!-- Основной блок страницы с тремя секциями -->
    <main class="main-content">
      <!-- Секция Природа -->
      <section id="theme1" class="theme-section">
        <h2 class="section-title">Тема 1: Природа</h2>
        <p class="section-description">
          Описание темы о природе, интересных фактах и важности сохранения
          окружающей среды.
        </p>
      </section>

      <!-- Секция Технологии с вложенными блоками -->
      <section id="theme2" class="theme-section">
        <h2 class="section-title">Тема 2: Технологии</h2>
        <div class="subtopic">
          <!-- Подтема 2.1 -->
          <h3 class="subtopic-title">Подтема 2.1: Искусственный интеллект</h3>
          <p class="subtopic-description">
            Описание роли искусственного интеллекта в современной науке и
            технологиях.
          </p>
        </div>
        <div class="subtopic">
          <!-- Подтема 2.2 -->
          <h3 class="subtopic-title">Подтема 2.2: Интернет вещей</h3>
          <p class="subtopic-description">
            Описание Интернета вещей и его использования в быту и
            промышленности.
          </p>
        </div>
        <div class="subtopic">
          <!-- Подтема 2.3 -->
          <h3 class="subtopic-title">Подтема 2.3: Виртуальная реальность</h3>
          <p class="subtopic-description">
            Как виртуальная реальность меняет способы развлечений и обучения.
          </p>
        </div>
      </section>

      <!-- Секция Искусство с изображениями -->
      <section id="theme3" class="theme-section">
        <h2 class="section-title">Тема 3: Искусство</h2>
        <p class="section-description">
          Обзор различных направлений искусства, известных художников и
          популярных произведений.
        </p>
        <figure class="artwork">
          <img
            src="img/art1.jpg"
            alt="Произведение искусства 1"
            class="art-image"
            width="300"
            height="200"
          />
          <figcaption class="image-caption">
            Произведение искусства 1
          </figcaption>
        </figure>
        <figure class="artwork">
          <img
            src="img/art2.jpg"
            alt="Произведение искусства 2"
            class="art-image"
            width="300"
            height="200"
          />
          <figcaption class="image-caption">
            Произведение искусства 2
          </figcaption>
        </figure>
        <figure class="artwork">
          <img
            src="img/art3.jpg"
            alt="Произведение искусства 3"
            class="art-image"
            width="300"
            height="200"
          />
          <figcaption class="image-caption">
            Произведение искусства 3
          </figcaption>
        </figure>
      </section>
    </main>

    <!-- Футер с контактной информацией -->
    <footer class="footer">
      <section id="contacts" class="contact-section">
        <h2 class="section-title">Контакты</h2>
        <address class="contact-info">
          <p>Email: info@example.com</p>
          <p>Телефон: +7 (123) 456-78-90</p>
        </address>
      </section>
    </footer>
  </body>
</html>
```

1. Сброс отступов и настройка базового шрифта:

   - Установите всем элементам margin: 0; и padding: 0;, чтобы сбросить базовые отступы и заполнения браузера.
   - Примените box-sizing: border-box;, чтобы включить padding и border в общую ширину элементов.
   - Используйте шрифт Arial для всех элементов страницы, задав font-family: Arial, sans-serif;.

2. Основные стили для body:

   - Установите цвет фона страницы на светло-серый #f5f5f5.
   - Определите основной цвет текста как темно-серый #333.
   - Настройте межстрочный интервал текста line-height: 1.6; для улучшения читабельности.

3. Стили для ссылок:

   - Удалите подчеркивание у ссылок text-decoration: none;.
   - Установите цвет ссылок на тот же, что и у основного текста color: #333.
   - Стили для header и навигационного меню

4. Шапка страницы (header):

   - Установите фон шапки на серый #6c757d.
   - Задайте отступы padding: 10px 20px; для более удобного пространства.
   - Установите позиционирование position: relative;, чтобы задать возможные смещения относительно исходного положения.

5. Центровка навигации:

   - Для центровки навигационного меню установите text-align: center; в блоке .navigation.

6. Стили для меню:

   - Уберите стандартные маркеры списка list-style: none;.
   - Разместите меню на одной строке, задав display: inline-block;.

7. Стили для пунктов меню:

   - Сделайте каждый элемент списка .menu-item строчным display: inline;.
   - Установите отступы margin: 0 15px; для создания пространства между пунктами меню.

8. Стили для ссылок в меню:

   - Задайте размер текста font-size: 16px; и отступы padding: 5px 10px; для удобства кликов.
   - Установите цвет текста ссылок на белый #ffffff.

9. Стили для hover-состояния ссылок меню:

   - Задайте цвет текста при наведении color: #b3b3b3;, чтобы ссылки слегка затемнялись.

10. Стили основного блока:

    - Установите максимальную ширину max-width: 1200px; и добавьте авто-отступы margin: 20px auto; для центровки.
    - Добавьте внутренний отступ padding: 20px; и задайте белый фон background-color: #ffffff;.
    - Установите рамку border: 1px solid #e0e0e0; для выделения блока на фоне.
    - Установите position: relative; для возможного смещения дочерних элементов.

11. Стили секции темы:

    - Задайте нижний отступ margin-bottom: 20px; для разделения секций.
    - Внутренний отступ padding: 15px; добавит пространства вокруг контента.
    - Добавьте нижнюю рамку border-bottom: 1px solid #e0e0e0; для визуального разделения.

12. Стили заголовка секции:

    - Установите размер шрифта font-size: 22px; и темный оттенок текста color: #444444;.
    - Добавьте нижний отступ margin-bottom: 10px; для отделения от контента.

13. Стили для подтем (subtopic):

    - Преобразуйте .subtopic в строчно-блочный элемент display: inline-block; для размещения нескольких блоков в одной строке.
    - Установите ширину width: 30%; и боковые отступы margin: 10px 1%; для визуального отступа.
    - Задайте внутренний отступ padding: 10px;, цвет фона background-color: #f0f0f0;, и рамку border: 1px solid #e0e0e0;.
    - Установите выравнивание текста по вертикали vertical-align: top; и горизонтальное выравнивание text-align: center;.

14. Стили заголовка подтемы:

    - Определите размер шрифта font-size: 18px;, цвет текста color: #555555;, и нижний отступ margin-bottom: 5px;.

15. Стили описания подтемы:

    - Установите размер шрифта font-size: 14px; и цвет текста color: #666666;.

16. Стили для блока изображений:

    - Установите для каждого блока .artwork строчно-блочный формат display: inline-block;, ширину width: 30%;, боковые отступы margin: 10px 1%; и позицию position: relative; для дальнейшего управления смещением изображений.

17. Стили для изображений:

    - Установите ширину изображений width: 100%; и авто-высоту height: auto;.
    - Определите начальное положение top: 0; для сброса смещений.

18. Смещение изображений с помощью nth-of-type. Смещайте изображения через псевдокласс:

    - Первое изображение сместите на 10px вниз top: 10px;.
    - Второе — на 10px вверх top: -10px;.
    - Третье — на 20px вниз top: 20px;.

19. Стили для подписей к изображениям:

    - Разместите подпись по центру text-align: center;, задайте размер шрифта font-size: 14px; и цвет color: #666666;.
    - Добавьте верхний отступ margin-top: 10px; для создания пространства между изображением и подписью.

20. Стили для футера:

    - Установите фон футера background-color: #6c757d; и цвет текста color: #ffffff;.
    - Задайте внутренний отступ padding: 20px; и выравнивание текста по центру text-align: center;.

21. Центрирование блока контактов:

    - Задайте максимальную ширину .contact-section max-width: 600px; и авто-отступы margin: 0 auto; для центрирования.

22. Стили для контактной информации:

    - Определите размер шрифта font-size: 14px; и цвет текста color: #ffffff;.
    - Добавьте нижний отступ margin-bottom: 5px; для отделения строк друг от друга.

```css
/* Общие стили */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Arial, sans-serif;
}

body {
  background-color: #f5f5f5;
  color: #333;
  line-height: 1.6;
}

a {
  text-decoration: none;
  color: #333;
}

.header {
  background-color: #6c757d;
  padding: 10px 20px;
  position: relative;
}

/* Стили навигационного меню */
.navigation {
  text-align: center;
}

.menu {
  list-style: none;
  display: inline-block;
}

.menu-item {
  display: inline;
  margin: 0 15px;
}

.menu-item a {
  font-size: 16px;
  padding: 5px 10px;
  color: #ffffff;
}

.menu-item a:hover {
  color: #b3b3b3;
}

/* Стили основного блока */
.main-content {
  max-width: 1200px;
  margin: 20px auto;
  padding: 20px;
  background-color: #ffffff;
  border: 1px solid #e0e0e0;
  position: relative;
}

.theme-section {
  margin-bottom: 20px;
  padding: 15px;
  border-bottom: 1px solid #e0e0e0;
}

.section-title {
  font-size: 22px;
  color: #444444;
  margin-bottom: 10px;
}

/* Стили для подтем в секции "Технологии" */
.subtopic {
  display: inline-block;
  width: 30%;
  margin: 10px 1%;
  padding: 10px;
  background-color: #f0f0f0;
  border: 1px solid #e0e0e0;
  vertical-align: top;
  text-align: center;
}

.subtopic-title {
  font-size: 18px;
  color: #555555;
  margin-bottom: 5px;
}

.subtopic-description {
  font-size: 14px;
  color: #666666;
}

/* Стили для секции "Искусство" */
.artwork {
  display: inline-block;
  width: 30%;
  margin: 10px 1%;
  position: relative;
}

.art-image {
  width: 100%;
  height: auto;
  position: relative;
  top: 0;
}

.artwork:nth-of-type(1) .art-image {
  top: 10px;
}

.artwork:nth-of-type(2) .art-image {
  top: -10px;
}

.artwork:nth-of-type(3) .art-image {
  top: 20px;
}

.image-caption {
  text-align: center;
  font-size: 14px;
  color: #666666;
  margin-top: 10px;
}

/* Стили для футера */
.footer {
  background-color: #6c757d;
  color: #ffffff;
  padding: 20px;
  text-align: center;
}

.contact-section {
  max-width: 600px;
  margin: 0 auto;
}

.contact-info p {
  font-size: 14px;
  color: #ffffff;
  margin-bottom: 5px;
}
```
