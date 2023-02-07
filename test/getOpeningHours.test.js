const getOpeningHours = require('../src/getOpeningHours');

describe('Testes da função getOpeningHours', () => {
  test('Testa se caso nenhum argumento seja passado, retorna o array de horários', () => {
    const hoursObjs = {
      Tuesday: { open: 8, close: 6 },
      Wednesday: { open: 8, close: 6 },
      Thursday: { open: 10, close: 8 },
      Friday: { open: 10, close: 8 },
      Saturday: { open: 8, close: 10 },
      Sunday: { open: 8, close: 8 },
      Monday: { open: 0, close: 0 },
    };
    expect(getOpeningHours()).toEqual(hoursObjs);
  });
  test('A função deve retornar que o zoológico está fechado, seja passado um horário de Monday', () => {
    expect(getOpeningHours('Monday', '09:00-AM')).toBe('The zoo is closed');
  });
  test('Deve retornar que o zoológico está aberto, caso seja passado um dia e horário válido', () => {
    expect(getOpeningHours('Tuesday', '09:00-AM')).toBe('The zoo is open');
  });
  test('Deve retornar um erro caso o parâmetro passado referente ao dia nãoseja válido', () => {
    expect(() => getOpeningHours('Thu', '09:00-AM')).toThrow('The day must be valid. Example: Monday');
  });
  test('Deve retornar um erro caso a abreviatura do período do dia não seja válida', () => {
    expect(() => getOpeningHours('Friday', '09:00-ZM')).toThrow('The abbreviation must be \'AM\' or \'PM\'');
  });
  test('Caso o parâmetro passado como horário no campo de horas não seja um número válido, deve retornar um erro', () => {
    expect(() => getOpeningHours('Saturday', 'C9:00-AM')).toThrow('The hour should represent a number');
  });
  test('Caso o parâmetro passado como horário no campo de minutos não seja um número válido, deve retornar um erro', () => {
    expect(() => getOpeningHours('Saturday', '09:c0-AM')).toThrow('The minutes should represent a number');
  });
  test('Caso o horário passado não esteja no formato válido, deve retornar um erro', () => {
    expect(() => getOpeningHours('Monday', '13:00-AM')).toThrow('The hour must be between 0 and 12');
  });
  test('Caso o minuto passado no horário não tenha um valor válido, deve retornar um erro', () => {
    expect(() => getOpeningHours('Monday', '9:60-AM')).toThrow('The minutes must be between 0 and 59');
  });
});
