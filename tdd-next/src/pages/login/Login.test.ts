import React from 'react';
import { cleanup } from '@testing-library/react';
import { Login } from './Login';

afterEach(cleanup);

test('테스트 로그인', () => {
  expect('hello world').toBe('hello world');
});
