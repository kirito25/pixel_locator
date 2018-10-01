var img = null;
var imageData = null;
var imageLoaded = false;
var points = ["x,y"];

function readURL(input) {
  if (input.files && input.files[0]) {
    var reader = new FileReader();
     reader.onload = function(e) {
      imageData = e.target.result;
      img = loadImage(imageData);
      setTimeout(adjustSize, 100);
    }
    reader.readAsDataURL(input.files[0]);
  }
}

function adjustSize() {
  resizeCanvas(img.width, img.height);
}
  

function setup() {
  $("#uploadImage").change(function() { readURL(this); });
  createCanvas(100, 100);
  textSize(16);
  fill('red');
  noLoop();
}

function draw() {
  if (img != null) {
    image(img, 0, 0);
  }
  
}

function mouseClicked() {
  if (mouseX < 0 || mouseY < 0) {
    return;
  }
  text("x: " + round(mouseX) + " y: " + round(mouseY), mouseX, mouseY);
  var row = round(mouseX).toString() + "," + round(mouseY).toString();
  points.push(row);
}

function savePoints() {
  var writer = createWriter('points.csv');
  for (var i = 0; i < points.length; i++) {
    writer.print(points[i]);
  }
  writer.close();
  writer.clear();
}
