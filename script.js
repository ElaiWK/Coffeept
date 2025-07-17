const uiStrings = {
    "main_title": { "pt": "Um Café Português", "en": "A Portuguese Coffee" },
    "main_subtitle": { "pt": "Combine as opções, descubra as inúmeras variações e saiba exatamente como pedir o seu café perfeito.", "en": "Combine the options, discover the endless variations, and learn exactly how to order your perfect coffee." },
    "how_to_ask": { "pt": "Como pedir:", "en": "How to ask:" },
    "translation_means": { "pt": "", "en": "Which means:" },
    "search_placeholder": { "pt": "Procurar cafés...", "en": "Search coffees..." },
    "filter_all": { "pt": "Todos", "en": "All" },
    "filter_milk": { "pt": "Com Leite", "en": "With Milk" },
    "filter_strong": { "pt": "Forte", "en": "Strong" },
    "filter_favorites": { "pt": "Favoritos", "en": "Favorites" },
    "add_to_favorites": { "pt": "Adicionar aos favoritos", "en": "Add to favorites" },
    "remove_from_favorites": { "pt": "Remover dos favoritos", "en": "Remove from favorites" },
    "random_coffee": { "pt": "Café aleatório", "en": "Random coffee" },
    "pronunciation": { "pt": "Pronúncia", "en": "Pronunciation" },
    "no_results": { "pt": "Nenhum café encontrado", "en": "No coffees found" },
    "composition_labels": {
        "pt": { "cafe": "Café", "leite": "Leite", "agua": "Água", "alcool": "Álcool", "gelo": "Gelo" },
        "en": { "cafe": "Coffee", "leite": "Milk", "agua": "Water", "alcool": "Alcohol", "gelo": "Ice" }
    }
};

