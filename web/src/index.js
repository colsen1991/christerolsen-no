function contains(string, check) {
  return string.indexOf(check) >= 0;
}

function showHideSiteMenu() { // eslint-disable-line no-unused-vars
  const siteMenu = document.getElementById('site-menu');

  if (contains(siteMenu.className, 'hide')) {
    siteMenu.className = 'show';

    Array.prototype.slice.call(document.querySelectorAll('#site-menu a')).forEach(el => {
      el.removeAttribute('tabindex');
    });
  } else {
    siteMenu.className = 'hide';

    Array.prototype.slice.call(document.querySelectorAll('#site-menu a')).forEach(el => {
      el.setAttribute('tabindex', '-1');
    });
  }
}

function bootstrap() { // eslint-disable-line no-unused-vars
  window.onerror = () => {
    window.location = '/error';
  };


  const ssc = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
  let sscIndex = 0;

  window.onkeydown = event => {
    if (ssc[sscIndex] === event.which) {
      sscIndex++;

      if (sscIndex === ssc.length && confirm('goto admin?')) // eslint-disable-line
        window.location = '/secret';
    } else
      sscIndex = 0;
  };


  setTimeout(() => {
    Array.prototype.slice.call(document.getElementsByClassName('animate-on-load')).forEach(el => {
      el.classList.remove('animate-on-load');
    });

    Array.prototype.slice.call(document.querySelectorAll('#site-menu a')).forEach(el => {
      el.addEventListener('click', showHideSiteMenu, false);
    });
  });
}
