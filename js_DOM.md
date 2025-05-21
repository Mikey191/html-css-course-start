# 1. Что такое `Document Object Model` (DOM)?

## 🔹 Введение: от HTML к DOM

- HTML — язык разметки, изначально предназначенный для создания электронных документов (учебников, статей и т.п.).
- Его структура напоминала типографскую: блоки, заголовки, абзацы и т.д.
- С развитием веба требования изменились: страницы стали интерактивными, а HTML стал основой для создания интерфейсов с динамическим содержанием.

## 🔹 Статическая верстка vs динамический интерфейс

- Современные страницы реагируют на:
  - действия пользователя (клики, наведение и т.д.),
  - сетевые события (загрузка данных),
  - системные события (изменение размера окна, таймеры).
- Появились новые HTML-элементы для структуризации: `<nav>`, `<aside>`, `<section>`, `<article>` и др.

## 🔹 От разметки к объектам

- Элементы HTML на странице превращаются в программные объекты, которые можно:
  - изменять «на лету» (изменить текст, цвет, размер),
  - удалять или добавлять,
  - отслеживать и обрабатывать события.
- Браузер превращается из «сборщика» страницы в динамическую систему управления контентом.

## 🔹 Проблема несовместимости браузеров

- Из-за стремления производителей создать «уникальные» браузеры появились:
  - различия в поведении `JavaScript`,
  - несовпадения в интерпретации `HTML/CSS`.
- Это вызывало сложности у разработчиков: код, работающий в одном браузере, не работал в другом.

## 🔹 Роль DOM

- DOM (Document Object Model) — официальный стандарт W3C, описывающий:

  - как HTML-документ должен быть представлен в виде объекта,
  - как обращаться к элементам страницы,
  - какие методы и свойства должны быть у этих объектов,
  - какие события они должны уметь обрабатывать.

- 🔸 `DOM = модель`, по которой браузеры создают программное представление HTML-страницы.
- 🔸 Это структурированный, управляемый объектный интерфейс к содержимому страницы.

## 🧠 Важно понять:

- DOM — не технология, а `интерфейс` (API) и набор стандартов.
- Он позволяет использовать JavaScript для взаимодействия со страницей.

# 2. Отличия `DOM` от `BOM`

## 🔹 DOM (Document Object Model)

- Представляет структуру и содержимое веб-страницы.
- Объекты DOM соответствуют HTML-элементам: `<div>`, `<ul>`, `<a>`, `<img>` и т.д.
- Все элементы доступны через главный объект document.
- Изменения в DOM → немедленные визуальные изменения страницы.

Пример:

```js
document.body.style.backgroundColor = "lightblue"; // Меняет фон всей страницы
```

## 🔹 BOM (Browser Object Model)

- Представляет объекты браузера и взаимодействие с операционной системой.
- Главный объект BOM — window.
- Через BOM можно:
  - управлять вкладками и окнами,
  - получать информацию об экране и геолокации,
  - управлять историей (`history`), адресной строкой (`location`), временем (`setTimeout`) и т.д.

Пример:

```js
window.open("https://example.com"); // Открытие новой вкладки
```

## 🔹 Структурные различия

| Признак                 | DOM                              | BOM                                       |
| ----------------------- | -------------------------------- | ----------------------------------------- |
| Главный объект          | `document`                       | `window`                                  |
| Отвечает за             | Содержимое HTML-документа        | Окружение страницы (браузер)              |
| Изменения отражаются    | Непосредственно на веб-странице  | На окружении, а не содержимом             |
| Стандартизация          | Жёстко определён стандартами W3C | Частично стандартизирована (ECMA, WHATWG) |
| Зависимость от браузера | Минимальна                       | Заметна: поведение может отличаться       |

## 🔹 Взаимосвязь DOM и BOM

- DOM — часть BOM.
- window.document — доступ к объекту DOM через BOM.
- DOM нельзя использовать без BOM: HTML-страница не существует вне браузера.

Пример:

```js
console.log(window.document.title); // Выведет заголовок текущей страницы
```

## 🔹 Общие черты

Обе модели:

- объектно-ориентированы (все элементы — объекты),
- иерархичны (родитель — потомки),
- представляют собой деревья объектов, где каждый узел может содержать другие.

