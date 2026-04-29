# Loading Styling — Server

News API сервер на Koa с эмуляцией задержки.

## Запуск локально

```bash
npm install
npm start   # порт 3000
```

## API

`GET /api/news` — возвращает массив новостей (с задержкой ~2 сек)

## Деплой на Render

1. Создайте новый **Web Service** на render.com
2. Подключите этот репозиторий
3. Build Command: `npm install`
4. Start Command: `node index.js`
5. После деплоя скопируйте URL и вставьте в `src/index.js` клиента
