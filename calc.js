class Calculator {
	constructor(num1, num2) {
		if (
			Number.isNaN(Number(num1)) ||
			Number.isNaN(Number(num2)) ||
			num1 === '' ||
			num2 === ''
		) {
			throw new Error('Invalid data! Only numbers are accepted!');
		}

		this.num1 = Number(num1);
		this.num2 = Number(num2);
	}

	add() {
		return this.num1 + this.num2;
	}

	subtract() {
		return this.num1 - this.num2;
	}

	multiply() {
		return this.num1 * this.num2;
	}

	divide() {
		if (this.num2 === 0) {
			throw new Error('Division by "0" is prohibited!');
		}
		return this.num1 / this.num2;
	}
}
