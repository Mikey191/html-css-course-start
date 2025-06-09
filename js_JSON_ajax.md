# JSON, Ajax

## 1. Формат JSON

В JavaScript мы активно работаем с объектами: создаём их, изменяем, передаём в функции и используем внутри программы. Но что делать, если необходимо передать такой объект по сети — например, на сервер — или получить объект оттуда? В таком случае объект нужно сначала преобразовать в строку, поскольку по сети передаются именно текстовые данные.

Для этой цели используется специальный текстовый формат — **JSON**.

---

### Что такое JSON?

**JSON** (JavaScript Object Notation) — это текстовый формат, предназначенный для хранения и обмена данными. По сути, JSON представляет собой объект JavaScript, записанный в виде строки.

Формат JSON был основан на синтаксисе JavaScript и впервые представлен в стандарте **ECMA-262** в 1999 году. Его популярность стремительно выросла с развитием технологии AJAX, вытеснив на тот момент распространённый формат XML.

Пример:

```javascript
// Обычный объект JavaScript
let person = {
  firstName: "Andrey",
  lastName: "Ivanov",
  birthDate: "04.05.2000",
};
```

А вот как этот же объект выглядит в формате JSON:

```json
"{
  \"firstName\": \"Andrey\",
  \"lastName\": \"Ivanov\",
  \"birthDate\": \"04.05.2000\"
}"
```

Обратите внимание: хотя JSON и выглядит почти как обычный объект, это **строка**. Все ключи и строки внутри объекта обязательно заключаются в двойные кавычки.

---

### Почему используется JSON?

JSON имеет несколько важных преимуществ:

- **Компактность**. По сравнению с XML, JSON занимает меньше места, что особенно важно при передаче данных по сети — он быстрее загружается и обрабатывается.
- **Читаемость**. Формат JSON легко читается как человеком, так и машиной.
- **Универсальность**. Несмотря на происхождение из JavaScript, JSON поддерживается практически во всех языках программирования. Каждая среда умеет преобразовывать JSON-строку в собственный объект и обратно.

---

### Как используется JSON?

Для обмена данными с сервером в формате JSON чаще всего применяются **AJAX-запросы**. Они позволяют отправлять и получать данные без полной перезагрузки страницы. Об AJAX мы подробно поговорим в следующих разделах.

---

### Подводим итог:

- JSON — это текстовое представление объекта.
- Используется для передачи данных между клиентом и сервером.
- Прост в использовании и поддерживается разными языками.
- Применяется чаще всего в AJAX-технологиях.

## 2. Синтаксис JSON

Синтаксис JSON очень похож на синтаксис обычных объектов в JavaScript. Основная структура — это пары **ключ–значение**, заключённые в фигурные скобки `{}`.

Пример простого JSON-объекта:

```json
{
  "firstName": "Andrey",
  "lastName": "Ivanov"
}
```

В этом примере:

- Каждая пара ключ–значение отделена друг от друга запятой.
- Ключи обязательно заключаются в **двойные кавычки**.
- Значения могут быть разного типа (подробнее об этом ниже).

