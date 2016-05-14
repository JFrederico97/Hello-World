var a = [1,2,3,4,5];
function rev(a){
  var arr = [];
  for(var i = 0; i <= a.length; i++){
    var pos = i + 1;
    arr[a.length - pos] = a[i];
  }
  return arr;
};

rev(a);
