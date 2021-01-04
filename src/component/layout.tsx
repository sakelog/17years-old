import CustomHead from './customHead';
import Header from './header';
import { Container } from '@material-ui/core';
import Footer from './footer';

import AboutApp from './aboutApp';

const Layout = (props) => {
  return (
    <>
      <CustomHead />
      <Container maxWidth="sm" className="l-container">
        <Header />
        <AboutApp />
        <main>{props.children}</main>
        <Footer />
      </Container>
    </>
  );
};

export default Layout;
