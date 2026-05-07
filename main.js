const DATA = {
  overview: {
    total: '$2,495',
    perPerson: '$1,248',
    days: '20',
    daily: '$62/pp',
    range: '$2,100 – $2,900',
    categories: [
      { name: 'Accommodation', amount: '$1,095', pct: 43, color: '#4A7B6F' },
      { name: 'Transport',     amount: '$621',   pct: 25, color: '#5B8DB8' },
      { name: 'Food & Cafes',  amount: '$490',   pct: 19, color: '#C8953A' },
      { name: 'Activities',    amount: '$252',   pct: 10, color: '#8B5E9E' },
      { name: 'Shopping',      amount: '$235',   pct:  9, color: '#4A6B9E' },
      { name: 'Spa',           amount: '$75',    pct:  3, color: '#B85474' },
    ]
  },
  cities: [
    {
      id: 'hcmc',
      flag: '🇻🇳',
      name: 'Ho Chi Minh City',
      country: 'Vietnam',
      accent: '#C8533A',
      bgColor: '#8B6B55',
      dates: 'July 15 – 18',
      nights: '3 nights',
      total: '~$445',
      totalPP: '~$223/pp',
      tips: [
        'Use Grab or Xanh SM for all rides; set pickup precisely or drivers will circle',
        'Eat viet yogurt when you first arrive to help your stomach adjust',
        'Bui Vien is best after 9pm. daytime is just souvenir stalls',
        'Ben Thanh vendors expect bargaining. start at 50% of asking price and go from there',
        'Bring lots of hand sanitizer everywhere!!!',
        'Pho delivery to the hotel is a must after the exhausting first night',
      ],
      expenses: [
        { badge: 'stay',     name: 'M Village Hotel',       note: '3 nights · ~$45–60/night',              amount: '$150' },
        { badge: 'transit',  name: 'Airport pickup (SGN)',   note: 'Grab / Xanh SM fixed rate from airport', amount: '$8'  },
        { badge: 'transit',  name: 'Grab rides (3 days)',    note: '~$4–8/ride · 2–3× daily',               amount: '$40' },
        { badge: 'food',     name: 'Meals & street food',    note: 'Ben Nghe, Ho Thi Ky, pho delivery',     amount: '$60' },
        { badge: 'food',     name: 'Cafes',                  note: 'Cong Ca Phe, Fein — matcha & viet coffee', amount: '$20' },
        { badge: 'activity', name: 'War Remnants Museum',    note: 'Entry fee',                              amount: '$4'  },
        { badge: 'spa',      name: 'Ria Spa + nails',        note: 'Massage & manicure',                    amount: '$40' },
        { badge: 'shop',     name: 'Ben Thanh + Bui Vien',   note: 'Souvenirs, clothing',                   amount: '$80' },
        { badge: 'food',     name: 'Viet yogurt + snacks',   note: 'Adjustment foods + supplies',           amount: '$15' },
        { badge: 'transit',  name: 'Flight HCMC → Da Nang',  note: 'Budget airline ~$20–40',                amount: '$28' },
      ]
    },
    {
      id: 'danang',
      flag: '🇻🇳',
      name: 'Da Nang',
      country: 'Vietnam',
      accent: '#C8533A',
      bgColor: '#5E7A8A',
      dates: 'July 18 – 21',
      nights: '3 nights',
      total: '~$330',
      totalPP: '~$165/pp',
      tips: [
        'The InterContinental Sun Peninsula has jaw-dropping views def worth visiting for brunch even if not staying',
        'Han Market is best in the morning before it gets crowded',
        'Hoi An day trip: take a Grab there and bus back to save money',
        'Bac My An Market has the best ice cream #needthat',
        'Dragon Bridge breathes fire on weekends at 9pm check the schedule',
        'Maha Spa books up, call ahead or go early morning (maybe get braids too?)',
      ],
      expenses: [
        { badge: 'stay',     name: '28 Đỗ Thế Chấp',         note: '3 nights · ~$40–50/night',             amount: '$135' },
        { badge: 'transit',  name: 'Airport pickup (DAD)',    note: 'Grab from airport',                    amount: '$5'  },
        { badge: 'transit',  name: 'Grab rides (3 days)',     note: 'Han Market, Dragon Bridge, beach',     amount: '$25' },
        { badge: 'activity', name: 'Hoi An day trip',         note: 'Grab/bus there & back + entry fees',  amount: '$20' },
        { badge: 'spa',      name: 'Maha Spa',                note: 'Massage & facial',                    amount: '$35' },
        { badge: 'food',     name: 'Meals (3 days)',           note: 'Thia Go, Han Market, Bac My An',      amount: '$50' },
        { badge: 'food',     name: 'Avocado ice cream + treats', note: 'Bac My An Market specialty',       amount: '$10' },
        { badge: 'shop',     name: 'Han Market shopping',     note: 'Clothing, fabrics, souvenirs',        amount: '$25' },
        { badge: 'transit',  name: 'Flight Da Nang → Hanoi',  note: 'Budget airline ~$20–30',              amount: '$25' },
      ]
    },
    {
      id: 'hanoi',
      flag: '🇻🇳',
      name: 'Hanoi',
      country: 'Vietnam',
      accent: '#C8533A',
      bgColor: '#6B7A55',
      dates: 'July 21 – 24',
      nights: '3 nights',
      total: '~$345',
      totalPP: '~$173/pp',
      tips: [
        'Café Giảng invented egg coffee yesss lawd get it there',
        'Train Street is crowded but worth it so go in the late afternoon for better light',
        'The Old Quarter is best explored on foot. Grab drops you at the edge',
        'Xôi Yến opens early and sells out, arrive by 8am for breakfast',
        'Ho Chi Minh Mausoleum is closed Mondays and Fridays, so plan accordingly',
        'Hanoi to Chiang Mai flights cost ~$100/per person, book on AirAsia or VietJet in advance',
      ],
      expenses: [
        { badge: 'stay',     name: 'La Palm Boutique Hotel',    note: '3 nights · ~$45–55/night',               amount: '$150' },
        { badge: 'transit',  name: 'Airport pickup (HAN)',      note: 'Grab from Noi Bai airport',              amount: '$8'  },
        { badge: 'transit',  name: 'Grab rides (3 days)',       note: 'Old Quarter, mausoleum, temples',        amount: '$20' },
        { badge: 'food',     name: 'Meals & cafes',             note: 'Xoi Yen, Note Coffee, Cafe Giang egg coffee', amount: '$55' },
        { badge: 'food',     name: 'Sinh to Hoa Beo + desserts', note: 'Sweet treats after dinner',             amount: '$10' },
        { badge: 'activity', name: 'Temple of Literature + sites', note: 'Entry fees',                         amount: '$8'  },
        { badge: 'shop',     name: 'Old Quarter shopping',      note: 'Souvenirs, last Vietnam haul',           amount: '$50' },
        { badge: 'transit',  name: 'Flight Hanoi → Chiang Mai', note: '~$100/pp · book AirAsia or VietJet',    amount: '$200' },
      ]
    },
    {
      id: 'chiangmai',
      flag: '🇹🇭',
      name: 'Chiang Mai',
      country: 'Thailand',
      accent: '#4A7B6F',
      bgColor: '#7A6855',
      dates: 'July 24 – 26',
      nights: '2 nights',
      total: '~$305',
      totalPP: '~$153/pp',
      tips: [
        'Elephant Jungle Sanctuary is ethical. skip any place that offers riding',
        'Khao Soi is the dish to eat in Chiang Mai. Khao Soi Maesai is a reccomendation',
        'Thai Akha cooking class includes a market tour! bring cash for the market',
        'Songthaews (red pickup trucks) are cheaper than Grab for fixed routes',
        'Huay Keaw Waterfall is seasonal. best July–October and can be skipped if it’s been dry',
        'The Night Bazaar is touristy but fun for a final night, go late for better deals',
      ],
      expenses: [
        { badge: 'stay',     name: 'Proud Phu Fah Muang',       note: '2 nights · ~$35–50/night',            amount: '$80' },
        { badge: 'transit',  name: 'Airport pickup (CNX)',       note: 'Grab from airport',                  amount: '$8'  },
        { badge: 'transit',  name: 'Grab / songthaew rides',     note: 'Waterfall, bazaar, sanctuary',       amount: '$20' },
        { badge: 'activity', name: 'Elephant Jungle Sanctuary',  note: 'Half-day visit · ~$70–90/pp',        amount: '$80' },
        { badge: 'activity', name: 'Thai Akha cooking class',    note: '~$30–40/pp',                        amount: '$35' },
        { badge: 'food',     name: 'Meals (2 days)',             note: 'Khao Soi, Sun Rays brunch, night market', amount: '$40' },
        { badge: 'food',     name: 'Night market sweet treats',  note: 'Desserts & snacks',                  amount: '$10' },
        { badge: 'transit',  name: 'Flight Chiang Mai → Bangkok', note: '~$40/pp · AirAsia',                amount: '$80' },
      ]
    },
    {
      id: 'bangkok',
      flag: '🇹🇭',
      name: 'Bangkok',
      country: 'Thailand',
      accent: '#4A7B6F',
      bgColor: '#8A6B3A',
      dates: 'July 26 – 30',
      nights: '4 nights',
      total: '~$520',
      totalPP: '~$260/pp',
      tips: [
        'Wat Arun is where the Thai queen photoshoot happens! get there early morning for golden light',
        'Song Wat Rd and Talat Noi are best explored together on foot',
        'Chatuchak is overwhelming! download a section map the night before',
        'Jeh O Chula has a line, arrive right when it opens or go after 9pm',
        'Grab is way more reliable than tuk tuks for getting around Bangkok',
        'Chinatown (Yaowarat) is magical at night with all the neon signs!!',
      ],
      expenses: [
        { badge: 'stay',     name: 'Marwin Villa Hotel',       note: '4 nights · ~$45–60/night',              amount: '$200' },
        { badge: 'transit',  name: 'Airport pickup (BKK/DMK)', note: 'Grab from airport',                    amount: '$10' },
        { badge: 'transit',  name: 'Grab rides (4 days)',      note: 'Chinatown, Chatuchak, Old Town, Wat Arun', amount: '$40' },
        { badge: 'activity', name: 'Thai queen photoshoot',    note: 'Costume + photographer at Wat Arun',   amount: '$30' },
        { badge: 'activity', name: 'Floating market boat tour', note: 'Thailand Tour & Travel',              amount: '$25' },
        { badge: 'food',     name: 'Meals (4 days)',           note: 'Jeh O Chula, Tuk Tuk Bar, Ari, street food', amount: '$80' },
        { badge: 'food',     name: 'Cafe stops',               note: 'Nana Coffee + bites in Ari',            amount: '$20' },
        { badge: 'shop',     name: 'Chatuchak + Khao San',     note: 'Massive market haul',                  amount: '$80' },
        { badge: 'transit',  name: 'Flight Bangkok → Phuket',  note: '~$30–50/pp · AirAsia or Thai Lion',   amount: '$70' },
      ]
    },
    {
      id: 'phuket',
      flag: '🇹🇭',
      name: 'Phuket',
      country: 'Thailand',
      accent: '#4A7B6F',
      bgColor: '#4A7B8A',
      dates: 'July 30 – Aug 3',
      nights: '4 nights',
      total: '~$550',
      totalPP: '~$275/pp',
      tips: [
        'Panwaburi is on Ao Yon Bay. quieter and more upscale than Patong Beach',
        'July is peak rainy season...bring a light rain jacket just to be safe',
        'Book snorkeling/boat tours through the resort for best rates',
        'Phuket Old Town is worth a half day; lots of great cafes and murals',
        'Grab app works in Phuket but is pricier than Bangkok, negotiate tuk tuks for short trips',
        'for final night, the resort has beach sunset views!!',
      ],
      expenses: [
        { badge: 'stay',     name: 'Panwaburi Beachfront Resort', note: '4 nights · ~$80–120/night beachfront', amount: '$380' },
        { badge: 'transit',  name: 'Airport pickup (HKT)',       note: 'Grab from Phuket airport',             amount: '$12' },
        { badge: 'transit',  name: 'Grab rides (4 days)',        note: 'Beaches, Old Town, markets',           amount: '$30' },
        { badge: 'food',     name: 'Meals (4 days)',             note: 'Resort dining + local restaurants',    amount: '$80' },
        { badge: 'activity', name: 'Beach activities',           note: 'Snorkeling, boat trip, jet ski, etc.', amount: '$50' },
      ]
    }
  ]
};

