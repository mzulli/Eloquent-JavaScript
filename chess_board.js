var c = "";
var output = "";
var size = 5;
for (var i = 1; i <= size; i++) {
  if (i % 2 !== 0) {
    for (var j = 1; j <= size; j++) {
      if (j % 2 === 0) c = "#";
      else c = " ";
    output = output + c;
  	}
  } else {
      for (var j = 1; j <= size; j++) {
      	if (j % 2 !== 0) c = "#";
      	else c = " ";
      output = output + c;
  	}    
  }
  output = output + "\n";
}
console.log(output);