document.documentElement.classList.add('js');

const vegetableOption = { id: 'add-vegetables', name: 'Add vegetables', price: 30000, priceLabel: '30,000 LL' };

const menuCategories = {
  mana2eesh: { label: 'Mana2eesh' },
  'italian-pizza': { label: 'Italian Pizza' },
  'burger-sandwich': { label: 'Burger / Sandwich' },
  mu3ajaneit: { label: 'Mu3ajaneit' },
  desserts: { label: 'Desserts' }
};

const mobileMenuSections = [
  { id: 'mana2eesh', label: 'MANA2EESH' },
  { id: 'italian-pizza', label: 'ITALIAN PIZZA' },
  { id: 'mu3ajaneit', label: 'MU3AJANEIT' },
  { id: 'burger-sandwich', label: 'BURGER / SANDWICH' },
  { id: 'desserts', label: 'DESSERTS' }
];

const menuItems = [
  { id: 'mana-zaatar', name: 'Zaatar', category: 'mana2eesh', price: 70000, priceLabel: '70,000 LL', description: '', image: null, options: [vegetableOption], popular: true, filters: ['zaatar'] },
  { id: 'mana-cheese', name: 'Cheese', category: 'mana2eesh', price: 180000, priceLabel: '180,000 LL', description: '', image: null, options: [vegetableOption], popular: false, filters: ['cheese'] },
  { id: 'mana-spinach', name: 'Spinach', category: 'mana2eesh', price: 80000, priceLabel: '80,000 LL', description: '', image: null, options: [vegetableOption], popular: false, filters: ['other'] },
  { id: 'mana-kishek', name: 'Kishek', category: 'mana2eesh', price: 80000, priceLabel: '80,000 LL', description: '', image: null, options: [vegetableOption], popular: false, filters: ['other'] },
  { id: 'mana-lahm-b3ajeen', name: 'Lahm B3ajeen', category: 'mana2eesh', price: 180000, priceLabel: '180,000 LL', description: '', image: null, options: [vegetableOption], popular: false, filters: ['meat'] },
  { id: 'mana-zaatar-cheese', name: 'Zaatar & Cheese', category: 'mana2eesh', price: 150000, priceLabel: '150,000 LL', description: '', image: null, options: [vegetableOption], popular: true, filters: ['zaatar', 'cheese'] },
  { id: 'mana-duplex', name: 'Duplex', category: 'mana2eesh', price: 250000, priceLabel: '250,000 LL', description: '', image: null, options: [vegetableOption], popular: false, filters: ['other'] },
  { id: 'mana-cheese-ham', name: 'Cheese & Ham', category: 'mana2eesh', price: 250000, priceLabel: '250,000 LL', description: '', image: null, options: [vegetableOption], popular: false, filters: ['cheese', 'meat'] },
  { id: 'mana-cheese-soujouk', name: 'Cheese & Soujouk', category: 'mana2eesh', price: 300000, priceLabel: '300,000 LL', description: '', image: null, options: [vegetableOption], popular: false, filters: ['cheese', 'meat'] },
  { id: 'pizza-soujouk', name: 'Soujouk', category: 'italian-pizza', price: 600000, priceLabel: '600,000 LL', description: '', image: null, options: [], popular: false, filters: ['meat'] },
  { id: 'pizza-pepperoni', name: 'Pepperoni', category: 'italian-pizza', price: 600000, priceLabel: '600,000 LL', description: '', image: null, options: [], popular: true, filters: ['meat'] },
  { id: 'pizza-marguerita', name: 'Marguerita', category: 'italian-pizza', price: 500000, priceLabel: '500,000 LL', description: '', image: null, options: [], popular: false, filters: ['vegetarian'] },
  { id: 'pizza-vegetarian', name: 'Vegetarian', category: 'italian-pizza', price: 600000, priceLabel: '600,000 LL', description: '', image: null, options: [], popular: false, filters: ['vegetarian'] },
  { id: 'burger-sandwich-burger', name: 'Burger', category: 'burger-sandwich', price: 500000, priceLabel: '500,000 LL', description: '', image: null, options: [], popular: true, filters: ['burger'] },
  { id: 'burger-sandwich-batata', name: 'Batata Sandwich', category: 'burger-sandwich', price: 200000, priceLabel: '200,000 LL', description: '', image: null, options: [], popular: false, filters: ['sandwich'] },
  { id: 'burger-sandwich-italian', name: 'Italian Sandwich', category: 'burger-sandwich', price: 400000, priceLabel: '400,000 LL', description: '', image: null, options: [], popular: false, filters: ['sandwich'] },
  { id: 'burger-sandwich-chicken', name: 'Chicken Sandwich', category: 'burger-sandwich', price: 400000, priceLabel: '400,000 LL', description: '', image: null, options: [], popular: false, filters: ['sandwich'] },
  { id: 'burger-sandwich-biria', name: 'Biria Sandwich', category: 'burger-sandwich', price: 500000, priceLabel: '500,000 LL', description: '', image: null, options: [], popular: false, filters: ['sandwich'] },
  { id: 'mu3ajaneit-mini-pizza', name: 'Mini Pizza', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: true, filters: [] },
  { id: 'mu3ajaneit-mini-zaatar', name: 'Mini Zaatar', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-mini-cheese', name: 'Mini Cheese', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-mini-spinach', name: 'Mini Spinach', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-mini-hotdog', name: 'Mini Hotdog', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-halloum-rolls', name: 'Halloum Rolls', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-cheese-burek', name: 'Cheese Burek', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-kebbeh-meat', name: 'Kebbeh Meat', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'mu3ajaneit-kebbeh-pumpkin', name: 'Kebbeh Pumpkin', category: 'mu3ajaneit', price: 360000, priceLabel: 'Dozen — 360,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'dessert-nutella', name: 'Nutella', category: 'desserts', price: 300000, priceLabel: '300,000 LL', description: '', image: null, options: [], popular: true, filters: [] },
  { id: 'dessert-halawi', name: 'Halawi', category: 'desserts', price: 300000, priceLabel: '300,000 LL', description: '', image: null, options: [], popular: false, filters: [] },
  { id: 'dessert-meghli', name: 'Meghli', category: 'desserts', price: 150000, priceLabel: '150,000 LL', description: '', image: null, options: [], popular: false, filters: [] }
];

const productGrid = document.querySelector('.product-grid');
const categoryHeading = document.querySelector('.mobile-menu-heading h2');
const categoryRow = document.querySelector('.mobile-category-row');
const subcategoryRow = document.querySelector('.mobile-subcategory-row');
const desktopCategoryGrid = document.querySelector('.category-grid');
const quickViewButtons = document.querySelectorAll('.mobile-action-row button');
const favoritesButton = quickViewButtons[1];
const favorites = new Set();
let activeMainSection = 'mini-bites';
let activeCategory = 'mana2eesh';
let activeFilter = 'mana2eesh';
let quickView = 'all';
let scrollSpyObserver = null;
let scrollSpyPausedUntil = 0;

const escapeHtml = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;').replaceAll('"', '&quot;').replaceAll("'", '&#039;');

const productCardTemplate = (item) => {
  const isFavorite = favorites.has(item.id);
  const description = item.description ? `<p>${escapeHtml(item.description)}</p>` : '';
  const badge = item.popular ? '<mark>Popular</mark>' : '';
  const options = item.options.length ? `<button class="options-button" type="button" aria-label="Show options for ${escapeHtml(item.name)}"><span aria-hidden="true">↓</span> Show options</button>` : '';
  return `<article class="product-card reveal is-visible" data-product-id="${escapeHtml(item.id)}">
    <div class="product-media"><div class="product-image image-placeholder"><span>PRODUCT PHOTO</span>${badge}</div><button type="button" class="add-button mobile-add-button">+ ADD</button></div>
    <div class="product-body"><h3>${escapeHtml(item.name)}</h3>${description}<div class="product-options">${options}<div class="product-quick-actions"><button class="favorite-button${isFavorite ? ' is-active' : ''}" type="button" aria-label="${isFavorite ? 'Remove' : 'Add'} ${escapeHtml(item.name)} ${isFavorite ? 'from' : 'to'} favorites" aria-pressed="${isFavorite}">${isFavorite ? '♥' : '♡'}</button><button class="share-button" type="button" aria-label="Share ${escapeHtml(item.name)}">↗</button></div></div><div class="product-footer"><strong>${escapeHtml(item.priceLabel)}</strong><button type="button" class="add-button">Add to order <span>+</span></button></div></div>
  </article>`;
};

const itemsForCategory = (category) => menuItems.filter((item) => item.category === category && (quickView !== 'popular' || item.popular) && (quickView !== 'favorites' || favorites.has(item.id)));

const setActiveSubcategory = (filterId, center = true) => {
  activeFilter = filterId;
  const activeButton = subcategoryRow.querySelector(`[data-filter="${filterId}"]`);
  subcategoryRow.querySelector('.active')?.classList.remove('active');
  activeButton?.classList.add('active');
  if (center) activeButton?.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
};

const startScrollSpy = () => {
  scrollSpyObserver?.disconnect();
  if (window.innerWidth > 768 || !('IntersectionObserver' in window)) return;
  const groups = [...productGrid.querySelectorAll('.product-group[data-filter]')];
  if (!groups.length) return;

  scrollSpyObserver = new IntersectionObserver((entries) => {
    if (Date.now() < scrollSpyPausedUntil) return;
    const visible = entries.filter((entry) => entry.isIntersecting);
    if (!visible.length) return;
    visible.sort((a, b) => Math.abs(a.boundingClientRect.top - 226) - Math.abs(b.boundingClientRect.top - 226));
    const nextFilter = visible[0].target.dataset.filter;
    if (nextFilter !== activeFilter) setActiveSubcategory(nextFilter);
  }, { rootMargin: '-226px 0px -58% 0px', threshold: 0 });

  groups.forEach((group) => scrollSpyObserver.observe(group));
};

const renderProducts = () => {
  if (window.innerWidth <= 768 && (activeMainSection === 'drinks' || activeMainSection === 'gift-certificates')) {
    productGrid.innerHTML = '<p class="menu-empty">No items in this section yet.</p>';
    startScrollSpy();
    return;
  }

  if (window.innerWidth > 768) {
    const items = itemsForCategory(activeCategory);
    productGrid.innerHTML = items.map(productCardTemplate).join('');
    startScrollSpy();
    return;
  }

  productGrid.innerHTML = mobileMenuSections.map((section, index) => {
    const sectionItems = itemsForCategory(section.id);
    if (!sectionItems.length) return '';
    const heading = index === 0 ? '' : `<div class="mobile-menu-heading"><span>MINI BITES</span><h2>${section.label}</h2></div>`;
    return `<section class="product-group" id="${section.id}" data-filter="${section.id}">${heading}${sectionItems.map(productCardTemplate).join('')}</section>`;
  }).join('');
  startScrollSpy();
};

const renderSubcategories = () => {
  subcategoryRow.innerHTML = mobileMenuSections.map((section) => `<button class="${section.id === activeFilter ? 'active' : ''}" type="button" role="listitem" data-filter="${section.id}">${section.label}</button>`).join('');
};

const updateFavoritesCount = () => { favoritesButton.lastChild.textContent = ` Favorites: ${favorites.size}`; };
const setQuickView = (view) => {
  quickView = view;
  activeFilter = 'mana2eesh';
  quickViewButtons.forEach((button, index) => button.classList.toggle('active', (view === 'popular' && index === 0) || (view === 'favorites' && index === 1)));
  renderSubcategories();
  renderProducts();
};

renderSubcategories();
renderProducts();
updateFavoritesCount();

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver((entries) => entries.forEach((entry) => {
    if (entry.isIntersecting) { entry.target.classList.add('is-visible'); observer.unobserve(entry.target); }
  }), { threshold: 0.12 });
  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}

