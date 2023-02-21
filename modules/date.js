import { DateTime } from './luxon.js';

const timeDate = document.getElementById('dated');

setInterval(() => {
  const now = DateTime.now();
  timeDate.innerHTML = now.toFormat('ccc LLL dd yyyy, hh:mm:ss a');
}, 1000);
