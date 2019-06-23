const pizzasList = [
    {
        imgUrl: 'img/1.jpg',
        parameters: {
            name: 'Margarita',
            ingridients: ['cheese', 'pepper', 'tomatoes'],
            ccal: '263',
            price: '5 euro'
        },
        checkTofu: false,
        checkSouce: false,
        id: 1,
    },
    {
        imgUrl: 'img/black.jpg',
        parameters: {
            name: 'Black pizza',
            ingridients: ['black dough', 'vegetables', 'suluguni'],
            ccal: '220',
            price: '8 euro'
        },
        checkTofu: false,
        checkSouce: false,
        id: 2
    },
    {
        imgUrl: 'img/4.jpg',
        parameters: {
            name: 'Pizza with mashrooms',
            ingridients: ['Champignon', 'porcini', 'tofu'],
            ccal: '323',
            price: '6 euro'
        },
        checkTofu: false,
        checkSouce: false,
        id: 3
    },
    {
        imgUrl: 'img/5.jpg',
        parameters: {
            name: 'Potato pizza',
            ingridients: ['potato', 'cheese', 'tomatoes'],
            ccal: '300',
            price: '5 euro'
        },
        checkTofu: false,
        checkSouce: false,
        id: 4
    },
    {
        imgUrl: 'img/6.jpg',
        parameters: {
            name: 'Pizza with corn',
            ingridients: ['corn', 'suluguni', 'peper'],
            ccal: '320',
            price: '8 euro'
        },
        checkTofu: false,
        checkSouce: false,
        id: 5
    },
    {
        imgUrl: 'img/7.jpg',
        parameters: {
            name: 'Bean Pizza',
            ingridients: ['beans', 'olives', 'sous with mango'],
            ccal: '350',
            price: '8 euro'
        },
        checkTofu: false,
        checkSouce: false,
        id: 6
    },
    {
        imgUrl: 'img/8.jpg',
        parameters: {
            name: 'Pizza with nut',
            ingridients: ['nut', 'tofu', 'onion'],
            ccal: '213',
            price: '9 euro'
        },
        checkTofu: false,
        checkSouce: false,
        id: 7
    },
    {
        imgUrl: 'img/9.jpg',
        parameters: {
            name: 'Pizza with steak',
            ingridients: ['vegan steak', 'cheese', 'peper'],
            ccal: '213',
            price: '9 euro'
        },
        checkTofu: false,
        checkSouce: false,
        id: 8
    },
    {
        imgUrl: 'img/10.jpg',
        parameters: {
            name: 'Pizza with sausage',
            ingridients: ['vegan sausage', 'tofu', 'tomatoes'],
            ccal: '270',
            price: '9 euro'
        },
        checkTofu: false,
        checkSouce: false,
        id: 9
    },
    {
        imgUrl: 'img/11.jpg',
        parameters: {
            name: 'Pizza with citrus',
            ingridients: ['oranges', 'corn', 'cheese'],
            ccal: '200',
            price: '7 euro'
        },
        checkTofu: false,
        checkSouce: false,
        id: 10
    },
    {
        imgUrl: 'img/12.jpg',
        parameters: {
            name: 'Nutty pizza',
            ingridients: ['cashew', 'hazelnut', 'walnut'],
            ccal: '370',
            price: '14 euro'
        },
        checkTofu: false,
        checkSouce: false,
        id: 11
    },
    {
        imgUrl: 'img/13.jpg',
        parameters: {
            name: 'Sweet pizza',
            ingridients: ['honey', 'marshmellow', 'chokolate'],
            ccal: '360',
            price: '9 euro'
        },
        checkTofu: false,
        checkSouce: false,
        id: 12
    }
];

