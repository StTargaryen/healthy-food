function closeModal(modalSelector) {
  const modal = document.querySelector(modalSelector);
  modal.classList.remove('show');
  document.body.style.overflow = '';
}

function showModal(modalSelector, modalTimerId) {
  const modal = document.querySelector(modalSelector);
  modal.classList.add('show');
  document.body.style.overflow = 'hidden';

  if(modalTimerId) {
    clearInterval(modalTimerId);
  };
};

function modal(triggerSelector, modalSelector, modalTimerId) {
  const modalButton = document.querySelectorAll(triggerSelector);
  const modal = document.querySelector(modalSelector);

  modalButton.forEach(btn => {
    btn.addEventListener('click', () => showModal(modalSelector, modalTimerId));
  });

  modal.addEventListener('click', function (event) {
    if (event.target === modal || event.target.getAttribute('data-close') == '') {
      closeModal(modalSelector);
    };
  });

  document.addEventListener('keydown', function (event) {
    if (event.code === 'Escape' && !modal.classList.contains('hide')) {
      closeModal(modalSelector);
    };
  });

  function showModalByScroll() {
    if (window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight) {
      showModal(modalSelector, modalTimerId);
      window.removeEventListener('scroll', showModalByScroll);
    };
  };

  window.addEventListener('scroll', showModalByScroll);
}

export default modal;

export {
  closeModal,
  showModal
};