import Link from 'next/link';

import { useAuthUser, } from '@/libs/auth/hooks/useAuthUser';
import LoginForm from './LoginForm';
import UserPanel from './UserPanel';


const Header = (): JSX.Element => {
  const authUser = useAuthUser();


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
        {authUser ? (
          <UserPanel />
        ) : (
          <LoginForm />
        )}
      </div>

    </div>
  );
};


export default Header;
