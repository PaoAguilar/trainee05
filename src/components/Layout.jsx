import '../styles/layout.scss';
import React from 'react';
import PropTypes from 'prop-types';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, changePage }) => {
  return (
    <div className="content">
      <Header changePage={changePage} />
      <div className="content__wrap-info">{children}</div>
      <Footer />
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.object.isRequired,
  changePage: PropTypes.func.isRequired,
};

export default Layout;
