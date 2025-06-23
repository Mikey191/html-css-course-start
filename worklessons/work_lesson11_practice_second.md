## **Создание html-разметки документа**:

1. Создайте HTML-документ, добавьте основные структуры: `<!DOCTYPE html>`, `<html>`, `<head>` с мета-тегами и `<body>`.
2. Внутри `<body>` создайте контейнер с классом admin-panel.
3. Внутри контейнера добавьте тег (`header`) с классом `header`. Вставьте текст "Admin Dashboard".
4. Добавьте боковую панель (`aside`) с классом sidebar. Вставьте список ссылок (`<ul>`), где каждая ссылка (`<li>`) представляет раздел панели (например, `Dashboard`, `Reports`, `Tasks`, `Messages`, `Settings`).
5. Добавьте основное содержимое страницы, используя тег `<main>` с классом `main-content`.
6. Внутри основного содержимого:
   1. Создайте первый раздел (`<section>`) с классом `functions`.
      - Добавьте заголовок второго уровня с текстом `"Admin Functions"`.
      - Вставьте контейнер (`<div>`) с классом cards для карточек.
      - Добавьте 8 карточек (`<div>` с классом card):
        - Заголовок третьего уровня с названием функции (например, `User Management`).
        - Описание функции в параграфе (например, `Manage user accounts and permissions`).
   2. Создайте второй раздел (`<section>`) с классом `reports`.
      - Добавьте заголовок второго уровня с текстом `"Reports"`.
      - Вставьте контейнер (`<div>`) с классом cards для карточек отчетов.
      - Добавьте 4 карточки. В каждой карточке:
        - Добавьте изображение (`<img>`), задав src для графика.
        - Заголовок третьего уровня с названием отчета
        - Описание отчета в параграфе.
   3. Создайте третий раздел (`<section>`) с классом employees.
      - Добавьте заголовок второго уровня с текстом "Management".
      - Вставьте контейнер (`<div>`) с классом `cards` для карточек сотрудников.
      - Добавьте 4 карточки. Каждая карточка должна содержать:
        - Левую часть:
          - Контейнер (`<div>` с классом `employee-photo`).
          - Изображение сотрудника (`<img>`), задав src
          - Оценку сотрудника в элементе (например, `<span>`).
        - Правую часть:
          - Контейнер (`<div>` с классом `employee-info`).
          - Параграф с именем сотрудника.
          - Параграф с должностью сотрудника.
          - Параграф с описанием обязанностей.
7. Вне основного содержимого, добавьте футер (`footer`) с классом `footer`, указав текст "© 2024 Admin Panel".

## **Создание стилизации для разметки**:

1. Подключение шрифтов: Подключите шрифты `"Oswald"` и `"Roboto"` через Google Fonts.
2. Общие настройки. Для всех элементов (\*):
   - Установите обнуление отступов и полей: `margin: 0;` `padding: 0`.
   - Примените свойство `box-sizing: border-box;`, чтобы границы и отступы входили в размер элемента.
3. Для body:
   - Установите шрифт по умолчанию: `font-family: 'Roboto', sans-serif;`.
   - Задайте цвет фона: `background-color: #3c3c3c;` (светло-темный серый).
   - Установите цвет текста: `color: #e0e0e0;` (светлый серый).
   - Определите межстрочный интервал: `line-height: 1.6;` для удобства чтения.
4. Стили для заголовков. Для заголовков (`h1, h2, h3`):
   - Установите шрифт: `font-family: 'Oswald', sans-serif;`.
   - Сделайте текст жирным: `font-weight: bold;`.
5. Стили для `.admin-panel`:
   - Используйте CSS Grid для расположения областей (`display: grid;`)
   - Укажите области сетки через свойство `grid-template-areas:`
     ```css
     "header header"
     "sidebar main"
     "sidebar main"
     "footer footer"
     ```
   - Определите `высоту` и `ширину` областей:
     - Ряды: `grid-template-rows: auto 1fr auto;`.
     - Колонки: `grid-template-columns: 250px 1fr;`.
   - Добавьте расстояние между элементами: `gap: 20px;`.
   - Задайте минимальную высоту панели: `min-height: 100vh;`.
6. Стили для `.header`:
   - Укажите область сетки: `grid-area: header;`.
   - Задайте фон: `background-color: #4b4b4b;` (темно-серый).
   - Цвет текста: `color: #ffffff;`.
   - Размер шрифта: `font-size: 28px;` для выделения.
   - Установите выравнивание текста по центру: `text-align: center;`.
   - Добавьте внутренние отступы: `padding: 20px;`.
7. Стили для `.sidebar`:
   - Укажите область сетки: `grid-area: sidebar;`.
   - Установите фон: `background-color: #2f2f2f;` (более темный серый).
   - Цвет текста: `color: #ffffff;`.
   - Внутренние отступы: `padding: 20px;`.
