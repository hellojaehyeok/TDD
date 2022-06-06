# next tdd 연습입니다.

참고자료 : https://www.youtube.com/watch?v=kCR3JAR7CHE

## 세팅

<details>
<summary> 세팅 </summary>

npm install –save-dev jest-environment-jsdom

```shell
yarn add -D jest @testing-library/reac @testing-library/jest-dom
# 추가 설치
yarn add -D jest-environment-jsdom
```

```js
// jest.config.js
const nextJest = require('next/jest');

const createJestConfig = nextJest({
  dir: './',
});

const customJestConfig = {
  setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleDirectories: ['node_modules', '<rootDir>/'],
  testEnvironment: 'jest-environment-jsdom',
};

module.exports = createJestConfig(customJestConfig);
```

```js
// jest.setup.js
// Optional: configure or set up a testing framework before each test.
// If you delete this file, remove `setupFilesAfterEnv` from `jest.config.js`

// Used for __tests__/testing-library.js
// Learn more: https://github.com/testing-library/jest-dom
import '@testing-library/jest-dom/extend-expect';
```

```json
// package.json
"test": "jest"
```

### Trouble shotting

1. `Parsing error : Cannot find module 'next/babel'`
   [해결](https://stackoverflow.com/questions/68163385/parsing-error-cannot-find-module-next-babel)

```
.babelrc
{
"presets": ["next/babel"],
"plugins": []
}

.eslintrc
{
"extends": ["next/babel", "next/core-web-vitals"]
}
```

2. `Error: Test environment jest-environment-jsdom cannot be found. Make sure the testEnvironment configuration option points to an existing node module.`
   [해결](https://stackoverflow.com/questions/72013449/upgrading-jest-to-v28-error-test-environment-jest-environment-jsdom-cannot-be)

```shell
yarn add -D jest-environment-jsdom
```

</details>
