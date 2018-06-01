import IMask from 'imask';

export default {
  mask() {
    const phone = new IMask(document.querySelector('.callback__phone'), {
      mask: '+{38}(000)000-00-00'
    });
  }
};


