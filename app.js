// БАЗА ДАННЫХ (Один рабочий комплект для доработки)
const PRODUCTS = [
  {
    id: 1,
    name: 'Комплект «УЧ-1» AISI 430',
    category: 'summer',
    steel: 'AISI 430',
    oldPrice: 143400,
    newPrice: 113400,
    warranty: '2 года',
    lifetime: '10 лет',
    gift: 'Тканевый чехол + подсветка в подарок 🎁',
    badge: '🔥 Популярность',
    image: 'assets/chan_uch1_render.png',
    imageInterior: 'assets/chan_uch1_interior.jpg',
    livePhotos: [
      'assets/chan_uch1.jpg',
      'assets/chan_uch1_workshop.jpg',
      'assets/chan_uch1_live_1.jpg',
      'assets/chan_uch1_live_2.jpg',
      'assets/chan_uch1_live_3.jpg',
      'assets/chan_uch1_live_4.jpg'
    ],
    ladder: 'Приставная лестница из лиственницы с поручнями',
    stove: 'Приварная печь из стали 09г2с (3 мм) с подставкой',
    hotspots: [
      {
        id: 'seam',
        slideIndex: 1,
        x: 41,
        y: 58,
        title: 'Сварные швы зачищены и безопасны для купающихся',
        text: 'Мы тщательно зачищаем сварные швы и доводим их до гладкости. Можно не беспокоиться о порезах и травмах во время купания.',
        image: 'assets/weld_seam.png'
      },
      {
        id: 'footrest',
        slideIndex: 1,
        x: 52,
        y: 82,
        title: 'Прочное дно с подставкой для ног',
        text: 'Дно имеет толщину 3мм, не "гуляет" под весом. Установлена подставка для ног, которая скрывает слив и защищает ноги от нагретого металла.',
        image: 'assets/footrest.png'
      },
      {
        id: 'lining',
        slideIndex: 1,
        x: 72,
        y: 42,
        align: 'right',
        title: 'Аккуратная отделка чана лиственницей сорта С',
        text: 'Все деревянные элементы обработаны тонирующей антисептической пропиткой, защищающей от плесени и гниения.',
        image: 'assets/lining.png'
      }
    ],
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '95.5 см' },
      { name: 'Рабочий объем', value: '1250 литров' },
      { name: 'Материал чаши', value: 'Нержавеющая сталь AISI 430' },
      { name: 'Толщина металла', value: 'Стенки 1.5 мм, дно 3 мм' },
      { name: 'Сливной кран', value: '42 мм (1 1/4 дюйма) с шаровым краном' },
      { name: 'Обработка швов', value: 'Электрохимическая пассивация' },
      { name: 'Поверхность', value: 'Сатинирование внутренней поверхности' },
      { name: 'Внутренняя отделка', value: 'Лиственница сорта «С»' }
    ]
  },
  {
    id: 2,
    name: 'Комплект «УЧ-2» AISI 430',
    category: 'summer',
    steel: 'AISI 430',
    oldPrice: 151000,
    newPrice: 121000,
    warranty: '2 года',
    lifetime: '10 лет',
    gift: 'Тканевый чехол + подсветка в подарок 🎁',
    badge: '🔥 Популярность',
    image: 'assets/chan_uch2_render.png',
    imageInterior: 'assets/chan_uch1_interior.jpg',
    livePhotos: [
      'assets/chan_uch2_main.jpg',
      'assets/chan_uch2_live_1.jpg',
      'assets/chan_uch2_live_2.jpg',
      'assets/chan_uch2_live_3.jpg',
      'assets/chan_uch2_live_4.jpg'
    ],
    hotspots: [
      {
        id: 'seam',
        slideIndex: 1,
        x: 41,
        y: 58,
        title: 'Сварные швы зачищены и безопасны для купающихся',
        text: 'Мы тщательно зачищаем сварные швы и доводим их до гладкости. Можно не беспокоиться о порезах и травмах во время купания.',
        image: 'assets/weld_seam.png'
      },
      {
        id: 'footrest',
        slideIndex: 1,
        x: 52,
        y: 82,
        title: 'Прочное дно с подставкой для ног',
        text: 'Дно имеет толщину 3мм, не "гуляет" под весом. Установлена подставка для ног, которая скрывает слив и защищает ноги от нагретого металла.',
        image: 'assets/footrest.png'
      },
      {
        id: 'lining',
        slideIndex: 1,
        x: 72,
        y: 42,
        align: 'right',
        title: 'Аккуратная отделка чана лиственницей сорта С',
        text: 'Все деревянные элементы обработаны тонирующей антисептической пропиткой, защищающей от плесени и гниения.',
        image: 'assets/lining.png'
      }
    ],
    ladder: 'Металлическая лестница с площадкой и поручнем',
    stove: 'Печь ветрозащита (без дна)',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '95.5 см' },
      { name: 'Рабочий объем', value: '1250 литров' },
      { name: 'Материал чаши', value: 'Нержавеющая сталь AISI 430' },
      { name: 'Толщина металла', value: 'Стенки 1.5 мм, дно 3 мм' },
      { name: 'Сливной кран', value: '42 мм (1 1/4 дюйма) с шаровым краном' },
      { name: 'Обработка швов', value: 'Электрохимическая пассивация' },
      { name: 'Поверхность', value: 'Сатинирование внутренней поверхности' },
      { name: 'Внутренняя отделка', value: 'Лиственница сорта «С»' }
    ]
  },
  {
    id: 3,
    name: 'Комплект «УЧ-3» AISI 430',
    category: 'summer',
    steel: 'AISI 430',
    oldPrice: 175000,
    newPrice: 148400,
    warranty: '7 лет',
    lifetime: '15 лет',
    gift: 'Тканевый чехол + подсветка в подарок 🎁',
    badge: '🔥🔥 Популярность',
    image: 'assets/chan_uch3_render.png',
    imageInterior: 'assets/chan_summer_interior.jpg',
    livePhotos: [
      'assets/chan_uch3_live.jpg'
    ],
    hotspots: [
      {
        id: 'seam',
        slideIndex: 1,
        x: 42,
        y: 40,
        align: 'left',
        title: 'Сварные швы зачищены и безопасны для купающихся',
        text: 'Мы тщательно зачищаем сварные швы и доводим их до гладкости. Можно не беспокоиться о порезах и травмах во время купания.',
        image: 'assets/weld_seam.png'
      },
      {
        id: 'footrest',
        slideIndex: 1,
        x: 50,
        y: 72,
        title: 'Прочное дно с подставкой для ног',
        text: 'Дно имеет толщину 3мм, не "гуляет" под весом. Установлена подставка для ног, которая скрывает слив и защищает ноги от нагретого металла.',
        image: 'assets/footrest.png'
      },
      {
        id: 'lining',
        slideIndex: 1,
        x: 64,
        y: 27,
        align: 'right',
        title: 'Аккуратная отделка чана лиственницей сорта А',
        text: 'Все деревянные элементы обработаны тонирующей антисептической пропиткой, защищающей от плесени и гниения.',
        image: 'assets/lining.png'
      }
    ],
    ladder: 'Приставная лестница из лиственницы с поручнями',
    stove: 'Печь-подставка с металлическим дном',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '97 см' },
      { name: 'Рабочий объем', value: '1250 литров' },
      { name: 'Материал чаши', value: 'Нержавеющая сталь AISI 430' },
      { name: 'Толщина металла', value: 'Стенки 2 мм, дно 3 мм' },
      { name: 'Сливной кран', value: '50 мм (быстрый слив)' },
      { name: 'Обработка швов', value: 'Электрохимическая пассивация' },
      { name: 'Поверхность', value: 'Сатинирование (матовый блеск)' },
      { name: 'Внутренняя отделка', value: 'Лиственница сорта А ("Стандарт")' }
    ]
  },
  {
    id: 4,
    name: 'Комплект «УЧ-4» AISI 304',
    category: 'summer',
    steel: 'AISI 304',
    oldPrice: 198000,
    newPrice: 173900,
    warranty: '15 лет',
    lifetime: '30 лет',
    gift: 'Тканевый чехол + подсветка в подарок 🎁',
    badge: '🔥🔥 Популярность',
    image: 'assets/chan_uch3_render.png',
    imageInterior: 'assets/chan_summer_interior.jpg',
    livePhotos: [
      'assets/chan_uch3_live.jpg'
    ],
    hotspots: [
      {
        id: 'seam',
        slideIndex: 1,
        x: 42,
        y: 40,
        align: 'left',
        title: 'Сварные швы зачищены и безопасны для купающихся',
        text: 'Мы тщательно зачищаем сварные швы и доводим их до гладкости. Можно не беспокоиться о порезах и травмах во время купания.',
        image: 'assets/weld_seam.png'
      },
      {
        id: 'footrest',
        slideIndex: 1,
        x: 50,
        y: 72,
        title: 'Прочное дno с подставкой для ног',
        text: 'Дно имеет толщину 3мм, не "гуляет" под весом. Установлена подставка для ног, которая скрывает слив и защищает ноги от нагретого металла.',
        image: 'assets/footrest.png'
      },
      {
        id: 'lining',
        slideIndex: 1,
        x: 64,
        y: 27,
        align: 'right',
        title: 'Аккуратная отделка чана лиственницей сорта А',
        text: 'Все деревянные элементы обработаны тонирующей антисептической пропиткой, защищающей от плесени и гниения.',
        image: 'assets/lining.png'
      }
    ],
    ladder: 'Приставная лестница из лиственницы с поручнями',
    stove: 'Печь-подставка с металлическим дном + дымоход 2.5 м',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '97 см' },
      { name: 'Рабочий объем', value: '1250 литров' },
      { name: 'Материал чаши', value: 'Нержавеющая сталь AISI 304' },
      { name: 'Толщина металла', value: 'Стенки 2 мм, дно 3 мм' },
      { name: 'Сливной кран', value: '50 мм (быстрый слив)' },
      { name: 'Дымоход', value: 'Комплект дымохода 2.5 м из нерж. стали' },
      { name: 'Обработка швов', value: 'Электрохимическая пассивация' },
      { name: 'Поверхность', value: 'Сатинирование внутренней поверхности' },
      { name: 'Внутренняя отделка', value: 'Лиственница сорта А ("Стандарт")' }
    ]
  },
  {
    id: 5,
    name: 'Комплект «УЧ-5» AISI 430',
    category: 'summer',
    steel: 'AISI 430',
    oldPrice: 202000,
    newPrice: 170450,
    warranty: '7 лет',
    lifetime: '15 лет',
    gift: 'Тканевый чехол + подсветка в подарок 🎁',
    badge: '🔥🔥 Популярность',
    image: 'assets/chan_uch5_render.png',
    imageInterior: 'assets/chan_summer_interior.jpg',
    livePhotos: [
      'assets/chan_uch3_live.jpg'
    ],
    hotspots: [
      {
        id: 'seam',
        slideIndex: 1,
        x: 42,
        y: 40,
        align: 'left',
        title: 'Сварные швы зачищены и безопасны для купающихся',
        text: 'Мы тщательно зачищаем сварные швы и доводим их до гладкости. Можно не беспокоиться о порезах и травмах во время купания.',
        image: 'assets/weld_seam.png'
      },
      {
        id: 'footrest',
        slideIndex: 1,
        x: 50,
        y: 72,
        title: 'Прочное дно с подставкой для ног',
        text: 'Дно имеет толщину 3мм, не "гуляет" под весом. Установлена подставка для ног, которая скрывает слив и защищает ноги от нагретого металла.',
        image: 'assets/footrest.png'
      },
      {
        id: 'lining',
        slideIndex: 1,
        x: 64,
        y: 27,
        align: 'right',
        title: 'Аккуратная отделка чана лиственницей сорта А',
        text: 'Все деревянные элементы обработаны тонирующей антисептической пропиткой, защищающей от плесени и гниения.',
        image: 'assets/lining.png'
      }
    ],
    ladder: 'Приставная лестница из лиственницы с поручнями',
    stove: 'Печь ветрозащита с панорамной дверцей (без дна) + дымоход 2.5 м',
    cover: 'Термокрышка (оксфорд, пенопласт)',
    screen: 'Защитный экран от дымохода',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '97 см' },
      { name: 'Рабочий объем', value: '1250 литров' },
      { name: 'Материал чаши', value: 'Нержавеющая сталь AISI 430' },
      { name: 'Толщина металла', value: 'Стенки 2 мм, дно 3 мм' },
      { name: 'Сливной кран', value: '50 мм (быстрый слив)' },
      { name: 'Дымоход', value: 'Комплект дымохода 2.5 м из нерж. стали' },
      { name: 'Защитный экран', value: 'Защитный экран от дымохода' },
      { name: 'Термокрышка', value: 'Термокрышка (оксфорд, пенопласт)' },
      { name: 'Термометр', value: 'Водяной термометр' },
      { name: 'Обработка швов', value: 'Электрохимическая пассивация' },
      { name: 'Поверхность', value: 'Сатинирование внутренней поверхности' },
      { name: 'Внутренняя отделка', value: 'Лиственница сорта А ("Стандарт")' }
    ]
  },
  {
    id: 6,
    name: 'Комплект «УЧ-6» AISI 430',
    category: 'summer',
    steel: 'AISI 430',
    oldPrice: 189700,
    newPrice: 167050,
    warranty: '7 лет',
    lifetime: '15 лет',
    gift: 'Тканевый чехол + подсветка в подарок 🎁',
    badge: '🔥🔥🔥 Популярность',
    image: 'assets/chan_summer_430.jpg',
    imageInterior: 'assets/chan_summer_interior.jpg',
    livePhotos: [
      'assets/chan_uch3_live.jpg'
    ],
    hotspots: [
      {
        id: 'seam',
        slideIndex: 1,
        x: 42,
        y: 40,
        align: 'left',
        title: 'Сварные швы зачищены и безопасны для купающихся',
        text: 'Мы тщательно зачищаем сварные швы и доводим их до гладкости. Можно не беспокоиться о порезах и травмах во время купания.',
        image: 'assets/weld_seam.png'
      },
      {
        id: 'footrest',
        slideIndex: 1,
        x: 50,
        y: 72,
        title: 'Прочное дно с подставкой для ног',
        text: 'Дно имеет толщину 3мм, не "гуляет" под весом. Установлена подставка для ног, которая скрывает слив и защищает ноги от нагретого металла.',
        image: 'assets/footrest.png'
      },
      {
        id: 'lining',
        slideIndex: 1,
        x: 64,
        y: 27,
        align: 'right',
        title: 'Аккуратная отделка чана лиственницей сорта А',
        text: 'Все деревянные элементы обработаны тонирующей антисептической пропиткой, защищающей от плесени и гниения.',
        image: 'assets/lining.png'
      }
    ],
    ladder: 'Металлическая лестница с площадкой и поручнем',
    stove: 'Печь-подставка с металлическим дном + дымоход 2.5 м',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '97 см' },
      { name: 'Рабочий объем', value: '1250 литров' },
      { name: 'Материал чаши', value: 'Нержавеющая сталь AISI 430' },
      { name: 'Толщина металла', value: 'Стенки 2 мм, дно 3 мм' },
      { name: 'Сливной кран', value: '50 мм (быстрый слив)' },
      { name: 'Дымоход', value: 'Комплект дымохода 2.5 м из нерж. стали' },
      { name: 'Защитный экран', value: 'Защитный экран от дымохода' },
      { name: 'Столик', value: 'Центральный столик' },
      { name: 'Обработка швов', value: 'Электрохимическая пассивация' },
      { name: 'Поверхность', value: 'Сатинирование внутренней поверхности' },
      { name: 'Внутренняя отделка', value: 'Лиственница сорта А ("Стандарт")' }
    ]
  },
  {
    id: 7,
    name: 'Комплект «УЧ-7» AISI 304',
    category: 'summer',
    steel: 'AISI 304',
    oldPrice: 217500,
    newPrice: 192550,
    warranty: '15 лет',
    lifetime: '30 лет',
    gift: 'Тканевый чехол + подсветка в подарок 🎁',
    badge: '🔥🔥🔥 Популярность',
    image: 'assets/chan_summer_304.jpg',
    imageInterior: 'assets/chan_summer_interior.jpg',
    livePhotos: [
      'assets/chan_summer_304.jpg'
    ],
    hotspots: [
      {
        id: 'seam',
        slideIndex: 1,
        x: 42,
        y: 40,
        align: 'left',
        title: 'Сварные швы зачищены и безопасны для купающихся',
        text: 'Мы тщательно зачищаем сварные швы и доводим их до гладкости. Можно не беспокоиться о порезах и травмах во время купания.',
        image: 'assets/weld_seam.png'
      },
      {
        id: 'footrest',
        slideIndex: 1,
        x: 50,
        y: 72,
        title: 'Прочное дно с подставкой для ног',
        text: 'Дно имеет толщину 3мм, не "гуляет" под весом. Установлена подставка для ног, которая скрывает слив и защищает ноги от нагретого металла.',
        image: 'assets/footrest.png'
      },
      {
        id: 'lining',
        slideIndex: 1,
        x: 64,
        y: 27,
        align: 'right',
        title: 'Аккуратная отделка чана лиственницей сорта А',
        text: 'Все деревянные элементы обработаны тонирующей антисептической пропиткой, защищающей от плесени и гниения.',
        image: 'assets/lining.png'
      }
    ],
    ladder: 'Металлическая лестница с площадкой и поручнем',
    stove: 'Печь-подставка с металлическим дном + дымоход 2.5 м',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '97 см' },
      { name: 'Рабочий объем', value: '1250 литров' },
      { name: 'Материал чаши', value: 'Нержавеющая сталь AISI 304' },
      { name: 'Толщина металла', value: 'Стенки 2 мм, дно 3 мм' },
      { name: 'Сливной кран', value: '50 мм (быстрый слив)' },
      { name: 'Дымоход', value: 'Комплект дымохода 2.5 м из нерж. стали' },
      { name: 'Защитный экран', value: 'Защитный экран от дымохода' },
      { name: 'Столик', value: 'Центральный столик' },
      { name: 'Обработка швов', value: 'Электрохимическая пассивация' },
      { name: 'Поверхность', value: 'Сатинирование внутренней поверхности' },
      { name: 'Внутренняя отделка', value: 'Лиственница сорта А ("Стандарт")' }
    ]
  },
  {
    id: 8,
    name: 'Комплект «Летний» AISI 430',
    category: 'summer',
    steel: 'AISI 430',
    oldPrice: 182700,
    newPrice: 159000,
    warranty: '7 лет',
    lifetime: '15 лет',
    gift: 'Тканевый чехол + подсветка в подарок 🎁',
    badge: '☀️ Хит сезона',
    image: 'assets/chan_summer_430.jpg', // Вид снаружи (рендер)
    imageInterior: 'assets/chan_summer_interior.jpg', // Вид изнутри (сухой рендер)
    livePhotos: [
      'assets/live_1.jpg', // Установленный чан на участке
      'assets/live_2.jpg', // Чан в работе с цитрусовым наполнением
      'assets/live_3.jpg'  // Отдых в чане у бани на закате
    ],
    hotspots: [
      {
        id: 'seam',
        slideIndex: 1,
        x: 42,
        y: 40,
        align: 'left',
        title: 'Сварные швы зачищены и безопасны для купающихся',
        text: 'Мы тщательно зачищаем сварные швы и доводим их до гладкости. Можно не беспокоиться о порезах и травмах во время купания.',
        image: 'assets/weld_seam.png'
      },
      {
        id: 'footrest',
        slideIndex: 1,
        x: 50,
        y: 72,
        title: 'Прочное дно с подставкой для ног',
        text: 'Дно имеет толщину 3мм, не "гуляет" под весом. Установлена подставка для ног, которая скрывает слив и защищает ноги от нагретого металла.',
        image: 'assets/footrest.png'
      },
      {
        id: 'lining',
        slideIndex: 1,
        x: 64,
        y: 27,
        align: 'right',
        title: 'Аккуратная отделка чана сибирской лиственницей "Стандарт"',
        text: 'Все деревянные элементы обработаны тонирующей антисептической пропиткой, защищающей от плесени и гниения.',
        image: 'assets/lining.png'
      }
    ],
    ladder: 'Металлическая лестница с площадкой и поручнем',
    stove: 'Печь-подставка с металлическим дном',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '97 см' },
      { name: 'Материал чаши', value: 'Нержавеющая сталь AISI 430' },
      { name: 'Толщина металла', value: 'Стенки 2 мм, дно 3 мм' },
      { name: 'Сливной кран', value: '48.3 мм (быстрый слив)' },
      { name: 'Защитный экран', value: 'Экран от дымохода' },
      { name: 'Обработка швов', value: 'Электрохимическая пассивация' },
      { name: 'Поверхность', value: 'Сатинирование (матовый блеск)' },
      { name: 'Внутренняя отделка', value: 'Сибирская лиственница "Стандарт"' }
    ]
  },
  {
    id: 9,
    name: 'Комплект «Летний» AISI 304',
    category: 'summer',
    steel: 'AISI 304',
    oldPrice: 210150,
    newPrice: 184500,
    warranty: '15 лет',
    lifetime: '30 лет',
    gift: 'Тканевый чехол + подсветка в подарок 🎁',
    badge: '💎 Премиум сталь',
    image: 'assets/chan_summer_304.jpg', // Реальное фото на участке
    imageInterior: 'assets/chan_summer_interior.jpg', // Вид изнутри
    livePhotos: [
      'assets/live_1.jpg',
      'assets/live_2.jpg',
      'assets/live_3.jpg'
    ],
    hotspots: [
      {
        id: 'seam',
        slideIndex: 1,
        x: 42,
        y: 40,
        align: 'left',
        title: 'Сварные швы зачищены и безопасны для купающихся',
        text: 'Мы тщательно зачищаем сварные швы и доводим их до гладкости. Можно не беспокоиться о порезах и травмах во время купания.',
        image: 'assets/weld_seam.png'
      },
      {
        id: 'footrest',
        slideIndex: 1,
        x: 50,
        y: 72,
        title: 'Прочное дно с подставкой для ног',
        text: 'Дно имеет толщину 3мм, не "гуляет" под весом. Установлена подставка для ног, которая скрывает слив и защищает ноги от нагретого металла.',
        image: 'assets/footrest.png'
      },
      {
        id: 'lining',
        slideIndex: 1,
        x: 64,
        y: 27,
        align: 'right',
        title: 'Аккуратная отделка чана сибирской лиственницей "Стандарт"',
        text: 'Все деревянные элементы обработаны тонирующей антисептической пропиткой, защищающей от плесени и гниения.',
        image: 'assets/lining.png'
      }
    ],
    ladder: 'Металлическая лестница с площадкой и поручнем',
    stove: 'Печь-подставка с металлическим дном',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '97 см' },
      { name: 'Материал чаши', value: 'Нержавеющая сталь AISI 304' },
      { name: 'Толщина металла', value: 'Стенки 2 мм, дno 3 мм' },
      { name: 'Сливной кран', value: '48.3 мм (быстрый слив)' },
      { name: 'Защитный экран', value: 'Экран от дымохода' },
      { name: 'Обработка швов', value: 'Электрохимическая пассивация' },
      { name: 'Поверхность', value: 'Сатинирование (матовый блеск)' },
      { name: 'Внутренняя отделка', value: 'Сибирская лиственница "Стандарт"' }
    ]
  }
];

