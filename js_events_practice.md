# 1. Работа с DOM (коротко): `document`, `getElementById()`, `getElementsByClassName()`

## 📄 document

- `document` — это основной объект, через который JavaScript получает доступ к структуре HTML-документа (Document Object Model — DOM).

С его помощью мы можем:

- Получить доступ к элементам страницы,
- Создавать, изменять, удалять элементы,
- Назначать обработчики событий,
- Управлять структурой и стилем страницы.

```js
console.log(document.title); // Выведет заголовок страницы
console.log(document.body); // Выведет содержимое <body>
```

## 🔍 document.getElementById(id)

Метод для получения одного HTML-элемента по его уникальному идентификатору (атрибут `id`).

```html
<div id="product-card">Товар</div>

<script>
  const card = document.getElementById("product-card");
  card.style.border = "1px solid black";
</script>
```

> 📝 Важно: `id` на странице должен быть уникальным, иначе метод вернет первый найденный элемент.

## 🧩 document.getElementsByClassName(className)

Метод для получения коллекции элементов (`HTMLCollection`) по классу. Может вернуть несколько элементов, даже если у них один и тот же класс.

```html
<div class="product">Товар 1</div>
<div class="product">Товар 2</div>

<script>
  const products = document.getElementsByClassName("product");
  for (let product of products) {
    product.style.backgroundColor = "lightblue";
  }
</script>
```

> 📝 Важно: возвращается живой список (`HTMLCollection`), то есть если добавить элемент на страницу с тем же классом — он сразу появится в коллекции.

## Пример HTML-файла, демонстрирующий работу с `document`, `getElementById()` и `getElementsByClassName()`

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Пример работы с DOM</title>
    <style>
      .product {
        border: 1px solid gray;
        padding: 10px;
        margin: 5px;
        width: 150px;
      }
    </style>
  </head>
  <body>
    <h1>Список товаров</h1>

    <div id="main-product" class="product">Главный товар</div>
    <div class="product">Товар 1</div>
    <div class="product">Товар 2</div>

    <script>
      // Работа с document
      console.log("Заголовок страницы:", document.title);
      console.log("Тело документа:", document.body);

      // getElementById
      const mainCard = document.getElementById("main-product");
      mainCard.style.border = "2px solid green";
      mainCard.textContent += " (избранный)";

      // getElementsByClassName
      const allProducts = document.getElementsByClassName("product");
      for (let product of allProducts) {
        product.style.backgroundColor = "#f0f8ff"; // светло-голубой фон
      }
    </script>
  </body>
</html>
```

## Что делает этот пример:

- Меняет стиль карточки с id="main-product".
- Обрабатывает все карточки с классом product, включая и ту, у которой есть id.
- Выводит в консоль заголовок страницы и <body>.

# 2. События в JavaScript

## ❓ Что такое событие?

Событие — это действие, которое происходит в браузере и может быть зафиксировано JavaScript.

Примеры:

- Пользователь нажал кнопку (событие `click`),
- Навёл курсор на элемент (`mouseenter`),
- Страница загрузилась (`load`, `DOMContentLoaded`),
- Пользователь начал ввод в поле (`input`),
- Форма была отправлена (`submit`), и т.д.

## 🔑 Основные события, которые обрабатываются чаще всего:

| Событие            | Когда происходит                         |
| ------------------ | ---------------------------------------- |
| `click`            | Клик по элементу мышью                   |
| `input`            | Ввод данных в текстовое поле             |
| `change`           | Изменение значения (после потери фокуса) |
| `submit`           | Отправка формы                           |
| `keydown`          | Нажатие клавиши                          |
| `mouseover`        | Наведение мыши                           |
| `mouseout`         | Увод мыши                                |
| `DOMContentLoaded` | DOM загружен, но еще не все ресурсы      |
| `load`             | Полная загрузка страницы                 |

## 🧩 Назначение обработчиков: `addEventListener`

Метод addEventListener позволяет назначить функцию, которая будет вызвана при возникновении события.

```js
const button = document.getElementById("buy-button");

