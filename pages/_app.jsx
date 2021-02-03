import React from 'react';
import PropTypes from 'prop-types';
import '../tailwind.css';

const App = ({ Component, pageProps }) => <Component {...pageProps} />;

App.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.instanceOf(Object),
};

App.defaultProps = {
  Component: null,
  pageProps: null,
};

export default App;
