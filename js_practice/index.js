for (let i = 1; i <= N; i++) {
  // Создаем элемент h2
  const header = document.createElement("h2");
  // Устанавливаем текст заголовка
  header.textContent = `Header${i}`;
  // Добавляем заголовок на страницу
  document.body.appendChild(header);
}