const ingridientsForPizzas = [
    {
        name: 'cheese',
        price: 3,
        ccal: 29
    },
    {
        name: 'mashrooms',
        price: 3,
        ccal: 31
    },
    {
        name: 'suluguni',
        price: 2,
        ccal: 29
    },
    {
        name: 'tomatoes',
        price: 2,
        ccal: 22
    },
    {
        name: 'steak',
        price: 4,
        ccal: 29
    },
    {
        name: 'sausage',
        price: 3,
        ccal: 30
    },
    {
        name: 'cashew',
        price: 4,
        ccal: 25
    },
    {
        name: 'peper',
        price: 1,
        ccal: 25
    },
    {
        name: 'onion',
        price: 2,
        ccal: 22
    },
    {
        name: 'beans',
        price: 1,
        ccal: 19
    },
    {
        name: 'olives',
        price: 2,
        ccal: 27
    },
    {
        name: 'corn',
        price: 1,
        ccal: 22
    }
]

let basket = {};
let itemsNum = document.getElementById('items-num');

const addToBasket = (target) => {
    let currentPizza = pizzasList[parseInt(target.id) - 1];
    let str = JSON.stringify(currentPizza);

    if (basket[str]) {
        basket[str]++;
    } else {
        basket[str] = 1;
    }
    let serialObj = JSON.stringify(basket);
    localStorage.setItem('basket', serialObj);
    checkBasket();
}


const checkBasket = () => {
    if (localStorage.getItem('basket')) {
        basket = JSON.parse(localStorage.getItem('basket'));
    }
    let cntItems = 0;
    for (key in basket) {
        cntItems += basket[key]
    }
    itemsNum.innerHTML = cntItems;
}

const createPizzaImg = (url) => {
    const pizzaImg = document.createElement('img');
    pizzaImg.className = 'pizza-img';
    pizzaImg.setAttribute('src', url);
    pizzaImg.setAttribute('data-img', true);
    return pizzaImg;
};

const createDescriptionList = ({ name, ingridients, ccal, price }) => {
    const descriptionList = document.createElement('ul');
    descriptionList.className = 'description-list';
    descriptionList.setAttribute('data-description-list', true)
    const content = [`Name: ${name}`, `Ingridients: ${ingridients}`, `Ccal: ${ccal}`, `Price: ${price}`];

    content.forEach((item) => {
        const descriptionListItem = document.createElement('li');
        descriptionListItem.className = 'description-list__item';
        descriptionListItem.setAttribute('data-description-list-item', true);
        descriptionListItem.innerHTML = item;

        descriptionList.appendChild(descriptionListItem);
    });

    return descriptionList;
};

const createExtraTofu = () => {
    const chooseExtraTofu = document.createElement('input');
    chooseExtraTofu.type = 'checkbox';
    chooseExtraTofu.className = 'checkboxTofu';

    return chooseExtraTofu;
}

const createExtraSouce = () => {
    const chooseExtraSouce = document.createElement('input');
    chooseExtraSouce.type = 'checkbox';
    chooseExtraSouce.className = 'checkboxSouce'

    return chooseExtraSouce;
}

const createBuyButton = () => {
    const buy = document.createElement('button');
    buy.className = 'buy-button';
    buy.innerHTML = 'BUY'

    return buy;
}

const createPizza = ({ imgUrl, parameters, id, checkTofu, checkSouce }) => {
    const pizzaBlock = document.createElement('div');
    pizzaBlock.className = 'pizza-block';
    pizzaBlock.setAttribute('data-pizza-block', true);

    let img = createPizzaImg(imgUrl);
    let list = createDescriptionList(parameters);

    const tofuCheckbox = createExtraTofu();
    tofuCheckbox.setAttribute('pizza-id', id);
    tofuCheckbox.checked = checkTofu;

    const souceCheckbox = createExtraSouce();
    souceCheckbox.setAttribute('pizza-id', id);
    souceCheckbox.checked = checkSouce;

    const labelChooseExtraSouce = document.createElement('label');
    labelChooseExtraSouce.className = 'extra-label';
    labelChooseExtraSouce.innerHTML = 'Extra souce';
    labelChooseExtraSouce.appendChild(souceCheckbox);

    const labelChooseExtraTofu = document.createElement('label');
    labelChooseExtraTofu.className = 'extra-label';
    labelChooseExtraTofu.innerHTML = 'Extra tofu';
    labelChooseExtraTofu.appendChild(tofuCheckbox);

    const buyButton = createBuyButton();
    buyButton.id = `${id}-button`;

    pizzaBlock.appendChild(img);
    pizzaBlock.appendChild(list);
    pizzaBlock.appendChild(labelChooseExtraTofu);
    pizzaBlock.appendChild(labelChooseExtraSouce);
    pizzaBlock.appendChild(buyButton);

    return pizzaBlock;
};

