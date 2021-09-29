import { ReactNode, } from 'react';

import type { GetLayout, } from '@/types/common';
import Footer from '../Footer';
import Header from '../Header';


interface Props {
  children: ReactNode,
}


const Layout = ({
  children,
}: Props): JSX.Element => {
  return (
    <div>

      <Header />

      <main>
        {children}
      </main>

      <Footer />

    </div>
  );
};


export const getLayout: GetLayout = (page) => (
  <Layout>
    {page}
  </Layout>
);


export default Layout;
