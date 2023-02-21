export const date = () => {
  const timeDate = document.getElementById('dated');
  const date = new Date().toUTCString();
  timeDate.innerHTML = date;
};

export default date;