// Функция форматирования чисел в валюту рублей
function formatPrice(number) {
  return new Intl.NumberFormat('ru-RU', {
    style: 'currency',
    currency: 'RUB',
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  }).format(number);
}

// РЕНДЕРИНГ КАРТОЧЕК ТОВАРОВ
function renderProducts() {
  const container = document.getElementById('products-feed');
  if (!container) return;

  container.innerHTML = '';

  PRODUCTS.forEach(product => {
    const discount = product.oldPrice - product.newPrice;
    
    // Формируем массив всех слайдов для галереи
    const slides = [
      product.image,
      product.imageInterior,
      ...(product.livePhotos || [])
    ];
    
    // Генерация HTML слайдов
    const slidesHtml = slides.map((imgSrc, index) => {
      const isRender = imgSrc.toLowerCase().endsWith('.png');
      const slideClass = isRender ? 'gallery-slide is-render' : 'gallery-slide';
      const imgClass = isRender ? 'card-image is-render' : 'card-image';
      return `
        <div class="${slideClass}">
          <img src="${imgSrc}" alt="${product.name} (фото ${index + 1})" class="${imgClass}" loading="lazy">
        </div>
      `;
    }).join('');
    
    // Генерация точек-индикаторов
    const dotsHtml = slides.map((_, index) => `
      <span class="indicator-dot ${index === 0 ? 'active' : ''}" data-slide="${index}"></span>
    `).join('');

    // Разметка характеристик
    const specsHtml = product.specs.map(spec => `
      <div class="spec-row">
        <span class="spec-name">${spec.name}</span>
        <span class="spec-val">${spec.value}</span>
      </div>
    `).join('');

    // Генерация хотспотов
    let hotspotsHtml = '';
    if (product.hotspots) {
      hotspotsHtml = product.hotspots.map(hotspot => `
        <div class="hotspot" id="hotspot-${product.id}-${hotspot.id}" style="left: ${hotspot.x}%; top: ${hotspot.y}%;" data-slide="${hotspot.slideIndex}" data-base-x="${hotspot.x}">
          <button class="hotspot-btn" aria-label="Показать детали">
            <i class="fa-solid fa-plus"></i>
          </button>
          <div class="hotspot-popup ${hotspot.align || 'center'}">
            <div class="hotspot-popup-arrow"></div>
            <button class="hotspot-popup-close" aria-label="Закрыть"><i class="fa-solid fa-xmark"></i></button>
            <img src="${hotspot.image}" alt="${hotspot.title}" class="hotspot-popup-img" loading="lazy">
            <h4 class="hotspot-popup-title">${hotspot.title}</h4>
            <p class="hotspot-popup-text">${hotspot.text}</p>
          </div>
        </div>
      `).join('');
    }

    const card = document.createElement('article');
    card.className = 'product-card';
    card.id = `product-card-${product.id}`;
    
    card.innerHTML = `
      <div class="card-image-container">
        <!-- Слайдер изображений (свайпы) -->
        <div class="card-gallery" id="gallery-${product.id}">
          ${slidesHtml}
        </div>
        
        <!-- Индикаторы свайпа (точки) -->
        <div class="gallery-indicators">
          ${dotsHtml}
        </div>
        
        <!-- Подсказка о свайпе -->
        <div class="swipe-hint">
          <i class="fa-solid fa-left-right"></i>
          <span class="swipe-hint-desktop">Проведите, чтобы увидеть больше фото</span>
          <span class="swipe-hint-mobile">Проведите</span>
        </div>

        ${product.badge ? `<span class="card-badge">${product.badge}</span>` : ''}
        
        <!-- Хотспоты (интерактивные точки) -->
        ${hotspotsHtml}
        
        <div class="card-badges-absolute">
          <span class="badge-item warranty"><i class="fa-solid fa-shield-halved"></i> ${product.warranty} гарантии</span>
          <span class="badge-item lifetime"><i class="fa-solid fa-hourglass-half"></i> ${product.lifetime} службы</span>
        </div>
      </div>
      
      <div class="card-body">
        <h3 class="card-title">${product.name}</h3>
        
        <div class="card-gift-box">
          <div class="gift-icon">
            <i class="fa-solid fa-gift pulse"></i>
          </div>
          <div class="gift-text">
            <strong>ПОДАРОК:</strong> ${product.gift}
          </div>
        </div>
        
        <div class="card-price-block">
          <div class="price-row">
            <div class="price-old">
              <span class="price-label">Старая цена:</span>
              <span class="price-val-old">${formatPrice(product.oldPrice)}</span>
            </div>
            <div class="price-new">
              <span class="price-label">НОВАЯ ЦЕНА:</span>
              <span class="price-val-new">${formatPrice(product.newPrice)}</span>
            </div>
          </div>
          <div class="price-discount">
            <i class="fa-solid fa-circle-check"></i> Ваша экономия: <strong>${formatPrice(discount)}</strong>
          </div>
        </div>

        <!-- Details Accordion -->
        <details class="card-details" id="details-${product.id}">
          <summary class="details-summary">
            <span><i class="fa-solid fa-list-check"></i> Комплектация и параметры</span>
            <i class="fa-solid fa-chevron-down arrow-icon"></i>
          </summary>
          <div class="details-content">
            <div class="equipment-highlight">
              <p><strong><i class="fa-solid fa-stairs"></i> Лестница:</strong> ${product.ladder}</p>
              <p><strong><i class="fa-solid fa-fire-burner"></i> Очаг нагрева:</strong> ${product.stove}</p>
            </div>
            <div class="specs-table">
              ${specsHtml}
            </div>
          </div>
        </details>
        
        <div class="card-actions">
          <button class="btn-copy-title" data-title="${product.name}" id="copy-btn-${product.id}">
            <i class="fa-regular fa-copy"></i> Выбрать этот комплект (скопировать)
          </button>
          <span class="copy-hint-text">Название скопируется в буфер. Просто вставьте его в наш диалог.</span>
        </div>
      </div>
    `;
    
    container.appendChild(card);

    // Логика отслеживания свайпа для обновления точек
    setTimeout(() => {
      const gallery = document.getElementById(`gallery-${product.id}`);
      if (gallery) {
        const dots = gallery.parentElement.querySelectorAll('.indicator-dot');
        const hotspotElements = gallery.parentElement.querySelectorAll('.hotspot');
        
        // Функция динамического позиционирования хотспотов для эффекта прокрутки вместе с фото
        const updateHotspotPositions = () => {
          const width = gallery.clientWidth;
          const scrollLeft = gallery.scrollLeft;
          
          hotspotElements.forEach(hotspot => {
            const slideIndex = parseInt(hotspot.getAttribute('data-slide'));
            const baseXPercent = parseFloat(hotspot.getAttribute('data-base-x'));
            
            // Вычисляем смещение слайда относительно текущего scrollLeft
            const slideOffset = (slideIndex * width) - scrollLeft;
            const baseX = (baseXPercent / 100) * width;
            const currentLeft = baseX + slideOffset;
            
            hotspot.style.left = `${currentLeft}px`;
            
            // Точка видна только тогда, когда её слайд в зоне видимости
            if (currentLeft >= -20 && currentLeft <= width + 20) {
              hotspot.classList.add('visible');
              
              // Закрываем открытый поп-ап, если пользователь прокрутил слайд в сторону на 30% и более
              if (Math.abs(slideOffset) > width * 0.3) {
                hotspot.classList.remove('active');
              }
            } else {
              hotspot.classList.remove('visible');
              hotspot.classList.remove('active');
            }
          });
        };

        // Переключение по точкам при клике
        dots.forEach((dot, index) => {
          dot.addEventListener('click', () => {
            const width = gallery.clientWidth;
            gallery.scrollTo({
              left: index * width,
              behavior: 'smooth'
            });
          });
        });

        // Отслеживание скролла (свайпа)
        gallery.addEventListener('scroll', () => {
          const width = gallery.clientWidth;
          const scrollLeft = gallery.scrollLeft;
          const activeIndex = Math.round(scrollLeft / width);
          
          dots.forEach((dot, idx) => {
            if (idx === activeIndex) {
              dot.classList.add('active');
            } else {
              dot.classList.remove('active');
            }
          });

          updateHotspotPositions();
        }, { passive: true });

        // Поддержка изменения размеров экрана и поворота устройства
        window.addEventListener('resize', updateHotspotPositions, { passive: true });

        // Обработка кликов по хотспотам
        hotspotElements.forEach(hotspot => {
          const btn = hotspot.querySelector('.hotspot-btn');
          const closeBtn = hotspot.querySelector('.hotspot-popup-close');
          
          if (btn) {
            btn.addEventListener('click', (e) => {
              e.stopPropagation();
              // Закрываем все остальные открытые хотспоты на этой карточке
              hotspotElements.forEach(h => {
                if (h !== hotspot) h.classList.remove('active');
              });
              hotspot.classList.toggle('active');
            });
          }
          
          if (closeBtn) {
            closeBtn.addEventListener('click', (e) => {
              e.stopPropagation();
              hotspot.classList.remove('active');
            });
          }
          
          // Закрытие при клике по самому документу
          document.addEventListener('click', (e) => {
            if (!hotspot.contains(e.target)) {
              hotspot.classList.remove('active');
            }
          });
        });

        // Первичная инициализация позиций хотспотов
        updateHotspotPositions();
      }
    }, 100);
  });
}

