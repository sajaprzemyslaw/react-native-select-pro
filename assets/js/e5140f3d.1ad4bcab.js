"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[862],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},u=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=p(r),m=o,d=f["".concat(i,".").concat(m)]||f[m]||s[m]||a;return r?n.createElement(d,l(l({ref:t},u),{},{components:r})):n.createElement(d,l({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=f;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:o,l[1]=c;for(var p=2;p<a;p++)l[p]=r[p];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},4365:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return c},contentTitle:function(){return i},metadata:function(){return p},toc:function(){return u},default:function(){return f}});var n=r(7462),o=r(3366),a=(r(7294),r(3905)),l=["components"],c={id:"repo-clone",title:"Clone repo",sidebar_label:"Clone example repo"},i=void 0,p={unversionedId:"examples/repo-clone",id:"examples/repo-clone",title:"Clone repo",description:"Clone this repo https",source:"@site/docs/examples/repo-clone.md",sourceDirName:"examples",slug:"/examples/repo-clone",permalink:"/react-native-select-pro/docs/examples/repo-clone",editUrl:"https://github.com/MobileReality/react-native-select-pro/website/docs/examples/repo-clone.md",tags:[],version:"current",frontMatter:{id:"repo-clone",title:"Clone repo",sidebar_label:"Clone example repo"},sidebar:"docs",previous:{title:"Preview video",permalink:"/react-native-select-pro/docs/examples/video"}},u=[],s={toc:u};function f(e){var t=e.components,r=(0,o.Z)(e,l);return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"Clone this repo ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/MobileReality/react-native-select-pro"},"https://github.com/MobileReality/react-native-select-pro")," and next:"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"cd example\nyarn install\nyarn android #run example app for Android\nyarn ios #run example app for iOS\n")))}f.isMDXComponent=!0}}]);