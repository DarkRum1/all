var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/din', function(req, res, next) {
  res.render('hero', {
    title: "Дин Винчестер",
    pic: "images/din.jpg",
    desc: "Один из сильнейших в мире охотников на нечисть."
  });
});
router.get('/sam', function(req, res, next) {
  res.render('hero', {
    title: "Сэм Винчестер",
    pic: "images/sam.jpg",
    desc: "Один из сильнейших в мире охотников на нечисть."
  });
});
router.get('/bob', function(req, res, next) {
  res.render('hero', {
    title: "Бобби Сингер",
    pic: "images/bob.jpg",
    desc: "Охотник, эксперт демонологии и мифологии."
  });
});
router.get('/kas', function(req, res, next) {
  res.render('hero', {
    title: "Кастиэль",
    pic: "images/kas.jpg",
    desc: "Ангел, вернувший Дина из Ада на Землю и, впоследствии, ставший членом семьи Винчестеров."
  });
});
router.get('/kroul', function(req, res, next) {
  res.render('hero', {
    title: "Кроули",
    pic: "images/kroul.jpg",
    desc: "Могущественный демон и Король перекрёстков."
  });
});
module.exports = router;
