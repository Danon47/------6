
document.addEventListener('DOMContentLoaded', function() {

  const btnClose = document.getElementById('btnCloseDel');

  btnClose.addEventListener('click', () => {

    const overLayDiv = document.getElementsByClassName('overLayDiv');
    const overLay = document.getElementsByClassName('overLay');

      overLayDiv[0].style.display = 'none';
      overLay[0].style.display = 'none';
  });

});
