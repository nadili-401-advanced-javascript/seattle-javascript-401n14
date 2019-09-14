import React from 'react';
import Form from './form.js';
import Words from './words.js';

const App = props => {
  return (
    <React.Fragment>
      <Words />
      <Form />
    </React.Fragment>
  );
};

export default App;