// ТАЙМЕР ОБРАТНОГО ОТСЧЕТА ДО КОНЦА НЕДЕЛИ
function initCountdownTimer() {
  function updateTimer() {
    const now = new Date();
    const nextSunday = new Date();
    const currentDay = now.getDay();
    const daysToSunday = currentDay === 0 ? 0 : 7 - currentDay;
    
    nextSunday.setDate(now.getDate() + daysToSunday);
    nextSunday.setHours(23, 59, 59, 999);
    
    const diff = nextSunday - now;
    
    if (diff <= 0) {
      const expiredHtml = "<span class='timer-expired'>Скидки продлены! Успейте заказать!</span>";
      const countdownEl = document.getElementById('countdown');
      if (countdownEl) countdownEl.innerHTML = expiredHtml;
      
      const hCountdownEl = document.querySelector('.header-timer-countdown');
      if (hCountdownEl) hCountdownEl.textContent = "Скидки продлены!";
      return;
    }
    
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);
    
    const dStr = d.toString().padStart(2, '0');
    const hStr = h.toString().padStart(2, '0');
    const mStr = m.toString().padStart(2, '0');
    const sStr = s.toString().padStart(2, '0');
    
    // Обновляем элементы основного таймера
    const daysEl = document.getElementById('days');
    const hoursEl = document.getElementById('hours');
    const minutesEl = document.getElementById('minutes');
    const secondsEl = document.getElementById('seconds');
    
    if (daysEl) daysEl.textContent = dStr;
    if (hoursEl) hoursEl.textContent = hStr;
    if (minutesEl) minutesEl.textContent = mStr;
    if (secondsEl) secondsEl.textContent = sStr;

    // Обновляем элементы мини-таймера в шапке
    const hDaysEl = document.getElementById('h-days');
    const hHoursEl = document.getElementById('h-hours');
    const hMinutesEl = document.getElementById('h-minutes');
    const hSecondsEl = document.getElementById('h-seconds');

    if (hDaysEl) hDaysEl.textContent = dStr;
    if (hHoursEl) hHoursEl.textContent = hStr;
    if (hMinutesEl) hMinutesEl.textContent = mStr;
    if (hSecondsEl) hSecondsEl.textContent = sStr;
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);

  // Следим за скроллом для липкого таймера в шапке
  const mainHeader = document.getElementById('main-header');
  const timerContainer = document.getElementById('timer-container');

  if (mainHeader && timerContainer) {
    window.addEventListener('scroll', () => {
      const rect = timerContainer.getBoundingClientRect();
      const headerHeight = mainHeader.offsetHeight || 60;
      
      // Если нижняя граница основного таймера скрывается под шапкой
      if (rect.bottom < headerHeight) {
        mainHeader.classList.add('show-mini-timer');
      } else {
        mainHeader.classList.remove('show-mini-timer');
      }
    }, { passive: true });
  }
}

