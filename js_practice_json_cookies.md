# Cookie + JSON practice

## ✅ Цель задания

Реализовать простую проверку логина и пароля через JSON-файл. Сохранять логин в cookie, чтобы после обновления страницы пользователь видел сообщение «Вы вошли как: \[логин]».

---

## 🪜 Пошаговая реализация

### **Шаг 1. Создай HTML-форму для ввода логина и пароля**

**Что использовать:** обычные теги HTML — `input` и `button`.

- Поле ввода логина → `<input type="text" id="login">`
- Поле ввода пароля → `<input type="password" id="password">`
- Кнопка входа → `<button id="submit">Войти</button>`
- Блоки для сообщений:

  - `#welcome` (показывается при успешном входе)
  - `#error` (показывается при ошибке)

💡 Форма должна быть видимой при первом входе.

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Логин через JSON</title>
    <style>
      body {
        font-family: sans-serif;
      }
      #login-form {
        margin-top: 20px;
      }
      #welcome,
      #error {
        margin-top: 10px;
        font-weight: bold;
      }
      #welcome {
        color: green;
      }
      #error {
        color: red;
      }
    </style>
  </head>
  <body>
    <h1>Добро пожаловать</h1>

    <div id="login-form">
      <input type="text" id="login" placeholder="Логин" />
      <input type="password" id="password" placeholder="Пароль" />
      <button id="submit">Войти</button>
    </div>

    <div id="welcome" style="display: none"></div>
    <div id="error" style="display: none">Неверный логин или пароль</div>
  </body>
</html>
```

---

### **Шаг 2. Загрузи JSON-файл с пользователями**

**Что использовать:** объект `XMLHttpRequest`.

- Создай новый объект `XMLHttpRequest`
- Вызови `open("GET", "users.json")` — обращение к локальному файлу
- Установи `responseType = "json"` — чтобы не парсить вручную
- В `onreadystatechange` реализуй обработку данных:

  - Убедись, что `readyState === 4` и `status === 200`
  - Проверь логин и пароль на соответствие

📝 JSON-файл должен быть заранее создан и находиться рядом с HTML-файлом. Пример:

```json
[
  { "login": "admin", "password": "123" },
  { "login": "user", "password": "qwerty" }
]
```

---

### **Шаг 3. Обработай нажатие кнопки входа**

**Что использовать:** `addEventListener("click", ...)`

- При клике по кнопке:

  - Считай значения из полей `#login` и `#password`
  - Загрузи JSON-файл, как описано в шаге 2
  - Перебери пользователей в цикле `for ... of`

    - Если совпадает логин и пароль:

      - Установи cookie: `document.cookie = "userLogin=...; max-age=2592000; path=/;"`
      - Спрячь форму, покажи блок `#welcome` с логином
      - Заверши цикл `break`

    - Если не совпадает:

      - Покажи сообщение об ошибке (блок `#error`)
      - Убедись, что блок `#welcome` скрыт

---

### **Шаг 4. Получи значение cookie при загрузке страницы**

**Что использовать:** `window.addEventListener("load", ...)`

- При загрузке страницы:

  - Проверь, есть ли cookie с логином

    - Используй `document.cookie.includes("userLogin=")`

  - Если да:

    - Извлеки значение cookie (вспомогательная функция `getCookieValue`)
    - Спрячь форму входа
    - Покажи сообщение «Вы вошли как: \[логин]»

---

### **Шаг 5. Реализуй функцию получения значения cookie**

**Что использовать:** `document.cookie.split("; ")`, `split("=")`

- Раздели строку cookie на массив
- Перебери пары `ключ=значение`
- Если ключ совпадает с нужным, верни значение

Функция в коде уже есть:

```js
function getCookieValue(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, val] = c.split("=");
    if (key === name) return decodeURIComponent(val);
  }
  return null;
}
```

---

### **Шаг 6. Добавь кнопку «Выйти» и реализуй удаление cookie**

**Что нужно сделать:**

- Добавь HTML-элемент кнопку выхода ниже блока `#welcome`.
  - атрибуты кнопки `id="logout" style="display: none"`
- Показывай кнопку выхода после успешного входа. `document.getElementById("logout").style.display = "inline";`
- Добавь обработчик кнопки "Выйти". `document.getElementById("logout").addEventListener("click", ...)`.
  - Обнуляем `cookie`: устанавливаем `max-age=0;` и `userLogin=;`.
  - Показываем форму входа.
  - Прячем `welcome` и `logout`.