const navLinks = document.querySelectorAll('.main-nav a');
const sections = document.querySelectorAll('main section[id]');
const updateActiveNavigation = () => {
  let currentSection = 'home';
  sections.forEach((section) => { if (window.scrollY >= section.offsetTop - 180) currentSection = section.id; });
  navLinks.forEach((link) => {
    const target = link.getAttribute('href').slice(1);
    link.classList.toggle('active', target === currentSection || (target === 'menu' && currentSection === 'best-sellers'));
  });
};
window.addEventListener('scroll', updateActiveNavigation, { passive: true });
updateActiveNavigation();

productGrid.addEventListener('click', (event) => {
  const card = event.target.closest('.product-card');
  if (!card) return;
  const item = menuItems.find((product) => product.id === card.dataset.productId);
  if (!item) return;
  const addButton = event.target.closest('.add-button');
  if (addButton) {
    const originalText = addButton.firstChild.textContent;
    addButton.firstChild.textContent = 'Added ';
    addButton.classList.add('added');
    window.setTimeout(() => { addButton.firstChild.textContent = originalText; addButton.classList.remove('added'); }, 1400);
    return;
  }
  if (event.target.closest('.favorite-button')) {
    if (favorites.has(item.id)) favorites.delete(item.id); else favorites.add(item.id);
    updateFavoritesCount();
    renderProducts();
  }
});

