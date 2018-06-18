import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
	public numbers: number[] = [];
	public filteredList: number[] = [];
	private iterations: number = 1000;
	private divider: number = 10;

	constructor() {
		this.populateNumbers();
	}

	public populateNumbers() {
		for (var i:number = 1; i <= this.iterations; i++) {
			this.numbers.push(i);
		}
		console.log(this.numbers);
		this.filterDividables();
	}

	public isPrime(number:number):boolean {
		for (var i: number = 2; i < number; i++) {
			if(number % i === 0) return false;
		}

		return true;
	}

	public filterDividables():void {
		for (var i: number = 1; i < this.numbers.length; i++) {
			if(i % this.divider !== 0) {
				this.filteredList.push(i);
			}
		}

	}


}
