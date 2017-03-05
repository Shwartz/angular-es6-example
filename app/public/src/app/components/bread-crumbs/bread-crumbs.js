import {Component} from '@angular/core';
import {Router, NavigationEnd} from '@angular/router';
import {CartService} from '../../services/cart.service';

/*import headerTemplate from 'raw-loader!./bread-crumbs.html';
 import headerStyle from 'raw-loader!./bread-crumbs.css';*/

const path = 'public/src/app/components/bread-crumbs/';

@Component({
	selector: 'bread-crumbs',
	template: require('./bread-crumbs.html'),
	styles: [require('./bread-crumbs.css')]
})
export class BreadCrumbs {
	cartService;
	currentRoute;

	static get parameters() {
		return [[CartService], [Router]];
	}

	constructor($cartService, $router) {
		this.cartService = $cartService;

		$router.events.subscribe(event => {
			if (event instanceof NavigationEnd) {
				this.currentRoute = event.url;
			}
		});
	}

	isCheckoutDisabled() {
		return this.cartService.isEmpty();
	}

	isPaymentDisabled() {
		return this.currentRoute !== '/payment';
	}
}

