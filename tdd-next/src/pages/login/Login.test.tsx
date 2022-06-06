import React from 'react';
import { cleanup, fireEvent, render } from '@testing-library/react';
import { Login } from './Login';

afterEach(cleanup);

test('로그인 페이지', () => {
  const onSubmit = jest.fn();
  const { getByText, getByLabelText } = render(<Login onSubmit={onSubmit} />);
  const title = getByText('Login page');
  const loginButton = getByText('로그인');
  const username = getByLabelText('이메일');
  const password = getByLabelText('비밀번호');
  expect(title).toBeInTheDocument();
  expect(loginButton).toBeDisabled();

  fireEvent.change(username, { target: { value: 'song' } });
  fireEvent.change(password, { target: { value: 'pwd' } });
  expect(loginButton).toBeEnabled();

  fireEvent.click(loginButton);
  expect(onSubmit).toHaveBeenCalledTimes(1);
});
