(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[5590],{35590:function(e,t,n){"use strict";n.d(t,{$:function(){return C}});var o=n(52322),r=n(77243),a=n(2784),i=n(85982),s=n(84558),c=n(33831),l=n(71520),u=n(64583),h=n(60942),m=n(10389),p=n(12955),d=n(51496),f=n(78583),b=function(e,t){void 0===t&&console.warn('THREE.OrbitControls: The second parameter "domElement" is now mandatory.'),t===document&&console.error('THREE.OrbitControls: "document" should not be used as the target "domElement". Please use "renderer.domElement" instead.'),this.object=e,this.domElement=t,this.enabled=!0,this.target=new p.Pa4,this.minDistance=0,this.maxDistance=1/0,this.minZoom=0,this.maxZoom=1/0,this.minPolarAngle=0,this.maxPolarAngle=Math.PI,this.minAzimuthAngle=-1/0,this.maxAzimuthAngle=1/0,this.enableDamping=!0,this.dampingFactor=.1,this.enableZoom=!0,this.zoomSpeed=1,this.enableRotate=!0,this.rotateSpeed=1,this.enablePan=!0,this.panSpeed=1,this.screenSpacePanning=!0,this.keyPanSpeed=7,this.autoRotate=!0,this.autoRotateSpeed=-2,this.keys={LEFT:37,UP:38,RIGHT:39,BOTTOM:40},this.mouseButtons={LEFT:p.RsA.ROTATE,MIDDLE:p.RsA.DOLLY,RIGHT:p.RsA.PAN},this.touches={ONE:p.QmN.ROTATE,TWO:p.QmN.DOLLY_PAN},this.target0=this.target.clone(),this.position0=this.object.position.clone(),this.zoom0=this.object.zoom,this._domElementKeyEvents=null,this.getPolarAngle=function(){return l.phi},this.getAzimuthalAngle=function(){return l.theta},this.listenToKeyEvents=function(e){e.addEventListener("keydown",X),this._domElementKeyEvents=e},this.saveState=function(){n.target0.copy(n.target),n.position0.copy(n.object.position),n.zoom0=n.object.zoom},this.reset=function(){n.target.copy(n.target0),n.object.position.copy(n.position0),n.object.zoom=n.zoom0,n.object.updateProjectionMatrix(),n.dispatchEvent(o),n.update(),s=i.NONE},this.update=function(){var t=new p.Pa4,r=(new p._fP).setFromUnitVectors(e.up,new p.Pa4(0,1,0)),a=r.clone().invert(),f=new p.Pa4,b=new p._fP,v=2*Math.PI;return function(){var e=n.object.position;t.copy(e).sub(n.target),t.applyQuaternion(r),l.setFromVector3(t),n.autoRotate&&s===i.NONE&&R(2*Math.PI/60/60*n.autoRotateSpeed),n.enableDamping?(l.theta+=u.theta*n.dampingFactor,l.phi+=u.phi*n.dampingFactor):(l.theta+=u.theta,l.phi+=u.phi);var p=n.minAzimuthAngle,g=n.maxAzimuthAngle;return isFinite(p)&&isFinite(g)&&(p<-Math.PI?p+=v:p>Math.PI&&(p-=v),g<-Math.PI?g+=v:g>Math.PI&&(g-=v),l.theta=p<=g?Math.max(p,Math.min(g,l.theta)):l.theta>(p+g)/2?Math.max(p,l.theta):Math.min(g,l.theta)),l.phi=Math.max(n.minPolarAngle,Math.min(n.maxPolarAngle,l.phi)),l.makeSafe(),l.radius*=h,l.radius=Math.max(n.minDistance,Math.min(n.maxDistance,l.radius)),!0===n.enableDamping?n.target.addScaledVector(m,n.dampingFactor):n.target.add(m),t.setFromSpherical(l),t.applyQuaternion(a),e.copy(n.target).add(t),n.object.lookAt(n.target),!0===n.enableDamping?(u.theta*=1-n.dampingFactor,u.phi*=1-n.dampingFactor,m.multiplyScalar(1-n.dampingFactor)):(u.set(0,0,0),m.set(0,0,0)),h=1,!!(d||f.distanceToSquared(n.object.position)>c||8*(1-b.dot(n.object.quaternion))>c)&&(n.dispatchEvent(o),f.copy(n.object.position),b.copy(n.object.quaternion),d=!1,!0)}}(),this.dispose=function(){n.domElement.removeEventListener("contextmenu",V),n.domElement.removeEventListener("pointerdown",_),n.domElement.removeEventListener("wheel",I),n.domElement.removeEventListener("touchstart",W),n.domElement.removeEventListener("touchend",K),n.domElement.removeEventListener("touchmove",B),n.domElement.ownerDocument.removeEventListener("pointermove",H),n.domElement.ownerDocument.removeEventListener("pointerup",U),null!==n._domElementKeyEvents&&n._domElementKeyEvents.removeEventListener("keydown",X)};var n=this,o={type:"change"},r={type:"start"},a={type:"end"},i={NONE:-1,ROTATE:0,DOLLY:1,PAN:2,TOUCH_ROTATE:3,TOUCH_PAN:4,TOUCH_DOLLY_PAN:5,TOUCH_DOLLY_ROTATE:6},s=i.NONE,c=1e-6,l=new p.$V,u=new p.$V,h=1,m=new p.Pa4,d=!1,f=new p.FM8,b=new p.FM8,v=new p.FM8,g=new p.FM8,y=new p.FM8,w=new p.FM8,E=new p.FM8,O=new p.FM8,P=new p.FM8;function j(){return Math.pow(.95,n.zoomSpeed)}function R(e){u.theta-=e}var x=function(){var e=new p.Pa4;return function(t,n){e.setFromMatrixColumn(n,0),e.multiplyScalar(-t),m.add(e)}}(),N=function(){var e=new p.Pa4;return function(t,o){!0===n.screenSpacePanning?e.setFromMatrixColumn(o,1):(e.setFromMatrixColumn(o,0),e.crossVectors(n.object.up,e)),e.multiplyScalar(t),m.add(e)}}(),T=function(){var e=new p.Pa4;return function(t,o){var r=n.domElement;if(n.object.isPerspectiveCamera){var a=n.object.position;e.copy(a).sub(n.target);var i=e.length();i*=Math.tan(n.object.fov/2*Math.PI/180),x(2*t*i/r.clientHeight,n.object.matrix),N(2*o*i/r.clientHeight,n.object.matrix)}else n.object.isOrthographicCamera?(x(t*(n.object.right-n.object.left)/n.object.zoom/r.clientWidth,n.object.matrix),N(o*(n.object.top-n.object.bottom)/n.object.zoom/r.clientHeight,n.object.matrix)):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - pan disabled."),n.enablePan=!1)}}();function L(e){n.object.isPerspectiveCamera?h/=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom*e)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function M(e){n.object.isPerspectiveCamera?h*=e:n.object.isOrthographicCamera?(n.object.zoom=Math.max(n.minZoom,Math.min(n.maxZoom,n.object.zoom/e)),n.object.updateProjectionMatrix(),d=!0):(console.warn("WARNING: OrbitControls.js encountered an unknown camera type - dolly/zoom disabled."),n.enableZoom=!1)}function A(e){f.set(e.clientX,e.clientY)}function C(e){g.set(e.clientX,e.clientY)}function k(e){b.set(e.clientX,e.clientY),v.subVectors(b,f).multiplyScalar(n.rotateSpeed);var t,o=n.domElement;R(2*Math.PI*v.x/o.clientHeight),t=2*Math.PI*v.y/o.clientHeight,u.phi-=t,f.copy(b),n.update()}function D(e){if(1===e.touches.length)f.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);f.set(t,n)}}function S(e){if(1===e.touches.length)g.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),n=.5*(e.touches[0].pageY+e.touches[1].pageY);g.set(t,n)}}function Z(e){var t=e.touches[0].pageX-e.touches[1].pageX,n=e.touches[0].pageY-e.touches[1].pageY,o=Math.sqrt(t*t+n*n);E.set(0,o)}function Y(e){if(1===e.touches.length)b.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),o=.5*(e.touches[0].pageY+e.touches[1].pageY);b.set(t,o)}v.subVectors(b,f).multiplyScalar(n.rotateSpeed);var r=n.domElement;R(2*Math.PI*v.x/r.clientHeight),f.copy(b)}function z(e){if(1===e.touches.length)y.set(e.touches[0].pageX,e.touches[0].pageY);else{var t=.5*(e.touches[0].pageX+e.touches[1].pageX),o=.5*(e.touches[0].pageY+e.touches[1].pageY);y.set(t,o)}w.subVectors(y,g).multiplyScalar(n.panSpeed),T(w.x,w.y),g.copy(y)}function F(e){var t=e.touches[0].pageX-e.touches[1].pageX,o=e.touches[0].pageY-e.touches[1].pageY,r=Math.sqrt(t*t+o*o);O.set(0,r),P.set(0,Math.pow(O.y/E.y,n.zoomSpeed)),L(P.y),E.copy(O)}function _(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){var t;switch(e.preventDefault(),n.domElement.focus?n.domElement.focus():window.focus(),e.button){case 0:t=n.mouseButtons.LEFT;break;case 1:t=n.mouseButtons.MIDDLE;break;case 2:t=n.mouseButtons.RIGHT;break;default:t=-1}switch(t){case p.RsA.DOLLY:if(!1===n.enableZoom)return;!function(e){E.set(e.clientX,e.clientY)}(e),s=i.DOLLY;break;case p.RsA.ROTATE:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enablePan)return;C(e),s=i.PAN}else{if(!1===n.enableRotate)return;A(e),s=i.ROTATE}break;case p.RsA.PAN:if(e.ctrlKey||e.metaKey||e.shiftKey){if(!1===n.enableRotate)return;A(e),s=i.ROTATE}else{if(!1===n.enablePan)return;C(e),s=i.PAN}break;default:s=i.NONE}s!==i.NONE&&(n.domElement.ownerDocument.addEventListener("pointermove",H),n.domElement.ownerDocument.addEventListener("pointerup",U),n.dispatchEvent(r))}(e)}}function H(e){if(!1!==n.enabled)switch(e.pointerType){case"mouse":case"pen":!function(e){if(!1===n.enabled)return;switch(e.preventDefault(),s){case i.ROTATE:if(!1===n.enableRotate)return;k(e);break;case i.DOLLY:if(!1===n.enableZoom)return;!function(e){O.set(e.clientX,e.clientY),P.subVectors(O,E),P.y>0?L(j()):P.y<0&&M(j()),E.copy(O),n.update()}(e);break;case i.PAN:if(!1===n.enablePan)return;!function(e){y.set(e.clientX,e.clientY),w.subVectors(y,g).multiplyScalar(n.panSpeed),T(w.x,w.y),g.copy(y),n.update()}(e)}}(e)}}function U(e){switch(e.pointerType){case"mouse":case"pen":!function(e){if(n.domElement.ownerDocument.removeEventListener("pointermove",H),n.domElement.ownerDocument.removeEventListener("pointerup",U),!1===n.enabled)return;n.dispatchEvent(a),s=i.NONE}()}}function I(e){!1===n.enabled||!1===n.enableZoom||s!==i.NONE&&s!==i.ROTATE||(e.preventDefault(),n.dispatchEvent(r),function(e){e.deltaY<0?M(j()):e.deltaY>0&&L(j()),n.update()}(e),n.dispatchEvent(a))}function X(e){!1!==n.enabled&&!1!==n.enablePan&&function(e){var t=!1;switch(e.keyCode){case n.keys.UP:T(0,n.keyPanSpeed),t=!0;break;case n.keys.BOTTOM:T(0,-n.keyPanSpeed),t=!0;break;case n.keys.LEFT:T(n.keyPanSpeed,0),t=!0;break;case n.keys.RIGHT:T(-n.keyPanSpeed,0),t=!0}t&&(e.preventDefault(),n.update())}(e)}function W(e){if(!1!==n.enabled){switch(e.touches.length){case 1:switch(n.touches.ONE){case p.QmN.ROTATE:if(!1===n.enableRotate)return;D(e),s=i.TOUCH_ROTATE;break;case p.QmN.PAN:if(!1===n.enablePan)return;S(e),s=i.TOUCH_PAN;break;default:s=i.NONE}break;case 2:switch(n.touches.TWO){case p.QmN.DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&Z(e),n.enablePan&&S(e)}(e),s=i.TOUCH_DOLLY_PAN;break;case p.QmN.DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&Z(e),n.enableRotate&&D(e)}(e),s=i.TOUCH_DOLLY_ROTATE;break;default:s=i.NONE}break;default:s=i.NONE}s!==i.NONE&&n.dispatchEvent(r)}}function B(e){if(!1!==n.enabled)switch(s){case i.TOUCH_ROTATE:if(!1===n.enableRotate)return;Y(e),n.update();break;case i.TOUCH_PAN:if(!1===n.enablePan)return;z(e),n.update();break;case i.TOUCH_DOLLY_PAN:if(!1===n.enableZoom&&!1===n.enablePan)return;!function(e){n.enableZoom&&F(e),n.enablePan&&z(e)}(e),n.update();break;case i.TOUCH_DOLLY_ROTATE:if(!1===n.enableZoom&&!1===n.enableRotate)return;!function(e){n.enableZoom&&F(e),n.enableRotate&&Y(e)}(e),n.update();break;default:s=i.NONE}}function K(e){!1!==n.enabled&&(n.dispatchEvent(a),s=i.NONE)}function V(e){!1!==n.enabled&&e.preventDefault()}n.domElement.addEventListener("contextmenu",V),n.domElement.addEventListener("pointerdown",_),n.domElement.addEventListener("wheel",I),n.domElement.addEventListener("touchstart",W),n.domElement.addEventListener("touchend",K),n.domElement.addEventListener("touchmove",B),this.update()};(b.prototype=Object.create(p.pBf.prototype)).constructor=b;var v=function(e,t){b.call(this,e,t),this.screenSpacePanning=!1,this.mouseButtons.LEFT=p.RsA.PAN,this.mouseButtons.RIGHT=p.RsA.ROTATE,this.touches.ONE=p.QmN.PAN,this.touches.TWO=p.QmN.DOLLY_ROTATE};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function y(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function w(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var n,o=(0,m.Z)(e);if(t){var r=(0,m.Z)(this).constructor;n=Reflect.construct(o,arguments,r)}else n=o.apply(this,arguments);return(0,h.Z)(this,n)}}(v.prototype=Object.create(p.pBf.prototype)).constructor=v;var E=function(e){(0,u.Z)(n,e);var t=w(n);function n(){var e;(0,s.Z)(this,n);for(var o=arguments.length,i=new Array(o),c=0;c<o;c++)i[c]=arguments[c];return e=t.call.apply(t,[this].concat(i)),(0,r.Z)((0,l.Z)(e),"threeMountRef",a.createRef()),(0,r.Z)((0,l.Z)(e),"gltfLoader",new f.E),(0,r.Z)((0,l.Z)(e),"renderer",void 0),(0,r.Z)((0,l.Z)(e),"camera",void 0),(0,r.Z)((0,l.Z)(e),"gltfScene",void 0),(0,r.Z)((0,l.Z)(e),"controls",void 0),(0,r.Z)((0,l.Z)(e),"windowResizeListener",void 0),e}return(0,c.Z)(n,[{key:"componentDidMount",value:function(){var e=this;if(this.threeMountRef.current){this.renderer=new p.CP7({antialias:!0});var t=this.threeMountRef.current.clientWidth,n=this.threeMountRef.current.clientHeight;this.renderer.setSize(t,n,!1),this.renderer.setClearColor(0),this.threeMountRef.current.appendChild(this.renderer.domElement);var o=this;this.windowResizeListener=function(){return o.handleWindowResize()},window.addEventListener("resize",this.windowResizeListener);var r=new p.xsS;this.camera=new p.iKG(t/-20,t/20,n/20,n/-20,.1,1e4),this.controls=new b(this.camera,this.renderer.domElement),this.controls.target.set(0,0,0),this.controls.enableZoom=!1,this.controls.enablePan=!1,this.controls.autorotate=!0;var a=new p.Ox3(16777215,.4);a.position.set(-20,0,50),r.add(a),(a=new p.Ox3(16777215,.4)).position.set(-20,0,-50),r.add(a);var i=new p.Mig(16777215,.7);r.add(i),this.resetCamera();var s=this.renderer,c=this.camera,l=this.controls,u="";this.props.gltf?(u=this.props.gltf,this.controls.enableZoom=!0,this.controls.enablePan=!0,this.controls.autorotate=!1):this.props.url&&(u=this.props.url);var h=new d._;h.setDecoderPath("js/libs/draco/"),this.gltfLoader.setDRACOLoader(h),this.gltfLoader.load(u,(function(t){var n=t.scene;(e.props.forcePhongMaterialForVertexColors||void 0===e.props.forcePhongMaterialForVertexColors)&&function(e){var t=new p.xoR({shininess:200,flatShading:!0});t.vertexColors=!0,e.traverse((function(e){if(e instanceof p.Kj0&&e.isMesh){var n=e;n.material instanceof p.xoR||!n.material.vertexColors||(n.material=t,n.material.needsUpdate=!0)}}))}(n);var o,a=(new p.ZzF).setFromObject(n),i=new p.Pa4;if(a.getCenter(i),n.position.set(-i.x,-i.y,-i.z),e.gltfScene=n,r.add(n),t.animations&&t.animations.length>0){var u=t.animations[0];(o=new p.Xcj(n)).clipAction(u).play()}var h=new p.SUY;!function e(){requestAnimationFrame(e),o&&o.update(h.getDelta()),l.update(),s.render(r,c)}(),e.handleWindowResize()}),void 0,(function(t){e.props.onError&&e.props.onError(),console.error(t)})),this.handleWindowResize()}}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.windowResizeListener),this.threeMountRef&&this.threeMountRef.current&&this.renderer&&this.threeMountRef.current.removeChild(this.renderer.domElement)}},{key:"handleWindowResize",value:function(){if(this.threeMountRef&&this.threeMountRef.current&&this.camera&&this.renderer){var e=.035;if(this.gltfScene){var t=(new p.ZzF).setFromObject(this.gltfScene),n=t.getSize(new p.Pa4).length();t.getCenter(new p.Pa4);e=2.1/n}var o=this.threeMountRef.current.clientWidth,r=this.threeMountRef.current.clientHeight,a=e*Math.min(o,r);this.camera.left=o/-a,this.camera.right=o/a,this.camera.top=r/a,this.camera.bottom=r/-a,this.camera.updateProjectionMatrix(),this.renderer.setSize(o,r,!1)}}},{key:"resetCamera",value:function(){this.camera&&this.controls&&(this.camera.position.setFromSphericalCoords(40,p.M8C.degToRad(45),-p.M8C.degToRad(0)),this.controls.autorotate=!0,this.controls.update())}},{key:"render",value:function(){return(0,o.jsx)("div",{ref:this.threeMountRef,style:y({width:"100%",height:"100%",minHeight:"300px",minWidth:150,maxHeight:300},this.props.style),className:"three-orbit ".concat(this.props.className||"").trim()})}}]),n}(a.Component),O=n(59688),P=n(57836),j=n(56058),R=n(34994),x=n(55371);function N(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function T(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?N(Object(n),!0).forEach((function(t){(0,r.Z)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):N(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var L=function(e){var t=e.uri,n=e.animationUrl,r=e.className,a=e.style,i=e.files,s=i&&i.length>0&&"string"===typeof i[0]?i[0]:n;return(0,P.eo)(s||"",!0).isLoading?(0,o.jsx)(M,{uri:t,className:r,preview:!1,style:T({width:300},a)}):(0,o.jsx)(E,{url:s,className:r,style:a})},M=function(e){var t=e.uri,n=e.className,r=e.preview,s=e.style,c=(0,a.useState)(!1),l=c[0],u=c[1],h=(0,P.eo)(t||"").cachedBlob;return(0,o.jsx)(i.Z,T({src:h,preview:r,wrapperClassName:n,loading:"lazy",wrapperStyle:T({},s),onLoad:function(e){u(!0)},placeholder:(0,o.jsx)(O.g,{})},l?{}:{height:200}))},A=function(e){var t,n=e.className,r=e.style,i=e.files,s=e.uri,c=e.animationURL,l=e.active,u=(0,a.useState)(),h=u[0],m=u[1],p=(0,a.useCallback)((function(e){m(e)}),[m]);(0,a.useEffect)((function(){h&&(h.currentTime=0)}),[l,h]);var d=null===(t=(i||[]).filter((function(e,t,n){return"string"===typeof e&&(n.length>=2?1===t:0===t)})))||void 0===t?void 0:t[0];return d&&d.startsWith("https://watch.videodelivery.net/")?(0,o.jsx)("div",{className:"".concat(n," square"),children:(0,o.jsx)(j.F,{streamRef:function(e){return p(e)},src:d.replace("https://watch.videodelivery.net/",""),loop:!0,height:600,width:600,controls:!1,videoDimensions:{videoHeight:700,videoWidth:400},autoplay:!0,muted:!0})}):(0,o.jsxs)("video",{className:n,playsInline:!0,autoPlay:!0,muted:!0,controls:!0,controlsList:"nodownload",style:r,loop:!0,poster:s,children:[d&&(0,o.jsx)("source",{src:d,type:"video/mp4",style:r}),c&&(0,o.jsx)("source",{src:c,type:"video/mp4",style:r}),null===i||void 0===i?void 0:i.filter((function(e){return"string"!==typeof e})).map((function(e){return(0,o.jsx)("source",{src:e.uri,type:e.type,style:r})}))]})},C=function(e){var t=e.category,n=e.className,r=e.preview,a=e.style,i=e.active,s=e.allowMeshRender,c=e.pubkey,l=e.uri,u=e.animationURL,h=e.files,m=(0,x.l)(c),p=(0,P.d6)(m),d=p.ref,f=p.data;c&&f&&(l=f.image,u=f.animation_url),c&&null!==f&&void 0!==f&&f.properties&&(h=f.properties.files,t=f.properties.category),u=u||"";var b=new URLSearchParams((0,R.C)(u.split("?"))).get("ext");if(s&&("vr"===t||"glb"===b||"gltf"===b))return(0,o.jsx)(L,{uri:l,animationUrl:u,className:n,style:a,files:h});var v="video"===t?(0,o.jsx)(A,{className:n,style:a,files:h,uri:l,animationURL:u,active:i}):(0,o.jsx)(M,{uri:l,className:n,preview:r,style:a});return(0,o.jsx)("div",{ref:d,style:{display:"flex",alignItems:"center",justifyContent:"center"},children:v})}},59688:function(e,t,n){"use strict";n.d(t,{y:function(){return a},g:function(){return i}});var o=n(52322),r=(n(2784),n(77240)),a=function(){return(0,o.jsxs)(r.ZP,{speed:2,width:223,height:400,viewBox:"0 0 250 400",backgroundColor:"#0c0c0c",foregroundColor:"#595959",children:[(0,o.jsx)("rect",{x:"9",y:"0",rx:"14",ry:"14",width:"232",height:"240"}),(0,o.jsx)("circle",{cx:"39",cy:"296",r:"15"}),(0,o.jsx)("rect",{x:"24",y:"251",rx:"0",ry:"6",width:"123",height:"21"}),(0,o.jsx)("rect",{x:"24",y:"322",rx:"6",ry:"6",width:"44",height:"25"})]})},i=function(){return(0,o.jsxs)(r.ZP,{viewBox:"0 0 212 200",height:200,width:212,backgroundColor:"transparent",style:{width:"100%",margin:"auto"},children:[(0,o.jsx)("circle",{cx:"86",cy:"100",r:"8"}),(0,o.jsx)("circle",{cx:"106",cy:"100",r:"8"}),(0,o.jsx)("circle",{cx:"126",cy:"100",r:"8"})]})}},34994:function(e,t,n){"use strict";n.d(t,{C:function(){return o}});var o=function(e){if(!(e.length<=0))return e[e.length-1]}}}]);