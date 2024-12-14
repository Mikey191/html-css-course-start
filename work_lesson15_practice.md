### Практика #1

#### **Создание html-разметки документа**:

1. **Создайте шапку сайта**.

   - Внутри тега `<body>` добавьте `<header>`.
   - Внутри `<header>` разместите заголовок первого уровня `<h1>` с текстом `"Опрос"`.

2. **Добавьте основной контейнер**.

   - Под шапкой создайте `<div>` с классом `container`.
   - Внутри контейнера добавьте заголовок второго уровня `<h2>` с текстом `"Расскажите о себе!"`.

3. **Создайте форму для опроса**.

   - Внутри контейнера добавьте элемент `<form>`.

4. **Добавьте первый вопрос**.

   - Внутри формы создайте `<div>` с классом `question`.
   - Внутри `<div>` добавьте заголовок третьего уровня `<h3>` с текстом `"1. Какое время года вы любите больше всего?"`.
   - Под заголовком создайте список `<ul>` с классом `options`.
   - Внутри списка создайте 5 пунктов `<li>`.
   - В каждом пункте добавьте элемент `<label>`.
   - Внутри `<label>` добавьте флажок `<input>` с типом `checkbox` и атрибутом `name="question1"`.
   - Укажите варианты ответа (например, `"Весна"`, `"Лето"` и т. д.) как текст внутри `<label>`.

5. **Добавьте остальные вопросы**.

   - Повторите шаг 6 для еще 4 вопросов.
   - Измените текст в заголовках `<h3>` на следующие:
   - `"2. Какие фильмы вы предпочитаете?"`
   - `"3. Какую музыку вы любите?"`
   - `"4. Какая кухня вам больше по душе?"`
   - `"5. Как вы предпочитаете проводить выходные?"`
   - Измените атрибут `name` у флажков на `question2`, `question3`, `question4` и `question5` соответственно.
   - Укажите подходящие варианты ответов для каждого вопроса.
   - Варианты ответов:
     - `Боевики`, `Комедии`, `Драмы`, `Фантастика`
     - `Поп`, `Рок`, `Джаз`, `Классическая`
     - `Итальянская`, `Мексиканская`, `Китайская`, `Индийская`
     - `Путешествовать`, `Читать`, `Смотреть фильмы`, `Заниматься спортом`

6. **Добавьте кнопку отправки формы**.

   - После всех вопросов добавьте кнопку `<button>` с типом `submit`.
   - Задайте кнопке класс `btn-submit` и текст `"Отправить"`.

7. Создайте подвал страницы.
   - После контейнера добавьте `<footer>`.
   - Внутри `<footer>` создайте абзац `<p>` с текстом `"© 2024 Опрос. Все права защищены."`.

```html
<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Опрос</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <header>
      <h1>Опрос</h1>
    </header>

    <div class="container">
      <h2>Расскажите о себе!</h2>
      <form>
        <!-- Вопросы -->
        <div class="question">
          <h3>1. Какое время года вы любите больше всего?</h3>
          <ul class="options">
            <li>
              <label><input type="checkbox" name="question1" /> Весна</label>
            </li>
            <li>
              <label><input type="checkbox" name="question1" /> Лето</label>
            </li>
            <li>
              <label><input type="checkbox" name="question1" /> Осень</label>
            </li>
            <li>
              <label><input type="checkbox" name="question1" /> Зима</label>
            </li>
            <li>
              <label
                ><input type="checkbox" name="question1" /> Ничего из
                перечисленного</label
              >
            </li>
          </ul>
        </div>

        <div class="question">
          <h3>2. Какие фильмы вы предпочитаете?</h3>
          <ul class="options">
            <li>
              <label><input type="checkbox" name="question2" /> Боевики</label>
            </li>
            <li>
              <label><input type="checkbox" name="question2" /> Комедии</label>
            </li>
            <li>
              <label><input type="checkbox" name="question2" /> Драмы</label>
            </li>
            <li>
              <label
                ><input type="checkbox" name="question2" /> Фантастика</label
              >
            </li>
            <li>
              <label
                ><input type="checkbox" name="question2" /> Ничего из
                перечисленного</label
              >
            </li>
          </ul>
        </div>

        <div class="question">
          <h3>3. Какую музыку вы любите?</h3>
          <ul class="options">
            <li>
              <label><input type="checkbox" name="question3" /> Поп</label>
            </li>
            <li>
              <label><input type="checkbox" name="question3" /> Рок</label>
            </li>
            <li>
              <label><input type="checkbox" name="question3" /> Джаз</label>
            </li>
            <li>
              <label
                ><input type="checkbox" name="question3" /> Классическая</label
              >
            </li>
            <li>
              <label
                ><input type="checkbox" name="question3" /> Ничего из
                перечисленного</label
              >
            </li>
          </ul>
        </div>

        <div class="question">
          <h3>4. Какая кухня вам больше по душе?</h3>
          <ul class="options">
            <li>
              <label
                ><input type="checkbox" name="question4" /> Итальянская</label
              >
            </li>
            <li>
              <label
                ><input type="checkbox" name="question4" /> Мексиканская</label
              >
            </li>
            <li>
              <label
                ><input type="checkbox" name="question4" /> Китайская</label
              >
            </li>
            <li>
              <label
                ><input type="checkbox" name="question4" /> Индийская</label
              >
            </li>
            <li>
              <label
                ><input type="checkbox" name="question4" /> Ничего из
                перечисленного</label
              >
            </li>
          </ul>
        </div>

        <div class="question">
          <h3>5. Как вы предпочитаете проводить выходные?</h3>
          <ul class="options">
            <li>
              <label
                ><input type="checkbox" name="question5" />
                Путешествовать</label
              >
            </li>
            <li>
              <label><input type="checkbox" name="question5" /> Читать</label>
            </li>
            <li>
              <label
                ><input type="checkbox" name="question5" /> Смотреть
                фильмы</label
              >
            </li>
            <li>
              <label
                ><input type="checkbox" name="question5" /> Заниматься
                спортом</label
              >
            </li>
            <li>
              <label
                ><input type="checkbox" name="question5" /> Ничего из
                перечисленного</label
              >
            </li>
          </ul>
        </div>

        <button type="submit" class="btn-submit">Отправить</button>
      </form>
    </div>

    <footer>
      <p>&copy; 2024 Опрос. Все права защищены.</p>
    </footer>
  </body>
</html>
```

