var phase, speed, maxCircleSize, numRows, numCols, numStrands, colorA, colorB;

function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  
  phase = 0;
  speed = 0.03;
  maxCircleSize = 20;
  numRows = 10;
  numCols = 16;
  numStrands = 2;
  
  colorA = color(253, 100, 0);
  colorB = color(0, 150, 0);
}

function draw() {
  background(4, 58, 74);
  phase = frameCount * speed;
  textSize(82);
  fill("orange")
  text('Happy', 110, 700);
  fill("white");
  text('Republic', 290, 810);
  fill("green");
  text('Day', 590, 910);
  for(var strand = 0; strand < numStrands; strand += 1) {
    var strandPhase = phase + map(strand, 0, numStrands, 0, TWO_PI);
    
    for(var col = 0; col < numCols; col += 1) {
      var colOffset = map(col, 0, numCols, 0, TWO_PI);
      var x = map(col, 0, numCols, 50, width - 50);
      
      for(var row = 0; row < numRows; row += 1) {
        var y = height/3 + row * 20 + sin(strandPhase + colOffset) * 50;
        var sizeOffset = (cos(strandPhase - (row / numRows) + colOffset) + 1) * 0.5;
        var circleSize = sizeOffset * maxCircleSize;
        
        fill(lerpColor(colorA, colorB, row / numRows));
        ellipse(x, y, circleSize, circleSize);
        
  
      }
    }
  }
}