const coffeeData = {
  "tipos_cafe": [
    { "id": "cafe", "nome_base": "Café", "en_name": "Espresso", "descricao_base": { "pt": "A dose padrão de expresso...", "en": "The standard espresso shot..." }, "quantidade_ml_base": 30, "composicao": { "cafe": 100 }, "modificadores": [ { "id": "tamanho", "legenda": { "pt": "Tamanho", "en": "Size" }, "control_type": "exclusive-checkbox", "modificadores": [ { "id": "curto", "nome_a_pedir": "curto", "label": { "pt": "curto", "en": "short" }, "nome_dinamico": "Café Curto / Italiana", "modifica_ml": -10, "en_translation": { "text": "short", "type": "adjective" } }, { "id": "cheio", "nome_a_pedir": "cheio", "label": { "pt": "cheio", "en": "long" }, "nome_dinamico": "Café Cheio", "modifica_ml": 20, "en_translation": { "text": "long", "type": "adjective" } } ] }, { "id": "temperatura_chavena", "legenda": { "pt": "Chávena", "en": "Cup Temperature" }, "control_type": "segmented", "default": "normal", "modificadores": [ { "id": "fria", "nome_a_pedir": "em chávena fria", "label": { "pt": "Fria", "en": "Cold" }, "en_translation": { "text": "in a cold cup", "type": "phrase" } }, { "id": "normal", "nome_a_pedir": "", "label": { "pt": "Normal", "en": "Normal" } }, { "id": "escaldada", "nome_a_pedir": "em chávena escaldada", "label": { "pt": "Escaldada", "en": "Heated" }, "en_translation": { "text": "in a heated cup", "type": "phrase" } } ] }, { "id": "descafeinado_geral", "legenda": { "pt": "Cafeína", "en": "Caffeine" }, "control_type": "toggle", "modificadores": [ { "id": "descafeinado", "nome_a_pedir": "descafeinado", "label": { "pt": "Descafeinado", "en": "Decaf" }, "en_translation": { "text": "decaf", "type": "adjective" } } ] } ] },
    { "id": "pingado", "nome_base": "Pingado", "en_name": "Espresso with a drop of milk", "descricao_base": { "pt": "Um café expresso com apenas umas gotas de leite...", "en": "An espresso with just a few drops of milk..." }, "quantidade_ml_base": 35, "composicao": { "cafe": 85, "leite": 15 }, "modificadores": [ { "id": "temperatura_chavena", "legenda": { "pt": "Chávena", "en": "Cup Temperature" }, "control_type": "segmented", "default": "normal", "modificadores": [ { "id": "fria", "nome_a_pedir": "em chávena fria", "label": { "pt": "Fria", "en": "Cold" }, "en_translation": { "text": "in a cold cup", "type": "phrase" } }, { "id": "normal", "nome_a_pedir": "", "label": { "pt": "Normal", "en": "Normal" } }, { "id": "escaldada", "nome_a_pedir": "em chávena escaldada", "label": { "pt": "Escaldada", "en": "Heated" }, "en_translation": { "text": "in a heated cup", "type": "phrase" } } ] }, { "id": "descafeinado_geral", "legenda": { "pt": "Cafeína", "en": "Caffeine" }, "control_type": "toggle", "modificadores": [ { "id": "descafeinado", "nome_a_pedir": "descafeinado", "label": { "pt": "Descafeinado", "en": "Decaf" }, "en_translation": { "text": "decaf", "type": "adjective" } } ] } ] },
    { "id": "garoto", "nome_base": "Garoto", "en_name": "small coffee with milk", "descricao_base": { "pt": "Um café expresso com mais leite...", "en": "An espresso with more milk..." }, "quantidade_ml_base": 50, "composicao": { "cafe": 60, "leite": 40 }, "modificadores": [ { "id": "intensidade", "legenda": { "pt": "Intensidade", "en": "Intensity" }, "control_type": "exclusive-checkbox", "modificadores": [ { "id": "escuro", "nome_a_pedir": "escuro", "label": { "pt": "escuro", "en": "dark" }, "nome_dinamico": "Garoto Escuro", "en_translation": { "text": "dark", "type": "adjective" } }, { "id": "claro", "nome_a_pedir": "claro", "label": { "pt": "claro", "en": "light" }, "nome_dinamico": "Garoto Claro", "en_translation": { "text": "light", "type": "adjective" } } ] }, { "id": "temperatura_chavena", "legenda": { "pt": "Chávena", "en": "Cup Temperature" }, "control_type": "segmented", "default": "normal", "modificadores": [ { "id": "fria", "nome_a_pedir": "em chávena fria", "label": { "pt": "Fria", "en": "Cold" }, "en_translation": { "text": "in a cold cup", "type": "phrase" } }, { "id": "normal", "nome_a_pedir": "", "label": { "pt": "Normal", "en": "Normal" } }, { "id": "escaldada", "nome_a_pedir": "em chávena escaldada", "label": { "pt": "Escaldada", "en": "Heated" }, "en_translation": { "text": "in a heated cup", "type": "phrase" } } ] }, { "id": "descafeinado_geral", "legenda": { "pt": "Cafeína", "en": "Caffeine" }, "control_type": "toggle", "modificadores": [ { "id": "descafeinado", "nome_a_pedir": "descafeinado", "label": { "pt": "Descafeinado", "en": "Decaf" }, "en_translation": { "text": "decaf", "type": "adjective" } } ] } ] },
    { "id": "duplo", "nome_base": "Café Duplo", "en_name": "Double Espresso", "descricao_base": { "pt": "Dois expressos numa chávena grande...", "en": "Two espresso shots in a large cup..." }, "quantidade_ml_base": 60, "composicao": { "cafe": 100 }, "modificadores": [ { "id": "temperatura_chavena", "legenda": { "pt": "Chávena", "en": "Cup Temperature" }, "control_type": "segmented", "default": "normal", "modificadores": [ { "id": "fria", "nome_a_pedir": "em chávena fria", "label": { "pt": "Fria", "en": "Cold" }, "en_translation": { "text": "in a cold cup", "type": "phrase" } }, { "id": "normal", "nome_a_pedir": "", "label": { "pt": "Normal", "en": "Normal" } }, { "id": "escaldada", "nome_a_pedir": "em chávena escaldada", "label": { "pt": "Escaldada", "en": "Heated" }, "en_translation": { "text": "in a heated cup", "type": "phrase" } } ] }, { "id": "descafeinado_geral", "legenda": { "pt": "Cafeína", "en": "Caffeine" }, "control_type": "toggle", "modificadores": [ { "id": "descafeinado", "nome_a_pedir": "descafeinado", "label": { "pt": "Descafeinado", "en": "Decaf" }, "en_translation": { "text": "decaf", "type": "adjective" } } ] } ] },
    { "id": "abatanado", "nome_base": "Abatanado", "en_name": "Americano", "descricao_base": { "pt": "Um expresso diluído com água quente...", "en": "An espresso diluted with hot water..." }, "quantidade_ml_base": 150, "composicao": { "cafe": 30, "agua": 70 }, "modificadores": [ { "id": "tamanho", "legenda": { "pt": "Tamanho", "en": "Size" }, "control_type": "exclusive-checkbox", "modificadores": [ { "id": "cheio", "nome_a_pedir": "cheio", "label": { "pt": "cheio", "en": "long" }, "nome_dinamico": "Abatanado Cheio", "en_translation": { "text": "long", "type": "adjective" } } ] }, { "id": "descafeinado_geral", "legenda": { "pt": "Cafeína", "en": "Caffeine" }, "control_type": "toggle", "modificadores": [ { "id": "descafeinado", "nome_a_pedir": "descafeinado", "label": { "pt": "Descafeinado", "en": "Decaf" }, "en_translation": { "text": "decaf", "type": "adjective" } } ] } ] },
    { "id": "meia-leite", "nome_base": "Meia de Leite", "en_name": "Latte / Flat White", "descricao_base": { "pt": "Partes iguais de café e leite...", "en": "Equal parts coffee and milk..." }, "quantidade_ml_base": 180, "composicao": { "cafe": 50, "leite": 50 }, "modificadores": [ { "id": "intensidade", "legenda": { "pt": "Intensidade", "en": "Intensity" }, "control_type": "exclusive-checkbox", "modificadores": [ { "id": "escura", "nome_a_pedir": "escura", "label": { "pt": "escura", "en": "dark" }, "nome_dinamico": "Meia de Leite Escura", "en_translation": { "text": "dark", "type": "adjective" } }, { "id": "clara", "nome_a_pedir": "clara", "label": { "pt": "clara", "en": "light" }, "nome_dinamico": "Meia de Leite Clara", "en_translation": { "text": "light", "type": "adjective" } } ] }, { "id": "temperatura_chavena", "legenda": { "pt": "Chávena", "en": "Cup Temperature" }, "control_type": "segmented", "default": "normal", "modificadores": [ { "id": "fria", "nome_a_pedir": "em chávena fria", "label": { "pt": "Fria", "en": "Cold" }, "en_translation": { "text": "in a cold cup", "type": "phrase" } }, { "id": "normal", "nome_a_pedir": "", "label": { "pt": "Normal", "en": "Normal" } }, { "id": "escaldada", "nome_a_pedir": "em chávena escaldada", "label": { "pt": "Escaldada", "en": "Heated" }, "en_translation": { "text": "in a heated cup", "type": "phrase" } } ] }, { "id": "descafeinado_genero", "legenda": { "pt": "Cafeína", "en": "Caffeine" }, "control_type": "toggle", "modificadores": [ { "id": "descafeinada", "nome_a_pedir": "descafeinada", "label": { "pt": "Descafeinada", "en": "Decaf" }, "en_translation": { "text": "decaf", "type": "adjective" } } ] } ] },
    { "id": "galao", "nome_base": "Galão", "en_name": "Tall Latte in a Glass", "descricao_base": { "pt": "Servido em copo de vidro alto...", "en": "Served in a tall glass..." }, "quantidade_ml_base": 250, "composicao": { "cafe": 25, "leite": 75 }, "modificadores": [ { "id": "intensidade", "legenda": { "pt": "Intensidade", "en": "Intensity" }, "control_type": "exclusive-checkbox", "modificadores": [ { "id": "escuro", "nome_a_pedir": "escuro", "label": { "pt": "escuro", "en": "dark" }, "nome_dinamico": "Galão Escuro", "en_translation": { "text": "dark", "type": "adjective" } }, { "id": "claro", "nome_a_pedir": "claro", "label": { "pt": "claro", "en": "light" }, "nome_dinamico": "Galão Claro", "en_translation": { "text": "light", "type": "adjective" } } ] }, { "id": "descafeinado_geral", "legenda": { "pt": "Cafeína", "en": "Caffeine" }, "control_type": "toggle", "modificadores": [ { "id": "descafeinado", "nome_a_pedir": "descafeinado", "label": { "pt": "Descafeinado", "en": "Decaf" }, "en_translation": { "text": "decaf", "type": "adjective" } } ] } ] },
    { "id": "cheirinho", "nome_base": "Café com Cheirinho", "en_name": "Espresso with Brandy", "descricao_base": { "pt": "Um café expresso com um toque de aguardente...", "en": "An espresso with a splash of local brandy..." }, "quantidade_ml_base": 40, "composicao": { "cafe": 80, "alcool": 20 }, "modificadores": [] },
    { "id": "carioca", "nome_base": "Carioca de Café", "en_name": "Weak Espresso", "descricao_base": { "pt": "Um café fraco, extraído com borras já usadas.", "en": "A weak coffee, brewed from already used grounds." }, "quantidade_ml_base": 30, "composicao": { "cafe": 100 }, "modificadores": [ { "id": "temperatura_chavena", "legenda": { "pt": "Chávena", "en": "Cup Temperature" }, "control_type": "segmented", "default": "normal", "modificadores": [ { "id": "fria", "nome_a_pedir": "em chávena fria", "label": { "pt": "Fria", "en": "Cold" }, "en_translation": { "text": "in a cold cup", "type": "phrase" } }, { "id": "normal", "nome_a_pedir": "", "label": { "pt": "Normal", "en": "Normal" } }, { "id": "escaldada", "nome_a_pedir": "em chávena escaldada", "label": { "pt": "Escaldada", "en": "Heated" }, "en_translation": { "text": "in a heated cup", "type": "phrase" } } ] } ] },
    { "id": "mazagran", "nome_base": "Mazagran", "en_name": "Iced Coffee with Lemon", "descricao_base": { "pt": "Bebida de café fria com gelo, açúcar e limão.", "en": "A cold coffee drink with ice, sugar, and lemon." }, "quantidade_ml_base": 200, "composicao": { "cafe": 40, "agua": 20, "gelo": 40 }, "modificadores": [] }
  ]
};

