import LoginForm from './LoginForm';
import UserPanel from './UserPanel';


const Header = (): JSX.Element => {
  const isLogged = false;


  return (
    <div>
      {isLogged ? (
        <LoginForm />
      ) : (
        <UserPanel />
      )}
    </div>
  );
};


export default Header;
