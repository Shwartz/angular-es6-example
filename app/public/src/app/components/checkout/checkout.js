import {Component, ViewChildren} from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {CheckoutItem} from './item/item';
import {Cookies} from '../../services/cookie.service';
import {Memoize} from '../../services/memoize.service';

const path = 'public/src/app/components/checkout/';

/*import headerTemplate from 'raw-loader!./checkout.html';
 import headerStyle from 'raw-loader!./checkout.css';*/

@Component({
	selector: 'checkout',
	template: require('./checkout.html'),
	styles: [require('./checkout.css')],
	queries: {
		itemsComponents: new ViewChildren(CheckoutItem)
	}
})
export class Checkout {
	items;
	total;
	totalCurrency;

	cartService;
	router;
	cookies = new Cookies();
	memoize = new Memoize();

	static get parameters() {
		return [[CartService], [Router]];
	}

	constructor($cartService, $router) {
		this.cartService = $cartService;
		this.router = $router;
		this.items = $cartService.get();
	}

	ngOnInit() {
		if (this.cartService.isEmpty()) {
			this.router.navigate(['/list']);
		}
	}

	ngAfterViewInit() {
		this.itemsComponents.changes.subscribe(() => setTimeout(this.updateTotal.bind(this)));
		this.updateTotal();
	}

	remove(item) {
		this.items = this.cartService.remove(item);
	}

	updateTotal() {
		this.total = this.itemsComponents.map(item => item.getTotal()).reduce((res, cur) => res + cur, 0);
		this.totalCurrency = this.makeCurrency(this.total);
	}

	makeCurrency(total) {
		return `£ ${total.toFixed(2)}`;
	}

	setPrice() {
		this.cookies.createCookie('totalCurrency', this.totalCurrency, 1);
		//this.memoize.set('totalCurrency', this.totalCurrency);
	}
}