let currentLanguage = 'pt';
let favorites = JSON.parse(localStorage.getItem('coffee-favorites') || '[]');
let currentFilter = 'all';
let allCoffeeCards = [];

document.addEventListener('DOMContentLoaded', () => {
    const langToggle = document.getElementById('lang-toggle-checkbox');
    const floatingNav = document.querySelector('.floating-nav');
    const searchInput = document.getElementById('coffee-search');
    const filterButtons = document.querySelectorAll('.filter-btn');
    
    langToggle.addEventListener('change', toggleLanguage);
    searchInput.addEventListener('input', handleSearch);
    
    filterButtons.forEach(btn => {
        btn.addEventListener('click', handleFilter);
    });
    
    document.getElementById('back-to-top-btn').addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    document.getElementById('favorites-btn').addEventListener('click', toggleFavoritesView);
    
    window.addEventListener('scroll', () => {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            floatingNav.classList.add('show');
        } else {
            floatingNav.classList.remove('show');
        }
    });
    
    renderAllCards();
    updateFavoritesButton();
});

function getText(key) { 
    return uiStrings[key] ? uiStrings[key][currentLanguage] : key; 
}

function toggleLanguage() {
    const isEnglish = document.getElementById('lang-toggle-checkbox').checked;
    currentLanguage = isEnglish ? 'en' : 'pt';
    renderAllCards();
}

