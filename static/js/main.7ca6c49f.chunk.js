(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],{22:function(e,t,n){e.exports=n(29)},29:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),c=n(16),l=n.n(c),a=n(10),i=n(7),d=n(13),b=n(2),u=n(1),s=n(19),f=n.n(s),p=function(){return Object(u.d)(u.a,{styles:Object(u.c)(f.a,';body{font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji";};label:GlobalStyle;')})},j=n(12);var g=Object(o.forwardRef)((function(e,t){return Object(u.d)(O,Object(j.a)({ref:t},e))})),O=Object(b.a)("input",{target:"emhgfk10",label:"StyledInput"})({name:"ci7d7r",styles:"font-size:16px;line-height:24px;padding:8px 14px;border:1px solid #d9d9d9;outline:none;border-radius:0;&:hover{border-color:#bfbfbf;}&:focus{border-color:#1890ff;}"});var h=Object(o.forwardRef)((function(e,t){return Object(u.d)(m,Object(j.a)({ref:t},e))})),m=Object(b.a)("button",{target:"e4fjm680",label:"StyledButton"})({name:"w4p3rt",styles:"cursor:pointer;font-size:16px;line-height:24px;padding:8px 14px;box-sizing:border-box;color:white;border:1px solid #096dd9;background-color:#096dd9;border-radius:0;outline:none;&:hover{border-color:#1890ff;background-color:#1890ff;}&:active{border-color:#0050b3;background-color:#0050b3;}"});var x=Object(o.memo)((function(e){var t=e.onAdd,n=Object(o.useRef)(null),r=Object(o.useCallback)((function(){"function"===typeof t&&n.current&&(t(n.current.value),n.current.value="")}),[t]),c=Object(o.useCallback)((function(e){"Enter"===e.key&&r()}),[r]),l=Object(o.useCallback)((function(){r()}),[r]);return Object(u.d)(v,null,Object(u.d)(y,{ref:n,onKeyPress:c,placeholder:"What needs to be done?"}),Object(u.d)(h,{onClick:l},"Add"))})),v=Object(b.a)("div",{target:"ex21b4a0",label:"StyledBlock"})({name:"1kukc4r",styles:"display:flex;margin-bottom:16px;"}),y=Object(b.a)(g,{target:"ex21b4a1",label:"TodoTextInput"})({name:"14d5zh9",styles:"flex:1 1 0;"}),k=n(30),w=n(31),S=n(32);var C=Object(o.memo)((function(e){var t=e.id,n=e.text,r=e.checked,c=e.onToggle,l=e.onRemove,a=Object(o.useMemo)((function(){return Object(u.d)(z,{title:n,checked:r},n)}),[n,r]),i=Object(o.useMemo)((function(){return Object(u.d)(B,{onClick:function(e){e.stopPropagation(),l(t)}},Object(u.d)(k.a,null))}),[l,t]);return Object(u.d)(A,{onClick:function(){return c(t)}},r?Object(u.d)(w.a,{color:"#52c41a"}):Object(u.d)(S.a,{color:"#d9d9d9"}),a,i)})),A=Object(b.a)("li",{target:"e13pw7nf0",label:"StyledBlock"})({name:"17ko5p",styles:"padding:16px;box-sizing:border-box;background-color:#fafafa;display:inline-flex;align-items:center;width:100%;cursor:pointer;"}),z=Object(b.a)("span",{target:"e13pw7nf1",label:"StyledText"})("flex:1 1 0;white-space:nowrap;font-size:16px;line-height:24px;margin-left:12px;text-decoration:",(function(e){return e.checked?"line-through":"none"}),";color:",(function(e){return e.checked?"rgba(0,0,0,0.25)":"rgba(0,0,0,0.85)"}),";overflow:hidden;text-overflow:ellipsis;"),B=Object(b.a)("button",{target:"e13pw7nf2",label:"StyledButton"})({name:"1mdn6fy",styles:"padding:4px;box-sizing:border-box;width:32px;height:32px;border:0;outline:none;cursor:pointer;background-color:transparent;&:hover{background-color:#f5f5f5;}&:active{background-color:#f0f0f0;}"}),I=n(14);var R=function(e){var t=e.items,n=e.onToggle,o=e.onRemove,r=Object(I.b)(t,(function(e){return e.id}),{from:{height:"0px",opacity:0},enter:{height:"64px",opacity:1},leave:{height:"0px",opacity:0},config:{mass:5,tension:500,friction:100}});return Object(u.d)(T,null,r.map((function(e){var t=e.item,r=e.props,c=e.key;return Object(u.d)(I.a.div,{key:c,style:Object(a.a)({},r)},Object(u.d)(C,{key:t.id,id:t.id,text:t.text,checked:t.checked,onToggle:n,onRemove:o}))})))},T=Object(b.a)("div",{target:"e1x4f3v10",label:"StyledBlock"})({name:"14g8sjz",styles:"margin:0;padding:0;& > div{overflow:hidden;border-bottom:1px solid #d9d9d9;}"}),W=n(20),M=n(33);var D,E=function(e){var t=e.children,n=Object(W.a)(e,["children"]);return Object(u.d)(N,null,Object(u.d)(U,n,t),Object(u.d)(J,null,Object(u.d)(P,{size:20})))},F={name:"1d26z0r-StyledSelectWrapper",styles:"display:inline-flex;user-select:none;width:auto;position:relative;border:1px solid #d9d9d9;outline:none;border-radius:0;&:hover{border-color:#bfbfbf;}&:focus-within{border-color:#1890ff;};label:StyledSelectWrapper;"},N=Object(b.a)("div",{target:"e1rn9w3v0",label:"StyledSelectWrapper"})((function(){return F}),""),U=Object(b.a)("select",{target:"e1rn9w3v1",label:"StyledSelect"})({name:"g1qvsw",styles:"appearance:none;border:none;outline:none;font-size:16px;line-height:24px;padding:8px 36px 8px 14px;width:100%;"}),J=Object(b.a)("div",{target:"e1rn9w3v2",label:"StyledIconWrapper"})({name:"107r9lo",styles:"top:0;width:36px;height:100%;display:flex;justify-content:center;align-items:center;position:absolute;right:0;pointer-events:none;"}),P=Object(b.a)(M.a,{target:"e1rn9w3v3",label:"StyledChevronDown"})({name:"8ngrpz",styles:"color:#bfbfbf;"});!function(e){e.All="all",e.Active="active",e.Done="done"}(D||(D={}));var q=function(){var e=Object(o.useState)(0),t=Object(d.a)(e,2),n=t[0],c=t[1],l=Object(o.useState)(D.All),b=Object(d.a)(l,2),s=b[0],f=b[1],j=Object(o.useState)([{id:-3,text:"Buy the fresh milk.",checked:!1},{id:-2,text:"Bake a cake.",checked:!1},{id:-1,text:"Invite a friends.",checked:!1}]),g=Object(d.a)(j,2),O=g[0],h=g[1],m=Object(o.useMemo)((function(){switch(s){case D.Active:return O.filter((function(e){return!e.checked}));case D.Done:return O.filter((function(e){return e.checked}));default:return O}}),[s,O]),v=Object(o.useCallback)((function(e){""!==e.trim()&&(h((function(t){return t.concat({id:n,text:e,checked:!1})})),c((function(e){return e+1})))}),[n]),y=Object(o.useCallback)((function(e){h((function(t){var n=t.findIndex((function(t){return t.id===e})),o=Object(i.a)(t);if(n>-1){var r=t[n];o[n]=Object(a.a)({},r,{checked:!r.checked})}return o}))}),[]),k=Object(o.useCallback)((function(e){h((function(t){return t.filter((function(t){return t.id!==e}))}))}),[]),w=Object(o.useCallback)((function(e){f(e.target.value)}),[]),S=Object(o.useMemo)((function(){return Object(u.d)(L,null,Object(u.d)(E,{onChange:w},Object(u.d)("option",{value:D.All},"All"),Object(u.d)("option",{value:D.Active},"Active"),Object(u.d)("option",{value:D.Done},"Done")))}),[w]);return Object(u.d)(r.a.Fragment,null,Object(u.d)(p,null),Object(u.d)(G,null,Object(u.d)(H,null,Object(u.d)(K,null,Object(u.d)("h1",null,"React Todo App"),Object(u.d)(x,{onAdd:v}),S,Object(u.d)(R,{items:m,onToggle:y,onRemove:k})))))},G=Object(b.a)("div",{target:"e1db1otb0",label:"StyledAppContainer"})({name:"lls7ng",styles:"display:flex;flex-direction:column;position:absolute;width:100%;min-height:100vh;"}),H=Object(b.a)("div",{target:"e1db1otb1",label:"StyledLayoutContainer"})({name:"m3hk0r",styles:"padding:16px;box-sizing:border-box;flex:1 1;display:flex;flex-direction:column;align-items:center;"}),K=Object(b.a)("div",{target:"e1db1otb2",label:"StyledTodoContainer"})({name:"69ddzo",styles:"max-width:560px;width:100%;"}),L=Object(b.a)("div",{target:"e1db1otb3",label:"StyledFilterContainer"})({name:"19idom",styles:"margin-bottom:8px;"});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(Object(u.d)(r.a.StrictMode,null,Object(u.d)(q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.7ca6c49f.chunk.js.map