const createPizzas = (pizzasList) => {
    const pizzasBlock = document.createElement('div');
    pizzasBlock.className = 'pizzas-block';
    pizzasBlock.setAttribute('data-pizzasBlock', true);

    pizzasList.forEach((pizza) => {
        pizzasBlock.appendChild(createPizza(pizza))
    });

    return pizzasBlock;
};

let createdPizzas = createPizzas(pizzasList);
const pizzasWrapper = document.getElementById('pizzas-wrapper');
pizzasWrapper.appendChild(createdPizzas);
checkBasket();


const checkboxWithCheese = document.getElementById('cheese');
checkboxWithCheese.setAttribute('checkbox-cheese', true);
checkboxWithCheese.className = 'checkboxCheese';
const selectSort = document.getElementById('sort');
const button = document.getElementById('change-button');

const state = {
    cheese: false,
    view: 'desktop',
    filter: 'none',
    tofu: null,
    idPizzaTofu: '',
    souce: null,
    idPizzaSouce: '',
    idPizzaTofu: ''
};

const sortingPrice = (a, b) => {
    return parseInt(a.parameters.price) - parseInt(b.parameters.price);
}
const sortingCcal = (a, b) => {
    return a.parameters.ccal - b.parameters.ccal;
}

const changeCheeseState = () => {
    state.cheese = checkboxWithCheese.checked;

    if (state.view == 'mobile') {
        state.cheese = false;
    }

    redraw();
};

const changeViewState = () => {
    if (state.view == 'desktop') {
        state.view = 'mobile';
        state.cheese = false;
    } else {
        state.view = 'desktop';
    }
    redraw();
}

const changeFilterState = () => {
    state.filter = selectSort.value;
    redraw();
}

const changeSouceState = (checkbox) => {
    state.souce = checkbox.checked;
    state.idPizzaSouce = checkbox.attributes.getNamedItem('pizza-id').value;
    redraw();
}

const changeTofuState = (checkbox) => {
    state.tofu = checkbox.checked;
    state.idPizzaTofu = checkbox.attributes.getNamedItem('pizza-id').value;
    redraw();
}


const createNewPizzaList = () => {
    ingridientsForPizzas.forEach((item) => {
        let labelForInput = document.createElement('label');
        labelForInput.innerHTML = item.name;
        let ingridientInput = document.createElement('input');
        ingridientInput.type = 'checkbox';
        ingridientInput.id = item.name;
        ingridientInput.className = 'ingridient-input';
        labelForInput.appendChild(ingridientInput);
        const ingridientList = document.getElementById('new-pizza-ingridients-list');
        ingridientList.appendChild(labelForInput);       
    });
}

createNewPizzaList();

const getNewPizzaName = () => {
    const newPizzaNameInput = document.getElementById('new-pizza-name');
    let newPizzaName = newPizzaNameInput.value;
    return newPizzaName;
}

let newPizzaIngridients = [];
const newCcal = document.getElementById('new-pizza-ccal');
const newPrice = document.getElementById('new-pizza-price');
let itemCCal = 0;
let itemPrice = 0;

const addIngridient = (target) => {
    newPizzaIngridients.push(target.id);

    addCcal(target.id);
    addPrice(target.id);

    return newPizzaIngridients;
}

