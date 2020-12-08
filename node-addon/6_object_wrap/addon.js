var addon = require('bindings')('addon');

var obj = new addon.MyObject(10);
console.log( obj.plusOne() );
console.log( obj.plusOne() );
console.log( obj.plusOne() );

console.log( obj.multiply().value() );
console.log( obj.multiply(10).value() );

var newobj = obj.multiply(-1);
console.log( newobj.value() );
console.log( obj === newobj );