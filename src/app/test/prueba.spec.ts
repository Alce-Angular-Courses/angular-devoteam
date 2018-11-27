import {factorial} from './prueba';

describe('Test de la funcion factorial', () => {

    beforeEach( () => {});
    it('shoulb be 0 when n = 0', () => {
        expect(factorial(0)).toEqual(0);
    });
    it('shoulb be 1 when n = 1', () => {
        expect(factorial(1)).toEqual(1);
    });
    it('shoulb be 120 when n = 5', () => {
        expect(factorial(5)).toEqual(120);
    });
    it('shoulb be ? when n = -1', () => {
        expect(factorial(-1)).toBeNull();
    });
});
