"use strict";var s=function(a,r){return function(){try{return r||a((r={exports:{}}).exports,r),r.exports}catch(e){throw (r=0, e)}};};var u=s(function(y,t){
var n=require('@stdlib/ndarray-base-numel-dimension/dist'),q=require('@stdlib/ndarray-base-stride/dist'),d=require('@stdlib/ndarray-base-offset/dist'),o=require('@stdlib/ndarray-base-data-buffer/dist'),l=require('@stdlib/blas-ext-base-dxsa/dist').ndarray,m=require('@stdlib/ndarray-base-ndarraylike2scalar/dist');function x(a){var r,e;return e=a[0],r=m(a[1]),l(n(e,0),r,o(e),q(e,0),d(e)),e}t.exports=x
});var c=require("path").join,f=require('@stdlib/utils-try-require/dist'),p=require('@stdlib/assert-is-error/dist'),g=u(),i,v=f(c(__dirname,"./native.js"));p(v)?i=g:i=v;module.exports=i;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
