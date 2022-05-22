import fn from './fn';

test('2+3은 5다.', () => {
  expect(fn.add(2, 3)).toBe(5);
});

test('이름은 song - async', async () => {
  // const name = await fn.getNamePromise();
  // expect(name).toBe('song');
  // or
  await expect(fn.getNamePromise()).resolves.toBe('song');
});

// test('이름은 song - promise', () => {
//   // resolves or rejects
//   return expect(fn.getNamePromise()).resolves.toBe('song');
//   // return fn.getNamePromise().then(name => {
//   //   expect(name).toBe('song');
//   // });
// });

// test('이름은 song - callback', done => {
//   function testCallback(name) {
//     try {
//       expect(name).toBe('song');
//       done();
//     } catch (error) {
//       console.error(error);
//       done();
//     }
//   }
//   fn.getNameCallback(testCallback);
// });
