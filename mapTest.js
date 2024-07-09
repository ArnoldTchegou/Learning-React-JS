const tab = [1, 2, 3, 4];

function carre(nombre) {
  return nombre ** 2;
}

const callback_func = (e) => carre(e);
const square_tab = tab.map(carre);

console.log(square_tab);
