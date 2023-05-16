function componentToHex(c : any) {
  var hex = c.toString(16);
  return hex.length == 1 ? "0" + hex : hex;
}

function rgbToHex(r : any, g : any, b : any) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

export default rgbToHex;
