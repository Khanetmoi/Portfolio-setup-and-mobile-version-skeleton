const toggle = document.getElementById('toggle');

toggle.onclick = function showMenu() {
  const htmlShow = document.querySelectorAll('.headvisible');
  const john = document.getElementById('john');
  const bgImage = document.getElementById('eposition');
  const eposition = document.getElementById('eposition');
  const tg = document.getElementsByClassName('tattempt')[0];

  for (let i = 0; i <= htmlShow.length; i += 1) {
    if (htmlShow[i].style.display === 'none') {
      htmlShow[i].style.display = 'flex';
      toggle.innerHTML = 'X';
      john.innerHTML = '';
      bgImage.style.backgroundImage = "url('img/toggle.png')";
      // bgImage.style.backgroundRepeat = "no-repeat"
      // bgImage.style.backgroundSize = "cover"
      bgImage.style.backgroundSize = 'cover';
      eposition.style.position = 'fixed';
      eposition.style.height = '812px';
      eposition.style.zIndex = 10;
      eposition.style.backgroundColor = '#191765';
    } else {
      htmlShow[i].style.display = 'none';
      toggle.innerHTML = tg.innerHTML;
      john.innerHTML = 'John Doe';
      bgImage.style.backgroundImage = "url('#')";
      eposition.style.position = 'relative';
      eposition.style.height = '10px';
    }
  }
};
