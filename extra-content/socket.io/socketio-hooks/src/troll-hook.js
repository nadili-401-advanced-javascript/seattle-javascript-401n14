import io from 'socket.io-client';
import { setGlobal, useGlobal } from 'reactn';

setGlobal({ words: '', connected: false });
// let url = 'http://localhost:3000';
let url = 'https://js-401-socket-io-server.herokuapp.com';
const socket = io.connect(url);
let registered = false;

// The Hook Itself
export const useTroll = props => {
  const [words, setWords] = useGlobal('words');

  if (!registered) {
    socket.on('incoming', incoming);
    registered = true;
  }

  function incoming(payload) {
    setWords(payload);
    // let msg = new SpeechSynthesisUtterance(payload);
    // speechSynthesis.speak(msg);
    console.log({ payload });
  }

  function troll(newWords) {
    setWords(newWords);
    socket.emit('troll', newWords);
  }

  return [words, troll];
};
