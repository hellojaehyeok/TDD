import fn from './fn';

test('1을 기대한다.', () => {
  expect(1).toBe(1);
});

test('2+3은 5다.', () => {
  expect(fn.add(2, 3)).toBe(5);
});

test('3+3은 5다.', () => {
  expect(fn.add(3, 3)).not.toBe(5);
});