8. Стили для списка навигации:
   - Для списка (`ul`) уберите маркеры: Установите стиль списка: `list-style: none;`.
   - Для пунктов списка (`li`): Добавьте нижний отступ: `margin: 15px 0;`.
   - Для ссылок (`a`):
     - Уберите подчеркивание: `text-decoration: none;`.
     - Цвет текста: `color: #e0e0e0;`.
     - Сделайте плавный переход для изменения цвета: `transition: color 0.3s;`.
   - Для состояния `:hover`:
     - Сделайте текст жирным: `font-weight: 500;`.
     - Измените цвет текста на белый: `color: #ffffff;`.
     - Добавьте подчеркивание: `text-decoration: underline;`.
   - Для первого элемента `.sidebar li:first-of-type a`:
     - Сделайте текст жирным: `font-weight: 500;`.
     - Измените цвет текста на белый: `color: #ffffff;`.
     - Добавьте подчеркивание: `text-decoration: underline;`.
9. Стили для `.main-content`:
   - Определите область сетки: `grid-area: main;`.
   - Используйте `display: flex;` для вертикального расположения секций
   - Установите направление: `flex-direction: column;`.
   - Задайте расстояние между секциями: `gap: 30px;`.
   - Добавьте внутренние отступы: `padding: 20px;`.
10. Стили для сетки карточек (`.cards`):
    - Настройте сетку для карточек: `display: grid;`.
    - Укажите количество колонок: `grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));`.
    - Добавьте отступы между карточками: `gap: 20px;`.
11. Стили для самих карточек (`.card`):
    - Фон: `background-color: #4b4b4b;`.
    - Закругление углов: `border-radius: 5px;`.
    - Текст выравнивайте по центру: `text-align: center;`.
    - Добавьте эффект при наведении:
      - Цвет текста: `color: white;`.
      - Тень: `box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);`.
      - Эффект подсветки текста: `text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);`.
    - Для первого элемента (`.card:first-child`):
      - Цвет текста: `color: white;`.
      - Тень: `box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);`.
      - Эффект подсветки текста: `text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);`.
12. Стили для изображений в отчетах (`.reports .card img`):
    - Установите максимальную ширину изображения: `max-width: 200px;`.
    - Добавьте нижний отступ: `margin-bottom: 10px;`.
13. Стили для карточек сотрудников (`.employees .card`):
    - Устанавливаем флекс-контейнер для карточки `display: flex;`
    - Выравниваем элементы по верхнему краю `align-items: flex-start;`
    - Устанавливаем промежуток между элементами внутри карточки `gap: 15px;`
14. Стили для блока-обертки сотрудника (`.employee-photo`):
    - Устанавливаем флекс-контейнер `display: flex;`.
    - Располагаем элементы в столбик `flex-direction: column;`.
    - Выравниваем текст по центру `text-align: center;`.
15. Стили для изображения сотрудника (`.employee-photo img`)
    - Устанавливаем ширину и высоту изображения `width: 80px; и height: 80px;`.
    - Делаем изображение круглым `border-radius: 50%;`.
    - Добавляем отступ снизу `margin-bottom: 10px;`.
16. Стили для рейтинга (`.rating`)
    - Делаем текст жирным `font-weight: bold;`.
17. Стили для информации о сотруднике (`.employee-info`)
    - Выравниваем текст по левому краю `text-align: left;`.
18. Стили для параграфов информации (`.employee-info p`)
    - Устанавливаем отступы сверху и снизу для параграфов `margin: 5px 0;`.
19. Стили для футера (`.footer`)
    - Устанавливаем область сетки для футера `grid-area: footer;`.
    - Устанавливаем цвет фона `background-color: #4b4b4b;`.
    - Устанавливаем цвет текста `color: #ffffff;`.
    - Выравниваем текст по центру `text-align: center;`.
    - Добавляем внутренние отступы `padding: 10px;`.

