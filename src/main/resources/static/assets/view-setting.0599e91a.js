import{ay as v,_ as C,Z as I,a2 as f,a as x,f as h,u as e,P as M,b as z,e as l,h as n,k as A,J as u,S as D,U as L,p as w}from"./index.f883e59e.js";import{r as R}from"./base.203c5653.js";/* empty css                */import{Z as P,a as J}from"./ZFormItem.75ff04e5.js";/* empty css               */import"./tooltip.f118fcb0.js";import{E as B}from"./popper.c016fa44.js";/* empty css              */import{E as O}from"./switch.5eacd59a.js";import{E as j}from"./radio.7679f15a.js";import{l as N,b as Z}from"./admin-setting.15abbbb6.js";import{c as p}from"./common.cad90977.js";import{E as q}from"./request.df7e735f.js";import{b as g}from"./route-block.9b0645f8.js";import{r as F}from"./BadgeCheckIcon.9af4da9c.js";import{E as H}from"./index.e341ea23.js";import{v as G}from"./directive.88613689.js";import"./index.c92ded65.js";import"./focus-trap.b3dee7bc.js";import"./event.3ec63147.js";import"./validator.922d2bcd.js";import"./event.776e7e11.js";function K(){const{data:m,loading:_,reload:o}=v(N,{formatResult:t=>{let i=t.data;return i.customVideoSuffix||(i.customVideoSuffix=p.constant.fileTypeMap.video.join(",")),i.customImageSuffix||(i.customImageSuffix=p.constant.fileTypeMap.image.join(",")),i.customAudioSuffix||(i.customAudioSuffix=p.constant.fileTypeMap.audio.join(",")),i.customTextSuffix||(i.customTextSuffix=p.constant.fileTypeMap.text.join(",")),i.announcement||(i.announcement=""),i}}),{loading:c,run:V}=v(Z,{manual:!0,onSuccess(){q({message:"\u4FDD\u5B58\u6210\u529F",type:"success"})}});return{data:m,dataLoading:_,reload:o,saveData:()=>{V(m.value)},saveLoading:c}}const y=m=>(D("data-v-13c501c6"),m=m(),L(),m),Q=u(" \u663E\u793A\u4FE1\u606F "),W=u(" \u6B64\u9875\u9762\u663E\u793A\u7F51\u7AD9\u524D\u53F0\u7684\u663E\u793A\u76F8\u5173\u7684\u4FE1\u606F "),X=u("\u5168\u5C4F"),Y=u("\u5C45\u4E2D"),$=u("\u5927"),ee=u("\u4E2D"),oe=u("\u5C0F"),te=u(" \u6839\u76EE\u5F55\u662F\u5426\u663E\u793A\u6240\u6709\u5B58\u50A8\u6E90, \u5982\u679C\u4E3A true, \u5219\u6839\u76EE\u5F55\u663E\u793A\u6240\u6709\u5B58\u50A8\u6E90\u5217\u8868, \u5982\u679C\u4E3A false, \u5219\u4F1A\u81EA\u52A8\u8DF3\u8F6C\u5230\u7B2C\u4E00\u4E2A\u5B58\u50A8\u6E90. "),le=u("\u5355\u51FB\u8FDB\u5165"),ae=u("\u53CC\u51FB\u8FDB\u5165"),ne=u(" \u63A7\u5236\u6587\u4EF6\u548C\u6587\u4EF6\u5939\u7684\u70B9\u51FB\u4E60\u60EF, \u5355\u51FB/\u53CC\u51FB\u6253\u5F00\u6587\u4EF6\u5939\u6216\u9884\u89C8\u6587\u4EF6 "),ie=u(" \u81EA\u5B9A\u4E49\u8BC6\u522B\u4E3A\u89C6\u9891\u683C\u5F0F\u7684\u6587\u4EF6\u540E\u7F00\uFF0C\u591A\u4E2A\u7528\u9017\u53F7\u5206\u5F00\uFF0C\u5982 'mp4,avi,mkv', \u5728\u6B64\u5217\u8868\u4E2D\u7684\u5C06\u8C03\u7528\u64AD\u653E\u5668\u6253\u5F00\uFF08\u80FD\u5426\u64AD\u653E\u8981\u53D6\u51B3\u4E8E\u6D4F\u89C8\u5668\u662F\u5426\u652F\u6301\uFF0C\u73B0\u4EE3\u6D4F\u89C8\u5668\u4E00\u822C\u53EA\u652F\u6301\u5C01\u88C5\u683C\u5F0F\u4E3A h.264 (mp4) \u7684\u7F16\u7801\u683C\u5F0F\uFF09 "),ue=u(" \u5728\u6587\u4EF6\u5217\u8868\u4E0B\uFF0C\u663E\u793A\u5F53\u524D\u6587\u4EF6\u5939\u7684\u76EE\u5F55\u6587\u6863 "),se=y(()=>w("i",{class:"el-icon-info zfile-info-tooltip"},null,-1)),de=u(" \u7F51\u7AD9\u9876\u90E8\uFF0C\u663E\u793A\u516C\u544A\u5185\u5BB9\uFF0C\u652F\u6301 HTML \u8BED\u6CD5 "),me=y(()=>w("i",{class:"el-icon-info zfile-info-tooltip"},null,-1)),re=u(" \u652F\u6301 Markdown \u8BED\u6CD5, \u5DE6\u53F3\u5206\u680F, \u6240\u89C1\u5373\u6240\u5F97, \u53EF\u4EE5\u4F7F\u7528 HTML \u8BED\u6CD5 "),fe=u(" \u81EA\u5B9A\u4E49 CSS \u5185\u5BB9, \u65E0\u987B\u5199 <style></style> \u6807\u7B7E "),pe=u(" \u81EA\u5B9A\u4E49 JS \u811A\u672C, \u65E0\u987B\u5199 <script><\/script> \u6807\u7B7E "),_e=u("\u4FDD\u5B58\u8BBE\u7F6E"),E={__name:"view-setting",setup(m){const _=I(()=>new Promise((S,t)=>{(async function(){try{const i=await f(()=>import("./base-editor.d01b2b39.js").then(function(d){return d.b}),["assets/base-editor.d01b2b39.js","assets/index.f883e59e.js","assets/index.26bc38fe.css","assets/vue.runtime.esm-bundler.a4c1ef1f.js"]);await f(()=>Promise.resolve({}),["assets/base-editor.59951ec0.css"]),await f(()=>Promise.resolve({}),["assets/vuepress.5dbd54dc.css"]);const s=await f(()=>import("./vuepress.f4c182f5.js").then(function(d){return d.v}),["assets/vuepress.f4c182f5.js","assets/index.f883e59e.js","assets/index.26bc38fe.css"]),r=await f(()=>import("./prism.905911bc.js").then(function(d){return d.p}),["assets/prism.905911bc.js","assets/index.f883e59e.js","assets/index.26bc38fe.css"]);i.use(s,{Prism:r}),S(i)}catch(i){t(i)}})()})),{data:o,saveData:c,saveLoading:V}=K();return(S,t)=>{const i=j,s=P,r=O,d=H,b=B,T=R,U=J,k=G;return x(),h("div",null,[e(o)?M((x(),z(U,{key:0,model:e(o),"element-loading-text":"\u4FDD\u5B58\u4E2D..."},{"form-title":l(()=>[Q]),"form-sub-title":l(()=>[W]),footer:l(()=>[n(T,{type:"primary",size:"default",icon:e(F),onClick:e(c)},{default:l(()=>[_e]),_:1},8,["icon","onClick"])]),default:l(()=>[n(s,{label:"\u9875\u9762\u5E03\u5C40"},{default:l(()=>[n(i,{modelValue:e(o).layout,"onUpdate:modelValue":t[0]||(t[0]=a=>e(o).layout=a),label:"full"},{default:l(()=>[X]),_:1},8,["modelValue"]),n(i,{modelValue:e(o).layout,"onUpdate:modelValue":t[1]||(t[1]=a=>e(o).layout=a),label:"center"},{default:l(()=>[Y]),_:1},8,["modelValue"])]),_:1}),n(s,{label:"\u5217\u8868\u5C3A\u5BF8"},{default:l(()=>[n(i,{modelValue:e(o).tableSize,"onUpdate:modelValue":t[2]||(t[2]=a=>e(o).tableSize=a),label:"large"},{default:l(()=>[$]),_:1},8,["modelValue"]),n(i,{modelValue:e(o).tableSize,"onUpdate:modelValue":t[3]||(t[3]=a=>e(o).tableSize=a),label:"default"},{default:l(()=>[ee]),_:1},8,["modelValue"]),n(i,{modelValue:e(o).tableSize,"onUpdate:modelValue":t[4]||(t[4]=a=>e(o).tableSize=a),label:"small"},{default:l(()=>[oe]),_:1},8,["modelValue"])]),_:1}),n(s,{label:"\u6839\u76EE\u5F55\u663E\u793A\u6240\u6709\u5B58\u50A8\u6E90"},{tips:l(()=>[te]),default:l(()=>[n(r,{modelValue:e(o).rootShowStorage,"onUpdate:modelValue":t[5]||(t[5]=a=>e(o).rootShowStorage=a)},null,8,["modelValue"])]),_:1}),n(s,{label:"\u6587\u4EF6\u64CD\u4F5C\u4E60\u60EF"},{tips:l(()=>[ne]),default:l(()=>[n(i,{modelValue:e(o).fileClickMode,"onUpdate:modelValue":t[6]||(t[6]=a=>e(o).fileClickMode=a),label:"click"},{default:l(()=>[le]),_:1},8,["modelValue"]),n(i,{modelValue:e(o).fileClickMode,"onUpdate:modelValue":t[7]||(t[7]=a=>e(o).fileClickMode=a),label:"dbclick"},{default:l(()=>[ae]),_:1},8,["modelValue"])]),_:1}),n(s,{label:"\u89C6\u9891\u6587\u4EF6\u540E\u7F00"},{tips:l(()=>[ie]),default:l(()=>[n(d,{modelValue:e(o).customVideoSuffix,"onUpdate:modelValue":t[8]||(t[8]=a=>e(o).customVideoSuffix=a)},null,8,["modelValue"])]),_:1}),n(s,{label:"\u56FE\u50CF\u6587\u4EF6\u540E\u7F00"},{default:l(()=>[n(d,{modelValue:e(o).customImageSuffix,"onUpdate:modelValue":t[9]||(t[9]=a=>e(o).customImageSuffix=a)},null,8,["modelValue"])]),_:1}),n(s,{label:"\u97F3\u9891\u6587\u4EF6\u540E\u7F00"},{default:l(()=>[n(d,{modelValue:e(o).customAudioSuffix,"onUpdate:modelValue":t[10]||(t[10]=a=>e(o).customAudioSuffix=a)},null,8,["modelValue"])]),_:1}),n(s,{label:"\u6587\u672C\u6587\u4EF6\u540E\u7F00"},{default:l(()=>[n(d,{modelValue:e(o).customTextSuffix,"onUpdate:modelValue":t[11]||(t[11]=a=>e(o).customTextSuffix=a)},null,8,["modelValue"])]),_:1}),n(s,{label:"\u663E\u793A\u6587\u6863\u533A"},{default:l(()=>[n(r,{modelValue:e(o).showDocument,"onUpdate:modelValue":t[12]||(t[12]=a=>e(o).showDocument=a)},null,8,["modelValue"]),n(b,{placement:"right"},{content:l(()=>[ue]),default:l(()=>[se]),_:1})]),_:1}),n(s,{label:"\u663E\u793A\u516C\u544A"},{default:l(()=>[n(r,{modelValue:e(o).showAnnouncement,"onUpdate:modelValue":t[13]||(t[13]=a=>e(o).showAnnouncement=a)},null,8,["modelValue"]),n(b,{placement:"right"},{content:l(()=>[de]),default:l(()=>[me]),_:1})]),_:1}),n(s,{label:"\u516C\u544A\u5185\u5BB9"},{tips:l(()=>[re]),default:l(()=>[n(e(_),{modelValue:e(o).announcement,"onUpdate:modelValue":t[14]||(t[14]=a=>e(o).announcement=a),height:"400px"},null,8,["modelValue"])]),_:1}),n(s,{label:"\u81EA\u5B9A\u4E49 CSS"},{tips:l(()=>[fe]),default:l(()=>[n(d,{type:"textarea",rows:3,placeholder:"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49 CSS \u5185\u5BB9",modelValue:e(o).customCss,"onUpdate:modelValue":t[15]||(t[15]=a=>e(o).customCss=a)},null,8,["modelValue"])]),_:1}),n(s,{label:"\u81EA\u5B9A\u4E49 JS"},{tips:l(()=>[pe]),default:l(()=>[n(d,{type:"textarea",rows:3,placeholder:"\u8BF7\u8F93\u5165\u81EA\u5B9A\u4E49 JS \u5185\u5BB9",modelValue:e(o).customJs,"onUpdate:modelValue":t[16]||(t[16]=a=>e(o).customJs=a)},null,8,["modelValue"])]),_:1})]),_:1},8,["model"])),[[k,e(V)]]):A("",!0)])}}};typeof g=="function"&&g(E);var Pe=C(E,[["__scopeId","data-v-13c501c6"]]);export{Pe as default};