const removeIngridient = (target) => {
    newPizzaIngridients = newPizzaIngridients.filter((item) => {
        return item != target.id;        
    });

    removeCcal(target.id);
    removePrice(target.id);

    return newPizzaIngridients;
}

const addCcal = (name) => {
    ingridientsForPizzas.forEach((item) => {
        if(item.name == name) {
            itemCCal += item.ccal
            newCcal.innerHTML = itemCCal;
        }
    });
}

const removeCcal = (name) => {
    ingridientsForPizzas.forEach((item) => {
        if(item.name == name) {
            itemCCal -= item.ccal
            newCcal.innerHTML = itemCCal;
        }
    });
}

const addPrice = (name) => {
    ingridientsForPizzas.forEach((item) => {
        if(item.name == name) {
            itemPrice += item.price
            newPrice.innerHTML = itemPrice;
        }
    });
}

const removePrice = (name) => {
    ingridientsForPizzas.forEach((item) => {
        if(item.name == name) {
            itemPrice -= item.price
            newPrice.innerHTML = itemPrice;
        }
    });
}

const addToList = () => {
    const newPizza = {};
    newPizza.imgUrl = 'img/1.jpg';
    newPizza.parameters = {};

    newPizza.parameters.name = getNewPizzaName();
    newPizza.parameters.ingridients = newPizzaIngridients;
    newPizza.parameters.ccal = newCcal.innerHTML;
    newPizza.parameters.price = newPrice.innerHTML + ' euro';

    newPizza.checkTofu = false;
    newPizza.checkSouce = false;
    newPizza.id = pizzasList.length + 1;

    if(newPizza.parameters.name == ''
    || newPizza.parameters.ingridients == '') {
        alert('You should choose name and at least one ingridient for your pizza');
        return;
    }

    pizzasList.push(newPizza);
    redraw();

}

