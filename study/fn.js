const name = 'song';

const fn = {
  add: (a, b) => a + b,
  getNameCallback: callback => {
    setTimeout(() => {
      callback(name);
      // callback(() => {
      //   throw new Error('test error');
      // });
    }, 2000);
  },
  getNamePromise: () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(name);
      }, 2000);
    });
  },
};

export default fn;
