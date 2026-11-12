const IMG = {
  hero:'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1000&q=80',
  win1:'https://images.unsplash.com/photo-1503387762-592deb58ef4e?w=600&q=80',
  win2:'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=600&q=80',
  balc1:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&q=80',
  balc2:'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=600&q=80',
  door1:'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80'
};

const PROFILES = [
  {name:'Rehau',line:'Blitz / Delight',chambers:3,glass:'2-камерный стеклопакет',warm:'до -30°C',price:'от 18 900 ₽/м²',pro:'Немецкое качество, долговечность',img:IMG.win1},
  {name:'KBE',line:'Expert / Master',chambers:3,glass:'2-камерный стеклопакет',warm:'до -28°C',price:'от 15 400 ₽/м²',pro:'Оптимальное соотношение цена/качество',img:IMG.win2},
  {name:'Exprof',line:'Standard / Comfort',chambers:3,glass:'2-камерный стеклопакет',warm:'до -25°C',price:'от 12 900 ₽/м²',pro:'Доступная цена, хорошая теплоизоляция',img:IMG.win1}
];

const SERVICES = [
  {id:'windows',name:'Пластиковые окна',desc:'Поворотно-откидные конструкции, ламинация, москитные сетки. Монтаж по ГОСТ.',img:IMG.win1,price:'от 18 900 ₽/м²'},
  {id:'balcony',name:'Балконы и лоджии',desc:'Остекление с выносом и без, утепление, отделка, встроенная мебель.',img:IMG.balc1,price:'от 32 000 ₽'},
  {id:'doors',name:'Входные группы',desc:'Алюминиевые и ПВХ входные двери, доводчики, домофоны.',img:IMG.door1,price:'от 45 000 ₽'}
];