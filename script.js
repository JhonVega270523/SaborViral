document.addEventListener('DOMContentLoaded', function() {
    const products = [
        // PAPAS
        {
            name: "Salchipapa",
            price: "$6.000",
            phrase: "La combinación perfecta de salchicha y papa.",
            category: "comidas-rapidas",
            iconClass: "fas fa-utensils" // Icono genérico de comida
        },
        {
            name: "Longuipapa",
            price: "$10.500",
            phrase: "Longaniza con papas, un sabor único.",
            category: "comidas-rapidas",
            iconClass: "fas fa-utensils" // Icono genérico de comida
        },
        {
            name: "Choripapa",
            price: "$10.500",
            phrase: "Chorizo con papas, irresistible combinación.",
            category: "comidas-rapidas",
            iconClass: "fas fa-utensils" // Icono genérico de comida
        },
        {
            name: "Papas Con Carne Desmechada Pequeña",
            price: "$10.000",
            phrase: "Papas crujientes con carne desmechada.",
            category: "comidas-rapidas",
            iconClass: "fas fa-bowl-food" // Icono de tazón de comida (FA6) o fa-utensils (FA5)
        },
        {
            name: "Papas Con Carne Desmechada Grande",
            price: "$15.000",
            phrase: "La porción generosa de papas con carne desmechada.",
            category: "comidas-rapidas",
            iconClass: "fas fa-bowl-food" // Icono de tazón de comida (FA6) o fa-utensils (FA5)
        },

        // HAMBURGUESAS
        {
            name: "Hamburguesa Sencilla",
            price: "$9.000",
            phrase: "Clásica y deliciosa, para cualquier momento.",
            category: "comidas-rapidas",
            iconClass: "fas fa-hamburger" // Icono de hamburguesa
        },
        {
            name: "Hamburguesa Especial",
            price: "$12.000",
            phrase: "Con ingredientes extra para un sabor único.",
            category: "comidas-rapidas",
            iconClass: "fas fa-hamburger" // Icono de hamburguesa
        },

        // AREPAS
        {
            name: "Arepa Con Carne Desmechada Sencilla",
            price: "$7.000",
            phrase: "La tradicional arepa con carne desmechada.",
            category: "comidas-rapidas",
            iconClass: "fas fa-bread-slice" // Icono de rebanada de pan (para arepa)
        },
        {
            name: "Arepa Con Carne Desmechada Especial (Ensalada, Ripio Y Queso)",
            price: "$10.000",
            phrase: "Arepa completa con ensalada, ripio y queso.",
            category: "comidas-rapidas",
            iconClass: "fas fa-bread-slice" // Icono de rebanada de pan (para arepa)
        },

        // CARNES A LA PLANCHA
        {
            name: "Carne A La Plancha De Res (Carne, Papas Y Arepa Con Queso)",
            price: "$22.000",
            phrase: "Jugosa carne de res a la plancha con acompañamientos.",
            category: "comidas-rapidas",
            iconClass: "fas fa-steak" // Icono de bistec (FA6) o fa-drumstick-bite (FA5)
        },
        {
            name: "Carne A La Plancha Cerdo (Carne, Papas, Ensalada Y Arepa Con Queso)",
            price: "$19.000",
            phrase: "Deliciosa carne de cerdo a la plancha con ensalada.",
            category: "comidas-rapidas",
            iconClass: "fas fa-bacon" // Icono de tocino (FA6) o fa-drumstick-bite (FA5)
        },
        {
            name: "Pechuga A La Plancha (Pechuga, Papas, Ensalada Y Arepa Con Queso)",
            price: "$20.000",
            phrase: "Pechuga de pollo a la plancha, saludable y sabrosa.",
            category: "comidas-rapidas",
            iconClass: "fas fa-drumstick-bite" // Icono de muslo de pollo
        },
        {
            name: "Chuzo De Pollo (Chuzo De Pollo, Papas, Ensalada Y Arepa Con Queso)",
            price: "$18.000",
            phrase: "Un chuzo de pollo con todos los extras.",
            category: "comidas-rapidas",
            iconClass: "fas fa-shish-kebab" // Icono de shish kebab (FA6) o fa-utensils (FA5)
        },

        // PICADAS
        {
            name: "Picada (Papas A La Francesa, Carne Desmechada, Carne De Hamburguesa, Chorizo, Arepa Con Lonchita Y Huevo De Codorniz)",
            price: "$23.000",
            phrase: "La picada más completa para compartir.",
            category: "comidas-rapidas",
            iconClass: "fas fa-plate-utensils" // Icono de plato con utensilios (FA6) o fa-utensils (FA5)
        },
        {
            name: "Picada para dos",
            price: "$34.000",
            phrase: "Perfecta para compartir en pareja.",
            category: "comidas-rapidas",
            iconClass: "fas fa-plate-utensils"
        },
        {
            name: "Picada Familiar",
            price: "$53.000",
            phrase: "La picada ideal para toda la familia.",
            category: "comidas-rapidas",
            iconClass: "fas fa-plate-utensils"
        },

        // SANDWICHES
        {
            name: "Sandwich Tradicional",
            price: "$3.000",
            phrase: "El clásico sandwich que nunca falla.",
            category: "comidas-rapidas",
            iconClass: "fas fa-sandwich"
        },
        {
            name: "Sandwich de Pollo",
            price: "$6.000",
            phrase: "Delicioso sandwich con pollo fresco.",
            category: "comidas-rapidas",
            iconClass: "fas fa-sandwich"
        },

        // OTROS
        {
            name: "Butifarra",
            price: "$700",
            phrase: "3 x $2000",
            category: "comidas-rapidas",
            iconClass: "fas fa-utensils" // Icono genérico de comida
        },
        {
            name: "Panzerotti",
            price: "$3.500",
            phrase: "Delicioso panzerotti relleno.",
            category: "comidas-rapidas",
            iconClass: "fas fa-pizza-slice"
        },

        // JUGOS TRADICIONALES
        {
            name: "Borojó",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Conocido por su energía y sabor único.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Fresa",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Frescura y dulzura en cada sorbo.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Guanábana",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Cremoso y exótico, una delicia tropical.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Guayaba",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "El sabor auténtico de la fruta tropical.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Lulo",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Un sabor único y ligeramente ácido, muy colombiano.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Mandarina",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "El toque cítrico y refrescante.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Mango",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Dulce y tropical, un clásico irresistible.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Maracuyá",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Exótico y vibrante, ideal para refrescar.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Mora",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "El sabor intenso y natural del bosque.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Piña",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Refrescante y dulce, perfecto para cualquier momento.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Tomate de Árbol",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Un sabor distintivo y lleno de beneficios.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Uva",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Dulce y jugoso, un clásico que encanta.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },

        // JUGOS COMBINADOS
        {
            name: "Exótico (Mango | Fresa | Piña)",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "Una mezcla sorprendente y deliciosa.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Frutos Amarillos (Piña | Mango | Maracuyá)",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "La dulzura y acidez del trópico en un solo vaso.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Frutos Rojos (Mora | Fresa | Uva | Cereza)",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "Una explosión de sabor y antioxidantes.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Fresa-Mora",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "Un clásico de frutos rojos con un toque ácido.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Mango-Fresa",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "La combinación perfecta de dulzura y frescura.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Maracuyá-Coco",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "El equilibrio perfecto entre lo ácido y lo cremoso.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Maracuyá-Lulo",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "Ácido y refrescante, una explosión de sabor.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Maracuyá-Mango",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "La fusión tropical que te encantará.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Piña-Coco",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "El sabor del caribe en tu paladar.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Piña-Yerbabuena",
            priceAgua: "$8.000 (Agua)",
            priceLeche: "$9.000 (Leche)",
            phrase: "Refrescante y digestivo, ideal para cualquier momento.",
            category: "jugos",
            subcategory: "combinaciones"
        },

        // ADICIONES
        {
            name: "Carne desmechada",
            price: "$4.000",
            phrase: "Dale un toque extra a tu comida.",
            category: "adiciones",
            iconClass: "fas fa-utensils" // O un ícono más específico para carne desmechada
        },
        {
            name: "Carne de hamburguesa",
            price: "$2.500",
            phrase: "Para los amantes de la carne.",
            category: "adiciones",
            iconClass: "fas fa-hamburger" // Ícono de hamburguesa
        },
        {
            name: "Chorizo coctelero",
            price: "$800",
            phrase: "Pequeño pero con gran sabor.",
            category: "adiciones",
            iconClass: "fas fa-hotdog" // Ícono de hotdog o salchicha
        },
        {
            name: "Huevo de codorniz",
            price: "$600",
            phrase: "Un toque especial para tu plato.",
            category: "adiciones",
            iconClass: "fas fa-egg" // Ícono de huevo
        },
        {
            name: "Queso",
            price: "$3.000",
            phrase: "El complemento perfecto.",
            category: "adiciones",
            iconClass: "fas fa-cheese" // Ícono de queso
        },
        {
            name: "Tocineta",
            price: "$3.000",
            phrase: "Crujiente y deliciosa.",
            category: "adiciones",
            iconClass: "fas fa-bacon" // Ícono de tocino
        },

        // OTRAS BEBIDAS
        {
            name: "Botella",
            price: "$35.000",
            phrase: "Botella de bebida para compartir.",
            category: "otras-bebidas",
            iconClass: "fas fa-wine-bottle"
        },
        {
            name: "Coctel Copa",
            price: "$4.500",
            phrase: "Refrescante cóctel en copa.",
            category: "otras-bebidas",
            iconClass: "fas fa-cocktail"
        },
        {
            name: "Milo",
            price: "$8.000",
            phrase: "El clásico Milo que todos aman.",
            category: "otras-bebidas",
            iconClass: "fas fa-coffee"
        }
    ];

    const categories = [
        {
            name: "Comidas Rápidas",
            id: "comidas-rapidas",
            iconHtml: '<i class="fas fa-hamburger fa-4x"></i><i class="fas fa-hotdog fa-4x"></i>',
        },
        {
            name: "Jugos",
            id: "jugos",
            iconHtml: '<i class="fas fa-cocktail fa-4x"></i>',
            subcategories: [
                {
                    name: "Jugos Tradicionales",
                    id: "jugos-tradicionales",
                    iconHtml: '<i class="fas fa-lemon fa-4x"></i>'
                },
                {
                    name: "Combinaciones",
                    id: "combinaciones",
                    iconHtml: '<i class="fas fa-blender fa-4x"></i>'
                }
            ]
        },
        // Nueva categoría para Adiciones
        {
            name: "Adiciones",
            id: "adiciones",
            iconHtml: '<i class="fas fa-plus-circle fa-4x"></i>' // Puedes cambiar el icono
        },
        // Nueva categoría para Otras Bebidas
        {
            name: "Otras Bebidas",
            id: "otras-bebidas",
            iconHtml: '<i class="fas fa-glass-martini fa-4x"></i>'
        }
    ];

    const menuItemsContainer = document.getElementById('menu-items');
    const categoryCardsContainer = document.getElementById('category-cards');
    const currentMenuTitle = document.getElementById('current-menu-title');
    const mainSectionTitle = document.querySelector('.section-title');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');
    const whatsappBtn = document.getElementById('whatsappBtn');
    const homeBtn = document.getElementById('homeBtn');
    const adicionesButtonContainer = document.getElementById('adiciones-button-container');
    const showAdicionesBtn = document.getElementById('show-adiciones-btn');
    const headerElement = document.querySelector('header'); // Referencia al header

    let currentParentCategory = null; // Para saber de qué categoría venimos

    // Crear un contenedor para los botones de regresar
    const backButtonContainer = document.createElement('div');
    backButtonContainer.classList.add('back-button-container');
    backButtonContainer.style.display = 'none'; // Inicialmente oculto
    headerElement.insertAdjacentElement('afterend', backButtonContainer); // Insertar después del header

    // Función auxiliar para agregar el botón de regreso
    function addBackButton(callback, text = '← Volver', isPrimary = false) {
        const backButton = document.createElement('button');
        backButton.textContent = text;
        backButton.classList.add('back-button');
        backButton.addEventListener('click', callback);
        backButtonContainer.appendChild(backButton);
        backButtonContainer.style.display = 'flex'; // Mostrar el contenedor de botones
    }

    // Función para limpiar todos los botones de regreso existentes
    function clearBackButtons() {
        backButtonContainer.innerHTML = '';
        backButtonContainer.style.display = 'none'; // Ocultar el contenedor
    }

    // Función para mostrar las categorías principales
    function showCategories() {
        clearBackButtons(); // Limpia cualquier botón existente
        adicionesButtonContainer.style.display = 'none'; // Oculta el botón de adiciones

        menuItemsContainer.style.display = 'none';
        currentMenuTitle.style.display = 'none';
        categoryCardsContainer.style.display = 'flex';
        mainSectionTitle.textContent = "Nuestras Categorías";
        mainSectionTitle.style.display = 'block';

        categoryCardsContainer.innerHTML = '';
        categories.forEach(category => {
            const categoryCardDiv = document.createElement('div');
            categoryCardDiv.classList.add('category-card');
            categoryCardDiv.dataset.categoryId = category.id;

            categoryCardDiv.innerHTML = `
                <div class="category-icon-wrapper">
                    ${category.iconHtml}
                </div>
                <h3>${category.name}</h3>
            `;
            categoryCardsContainer.appendChild(categoryCardDiv);

            categoryCardDiv.addEventListener('click', () => {
                if (category.subcategories) {
                    displaySubcategories(category.id, category.name, category.subcategories);
                } else {
                    displayProducts(category.id, category.name);
                }
            });
        });
        currentParentCategory = null; // Resetea la categoría padre
    }

    // Función para mostrar subcategorías (solo para Jugos ahora)
    function displaySubcategories(parentId, parentName, subcategories) {
        clearBackButtons(); // Limpia cualquier botón existente
        adicionesButtonContainer.style.display = 'none'; // Oculta el botón de adiciones
        currentParentCategory = { id: parentId, name: parentName, subcategories: subcategories }; // Guarda la categoría padre

        menuItemsContainer.style.display = 'none';
        mainSectionTitle.style.display = 'none';

        categoryCardsContainer.style.display = 'flex';
        categoryCardsContainer.innerHTML = '';

        currentMenuTitle.textContent = `Subcategorías de ${parentName}`;
        currentMenuTitle.style.display = 'block';

        subcategories.forEach(subcat => {
            const subcategoryCardDiv = document.createElement('div');
            subcategoryCardDiv.classList.add('category-card');
            subcategoryCardDiv.dataset.subcategoryId = subcat.id;

            subcategoryCardDiv.innerHTML = `
                <div class="category-icon-wrapper">
                    ${subcat.iconHtml}
                </div>
                <h3>${subcat.name}</h3>
            `;
            categoryCardsContainer.appendChild(subcategoryCardDiv);

            subcategoryCardDiv.addEventListener('click', () => {
                displayProducts(subcat.id, subcat.name, parentId); // Pasar parentId para el botón de regreso
            });
        });

        // Botón de Home (siempre visible)
        const homeButton = document.createElement('button');
        homeButton.innerHTML = '<i class="fas fa-home"></i> Inicio';
        homeButton.classList.add('back-button');
        homeButton.style.backgroundColor = '#4CAF50';
        homeButton.addEventListener('click', () => {
            showCategories();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        backButtonContainer.appendChild(homeButton);
        backButtonContainer.style.display = 'flex';

    }

    // Función para mostrar productos (ya sea de categoría principal o subcategoría)
    function displayProducts(displayId, displayName, parentCategoryId = null) {
        clearBackButtons();
        categoryCardsContainer.style.display = 'none';
        mainSectionTitle.style.display = 'none';

        menuItemsContainer.innerHTML = '';

        const filteredProducts = products.filter(product => {
            if (parentCategoryId) { // Es una subcategoría
                return product.category === parentCategoryId && product.subcategory === displayId;
            } else { // Es una categoría principal (como "Comidas Rápidas" o "Adiciones")
                return product.category === displayId && !product.subcategory; // Asegurarse de no mostrar subcategorías aquí
            }
        });

        if (filteredProducts.length > 0) {
            currentMenuTitle.textContent = `Productos de ${displayName}`;
            currentMenuTitle.style.display = 'block';
            menuItemsContainer.style.display = 'grid';

            filteredProducts.forEach(product => {
                let productName = product.name;
                let productSubtitle = '';
                const match = productName.match(/\((.*?)\)/); // Busca contenido entre paréntesis

                if (match && match[1]) {
                    productSubtitle = `<span class="product-subtitle">(${match[1]})</span>`; // Guarda el contenido con paréntesis
                    productName = productName.replace(/\s*\(.*?\)/, ''); // Elimina el paréntesis del nombre
                }

                let priceHtml = '';
                if (product.priceAgua && product.priceLeche) {
                    priceHtml = `<p class="price">${product.priceAgua}<br>${product.priceLeche}</p>`;
                } else if (product.price) {
                    priceHtml = `<p class="price">${product.price}</p>`;
                }

                const menuItemDiv = document.createElement('div');
                menuItemDiv.classList.add('menu-item');

                menuItemDiv.innerHTML = `
                    <h3>${productName}</h3>
                    ${productSubtitle}
                    ${priceHtml}
                    <p class="phrase">"${product.phrase}"</p>
                `;
                menuItemsContainer.appendChild(menuItemDiv);
            });
        } else {
            currentMenuTitle.textContent = `No hay productos en ${displayName}`;
            currentMenuTitle.style.display = 'block';
            menuItemsContainer.style.display = 'none';
        }

        // Lógica del botón de "Ver Adiciones"
        if (displayId === "comidas-rapidas") {
            adicionesButtonContainer.style.display = 'block';
            showAdicionesBtn.onclick = () => displayProducts("adiciones", "Adiciones");
        } else {
            adicionesButtonContainer.style.display = 'none';
        }

        // Botón de Home (siempre visible)
        const homeButton = document.createElement('button');
        homeButton.innerHTML = '<i class="fas fa-home"></i> Inicio';
        homeButton.classList.add('back-button');
        homeButton.style.backgroundColor = '#4CAF50';
        homeButton.addEventListener('click', () => {
            showCategories();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
        backButtonContainer.appendChild(homeButton);
        backButtonContainer.style.display = 'flex';

        // Botón de regreso principal
        if (parentCategoryId) { // Si venimos de una subcategoría (ej: Jugos Tradicionales)
            const parentCat = categories.find(cat => cat.id === parentCategoryId);
            if (parentCat) {
                addBackButton(() => {
                    displaySubcategories(parentCat.id, parentCat.name, parentCat.subcategories);
                }, `← Volver a Subcategorías de ${parentCat.name}`);
            }
        }
    }

    // Inicia mostrando las categorías cuando la página carga
    showCategories();

    // Lógica para el botón de "volver arriba"
    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            scrollToTopBtn.style.display = 'flex';
        } else {
            scrollToTopBtn.style.display = 'none';
        }
    });

    scrollToTopBtn.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Funcionalidad del botón de Home
    homeBtn.addEventListener('click', function() {
        showCategories();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Funcionalidad del botón de WhatsApp
    whatsappBtn.addEventListener('click', function() {
        const phoneNumber = '573218663932';
        const message = 'Hola! Me gustaría hacer un pedido en Sabor Viral 🍔';
        const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
        window.open(whatsappUrl, '_blank');
    });

    // Hacer scroll automático a la parte superior cuando se actualiza la página
    window.addEventListener('beforeunload', function() {
        window.scrollTo(0, 0);
    });

    // También hacer scroll a la parte superior cuando se carga la página
    window.addEventListener('load', function() {
        window.scrollTo(0, 0);
    });

    // Bloqueo de clic derecho y atajos de teclado
    document.addEventListener('contextmenu', function(e) {
        e.preventDefault();
    });

    document.addEventListener('keydown', function(e) {
        if (e.key === 'F12') { e.preventDefault(); }
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'I') { e.preventDefault(); }
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'J') { e.preventDefault(); }
        if ((e.ctrlKey || e.metaKey) && e.shiftKey && e.key === 'C') { e.preventDefault(); }
        if ((e.ctrlKey || e.metaKey) && (e.key === 'u' || e.key === 'U' || e.keyCode === 85)) { e.preventDefault(); }
        if ((e.ctrlKey || e.metaKey) && e.key === 'S') { e.preventDefault(); }
    });
});