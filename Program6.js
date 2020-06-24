var gridSize = 20;
var path = 0;
var gridArray = new Array(gridSize + 1);

for(var i = 0; i <= gridSize; i++)
{
  gridArray[i] = new Array(gridSize + 1);
}

for (var i = 0; i < gridSize; i++)
{
    gridArray[i][gridSize] = 1;
    gridArray[gridSize][i] = 1;
}

//gridArray[0][0] = 1;

for(var i = gridSize - 1; i >= 0; i--)
{
  for(var j = gridSize -1; j >= 0; j--)
  {
    gridArray[i][j] = gridArray[i + 1][j] + gridArray[i][j + 1];
    path = gridArray[i][j];
  }
}

console.log(path);
