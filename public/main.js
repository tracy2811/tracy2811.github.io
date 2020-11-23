const profile = bodymovin.loadAnimation({
  container: document.getElementById('profile'), // Required
  path: 'public/profile.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
});

const arrowDown = bodymovin.loadAnimation({
  container: document.getElementById('arrow-down'), // Required
  path: 'public/arrow-down.json', // Required
  renderer: 'svg', // Required
  loop: true, // Optional
  autoplay: true, // Optional
});
