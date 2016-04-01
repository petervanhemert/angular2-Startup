import {Component} from 'angular2/core';
import {Person} from './model/person.model';
import {NamesService} from './services/nameService';

@Component({
    selector: 'hello-atos',
    providers: [NamesService],
    template: `
		<h1>Hello Atos - Dit is Angular 2</h1>
		<h2 [hidden]="showPeter" >Speciale aandacht voor: {{ person.firstName }} {{ person.lastName}}</h2>
		<button class="btn btn-primary" (click)="handleClick()">Click me</button>
		<button class="btn btn-primary" (click)="togglePeter()">Toggle Peter</button>
		<div>
		
		<ul class="list-group">
			<li class="list-group-item" *ngFor="#name of names">
			{{ name.firstName}} {{ name.lastName}}
			</li>
		</ul>
</div>
	`
})

export class AppComponent {
    // initialisaties van properties voor deze Component
    names: Array<Person>;
    person: Person = new Person('Peter', ' van Hemert');
    showPeter: boolean = false;
    cityName: string = 'Eindhoven';

    // Constructor - maak een instantie van de namesService
    constructor(private namesService: NamesService) {
        this.names = namesService.getNames();
    }

    // toon alert via eventbinding met (...)
    handleClick() {
        alert('Event handler!. We zijn in: ' + this.cityName);
    };

    // show hide Peter (haha) via attribute binding met [...]
    togglePeter() {
        this.showPeter = !this.showPeter;
    };

}
