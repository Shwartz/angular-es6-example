import {Component, Input} from '@angular/core';

@Component({
	selector: 'cart',
	template: require('./cart.html'),
	styles: [require('./cart.css')]
})
export class Cart {
	@Input() count;
}