// ИНИЦИАЛИЗАЦИЯ
document.addEventListener('DOMContentLoaded', () => {
  initCountdownTimer();
  renderProducts();

  // Инициализация полноэкранного просмотра фото (Lightbox)
  const lightboxModal = document.getElementById('lightbox-modal');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxClose = lightboxModal ? lightboxModal.querySelector('.lightbox-close') : null;
  const lightboxPrev = document.getElementById('lightbox-prev');
  const lightboxNext = document.getElementById('lightbox-next');

  let activeGalleryImages = [];
  let activeImageIndex = 0;

  function updateLightboxImage() {
    if (activeGalleryImages.length === 0) return;
    const currentSrc = activeGalleryImages[activeImageIndex];
    if (currentSrc.toLowerCase().endsWith('.png')) {
      lightboxImg.classList.add('is-render');
    } else {
      lightboxImg.classList.remove('is-render');
    }
    lightboxImg.style.opacity = '0.3';
    lightboxImg.src = currentSrc;
    lightboxImg.onload = () => {
      lightboxImg.style.opacity = '1';
    };
  }

  function showNextImage() {
    if (activeGalleryImages.length <= 1) return;
    activeImageIndex = (activeImageIndex + 1) % activeGalleryImages.length;
    updateLightboxImage();
  }

  function showPrevImage() {
    if (activeGalleryImages.length <= 1) return;
    activeImageIndex = (activeImageIndex - 1 + activeGalleryImages.length) % activeGalleryImages.length;
    updateLightboxImage();
  }

  if (lightboxModal && lightboxImg) {
    // Открытие при клике на картинку
    document.addEventListener('click', (e) => {
      const cardImg = e.target.closest('.card-gallery .card-image');
      if (cardImg) {
        const productCard = cardImg.closest('.product-card');
        if (productCard) {
          const productId = parseInt(productCard.id.replace('product-card-', ''));
          const product = PRODUCTS.find(p => p.id === productId);
          if (product) {
            // Формируем массив всех слайдов точно так же, как при рендере
            activeGalleryImages = [
              product.image,
              product.imageInterior,
              ...(product.livePhotos || [])
            ];
            
            // Находим индекс кликнутой картинки по относительному пути src
            const clickedSrc = cardImg.getAttribute('src');
            activeImageIndex = activeGalleryImages.indexOf(clickedSrc);
            if (activeImageIndex === -1) activeImageIndex = 0;

            const currentSrc = activeGalleryImages[activeImageIndex];
            if (currentSrc.toLowerCase().endsWith('.png')) {
              lightboxImg.classList.add('is-render');
            } else {
              lightboxImg.classList.remove('is-render');
            }
            lightboxImg.src = currentSrc;
            lightboxModal.classList.add('active');
            document.body.classList.add('lightbox-open');
          }
        }
      }
    });

    // Закрытие при клике на крестик
    if (lightboxClose) {
      lightboxClose.addEventListener('click', () => {
        lightboxModal.classList.remove('active');
        document.body.classList.remove('lightbox-open');
        lightboxImg.classList.remove('is-render');
        activeGalleryImages = [];
      });
    }

    // Навигация по стрелкам
    if (lightboxPrev) {
      lightboxPrev.addEventListener('click', (e) => {
        e.stopPropagation();
        showPrevImage();
      });
    }

    if (lightboxNext) {
      lightboxNext.addEventListener('click', (e) => {
        e.stopPropagation();
        showNextImage();
      });
    }

    // Закрытие при клике на фон
    lightboxModal.addEventListener('click', (e) => {
      if (e.target === lightboxModal || e.target.classList.contains('lightbox-content')) {
        lightboxModal.classList.remove('active');
        document.body.classList.remove('lightbox-open');
        lightboxImg.classList.remove('is-render');
        activeGalleryImages = [];
      }
    });

    // Закрытие по кнопке Escape и навигация клавиатурой
    document.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('active')) return;
      
      if (e.key === 'Escape') {
        lightboxModal.classList.remove('active');
        document.body.classList.remove('lightbox-open');
        lightboxImg.classList.remove('is-render');
        activeGalleryImages = [];
      } else if (e.key === 'ArrowRight') {
        showNextImage();
      } else if (e.key === 'ArrowLeft') {
        showPrevImage();
      }
    });

    // Свайпы на мобильных устройствах
    let touchStartX = 0;
    let touchEndX = 0;

    lightboxModal.addEventListener('touchstart', (e) => {
      touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });

    lightboxModal.addEventListener('touchend', (e) => {
      touchEndX = e.changedTouches[0].screenX;
      
      const swipeThreshold = 50;
      if (touchEndX < touchStartX - swipeThreshold) {
        showNextImage(); // Свайп влево
      } else if (touchEndX > touchStartX + swipeThreshold) {
        showPrevImage(); // Свайп вправо
      }
    }, { passive: true });
  }
  
  // Клик копирования названия
  document.addEventListener('click', (e) => {
    const btn = e.target.closest('.btn-copy-title');
    if (btn) {
      const title = btn.getAttribute('data-title');
      navigator.clipboard.writeText(title).then(() => {
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Скопировано! Вставьте в чат';
        btn.classList.add('copied');
        
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('copied');
        }, 3000);
      }).catch(err => {
        console.error('Ошибка копирования:', err);
        const area = document.createElement('textarea');
        area.value = title;
        document.body.appendChild(area);
        area.select();
        document.execCommand('copy');
        document.body.removeChild(area);
        
        const originalText = btn.innerHTML;
        btn.innerHTML = '<i class="fa-solid fa-check"></i> Скопировано! Вставьте в чат';
        btn.classList.add('copied');
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.classList.remove('copied');
        }, 3000);
      });
    }
  });
});
