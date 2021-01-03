import Head from 'next/head';
import { Container } from '@material-ui/core';
import { FiHeart } from 'react-icons/fi';

import AboutApp from './aboutApp';

const Layout = (props) => {
  return (
    <div>
      <Head>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href={
            'https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c&display=swap'
          }
          rel="stylesheet"
        />

        <link
          rel="stylesheet"
          href={
            'https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap'
          }
        />
      </Head>
      <Container maxWidth="sm">
        <header>
          <FiHeart />
          <h1>永遠の１７才</h1>
          <FiHeart />
        </header>
        <AboutApp />
        <main>{props.children}</main>
      </Container>
    </div>
  );
};

export default Layout;
