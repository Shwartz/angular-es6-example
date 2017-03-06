import {Component, Input, Output, EventEmitter} from '@angular/core';

const deliveryPrices = {
	slow: 0.2,
	medium: 0.3,
	fast: 0.5,
};

@Component({
	selector: 'checkout-item',
	template: require('./item.html'),
	styles: [require('./item.css')]
})
export class CheckoutItem {
	@Input() item;
	@Input() index;
	@Output() onTotalChange = new EventEmitter();
	@Output() onRemoveClick = new EventEmitter();

	delivery = 'medium';

	getDeliveryPrice() {
		return deliveryPrices[this.delivery];
	}

	getTotal() {
		return parseInt(this.item.price) + this.getDeliveryPrice();
	}

	getPriceCurrency(item) {
		return `£ ${item}`;
	}

	getTotalCurrency() {
		return `£ ${this.getTotal().toFixed(2)}`;
	}
}

