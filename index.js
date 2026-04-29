const Koa = require('koa');
const Router = require('koa-router');
const cors = require('koa-cors');
const slow = require('koa-slow');

const app = new Koa();
const router = new Router();

const news = [
  {
    id: 1,
    title: 'Вышел новый трейлер фильма «Дюна 3»',
    text: 'Студия Warner Bros. опубликовала первый официальный трейлер третьей части эпической саги.',
    image: 'https://placehold.co/80x80/cccccc/999999?text=News',
  },
  {
    id: 2,
    title: 'Канны 2025: объявлены победители',
    text: 'На Каннском кинофестивале вручили главные награды. Золотую пальмовую ветвь получил режиссёр из Японии.',
    image: 'https://placehold.co/80x80/cccccc/999999?text=News',
  },
  {
    id: 3,
    title: 'Марвел анонсировал новую фазу',
    text: 'Кинематографическая вселенная Marvel объявила о планах на ближайшие три года. В списке 12 новых проектов.',
    image: 'https://placehold.co/80x80/cccccc/999999?text=News',
  },
  {
    id: 4,
    title: 'Оскар 2026: кто в фаворитах?',
    text: 'Эксперты уже делают первые прогнозы на главную кинопремию года. Среди фаворитов три европейских фильма.',
    image: 'https://placehold.co/80x80/cccccc/999999?text=News',
  },
  {
    id: 5,
    title: 'Рекорд кассовых сборов побит',
    text: 'Новый анимационный фильм студии Pixar собрал за первый уикенд более 300 миллионов долларов.',
    image: 'https://placehold.co/80x80/cccccc/999999?text=News',
  },
];

app.use(cors());

// Эмуляция задержки 2-3 секунды
app.use(slow({ delay: 2000 }));

router.get('/api/news', (ctx) => {
  ctx.body = news;
});

app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