⚠️ **Важно:**
Ключи **всегда** должны быть в двойных кавычках. Одинарные кавычки (`'`) или обратные (`` ` ``) вызовут синтаксическую ошибку при разборе JSON.

---

### Допустимые типы значений в JSON

Значениями в JSON могут быть:

- **Строки** — в двойных кавычках: `"Hello"`
- **Числа** — целые и дробные: `42`, `3.14`
- **Булевы значения** — `true`, `false`
- **Объекты** — вложенные структуры в `{ }`
- **Массивы** — перечисление значений в `[ ]`
- **null** — специальное значение «пусто»

---

### Пример с примитивами

```json
{
  "firstName": "Andrey",
  "lastName": "Ivanov",
  "age": 20,
  "isStudent": true
}
```

Здесь мы описываем студента с именем, фамилией, возрастом и булевым флагом, указывающим, что он студент.

---

### Вложенные объекты

JSON также позволяет использовать **вложенные структуры**. Это удобно, когда объект содержит другие объекты внутри себя.

```json
{
  "firstName": "Andrey",
  "lastName": "Ivanov",
  "age": 20,
  "isStudent": true,
  "contactInfo": {
    "phone": "098-556-33-41",
    "email": "AndreyIvanov@gmail.com"
  }
}
```

Здесь у объекта `person` есть вложенный объект `contactInfo`, содержащий контактные данные.

---

### Массивы в JSON

Если у объекта есть список значений — например, перечень предметов, которые студент изучает — его удобно представить в виде массива:

```json
{
  "firstName": "Andrey",
  "lastName": "Ivanov",
  "age": 20,
  "isStudent": true,
  "contactInfo": {
    "phone": "098-556-33-41",
    "email": "AndreyIvanov@gmail.com"
  },
  "disciplines": ["Programming", "Machine engineering", "English"]
}
```

Массивы заключаются в квадратные скобки и содержат значения, разделённые запятыми. Значениями массива могут быть строки, числа, другие объекты и даже массивы.

---

### Что **нельзя** использовать в JSON

Несмотря на внешнюю схожесть с JavaScript-объектами, JSON имеет **ограничения**:

🚫 В JSON **не поддерживаются**:

- Методы (функции внутри объектов)
- Свойства с типом `Symbol`
- Свойства со значением `undefined`

Пример недопустимого JSON:

```javascript
{
  "name": "Andrey",
  "doSomething": function() { console.log("Hi"); }, // ❌ метод — ошибка
  "symbolKey": Symbol("id"),                         // ❌ Symbol — ошибка
  "extra": undefined                                 // ❌ undefined — ошибка
}
```

Такой объект нельзя преобразовать в JSON. Он вызовет ошибку при сериализации.

## 3. Объект JSON

JavaScript предоставляет встроенный объект `JSON`, который используется для работы с данными в формате JSON. Он позволяет:

- преобразовывать объекты и массивы в JSON-строку;
- превращать JSON-строку обратно в объект JavaScript.

У объекта `JSON` есть два основных метода:

- `JSON.stringify()` — преобразует объект в строку JSON;
- `JSON.parse()` — преобразует JSON-строку в объект.

---

### Метод `JSON.stringify()`

Метод `JSON.stringify()` выполняет **сериализацию** — то есть превращает объект JavaScript в строку формата JSON, которую можно, например, сохранить в файл или передать по сети. Позже такую строку можно снова превратить в объект (это уже будет **десериализация**).

**Синтаксис:**

```js
JSON.stringify(value [, replacer [, space]])
```

- `value` — объект или значение, которое нужно преобразовать в строку JSON.
- `replacer` _(необязательно)_ — функция или массив, позволяющий фильтровать свойства.
- `space` _(необязательно)_ — число или строка, задающая отступы для форматирования.

Пример:

```js
let person = {
  firstName: "Andrey",
  lastName: "Ivanov",
  age: 20,
  isStudent: true,
  contactInfo: {
    phone: "098-556-33-41",
    email: "AndreyIvanov@gmail.com",
  },
  disciplines: ["Programming", "Machine engineering", "English"],
};

let jsonPerson = JSON.stringify(person);
alert(jsonPerson);
```

В результате будет показана JSON-строка, содержащая все свойства объекта `person`.

> ⚠️ Важно: некоторые свойства не сериализуются и будут проигнорированы:

- функции (методы);
- свойства с типом `Symbol`;
- свойства со значением `undefined`.

Пример:

```js
let badExample = {
  [Symbol("id")]: 1,
  property: undefined,
  Foo() {
    console.log("Hi!");
  },
};

let emptyStr = JSON.stringify(badExample);
alert(emptyStr); // "{}"
```

Также сериализация **не поддерживает циклические ссылки** — это когда объекты ссылаются друг на друга по кругу. Рассмотрим пример:

```js
let Kate = { name: "Kate" };
let Dev = { name: "Dev" };

Kate.parent = Dev;
Dev.child = Kate;

let family = JSON.stringify(Dev); // Ошибка!
console.log(family);
```

Этот код вызовет ошибку, так как `Kate` ссылается на `Dev`, а `Dev` снова на `Kate`. JSON не может "понять", как это сериализовать.

---

### Параметры `replacer` и `space`

#### Параметр `replacer`

Позволяет отфильтровать свойства при сериализации. Может быть:

- функцией (для более гибкой логики),
- массивом (для указания списка нужных свойств).

**Функция `replacer`:**

```js
function checkAge(key, value) {
  if (key === "age" && value >= 18) {
    return undefined; // исключить возраст из JSON
  }
  return value;
}

let jsonPerson2 = JSON.stringify(person, checkAge);
alert(jsonPerson2);
```

В результате поле `age` не попадет в итоговую строку, если возраст 18 и выше.

**Массив `replacer`:**

```js
let jsonPerson3 = JSON.stringify(person, ["firstName", "lastName"]);
alert(jsonPerson3);
```

В этом случае в JSON-строку попадут только указанные поля.

#### Параметр `space`

Позволяет задать отступы для форматированной и читаемой JSON-строки. Это удобно, если нужно "красивое" форматирование:

```js
alert(JSON.stringify(person, null, 2));
```

Результат будет отформатирован с отступами в 2 пробела — читать его намного легче.

---

### Метод `JSON.parse()`

Чтобы преобразовать JSON-строку обратно в объект JavaScript, используется метод `JSON.parse()`.

**Синтаксис:**

```js
JSON.parse(jsonString [, reviver])
```

- `jsonString` — строка в формате JSON;
- `reviver` _(необязательно)_ — функция для обработки значений.

Пример:

```js
let personStr = `{
  "firstName": "Andrey",
  "lastName": "Ivanov",
  "age": 20,
  "isStudent": true,
  "contactInfo": {
    "phone": "098-556-33-41",
    "email": "AndreyIvanov@gmail.com"
  },
  "disciplines": [
    "Programming",
    "Machine engineering",
    "English"
  ]
}`;

let person = JSON.parse(personStr);

alert(person.firstName); // "Andrey"
alert(person.contactInfo.phone); // "098-556-33-41"
```

После парсинга строка превращается в полноценный JavaScript-объект, с которым можно работать.

---

#### Параметр `reviver`

Функция `reviver` позволяет обрабатывать данные при преобразовании строки в объект. Она вызывается для каждой пары ключ/значение. Если функция возвращает `undefined`, свойство будет **исключено** из итогового объекта.

Пример:

```js
function checkIsStudent(key, value) {
  if (key === "isStudent" && value === true) {
    return undefined; // убираем это свойство
  }
  return value;
}

let person2 = JSON.parse(personStr, checkIsStudent);
alert(person2.isStudent); // undefined
```

---

### Вывод

Объект `JSON` в JavaScript позволяет легко работать с данными: сериализовать и десериализовать их. Это особенно важно при передаче данных по сети или хранении в файлах.

| Метод              | Назначение                               |
| ------------------ | ---------------------------------------- |
| `JSON.stringify()` | Преобразует объект в строку JSON         |
| `JSON.parse()`     | Преобразует строку JSON обратно в объект |

---

## 4. Ошибки при использовании JSON

При работе с форматом JSON в JavaScript важно строго соблюдать его синтаксис. Даже небольшие отклонения могут вызвать ошибки при чтении или записи данных. Рассмотрим типичные ошибки, которые могут возникнуть при создании JSON-строк:

- **Имя свойства указано без кавычек**:

  ```js
  {
    property: "value";
  } // ❌ Ошибка
  ```

- **Значение, требующее кавычек, записано без них**:

  ```js
  {"property": value} // ❌ Ошибка
  ```

- **Использованы одинарные или обратные кавычки вместо двойных**:

  ```js
  {‘property’: `value`} // ❌ Ошибка
  ```

- **Использование ключевых слов JavaScript, таких как `new`**:

  ```js
  {"property": new Date(2019, 7, 15)} // ❌ Ошибка
  ```

> **Важно:** JSON требует строгого синтаксиса:
>
> - Все строки (и имена свойств, и значения) — в **двойных** кавычках
> - Нельзя использовать методы, выражения или ключевые слова JavaScript
> - Только допустимые типы: строки, числа, булевы значения, `null`, массивы и объекты

---

## 5. Метод `toJSON()`

Метод `toJSON()` — это специальный метод, который может быть определён в любом объекте. Он используется для задания **собственного поведения при сериализации** объекта в JSON.

Когда вызывается `JSON.stringify()`, если у объекта есть метод `toJSON()`, то именно результат этого метода будет сериализован, а не сам объект целиком.

Это особенно полезно в ситуациях, когда объект содержит значения, **не поддерживаемые в JSON** (например, `undefined`, функции, символы и т.д.), или если необходимо изменить формат данных перед сериализацией.

Рассмотрим пример:

```js
let model = {
  name: "BMW",
  autopilot: undefined,
};

let car = {
  color: "Black",
  date: new Date(2019, 7, 21),
  model,
};
```

Здесь объект `car` содержит вложенный объект `model`, в котором есть свойство `autopilot` со значением `undefined`. Если мы выполним сериализацию `car`, то `autopilot` будет просто **исключён** из итоговой JSON-строки.

Чтобы контролировать сериализацию, мы можем добавить в объект `model` метод `toJSON()` и самостоятельно указать, какое представление объекта использовать:

```js
let model = {
  name: "BMW",
  autopilot: undefined,
  toJSON() {
    let jsonStr = `{"name": "${this.name}", "autopilot": `;
    if (this.autopilot === undefined) {
      jsonStr += `"Not"}`;
    } else {
      jsonStr += `"${this.autopilot}"}`;
    }
    return jsonStr;
  },
};

let car = {
  color: "Black",
  date: new Date(2019, 7, 21),
  model,
};

let carJSON = JSON.stringify(car);
alert(carJSON);
```

Здесь:

- Метод `toJSON()` формирует строку JSON вручную и возвращает её.
- Если свойство `autopilot` отсутствует, оно заменяется на строку `"Not"` — теперь оно не будет проигнорировано, и ошибка сериализации не возникнет.

### Особенности:

- В этом примере также видно, что свойство `date` было автоматически сериализовано в строку — это потому, что объект `Date` **по умолчанию имеет встроенный метод `toJSON()`**, который преобразует дату в формат ISO:

```json
"date": "2019-08-20T21:00:00.000Z"
```

> Это поведение удобно, если вы отправляете данные с датами на сервер — они будут в читаемом и универсальном формате.

##

Вот переработанный и упрощённый для восприятия вариант лекции по теме **Ajax и объект XMLHttpRequest**, с сохранением всех примеров и логики из оригинала:

---

## 7. Ajax

**Ajax** — это технология, которая позволяет отправлять запросы к серверу и получать ответы без полной перезагрузки страницы. Благодаря Ajax, веб-сайты становятся более интерактивными и отзывчивыми.

Название Ajax расшифровывается как **Asynchronous JavaScript and XML** — асинхронный JavaScript и XML. Несмотря на упоминание XML, на практике чаще используется формат **JSON** или просто **текст**.

### Зачем нужен Ajax

Раньше для получения новых данных, например, в интернет-магазине, приходилось перезагружать всю страницу. Это занимало время: нужно было отправить запрос, дождаться ответа, заново сгенерировать всю страницу. Пользователи теряли терпение и уходили.

С Ajax всё стало проще: можно обновлять только нужную часть страницы, не трогая остальное. Это ускоряет работу сайта и делает его удобнее.

Примеры применения Ajax:

- Отправка данных из формы;
- Получение новых сообщений в чате без перезагрузки;
- Постепенная подгрузка товаров, комментариев или изображений;
- Автозаполнение поисковой строки (предложение популярных запросов).

---

## Сервер — откуда приходят данные

Чтобы понять, как работает Ajax, нужно знать, **что такое сервер**.

**Сервер** — это программа или компьютер, который:

- получает запросы от клиента (браузера),
- обрабатывает их,
- возвращает нужный ответ,
- хранит и защищает данные.

### Пример из жизни

Вы заходите в пекарню и просите буханку хлеба. Продавец находит хлеб и отдаёт вам.
Вы — клиент, хлеб — это запрос, продавец и пекарня — сервер.

### Виды серверов

- **Удалённый сервер** — это мощный компьютер, расположенный, например, в дата-центре. Запросы к нему идут по интернету. Пример адреса: `https://www.google.com`.
- **Локальный сервер** — это ваш компьютер. Для его запуска нужно установить специальное ПО. Пример адреса: `http://127.0.0.1:5500`.

> `127.0.0.1` (или `localhost`) — это ваш же компьютер.
> `5500` — это порт, через который происходит обращение к конкретному приложению. У каждого приложения свой порт (от 0 до 65535).

---

## Объект XMLHttpRequest

Для работы с Ajax в JavaScript используется специальный объект **XMLHttpRequest**.

В старых браузерах (например, Internet Explorer 5–6) использовался объект `ActiveXObject`:

```javascript
let request = new ActiveXObject("Microsoft.XMLHTTP");
```

В современных браузерах используется `XMLHttpRequest`:

```javascript
let request = new XMLHttpRequest();
```

### Кроссбраузерное решение:

```javascript
let request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}
```

---

## Метод open()

Метод `open()` настраивает запрос, но **не отправляет** его:

```javascript
open(method, URL, [async, user, password]);
```

- `method` — HTTP-метод (обычно `GET` или `POST`, также бывают `PUT`, `DELETE` и др.);
- `URL` — адрес, куда отправляется запрос;
- `async` — указывает, асинхронный ли запрос (по умолчанию `true`);
- `user`, `password` — используются, если нужна авторизация.

Примеры адресов:

- `data/file.txt` — локальный файл: `http://127.0.0.1:5500/data/file.txt`
- `https://www.google.com` — удалённый сервер

---

## Метод send()

После настройки запроса, его нужно отправить:

```javascript
request.send();
```

Чтобы получить ответ, используется событие `onreadystatechange`.
На каждой стадии выполнения запроса это событие срабатывает, и можно проверить статус через свойство `readyState`.

### Состояния readyState:

| Значение | Состояние                      |
| -------- | ------------------------------ |
| 0        | Запрос не инициализирован      |
| 1        | Запрос инициализирован         |
| 2        | Запрос отправлен               |
| 3        | Идёт обработка запроса         |
| 4        | Запрос завершён, ответ получен |

---

## Пример: запрос к текстовому файлу

```javascript
let request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "text.txt");
request.onreadystatechange = function () {
  console.log("readyState = " + request.readyState);
  if (request.readyState === 4 && request.status === 200) {
    alert(request.response);
  }
};
request.send();
```

Здесь:

1. Создаём объект запроса.
2. Настраиваем его: метод `GET`, файл `text.txt`.
3. Назначаем обработчик на событие `onreadystatechange`.
4. При успешном завершении (`readyState === 4` и `status === 200`) выводим результат.

---

## Свойства объекта XMLHttpRequest

- **status** — числовой код состояния:

  - `200` — успешно;
  - `404` — не найден.

- **statusText** — текстовое описание: "OK", "Not Found" и т.д.
- **responseType** — тип ожидаемого ответа:

  - `""` (по умолчанию) — строка;
  - `"text"` — строка;
  - `"json"` — JSON;
  - `"document"` — XML;
  - `"blob"` / `"arraybuffer"` — бинарные данные.

> ⚠️ Если ожидаемый тип не совпадает с фактическим, `response` будет `null`.

---

## Пример: запрос JSON-файла с `responseType = "json"`

```javascript
let request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "person.json");
request.responseType = "json";
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    let person = request.response;
    console.log(person);
  }
};
request.send();
```

> Здесь JSON строка автоматически преобразуется в JavaScript-объект.

---

## Пример ошибки: неправильный тип

```javascript
let request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "text.txt");
request.responseType = "json"; // Ожидаем JSON, но файл — текстовый
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    alert(request.response); // Будет null
  }
};
request.send();
```

---

## responseText и JSON

Если вы хотите получить JSON как строку и распарсить его вручную:

```javascript
let request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "person.json");
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    alert(request.responseText); // JSON в виде строки
  }
};
request.send();
```

---

## XML: свойство responseXML

Если сервер отдаёт XML, можно использовать свойство `responseXML`:

```javascript
let request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "person.xml");
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseXML);
  }
};
request.send();
```

---

## Ошибка: ожидался XML, но указали text

```javascript
let request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.responseType = "text";
request.open("GET", "person.xml");
request.onreadystatechange = function () {
  if (request.readyState === 4 && request.status === 200) {
    console.log(request.responseXML); // Ошибка!
  }
};
request.send();
```

В этом случае мы получаем XML-файл, но задали неверный `responseType`.
При попытке обратиться к `responseXML` произойдёт ошибка — она отобразится в консоли разработчика.

##

Вот переработанная версия следующей части лекции. Стиль стал более понятным, язык — живым и последовательным, при этом материал и структура сохранены полностью. Примеры остались такими же, только оформлены аккуратнее и с пояснениями.

---

## 8. События `onload`, `onloadend`, `onerror`

Во всех предыдущих примерах мы использовали событие `onreadystatechange`, чтобы узнать, когда запрос завершился и можно получить данные.

Однако есть более простой и понятный способ — использовать событие `onload`. Оно срабатывает **только тогда**, когда запрос завершился успешно и все данные были загружены.

### Пример с `onload`

```javascript
let request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "person.json");
request.onload = function () {
  if (request.status === 200) {
    alert(request.response); // выведет "Hello world!"
  }
};
request.send();
```

**Что здесь происходит:**

- Создаётся объект `XMLHttpRequest`;
- Настраивается запрос методом `GET` к файлу `person.json`;
- Подписываемся на событие `onload` — оно сработает, когда данные успешно загружены;
- Если статус ответа `200` (успех), показываем результат.

💡 Благодаря `onload` мы **избавляемся от проверки `readyState`**, что упрощает код и делает его читаемее.

---

## Другие полезные события объекта `XMLHttpRequest`

### 1. `onerror`

Срабатывает, если произошла **ошибка при загрузке данных** (например, сервер недоступен или файл не найден).

### 2. `onprogress`

Это событие вызывается **многократно во время загрузки данных**. Его удобно использовать для отображения прогресса загрузки — например, показывать полоску загрузки или проценты.

---

## Пример с `onload`, `onerror`, `onloadend`

```javascript
let request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open("GET", "tex.txt");

request.onloadend = function (event) {
  alert(`Загружено ${event.loaded} байт`);
};

request.onerror = function () {
  alert("Ошибка при загрузке");
};

request.onload = function () {
  if (request.status === 404) {
    alert(request.response);
  }
};

request.send();
```

🔍 Что здесь происходит:

- **`onloadend`** — сработает **в любом случае** (успех или ошибка). Мы используем его, чтобы вывести, сколько байт было загружено.
- **`onerror`** — сработает, если произошла ошибка (например, файл отсутствует).
- **`onload`** — сработает при успешной загрузке, но в коде проверяем, что файл не найден (`status === 404`), и выводим содержимое ответа (возможно, сообщение об ошибке с сервера).

---

## Важно!

Хотя события `onload`, `onerror`, `onloadend` и `onprogress` делают код чище и удобнее, **не все старые браузеры** (например, Internet Explorer до версии 10) их поддерживают.

🧠 Поэтому, если вы хотите обеспечить **максимальную совместимость**, лучше использовать событие `onreadystatechange` — оно поддерживается во всех браузерах, даже самых старых.

## 9. Запросы на удалённый сервер

Отправка запроса на удалённый сервер ничем не отличается от отправки на локальный. Ниже приведён пример, в котором запрос отправляется на сервер, предоставляющий информацию о текущей погоде в заданном городе:

```javascript
let request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

request.open(
  "GET",
  "http://api.openweathermap.org/data/2.5/weather?q=Moscow&units=metric&APPID=b03a2cfad336d11bd9140ffd92074504"
);

request.onload = function () {
  if (request.status === 200) {
    alert(request.response);
  }
};

request.send();
```

В этом примере в методе `open()` указан URL удалённого сервера:
`http://api.openweathermap.org/data/2.5/weather?q=Moscow&APPID=b03a2cfad336d11bd9140ffd92074504`

- `http://api.openweathermap.org/data/2.5/weather?` — это базовый адрес сервера;
- `q=Moscow` — параметр, указывающий нужный город (в нашем случае — Москва);
- `APPID=...` — специальный ключ доступа к API, который можно получить при регистрации на сайте [openweathermap.org](https://openweathermap.org).

После выполнения запроса сервер вернёт данные о погоде в Москве.

Пример использует стороннее API OpenWeather, доступное по адресу:
[https://openweathermap.org/api](https://openweathermap.org/api)
На сайте доступна документация, где подробно описаны параметры и структура ответов.

---

## 10. Методы GET и POST

Прежде чем рассматривать различия между методами `GET` и `POST`, нужно немного поговорить о протоколе HTTP.

**HTTP (HyperText Transfer Protocol)** — это протокол передачи данных между клиентом и сервером. Клиентами могут быть браузеры, мобильные приложения и другие устройства, а сервер — это программа, обрабатывающая запросы и возвращающая ответы.

### Структура HTTP-запроса

HTTP-запрос состоит из трёх основных частей:

1. **Стартовая строка** — содержит метод запроса, URL-адрес ресурса и версию протокола.
2. **Заголовки** — передают служебную информацию (например, тип данных, язык, кодировку и т.д.).
3. **Тело запроса** — содержит данные, которые нужно передать (актуально для метода POST).

Пример HTTP-запроса:

```
GET /info.html HTTP/1.1
Host: mywebsite.ru
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64)
AppleWebKit/537.36 (KHTML, like Gecko)
Chrome/80.0.3987.122 Safari/537.36
Accept: text/html
```

В первой строке указан метод `GET`, путь к ресурсу (`/info.html`) и версия протокола. Ниже идут заголовки:

- `Host` — домен сайта.
- `User-Agent` — информация о браузере и операционной системе.
- `Accept` — указывает, какой тип данных ожидается в ответе.

Теперь рассмотрим два наиболее распространённых HTTP-метода: `GET` и `POST`.

---

### Метод GET

Метод `GET` используется для **получения данных** с сервера. Передача данных осуществляется через адресную строку браузера. Пример запроса:

```
http://url?параметр1=значение1&параметр2=значение2
```

- Знак `?` отделяет URL от параметров.
- Параметры передаются в формате `ключ=значение`.
- Параметры разделяются между собой с помощью `&`.

Обратите внимание: символы `?`, `&`, `=` и другие зарезервированы. Если такие символы нужно передать в значении, их кодируют с помощью `encodeURIComponent()` — специальной функции в JavaScript. Например:

- `?` → `%3F`
- `&` → `%26`

**Недостатки метода GET**:

- Ограниченный объём данных (до \~1024 символов).
- Проблемы с кириллицей в старых браузерах.

Поэтому `GET` чаще всего используют **только для получения информации**, но не для её отправки.

---

### Метод POST

Метод `POST` применяется для **отправки данных** на сервер. В отличие от `GET`, данные передаются **в теле запроса**, а не в адресной строке, что позволяет передавать больше информации и использовать кириллицу без проблем.

#### Пример HTML-формы:

```html
<form id="form" action="">
  <input type="text" name="name" id="name-inp" />
  <input type="text" name="phone" id="phone-inp" />
  <input type="submit" id="submit-btn" />
</form>
```

#### JavaScript-код, отправляющий данные:

```html
<script>
  let submitBtn = document.getElementById("submit-btn");

  submitBtn.onclick = function () {
    let nameValue = document.getElementById("name-inp").value;
    let phoneValue = document.getElementById("phone-inp").value;

    let data =
      "name=" +
      encodeURIComponent(nameValue) +
      "&phone=" +
      encodeURIComponent(phoneValue);

    let request;
    if (window.XMLHttpRequest) {
      request = new XMLHttpRequest();
    } else {
      request = new ActiveXObject("Microsoft.XMLHTTP");
    }

    request.open("POST", "server.php");

    request.onreadystatechange = function () {
      if (request.readyState === 4 && request.status === 200) {
        alert(
          "Здравствуйте, " + nameValue + "! Мы перезвоним вам через 1 минуту."
        );
      }
    };

    request.setRequestHeader(
      "Content-Type",
      "application/x-www-form-urlencoded"
    );
    request.send(data);
  };
</script>
```

### Как это работает:

1. По нажатию кнопки находим введённые данные (имя и телефон).
2. Составляем строку для отправки в формате `ключ=значение`, разделяя пары с помощью `&`.
3. Каждое значение кодируем с помощью `encodeURIComponent()`.
4. Создаём и настраиваем объект запроса: `open("POST", "server.php")`.
5. Обязательно указываем заголовок `Content-Type`, чтобы сервер понял, как декодировать данные:
   `application/x-www-form-urlencoded`.
6. Отправляем данные через `send(data)`.

Сервер принимает эти данные, обрабатывает их (например, добавляет в базу данных), и, если всё прошло успешно, пользователь получает сообщение о том, что с ним скоро свяжется оператор.

## 11. Объект `FormData`

Для форматирования и отправки данных на сервер можно использовать не только вручную сформированные строки, но и более удобный инструмент — объект `FormData`.

`FormData` позволяет автоматически сформировать пары ключ–значение из данных формы. Это упрощает работу с отправкой информации. Давайте рассмотрим тот же пример, что и раньше, но теперь с использованием `FormData`.

```javascript
let subbliBtn = document.getElementById("submit-btm");
subbliBtn.onclick = function () {
  let form = document.getElementById("form");
  let formData = new FormData(form);
  formData.append("date", new Date().toLocaleString());

  let request;
  if (window.XMLHttpRequest) {
    request = new XMLHttpRequest();
  } else {
    request = new ActiveXObject("Microsoft.XMLHTTP");
  }

  request.open("POST", "server.php");
  request.onreadystatechange = function () {
    if (request.readyState === 4 && request.status === 200) {
      alert("Здравствуйте! Мы перезвоним вам через 1 минуту");
    }
  };

  request.setRequestHeader("Content-Type", "multipart/form-data");
  request.send(formData);
};
```

Этот пример во многом похож на предыдущий, но теперь данные не формируются вручную, а создаются автоматически на основе HTML-формы.

1. Внутри обработчика события `onclick` создаётся объект `FormData`, в конструктор которого передаётся DOM-элемент формы. На его основе и формируется набор пар ключ–значение.
2. С помощью метода `append` добавляется дополнительное поле `date` — дата и время отправки формы. Это может быть полезно, чтобы оператор знал, когда была отправлена заявка.
3. Особенность `FormData` заключается в том, что он автоматически кодирует данные. Но есть один важный момент — при использовании `FormData` заголовок `'Content-Type'` следует устанавливать в значение `'multipart/form-data'`, чтобы сервер корректно понял структуру данных.
4. Объект `FormData` передаётся в метод `send`.

Объект `FormData` имеет несколько полезных методов:

- `set(key, value)` — устанавливает значение по ключу. Если такой ключ уже существует, его значение будет перезаписано.
- `append(key, value)` — добавляет новое значение. Если ключ уже существует, новое значение будет добавлено в конец.
- `delete(key)` — удаляет значение по указанному ключу.
- `get(key)` — возвращает значение по указанному ключу.
- `has(key)` — возвращает `true`, если значение с таким ключом существует, иначе `false`.

---

### Отправка данных в формате JSON

Иногда нужно передать на сервер не данные формы, а произвольный JavaScript-объект. Для этого его необходимо преобразовать (сериализовать) в формат JSON с помощью метода `JSON.stringify()`, а затем отправить через `XMLHttpRequest`.

Пример:

```javascript
let person = {
  firstName: "Andrey",
  lastName: "Ivanov",
  age: 20,
};

let request;
if (window.XMLHttpRequest) {
  request = new XMLHttpRequest();
} else {
  request = new ActiveXObject("Microsoft.XMLHTTP");
}

let jsonPerson = JSON.stringify(person);

request.open("POST", "server.php");
request.setRequestHeader("Content-Type", "application/json");
request.send(jsonPerson);
```

В этом примере создаётся объект `person` с данными о человеке. Чтобы отправить этот объект на сервер, его необходимо сначала превратить в строку JSON при помощи `JSON.stringify()`.

Важно: при отправке данных в формате JSON обязательно указывать в заголовках запроса тип содержимого `'Content-Type: application/json'`. Это необходимо для того, чтобы сервер понял, что данные нужно обрабатывать как JSON, а не как обычную строку.
