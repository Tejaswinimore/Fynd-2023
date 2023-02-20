const { buffer } = require("stream/consumers");

var buffer1=Buffer.alloc(100);
buffer1.write("I am here");
var a=buffer1.toString('utf-8');
console.log(a);
console.log(Buffer.isBuffer(buffer1));
console.log(buffer1.length);


var bufferSource=new Buffer('ABC');
var bufferDestination=Buffer.alloc(3);
bufferSource.copy(bufferDestination);
var Data=bufferDestination.toString('utf-8');
console.log(Data);

// slice or filter
var bufferOld=new Buffer('INDIA IS GREAT');
var bufferNew= bufferOld.slice(0,4);
console.log(bufferNew.toString());

//concat 2 buffers
var bufferOne= new Buffer('INDIA');
var bufferTwo= new Buffer('IS GREAT');
var bufferFour= new Buffer('JAI HIND');
var bufferThree= Buffer.concat([bufferOne, bufferTwo, bufferFour]);
console.log(bufferThree.toString()); 