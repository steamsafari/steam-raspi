(function(e){function t(t){for(var r,i,a=t[0],u=t[1],s=t[2],d=0,f=[];d<a.length;d++)i=a[d],c[i]&&f.push(c[i][0]),c[i]=0;for(r in u)Object.prototype.hasOwnProperty.call(u,r)&&(e[r]=u[r]);l&&l(t);while(f.length)f.shift()();return o.push.apply(o,s||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var u=n[a];0!==c[u]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={camera:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],u=a.push.bind(a);a.push=t,a=a.slice();for(var s=0;s<a.length;s++)t(a[s]);var l=u;o.push([2,"chunk-vendors"]),n()})({0:function(e,t){},2:function(e,t,n){e.exports=n("7b60")},7384:function(e,t,n){},"7b60":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("f751"),n("097d");var r=n("a026"),c=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"camera"}},[n("div",[e._v("This is camera console.")]),e._m(0),n("div",{attrs:{id:"capture"}},[n("div",[n("button",{on:{click:e.onCapture}},[e._v("Capture")])]),n("div",{staticClass:"image"},[n("img",{attrs:{src:e.imageSrc}})])]),n("div",{attrs:{id:"sequence"}},[n("div",[n("button",{on:{click:e.onSequence}},[e._v("Sequence")])]),n("div",{staticClass:"image"},[n("img",{attrs:{src:e.sequenceSrc}})])]),n("div",{attrs:{id:"detectColor"}},[n("div",[n("button",{on:{click:e.onDetectColor}},[e._v("Detect Color")])]),n("div",{staticClass:"image"},[n("img",{attrs:{src:e.detectColorSrc}})])]),n("div",{attrs:{id:"detectGesture"}},[n("div",[n("button",{on:{click:e.onDetectGesture}},[e._v("Detect Gesture")])]),n("ul",{staticClass:"list"},e._l(e.detectedGestures,function(t){return n("li",[n("div",[e._v(e._s(t))])])}),0)]),n("div",{attrs:{id:"ocr"}},[n("div",[n("button",{on:{click:e.onOcr}},[e._v("OCR")])]),n("div",{staticClass:"image"},[n("img",{attrs:{src:e.ocrSrc}})]),n("ul",{staticClass:"list"},e._l(e.ocrResult,function(t){return n("li",[n("div",[e._v(e._s(t))])])}),0)])])},o=[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[n("a",{attrs:{href:"/"}},[e._v("home")])])}],i=n("8055"),a=n.n(i),u=n("bc3a"),s=n.n(u),l={name:"camera",components:{},data:function(){return{imageSrc:"",sequenceSrc:"",detectColorSrc:"",detectedGestures:[],ocrSrc:"",ocrResult:[]}},methods:{onCapture:function(){s.a.get("/apis/camera/capture").then(function(){})},onSequence:function(){s.a.get("/apis/camera/sequence").then(function(){})},onDetectColor:function(){s.a.get("/apis/camera/detectColor").then(function(){})},onDetectGesture:function(){var e=this;s.a.get("/apis/camera/detectGesture").then(function(){e.detectedGestures.splice(0,e.detectedGestures.length)})},onOcr:function(){var e=this;s.a.get("/apis/camera/ocr").then(function(){e.ocrResult.splice(0,e.ocrResult.length)})}},created:function(){var e=this,t=a()([window.location.hostname,":","3001"].join(""),{path:"/ws"});t.on("connect",function(){}),t.on("news",function(){t.emit("my other event",{my:"data"})}),t.on("camera.capture",function(t){0===t.code&&t.file&&(e.imageSrc=t.file)}),t.on("camera.sequence",function(e){0===e.code&&e.file&&(this.sequenceSrc=e.file)}),t.on("camera.detectColor",function(t){0===t.code&&t.file&&(e.detectColorSrc=t.file)}),t.on("camera.detectGesture",function(t){0===t.code&&t.data&&e.detectedGestures.push(t.data)}),t.on("camera.ocr.start",function(t){0===t.code&&t.file&&(e.ocrSrc=t.file)}),t.on("camera.ocr.scan",function(t){0===t.code&&t.data&&e.ocrResult.push(t.data)}),t.on("camera.ocr.exit",function(t){0===t.code&&e.ocrResult.push("exit")})}},d=l,f=(n("d571"),n("2877")),p=Object(f["a"])(d,c,o,!1,null,null,null),v=p.exports;r["a"].config.productionTip=!1,new r["a"]({render:function(e){return e(v)}}).$mount("#camera")},d571:function(e,t,n){"use strict";var r=n("7384"),c=n.n(r);c.a}});