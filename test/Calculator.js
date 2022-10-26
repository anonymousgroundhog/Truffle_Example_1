const Calculator = artifacts.require('Calculator.sol');

contract('Calculator', () => {
	it('should add data correctly', async () => {
		const calculatorInstance = await Calculator.deployed();
		addition_result = await calculatorInstance.add(2,2);
		assert(addition_result.toNumber() === 4);
	});

	it('should subtract data correctly', async () => {
		const calculatorInstance = await Calculator.deployed();
		addition_result = await calculatorInstance.subtract(4,2);
		assert(addition_result.toNumber() === 2);
	});

	it('should multiply data correctly', async () => {
		const calculatorInstance = await Calculator.deployed();
		addition_result = await calculatorInstance.multiply(4,2);
		assert(addition_result.toNumber() === 8);
	});

	it('should divide data correctly', async () => {
		const calculatorInstance = await Calculator.deployed();
		addition_result = await calculatorInstance.divide(4,2);
		assert(addition_result.toNumber() === 2);
	});
});
