import { atom } from 'recoil';

export const audioState = atom({
  key: 'audioState',
  default: '',
});

export const playState = atom({
  key: 'playState',
  default: false,
});

export const playIdState = atom({
  key: 'playIdState',
  default: '',
});

export const volumeState = atom({
  key: 'volumeState',
  default: 50,
});

export const muteState = atom({
  key: 'muteState',
  default: false,
});