button.addEventListener("click", function () {
  alert("Товар добавлен в корзину!");
});
```

- **Первый аргумент**: имя события (строка, без on)
- **Второй аргумент**: функция-обработчик
- **Можно добавить несколько обработчиков на одно событие**

## 📝 Преимущества:

- Гибкость
- Несколько обработчиков

## ⚠️ Альтернативный способ — через HTML-атрибут

Можно привязать обработчик прямо в HTML:

```html
<button onclick="addToCart()">Купить</button>

<script>
  function addToCart() {
    alert("Товар добавлен в корзину!");
  }
</script>
```

- Такой способ проще, но не рекомендуется для сложных проектов — смешивает HTML и логику.
- Менее гибкий: только один обработчик, нельзя легко удалить или переопределить.

## Пример

- **Карточка 1**: два обработчика назначены через `addEventListener` — оба срабатывают.
- **Карточка 2**: два обработчика назначены через `onclick` в HTML — второй перезаписывает первый (работает только один).

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Сравнение способов обработки событий</title>
    <style>
      .product {
        border: 1px solid gray;
        padding: 10px;
        margin: 10px;
        width: 200px;
      }

      .buy-button {
        margin-top: 10px;
        padding: 5px 10px;
      }
    </style>
  </head>
  <body>
    <h1>Сравнение обработки событий</h1>

    <!-- Карточка 1: addEventListener (оба обработчика сработают) -->
    <div class="product">
      <h2>Товар 1 (addEventListener)</h2>
      <p>Цена: 1000₽</p>
      <button class="buy-button" id="btn1">Купить</button>
    </div>

    <!-- Карточка 2: HTML onclick (будет работать только второй обработчик) -->
    <div class="product">
      <h2>Товар 2 (onclick x2)</h2>
      <p>Цена: 2000₽</p>
      <!-- Пробуем дважды назначить onclick -->
      <button class="buy-button" onclick="firstHandler();" id="btn2">
        Купить
      </button>
    </div>

    <script>
      // ==== addEventListener: можно назначить сколько угодно обработчиков ====
      const btn1 = document.getElementById("btn1");

      btn1.addEventListener("click", function () {
        console.log("Обработчик 1 для Товара 1 (addEventListener)");
      });

      btn1.addEventListener("click", function () {
        btn1.style.borderColor = "red";
        console.log("Обработчик 2 для Товара 1 (addEventListener)");
      });

      // ==== onclick: перезаписывается при повторном назначении ====
      function firstHandler() {
        console.log("Первый обработчик Товара 2 (onclick)");
      }

      // Назначаем второй обработчик через JS напрямую — перезапишет предыдущий
      const btn2 = document.getElementById("btn2");
      btn2.onclick = function () {
        console.log("Второй обработчик Товара 2 (onclick)");
      };
    </script>
  </body>
</html>
```

# 3. Объект `event` и его основные свойства

Когда происходит событие (например, клик мышью), браузер **создаёт специальный объект** — `event` (или e), который содержит всю информацию об этом событии. Этот объект передаётся обработчику событий.

## Основные свойства event:

- `type` — тип события (например, `"click"`, `"mouseenter"`, `"keydown"`).
- `target` — элемент, на котором произошло событие.
- `currentTarget` — элемент, на котором установлен обработчик.
- `clientX / clientY` — координаты курсора в момент события (по отношению к окну браузера).
- `pageX / pageY` — координаты курсора в момент события (по отношению ко всей странице).
- `preventDefault()` — метод, отменяющий действие по умолчанию.
- `stopPropagation()` — метод, останавливающий всплытие события.

