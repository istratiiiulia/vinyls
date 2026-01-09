document.addEventListener('DOMContentLoaded', () => {

  const burger = document.querySelector('.burger');
  const navigation = document.querySelector('.navigation');
  const dropdownLinks = document.querySelectorAll('.dropdown > a, .dropdown-sub > a');

  if (!burger || !navigation) return;

  // Бургер открывает/закрывает навигацию
  burger.addEventListener('click', () => {
    burger.classList.toggle('active');
    navigation.classList.toggle('active');
  });

  // Дропдауны на мобильных — toggle open
  dropdownLinks.forEach(link => {
    link.addEventListener('click', e => {
      if (window.innerWidth <= 768) {
        e.preventDefault(); // чтобы ссылка не переходила
        link.parentElement.classList.toggle('open'); // вот тут toggle
      }
    });
  });

  // Автозакрытие при переходе на десктоп
  window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
      burger.classList.remove('active');
      navigation.classList.remove('active');

      // закрыть все дропдауны
      document.querySelectorAll('.dropdown.open, .dropdown-sub.open')
        .forEach(d => d.classList.remove('open'));
    }
  });

});
