function checkDominos() {
    const topNumber = parseInt(document.querySelector('.top input').value);
    const bottomNumber = parseInt(document.querySelector('.bottom input').value);
  
    if (topNumber === 4 && bottomNumber === 6) {
      alert('¡Felicidades! Has elegido la ficha de dominó "4/6".');
    } else {
        alert('Respuesta incorrecta')
    }
  }
  