import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {App} from './app';
import {Heading} from './components/heading/heading';
import {BreadCrumbs} from './components/bread-crumbs/bread-crumbs';
import {CartService} from './services/cart.service';
import {List} from './components/list/list';
import {Cart} from './components/cart/cart';
import {Book} from './components/book/book';
import {Payment} from './components/payment/payment';
import {Checkout} from './components/checkout/checkout';
import {CheckoutItem} from './components/checkout/item/item';

const routes = [
	{
		path: 'payment',
		component: Payment
	},
	{
		path: 'checkout',
		component: Checkout
	},
	{
		path: 'list',
		component: List
	},
	{
		path: '',
		redirectTo: '/list',
		pathMatch: 'full'
	}
];

@NgModule({
	declarations: [
		App,
		Heading,
		BreadCrumbs,
		List,
		Cart,
		Book,
		Payment,
		Checkout,
		CheckoutItem
	],
	bootstrap: [
		App
	],
	imports: [
		RouterModule.forRoot(routes),
		BrowserModule,
		CommonModule,
		FormsModule,
		HttpModule
	],
	providers: [
		CartService
	]
})

export class AppModule {}