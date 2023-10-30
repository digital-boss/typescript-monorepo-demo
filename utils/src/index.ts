import {matcher} from 'matcher';

export const match = () => {
  return matcher(['foo', 'bar', 'moo'], ['*oo', '!foo']);
}

export const greet = () => {
  return "Hello"
}