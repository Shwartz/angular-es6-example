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

const routes = [
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
		Book
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