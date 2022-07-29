import {
  SuccessDataHandler,
} from './pictures.js';

import './validate.js';

import {
  showAlert,
} from './message.js';

import {
  getUsersPhotos,
} from './api.js';

import './filters.js';

import {
  debounce,
} from './util.js';

getUsersPhotos(debounce(SuccessDataHandler), showAlert);