```text
window
└── document
    ├── html
    │   ├── head
    │   └── body
    │       └── div
```

## 📌 Вывод

- DOM позволяет управлять содержимым страницы — "что видит пользователь".
- BOM управляет окружением браузера — "как работает браузер и ОС".
- Понимание различий между DOM и BOM критически важно для JavaScript-разработчика: одни методы работают с деревом документа, другие — с функциями браузера.

# 3. Представление HTML-документа в виде дерева

В DOM каждый элемент рассматривается как узел (node). DOM-структура строится в виде дерева, где узлы могут иметь:

- дочерние элементы — доступны через коллекцию `childNodes`;
- родительский элемент — доступен через свойство `parentNode`;
- индекс дочернего узла — `childNodes[n]`;
- общее число дочерних узлов — `childNodes.length`.
- Корневой узел документа доступен по адресу: `document.documentElement`.

## Исследование `DOM` на практике

Создадим следующий HTML-документ:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>HTML DOM structure</title>
    <style>
      #d1 {
        border: 2px solid navy;
        height: 150px;
        margin: 20px;
        padding: 15px;
        width: 400px;
      }
      #d2 {
        border: 1px dashed navy;
        float: right;
        height: 140px;
        overflow: auto;
        padding: 5px;
        width: 200px;
      }
    </style>
  </head>
  <body>
    <div id="d1">
      <div id="d2"></div>
      <h1>Header</h1>
      <p>paragraph<br /><span>Span</span></p>
      <button onclick="getStructure()">Get structure</button>
    </div>
    <script>
      function getStructure() {
        var c = document.documentElement.childNodes;
        var msg = "";
        for (let i = 0; i < c.length; ++i) {
          let d = c[i];
          msg += i + 1 + ". " + d.tagName + " (" + d.nodeName + ")<br>";
        }
        window.d2.innerHTML = msg;
      }
    </script>
  </body>
