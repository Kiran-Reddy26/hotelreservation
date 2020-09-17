
function getavg(c,array){
 var Total=0
  // console.log(array,c);
  for (var i = 0; i < array.length; i++) {
  	Total += parseFloat(array[i].total);
	   // console.log(Total);
	}
  Total =Total/c;
    return Total;
}

function getsubTotal(a){
	x = a.adult*15.99 + a.child*8.99;
	n = x.toFixed(2);
	return n;
}

function getTax(a){
	x = getsubTotal(a);
	x = 0.08 * x;
	n = x.toFixed(2);
	return n;
}