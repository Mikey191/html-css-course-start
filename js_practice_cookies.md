# Cookie practice

## ✅ Практика: баннер согласия на использование cookies

### 📋 Условие:

У вас есть HTML-разметка с баннером `#cookie-banner`. Необходимо реализовать показ и скрытие этого баннера в зависимости от наличия cookie-флага.

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <title>Cookie Banner</title>
    <style>
      #cookie-banner {
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        background: #222;
        color: white;
        padding: 1em;
        display: none;
        justify-content: space-between;
        align-items: center;
        font-family: sans-serif;
      }
      #cookie-banner button {
        background: #4caf50;
        color: white;
        border: none;
        padding: 0.5em 1em;
        cursor: pointer;
      }
    </style>
  </head>
  <body>
    <div id="cookie-banner">
      <span>Мы используем cookies для улучшения работы сайта.</span>
      <button id="accept-btn">ОК</button>
    </div>
  </body>
</html>
```

### 🎯 Задача:

1. При загрузке страницы:

   - Проверьте, есть ли в `document.cookie` флаг `cookiesAccepted=true`.
   - Если **нет** — покажите баннер (установите `display: flex`).
   - Если **есть** — скройте баннер (`display: none`).

2. При нажатии на кнопку `#accept-btn`:

   - Установите cookie `cookiesAccepted=true`.
   - Задайте срок действия: `max-age` на **30 дней** (в секундах — `30 * 24 * 60 * 60`).
   - Установите путь: `path=/`, чтобы `cookie` применялась ко всему сайту.
   - Сразу скройте баннер.

---

### 🔎 Подсказки:

- Cookie записывается строкой:

  ```js
  document.cookie = "имя=значение; max-age=секунды; path=/";
  ```

- Проверку можно сделать через `document.cookie.includes(...)`.

---

### ✅ Пример флага:

```js
document.cookie = "cookiesAccepted=true; max-age=2592000; path=/";
```