categoryRow.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-main-section]');
  if (!button) return;
  const nextMainSection = button.dataset.mainSection;
  activeMainSection = nextMainSection;
  activeCategory = nextMainSection === 'sandwiches-burgers' ? 'burger-sandwich' : 'mana2eesh';
  activeFilter = nextMainSection === 'sandwiches-burgers' ? 'burger-sandwich' : 'mana2eesh';
  quickView = 'all';
  categoryHeading.textContent = nextMainSection === 'drinks' || nextMainSection === 'gift-certificates' ? nextMainSection.replace('-', ' ').toUpperCase() : 'MANA2EESH';
  categoryRow.querySelector('.active')?.classList.remove('active');
  button.classList.add('active');
  quickViewButtons.forEach((quickButton) => quickButton.classList.remove('active'));
  scrollSpyPausedUntil = Date.now() + 700;
  renderSubcategories();
  renderProducts();
  button.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
  const target = nextMainSection === 'sandwiches-burgers' ? document.getElementById('burger-sandwich') : document.getElementById('best-sellers');
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

desktopCategoryGrid.addEventListener('click', (event) => {
  const categoryLink = event.target.closest('[data-category]');
  if (!categoryLink) return;
  activeCategory = categoryLink.dataset.category;
  activeFilter = activeCategory;
  quickView = 'all';
  categoryHeading.textContent = menuCategories[activeCategory].label.toUpperCase();
  quickViewButtons.forEach((quickButton) => quickButton.classList.remove('active'));
  renderSubcategories();
  renderProducts();
});

