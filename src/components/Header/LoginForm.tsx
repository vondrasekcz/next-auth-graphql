import { ChangeEventHandler, useState, } from 'react';


const LoginForm = (): JSX.Element => {
  const [ email, changeEmail, ] = useState<string>('');
  const [ password, changePassword, ] = useState<string>('');


  const handleChangeEmail: ChangeEventHandler<HTMLInputElement> = (e) => changeEmail(e.target.value);
  const handleChangePassword: ChangeEventHandler<HTMLInputElement> = (e) => changePassword(e.target.value);


  return (
    <div>
      <input
        value={email}
        onChange={handleChangeEmail}
        placeholder="Email"
      />
      <input
        type="password"
        value={password}
        onChange={handleChangePassword}
        placeholder="Password"
      />
    </div>
  );
};


export default LoginForm;