function updateStaticText() {
    document.querySelectorAll('[data-lang-key]').forEach(el => {
        const text = getText(el.dataset.langKey);
        if (el.tagName === 'INPUT') {
            el.placeholder = text;
        } else {
            el.textContent = text;
        }
    });
    
    const langToggle = document.querySelector('.lang-toggle');
    langToggle.querySelector('.lang-label-pt').classList.toggle('active', currentLanguage === 'pt');
    langToggle.querySelector('.lang-label-pt').classList.toggle('inactive', currentLanguage !== 'pt');
    langToggle.querySelector('.lang-label-en').classList.toggle('active', currentLanguage === 'en');
    langToggle.querySelector('.lang-label-en').classList.toggle('inactive', currentLanguage !== 'en');
    document.getElementById('lang-toggle-checkbox').checked = (currentLanguage === 'en');
}

function renderAllCards() {
    const container = document.getElementById('guia-cafe-container');
    container.innerHTML = '';
    allCoffeeCards = [];
    
    coffeeData.tipos_cafe.forEach((cafe, index) => {
        const cartao = document.createElement('article');
        cartao.className = 'cartao-cafe loading';
        cartao.dataset.cafeId = cafe.id;
        cartao.innerHTML = generateCardHTML(cafe);
        container.appendChild(cartao);
        
        setTimeout(() => {
            cartao.classList.remove('loading');
            cartao.classList.add('loaded', 'animate-fade-in');
        }, index * 100);
        
        cartao.querySelectorAll('input').forEach(input => {
            input.addEventListener('change', (e) => handleInteraction(e, cafe.id));
        });
        
        const favoriteBtn = cartao.querySelector('.favorite-btn');
        if (favoriteBtn) {
            favoriteBtn.addEventListener('click', () => toggleFavorite(cafe.id));
        }
        
        updateCard(cafe.id);
        allCoffeeCards.push({ element: cartao, data: cafe });
    });
    
    updateStaticText();
    applyCurrentFilter();
}