subcategoryRow.addEventListener('click', (event) => {
  const button = event.target.closest('button[data-filter]');
  if (!button) return;
  const filterId = button.dataset.filter;
  const wasQuickView = quickView !== 'all';
  quickView = 'all';
  quickViewButtons.forEach((quickButton) => quickButton.classList.remove('active'));
  scrollSpyPausedUntil = Date.now() + 700;
  setActiveSubcategory(filterId);
  if (wasQuickView) renderProducts();
  if (activeMainSection !== 'mini-bites' && activeMainSection !== 'sandwiches-burgers') {
    activeMainSection = 'mini-bites';
    categoryHeading.textContent = 'MANA2EESH';
    categoryRow.querySelector('.active')?.classList.remove('active');
    categoryRow.querySelector('[data-main-section="mini-bites"]')?.classList.add('active');
    renderProducts();
  }
  const target = document.getElementById(filterId);
  target?.scrollIntoView({ behavior: 'smooth', block: 'start' });
});

quickViewButtons[0].addEventListener('click', () => setQuickView('popular'));
quickViewButtons[1].addEventListener('click', () => setQuickView('favorites'));
document.getElementById('year').textContent = new Date().getFullYear();

const menuToggle = document.querySelector('.menu-toggle');
const mobileMenu = document.querySelector('.main-nav');
const menuBackdrop = document.querySelector('.menu-backdrop');
const closeMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.setAttribute('aria-label', 'Open menu');
  mobileMenu.classList.remove('is-open');
  menuBackdrop.classList.remove('is-visible');
  document.body.classList.remove('menu-open');
};
const openMenu = () => {
  menuToggle.setAttribute('aria-expanded', 'true');
  menuToggle.setAttribute('aria-label', 'Close menu');
  mobileMenu.classList.add('is-open');
  menuBackdrop.classList.add('is-visible');
  document.body.classList.add('menu-open');
};
menuToggle.addEventListener('click', () => menuToggle.getAttribute('aria-expanded') === 'true' ? closeMenu() : openMenu());
mobileMenu.querySelectorAll('a').forEach((link) => link.addEventListener('click', closeMenu));
menuBackdrop.addEventListener('click', closeMenu);
document.addEventListener('keydown', (event) => { if (event.key === 'Escape') closeMenu(); });
window.addEventListener('resize', () => { if (window.innerWidth > 768) closeMenu(); });
document.querySelector('.back-button').addEventListener('click', () => {
  if (window.history.length > 1) window.history.back();
  else document.getElementById('home').scrollIntoView({ behavior: 'smooth' });
});
