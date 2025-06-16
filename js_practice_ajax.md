# Получение и отображение данных с внешнего API

## 🎯 Цель:

Научиться получать данные с сервера с помощью JavaScript, работать с JSON, обрабатывать полученную информацию и создавать DOM-элементы (карточки) на странице.

---

## 📝 Задание

Создай простую веб-страницу, которая будет получать список пользователей (или товаров) из открытого API и отображать их в виде карточек.

---

## 1. 📄 HTML-разметка

Создай файл `index.html` со следующей базовой структурой:

```html
<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8" />
  <title>Карточки пользователей</title>
</head>
<body>
  <h1>Список пользователей</h1>
  <button onclick="loadUsers()">Загрузить пользователей</button>
  <div id="userCards"></div>

  <script src="script.js"></script>
</body>
</html>
```

---

## 2. 📜 JavaScript: создание запроса

Создай файл `script.js` и напиши функцию `loadUsers()`.

**🔹 Используем API:** [https://jsonplaceholder.typicode.com/users](https://jsonplaceholder.typicode.com/users)

В этом API находится список пользователей. Каждый пользователь содержит имя (`name`), email, город и т.п.

### ✅ Что нужно сделать:

1. С помощью `XMLHttpRequest` отправить `GET`-запрос по адресу:
   `https://jsonplaceholder.typicode.com/users`

2. Проверить статус ответа:
   Если статус 200 — продолжаем работу, иначе — показать сообщение об ошибке (`alert`).

3. Распарсить ответ через `JSON.parse`.

4. Для каждого пользователя создать HTML-блок (карточку) с информацией:

   * Имя (`name`)
   * Почта (`email`)
   * Город (доступ через `address.city`)

5. Добавить эти карточки в контейнер `#userCards`.

---

## 💡 Подсказки

* Используй метод `xhr.open('GET', url)` и `xhr.send()` для запроса.
* Слушай событие `xhr.onload` для обработки ответа.
* Используй `document.createElement(...)` и `appendChild(...)` для добавления карточек.
* Очисти контейнер перед новой отрисовкой: `container.innerHTML = ''`.
* Чтобы стилизовать карточки, можешь добавить CSS по желанию.

---

## 🧠 Пример структуры одной карточки (внутри JS):

```javascript
const card = document.createElement('div');
card.className = 'user-card';

const name = document.createElement('h3');
name.textContent = user.name;

const email = document.createElement('p');
email.textContent = `Email: ${user.email}`;

const city = document.createElement('p');
city.textContent = `Город: ${user.address.city}`;

card.appendChild(name);
card.appendChild(email);
card.appendChild(city);

document.getElementById('userCards').appendChild(card);
```
