var canvas = document.getElementById("canvas");
var context = canvas.getContext("2d");
var imageGridGeneratorSample = new Image();
imageGridGeneratorSample.src = "GridGeneratorSample.png";

function GenerateGrid() {
  var gridWidth = parseInt(document.getElementById("grid-width").value, 10);
  var gridHeight = Number(document.getElementById("grid-height").value);
  var gridNumberOfX = Number(document.getElementById("grid-x").value);
  var gridNumberOfY = Number(document.getElementById("grid-y").value);

  if (isNaN(gridWidth)) {
    alert("（グリッドの幅）数値を入力してください。");
    return;
  } else if (gridWidth < 5 || gridWidth > 2048) {
    alert("（グリッドの幅）5～2048の値を入力してください。");
    return;
  }

  if (isNaN(gridHeight)) {
    alert("（グリッドの高さ）数値を入力してください。");
    return;
  } else if (gridHeight < 5 || gridHeight > 2048) {
    alert("（グリッドの高さ）5～2048の値を入力してください。");
    return;
  }

  if (isNaN(gridNumberOfX)) {
    alert("（グリッドの横数）数値を入力してください。");
    return;
  } else if (gridNumberOfX < 1 || gridNumberOfX > 400) {
    alert("（グリッドの横数）1～400の値を入力してください。");
    return;
  } else if (gridWidth * gridNumberOfX > 2048) {
    alert("グリッドの横幅が2048pxを超えます。");
    return;
  }

  if (isNaN(gridNumberOfY)) {
    alert("（グリッドの縦数）数値を入力してください。");
    return;
  } else if (gridNumberOfY < 1 || gridNumberOfY > 2048) {
    alert("（グリッドの縦数）1～400の値を入力してください。");
    return;
  } else if (gridHeight * gridNumberOfY > 2048) {
    alert("グリッドの縦幅が2048pxを超えます。");
    return;
  }

  var canvasWidth = gridWidth * gridNumberOfX;
  var canvasHeight = gridHeight * gridNumberOfY;

  canvas.width = canvasWidth;
  canvas.height = canvasHeight;

  context.fillStyle = "rgb(255,255,255)";
  context.fillRect(0, 0, canvasWidth, canvasHeight);

  for (var x = 0; x < gridNumberOfX; x++) {
    for (var y = 0; y < gridNumberOfY; y++) {
      var basepointX = x * gridWidth;
      var basepointY = y * gridHeight;
      var beginPointX = gridWidth / 2 + basepointX;
      var beginPointY = basepointY;
      var finishPointX = beginPointX;
      var finishPointY = basepointY + gridHeight;

      drawGrayLine(beginPointX, beginPointY, finishPointX, finishPointY);

      beginPointX = basepointX;
      beginPointY = gridHeight / 2 + basepointY;
      finishPointX = basepointX + gridWidth;
      finishPointY = beginPointY;

      drawGrayLine(beginPointX, beginPointY, finishPointX, finishPointY);

      context.strokeStyle = "rgb(0,0,0)";
      context.strokeRect(basepointX, basepointY, gridWidth, gridHeight);
    }
  }
}

function drawGrayLine(startPointX, startPointY, endPointX, endPointY) {
  context.strokeStyle = "rgb(191,191,191)";
  context.lineWidth = 1;
  context.beginPath();
  context.moveTo(startPointX, startPointY);
  context.lineTo(endPointX, endPointY);
  context.closePath();
  context.stroke();
}

window.onload = function() {
  context.drawImage(imageGridGeneratorSample, 0, 0);
}