#### **Создание стилизации для разметки**:

1. **Общие стили для всего документа (body)**:

   - **Установите шрифт** `Arial, sans-serif` для текста на всей странице.
   - Задайте **межстрочный интервал** `1.6`.
   - **Удалите внешние и внутренние отступы**.
   - Установите **фоновый цвет** страницы: `#f4f4f9`.
   - Укажите **основной цвет текста**: `#333`.
   - Настройте **гибкий макет для всего документа** `flex`:
     - Укажите **направление оси** — `вертикальное`.
     - Задайте **минимальную высоту экрана** для документа равной `100vh` от высоты окна.

2. **Стили для элемента `header`**:

   - Установите **фоновый цвет** `#333`.
   - Измените **цвет текста** на **белый** (`#fff`).
   - Добавьте **внутренние отступы**: `сверху` и `снизу` — `10px`, `слева` и `справа` — `20px`.
   - **Выравнивание текста по центру**.

3. **Стили для элемента `footer`**:

   - Используйте те же `фон`, `цвет текста` и `отступы`, что и у `header`.
   - Добавьте **дополнительное правило** для создания адаптивного макета:
     - Укажите, что `footer` должен всегда находиться внизу страницы, добавив **автоматический верхний отступ** (`margin-top: auto`).

4. **Стили для контейнера с классом `.container`**:

   - Задайте **максимальную ширину** в `800px`.
   - `Центрируйте контейнер`, используя автоматические внешние отступы по горизонтали.
   - Добавьте **внутренний отступ** `20px`.
   - Установите фон контейнера белым (`#fff`).
   - Сделайте **углы контейнера закругленными** на `8px`.
   - Добавьте **легкую тень** с параметрами:
     - **Смещение по оси X и Y**: `0` и `4px`.
     - **Размытие**: `8px`.
     - **Цвет тени**: полупрозрачный черный (`rgba(0, 0, 0, 0.1)`).

5. **Стили для заголовков `h1` и `h2`**:

   - **Выравнивайте текст по центру**.

6. **Стили для блоков с вопросами (`.question`)**:

   - Добавьте **нижний внешний отступ** в `20px` для каждого блока.

7. **Стили для заголовков вопросов (`h3`) внутри `.question`**:

   - Добавьте **нижний внешний отступ** в `10px`.

8. **Стили для списков вариантов (`.options`)**:

   - **Удалите маркеры** списков.
   - Установите **внутренние отступы** равными `0`.

9. **Стили для пунктов списков (`li`) внутри `.options`**:

   - Добавьте **нижний внешний отступ** в `8px`.

10. **Стили для кнопки отправки (`.btn-submit`)**:

    - Укажите **отображение кнопки в виде блока**, чтобы она занимала **всю ширину контейнера**(display: block;).
    - Задайте **ширину** `100%` и **внутренний отступ** `10px`.
    - Установите **размер шрифта** `16px`.
    - Сделайте **текст жирным**.
    - Измените **цвет текста** на **белый** (`#fff`).
    - Установите **фоновый цвет** кнопки `#007bff`.
    - Уберите **рамки** и **добавьте закругленные углы** на `4px`.
    - Добавьте **верхний внешний отступ** `20px`.
    - **Настройте указатель мыши**(`cursor`) так, чтобы при наведении он принимал вид `«руки»`(`pointer`).
    - Укажите, что **при наведении** курсора кнопка **меняет цвет фона** на более темный синий (`#0056b3`).

```css
body {
  font-family: Arial, sans-serif;
  line-height: 1.6;
  margin: 0;
  padding: 0;
  background-color: #f4f4f9;
  color: #333;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

header {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
}

footer {
  background-color: #333;
  color: #fff;
  padding: 10px 20px;
  text-align: center;
  margin-top: auto;
}

.container {
  max-width: 800px;
  margin: 20px auto;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

h1,
h2 {
  text-align: center;
}

.question {
  margin-bottom: 20px;
}

.question h3 {
  margin-bottom: 10px;
}

.options {
  list-style: none;
  padding: 0;
}

.options li {
  margin-bottom: 8px;
}

.btn-submit {
  display: block;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  font-weight: bold;
  color: #fff;
  background-color: #007bff;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  margin-top: 20px;
}

.btn-submit:hover {
  background-color: #0056b3;
}
```
