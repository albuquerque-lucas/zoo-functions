const handlerElephants = require('../src/handlerElephants');

describe('Testes da função HandlerElephants', () => {
  test('Testa caso de passar o argumento count', () => {
    expect(handlerElephants('count')).toBe(4);
  });

  test('Testa caso de passar o argmento names', () => {
    expect(handlerElephants('names')).toContain('Jefferson');
  });

  test('Testa o caso das médias das idades dos elefantes', () => {
    expect(handlerElephants('averageAge')).toBeCloseTo(10.5);
  });

  test('Testa se caso a função não receba nenhum parâmetro, retorna undefined', () => {
    expect(handlerElephants()).toBe(undefined);
  });

  test('Testa se caso o valor passado como parâmetro não seja string, retorna uma mensagem de erro', () => {
    expect(handlerElephants(1)).toBe('Parâmetro inválido, é necessário uma string');
  });

  test('Verifica se caso o valor passado como parâmetro não exista, retorna null', () => {
    expect(handlerElephants('address')).toBe(null);
  });

  test('Verifica se caso receba como parâmetro, qualquer chave do objeto Elephants, retorna o valor dessa chave', () => {
    expect(handlerElephants('name')).toBe('elephants');
  });
});
