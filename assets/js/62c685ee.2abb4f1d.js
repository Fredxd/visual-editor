"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[371],{5652:function(e,o,t){t.d(o,{n:function(){return a}});var r=t(159),i=t(9231),n=t(1791),l={Text:r.xv,HTMLText:r.Jv,Number:r.Mr,Checkbox:r.XZ,Color:r.Il,ImageUrl:r.ef,Range:r.e6,Select:r.Ph,Alignment:r.v2,TextAlign:r.PH};function a(e){var o=e.type,t=e.args,r=e.defaultValue,a=void 0===r?"":r,s=(0,i.useState)(a),c=s[0],d=s[1],u=l[o](t).render;return i.createElement(n.T,null,u&&i.createElement(u,{value:c,onChange:d,options:t}))}},5326:function(e,o,t){t.r(o),t.d(o,{frontMatter:function(){return s},contentTitle:function(){return c},metadata:function(){return d},toc:function(){return u},default:function(){return m}});var r=t(5339),i=t(7318),n=(t(9231),t(4852)),l=t(5652),a=["components"],s={sidebar_position:6},c="Color",d={unversionedId:"Fields/Color",id:"Fields/Color",title:"Color",description:"Generate a color picker to select a specific color",source:"@site/docs/Fields/Color.mdx",sourceDirName:"Fields",slug:"/Fields/Color",permalink:"/visual-editor/docs/Fields/Color",editUrl:"https://github.com/boxraiser/visual-editor/tree/main/docs/docs/Fields/Color.mdx",tags:[],version:"current",sidebarPosition:6,frontMatter:{sidebar_position:6},sidebar:"tutorialSidebar",previous:{title:"Checkbox",permalink:"/visual-editor/docs/Fields/Checkbox"},next:{title:"ImageURL",permalink:"/visual-editor/docs/Fields/ImageUrl"}},u=[{value:"Options",id:"options",children:[],level:2}],p={toc:u};function m(e){var o=e.components,t=(0,i.Z)(e,a);return(0,n.kt)("wrapper",(0,r.Z)({},p,t,{components:o,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"color"},"Color"),(0,n.kt)("p",null,"Generate a color picker to select a specific color"),(0,n.kt)("h2",{id:"options"},"Options"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-js"},"Color('fieldName', {\n  label: 'Label of the field',           // (optional)\n  help: 'Some additional informations',  // (optional)\n  colors: ['red', '#F00FF0', '--primary']// Available colors for the text (optional)\n})\n")),(0,n.kt)(l.n,{type:"Color",args:{label:"A simple color picker",colors:["red","blue","yellow","green","orange","pink","grey"]},mdxType:"FieldPreview"}))}m.isMDXComponent=!0}}]);