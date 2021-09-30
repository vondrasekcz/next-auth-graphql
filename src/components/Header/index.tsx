import Link from 'next/link';

import LoginForm from './LoginForm';
import UserPanel from './UserPanel';


const Header = (): JSX.Element => {
  const isLogged = false;


  return (
    <div>

      <ul>
        <li>
          <Link href="/">
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/public">
            <a>Public</a>
          </Link>
        </li>
        <li>
          <Link href="/private">
            <a>Private</a>
          </Link>
        </li>
      </ul>

      <div>
        {isLogged ? (
          <LoginForm />
        ) : (
          <UserPanel />
        )}
      </div>

    </div>
  );
};


export default Header;
