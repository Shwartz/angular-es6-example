import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';
import {HttpModule} from '@angular/http';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';

import {App} from './app';
import {Heading} from './components/heading/heading';
import {BreadCrumbs} from './components/bread-crumbs/bread-crumbs';

const routes = [

];

@NgModule({
	declarations: [
		App,
		Heading,
		BreadCrumbs,
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
	providers: []
})

export class AppModule {}