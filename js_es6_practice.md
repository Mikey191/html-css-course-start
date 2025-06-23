# Практика

# ✅ **Часть 1. Загрузка данных + Строка поиска**

---

## Полный код:

_(можешь вставить в `.html` и запустить)_

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Часть 1: Загрузка данных + Поиск</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
      }
      .controls {
        margin-bottom: 20px;
      }
      .controls input {
        padding: 5px;
        font-size: 16px;
        width: 300px;
      }
      .products {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }
      .card {
        border-radius: 8px;
        border: 1px solid #ddd;
        padding: 10px;
        width: 220px;
        text-align: center;
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
      }
      .card img {
        max-width: 100%;
        height: 150px;
        object-fit: contain;
      }
      .card h3 {
        font-size: 16px;
        margin: 10px 0;
      }
      .card .price {
        font-size: 18px;
        font-weight: bold;
      }
      .card .rating {
        font-size: 14px;
        color: #777;
      }
    </style>
  </head>
  <body>
    <!-- Поле для поиска -->
    <div class="controls">
      <input type="text" id="search" placeholder="Поиск товара..." />
    </div>

    <!-- Секция для карточек товаров -->
    <div class="products" id="product-list"></div>

    <script>
      /* ===================================================
  1️⃣ Глобальная переменная для хранения данных
================================================== */
      let allProducts = [];

      /* ===================================================
  2️⃣ Загрузка данных из FakeStore API
================================================== */
      function fetchProducts() {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json()) // Получаем JSON из ответа
          .then((data) => {
            allProducts = data; // Сохраняем все товары
            render(data); // Отрисовываем весь список
          })
          .catch((error) => {
            console.error(error);
          });
      }

      /* ===================================================
  3️⃣ Отрисовка данных
================================================== */
      function render(data) {
        const container = document.getElementById("product-list");
        container.innerHTML = "";
        data.forEach((product) => {
          const div = document.createElement("div");
          div.className = "card";
          div.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <div class="price">${product.price} $</div>
      <div class="rating">Рейтинг: ${product.rating.rate} (${product.rating.count})</div>
    `;
          container.appendChild(div);
        });
      }

      /* ===================================================
  4️⃣ Событие для поиска
================================================== */
      document.getElementById("search").addEventListener("input", (event) => {
        const searchValue = event.target.value.toLowerCase();
        const filtered = allProducts.filter((product) =>
          product.title.toLowerCase().includes(searchValue)
        );
        render(filtered);
      });

      // ===================================================
      // 5️⃣ Инициализация приложения
      // ===================================================
      fetchProducts();
    </script>
  </body>
</html>
```

---

## Текстовое пошаговое объяснение

### 1️⃣ Глобальная переменная для данных

Для удобства мы:

- Сохраняем все полученные данные в массив `allProducts`.
- Потом можем фильтровать этот массив в обработчике поиска.

---

### 2️⃣ Загрузка данных

Используем:

- `fetch()` для отправки GET-запроса.
- Метод `.then()` для чтения результата.
- Сохраняем результат в `allProducts`.
- Сразу вызываем `render()` для отображения данных.

---

### 3️⃣ Отрисовка данных

- Находим элемент-контейнер для карточек.
- Для каждого товара в массиве данных:

  - Создаем блок `.card`.
  - Добавляем в него:

    - Картинку
    - Название
    - Цену
    - Рейтинг

- Отправляем карточки в DOM.

---

### 4️⃣ Поиск

- Срабатывает обработчик события `input`.
- Текущий введенный в поиск текст приводим к нижнему регистру.
- Фильтруем массив `allProducts`.
- Снова вызываем `render()` для отфильтрованных данных.

---

### 5️⃣ Инициализация

- При загрузке страницы вызываем `fetchProducts()`.

---

## Схематическая картина работы

```
[fetchProducts()]
       |
       v
   [allProducts = data]
       |
       v
    [render(data)] -> Отрисовываем все карточки
       ^
       |
       <-- [event: input в #search]
                |
                v
        [filteredData = allProducts.filter()]
                |
                v
           [render(filteredData)] -> Отрисовываем результаты поиска
```

---

## ⚡️ Итог. Приложение:

- ✅ Загружает данные из `https://fakestoreapi.com/products`.
- ✅ Отрисовывает карточки всех товаров.
- ✅ Позволяет искать товар в массиве данных прямо в браузере.
- ✅ Не делаем никаких серверных фильтров — всё происходит в памяти, прямо в JS.

Вот полноценный, максимально понятный вариант для **Части 2**:

# ✅ Часть 2: Загрузка данных + Сортировка по цене (возрастающая / убывающая)

---

## Полный код

_(Можно вставить в `.html` и запустить.)_

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Часть 2: Загрузка данных + Сортировка</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
      }
      .controls {
        margin-bottom: 20px;
      }
      .controls select {
        padding: 5px;
        font-size: 16px;
      }
      .products {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }
      .card {
        border-radius: 8px;
        border: 1px solid #ddd;
        padding: 10px;
        width: 220px;
        text-align: center;
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
      }
      .card img {
        max-width: 100%;
        height: 150px;
        object-fit: contain;
      }
      .card h3 {
        font-size: 16px;
        margin: 10px 0;
      }
      .card .price {
        font-size: 18px;
        font-weight: bold;
      }
      .card .rating {
        font-size: 14px;
        color: #777;
      }
    </style>
  </head>
  <body>
    <!-- Панель для сортировки -->
    <div class="controls">
      <select id="sort">
        <option value="">Без сортировки</option>
        <option value="asc">По цене (возрастанию)</option>
        <option value="desc">По цене (убыванию)</option>
      </select>
    </div>

    <!-- Секция для карточек товаров -->
    <div class="products" id="product-list"></div>

    <script>
      /* ===================================================
  1️⃣ Глобальная переменная для хранения данных
================================================== */
      let allProducts = [];

      /* ===================================================
  2️⃣ Загрузка данных из FakeStore API
================================================== */
      function fetchProducts() {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json()) // Получаем JSON
          .then((data) => {
            allProducts = data; // Сохраняем данные
            render(data); // Отрисовываем весь список
          })
          .catch((error) => {
            console.error(error);
          });
      }

      /* ===================================================
  3️⃣ Отрисовка данных
================================================== */
      function render(data) {
        const container = document.getElementById("product-list");
        container.innerHTML = "";
        data.forEach((product) => {
          const div = document.createElement("div");
          div.className = "card";
          div.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <div class="price">${product.price} $</div>
      <div class="rating">Рейтинг: ${product.rating.rate} (${product.rating.count})</div>
    `;
          container.appendChild(div);
        });
      }

      /* ===================================================
  4️⃣ Событие для сортировки
================================================== */
      document.getElementById("sort").addEventListener("change", (event) => {
        const sortValue = event.target.value;

        // Копируем массив данных, чтобы не менять оригинальный
        let sorted = [...allProducts];

        if (sortValue === "asc") {
          // Сортируем по цене в порядке возрастания
          sorted.sort((a, b) => a.price - b.price);
        } else if (sortValue === "desc") {
          // Сортируем по цене в порядке убывания
          sorted.sort((a, b) => b.price - a.price);
        }

        render(sorted);
      });

      // ===================================================
      // 5️⃣ Инициализация приложения
      // ===================================================
      fetchProducts();
    </script>
  </body>
</html>
```

---

## Текстовое пошаговое объяснение

### 1️⃣ Глобальная переменная для данных

✅ `allProducts` хранит весь список товаров, полученный из API.
Зачем? — Чтобы не отправлять повторный запрос при каждом изменении сортировки.

---

### 2️⃣ Загрузка данных

Используем:
✅ `fetch()` для отправки GET-запроса.
✅ Метод `.then()` для чтения данных.
✅ Сохраняем результат в `allProducts`.
✅ Сразу вызываем `render()` для отображения данных.

---

### 3️⃣ Отрисовка данных

✅ Получаем элемент `#product-list`.
✅ Для каждого товара:

- Формируем блок `.card`.
- Добавляем:

  - Картинку
  - Название
  - Цену
  - Рейтинг
    ✅ Выводим все карточки в DOM.

---

### 4️⃣ Сортировка

При изменении `select`:
✅ Копируем массив `allProducts`.
✅ Проверяем, что выбрано:

- `asc` — сортируем массив в порядке возрастания цены.
- `desc` — сортируем массив в порядке убывания цены.
  ✅ Вызываем `render()` для отрисовки сортированных данных.

---

### 5️⃣ Инициализация приложения

При запуске страницы:
✅ Вызываем `fetchProducts()` для получения данных и отрисовки.

---

## Схематическая картина работы

```
[fetchProducts()] -> Загружаем данные
       |
       v
 [allProducts] хранит весь список
       |
       v
 [render(data)] --> Отрисовываем карточки

       ^
       | (через change в select#sort)
       |
 [sortHandler()] ---> Сортируем массив
       |
       v
 [render(data)] --> Отрисовываем уже сортированные данные
```

---

# ✅ Часть 3: Загрузка данных + Пагинация (4 товара на страницу)

---

## Полный код

_(Можно вставить в `.html` и запустить.)_

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Часть 3: Загрузка данных + Пагинация</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
      }
      .products {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }
      .card {
        border-radius: 8px;
        border: 1px solid #ddd;
        padding: 10px;
        width: 220px;
        text-align: center;
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
      }
      .card img {
        max-width: 100%;
        height: 150px;
        object-fit: contain;
      }
      .card h3 {
        font-size: 16px;
        margin: 10px 0;
      }
      .card .price {
        font-size: 18px;
        font-weight: bold;
      }
      .card .rating {
        font-size: 14px;
        color: #777;
      }
      .pagination {
        margin: 20px 0;
        display: flex;
        justify-content: center;
        gap: 10px;
      }
      .pagination button {
        padding: 5px 12px;
        font-size: 16px;
      }
      .pagination button.active {
        background-color: #007bff;
        color: #fff;
      }
    </style>
  </head>
  <body>
    <!-- Секция для карточек -->
    <div class="products" id="product-list"></div>

    <!-- Секция для кнопок пагинации -->
    <div class="pagination" id="pagination"></div>

    <script>
      /* ===================================================
  1️⃣ Глобальная переменная для хранения данных
================================================== */
      let allProducts = [];
      const productsPerPage = 4; // Сколько товаров отображаем на странице
      let currentPage = 1;

      /* ===================================================
  2️⃣ Загрузка данных из FakeStore API
================================================== */
      function fetchProducts() {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => {
            allProducts = data;
            renderPage(currentPage);
            renderPagination();
          })
          .catch((error) => {
            console.error(error);
          });
      }

      /* ===================================================
  3️⃣ Отрисовка данных для определенной страницы
================================================== */
      function renderPage(page) {
        const container = document.getElementById("product-list");
        container.innerHTML = "";

        // Вычисляем диапазон элементов для данной страницы
        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;

        const pageItems = allProducts.slice(startIndex, endIndex);

        pageItems.forEach((product) => {
          const div = document.createElement("div");
          div.className = "card";
          div.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <div class="price">${product.price} $</div>
      <div class="rating">Рейтинг: ${product.rating.rate} (${product.rating.count})</div>
    `;
          container.appendChild(div);
        });
      }

      /* ===================================================
  4️⃣ Отрисовка кнопок для пагинации
================================================== */
      function renderPagination() {
        const paginationContainer = document.getElementById("pagination");
        paginationContainer.innerHTML = "";

        const totalPages = Math.ceil(allProducts.length / productsPerPage);

        for (let i = 1; i <= totalPages; i++) {
          const button = document.createElement("button");
          button.textContent = i;

          // Выделение активной страницы
          if (i === currentPage) {
            button.classList.add("active");
          }

          button.addEventListener("click", () => {
            currentPage = i;
            renderPage(currentPage);
            renderPagination();
          });
          paginationContainer.appendChild(button);
        }
      }

      /* ===================================================
  5️⃣ Инициализация приложения
================================================== */
      fetchProducts();
    </script>
  </body>
</html>
```

---

## Текстовое пошаговое объяснение

### 1️⃣ Глобальная переменная для данных

- `allProducts` — хранит все полученные данные.
- `productsPerPage` — определяет количество элементов, отображаемых на странице.
- `currentPage` — хранит номер текущей страницы.

---

### 2️⃣ Загрузка данных

✅ С помощью `fetch()` делаем GET-запрос.
✅ Сохраняем результат в `allProducts`.
✅ Вызываем:

- `renderPage(currentPage)` для отрисовки данных.
- `renderPagination()` для создания кнопок страниц.

---

### 3️⃣ Отрисовка данных для конкретной страницы

✅ Считываем диапазоны:

- `startIndex = (page - 1) * productsPerPage`
- `endIndex = startIndex + productsPerPage`
  ✅ С помощью `slice()` получаем данные для конкретной страницы.
  ✅ Для каждого товара формируем карточку и вставляем в DOM.

---

### 4️⃣ Отрисовка кнопок для пагинации

✅ Вычисляем количество страниц:

```javascript
const totalPages = Math.ceil(allProducts.length / productsPerPage);
```

✅ Для каждой страницы:

- Создаем кнопку.
- Назначаем обработчик `click`.
- При клике меняем `currentPage`, перерисовываем данные и кнопки.

---

### 5️⃣ Инициализация приложения

✅ При запуске страницы вызывается `fetchProducts()`.

---

## Схематическая картина работы

```
fetchProducts()
       |
       v
   [allProducts]
       |
       +---> renderPage(currentPage) --> Отрисовывает 4 товара
       |
       +---> renderPagination() ----> Отрисовывает кнопки для страниц
                      |
                      v
                clickHandler(page) ---> Меняем currentPage
                      |
                      v
        renderPage(currentPage) и renderPagination()
```

---

## Дополнительно: Расширенный вариант с пагинацией, в которой есть:

- Кнопки с номерами страниц,
- Кнопка "Назад" (предыдущая страница),
- Кнопка "Вперед" (следующая страница),
- Активная страница выделена.

---

## Полный код с комментариями и стрелками переключения

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Пагинация с кнопками и стрелками</title>
    <style>
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
      }
      .products {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }
      .card {
        border-radius: 8px;
        border: 1px solid #ddd;
        padding: 10px;
        width: 220px;
        text-align: center;
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
      }
      .card img {
        max-width: 100%;
        height: 150px;
        object-fit: contain;
      }
      .card h3 {
        font-size: 16px;
        margin: 10px 0;
      }
      .card .price {
        font-size: 18px;
        font-weight: bold;
      }
      .card .rating {
        font-size: 14px;
        color: #777;
      }
      .pagination {
        margin: 20px 0;
        display: flex;
        justify-content: center;
        gap: 8px;
        flex-wrap: wrap;
      }
      .pagination button {
        padding: 6px 14px;
        font-size: 16px;
        cursor: pointer;
        border: 1px solid #007bff;
        background-color: white;
        color: #007bff;
        border-radius: 4px;
        user-select: none;
        transition: background-color 0.3s, color 0.3s;
      }
      .pagination button:hover:not(.disabled):not(.active) {
        background-color: #007bff;
        color: white;
      }
      .pagination button.active {
        background-color: #007bff;
        color: white;
        cursor: default;
      }
      .pagination button.disabled {
        border-color: #ccc;
        color: #ccc;
        cursor: default;
        pointer-events: none;
      }
    </style>
  </head>
  <body>
    <div class="products" id="product-list"></div>

    <div class="pagination" id="pagination"></div>

    <script>
      // Глобальные переменные
      let allProducts = [];
      const productsPerPage = 4;
      let currentPage = 1;

      // Загрузка данных с API
      function fetchProducts() {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json())
          .then((data) => {
            allProducts = data;
            renderPage(currentPage);
            renderPagination();
          })
          .catch((error) =>
            console.error("Ошибка при загрузке данных:", error)
          );
      }

      // Отрисовка карточек товаров для текущей страницы
      function renderPage(page) {
        const container = document.getElementById("product-list");
        container.innerHTML = "";

        const startIndex = (page - 1) * productsPerPage;
        const endIndex = startIndex + productsPerPage;
        const pageItems = allProducts.slice(startIndex, endIndex);

        pageItems.forEach((product) => {
          const div = document.createElement("div");
          div.className = "card";
          div.innerHTML = `
        <img src="${product.image}" alt="${product.title}" />
        <h3>${product.title}</h3>
        <div class="price">${product.price} $</div>
        <div class="rating">Рейтинг: ${product.rating.rate} (${product.rating.count})</div>
      `;
          container.appendChild(div);
        });
      }

      // Отрисовка кнопок пагинации с "Назад" и "Вперед"
      function renderPagination() {
        const paginationContainer = document.getElementById("pagination");
        paginationContainer.innerHTML = "";

        const totalPages = Math.ceil(allProducts.length / productsPerPage);

        // Кнопка "Назад"
        const prevBtn = document.createElement("button");
        prevBtn.textContent = "← Назад";
        prevBtn.disabled = currentPage === 1;
        if (prevBtn.disabled) prevBtn.classList.add("disabled");
        prevBtn.addEventListener("click", () => {
          if (currentPage > 1) {
            currentPage--;
            renderPage(currentPage);
            renderPagination();
            scrollToTop();
          }
        });
        paginationContainer.appendChild(prevBtn);

        // Кнопки с номерами страниц
        for (let i = 1; i <= totalPages; i++) {
          const btn = document.createElement("button");
          btn.textContent = i;
          if (i === currentPage) {
            btn.classList.add("active");
          }
          btn.addEventListener("click", () => {
            currentPage = i;
            renderPage(currentPage);
            renderPagination();
            scrollToTop();
          });
          paginationContainer.appendChild(btn);
        }

        // Кнопка "Вперед"
        const nextBtn = document.createElement("button");
        nextBtn.textContent = "Вперед →";
        nextBtn.disabled = currentPage === totalPages;
        if (nextBtn.disabled) nextBtn.classList.add("disabled");
        nextBtn.addEventListener("click", () => {
          if (currentPage < totalPages) {
            currentPage++;
            renderPage(currentPage);
            renderPagination();
            scrollToTop();
          }
        });
        paginationContainer.appendChild(nextBtn);
      }

      // Прокрутка страницы вверх при смене страницы
      function scrollToTop() {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      // Инициализация
      fetchProducts();
    </script>
  </body>
</html>
```

---

## Объяснение по шагам:

1. **Глобальные переменные:**

   - `allProducts` — массив со всеми товарами.
   - `productsPerPage` — сколько показывать на странице (4).
   - `currentPage` — текущий номер страницы.

2. **fetchProducts:**

   - Загружает товары с API.
   - Сохраняет в `allProducts`.
   - Вызывает `renderPage` и `renderPagination`.

3. **renderPage:**

   - Вычисляет срез массива товаров для текущей страницы (`slice`).
   - Создает карточки и вставляет их в DOM.

4. **renderPagination:**

   - Создает кнопку "Назад", отключая её, если мы на первой странице.
   - Создает кнопки с номерами страниц, выделяя активную.
   - Создает кнопку "Вперед", отключая её, если мы на последней странице.
   - Для всех кнопок добавляет обработчики клика, которые обновляют `currentPage`, перерисовывают список и пагинацию, а также плавно скроллят вверх.

5. **scrollToTop:**

   - Помогает плавно прокрутить страницу вверх при переключении страниц.

---

# ✅ Часть 4: Большая практика

Объединение нескольких способов работы с информацией, которая приходит с сервера.

- ✅ На чистом HTML + JS
- ✅ С помощью fetch().then().catch()
- ✅ С карточками, поиском, фильтром, пагинацией и стилями.

---

## Полный код:

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>FakeStore Landing</title>
    <style>
      /* Стили остаются прежними — не трогаем для фокусировки на JS */
      body {
        font-family: Arial, sans-serif;
        padding: 20px;
      }
      .controls {
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
        margin-bottom: 20px;
      }
      .controls select,
      .controls input {
        padding: 5px;
      }
      .products {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
      }
      .card {
        border-radius: 8px;
        border: 1px solid #ddd;
        padding: 10px;
        width: 220px;
        text-align: center;
        box-shadow: 2px 2px 12px rgba(0, 0, 0, 0.1);
      }
      .card img {
        max-width: 100%;
        height: 150px;
        object-fit: contain;
      }
      .card h3 {
        font-size: 16px;
        margin: 10px 0;
      }
      .card .price {
        font-size: 18px;
        font-weight: bold;
      }
      .card .rating {
        font-size: 14px;
        color: #777;
      }
      .card .buy-button {
        padding: 5px 10px;
        margin-top: 10px;
        background: #007bff;
        color: #fff;
        border-radius: 4px;
        border: none;
        cursor: pointer;
      }
      .pagination {
        margin: 20px 0;
        text-align: center;
      }
      .pagination button {
        padding: 5px 10px;
      }
    </style>
  </head>
  <body>
    <!-- Панель фильтров и поиска -->
    <div class="controls">
      <input type="text" id="search" placeholder="Поиск товара..." />
      <select id="category">
        <option value="">Все категории</option>
        <option value="men's clothing">men's clothing</option>
        <option value="jewelery">jewelery</option>
        <option value="electronics">electronics</option>
        <option value="women's clothing">women's clothing</option>
      </select>
    </div>

    <!-- Список товаров -->
    <div class="products" id="product-list"></div>

    <!-- Панель навигации -->
    <div class="pagination">
      <button id="prev">← Назад</button>
      <span id="page-info">Страница 1</span>
      <button id="next">Вперёд →</button>
    </div>

    <script>
      /* ===================================================
   1️⃣ Глобальные переменные для состояния приложения
================================================== */
      let allProducts = []; // Сюда будет загружен весь список товаров из API
      let currentPage = 1; // Текущая страница для отображения
      const perPage = 4; // Количество элементов для отображения на странице

      /* ===================================================
   2️⃣ Получаем данные из API FakeStore
================================================== */
      function fetchProducts() {
        fetch("https://fakestoreapi.com/products")
          .then((response) => response.json()) // Считываем JSON из ответа
          .then((data) => {
            allProducts = data; // Сохраняем весь список
            render(); // Отрисовываем карточки
          })
          .catch((error) => {
            console.error(error);
          });
      }

      /* ===================================================
   3️⃣ Функция для фильтрации данных
================================================== */
      function applyFilters(data) {
        const search = document.getElementById("search").value.toLowerCase();
        const category = document.getElementById("category").value;

        // Сначала берем все данные
        let filtered = data;

        // Если введён поиск — фильтруем
        if (search) {
          filtered = filtered.filter((p) =>
            p.title.toLowerCase().includes(search)
          );
        }

        // Если выбрана категория — фильтруем
        if (category) {
          filtered = filtered.filter((p) => p.category === category);
        }

        return filtered;
      }

      /* ===================================================
   4️⃣ Отрисовываем карточки товаров
================================================== */
      function render() {
        const filtered = applyFilters(allProducts);

        const totalPages = Math.ceil(filtered.length / perPage);
        if (currentPage > totalPages) {
          currentPage = totalPages || 1;
        }

        const start = (currentPage - 1) * perPage;
        const pageData = filtered.slice(start, start + perPage);

        const container = document.getElementById("product-list");
        container.innerHTML = "";

        pageData.forEach((product) => {
          const div = document.createElement("div");
          div.className = "card";
          div.innerHTML = `
      <img src="${product.image}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <div class="price">${product.price} $</div>
      <div class="rating">Рейтинг: ${product.rating.rate} (${product.rating.count})</div>
      <button class="buy-button">Купить</button>
    `;
          container.appendChild(div);
        });

        // Обновляем номер страницы
        document.getElementById(
          "page-info"
        ).textContent = `Страница ${currentPage}`;
      }

      /* ===================================================
   5️⃣ Назначаем обработчики событий
================================================== */
      document.getElementById("search").addEventListener("input", () => {
        currentPage = 1;
        render();
      });
      document.getElementById("category").addEventListener("change", () => {
        currentPage = 1;
        render();
      });
      document.getElementById("prev").addEventListener("click", () => {
        if (currentPage > 1) {
          currentPage--;
          render();
        }
      });
      document.getElementById("next").addEventListener("click", () => {
        const totalPages = Math.ceil(
          applyFilters(allProducts).length / perPage
        );
        if (currentPage < totalPages) {
          currentPage++;
          render();
        }
      });

      // ===================================================
      // 6️⃣ Инициализация приложения
      // ===================================================
      fetchProducts();
    </script>
  </body>
</html>
```

---

## 👇 Текстовое пошаговое объяснение создания этого приложения

1. **Сперва — определение состояния приложения:**
   ➕ Мы объявляем `allProducts` для хранения данных,
   ➕ `currentPage` для понимания, какую страницу показывать,
   ➕ `perPage` для указания, сколько элементов должно приходиться на одну страницу.

2. **Получаем данные из сети (`fetchProducts()`):**
   ➕ Отправляется `fetch()`-запрос.
   ➕ Полученный JSON сохраняется в `allProducts`.
   ➕ Потом вызывается `render()` для отображения данных.

3. **Применяем фильтры (`applyFilters()`):**
   ➕ Считываем введенный поисковый запрос и выбранную категорию.
   ➕ Отбираем только те данные, что удовлетворяют условиям.

4. **Рисуем карточки (`render()`):**
   ➕ Получаем отфильтрованный список.
   ➕ Считаем, сколько нужно страниц, определяем диапазон элементов для текущей страницы.
   ➕ Отрисовываем карточки в DOM.

5. **Обрабатываем события:**
   ➕ При вводе в поиск — отрисовываем с первой страницы.
   ➕ При изменении категории — то же самое.
   ➕ При переключении страниц — изменяем `currentPage` и выполняем `render()`.

---

## 👇 Схема взаимодействия

Вот простая визуальная схема:

```
            [Пользователь]
                   |
    (ввод в поиск / категория / кнопки страниц)
            ________|____________
           |                     |
           v                     v
      [Обработчики]           [fetchProducts()]
           |                           |
           v                           |
       [applyFilters(data)]           |
           |                           |
           v                           v
       [render(data)] <-- [allProducts <-- fetch()]
           |
           v
       [DOM обновляется]
```

---
