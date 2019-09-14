import React from 'react';

const { useTroll } = require('./troll-hook.js');

const App = props => {
  const [words, troll] = useTroll();

  const handleSubmit = event => {
    event.preventDefault();
    troll(event.target.elements.words.value);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="words" placeholder="New Words" />
    </form>
  );
};

export default App;
