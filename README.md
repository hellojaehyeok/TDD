# TDD

jest로 TDD 연습하기

facebook에서 만든 테스트도구인 jest

## basic

<details>
<summary>기초</summary>

### 설치

```shell
npm i -D jest
```

### 기본 구조

```js
test('2+3은 5다.', () => {
  expect(fn.add(2, 3)).toBe(5);
});
```

- test("설명", 테스트 함수)
- expext(검증 할 대상)
- toBe(기대되는 값)
- .not.toBe(기대되는 값이 나오지 않을 것을 예상)

#### toEqual, toStrictEqual

배열이나 객체는 재귀적으로 돌면서 비교를 하기 때문에 `toBe`가 아닌 `toEqual`을 사용해야 한다.
좀 더 엄격하게 체크하기 위해서는 `toStrictEqual`을 사용해야 한다.
<br /><br />

#### 기타 메서드

- `toBeNull()` -> null 체크
- `toBeUndefined()` -> undefined 체크
- `toBeDefined()` -> defined 체크
- `toBeTruthy()` -> true 체크
- `toBeFalsy()` -> false 체크
- `toBeGreaterThan(1)` -> 크다
- `toBeGreaterThanOrEqual(1)` -> 크거나 같다
- `toBeLessThan(1)` -> 작다
- `toBeLessThanOrEqual(1)` -> 작거나 같다
- `toBeCloseTo(1)` -> 값이 가까운지 체크 (0.1 + 0.2)
- `toMatch(/a/)` -> 정규표현식
- `toContain("song")` -> 배열에서 특정 요소 검색
- `toThrow()` -> 에러 체크
- `toThrow("-")` -> 에러 내용 체크
- `toBe` ->

<br /><br />

</details>

<br /><br />

## 비동기

<details>
<summary>비동기</summary>

### callback

비동기 코드를 일반적으로 사용하면 jest는 시간을 기다리지 않고 바로 테스트를 종료합니다.  
따라서 done을 인자로 받아 done을 호출하면 됩니다.

e.g.

```js
test('이름은 song - callback', done => {
  function testCallback(name) {
    try {
      expect(name).toBe('song');
      done();
    } catch (error) {
      console.error(error);
      done();
    }
  }
  fn.getName(testCallback);
});
```

### promise

promise의 경우 jest는 resolve를 기다립니다.  
test안에서는 두 가지 방법이 있습니다.

1. return
2. resolves 혹은 rejects matcher 이용하기

```js
test('이름은 song - promise', () => {
  // resolves or rejects
  return expect(fn.getNamePromise()).resolves.toBe('song');
  // or
  return fn.getNamePromise().then(name => {
    expect(name).toBe('song');
  });
});
```

### async

async, await은

```js
test('이름은 song - async', async () => {
  const name = await fn.getNamePromise();
  expect(name).toBe('song');
  // or
  // await expect(fn.getNamePromise()).resolves.toBe('song');
});
```

</details>

<br /><br />

## Troubleshooting

<details>
<summary>Troubleshooting</summary>

에러 : `SyntaxError: Cannot use import statement outside a module`

해결 :

1. babel 설치

```shell
npm i -D @babel/core @babel/preset-env @babel/plugin-transform-modules-commonjs @babel/plugin-transform-runtime
```

2. babel.config.js 추가

```js
module.exports = {
  presets: ['@babel/preset-env'],
  env: { test: { plugins: ['@babel/plugin-transform-modules-commonjs', '@babel/plugin-transform-runtime'] } },
};
```

</details>
