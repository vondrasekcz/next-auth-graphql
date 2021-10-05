import { useLogin, } from '@/libs/auth/hooks/useLogin';
import { ChangeEventHandler, useState, } from 'react';


const LoginForm = (): JSX.Element => {
  const [ email, changeEmail, ] = useState<string>('');
  const [ password, changePassword, ] = useState<string>('');

  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (e) => changeEmail(e.target.value);
  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => changePassword(e.target.value);

  const [ mutationLogin, mutationLoginData, ] = useLogin();

  const handleLogin = () => {
    mutationLogin({
      variables: {
        loginInput: {
          email,
          password,
        },
      },
    });
  };


  return (
    <div>
      <div>
        <input
          value={email}
          onChange={handleChangeEmail}
          placeholder="Email"
          autoComplete="username"
          type="email"
        />
      </div>
      <div>
        <input
          type="password"
          autoComplete="current-password"
          value={password}
          onChange={handleChangePassword}
          placeholder="Password"
        />
      </div>
      <div>
        <button
          onClick={handleLogin}
          disabled={mutationLoginData.loading}
        >
          Login
        </button>
      </div>
      {mutationLoginData.error && (
        <div
          style={{ border: '3px solid red', }}
        >
          <pre
            style={{ overflowX: 'auto', }}
          >
            {JSON.stringify(mutationLoginData.error, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
};


export default LoginForm;
