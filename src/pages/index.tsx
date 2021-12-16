import useTranslation from 'next-translate/useTranslation';

import { getLayout, } from '@/components/Layout';


const HomePage = (): JSX.Element => {
  const { t, } = useTranslation();


  return (
    <div>

      <h1>
        Index Page
      </h1>

      <div>
        {t('home:text')}
      </div>

    </div>
  );
};


HomePage.getLayout = getLayout;


export default HomePage;