## Пример:

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Пример работы с event</title>
    <style>
      .card {
        border: 1px solid #aaa;
        padding: 10px;
        margin: 10px;
        width: 200px;
        background-color: white;
      }

      .selected {
        background-color: lightblue;
      }
    </style>
  </head>
  <body>
    <div id="card1" class="card">Товар 1</div>
    <div id="card2" class="card">Товар 2</div>
    <div id="card3" class="card">Товар 3</div>

    <script>
      // Назначаем обработчики каждому элементу отдельно
      var card1 = document.getElementById("card1");
      var card2 = document.getElementById("card2");
      var card3 = document.getElementById("card3");

      function onCardClick(event) {
        // Получаем элемент, на который кликнули
        var clickedElement = event.target;

        // Меняем цвет фона
        clickedElement.style.backgroundColor = "lightblue";

        // Выводим информацию о событии
        console.log("Тип события:", event.type);
        console.log("Координаты мыши:", event.clientX, event.clientY);
        console.log(
          "На каком элементе произошло событие (event.target):",
          event.target
        );
        console.log(
          "На каком элементе обработчик (event.currentTarget):",
          event.currentTarget
        );
      }

      card1.addEventListener("click", onCardClick);
      card2.addEventListener("click", onCardClick);
      card3.addEventListener("click", onCardClick);
    </script>
  </body>
</html>
```

# 4. `event.target`

## Что такое `event.target`?

Свойство `event.target` ссылается на конкретный элемент, на котором произошло событие. Это может быть как сам элемент с обработчиком, так и его вложенный элемент, если пользователь взаимодействует именно с ним.

Это важно при работе с вложенными элементами: мы можем понять, на чём именно внутри элемента произошёл клик.

## Основные свойства элемента `event.target`

- `tagName` — имя тега (всегда в верхнем регистре).
- `id` — значение атрибута `id`.
- `className` — значение атрибута `class`.
- `textContent` — текстовое содержимое элемента.
- `style` — доступ к стилям элемента (например, `style.backgroundColor`).

## Пример:

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Пример event.target</title>
    <style>
      .card {
        border: 1px solid #aaa;
        padding: 10px;
        margin: 10px;
        width: 250px;
        background-color: white;
      }

      .card h3 {
        margin: 0;
      }

      .card p {
        margin: 5px 0;
      }
    </style>
  </head>
  <body>
    <div id="card1" class="card">
      <h3 class="title">Товар 1</h3>
      <p class="description">Описание товара</p>
      <button class="button">Купить</button>
    </div>

    <div id="card2" class="card">
      <h3 class="title">Товар 2</h3>
      <p class="description">Описание товара</p>
      <button class="button">Купить</button>
    </div>

    <script>
      var card1 = document.getElementById("card1");
      var card2 = document.getElementById("card2");

      function onCardClick(event) {
        // Показываем, на каком элементе внутри карточки произошёл клик
        const target = event.target;

        // Печатаем свойства
        console.log("Клик по элементу:", target.tagName);
        console.log("ID:", target.id);
        console.log("Класс:", target.className);
        console.log("Текст:", target.textContent);
        console.log(`===============================`);

        // Если клик был по кнопке, красим её
        if (target.tagName === "BUTTON") {
          target.style.backgroundColor = "green";
          target.style.color = "white";
        }

        // Если клик был по заголовку, красим заголовок
        if (target.tagName === "H3") {
          target.style.backgroundColor = "yellow";
        }
      }

      card1.addEventListener("click", onCardClick);
      card2.addEventListener("click", onCardClick);
    </script>
  </body>
</html>
```

- Событие вешается на всю карточку (`div.card`).
- Внутри карточки есть заголовок (`h3`), описание (`p`) и кнопка (`button`).
- При клике по разным элементам (`заголовок` или `кнопка`) поведение разное:
  - Заголовок подсвечивается жёлтым.
  - Кнопка становится зелёной с белым текстом.
- Это позволяет наглядно увидеть, что `event.target` — это тот вложенный элемент, куда кликнули, а не обязательно сам `.card`.

# 5. Что такое всплытие событий?

**Всплытие** (`bubbling`) — это механизм обработки событий, при котором событие сначала происходит на самом вложенном элементе, а затем передаётся вверх по дереву DOM до самого `document`.

