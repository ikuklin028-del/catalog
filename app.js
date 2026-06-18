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
      { name: 'Рабочий объем', value: '1688 литров' },
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
    oldPrice: 143400,
    newPrice: 113400,
    warranty: '2 года',
    lifetime: '12 лет',
    gift: 'Тканевый чехол + подсветка в подарок 🎁',
    badge: '🔥 Популярность',
    image: 'assets/chan_uch2.jpg',
    imageInterior: 'assets/chan_uch2.jpg',
    livePhotos: [
      'assets/chan_uch2.jpg'
    ],
    ladder: 'Приставная лестница из лиственницы с поручнями',
    stove: 'Печь ветрозащита (без дна)',
    specs: [
      { name: 'Диаметр чаши', value: '200 см (до 6 человек)' },
      { name: 'Глубина чаши', value: '95.5 см' },
      { name: 'Рабочий объем', value: '1688 литров' },
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
          <i class="fa-solid fa-left-right"></i> Проведите, чтобы увидеть больше фото
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
      document.getElementById('countdown').innerHTML = "<span class='timer-expired'>Скидки продлены! Успейте заказать!</span>";
      return;
    }
    
    const d = Math.floor(diff / (1000 * 60 * 60 * 24));
    const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const m = Math.floor((diff / 1000 / 60) % 60);
    const s = Math.floor((diff / 1000) % 60);
    
    document.getElementById('days').textContent = d.toString().padStart(2, '0');
    document.getElementById('hours').textContent = h.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = m.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = s.toString().padStart(2, '0');
  }
  
  updateTimer();
  setInterval(updateTimer, 1000);
}

// ИНИЦИАЛИЗАЦИЯ
document.addEventListener('DOMContentLoaded', () => {
  initCountdownTimer();
  renderProducts();
  
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
