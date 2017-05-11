function pairwise(arr, arg) {
  var index = [];
  var result = 0;
  for (var i = 0; i < arr.length; i++) {

  			for (var j = 1; j < arr.length; j++) {

	  			if ( (arr[i] + arr[j]) === arg && i != j) {
	  				index.push(i + j);
	  				arr[i] = " ";
	  				arr[j] = " ";
	  			};
  			};

  
  	};	

  	for (var k = 0; k < index.length; k++) {
  		result += index[k];
  	};

  return result;
}

pairwise([1, 3, 2, 4], 4) 
pairwise([1, 1, 1], 2) 
pairwise([0, 0, 0, 0, 1, 1], 1) 
