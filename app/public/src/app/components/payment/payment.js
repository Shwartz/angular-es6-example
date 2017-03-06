import {Component} from '@angular/core';
import {Router} from '@angular/router';
import {CartService} from '../../services/cart.service';
import {Cookies} from '../../services/cookie.service';
//import {Memoize} from '../../services/memoize.service';

/*import headerTemplate from 'raw-loader!./payment.html';
 import headerStyle from 'raw-loader!./payment.css';*/

const path = 'public/src/app/components/payment/';

@Component({
	selector: 'payment',
	template: require('./payment.html'),
	styles: [require('./payment.css')]
})
export class Payment {
	details = {};
	submitted = false;

	cartService;
	router;
	cookies = new Cookies();
	//memoize = new Memoize();

	static get parameters() {
		return [[CartService], [Router]];
	}

	constructor($cartService, $router) {
		this.cartService = $cartService;
		this.router = $router;
	}

	ngOnInit() {
		if (this.cartService.isEmpty()) {
			this.router.navigate(['/list']);
		}
	}

	getTotal() {
		return this.cookies.readCookie('totalCurrency');
		//return this.memoize.get('totalCurrency');
	}

	onSubmit() {
		this.cartService.empty();
		this.submitted = true;
	}
}
