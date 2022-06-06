import React, { useState } from 'react';

export const Login = ({ onSubmit }: { onSubmit: () => void }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <div>
      <h1>Login page</h1>

      <form
        onSubmit={e => {
          e.preventDefault();
          onSubmit && onSubmit();
        }}
      >
        <label htmlFor="username">
          이메일
          <input id="username" value={username} onChange={e => setUsername(e.target.value)} />
        </label>
        <label htmlFor="password">
          비밀번호
          <input id="password" type={'password'} value={password} onChange={e => setPassword(e.target.value)} />
        </label>

        <button disabled={!username || !password}>로그인</button>
      </form>
    </div>
  );
};