Представь, как будто событие «всплывает» от нажатой кнопки вверх через обёртки и контейнеры, пока не дойдёт до самого верха.

## 🔸 Этапы прохождения события:

- **Клик по элементу**
- Событие сначала обрабатывается на том элементе, по которому кликнули (`event.target`)
- Затем оно всплывает: `родитель` → `родитель родителя` → `...` → `document`

## Пример:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Пример всплытия</title>
    <style>
      .card {
        border: 2px solid gray;
        padding: 10px;
        margin: 10px;
      }
      .button {
        padding: 5px 10px;
        background-color: lightgray;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="card" id="card">
      Карточка товара
      <button class="button" id="buyButton">Купить</button>
    </div>

    <script>
      document
        .getElementById("buyButton")
        .addEventListener("click", function (event) {
          console.log("Кнопка: Сработал click на кнопке");
        });

      document
        .getElementById("card")
        .addEventListener("click", function (event) {
          console.log("Карточка: Сработал click на карточке");
        });

      document.body.addEventListener("click", function (event) {
        console.log("BODY: Сработал click на body");
      });

      document.addEventListener("click", function (event) {
        console.log("DOCUMENT: Сработал click на document");
      });
    </script>
  </body>
</html>
```

## 🔍 Что произойдёт при клике на кнопку:

- Сработает обработчик на кнопке `→`
- Потом обработчик на `.card →`
- Потом на `body →`
- Потом на `document`

## 🔸 Как остановить всплытие?

Иногда мы **не хотим, чтобы событие шло выше**. Для этого используется метод:

```js
event.stopPropagation();
```

## Пример:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Пример всплытия</title>
    <style>
      body {
        font-family: sans-serif;
      }
      .card {
        border: 2px solid gray;
        padding: 15px;
        margin: 20px;
        width: 250px;
        background-color: white;
      }
      .button {
        padding: 8px 12px;
        background-color: lightgray;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="card" id="card">
      <p>Карточка товара</p>
      <button class="button" id="buyButton">Купить</button>
    </div>

    <script>
      // Обработчик на кнопке
      document
        .getElementById("buyButton")
        .addEventListener("click", function (event) {
          console.log("Кнопка: Сработал click на кнопке");

          // Раскомментируй эту строку, чтобы остановить всплытие:
          // event.stopPropagation();
        });

      // Обработчик на карточке
      document.getElementById("card").addEventListener("click", function () {
        console.log("Карточка: Сработал click на карточке");
      });

      // Обработчик на документе — для наглядности
      document.addEventListener("click", function () {
        console.log("DOCUMENT: Сработал click на document");
        document.body.style.backgroundColor = "#ffe";
        setTimeout(() => {
          document.body.style.backgroundColor = "white";
        }, 300);
      });
    </script>
  </body>
</html>
```

## Если оставить `event.stopPropagation()` закомментированным:

- Клик по кнопке вызывает:
  - Лог из кнопки
  - Лог из карточки
  - Лог из document
  - Изменение фона страницы

## Если раскомментировать `event.stopPropagation()`:

- Клик по кнопке вызывает:
  - Лог только из кнопки
  - Фон не меняется
  - Всплытие остановлено

# 6. События мыши: `click`, `mouseenter`, `mouseover`, `mouseleave`, `mouseout`

## Краткое описание событий:

| Событие      | Что делает                                     | Всплывает? |
| ------------ | ---------------------------------------------- | ---------- |
| `click`      | Срабатывает при клике мыши                     | ✅ Да      |
| `mouseenter` | Наведение мыши на элемент                      | ❌ Нет     |
| `mouseover`  | Наведение мыши на элемент или его **дочерний** | ✅ Да      |
| `mouseleave` | Уход мыши с элемента                           | ❌ Нет     |
| `mouseout`   | Уход мыши с элемента или его **дочернего**     | ✅ Да      |

## Когда использовать какое событие?

| Задача                                               | Событие                     | Почему                                    |
| ---------------------------------------------------- | --------------------------- | ----------------------------------------- |
| Подсветить элемент, когда мышь входит/выходит        | `mouseenter` / `mouseleave` | Чёткое поведение, без лишних срабатываний |
| Обработать все перемещения внутри и между элементами | `mouseover` / `mouseout`    | Нужно учитывать вложенные элементы        |
| Реакция на клик                                      | `click`                     | Универсально и понятно                    |
| Подсветка с возможностью всплытия                    | `mouseover`                 | Нужно использовать делегирование          |

## 🔸 Пример 1: `click` — клик по карточке

```html
<div id="cardClick" class="card">Нажми на меня</div>

<script>
  var cardClick = document.getElementById("cardClick");
  cardClick.addEventListener("click", function (event) {
    cardClick.style.backgroundColor = "lightgreen";
    console.log("Клик по карточке. Событие:", event.type);
  });
</script>
```

## 🔸 Пример 2: `mouseenter` vs `mouseover` и `mouseleave` vs `mouseout`

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>mouseenter vs mouseover</title>
    <style>
      body {
        font-family: sans-serif;
        display: flex;
        justify-content: center;
        gap: 70px;
        padding: 50px;
      }

      .card {
        display: flex;
        flex-direction: column;
        gap: 10px;
        border: 2px solid #333;
        background-color: #f1f1f1;
        border-radius: 10px;
        padding: 20px;
      }
    </style>
  </head>
  <body>
    <div class="card" id="card1">
      <h3>Карточка с <code>mouseover</code></h3>
      <button id="btn1">Кнопка</button>
    </div>

    <div class="card" id="card2">
      <h3>Карточка с <code>mouseenter</code></h3>
      <button id="btn2">Кнопка</button>
    </div>

    <script>
      const card1 = document.getElementById("card1");
      const card2 = document.getElementById("card2");
      card1.addEventListener("mouseenter", (event) => {
        console.log(`Курсор mouseenter на элементе ${event.target.id}`);
        event.target.style.backgroundColor = "aquamarine";
      });
      card2.addEventListener("mouseover", (event) => {
        console.log(`Курсор mouseover на элементе ${event.target.id}`);
        event.target.style.backgroundColor = "brown";
      });
      card1.addEventListener("mouseleave", (event) => {
        console.log(`Курсор mouseenter ушел с элемента ${event.target.id}`);
        event.target.style.backgroundColor = "white";
      });
      card2.addEventListener("mouseout", (event) => {
        console.log(`Курсор mouseover ушел с элемента ${event.target.id}`);
        event.target.style.backgroundColor = "white";
      });
    </script>
  </body>
</html>
```

## Пояснение:

### 🟦 Карточка 1 — `mouseenter` и `mouseleave`

- `mouseenter` **срабатывает один раз**, когда курсор заходит на карточку впервые, и не срабатывает, если курсор затем перемещается на кнопку внутри этой карточки.
- `mouseleave` **срабатывает только когда курсор полностью покидает карточку**, и не реагирует на переход с карточки на кнопку внутри неё.

> 🔎 Это поведение удобно, если вы хотите реагировать только на вход и выход с компонента целиком, игнорируя внутренние переходы.

### 🟥 Карточка 2 — `mouseover` и `mouseout`

- `mouseover` **срабатывает каждый раз, когда курсор заходит на саму карточку или на любой вложенный элемент** (в том числе кнопку).
- `mouseout` также **срабатывает каждый раз, когда курсор покидает элемент или его дочерние части** — например, при переходе с карточки на кнопку и обратно.

> 🔎 Это поведение полезно, если вам нужно отслеживать движение мыши внутри элемента, включая вложенные части.

## 📌 Поведение на практике

| Действие                          | Карточка 1 (`mouseenter`) | Карточка 2 (`mouseover`)  |
| --------------------------------- | ------------------------- | ------------------------- |
| Навёл мышку на карточку           | ✅ `mouseenter`           | ✅ `mouseover`            |
| Навёл мышку на кнопку внутри      | ❌                        | ✅ (ещё один `mouseover`) |
| Ушёл с кнопки обратно на карточку | ❌                        | ✅ (ещё один `mouseover`) |
| Увёл мышку с карточки полностью   | ✅ `mouseleave`           | ✅ `mouseout`             |

## 🎯 Вывод

- Используйте `mouseenter/mouseleave`, если вам нужно **одноразовое срабатывание при входе/выходе на родительский элемент**.
- Используйте `mouseover/mouseout`, если важно отслеживать **движение мыши внутри вложенной структуры** (например, при наведении на кнопки, ссылки и т.п.).

# 7. События жизненного цикла

**События жизненного цикла** позволяют **выполнять код в определённый момент загрузки** или закрытия страницы. Они важны, если:

- нужно что-то подготовить при загрузке (например, стилизовать карточки)
- нужно предупредить пользователя при закрытии страницы
- важно знать, загружены ли картинки и другие ресурсы

## Основные события:

| Событие                     | Когда срабатывает                                                  |
| --------------------------- | ------------------------------------------------------------------ |
| `document.DOMContentLoaded` | Когда загружен и разобран HTML, **без ожидания картинок**          |
| `window.load`               | Когда загружена вся страница, включая **картинки, стили, скрипты** |
| `window.beforeunload`       | Перед закрытием/обновлением страницы                               |
| `window.unload`             | При уходе со страницы (редко используется напрямую)                |

## 🔹 Что такое `window`?

`window` — это глобальный объект браузера, который представляет всю вкладку браузера.

Он содержит в себе:

- **всё содержимое веб-страницы**
- **все глобальные переменные**
- **все функции браузера** (включая таймеры, алерты и пр.)
- и, главное — **объект `document`**

## 🧱 Структура:

```scss
window
 ├── document         → HTML-документ на странице
 ├── console          → доступ к консоли
 ├── location         → URL страницы
 ├── alert(), prompt()→ встроенные функции
 ├── setTimeout(), setInterval()
 ├── ...
```

## 🔸 Что такое `document`?

`document` — это объект, который представляет `DOM-структуру страницы` (HTML).

Через `document` мы:

- ищем элементы (`getElementById`, `querySelector`)
- создаём, удаляем и изменяем теги
- навешиваем обработчики событий на элементы
- Если `window` — это комната целиком, то `document` — это объект "бумаги на столе", с которым мы работаем напрямую.

## 🔸 Почему используем `window` в примерах?

Некоторые события, такие как:

- `load`
- `beforeunload`
- `unload`
- `resize`, `scroll`, `blur`, `focus` и другие

относятся не к конкретному элементу, а ко всей вкладке.
**Поэтому такие события навешиваются на `window`** — он их "владелец".

## Пример:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Жизненный цикл DOM</title>
    <style>
      .card {
        border: 2px solid gray;
        padding: 15px;
        margin: 20px;
        width: 250px;
        background-color: white;
      }
      .loaded {
        background-color: lightgreen;
      }
      img {
        width: 100%;
        height: auto;
      }
    </style>
  </head>
  <body>
    <div class="card" id="productCard">
      <p>Карточка товара</p>
      <img
        id="productImage"
        src="https://via.placeholder.com/250x150"
        alt="Товар"
      />
    </div>

    <script>
      // =========================
      // ВАЖНО: window и document
      //
      // window — это вся вкладка браузера. Он "главный".
      // document — это HTML-документ внутри этой вкладки.
      //
      // Некоторые события (например, загрузка всех ресурсов, закрытие страницы)
      // относятся ко всей вкладке и назначаются через window.
      //
      // Работа с элементами страницы — через document.
      // =========================

      // DOMContentLoaded — HTML разобран, но картинки могут не загрузиться
      document.addEventListener("DOMContentLoaded", function () {
        console.log("DOMContentLoaded: DOM построен");
        document.getElementById("productCard").style.borderColor = "blue";
      });

      // load — когда ВСЁ загружено (включая изображения)
      window.addEventListener("load", function () {
        console.log("load: Полная загрузка завершена");
        document.getElementById("productCard").classList.add("loaded");
      });

      // beforeunload — перед закрытием вкладки
      window.addEventListener("beforeunload", function (event) {
        console.log("beforeunload: Пользователь уходит");
        event.preventDefault(); // требуется для срабатывания
        event.returnValue = ""; // браузер покажет стандартное предупреждение
      });

      // unload — после ухода со страницы
      window.addEventListener("unload", function () {
        console.log("unload: Страница выгружается");
        // Обычно здесь отправляют аналитику или очищают ресурсы
      });
    </script>
  </body>
</html>
```

## 🔹 Что делает `event.returnValue = ''`?

Это специальное поведение для события beforeunload, которое вызывается перед закрытием вкладки или обновлением страницы.

Установка `event.returnValue` — это способ сообщить браузеру, что пользователь должен подтвердить свой уход со страницы. Это помогает избежать потери данных,

например:

- незаполненная форма
- несохранённые изменения
- незавершённая покупка и т.д.

## 🔹 Почему event.returnValue = '', а не текст?

Исторически раньше можно было задать свой текст, например:

```js
event.returnValue = "Вы уверены, что хотите покинуть страницу?";
```

И браузер показывал именно это сообщение.

Но с 2016 года (стандарты HTML5 и безопасности) большинство современных браузеров:

- игнорируют пользовательский текст
- показывают своё стандартное предупреждение вида:
  - «Вы уверены, что хотите покинуть эту страницу? Несохранённые изменения могут быть потеряны.»
- Это связано с тем, что сайты начали злоупотреблять этим методом, мешая пользователям уходить.

## 🔹 Какие ещё способы реализовать поведение «не уходи»?

## ✅ Через returnValue = '' (стандартный способ):

```js
window.addEventListener("beforeunload", function (event) {
  event.preventDefault();
  event.returnValue = "";
});
```

## ⚠️ Устаревший способ (иногда всё ещё встречается):

```js
window.onbeforeunload = function () {
  return "Уверены, что хотите уйти?";
};
```

> ⚠️ Работает не во всех браузерах и не даёт указать кастомный текст.

## 💡 Когда использовать?

- Форма с данными, которые могут быть потеряны
- Сложная конфигурация товара (дизайнер, калькулятор)
- Ввод текста, который не сохраняется автоматически

# 8. Действие по умолчанию

Многие HTML-элементы выполняют стандартные действия, когда пользователь с ними взаимодействует.

## Примеры:

| Элемент                   | Действие по умолчанию            |
| ------------------------- | -------------------------------- |
| `<a href>`                | Переход по ссылке                |
| `<form>`                  | Отправка данных и перезагрузка   |
| `<button>`                | Отправка формы (если внутри неё) |
| `<input type="checkbox">` | Изменение состояния              |

## Иногда мы не хотим, чтобы происходило стандартное поведение.

Например:

- нужно выполнить проверку перед отправкой формы
- ссылка должна открываться в модальном окне, а не уходить на другую страницу
- клик по ссылке должен изменять товар, а не переходить на другую страницу

## Для этого используется:

```js
event.preventDefault();
```

## Пример: карточка товара с «Подробнее»

На карточке товара есть ссылка «Подробнее», но вместо перехода по ссылке мы показываем всплывающее описание товара (меняем стили), а действие по умолчанию отменяем.

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8" />
    <title>Отмена действия по умолчанию</title>
    <style>
      .card {
        border: 2px solid gray;
        padding: 15px;
        margin: 20px;
        width: 250px;
        position: relative;
      }
      .description {
        display: none;
        background-color: #f0f0f0;
        padding: 10px;
        margin-top: 10px;
        border: 1px dashed #aaa;
      }
      .description.visible {
        display: block;
      }
      a {
        color: blue;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div class="card" id="productCard">
      <p><strong>Товар:</strong> Супер-наушники</p>
      <a href="https://example.com/product/123" id="moreLink">Подробнее</a>
      <div class="description" id="desc">
        Высококачественные наушники с шумоподавлением. Акция до конца недели!
      </div>
    </div>

    <script>
      const link = document.getElementById("moreLink");
      const description = document.getElementById("desc");

      link.addEventListener("click", function (event) {
        event.preventDefault(); // отменяем переход по ссылке
        description.classList.toggle("visible"); // переключаем отображение описания
      });
    </script>
  </body>
</html>
```

## 🔍 Объяснение:

- По умолчанию клик по `<a href>` отправил бы пользователя на другой сайт.
- Мы отменили стандартное поведение с помощью `event.preventDefault()`.
- Вместо перехода отображаем или скрываем описание товара.
- Пример похож на реальную ситуацию на сайтах интернет-магазинов.

## Что делает эта строка `description.classList.toggle('visible');`?

## Пошагово:

- `description` — это переменная, которая содержит ссылку на HTML-элемент:

  ```html
  <div class="description" id="desc">...</div>
  ```

- `.classList` — это специальное свойство DOM-элемента, которое представляет список всех классов, указанных у элемента.

- `.toggle('visible')` — это метод, который:

  - добавляет класс visible, если его нет на элементе,
  - удаляет класс visible, если он уже есть.

## То есть:

> - 👉 если `description` скрыт (у него нет класса `visible`), строка добавит этот класс и сделает его видимым.
> - 👉 если `visible` уже есть — уберёт его, и элемент снова скроется.

# 9. Практические задания

## ✅ Задание 1

Изменить текст в элементе с `id="info"` при клике на кнопку.

```html
<p id="info">Это старый текст</p>
<button onclick="changeText()">Изменить текст</button>
```

## ✅ \* Задание 2

При клике на кнопку покрасить все элементы с классом `highlight` в зелёный цвет.

```html
<p class="highlight">Товар 1</p>
<p class="highlight">Товар 2</p>
<button onclick="highlightItems()">Подсветить</button>
```

## ✅ \* Задание 3

Использовать `addEventListener`, чтобы при наведении на товар подсвечивать его.

```html
<div
  class="product"
  style="border: 1px solid gray; padding: 10px; margin: 5px;"
>
  Товар А
</div>
<div
  class="product"
  style="border: 1px solid gray; padding: 10px; margin: 5px;"
>
  Товар B
</div>
```

## ✅ Задание 4

Показать `tagName` и `textContent` элемента, по которому кликнули.

```html
<div onclick="showInfo(event)" style="cursor: pointer;">
  <p>Нажми сюда</p>
</div>
```

## ✅ Задание 5

Показать, как работает всплытие. Родитель и дочерний блок реагируют на `клик`.

```html
<div style="padding: 20px; background: #ddd;">
  Родитель
  <div style="padding: 10px; background: #ccc;">Дочерний</div>
</div>
```

## ✅ Задание 6

Остановить всплытие события, чтобы срабатывал только внутренний блок.

```html
<div style="padding: 20px; background: #ddd;">
  Родитель
  <div style="padding: 10px; background: #ccc;">
    Кликни — сработает только этот
  </div>
</div>
```

## ✅ Задание 7

При полной загрузке документа (`DOMContentLoaded`) изменить цвет фона карточки. Чтобы эмулировать долгую загрузку перед срабатыванием `DOMContentLoaded`, можно добавить искусственную задержку с `setTimeout`

```html
<div id="card" style="padding: 20px; border: 1px solid black;">Карточка</div>
```

## ✅ Задание 8

Вывести сообщение при попытке перезагрузить вкладку.

```html
<textarea placeholder="Введите заметку..."></textarea>
```

## ✅ \* Задание 9

При клике на ссылку "Подробнее" не переходить, а показать текст.

```html
<a href="https://example.com" onclick="showDetails(event)">Подробнее</a>
<p id="details" style="display: none;">
  Это дополнительная информация о товаре.
</p>
```
