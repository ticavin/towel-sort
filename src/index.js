
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (matrix && matrix.length > 0) {
	  var newarray = [];
	  for (var i = 0; i<= matrix.length-1; i++) {
		   if ( i % 2 !== 0) {
			   matrix[i].reverse();
		   }	
		   for (var j = 0; j<=matrix[i].length - 1; j++) {
			   newarray.push(matrix[i][j]);
		   }
	  }
	  
	  return newarray;
  }
  else {
  	return [];	  
  }
}
