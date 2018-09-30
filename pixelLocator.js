var img = null;
var imageData = null;
var imageLoaded = false;

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
  text("x: " + round(mouseX) + " y: " + round(mouseY), mouseX, mouseY);
}
