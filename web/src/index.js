window.onerror = () => {
  window.location = '/error';

  return true;
};

const ssc = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
let sscIndex = 0;

window.onkeydown = ({ which }) => {
  if (ssc[sscIndex] === which) {
    sscIndex++;

    if (sscIndex === ssc.length && confirm('goto admin?')) // eslint-disable-line
      window.location = '/secret';
  } else
    sscIndex = 0;
};
