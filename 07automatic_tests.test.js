const sum = require('./07automatic_tests');

//jest
//npm install jest --save-dev

test('sočet 1 + 2 je 3', ()  => {
  expect(sum(1, 2)).toBe(3)
})