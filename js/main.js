import {renderUsersPhotos} from './pictures.js';
import './form.js';
import './validate.js';
import './hashtags.js';
import {
  showAllert,
} from './message.js';
import {
  getUsersPhotos,
} from './api.js';

getUsersPhotos(renderUsersPhotos, showAllert);