function generateCardHTML(cafe) {
    const enSubtitle = currentLanguage === 'en' ? `<p class="english-subtitle">${cafe.en_name}</p>` : '';
    const isFavorite = favorites.includes(cafe.id);
    
    const modificadoresHtml = cafe.modificadores.map(grupo => {
        const legendText = grupo.legenda[currentLanguage];
        let controlHtml;
        switch (grupo.control_type) {
            case 'exclusive-checkbox':
                controlHtml = `<div class="modificador-botoes">${grupo.modificadores.map(mod => `<label><input type="checkbox" name="${cafe.id}-${grupo.id}" value="${mod.id}"><span>${mod.label[currentLanguage]}</span></label>`).join('')}</div>`;
                break;
            case 'toggle':
                controlHtml = `<label class="toggle-switch"><span class="label-text">${grupo.modificadores[0].label[currentLanguage]}</span><input type="checkbox" name="${cafe.id}-${grupo.id}" value="${grupo.modificadores[0].id}"><span class="slider"></span></label>`;
                break;
            case 'segmented':
                controlHtml = `<div class="segmented-control">${grupo.modificadores.map(mod => `<label><input type="radio" name="${cafe.id}-${grupo.id}" value="${mod.id}" ${mod.id === grupo.default ? 'checked' : ''}><span>${mod.label[currentLanguage]}</span></label>`).join('')}</div>`;
                break;
        }
        return `<div class="grupo-modificador"><legend>${legendText}</legend>${controlHtml}</div>`;
    }).join('');

    return `
        <div class="cartao-header">
            <div class="cartao-info">
                <div class="cartao-title-container">
                    <h3>${cafe.nome_base}</h3>
                    <button type="button" class="favorite-btn" title="${isFavorite ? getText('remove_from_favorites') : getText('add_to_favorites')}">
                        <i class="${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart"></i>
                    </button>
                </div>
                ${enSubtitle}
                <p class="descricao-base">${cafe.descricao_base[currentLanguage]}</p>
            </div>
            <div class="volume-display">
                <div class="volume-bar-container"><div class="volume-bar-fill"></div></div>
                <span class="volume-texto"></span>
            </div>
        </div>
        <div class="composicao-container"></div>
        ${cafe.modificadores.length > 0 ? `<div class="modificadores-container">${modificadoresHtml}</div>` : ''}
        <div class="resultado-pedido">
            <div class="como-pedir-label"></div>
            <div class="como-pedir-phrase"><span></span></div>
            <div class="como-pedir-translation"></div>
        </div>
    `;
}

function handleInteraction(event, cafeId) {
    const input = event.target;
    const cafe = coffeeData.tipos_cafe.find(c => c.id === cafeId);
    const grupo = cafe.modificadores.find(g => input.name.endsWith(g.id));
    if (grupo && grupo.control_type === 'exclusive-checkbox' && input.checked) {
        grupo.modificadores.forEach(mod => {
            if (mod.id !== input.value) {
                const otherInput = document.querySelector(`input[name="${input.name}"][value="${mod.id}"]`);
                if (otherInput) otherInput.checked = false;
            }
        });
    }
    updateCard(cafeId);
}

function getArticle(word) {
    if (!word) return 'a';
    const firstWord = word.trim().split(' ')[0].toLowerCase();
    return ['a', 'e', 'i', 'o', 'u'].includes(firstWord[0]) ? 'an' : 'a';
}

