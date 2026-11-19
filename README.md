# Каталог книг с поиском и фильтрацией по автору и году
Учебная лабораторная работа №6.

## Что реализовано
- Инициализирован проект: `npm init`, установлен `express@5.2.1`.
- Статические файлы (`HTML`, `CSS`, `JS`, изображения) отдаются из папки `public/`
  через `express.static`.
- Сервер запускается на порту `3000` (или из переменной окружения `PORT`).

## Структура файлов
- `public` 
  - `index.html`
  - `style.css`
  - `script.js`
  - `about.html`
  - `manifest.js`
  - `sw.js`
  - `images/`
    - `lb1.jpg`
    - `ai.jpg`
    - `gd.jpg`
    - `gr.jpg`
    - `hp.jpg`
    - `izt.jpg`
    - `k.jpg`
    - `micro.jpg`
    - `pc.jpg`
    - `sg.jpg`
    - `smon.jpg`
- `examples`
  - `alert1.png`
  - `alert2.png`
  - `alert3.png`
  - `console.png`
  - `console_example.png`
- `.gitignore`
- `README.md`
- `package.json`
- `package-lock.json`
- `server.js`


## Запуск
npm install
npm start


## Валидность
- HTML и CSS проверены через W3C Validator, а JS - через jsvalidator: ошибок нет. 
- Контрастность проверена через WebAIM, соотношение не менее 4.5:1.


## Автор
Теребинов Никита, 932420, вариант - 9.