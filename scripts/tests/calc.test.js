const formulas = require("./calc");

describe("Calculator", () => {
    describe("Addition function", () => {
        test("should return 42 for 20 + 22", () => {
            expect(formulas.addition(20, 22)).toBe(42);
        });
        test('should return 73 for 42 + 31', () => {
            expect(formulas.addition(42, 31)).toBe(73);
        });
    });
    describe("Subtract function", () => {
        test("should return 0 for 20 - 20", () => {
            expect(formulas.subtraction(20, 20)).toBe(0);
        });
        test('should return 11 for 42 - 31', () => {
            expect(formulas.subtraction(42, 31)).toBe(11);
        });
    });
    describe("Multiply function", () => {
        test("should return 4 for 2 * 2", () => {
            expect(formulas.multiply(2, 2)).toBe(4);
        });
        test('should return 124 for 4 * 31', () => {
            expect(formulas.multiply(4, 31)).toBe(124);
        });
    });
    describe("Divide function", () => {
        test("should return 1 for 22 / 22", () => {
            expect(formulas.divide(22, 22)).toBe(1);
        });
        test('should return 5 for 100 / 20', () => {
            expect(formulas.divide(100, 20)).toBe(5);
        });
    });
});