// ─── ROUTER ────────────────────────────────────────────
let currentPage = 'home';

function navigate(pageId) {
  document.querySelectorAll('.page').forEach(p => p.classList.add('page-hidden'));
  document.querySelectorAll('.nav-links a').forEach(a => a.classList.remove('active'));

  const target = document.getElementById(`page-${pageId}`);
  if (target) {
    target.classList.remove('page-hidden');
    currentPage = pageId;
    window.scrollTo({ top: 0, behavior: 'smooth' });

    const navLink = document.querySelector(`[data-page="${pageId}"]`);
    if (navLink) navLink.classList.add('active');

    if (pageId !== 'home') renderCityPage(pageId);
  }
}

// ─── HOME PAGE ──────────────────────────────────────────
function renderHome() {
  const catGrid = document.getElementById('cat-grid');
  catGrid.innerHTML = DATA.overview.categories.map(c => `
    <div class="cat-row">
      <div class="cat-header">
        <span class="cat-name">${c.name}</span>
        <span class="cat-amount">${c.amount}</span>
      </div>
      <div class="cat-bar-track">
        <div class="cat-bar-fill" style="width:${c.pct}%; background:${c.color};"></div>
      </div>
    </div>
  `).join('');
}

// ─── CITY PAGE RENDER ────────────────────────────────────
function renderCityPage(cityId) {
  const city = DATA.cities.find(c => c.id === cityId);
  if (!city) return;

  const page = document.getElementById(`page-${cityId}`);

  // hero
  page.querySelector('.city-hero-bg').style.background = city.bgColor;
  page.querySelector('.city-hero-flag').textContent = city.flag;
  page.querySelector('.city-hero-name').textContent = city.name;
  page.querySelector('.city-hero-dates').textContent = `${city.dates}  ·  ${city.nights}`;
  page.querySelector('.city-hero-total-amount').textContent = city.total;

  // accentColor on bar
  const accentEl = page.querySelector('.city-accent-bar');
  if (accentEl) accentEl.style.background = city.accent;

  // expenses
  const expensesList = page.querySelector('.expenses-list');
  expensesList.innerHTML = city.expenses.map((e, i) => `
    <div class="expense-row" style="animation-delay:${i * 0.05}s">
      <span class="badge badge-${e.badge}">${e.badge}</span>
      <div class="expense-info">
        <span class="expense-name">${e.name}</span>
        <span class="expense-note">${e.note}</span>
      </div>
      <span class="expense-amount">${e.amount}</span>
    </div>
  `).join('');

  // total
  page.querySelector('.expenses-total-city').textContent = city.total + '  ·  ' + city.totalPP;

  // tips
  const tipsList = page.querySelector('.tips-list');
  tipsList.innerHTML = city.tips.map(t => `<li>${t}</li>`).join('');

  // prev/next
  const allIds = DATA.cities.map(c => c.id);
  const idx = allIds.indexOf(cityId);
  const prevCity = idx > 0 ? DATA.cities[idx - 1] : null;
  const nextCity = idx < allIds.length - 1 ? DATA.cities[idx + 1] : null;

  const prevBtn = page.querySelector('.city-nav-prev');
  const nextBtn = page.querySelector('.city-nav-next');

  if (prevBtn) {
    if (prevCity) {
      prevBtn.style.display = 'flex';
      prevBtn.querySelector('.city-nav-name').textContent = '← ' + prevCity.name;
      prevBtn.onclick = () => navigate(prevCity.id);
    } else {
      prevBtn.style.display = 'flex';
      prevBtn.querySelector('.city-nav-name').textContent = '← Overview';
      prevBtn.onclick = () => navigate('home');
    }
  }

  if (nextBtn) {
    if (nextCity) {
      nextBtn.style.display = 'flex';
      nextBtn.querySelector('.city-nav-name').textContent = nextCity.name + ' →';
      nextBtn.onclick = () => navigate(nextCity.id);
    } else {
      nextBtn.style.display = 'none';
    }
  }
}

// ─── INIT ────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  renderHome();
  navigate('home');

  // Animate bars on home after short delay
  setTimeout(() => {
    document.querySelectorAll('.cat-bar-fill').forEach(bar => {
      bar.style.width = bar.style.width;
    });
  }, 300);
});
