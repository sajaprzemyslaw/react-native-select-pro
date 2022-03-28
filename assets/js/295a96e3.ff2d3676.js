"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[600],{3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=p(n),m=o,f=u["".concat(c,".").concat(m)]||u[m]||s[m]||a;return n?r.createElement(f,i(i({ref:t},d),{},{components:n})):r.createElement(f,i({ref:t},d))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=u;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:o,i[1]=l;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},3208:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return c},default:function(){return m},frontMatter:function(){return l},metadata:function(){return p},toc:function(){return s}});var r=n(7462),o=n(3366),a=(n(7294),n(3905)),i=["components"],l={id:"select-modal",title:"SelectModalProvider",sidebar_label:"SelectModalProvider"},c=void 0,p={unversionedId:"api/select-modal",id:"api/select-modal",title:"SelectModalProvider",description:"If you want to use Select component inside:",source:"@site/docs/api/select-modal.md",sourceDirName:"api",slug:"/api/select-modal",permalink:"/react-native-select-pro/docs/api/select-modal",editUrl:"https://github.com/MobileReality/react-native-select-pro/website/docs/api/select-modal.md",tags:[],version:"current",frontMatter:{id:"select-modal",title:"SelectModalProvider",sidebar_label:"SelectModalProvider"},sidebar:"docs",previous:{title:"Accessibility",permalink:"/react-native-select-pro/docs/api/accessibility"},next:{title:"Preview video",permalink:"/react-native-select-pro/docs/examples/video"}},d={},s=[{value:"children",id:"children",level:3},{value:"Example",id:"example",level:4}],u={toc:s};function m(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)("wrapper",(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,"If you want to use ",(0,a.kt)("inlineCode",{parentName:"p"},"Select")," component inside:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"Modal")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"react-native")," / ",(0,a.kt)("inlineCode",{parentName:"li"},"react-native-modal")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"BottomSheet")," from ",(0,a.kt)("inlineCode",{parentName:"li"},"react-native-bottom-sheet"))),(0,a.kt)("p",null,"you need to wrap code inside ",(0,a.kt)("inlineCode",{parentName:"p"},"Modal")," / ",(0,a.kt)("inlineCode",{parentName:"p"},"BottomSheet")," in ",(0,a.kt)("inlineCode",{parentName:"p"},"SelectModalProvider")),(0,a.kt)("h3",{id:"children"},"children"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"children: React.ReactNode;\n")),(0,a.kt)("h4",{id:"example"},"Example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-jsx"},"import React from 'react';\nimport { View, Modal, Text } from 'react-native';\nimport { Select, SelectModalProvider } from '@mobile-reality/react-native-select-pro';\n\nconst SomeComponent = () => {\n  return (\n    <View>\n      <Modal> {/* e.g. `Modal` from `react-native` */}\n        <SelectModalProvider> {/* `SelectModalProvider` wrapping code inside `Modal` */}\n          <Text>Modal</Text>\n          <Select\n            options={[{ value: 'somevalue', label: 'somelabel' }]}\n          />\n        </SelectModalProvider>\n      </Modal>\n    </View>\n  )\n};\n")))}m.isMDXComponent=!0}}]);