const redraw = () => {
    pizzasWrapper.removeChild(createdPizzas);
    let fullCopy = pizzasList.slice();
    let pizzaSouceNum = state.idPizzaSouce;
    let pizzaTofuNum = state.idPizzaTofu;

    if (state.souce == true) {
        fullCopy[pizzaSouceNum - 1].parameters.price = parseInt(pizzasList[pizzaSouceNum - 1].parameters.price) + 1 + ' euro';
        fullCopy[pizzaSouceNum - 1].parameters.ccal = +pizzasList[pizzaSouceNum - 1].parameters.ccal + 15;
        fullCopy[pizzaSouceNum - 1].checkSouce = true;
        createdPizzas = createPizzas(fullCopy);
        state.souce = null;
    }

    if (state.souce == false) {
        fullCopy[pizzaSouceNum - 1].parameters.price = parseInt(pizzasList[pizzaSouceNum - 1].parameters.price) - 1 + ' euro';
        fullCopy[pizzaSouceNum - 1].parameters.ccal = +pizzasList[pizzaSouceNum - 1].parameters.ccal - 15;
        fullCopy[pizzaSouceNum - 1].checkSouce = false;
        createdPizzas = createPizzas(fullCopy);
        state.souce = null;
    }

    if (state.tofu == true) {
        fullCopy[pizzaTofuNum - 1].parameters.price = parseInt(pizzasList[pizzaTofuNum - 1].parameters.price) + 2 + ' euro';
        fullCopy[pizzaTofuNum - 1].parameters.ccal = +pizzasList[pizzaTofuNum - 1].parameters.ccal + 40;
        fullCopy[pizzaTofuNum - 1].checkTofu = true;
        createdPizzas = createPizzas(fullCopy);
        state.tofu = null;
    }

    if (state.tofu == false) {
        fullCopy[pizzaTofuNum - 1].parameters.price = parseInt(pizzasList[pizzaTofuNum - 1].parameters.price) - 2 + ' euro';
        fullCopy[pizzaTofuNum - 1].parameters.ccal = +pizzasList[pizzaTofuNum - 1].parameters.ccal - 40;
        fullCopy[pizzaTofuNum - 1].checkTofu = false;
        createdPizzas = createPizzas(fullCopy);
        state.tofu = null;
    }

    if (state.cheese == true) {
        fullCopy = fullCopy.filter((pizza) => {
            for (let i = 0; i < pizza.parameters.ingridients.length; i++) {
                if (pizza.parameters.ingridients[i] == 'cheese'
                    || pizza.parameters.ingridients[i] == 'suluguni'
                    || pizza.parameters.ingridients[i] == 'Mozzarella') {
                    return pizza;
                }
            }
        });
        createdPizzas = createPizzas(fullCopy);
    }
    if (state.cheese == false) {
        createdPizzas = createPizzas(pizzasList);
    }

    if (state.filter == 'price') {
        fullCopy.sort(sortingPrice);
        createdPizzas = createPizzas(fullCopy);
    }
    if (state.filter == 'ccal') {
        fullCopy.sort(sortingCcal);
        createdPizzas = createPizzas(fullCopy);
    }
    pizzasWrapper.appendChild(createdPizzas);

    const mainBlock = document.querySelector('[data-pizzasBlock]')
    const checkboxCheese = document.querySelector('[checkbox-cheese]');
    const checkboxCheeseLabel = document.getElementById('label-cheese');
    const imgCollection = document.querySelectorAll('[data-img]');
    const listCollection = document.querySelectorAll('[data-description-list]');
    const listCollectionItem = document.querySelectorAll('[data-description-list-item]')
    const pizzaBlockCollection = document.querySelectorAll('[data-pizza-block]');

    imgCollection.forEach = Array.prototype.forEach;
    listCollection.forEach = Array.prototype.forEach;

    if (state.view == 'mobile') {
        mainBlock.className = 'pizzas-block pizzas-block_modify';
        checkboxCheese.className = 'checkboxCheese checkboxCheese_modify';
        checkboxCheeseLabel.className = 'label label_modify';

        imgCollection.forEach((item) => {
            item.className = 'pizza-img pizza-img_hidden';
        });
        listCollection.forEach((item) => {
            item.className = 'description-list description-list_modify'
        });

        listCollectionItem.forEach((item) => {
            item.className = 'description-list__item description-list_modify__item'
        });
        pizzaBlockCollection.forEach((item) => {
            item.className = 'pizza-block pizza-block_modify'
        });
    }
    if (state.view == 'desktop') {
        mainBlock.className = 'pizzas-block';
        checkboxCheese.className = 'checkboxCheese';
        checkboxCheeseLabel.className = 'label';

        imgCollection.forEach((item) => {
            item.className = 'pizza-img';
        });
        listCollection.forEach((item) => {
            item.className = 'description-list'
        });
        listCollectionItem.forEach((item) => {
            item.className = 'description-list__item'
        });
        pizzaBlockCollection.forEach((item) => {
            item.className = 'pizza-block'
        });
    }
}


const chooseFunction = (event) => {
    if (event.target.id == 'cheese') {
        changeCheeseState();
    }
    if (event.target.id == 'sort') {
        changeFilterState();
    }
    if (event.target.className == 'checkboxTofu') {
        changeTofuState(event.target);
    }
    if (event.target.className == 'checkboxSouce') {
        changeSouceState(event.target);
    }
    if (event.target.id == 'change-button') {
        changeViewState();
    }
    if (event.target.className == 'buy-button') {
        addToBasket(event.target);
    }
    if (event.target.className == 'ingridient-input' && event.type == 'change' && event.target.checked == true) {
        addIngridient(event.target);
    }
    if (event.target.className == 'ingridient-input' && event.type == 'change' && event.target.checked == false) {
        removeIngridient(event.target);
    }
    if (event.target.id == 'create-button') {
        addToList();
    }
}

document.addEventListener('change', chooseFunction);
document.addEventListener('click', chooseFunction);
