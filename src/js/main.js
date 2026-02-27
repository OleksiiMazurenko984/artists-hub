import { initMobileMenu } from './mobile-menu.js';
import { toggleFilterMenu } from './filter-menu.js';
import { renderGenres } from './render/renderGenres.js';
import './components/slider';
import './render/renderFeedbacks.js';
import './components/setRatingModal.js'
import './components/feedbackModal/feedbackModal.js';

initMobileMenu();
toggleFilterMenu();
renderGenres();

import './artists.js';
import './artist-modal.js';
