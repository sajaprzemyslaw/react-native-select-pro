"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[477],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},c=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),d=p(n),m=a,f=d["".concat(s,".").concat(m)]||d[m]||u[m]||l;return n?r.createElement(f,o(o({ref:t},c),{},{components:n})):r.createElement(f,o({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},8691:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return s},default:function(){return m},frontMatter:function(){return i},metadata:function(){return p},toc:function(){return u}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],i={id:"common",title:"Common features props",sidebar_label:"Common features"},s=void 0,p={unversionedId:"api/common",id:"api/common",title:"Common features props",description:"animated",source:"@site/docs/api/common.md",sourceDirName:"api",slug:"/api/common",permalink:"/react-native-select-pro/docs/api/common",draft:!1,editUrl:"https://github.com/MobileReality/react-native-select-pro/website/docs/api/common.md",tags:[],version:"current",frontMatter:{id:"common",title:"Common features props",sidebar_label:"Common features"},sidebar:"docs",previous:{title:"Required",permalink:"/react-native-select-pro/docs/api/required"},next:{title:"Callbacks",permalink:"/react-native-select-pro/docs/api/callbacks"}},c={},u=[{value:"animated",id:"animated",level:3},{value:"animationDuration",id:"animationduration",level:3},{value:"clearable",id:"clearable",level:3},{value:"closeDropdownOnSelect",id:"closedropdownonselect",level:3},{value:"defaultOption",id:"defaultoption",level:3},{value:"disabled",id:"disabled",level:3},{value:"flatListProps",id:"flatlistprops",level:3},{value:"hideSelectControlArrow",id:"hideselectcontrolarrow",level:3},{value:"multiSelection",id:"multiselection",level:3},{value:"noOptionsText",id:"nooptionstext",level:3},{value:"placeholderText",id:"placeholdertext",level:3},{value:"scrollToSelectedOption",id:"scrolltoselectedoption",level:3},{value:"searchable",id:"searchable",level:3},{value:"searchPattern",id:"searchpattern",level:3}],d={toc:u};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h3",{id:"animated"},"animated"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"animated?: boolean;\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," toggling the select is animated"),(0,l.kt)("h3",{id:"animationduration"},"animationDuration"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"animationDuration?: number;\n")),(0,l.kt)("p",null,"Animation duration in ms"),(0,l.kt)("h3",{id:"clearable"},"clearable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"clearable?: boolean\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," enables a clear button to remove selected option"),(0,l.kt)("h3",{id:"closedropdownonselect"},"closeDropdownOnSelect"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"closeDropdownOnSelect?: boolean;\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," close a dropdown after selected option"),(0,l.kt)("h3",{id:"defaultoption"},"defaultOption"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"defaultOption?: OptionType;\n")),(0,l.kt)("p",null,"Set a default option"),(0,l.kt)("h3",{id:"disabled"},"disabled"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"disabled?: boolean\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," disable a select control"),(0,l.kt)("h3",{id:"flatlistprops"},"flatListProps"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"flatListProps?: Omit<FlatListProps<OptionType>, 'data' | 'renderItem' | 'ListEmptyComponent'>;\n")),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"FlatListProps")," imported from ",(0,l.kt)("inlineCode",{parentName:"p"},"react-native")),(0,l.kt)("h3",{id:"hideselectcontrolarrow"},"hideSelectControlArrow"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"hideSelectControlArrow?: boolean;\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," hide select control arrow"),(0,l.kt)("h3",{id:"multiselection"},"multiSelection"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"multiSelection?: boolean;\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," let user select multiple options in a select, working also with searchable"),(0,l.kt)("h3",{id:"nooptionstext"},"noOptionsText"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"noOptionsText?: string;\n")),(0,l.kt)("p",null,"No options text"),(0,l.kt)("h3",{id:"placeholdertext"},"placeholderText"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"placeholderText?: string;\n")),(0,l.kt)("p",null,"Placeholder text"),(0,l.kt)("h3",{id:"scrolltoselectedoption"},"scrollToSelectedOption"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"scrollToSelectedOption?: boolean;\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," options list is scrolled to the selected option"),(0,l.kt)("h3",{id:"searchable"},"searchable"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"searchable?: boolean;\n")),(0,l.kt)("p",null,"If ",(0,l.kt)("inlineCode",{parentName:"p"},"true")," let user search in a select options by typing in select"),(0,l.kt)("h3",{id:"searchpattern"},"searchPattern"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript",metastring:"jsx",jsx:!0},"searchPattern?: (payload: string) => string;\n")),(0,l.kt)("p",null,"Regex definition for searching options"))}m.isMDXComponent=!0}}]);