function updateCard(cafeId) {
    const cartao = document.querySelector(`.cartao-cafe[data-cafe-id="${cafeId}"]`);
    const cafe = coffeeData.tipos_cafe.find(c => c.id === cafeId);
    if (!cartao || !cafe) return;
    
    const selectedModifierObjects = [];
    cafe.modificadores.forEach(grupo => {
        const inputs = cartao.querySelectorAll(`input[name="${cafe.id}-${grupo.id}"]:checked`);
        inputs.forEach(input => {
            const mod = grupo.modificadores.find(m => m.id === input.value);
            if (mod) selectedModifierObjects.push(mod);
        });
    });
    
    const ordemPt = ['curto', 'cheio', 'escuro', 'escura', 'claro', 'clara', 'descafeinado', 'descafeinada', 'em chávena fria', 'em chávena escaldada'];
    selectedModifierObjects.sort((a, b) => ordemPt.indexOf(a.nome_a_pedir) - ordemPt.indexOf(b.nome_a_pedir));
    
    const finalMl = cafe.quantidade_ml_base + selectedModifierObjects.reduce((acc, mod) => acc + (mod.modifica_ml || 0), 0);
    const baseFeminina = cafe.id === 'meia-leite';
    const pedidoBase = baseFeminina ? "Uma meia de leite" : `Um ${cafe.nome_base.toLowerCase()}`;
    const pedidoModifiers = selectedModifierObjects.map(m => m.nome_a_pedir).filter(Boolean).join(' ');
    const pedidoFinalString = `${pedidoBase} ${pedidoModifiers}`.trim();

    const primaryMod = selectedModifierObjects.find(mod => mod.nome_dinamico);
    let finalTitle = primaryMod ? primaryMod.nome_dinamico : cafe.nome_base;
    const secondaryModifiersText = selectedModifierObjects.filter(mod => !mod.nome_dinamico && mod.nome_a_pedir).map(mod => mod.nome_a_pedir).join(' ');
    if (secondaryModifiersText) finalTitle += ' ' + secondaryModifiersText;

    cartao.querySelector(`h3`).textContent = finalTitle.trim();
    cartao.querySelector('.como-pedir-phrase span').textContent = `"${pedidoFinalString}, se faz favor."`;

    const translationEl = cartao.querySelector('.como-pedir-translation');
    if (currentLanguage === 'en') {
        const englishAdjectives = selectedModifierObjects.map(m => m.en_translation).filter(t => t && t.type === 'adjective').map(t => t.text).join(' ');
        const englishPhrases = selectedModifierObjects.map(m => m.en_translation).filter(t => t && t.type === 'phrase').map(t => t.text).join(' ');
        const article = getArticle(englishAdjectives || cafe.en_name);
        
        const finalEnglish = [article, englishAdjectives, cafe.en_name, englishPhrases].filter(Boolean).join(' ');
        translationEl.textContent = `(${uiStrings.translation_means[currentLanguage]} "${finalEnglish.replace(/\s+/g, ' ')}, please.")`;
        translationEl.style.display = 'block';
    } else {
        translationEl.textContent = '';
        translationEl.style.display = 'none';
    }
    
    const maxMl = 280;
    const alturaPercentagem = (finalMl / maxMl) * 100;
    cartao.querySelector('.volume-bar-fill').style.height = `${Math.min(alturaPercentagem, 100)}%`;
    cartao.querySelector('.volume-texto').textContent = `${finalMl}ml`;
    
    const composicaoContainer = cartao.querySelector('.composicao-container');
    let barraHtml = '<div class="composicao-barra">';
    const compLabels = uiStrings.composition_labels[currentLanguage];
    if (cafe.composicao.cafe) barraHtml += `<span class="comp-cafe" style="width: ${cafe.composicao.cafe}%">${compLabels.cafe}</span>`;
    if (cafe.composicao.leite) barraHtml += `<span class="comp-leite" style="width: ${cafe.composicao.leite}%">${compLabels.leite}</span>`;
    if (cafe.composicao.agua) barraHtml += `<span class="comp-agua" style="width: ${cafe.composicao.agua}%">${compLabels.agua}</span>`;
    if (cafe.composicao.alcool) barraHtml += `<span class="comp-alcool" style="width: ${cafe.composicao.alcool}%">${compLabels.alcool}</span>`;
    if (cafe.composicao.gelo) barraHtml += `<span class="comp-gelo" style="width: ${cafe.composicao.gelo}%">${compLabels.gelo}</span>`;
    barraHtml += '</div>';
    composicaoContainer.innerHTML = barraHtml;
    
    cartao.querySelector('.como-pedir-label').textContent = getText('how_to_ask');
}

