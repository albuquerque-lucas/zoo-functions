const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testa caso de passar o argumento count', () => {
    expect(handlerElephants('count')).toBe(4);
  });
  test('Testa se o resultado é um array', () => {
    expect(typeof handlerElephants('names')).toBe('object');
  });

  test('Testa caso de passar o argmento names', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  test('Testa o caso das médias das idades dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });
});
