document.addEventListener('DOMContentLoaded', function() {
    const products = [
        {
            name: "Hamburguesa",
            price: "$16.000",
            phrase: "La hamburguesa que ha revolucionado las redes.",
            category: "comidas-rapidas"
        },
        {
            name: "Perro Caliente",
            price: "$14.000",
            phrase: "Tan grande que necesitarás las dos manos... ¡y más!",
            category: "comidas-rapidas"
        },
        {
            name: "Sándwich de Pollo",
            price: "$14.000",
            phrase: "El crujido perfecto en cada mordisco.",
            category: "comidas-rapidas"
        },
        {
            name: "Empanadas (x12)",
            price: "$12.000",
            phrase: "El sabor casero que te conecta con tus raíces.",
            category: "comidas-rapidas"
        },
        {
            name: "Ensalada Fresca",
            price: "$10.000",
            phrase: "Ligera, deliciosa y llena de vitalidad.",
            category: "comidas-rapidas"
        },
        {
            name: "Wrap de Vegetales",
            price: "$12.000",
            phrase: "La opción saludable que no sacrifica el sabor.",
            category: "comidas-rapidas"
        },
        // Productos de Jugos Tradicionales
        {
            name: "Mandarina",
            priceAgua: "$5.000 (Agua)",
            priceLeche: "$6.000 (Leche)",
            phrase: "El toque cítrico y refrescante.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Maracuyá",
            priceAgua: "$5.000 (Agua)",
            priceLeche: "$6.000 (Leche)",
            phrase: "Exótico y vibrante, ideal para refrescar.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Mango",
            priceAgua: "$5.000 (Agua)",
            priceLeche: "$6.000 (Leche)",
            phrase: "Dulce y tropical, un clásico irresistible.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Mora",
            priceAgua: "$5.000 (Agua)",
            priceLeche: "$6.000 (Leche)",
            phrase: "El sabor intenso y natural del bosque.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Fresa",
            priceAgua: "$5.000 (Agua)",
            priceLeche: "$6.000 (Leche)",
            phrase: "Frescura y dulzura en cada sorbo.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Lulo",
            priceAgua: "$5.000 (Agua)",
            priceLeche: "$6.000 (Leche)",
            phrase: "Un sabor único y ligeramente ácido, muy colombiano.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Guanábana",
            priceAgua: "$5.000 (Agua)",
            priceLeche: "$6.000 (Leche)",
            phrase: "Cremoso y exótico, una delicia tropical.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Piña",
            priceAgua: "$5.000 (Agua)",
            priceLeche: "$6.000 (Leche)",
            phrase: "Refrescante y dulce, perfecto para cualquier momento.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Guayaba",
            priceAgua: "$5.000 (Agua)",
            priceLeche: "$6.000 (Leche)",
            phrase: "El sabor auténtico de la fruta tropical.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Tomate de Árbol",
            priceAgua: "$5.000 (Agua)",
            priceLeche: "$6.000 (Leche)",
            phrase: "Un sabor distintivo y lleno de beneficios.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Uva",
            priceAgua: "$5.000 (Agua)",
            priceLeche: "$6.000 (Leche)",
            phrase: "Dulce y jugoso, un clásico que encanta.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        {
            name: "Borojó",
            priceAgua: "$5.000 (Agua)",
            priceLeche: "$6.000 (Leche)",
            phrase: "Conocido por su energía y sabor único.",
            category: "jugos",
            subcategory: "jugos-tradicionales"
        },
        // Productos de Combinaciones
        {
            name: "Frutos Rojos (Mora | Fresa | Uva | Cereza)",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Una explosión de sabor y antioxidantes.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Frutos Amarillos (Piña | Mango | Maracuyá)",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "La dulzura y acidez del trópico en un solo vaso.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Exótico (Mango | Fresa | Piña)",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Una mezcla sorprendente y deliciosa.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Piña-Yerbabuena",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Refrescante y digestivo, ideal para cualquier momento.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Piña-Coco",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "El sabor del caribe en tu paladar.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Mango-Fresa",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "La combinación perfecta de dulzura y frescura.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Fresa-Mora",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Un clásico de frutos rojos con un toque ácido.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Maracuyá-Mango",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "La fusión tropical que te encantará.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Maracuyá-Lulo",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "Ácido y refrescante, una explosión de sabor.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        {
            name: "Maracuyá-Coco",
            priceAgua: "$6.000 (Agua)",
            priceLeche: "$7.000 (Leche)",
            phrase: "El equilibrio perfecto entre lo ácido y lo cremoso.",
            category: "jugos",
            subcategory: "combinaciones"
        },
        // Productos de Adiciones (vacío por ahora, puedes añadir aquí)
        // {
        //     name: "Papas Fritas",
        //     price: "$4.000",
        //     phrase: "Crujientes y doradas.",
        //     category: "comidas-rapidas",
        //     subcategory: "adiciones"
        // }
    ];

    const categories = [
        {
            name: "Comidas Rápidas",
            id: "comidas-rapidas",
            iconHtml: '<i class="fas fa-hamburger fa-4x"></i><i class="fas fa-hotdog fa-4x"></i>',
            subcategories: [ // Añadida la propiedad subcategories aquí
                {
                    name: "Adiciones",
                    id: "adiciones",
                    iconHtml: '<i class="fas fa-plus-circle fa-4x"></i>' // Icono de ejemplo
                }
            ]
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
        }
    ];

    const menuItemsContainer = document.getElementById('menu-items');
    const categoryCardsContainer = document.getElementById('category-cards');
    const categoryTitleElement = document.getElementById('category-selected-title');
    const mainSectionTitle = document.querySelector('.section-title');
    const scrollToTopBtn = document.getElementById('scrollToTopBtn');

    let currentParentCategory = null; // Para saber de qué categoría venimos

    // Función auxiliar para agregar el botón de regreso
    function addBackButton(callback, text = '← Volver a Categorías', insertAfterElement = categoryTitleElement) {
        const backButton = document.createElement('button');
        backButton.textContent = text;
        backButton.classList.add('back-button');
        backButton.addEventListener('click', callback);
        insertAfterElement.insertAdjacentElement('afterend', backButton);
    }

    // Función para limpiar todos los botones de regreso existentes
    function clearBackButtons() {
        document.querySelectorAll('.back-button').forEach(button => button.remove());
    }

    // Función para mostrar las categorías principales
    function showCategories() {
        clearBackButtons(); // Limpia cualquier botón existente

        menuItemsContainer.style.display = 'none';
        categoryTitleElement.style.display = 'none';
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
                    displayProductsByCategory(category.id, category.name);
                }
            });
        });
        currentParentCategory = null; // Resetea la categoría padre
    }

    // Función para mostrar subcategorías
    function displaySubcategories(parentId, parentName, subcategories) {
        clearBackButtons(); // Limpia cualquier botón existente
        currentParentCategory = { id: parentId, name: parentName }; // Guarda la categoría padre

        menuItemsContainer.style.display = 'none';
        mainSectionTitle.style.display = 'none';

        categoryCardsContainer.style.display = 'flex';
        categoryCardsContainer.innerHTML = '';

        categoryTitleElement.textContent = `Subcategorías de ${parentName}`;
        categoryTitleElement.style.display = 'block';

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
                displayProductsBySubcategory(parentId, subcat.id, subcat.name);
            });
        });

        addBackButton(showCategories, '← Volver a Categorías');
    }

    // Función para mostrar productos de una categoría principal (sin subcategorías)
    function displayProductsByCategory(categoryId, categoryName) {
        clearBackButtons();
        categoryCardsContainer.style.display = 'none';
        mainSectionTitle.style.display = 'none';

        menuItemsContainer.innerHTML = '';
        const filteredProducts = products.filter(product => product.category === categoryId && !product.subcategory);

        if (filteredProducts.length > 0) {
            categoryTitleElement.textContent = `Productos de ${categoryName}`;
            categoryTitleElement.style.display = 'block';
            menuItemsContainer.style.display = 'grid';

            filteredProducts.forEach(product => {
                const menuItemDiv = document.createElement('div');
                menuItemDiv.classList.add('menu-item');

                // Lógica para mostrar los precios
                let priceHtml = '';
                if (product.priceAgua && product.priceLeche) {
                    priceHtml = `<p class="price">${product.priceAgua}<br>${product.priceLeche}</p>`;
                } else if (product.price) {
                    priceHtml = `<p class="price">${product.price}</p>`;
                }

                menuItemDiv.innerHTML = `
                    <h3>${product.name}</h3>
                    ${priceHtml}
                    <p class="phrase">"${product.phrase}"</p>
                `;
                menuItemsContainer.appendChild(menuItemDiv);
            });
        } else {
            categoryTitleElement.textContent = `No hay productos en ${categoryName}`;
            categoryTitleElement.style.display = 'block';
            menuItemsContainer.style.display = 'none';
        }

        addBackButton(showCategories, '← Volver a Categorías');
    }

    // Función para mostrar productos de una subcategoría
    function displayProductsBySubcategory(parentId, subcategoryId, subcategoryName) {
        clearBackButtons();
        categoryCardsContainer.style.display = 'none';
        mainSectionTitle.style.display = 'none';

        menuItemsContainer.innerHTML = '';
        const filteredProducts = products.filter(product => product.category === parentId && product.subcategory === subcategoryId);

        if (filteredProducts.length > 0) {
            categoryTitleElement.textContent = `Productos de ${subcategoryName}`;
            categoryTitleElement.style.display = 'block';
            menuItemsContainer.style.display = 'grid';

            filteredProducts.forEach(product => {
                const menuItemDiv = document.createElement('div');
                menuItemDiv.classList.add('menu-item');

                // Lógica para mostrar los precios en dos líneas
                let priceHtml = '';
                if (product.priceAgua && product.priceLeche) {
                    priceHtml = `<p class="price">${product.priceAgua}<br>${product.priceLeche}</p>`;
                } else if (product.price) {
                    priceHtml = `<p class="price">${product.price}</p>`;
                }

                menuItemDiv.innerHTML = `
                    <h3>${product.name}</h3>
                    ${priceHtml}
                    <p class="phrase">"${product.phrase}"</p>
                `;
                menuItemsContainer.appendChild(menuItemDiv);
            });
        } else {
            categoryTitleElement.textContent = `No hay productos en ${subcategoryName}`;
            categoryTitleElement.style.display = 'block';
            menuItemsContainer.style.display = 'none';
        }

        // Botón para volver a las subcategorías (ej: Subcategorías de Jugos)
        addBackButton(() => {
            const parentCategory = categories.find(cat => cat.id === currentParentCategory.id);
            if (parentCategory && parentCategory.subcategories) {
                displaySubcategories(parentCategory.id, parentCategory.name, parentCategory.subcategories);
            } else {
                showCategories(); // Fallback si algo sale mal
            }
        }, `← Volver a Subcategorías de ${currentParentCategory.name}`);

        // Segundo botón para volver directamente a las categorías principales
        addBackButton(showCategories, '← Volver a Categorías', menuItemsContainer);
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