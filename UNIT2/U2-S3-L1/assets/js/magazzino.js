const btnAdd = document.getElementById('add');
const orders = [];
let myOrder;

class Order {
    constructor(_category, __article, _przUni, _discount) {
        this.category = _category;
        this.article = __article;
        this.przUni = _przUni;
        this.discount = _discount;
    }
}

class Mouse extends Order {
    constructor(...Order) {
        super(...Order);
    }

    static deliveryCost = 2;

    calculatePrice() {
        return this.przUni - (this.przUni * (this.discount / 100)) + Mouse.deliveryCost;
    }
}

class Monitor extends Order {
    constructor(...Order) {
        super(...Order);
    }

    static deliveryCost = 15;

    calculatePrice() {
        return this.przUni - (this.przUni * (this.discount / 100)) + Monitor.deliveryCost;
    }
}

btnAdd.addEventListener('click', (e) => {
    e.preventDefault();
    let category = document.getElementById('category').value;
    let article = document.getElementById('article').value;
    let priceUni = document.getElementById('priceUni').value;
    let discount = document.getElementById('discount').value;

    switch (category) {
        case 'monitor':
            myOrder = new Monitor(category, article, priceUni, discount);
            myOrder.finalPrice = myOrder.calculatePrice();
            orders.push(myOrder);
            break;

        case 'mouse':
            myOrder = new Mouse(category, article, priceUni, discount);
            myOrder.finalPrice = myOrder.calculatePrice();
            orders.push(myOrder);
            break;
    }

    console.log(orders);

    printOrders();
});

const printOrders = () => {
    let listOrders = document.getElementById('listOrders');
    listOrders.innerHTML = '';

    orders.forEach(order => {
        let column1 = document.createElement('td');
        column1.innerText = `${order.category}`;
        let column2 = document.createElement('td');
        column2.innerText = `${order.article}`;
        let column3 = document.createElement('td');
        column3.innerText = `${order.przUni}`;
        let column4 = document.createElement('td');
        column4.innerText = `${order.discount}`;
        let column5 = document.createElement('td');
        column5.innerText = `${order.finalPrice}`;
        let newRow = document.createElement('tr');
        newRow.append(column1, column2, column3, column4, column5);
        listOrders.appendChild(newRow);
    });
    let orderForm = document.getElementById('orderForm');
    orderForm.reset();
}