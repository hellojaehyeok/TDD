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
