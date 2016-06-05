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
    [
      'opacity-0',
      'transform-translate-y-minus-100',
      'transform-translate-x-800',
      'transform-translate-x-minus-800'
    ].forEach(className => {
      const els = document.getElementsByClassName(className);
      Array.prototype.slice.call(els).forEach(el => {
        el.classList.remove(className);
      });
    });
  });
}
