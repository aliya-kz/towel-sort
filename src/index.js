
// You should implement your task here.

module.exports = function towelSort (matrix) {
  var a=new Array();
  if (matrix==null || matrix.length<1 ) {a=[];}
  else{
  for (var i=0; i<matrix.length;i++)
{ var ar=matrix[i];
  if (i==0 || i%2==0) {
   for (var k=0;k<ar.length;k++) {
  a.push(ar[k]);
  }
}
else {
  for (var k=ar.length-1;k>=0;k=k-1) {
  a.push(ar[k]);
  }
}
}
  }
  return a;
}
