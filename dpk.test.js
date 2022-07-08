const crypto = require('crypto');
const { deterministicPartitionKey } = require('./dpk');

describe('deterministicPartitionKey', () => {
	it("Returns the literal '0' when given no input", () => {
		const trivialKey = deterministicPartitionKey();
		expect(trivialKey).toBe('0');
	});
});

describe('PartitionKeyLength', () => {
	it('Returns a hash when key length is longer than 256 characters', () => {
		const longString = { partitionKey: 'longString'.repeat(20 * 20) };
		// expect(deterministicPartitionKey(longString)).toBe();
	});
});

describe('NotString', () => {
	it('Converts and returns a string when input is a number', () => {
		const numInput = deterministicPartitionKey(5);
		expect(typeof numInput).toBe('string');
	});
});