**html-разметка**:

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Admin Panel</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <div class="admin-panel">
      <header class="header">Admin Dashboard</header>
      <aside class="sidebar">
        <ul>
          <li><a href="#">Dashboard</a></li>
          <li><a href="#">Reports</a></li>
          <li><a href="#">Tasks</a></li>
          <li><a href="#">Messages</a></li>
          <li><a href="#">Settings</a></li>
        </ul>
      </aside>
      <main class="main-content">
        <!-- Functions Section -->
        <section class="functions">
          <h2>Admin Functions</h2>
          <div class="cards">
            <div class="card">
              <h3>User Management</h3>
              <p>Manage user accounts and permissions.</p>
            </div>
            <div class="card">
              <h3>Content Management</h3>
              <p>Update and organize website content.</p>
            </div>
            <div class="card">
              <h3>Analytics</h3>
              <p>View traffic and usage statistics.</p>
            </div>
            <div class="card">
              <h3>Payments</h3>
              <p>Manage and review transactions.</p>
            </div>
            <div class="card">
              <h3>System Settings</h3>
              <p>Adjust configuration and system preferences.</p>
            </div>
            <div class="card">
              <h3>Support</h3>
              <p>Handle user support tickets.</p>
            </div>
            <div class="card">
              <h3>Notifications</h3>
              <p>Set up and manage alerts.</p>
            </div>
            <div class="card">
              <h3>Backup</h3>
              <p>Manage system backups and recovery.</p>
            </div>
          </div>
        </section>
        <!-- Reports Section -->
        <section class="reports">
          <h2>Reports</h2>
          <div class="cards">
            <div class="card">
              <img src="img/report1.webp" alt="Chart 1" />
              <h3>Monthly Revenue</h3>
              <p>Detailed breakdown of monthly income.</p>
            </div>
            <div class="card">
              <img src="img/report2.webp" alt="Chart 2" />
              <h3>Active Users</h3>
              <p>Statistics on active user engagement.</p>
            </div>
            <div class="card">
              <img src="img/report3.webp" alt="Chart 3" />
              <h3>Conversion Rates</h3>
              <p>Data on conversion performance.</p>
            </div>
            <div class="card">
              <img src="img/report4.webp" alt="Chart 4" />
              <h3>Top Products</h3>
              <p>Analysis of best-performing products.</p>
            </div>
          </div>
        </section>
        <!-- Employee Management Section -->
        <section class="employees">
          <h2>Management</h2>
          <div class="cards">
            <div class="card">
              <div class="employee-photo">
                <img src="img/management1.webp" alt="Employee 1" />
                <span class="rating">4.8</span>
              </div>
              <div class="employee-info">
                <p><strong>Jane Doe</strong></p>
                <p>Project Manager</p>
                <p>Oversees project timelines and deliverables.</p>
              </div>
            </div>
            <div class="card">
              <div class="employee-photo">
                <img src="img/management3.webp" alt="Employee 2" />
                <span class="rating">4.5</span>
              </div>
              <div class="employee-info">
                <p><strong>John Smith</strong></p>
                <p>Lead Developer</p>
                <p>Responsible for backend development.</p>
              </div>
            </div>
            <div class="card">
              <div class="employee-photo">
                <img src="img/management2.webp" alt="Employee 3" />
                <span class="rating">4.7</span>
              </div>
              <div class="employee-info">
                <p><strong>Emily Brown</strong></p>
                <p>UI/UX Designer</p>
                <p>Creates user-friendly interfaces.</p>
              </div>
            </div>
            <div class="card">
              <div class="employee-photo">
                <img src="img/management4.jpg" alt="Employee 4" />
                <span class="rating">4.9</span>
              </div>
              <div class="employee-info">
                <p><strong>Michael Green</strong></p>
                <p>Data Analyst</p>
                <p>Analyzes performance metrics.</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer class="footer">© 2024 Admin Panel</footer>
    </div>
  </body>
</html>
```

**Стилизация**:

```css
/* Шрифты */
@import url("https://fonts.googleapis.com/css2?family=Oswald:wght@200..700&family=Roboto:wght@300;400;500;900&display=swap");

/* Общие стили */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: "Roboto", sans-serif;
  background-color: #3c3c3c; /* Светло-темный серый */
  color: #e0e0e0; /* Светлый серый */
  line-height: 1.6;
}

h1,
h2,
h3 {
  font-family: "Oswald", sans-serif;
  font-weight: bold;
}

.admin-panel {
  display: grid;
  grid-template-areas:
    "header header"
    "sidebar main"
    "sidebar main"
    "footer footer";
  grid-template-columns: 250px 1fr;
  gap: 20px;
}

/* Header */
.header {
  grid-area: header;
  background-color: #4b4b4b;
  color: #ffffff;
  font-size: 28px;
  font-weight: bold;
  text-transform: uppercase;
  text-align: center;
  padding: 20px;
}

/* Sidebar */
.sidebar {
  grid-area: sidebar;
  background-color: #2f2f2f;
  color: #ffffff;
  padding: 20px;
}

.sidebar ul {
  list-style: none;
}

.sidebar li {
  margin: 15px 0;
}

.sidebar a {
  text-decoration: none;
  color: #e0e0e0;
  transition: color 0.3s;
}

.sidebar a:hover {
  font-weight: 500;
  color: #ffffff;
  text-decoration: underline;
}

.sidebar li:first-of-type a {
  font-weight: 500;
  color: #ffffff;
  text-decoration: underline;
}

/* Main Content */
.main-content {
  grid-area: main;
  display: flex;
  flex-direction: column;
  gap: 30px;
  padding: 20px;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 20px;
}

/* Card Styles */
.card {
  background-color: #4b4b4b;
  border-radius: 5px;
  padding: 15px;
  color: #e0e0e0;
  text-align: center;
}

.card:hover {
  color: white;
  cursor: pointer;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.card:first-child {
  color: white;
  cursor: pointer;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.4);
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.5);
}

.reports .card img {
  max-width: 200px;
  margin-bottom: 10px;
}

.employees .card {
  display: flex;
  align-items: flex-start;
  gap: 15px;
}

.employee-photo {
  display: flex;
  flex-direction: column;
  text-align: center;
}

.employee-photo img {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  margin-bottom: 10px;
}

.rating {
  font-weight: bold;
}

.employee-info {
  text-align: left;
}

.employee-info p {
  margin: 5px 0;
}

/* Footer */
.footer {
  grid-area: footer;
  background-color: #4b4b4b;
  color: #ffffff;
  text-align: center;
  padding: 10px;
}
```
