"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[206],{4852:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return m}});var o=n(9231);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=o.createContext({}),c=function(e){var t=o.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},s=function(e){var t=c(e.components);return o.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},p=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(n),m=r,b=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return n?o.createElement(b,a(a({ref:t},s),{},{components:n})):o.createElement(b,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=p;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:r,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}p.displayName="MDXCreateElement"},657:function(e,t,n){n.r(t),n.d(t,{contentTitle:function(){return p},default:function(){return f},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return b}});var o=n(5339),r=n(7318),i=n(9231),a=n(4852),l=n(4151),u=JSON.parse('[{"title":"Album example","titleAlign":"center","content":"<p>Something short and leading about the collection below\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don\'t simply skip over it entirely.</p>","buttons":[{"label":"Main call to action","url":"#","type":"primary"},{"label":"Secondary action","url":"#","type":"secondary"}],"backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundXPosition":"center","backgroundYPosition":"center","padding":5,"_name":"hero","backgroundColor":null,"textColor":"--bs-primary","background":"","backgroundMobile":""},{"icons":[{"title":"First title","content":"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p><p><br></p>"},{"title":"Second title","content":"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>"},{"title":"Third title","content":"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>"}],"backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundXPosition":"center","backgroundYPosition":"center","padding":5,"_name":"icons-columns"},{"title":"Pricing","titleAlign":"center","content":"<p>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It\u2019s built with default Bootstrap components and utilities with little customization.</p>","prices":[{"title":"Free","price":"0\u20ac","features":"10 users included\\n2 GB of storage\\nEmail support\\nHelp center access","label":"Sign up for free","url":"#","type":"secondary"},{"title":"Pro","price":"15\u20ac","features":"20 users included\\n10 GB of storage\\nPriority email support\\nHelp center access","label":"Get started","url":"#","type":"primary"},{"title":"Enterprise","price":"29\u20ac","features":"30 users included\\n15 GB of storage\\nPhone and email support\\nHelp center access","label":"Contact us","url":"#","type":"primary"}],"backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundXPosition":"center","backgroundYPosition":"center","padding":5,"_name":"pricing"},{"title":"Lorem ipsum dolor sit amet","titleAlign":"right","content":"<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>","buttons":[{"label":"Call to action","url":"","type":"primary"},{"label":"Call to action","url":"","type":"secondary"}],"backgroundSize":"cover","backgroundRepeat":"no-repeat","backgroundXPosition":"center","backgroundYPosition":"center","padding":3,"_name":"hero","backgroundColor":null}]');n(8113);function c(){var e=(0,i.useState)("hidden"),t=e[0],o=e[1],r=(0,i.useRef)();return(0,i.useEffect)((function(){Promise.all([n.e(487),n.e(221)]).then(n.bind(n,6053)),r.current.addEventListener("veClose",(function(){return o("hidden")}))}),[r.current]),i.createElement(i.Fragment,null,i.createElement("button",{className:"button button--secondary",onClick:function(){return o((function(e){return void 0===e?"hidden":void 0}))}},"Test the editor"),"undefined"!=typeof document&&l.createPortal(i.createElement("div",{style:{zIndex:9999,position:"relative",isolation:"isolate"}},i.createElement("visual-editor",{hidden:t,name:"content",preview:"https://visual-editor.droapp.com",iconsUrl:"/[name].svg",value:JSON.stringify(u),ref:r})),document.body))}var s=["components"],d={sidebar_position:1,id:"intro"},p="Getting started",m={unversionedId:"intro",id:"intro",title:"Getting started",description:"The editor uses custom element",source:"@site/docs/intro.mdx",sourceDirName:".",slug:"/intro",permalink:"/visual-editor/docs/intro",editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/intro.mdx",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,id:"intro"},sidebar:"tutorialSidebar",next:{title:"Text",permalink:"/visual-editor/docs/Fields/Text"}},b=[{value:"Registering your page components",id:"registering-your-page-components",children:[],level:2},{value:"Add the editor on your page",id:"add-the-editor-on-your-page",children:[],level:2},{value:"How the data is formatted ?",id:"how-the-data-is-formatted-",children:[],level:2}],g={toc:b};function f(e){var t=e.components,n=(0,r.Z)(e,s);return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"getting-started"},"Getting started"),(0,a.kt)("p",null,"The editor uses custom element"),(0,a.kt)(c,{mdxType:"EditorDemo"}),(0,a.kt)("h2",{id:"registering-your-page-components"},"Registering your page components"),(0,a.kt)("p",null,"Start by instantiating the editor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { VisualEditor } from 'vvvvvvvv'\n\nlet editor = new VisualEditor()\n")),(0,a.kt)("p",null,"Then register a new page component using the ",(0,a.kt)("inlineCode",{parentName:"p"},"registerComponent")," method that expect 2 parameters"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"A unique identifier for the block (string)"),(0,a.kt)("li",{parentName:"ul"},"An option object object (see ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/Grafikart/VisualEditor/blob/master/src/types.ts#L24"},"EditorComponentDefinition")," for more information)")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"import { HTMLText, Repeater, Text, Row, Select } from 'src/VisualEditor'\n\n// Register a component / block\neditor.registerComponent('hero', {\n  title: 'Hero',\n  category: 'Banner',\n  fields: [\n    new Text('title', {multiline: false}),\n    new HTMLText('content'),\n    new Repeater('buttons', {\n      title: 'Boutons',\n      addLabel: 'Add a new button',\n      fields: [\n        new Row([\n          new Text('label', { label: 'Libell\xe9', default: 'Call to action' }),\n          new Text('url', { label: 'Lien' }),\n          new Select('type', {\n            default: 'primary',\n            label: 'type',\n            options: [\n              { label: 'Primaire', value: 'primary' },\n              { label: 'Secondaire', value: 'secondary' },\n            ],\n          }),\n        ])\n      ],\n    })\n  ],\n})\n")),(0,a.kt)("p",null,"When all your components are registered you can define the custom element using the ",(0,a.kt)("inlineCode",{parentName:"p"},"defineElement")," method."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},"editor.defineElement()\n")),(0,a.kt)("h2",{id:"add-the-editor-on-your-page"},"Add the editor on your page"),(0,a.kt)("p",null,"You now have a custom element ",(0,a.kt)("inlineCode",{parentName:"p"},"visual-editor")," that you can use to display the editor."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<visual-editor\n  hidden\n  name="content"\n  preview="http://localhost:3000/preview"\n  iconsUrl="/assets/editor/[name].svg"\n  value="[]"\n></visual-editor>\n')),(0,a.kt)("p",null,"There are multiple attributes :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"hidden"),", toggle this attribute to show or hide the editor"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"name"),", name for the field (will be passed to an hidden textarea)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"preview"),", endpoint called to render the preview"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"iconsUrl"),", path used to resolve component icons URL (","[name]"," will be replaced by the ID of the component)"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"value")," (optional), will set the default value for the editor (expect a JSON array)")),(0,a.kt)("p",null,"The custom element will create a hidden field that will be used to store the data, no need for additional JavaScript you will receive the data when the form is submitted."),(0,a.kt)("h2",{id:"how-the-data-is-formatted-"},"How the data is formatted ?"),(0,a.kt)("p",null,"The data use a simple structure (to be usable with any framework or technology)"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},' [\n  {\n    "_name": "hero",\n    "<fieldname>": "<value>",\n    "<fieldname>": "<value>",\n    "<fieldname>": "<value>"\n  },\n  {\n    "_name": "hero",\n    "<fieldname>": "<value>",\n    "<fieldname>": "<value>",\n    "<fieldname>": "<value>"\n  }\n]\n')),(0,a.kt)("p",null,"A real world example"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-json"},'[\n  {\n    "title": "Album example",\n    "titleAlign": "center",\n    "content": "<p>Something short and leading about the collection below\u2014its contents, the creator, etc. Make it short and sweet, but not too short so folks don\'t simply skip over it entirely.</p>",\n    "buttons": [\n      {\n        "label": "Main call to action",\n        "url": "#",\n        "type": "primary"\n      },\n      {\n        "label": "Secondary action",\n        "url": "#",\n        "type": "secondary"\n      }\n    ],\n    "backgroundSize": "cover",\n    "backgroundRepeat": "no-repeat",\n    "backgroundXPosition": "center",\n    "backgroundYPosition": "center",\n    "padding": 5,\n    "_name": "hero",\n    "backgroundColor": null,\n    "textColor": "--bs-primary",\n    "background": "",\n    "backgroundMobile": ""\n  },\n  {\n    "icons": [\n      {\n        "title": "Pro",\n        "content": "<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>"\n      },\n      {\n        "title": "Pro",\n        "content": "<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>"\n      },\n      {\n        "title": "Pro",\n        "content": "<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>"\n      }\n    ],\n    "backgroundSize": "cover",\n    "backgroundRepeat": "no-repeat",\n    "backgroundXPosition": "center",\n    "backgroundYPosition": "center",\n    "padding": 5,\n    "_name": "icons-columns"\n  },\n  {\n    "title": "Pricing",\n    "titleAlign": "center",\n    "content": "<p>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It\u2019s built with default Bootstrap components and utilities with little customization.</p>",\n    "prices": [\n      {\n        "title": "Free",\n        "price": "0\u20ac",\n        "features": "10 users included\\n2 GB of storage\\nEmail support\\nHelp center access",\n        "label": "Sign up for free",\n        "url": "#",\n        "type": "secondary"\n      },\n      {\n        "title": "Pro",\n        "price": "15\u20ac",\n        "features": "20 users included\\n10 GB of storage\\nPriority email support\\nHelp center access",\n        "label": "Get started",\n        "url": "#",\n        "type": "primary"\n      },\n      {\n        "title": "Enterprise",\n        "price": "29\u20ac",\n        "features": "30 users included\\n15 GB of storage\\nPhone and email support\\nHelp center access",\n        "label": "Contact us",\n        "url": "#",\n        "type": "primary"\n      }\n    ],\n    "backgroundSize": "cover",\n    "backgroundRepeat": "no-repeat",\n    "backgroundXPosition": "center",\n    "backgroundYPosition": "center",\n    "padding": 5,\n    "_name": "pricing"\n  },\n  {\n    "title": "Lorem ipsum dolor sit amet",\n    "titleAlign": "right",\n    "content": "<p>Minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Lorem ipsum dolor sit amet.</p>",\n    "buttons": [\n      {\n        "label": "Call to action",\n        "url": "",\n        "type": "primary"\n      },\n      {\n        "label": "Call to action",\n        "url": "",\n        "type": "secondary"\n      }\n    ],\n    "backgroundSize": "cover",\n    "backgroundRepeat": "no-repeat",\n    "backgroundXPosition": "center",\n    "backgroundYPosition": "center",\n    "padding": 3,\n    "_name": "hero",\n    "backgroundColor": null\n  }\n]\n')))}f.isMDXComponent=!0}}]);