</html>
```

### Визуализация структуры DOM (1 уровень вложенности)

После запуска функции `getStructure()` выведется список дочерних узлов `document.documentElement.` Если между тегами `<head>` и `<body>` есть перевод строки, результат будет следующим:

```markdown
1. HEAD (HEAD)
2. undefined (#text)
3. BODY (BODY)
```

### Схематическое дерево DOM:

```less
document
└── html (documentElement)
    ├── head
    ├── #text (разрыв строки!)
    └── body
```

Чтобы убрать "лишний" текстовый узел (`#text`), следует записать теги `<head>` и `<body>` без переноса строки:

```html
</head><body>
```

После этого дерево DOM упростится:

```text
document
└── html
    ├── head
    └── body
```

## Раскрытие второго уровня дерева

Модифицируем скрипт, добавив вложенный цикл для отображения дочерних узлов каждого элемента:

```js
function getStructure() {
  var c = document.documentElement.childNodes;
  var msg = "";
  for (let i = 0; i < c.length; ++i) {
    let d = c[i];
    msg += i + 1 + ". " + d.tagName + " (" + d.nodeName + ")<br>";
    if (d.hasChildNodes()) {
      let e = d.childNodes;
      for (let j = 0; j < e.length; ++j) {
        let f = e[j];
        msg +=
          "&nbsp;&nbsp;&nbsp;" +
          (j + 1) +
          ". " +
          f.tagName +
          " (" +
          f.nodeName +
          ")<br>";
      }
    }
  }
  window.d2.innerHTML = msg;
}
```

#### 🔹 Что такое &nbsp;?

- `&nbsp;` расшифровывается как `non-breaking space` (неразрывный пробел).
- Это символ пробела, который не может быть разорван при переносе строки.
- Используется, когда нужно сохранить фиксированный отступ или пробелы в HTML (обычные пробелы в строках HTML сворачиваются в один).

### Схема 2 уровней:

```less
document
└── html
    ├── head
    │   ├── #text
    │   └── meta
    └── body
        ├── div#d1
        │   ├── div#d2
        │   ├── h1
        │   ├── p
        │   └── button
```

## Раскрытие третьего уровня

Добавим третий цикл в скрипт, чтобы увидеть ещё глубже вложенные элементы, например, элементы внутри параграфа `<p>`:

```js
function getStructure() {
  let c = document.documentElement.childNodes;
  let msg = "";
  for (let i = 0; i < c.length; ++i) {
    let d = c[i];
    msg += i + 1 + ". " + d.tagName + " (" + d.nodeName + ")<br>";
    if (d.hasChildNodes()) {
      let e = d.childNodes;
      for (let j = 0; j < e.length; ++j) {
        let f = e[j];
        msg +=
          "&nbsp;&nbsp;&nbsp;" +
          (j + 1) +
          ". " +
          f.tagName +
          " (" +
          f.nodeName +
          ")<br>";
        if (f.hasChildNodes()) {
          let g = f.childNodes;
          for (let k = 0; k < g.length; ++k) {
            let h = g[k];
            msg +=
              "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;" +
              (k + 1) +
              ". " +
              h.tagName +
              " (" +
              h.nodeName +
              ")<br>";
          }
        }
      }
    }
  }
  window.d2.innerHTML = msg;
}
```

### Схема 3 уровней:

```less
document
└── html
    └── body
        └── div#d1
            ├── div#d2
            ├── h1
                └── #text (Header)
            ├── p
                ├── #text (paragraph)
                ├── br
                └── span
                    └── #text (Span)
            └── button
                └── #text (Get structure)
```

## Выводы:

- DOM отображает HTML-документ в виде дерева, где каждый элемент — узел.
- Текст между тегами (включая пробелы и переводы строки) тоже становится узлом типа `#text`.
- Глубокая вложенность DOM легко отображается при помощи вложенных циклов.
- Упрощение разметки (удаление лишних пробелов и переводов строк) делает дерево DOM чище и удобнее для анализа.

# 4. Объекты модели DOM. Иерархия узлов

Вернёмся к примеру, который мы рассматривали в первом пункте при знакомстве с DOM, и разберём его более детально. Он иллюстрирует типичную структуру DOM с вложенными элементами и показывает, как устроена иерархия узлов.

## 📌 Пример HTML-разметки

HTML-фрагмент представляет собой ненумерованный список `<ul> `из трёх элементов `<li>`, где второй элемент имеет вложенные дочерние элементы:

```html
<ul>
  <li>first element</li>
  <li>
    second element
    <span>child Node 0</span>
    <a>child node 1</a>
    <p>child node 2</p>
  </li>
  <li>third element</li>
</ul>
```

> Важно: пробелы и переводы строк в HTML также учитываются как текстовые узлы в DOM. Поэтому перед исследованием структуры желательно удалить все ненужные отступы и переводы строк.

## 🌳 Структура DOM-дерева

DOM-дерево для приведённой структуры будет выглядеть следующим образом:

```less
ul
├── li ("first element")
├── li ("second element")
│   ├── #text (пробел после "second element")
│   ├── span ("child Node 0")
│   ├── a ("child node 1")
│   └── p ("child node 2")
└── li ("third element")
```

## 🔁 Три уровня отношений между узлами DOM

DOM-узлы образуют иерархическую структуру. Взаимосвязи между ними можно представить в виде трёх основных типов:

1. Родительский узел (`parentNode`)

- Позволяет подниматься вверх по дереву DOM.
- Пример:

```js
ul.parentNode; // вернёт <body>
```

2. Соседние узлы (`siblings`)

- Находятся на одном уровне иерархии.
- Переход к ним осуществляется с помощью:
  - `nextSibling` — следующий сосед,
  - `previousSibling` — предыдущий сосед.
- Пример:

```js
l1.nextSibling; // вернёт следующий <li>
```

3. Дочерние узлы (`childNodes`)

- Перемещение вниз по дереву.
- Доступ к ним возможен:
  - Через коллекцию: `childNodes[index]`,
  - Через указатели: `firstChild`, `lastChild`,
  - Переходами между соседями: `nextSibling`, `previousSibling`.

## 🛠 Практическое исследование DOM-иерархии

### 🔧 Подготовка

- Создайте новый HTML-файл.
- Вставьте в него приведённый выше список `<ul>`.
- Удалите все лишние пробелы и разрывы строк между тегами (иначе будут добавлены текстовые узлы `#text`).

### 🔍 Шаг за шагом в консоли разработчика

1. Получим тело документа:

```js
body = document.documentElement.childNodes[1];
```

→ Должен появиться тег `<body>`.

2. Получим дочерние узлы `body`:

```js
body.childNodes;
```

→ Должен быть один элемент: `<ul>`.

> Если в коллекции больше одного узла — не удалены все пробелы/переводы строк.

3. Сохраним список в переменную:

```js
ul = body.childNodes[0];
```

Посмотрим дочерние узлы `<ul>`:

```js
ul.childNodes;
```

→ Ожидаемая коллекция: три элемента `<li>`.

### \* Может нужна модификация:

```js
body = document.documentElement.childNodes[2];
ul = body.childNodes[1];
ul.childNodes;
```

### 🧭 Исследование связей между узлами

#### 📌 Родительский узел

```js
ul.parentNode; // <body>
ul.parentNode === body; // true
```

#### 📌 Первый элемент списка

```js
l1 = ul.firstChild;
l1; // <li>first element</li>
```

#### 📌 Следующие соседи

```js
l1.nextSibling; // <li> second element...</li>
l1.nextSibling.nextSibling; // <li>third element</li>
```

#### 📌 Последний дочерний элемент

```js
ul.lastChild; // <li>third element</li>
```

#### 📌 Предыдущий сосед последнего элемента

```js
ul.lastChild.previousSibling; // <li>second element...</li>
```

#### 📌 Родитель первого элемента

```js
l1.parentNode === ul; // true
l1.parentNode === body; // false
```

### 📚 Заключение

- DOM-иерархия организована по принципу дерева: каждый элемент — узел, имеющий родителя, соседей и, возможно, детей.
- Текст между тегами становится `#text-узлами`.
- Для корректного анализа структуры удаляйте лишние пробелы и переводы строк.
- Используйте свойства `parentNode`, `childNodes`, `firstChild`, `lastChild`, `nextSibling`, `previousSibling` для перемещения по DOM.

# 5. Свойства и методы модели DOM. Модель событий DOM

DOM (Document Object Model) — это не только структура документа, описывающая его в виде дерева, но и набор средств для:

- изменения содержимого страницы;
- реагирования на действия пользователя и других событий;
- интерактивного взаимодействия между компонентами страницы.

## 1. Модули DOM по стандарту W3C

DOM состоит из нескольких стандартных модулей, каждый из которых отвечает за определённую функциональность:

- `Core` — основные определения: базовые интерфейсы, коды ошибок, объект document.
- `HTML` — интерфейсы и структуры, специфичные для HTML-документов.
- `XML` — элементы для работы с XML-документами.
- `Validation` — проверка корректности модификаций.
- `XPath` — интерфейс для навигации по XML-документу.
- `Traversal` — методы итерации и навигации по дереву элементов.
- `Range` — логическое выделение фрагментов документа.
- `LS` (Load and Save) — загрузка, фильтрация и сохранение XML.
- `Views` — управление представлениями документа.
- `StyleSheets` — доступ к таблицам стилей.
- `CSS` — работа с каскадными стилями.
- `Events` — система обработки событий (языко- и платформонезависимая).

## 2. Событийно-ориентированная модель

### Что такое событие?

Событие — это любое действие, которое может произойти в браузере: клик мышью, нажатие клавиши, загрузка страницы, изменение размера окна и пр.

Появление событийной модели связано с графическими интерфейсами: каждый объект имеет обработчики событий, запускаемые при наступлении соответствующего события (например, клик мыши, ввод текста и т.д.).

Система событий работает как очередь сообщений, в которую попадают события от пользователя, и далее они направляются нужному объекту на странице.

### Пример обработки событий на примитивном уровне

Когда пользователь нажимает на экран:

- ОС генерирует событие — например: «левая кнопка мыши нажата в точке `x=151`, `y=418`».
- Система определяет активное окно (браузер).
- Далее определяется DOM-элемент в этой точке.
- Срабатывает механизм всплытия события (event propagation):
- Сначала событие направляется самому «внешнему» элементу (находящемуся сверху в точке клика).
- Если у него нет обработчика, событие «всплывает» вверх по DOM-иерархии к родителю, затем к следующему родителю и так далее.
- Если никто не обработал событие, оно уходит в body и игнорируется.

> ⚠️ Понимание всплытия событий важно: вложенные элементы могут перехватывать события друг друга.

### Создание обработчиков событий

В JavaScript существуют два основных способа привязки обработчиков событий:

#### ✅ Способ 1: `HTML-атрибут`

```html
<div onclick="alert('Click event handled')">Press me</div>
```

- Плюсы:
  - Хорошо видно, какие события обрабатываются.
  - Удобно при создании небольших модулей, которые можно копировать.
- Минусы:
  - Трудно сопровождать при работе в команде.
  - HTML смешивается с JavaScript.

#### ✅ Способ 2: Метод `addEventListener`

```html
<div id="btn">Press me</div>
<script>
  btn.addEventListener("click", function () {
    alert("Click event handled");
  });
</script>
```

- Плюсы:
  - Код разделён: HTML — отдельно, логика — отдельно.
  - Удобно в больших проектах и при командной разработке.
  - Проще кешировать JS-файлы.
- Минусы:
  - Требуется синхронизировать id-шники и логику отдельно.
  - Хуже читаемость при разнесённом коде.

#### Вывод:

- **Первый способ — хорош для изолированных компонентов или быстрого прототипирования**.
- **Второй способ — предпочтителен для масштабируемых решений**.

### Объект `event`

Каждому обработчику при вызове автоматически передаётся объект `event`, содержащий информацию о произошедшем событии:

```javascript
btn.addEventListener("click", function (event) {
  console.log(event.type); // "click"
  console.log(event.target); // элемент, на котором произошло событие
});
```

Если данные не нужны, параметр можно не указывать:

```javascript
btn.addEventListener("click", function () {
  alert("Click!");
});
```

## 3. События мыши и обработка параметров события

### 🔍 Исследуем работу событий мыши

Создайте HTML-файл:

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Mouse events</title>
  </head>
  <body>
    X: <span id="coordX"></span><br />
    Y: <span id="coordY"></span>

    <script>
      // Обработчик движения мыши
      document.onmousemove = function (e) {
        coordX.innerHTML = e.pageX;
        coordY.innerHTML = e.pageY;
      };

      // При нажатии кнопки мыши увеличиваем размер текста
      document.onmousedown = function () {
        coordX.style.fontSize = "x-large";
        coordY.style.fontSize = "x-large";
      };

      // При отпускании кнопки мыши возвращаем размер обратно
      document.onmouseup = function () {
        coordX.style.fontSize = "medium";
        coordY.style.fontSize = "medium";
      };
    </script>
  </body>
</html>
```

### 📝 Разбор кода

#### ✅ Способ назначения обработчиков

- Используется альтернатива addEventListener — назначение обработчиков через свойства on....
- Обработчики навешиваются на объект document:
  - `onmousemove` — перемещение мыши
  - `onmousedown` — нажатие кнопки мыши
  - `onmouseup` — отпускание кнопки

#### ✅ Объект события `e`

- Только в обработчике mousemove явно указан параметр e.
- Через `e.pageX` и `e.pageY` получаем координаты указателя мыши.
- Эти значения записываются в соответствующие `<span>-элементы`.

#### ✅ Изменение стилей

- **При нажатии** — увеличивается шрифт координат.
- **При отпускании** — шрифт возвращается к обычному.

## 🖱️ Обработка различных кнопок мыши

По умолчанию событие `mousedown` реагирует на все кнопки мыши, включая нажатие на колесо.

Чтобы реагировать только на левую кнопку, используем свойство e.which:

```js
document.onmousedown = function (e) {
  if (e.which === 1) {
    // 1 — левая кнопка
    coordX.style.fontSize = "x-large";
    coordY.style.fontSize = "x-large";
  }
};
```

| Значение `e.which` | Кнопка мыши      |
| ------------------ | ---------------- |
| `1`                | Левая            |
| `2`                | Средняя (колесо) |
| `3`                | Правая           |

## 4. 🧭 Всплытие событий (Event Bubbling)

Создайте новый HTML-файл

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Events propagation</title>
    <style>
      #div1 {
        background-color: tomato;
        border: 1px solid red;
        height: 100px;
        width: 100px;
      }
      #div2 {
        background-color: lime;
        height: 60px;
        width: 60px;
        margin: 20px;
      }
    </style>
  </head>
  <body>
    <div id="div1">
      <div id="div2"></div>
    </div>

    <script>
      div1.addEventListener("click", function () {
        console.log("Click on div1");
      });

      div2.addEventListener("click", function () {
        console.log("Click on div2");
      });

      document.addEventListener("click", function () {
        console.log("Click on document");
      });
    </script>
  </body>
</html>
```

### 🎯 Что демонстрирует пример:

Вложенные элементы `div2` внутри `div1`, и все они имеют свои обработчики `click`.

При клике на `div2` срабатывают обработчики всех родительских элементов вплоть до `document`.

### 🔁 Всплытие

Событие "всплывает" от самого вложенного элемента вверх по иерархии:

- `div2`
- `div1`
- `document`

#### 📌 В консоли вы увидите:

```nginx
Click on div2
Click on div1
Click on document
```

### ❗Важно:

Чтобы остановить всплытие, можно использовать метод `e.stopPropagation()` в обработчике.

### Пример:

```js
div2.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("Click only on div2");
});
```

## 5. 🧲 Реализация `Drag-and-Drop` (Начальный уровень)

`Drag-and-drop` (перетаскивание) — это технология, позволяющая пользователям перемещать элементы на веб-странице с помощью мыши, тачпада или сенсорного экрана.

Этот метод взаимодействия включает три основных действия: захват (`drag`), перемещение и отпускание (`drop`) элемента на новое место или поверх другого элемента интерфейса.

### 🧠 Идея:

- При нажатии (`mousedown`) на элемент → начинаем перетаскивание.
- При движении мыши (`mousemove`) → если перетаскивание активно, перемещаем блок.
- При отпускании кнопки (`mouseup`) → завершаем перетаскивание.

### html

```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Drag-and-Drop</title>
    <style>
      * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
      }
      body {
        position: relative;
      }
      #div1 {
        background-color: tomato;
        border: 1px solid red;
        border-radius: 50%;
        height: 100px;
        width: 100px;
        position: absolute;
      }
    </style>
  </head>
  <body>
    <div id="div1"></div>
    <script>
      let isDrag = false;

      div1.addEventListener("mousedown", function () {
        isDrag = true;
      });

      document.addEventListener("mouseup", function () {
        isDrag = false;
      });

      document.addEventListener("mousemove", function (e) {
        if (isDrag) {
          div1.style.left = e.pageX + "px";
          div1.style.top = e.pageY + "px";
        }
      });
    </script>
  </body>
</html>
```

### 🟠 Почему обработчики mouseup и mousemove на document?

Потому что при быстром перемещении мышь может выйти за пределы блока, и тогда он перестанет получать события. `document` — гарантированный получатель.

### 📏 Геометрия и кликабельность

- Хотя блок выглядит как круг (через `border-radius`), на самом деле он остается квадратным по размерам.
- События мыши обрабатываются только в видимой (закрашенной) части, то есть в круге, а не по всему квадрату.

### 🎯 Центрирование блока по указателю мыши

При перетаскивании блок «уходит» от курсора, т.к. позиционируется по верхнему левому углу.

#### 🔧 Исправим:

```javascript
div1.style.left = e.pageX - 50 + "px";
div1.style.top = e.pageY - 50 + "px";
```

> 📌 Поскольку блок `100×100 пикселей`, смещение на `-50` позиционирует его по центру указателя.

### 🎮 Ещё лучше: динамическое смещение

#### Проблема:

- курсор всегда **"прилипает" к центру блока**, независимо от места клика → создаётся рывок при начале движения.

#### Решение. Дополнить самостоятельно:

- сохранять смещение курсора от угла блока при `mousedown` и применять его в `mousemove`.
- дополните обработчик `mousedown` сохранением `offsetX/offsetY`
- применить их при `mousemove` вместо фиксированных `50`.

## 6. Изменение дерева DOM

`DOM` (Document Object Model) позволяет не только читать структуру HTML-документа, но и изменять её: **добавлять**, **удалять** или **перемещать** узлы дерева.

### 🔧 Основные методы изменения DOM

Эти методы доступны у любого DOM-узла и работают с его дочерними элементами:

| Метод                  | Описание                                           |
| ---------------------- | -------------------------------------------------- |
| `removeChild(e)`       | Удаляет дочерний узел `e`.                         |
| `appendChild(e)`       | Добавляет узел `e` в конец списка дочерних.        |
| `insertBefore(e1, e2)` | Вставляет `e1` перед `e2` в списке дочерних узлов. |

> 👉 Важно: чтобы управлять дочерними элементами, необходимо сначала получить сам родительский узел.

### 🛠 Создание новых элементов

Для добавления новых узлов их необходимо создать:

```js
let elem = document.createElement("tagName");
```

- `document.createElement("p")` создаёт элемент `<p>`.
- Тег указывается строкой без угловых скобок `< >`.
- Кавычки могут быть как двойные `"`, так и одинарные `'`.

### 📄 Пример: добавление элементов в список

```html
<ul id="list">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
  <li>Item 4</li>
</ul>

<button onclick="addItem()">Add item</button>
<button onclick="insertItem()">Insert item</button>

<script>
  function addItem() {
    const newItem = document.createElement("li");
    newItem.innerText = "New item";
    list.appendChild(newItem);
  }

  function insertItem() {
    const firstItem = list.childNodes[0];
    const newItem = document.createElement("li");
    newItem.innerText = "New item";
    list.insertBefore(newItem, firstItem);
  }
</script>
```

#### 📌 Результат:

- Кнопка `Add item` — добавляет элемент в конец.
- Кнопка `Insert item` — вставляет в начало списка.

### 🗑 Удаление второго элемента списка

Удаление усложняется тем, что `childNodes` содержит не только элементы, но и текстовые узлы (переносы строк, пробелы). Поэтому второй `<li>` может быть не под индексом `[1]`.

#### 🔍 Решение: учитывать только `<li>`

Добавим кнопку и функцию:

```html
<button onclick="removeItem()">Remove second item</button>

<script>
  function removeItem() {
    let n = 0;
    let element2 = null;

    for (const element of list.childNodes) {
      if (element.tagName === "LI") {
        n++;
        if (n === 2) {
          element2 = element;
          break;
        }
      }
    }

    if (element2) {
      list.removeChild(element2);
    }
  }
</script>
```

#### 📝 Примечание:

- `tagName` всегда возвращает имя тега в верхнем регистре (например, `"LI"`).
- Используем `for...of` для перебора всех узлов.
- Удаление происходит только если найден второй элемент `<li>`.

## 7. 🧲 Перетаскивание элементов списка (Drag-and-Drop)

### 🧩 План реализации drag-and-drop квадратиков

### 1. Создание глобальных переменных

- `container` — DOM-элемент-контейнер, в котором находятся квадраты.
- `dragged` — элемент, который в данный момент перетаскивается.
- `phantom` — клон перетаскиваемого элемента, следящий за курсором.
- `isDragging` — флаг, обозначающий, происходит ли сейчас перетаскивание.

### 2. Функция для движения фантома movePhantom(x, y)

- Устанавливает фантомному элементу координаты `left` и `top` по положению курсора.
- Учитывает смещение центра квадрата (отнимаем 50px, т.к. квадрат 100×100px).

### 3. Обработчик `mousedown` на контейнере

**Цель**: подготовить всё для начала перетаскивания.

**Пошагово**:

- Проверяем, кликнули ли по элементу с классом `.square`. Если нет — `return`.
- Сохраняем `e.target` в переменную `dragged`.
- Меняем прозрачность перетаскиваемого элемента (`opacity = 0.5`).
- Создаём фантом:
  - Клонируем элемент: `dragged.cloneNode(true)`
  - Добавляем ему класс `.phantom`
  - Добавляем в `body`, чтобы он не ограничивался контейнером.
- Устанавливаем флаг `isDragging = true`.
- Вызываем movePhantom(`e.pageX`, `e.pageY`) для установки стартовой позиции фантома.

### 4. Обработчик mousemove на всём документе

**Цель**: обновлять позицию фантома в соответствии с движением мыши.

**Пошагово**:

- Проверка: если `!isDragging || !phantom` — прекращаем выполнение.
- Обновляем координаты фантома с помощью movePhantom(`e.pageX`, `e.pageY`).

### 5. Обработчик mouseup на всём документе

**Цель**: завершить перетаскивание и, при необходимости, поменять элементы местами.

**Пошагово**:

- Проверка: если `!isDragging || !phantom` — ничего не делаем.
- Прячем фантом (`phantom.style.display = "none"`), чтобы корректно определить элемент под курсором.
- Сохраняем `e.target` в `target`.
- Показываем фантом обратно.
- Проверяем, что:
  - `target` существует.
  - `target.classList.contains("square")`
  - `target !== dragged` (иначе перетаскиваем сам в себя).
- Если все условия выполнены:
  - Получаем все дочерние элементы контейнера:
  - `const children = Array.from(container.children)`
  - Находим индекс `dragged` и `target`.
  - Удаляем `dragged` из DOM.
  - В зависимости от положения:
    - Если `draggedIndex < targetIndex`: вставляем после `target`.
    - Иначе — перед `target`.
- Завершаем перетаскивание:
  - Восстанавливаем прозрачность `dragged`.
  - Удаляем phantom из DOM.
  - Очищаем все вспомогательные переменные.

### 6. Готовый результат с комментариями

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Drag and Drop Squares</title>
    <style>
      body {
        margin: 0;
        height: 100vh;
        display: flex;
        align-items: center;
        justify-content: center;
        background: #f0f0f0;
        user-select: none;
      }
      .container {
        display: flex;
        gap: 20px;
      }
      .square {
        width: 100px;
        height: 100px;
        border-radius: 12px;
        cursor: grab;
        transition: transform 0.2s;
      }
      .phantom {
        position: absolute;
        pointer-events: none;
        opacity: 0.5;
        width: 100px;
        height: 100px;
        border-radius: 12px;
      }
    </style>
  </head>
  <body>
    <div class="container" id="squareContainer">
      <div class="square" style="background-color: red"></div>
      <div class="square" style="background-color: green"></div>
      <div class="square" style="background-color: blue"></div>
      <div class="square" style="background-color: orange"></div>
    </div>

    <script>
      const container = document.getElementById("squareContainer");

      let dragged = null; // переменная для перетаскиваемого элемента
      let phantom = null; // переменная для фантома
      let isDragging = false; // флаг для отслеживания перетаскивания

      // функция для движения фантома
      function movePhantom(x, y) {
        phantom.style.left = x - 50 + "px"; // установить координату x
        phantom.style.top = y - 50 + "px"; // установить координату y
      }

      // обработка события mousedown
      container.addEventListener("mousedown", (e) => {
        // проверка на клик по элементу с классом square
        if (!e.target.classList.contains("square")) return;

        dragged = e.target; // в переменную dragged помещаем элемент, по которому кликнули
        dragged.style.opacity = "0.5"; // делаем этот элемент полупрозрачным

        // Создаем фантом
        phantom = dragged.cloneNode(true); // метод для глубокого копирования элемента
        phantom.classList.add("phantom"); // добавление класса phantom к клонированному элементу
        document.body.appendChild(phantom); // добавляем к body кланированный элемент

        isDragging = true; // устанавливаем флаг в true
        movePhantom(e.pageX, e.pageY); // вызываем функцию движения передавая в нее актуальные координаты
      });

      // обработка события mousemove
      document.addEventListener("mousemove", (e) => {
        // проверка на существование isDragging и phantom
        if (!isDragging || !phantom) return;

        movePhantom(e.pageX, e.pageY); // вызываем функцию движения
      });

      // обработка события mouseup
      document.addEventListener("mouseup", (e) => {
        // проверка на существование isDragging и phantom
        if (!isDragging || !phantom) return;

        phantom.style.display = "none"; // прячем фантом
        const target = e.target; // определить элемент под курсором
        phantom.style.display = "block"; // показываем фантом

        // Если отпустили на другой квадрат
        // Проверка на квадрат, на котором сработало событие mouseup
        if (
          target &&
          target.classList.contains("square") &&
          target !== dragged
        ) {
          const children = Array.from(container.children); // Создаем массив дочерних элементов контейнера
          const draggedIndex = children.indexOf(dragged); // Находим индекс dragged
          const targetIndex = children.indexOf(target); // Находим индекс target

          // Удаляем перетаскиваемый
          container.removeChild(dragged); // удаляем перетаскиваемый элемент

          // Вставляем перед или после в зависимости от позиции
          if (draggedIndex < targetIndex) {
            container.insertBefore(dragged, target.nextSibling);
          } else {
            container.insertBefore(dragged, target);
          }
        }

        // Очистка
        dragged.style.opacity = "1";
        phantom.remove();

        dragged = null;
        phantom = null;
        isDragging = false;
      });
    </script>
  </body>
</html>
```
