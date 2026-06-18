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
    lifetime: '12 лет',
    gift: 'Тканевый чехол + подсветка в подарок 🎁',
    badge: '🔥 Популярность',
    image: 'assets/chan_uch1.jpg',
    imageInterior: 'assets/chan_uch1_interior.jpg',
    livePhotos: [
      'assets/chan_uch1_workshop.jpg',
      'assets/chan_uch1_live_1.jpg',
      'assets/chan_uch1_live_2.jpg',
      'assets/chan_uch1_live_3.jpg',
      'assets/chan_uch1_live_4.jpg'
    ],
    ladder: 'Приставная лестница из лиственницы с поручнями',
    stove: 'Приварная печь из стали 09г2с (3 мм) с подставкой',
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
    lifetime: '12 лет',
    gift: 'Тканевый чехол + подсветка в подарок 🎁',
    badge: '🔥 Популярность',
    image: 'assets/chan_uch2_main.jpg',
    imageInterior: 'assets/chan_uch1_interior.jpg',
    livePhotos: [
      'assets/chan_uch2_live_1.jpg',
      'assets/chan_uch2_live_2.jpg',
      'assets/chan_uch2_live_3.jpg',
      'assets/chan_uch2_live_4.jpg'
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
    image: 'assets/chan_uch3.jpg',
    imageInterior: 'assets/chan_uch3.jpg',
    livePhotos: [
      'assets/chan_uch3.jpg'
    ],
    ladder: 'Приставная лестница из лиственницы с поручнями',
    stove: 'Печь-подставка с металлическим дном',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '97 см' },
      { name: 'Рабочий объем', value: '1688 литров' },
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
    image: 'assets/chan_uch3.jpg',
    imageInterior: 'assets/chan_uch3.jpg',
    livePhotos: [
      'assets/chan_uch3.jpg'
    ],
    ladder: 'Приставная лестница из лиственницы с поручнями',
    stove: 'Печь-подставка с металлическим дном + дымоход 2.5 м',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '97 см' },
      { name: 'Рабочий объем', value: '1688 литров' },
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
    oldPrice: 175000,
    newPrice: 150050,
    warranty: '7 лет',
    lifetime: '15 лет',
    gift: 'Тканевый чехол + подсветка в подарок 🎁',
    badge: '🔥🔥 Популярность',
    image: 'assets/chan_uch3.jpg',
    imageInterior: 'assets/chan_uch3.jpg',
    livePhotos: [
      'assets/chan_uch3.jpg'
    ],
    ladder: 'Приставная лестница из лиственницы с поручнями',
    stove: 'Печь ветрозащита с панорамной дверцей (без дна) + дымоход 2.5 м',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '97 см' },
      { name: 'Рабочий объем', value: '1688 литров' },
      { name: 'Материал чаши', value: 'Нержавеющая сталь AISI 430' },
      { name: 'Толщина металла', value: 'Стенки 2 мм, дно 3 мм' },
      { name: 'Сливной кран', value: '50 мм (быстрый слив)' },
      { name: 'Дымоход', value: 'Комплект дымохода 2.5 м из нерж. стали' },
      { name: 'Термометр', value: 'Водяной термометр в комплекте' },
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
      'assets/chan_summer_430.jpg'
    ],
    ladder: 'Металлическая лестница с площадкой и поручнем',
    stove: 'Печь-подставка с металлическим дном + дымоход 2.5 м',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '97 см' },
      { name: 'Рабочий объем', value: '1688 литров' },
      { name: 'Материал чаши', value: 'Нержавеющая сталь AISI 430' },
      { name: 'Толщина металла', value: 'Стенки 2 мм, дно 3 мм' },
      { name: 'Сливной кран', value: '50 мм (быстрый слив)' },
      { name: 'Дымоход', value: 'Комплект дымохода 2.5 м из нерж. стали' },
      { name: 'Защитный экран', value: 'Защитный экран от дымохода в комплекте' },
      { name: 'Столик', value: 'Центральный столик в комплекте' },
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
    ladder: 'Металлическая лестница с площадкой и поручнем',
    stove: 'Печь-подставка с металлическим дном + дымоход 2.5 м',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '97 см' },
      { name: 'Рабочий объем', value: '1688 литров' },
      { name: 'Материал чаши', value: 'Нержавеющая сталь AISI 304' },
      { name: 'Толщина металла', value: 'Стенки 2 мм, дно 3 мм' },
      { name: 'Сливной кран', value: '50 мм (быстрый слив)' },
      { name: 'Дымоход', value: 'Комплект дымохода 2.5 м из нерж. стали' },
      { name: 'Защитный экран', value: 'Защитный экран от дымохода в комплекте' },
      { name: 'Столик', value: 'Центральный столик в комплекте' },
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
    ladder: 'Металлическая лестница с площадкой и поручнем',
    stove: 'Печь-подставка с металлическим дном',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '97 см' },
      { name: 'Материал чаши', value: 'Нержавеющая сталь AISI 430' },
      { name: 'Толщина металла', value: 'Стенки 2 мм, дно 3 мм' },
      { name: 'Сливной кран', value: '48.3 мм (быстрый слив)' },
      { name: 'Защитный экран', value: 'Экран от дымохода в комплекте' },
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
    ladder: 'Металлическая лестница с площадкой и поручнем',
    stove: 'Печь-подставка с металлическим дном',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '97 см' },
      { name: 'Материал чаши', value: 'Нержавеющая сталь AISI 304' },
      { name: 'Толщина металла', value: 'Стенки 2 мм, дно 3 мм' },
      { name: 'Сливной кран', value: '48.3 мм (быстрый слив)' },
      { name: 'Защитный экран', value: 'Экран от дымохода в комплекте' },
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
    const slidesHtml = slides.map((imgSrc, index) => `
      <div class="gallery-slide">
        <img src="${imgSrc}" alt="${product.name} (фото ${index + 1})" class="card-image" loading="lazy">
      </div>
    `).join('');
    
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
        });
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
    lightboxImg.style.opacity = '0.3';
    lightboxImg.src = activeGalleryImages[activeImageIndex];
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

            lightboxImg.src = activeGalleryImages[activeImageIndex];
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
        activeGalleryImages = [];
      }
    });

    // Закрытие по кнопке Escape и навигация клавиатурой
    document.addEventListener('keydown', (e) => {
      if (!lightboxModal.classList.contains('active')) return;
      
      if (e.key === 'Escape') {
        lightboxModal.classList.remove('active');
        document.body.classList.remove('lightbox-open');
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
