function rectangle(width, height, color) {
    let r = color[0].toUpperCase();
    let res = color.replace(color[0], r);
    color = res;
  
    return {
      width,
      height,
      color,
      calcArea() {
        return width * height;
      },
    };
  }
  let rect = rectangle(4, 5, "red");
  console.log(rect.width);
  console.log(rect.height);
  console.log(rect.color);
  console.log(rect.calcArea());