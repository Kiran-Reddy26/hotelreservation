var array=[];
var TotalCount = 0;
var TotalAdultCount = 0;
var TotalChildCount = 0; 
var TotalCost = 0;

function myFunction() {
  var x = document.getElementById("name").value;
  document.getElementById("name1").innerHTML =  x;
}

function myFunction1() {
  var x = document.getElementById("phone").value;
  document.getElementById("phone1").innerHTML =  x;
}

function myFunction2() {
  var x = document.getElementById("startdate").value;
  document.getElementById("sdate1").innerHTML =  x;
}

function myFunction3() {
  var x = document.getElementById("enddate").value;
  document.getElementById("edate1").innerHTML =  x;
}

function myFunction4() {
  var x = document.getElementById("adult").value;
  document.getElementById("adult1").innerHTML =  x;
}

function myFunction5() {
  var x = document.getElementById("child").value;
  document.getElementById("child1").innerHTML =  x;
}


function confirm(){
  var name = document.getElementById("name").value;
  var phone = document.getElementById("phone").value;
  var startdate = document.getElementById("startdate").value;
  var enddate = document.getElementById("enddate").value;
  var adult = document.getElementById("adult").value;
  var child = document.getElementById("child").value;

  TotalCount += 1;
  TotalChildCount += parseInt(child,10);
  TotalAdultCount += parseInt(adult,10);
  document.getElementById("reserve").innerHTML =TotalCount;
  document.getElementById("tccount").innerHTML =  TotalChildCount;
  document.getElementById("tacount").innerHTML = TotalAdultCount;

  var a = {
    'name':name,
    'phone': phone,
    'startdate': startdate,
    'enddate': enddate,
    'adult': parseInt(adult,10),
    'child': parseInt(child,10),
  }

  var avg = getavg(TotalCount,array);
  var subtotal = getsubTotal(a);
  var tax = getTax(a);
  var total = parseFloat(subtotal,10) * parseFloat(tax,10);
  var total = total.toFixed(2);

  var b ={
    'name':name,
    'phone': phone,
    'startdate': startdate,
    'enddate': enddate,
    'adult': parseInt(adult,10),
    'child': parseInt(child,10),
    'subtotal': subtotal,
    'tax': tax,
    'total': total,
  }

  array.push(b);
  var avg = getavg(TotalCount,array);
  var avg = avg.toFixed(2);
  document.getElementById("avg").innerHTML = avg;


var html = "<tr><th>Name</th><th>Phone<br>Number</th><th>Adult <br>Count</th><th>Child <br> Count</th><th>startDate</th><th>EndDate</th><th>SubTotal</th><th>Tax<th>Total</th>";
  for (var i = 0; i < array.length; i++) {
    html+="<tr>";
    html+="<td>"+array[i].name+"</td>";
    html+="<td>"+array[i].phone+"</td>";
    html+="<td>"+array[i].adult+"</td>";
    html+="<td>"+array[i].child+"</td>";
    html+="<td>"+array[i].startdate+"</td>";
    html+="<td>"+array[i].enddate+"</td>";
    html+="<td> $"+array[i].subtotal+"</td>";
    html+="<td> $"+array[i].tax+"</td>";
    html+="<td> $"+array[i].total+"</td>";
    html+="</tr>";
  }
  document.getElementById("table").innerHTML = html;


}