function toggleFavorite(cafeId) {
    const index = favorites.indexOf(cafeId);
    if (index > -1) {
        favorites.splice(index, 1);
    } else {
        favorites.push(cafeId);
    }
    localStorage.setItem('coffee-favorites', JSON.stringify(favorites));
    updateFavoriteButton(cafeId);
    updateFavoritesButton();
    
    if (currentFilter === 'favorites') {
        applyCurrentFilter();
    }
}

function updateFavoriteButton(cafeId) {
    const cartao = document.querySelector(`.cartao-cafe[data-cafe-id="${cafeId}"]`);
    if (!cartao) return;
    const favoriteBtn = cartao.querySelector('.favorite-btn');
    const isFavorite = favorites.includes(cafeId);
    
    favoriteBtn.querySelector('i').className = `${isFavorite ? 'fa-solid' : 'fa-regular'} fa-heart`;
    favoriteBtn.title = isFavorite ? getText('remove_from_favorites') : getText('add_to_favorites');
}

function updateFavoritesButton() {
    const favoritesBtn = document.getElementById('favorites-btn');
    const favoritesFilter = document.getElementById('favorites-filter');
    const count = favorites.length;
    
    if (count > 0) {
        favoritesBtn.innerHTML = `<i class="fa-solid fa-heart"></i><span style="position: absolute; top: -5px; right: -5px; background: #ff4757; color: white; border-radius: 50%; width: 18px; height: 18px; font-size: 10px; display: flex; align-items: center; justify-content: center;">${count}</span>`;
        favoritesFilter.style.display = 'flex';
    } else {
        favoritesBtn.innerHTML = '<i class="fa-regular fa-heart"></i>';
        favoritesFilter.style.display = 'none';
        if (currentFilter === 'favorites') {
            currentFilter = 'all';
            document.querySelector('[data-filter="all"]').classList.add('active');
            document.querySelector('[data-filter="favorites"]').classList.remove('active');
        }
    }
}

function handleSearch(event) {
    const query = event.target.value.toLowerCase();
    filterCoffees(query, currentFilter);
}

function handleFilter(event) {
    const clickedButton = event.target.closest('.filter-btn');
    if (!clickedButton) return;

    const filter = clickedButton.dataset.filter;

    if (clickedButton.classList.contains('active') && filter === 'favorites') {
        document.querySelector('[data-filter="all"]').click();
        return;
    }

    document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
    clickedButton.classList.add('active');
    
    currentFilter = clickedButton.dataset.filter;
    const query = document.getElementById('coffee-search').value.toLowerCase();
    filterCoffees(query, currentFilter);
}

function applyCurrentFilter() {
    const query = document.getElementById('coffee-search').value.toLowerCase();
    filterCoffees(query, currentFilter);
}

function filterCoffees(searchQuery, filter) {
    allCoffeeCards.forEach(({ element, data }) => {
        let show = true;
        
        if (searchQuery) {
            const searchText = `${data.nome_base} ${data.en_name} ${data.descricao_base.pt} ${data.descricao_base.en}`.toLowerCase();
            show = show && searchText.includes(searchQuery);
        }
        
        if (filter !== 'all') {
            switch (filter) {
                case 'milk':
                    show = show && data.composicao.leite > 0;
                    break;
                case 'strong':
                    show = show && data.composicao.cafe >= 80;
                    break;
                case 'favorites':
                    show = show && favorites.includes(data.id);
                    break;
            }
        }
        
        element.style.display = show ? 'flex' : 'none';
        if (show) {
            element.classList.add('animate-fade-in');
        }
    });
}

function toggleFavoritesView() {
    const favoritesFilter = document.querySelector('[data-filter="favorites"]');
    if (!favoritesFilter || favorites.length === 0) return;

    if (currentFilter === 'favorites') {
        document.querySelector('[data-filter="all"]').click();
    } else {
        favoritesFilter.click();
    }
}