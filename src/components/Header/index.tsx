import Link from 'next/link';
import useTranslation from 'next-translate/useTranslation';

import { useAuthUser, } from '@/libs/auth/hooks/useAuthUser';
import LoginForm from './LoginForm';
import UserPanel from './UserPanel';
import { useRouter } from 'next/router';


const Header = (): JSX.Element => {
  const authUser = useAuthUser();
  const { locale, } = useRouter();
  const { t, } = useTranslation();


  return (
    <div>

      <div>
        {t('common:title')}
      </div>

      <ul>
        <li>
          <Link href="/" locale={locale}>
            <a>Home</a>
          </Link>
        </li>
        <li>
          <Link href="/public" locale={locale}>
            <a>Public</a>
          </Link>
        </li>
        <li>
          <Link href="/private" locale={locale}>
            <a>Private</a>
          </Link>
        </li>
      </ul>

      <div>
        {authUser ? (
          <UserPanel authUser={authUser} />
        ) : (
          <LoginForm />
        )}
      </div>

    </div>
  );
};


export default Header;
