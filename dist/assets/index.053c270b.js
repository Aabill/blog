import{d as g,r as y,c as J,o as n,a as i,w as S,v as P,b as l,n as p,t as j,i as I,e as v,g as $,q as W,l as Z,f as X,F as x,h as w,p as Y,j as ee,k as h,m as b,Q as te,s as H,u as se,G as B,x as ae,E as R,y as T,L as D,I as M,z as O,A as C,B as z,C as F,D as oe,H as U,J as K,K as ne,M as re,N as ie}from"./vendor.bbc857f8.js";const le=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const a of r)if(a.type==="childList")for(const d of a.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&o(d)}).observe(document,{childList:!0,subtree:!0});function s(r){const a={};return r.integrity&&(a.integrity=r.integrity),r.referrerpolicy&&(a.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?a.credentials="include":r.crossorigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function o(r){if(r.ep)return;r.ep=!0;const a=s(r);fetch(r.href,a)}};le();const de=g({setup(e){return(t,s)=>{const o=y("router-view");return n(),J(o)}}});const ce="AIzaSyAZVK6op-54E0vE2mSdiqhnjMu71CgAnjw",ue="blog-2b8ce.firebaseapp.com",pe="https://blog-2b8ce-default-rtdb.asia-southeast1.firebasedatabase.app",he="blog-2b8ce",me="blog-2b8ce.appspot.com",ge="169210960796",fe="1:169210960796:web:2c3a0067126e1fb875c659",ye="${config.measurementId}";var E={apiKey:ce,authDomain:ue,databaseURL:pe,projectId:he,storageBucket:me,messagingSenderId:ge,appId:fe,measurementId:ye},_e="/loader.svg",f=(e,t)=>{const s=e.__vccOpts||e;for(const[o,r]of t)s[o]=r;return s};const ve=g({props:["caption","url","imgClass","captionClass","textClass"],name:"editorjs-image",data(){return{loading:!0,show:!1}}}),$e=l("img",{src:_e,class:"h-10 w-10"},null,-1),xe=[$e],we=["src","alt"],be=["textContent"];function ke(e,t,s,o,r,a){return n(),i("div",null,[S(l("div",{class:p(["h-40 md:h-64 flex justify-center items-center",e.imgClass])},xe,2),[[P,!e.show]]),S(l("div",null,[l("img",{onLoad:t[0]||(t[0]=d=>e.show=!0),class:p([e.imgClass]),src:e.url,alt:e.caption},null,42,we),l("p",{class:p(e.captionClass)},[l("span",{class:p(e.textClass),textContent:j(e.caption)},null,10,be)],2)],512),[[P,e.show]])])}var V=f(ve,[["render",ke]]);const Ce=g({props:["text","pClass"],name:"editorjs-paragraph"}),Ae=["innerHTML"];function Le(e,t,s,o,r,a){return n(),i("p",{class:p(["text-sm md:text-lg",e.pClass]),innerHTML:e.text},null,10,Ae)}var q=f(Ce,[["render",Le]]);const je=g({components:{editorImage:V,editorParagraph:q},data(){return{blogs:{},nns:{}}},mounted(){this.getPosts("blogs").then(s=>{let o=this.dict_reverse(s);this.blogs=o}),this.getPosts("nns").then(s=>{let o=this.dict_reverse(s);this.nns=o})},methods:{async getPosts(e){const t=I(E),s=v($(t),`${e}`),o=W(s,Z(5));return await X(o).then(a=>{if(a.exists())return console.log(a.val()),a.val();console.log("No data available")}).catch(a=>{console.log(a)})},dict_reverse(e){let t={},s=Object.keys(e).reverse();return t=Object.keys(e).map(function(r,a){let d=s[a];return{[d]:e[d]}}),t}}}),A=e=>(Y("data-v-484b23a6"),e=e(),ee(),e),Ie={class:"max-w-7xl p-2.5 m-auto"},Be=A(()=>l("div",{class:"px-2 py-3"},[l("input",{type:"text",placeholder:"Search",class:"rounded-lg h-10 px-4 py-3 w-full max-w-md text-lg border border-solid border-gray-300"})],-1)),Ee={class:"px-2 py-3 my-1"},Ne=A(()=>l("h1",{class:"text-xl font-bold"},"Latest Blog",-1)),Se={key:0,class:"my-3 text-lg"},Pe=["href"],He=["innerHTML"],Re={class:"md:max-w-lg relative"},Te={key:0},De=["href"],Me={key:1},Oe=A(()=>l("hr",{class:"md:max-w-lg"},null,-1)),ze=A(()=>l("h1",{class:"mt-10 text-xl font-bold"},"Latest Nashville Number System",-1)),Fe={key:0,class:"my-3 text-lg"},Ue=["href","innerHTML"];function Ke(e,t,s,o,r,a){const d=y("editor-image"),k=y("editor-paragraph");return n(),i("div",Ie,[Be,l("div",Ee,[Ne,(n(!0),i(x,null,w(e.blogs,(m,u)=>(n(),i("div",{key:u},[(n(!0),i(x,null,w(m[Object.keys(m)[0]].blocks,(c,L,N)=>(n(),i("div",{class:p(["mx-3 blocks",c.type]),key:N},[c.type=="header"?(n(),i("h1",Se,[l("a",{href:`/read/blogs/${Object.keys(m)[0]}`},[l("span",{class:"hover:underline",innerHTML:c.data.text},null,8,He)],8,Pe)])):h("",!0),l("div",Re,[c.type=="image"?(n(),i("div",Te,[l("a",{href:`/read/blogs/${Object.keys(m)[0]}`},[b(d,{class:"md:max-w-lg",textClass:"bg-black bg-opacity-40 px-1 rounded",captionClass:"italic mt-2 transform -translate-y-10 z-10 text-white text-right pr-3 text-shadow",imgClass:"md:max-w-lg rounded-xl shadow-xl hover:shadow-2xl transform hover:-translate-y-0.5 transition-all",caption:c.data.caption,url:c.data.file.url},null,8,["imgClass","caption","url"])],8,De)])):h("",!0),c.type=="paragraph"?(n(),i("div",Me,[b(k,{class:"absolute bottom-20 text-white px-5",pClass:"excerpt text-shadow pointer-events-none",text:c.data.text},null,8,["text"])])):h("",!0)])],2))),128))]))),128)),Oe,ze,(n(!0),i(x,null,w(e.nns,(m,u,c)=>(n(),i("div",{key:c},[(n(!0),i(x,null,w(m[Object.keys(m)[0]].blocks,(L,N,Q)=>(n(),i("div",{class:"mx-3",key:Q},[L.type=="header"?(n(),i("div",Fe,[l("a",{class:"text-blue-700 underline",href:`/read/nns/${Object.keys(m)[0]}`,innerHTML:L.data.text},null,8,Ue)])):h("",!0)]))),128))]))),128))])])}var Ve=f(je,[["render",Ke],["__scopeId","data-v-484b23a6"]]);const _=I(E),qe=g({data(){return{uid:"",uploadButton:!1,loading:!0,data:{},saveButton:!1,signedIn:!0,failedAction:!1}},components:{QuillEditor:te},async created(){this.fetchData(),console.log("created")},watch:{$route:["fetchData","checkAuth"]},mounted(){},methods:{checkAuth(){const e=H();se(e,t=>{t?(this.uid=t.uid,this.$route.params.id?this.initializeEditorEdit():this.initializeEditorjs()):this.signedIn=!1})},saveArticle(){return window.editor.save().then(e=>e)},firbaseAuthGH(){const e=new B;e.setCustomParameters({allow_signup:"false",login:"Aabill"});const t=H(_);ae(t,e).then(s=>{B.credentialFromResult(s);const o=s.user;this.uid=o.uid,this.$route.params.id?this.initializeEditorEdit():this.initializeEditorjs()}).catch(s=>{s.code,s.message,s.email,B.credentialFromError(s)})},initializeEditorjs(){let e=this.uid;window.editor=new R({holder:"editorjs",tools:{header:{class:T,inlineToolbar:["link"]},list:{class:D,inlineToolbar:!0},image:{class:M,config:{uploader:{async uploadByFile(t){console.log(t),console.log(e);const s=O(_),o=C(s,"images/"+t.name);await z(o,t).then(a=>{console.log("Uploaded a blob or file!"),console.log(a)});const r=await F(C(s,"images/"+t.name)).then(a=>a);return{success:1,file:{url:r}}}}}}},onReady:()=>{this.uploadButton=!0},onChange:()=>{console.log("Now I know that Editor's content changed!")}})},async uploadArticle(){const e=await this.saveArticle(),t=$(_),s=v(t,`${this.$route.params.category}`),o=oe(s);U(o,e).then(()=>{window.location.href=`/read/${this.$route.params.category}/${o.key}`})},async updateArticle(){const e=await this.saveArticle();console.log(e);const t=$(_);U(v(t,`${this.$route.params.category}/${this.$route.params.id}`),e).then(()=>{window.location.href=`/read/${this.$route.params.category}/${this.$route.params.id}`}).catch(s=>{this.failedAction=!0,console.log(s)})},initializeEditorEdit(){let e=this.uid;window.editor=new R({holder:"editorjs",tools:{header:{class:T,inlineToolbar:["link"]},list:{class:D,inlineToolbar:!0},image:{class:M,config:{uploader:{async uploadByFile(t){console.log(t),console.log(e);const s=O(_),o=C(s,"images/"+t.name);await z(o,t).then(a=>{console.log("Uploaded a blob or file!"),console.log(a)});const r=await F(C(s,"images/"+t.name)).then(a=>a);return{success:1,file:{url:r}}}}}}},data:this.data,onReady:()=>{this.saveButton=!0},onChange:()=>{console.log("Now I know that Editor's content changed!")}})},async fetchData(){this.loading=!0;const e=$(_),t=v(e,`${this.$route.params.category}/${this.$route.params.id}`);K(t,s=>{const o=s.val();this.data=o,this.loading=!1,this.checkAuth(),console.log("checkAuth")})}}}),Ge={class:"max-w-6xl m-auto"},Qe={key:0,class:"p-3.5"},Je={class:"text-2xl font my-5"},We={key:0,class:"text-center text-red-500"},Ze=l("hr",null,null,-1),Xe=l("div",{id:"editorjs",class:"my-5"},null,-1),Ye={class:"w-auto mx-auto text-center text-md lg:text-lg"},et={key:1},tt={class:"w-full h-screen flex justify-center items-center"};function st(e,t,s,o,r,a){return n(),i("div",Ge,[e.uid.length>0?(n(),i("div",Qe,[l("h1",Je,j(e.$route.params.id?"Edit":"Create")+" "+j(e.$route.params.category),1),e.failedAction?(n(),i("p",We," Something went wrong. ")):h("",!0),Ze,Xe,l("div",Ye,[e.uploadButton?(n(),i("button",{key:0,class:"max-w-xs bg-blue-500 text-gray-200 py-2 px-5 hover:bg-blue-600",onClick:t[0]||(t[0]=d=>e.uploadArticle())}," Post ")):h("",!0),e.saveButton?(n(),i("button",{key:1,class:"max-w-xs bg-blue-500 text-gray-200 py-2 px-5 hover:bg-blue-600",onClick:t[1]||(t[1]=d=>e.updateArticle())}," Update ")):h("",!0)])])):(n(),i("div",et,[l("div",tt,[e.signedIn?h("",!0):(n(),i("button",{key:0,onClick:t[2]||(t[2]=d=>e.firbaseAuthGH()),class:"w-full max-w-xs text-center p-3.5 bg-gray-600 text-white text-xl border-solid border rounded-lg"}," Sign in "))])]))])}var G=f(qe,[["render",st]]);const at=g({props:["level","text","textClass","pClass"],name:"editorjs-header"}),ot=["innerHTML"];function nt(e,t,s,o,r,a){return n(),i("p",{class:p([{"text-2xl md:text-4xl":e.level==1,"text-1xl md:text-3xl ":e.level==2,"text-lg md:text-2xl":e.level==3,"text-1xl":e.level==4,"text-xl":e.level==5,"text-lg":e.level==6},"font-bold",e.pClass])},[l("span",{innerHTML:e.text,class:p(e.textClass)},null,10,ot)],2)}var rt=f(at,[["render",nt]]);const it=I(E),lt=g({components:{editorHeader:rt,editorImage:V,editorParagraph:q},data(){return{id:this.$route.params.id,blocks:{},error:null,loading:!1}},created(){this.fetchData()},watch:{$route:"fetchData"},methods:{fetchData(){this.loading=!0;const e=$(it),t=v(e,`${this.$route.params.category}/${this.$route.params.id}`);K(t,s=>{const o=s.val();this.blocks=o.blocks,this.loading=!1})}}}),dt=l("hr",null,null,-1),ct={key:1};function ut(e,t,s,o,r,a){const d=y("editor-header"),k=y("editor-image"),m=y("editor-paragraph");return n(),i("div",{class:p([e.$route.params.category=="nns"?"max-w-max mx-auto":"max-w-7xl","m-auto px-4 py-2 md:px-8 md:py-5"])},[(n(!0),i(x,null,w(e.blocks,(u,c)=>(n(),i("div",{key:c},[u.type=="header"?(n(),i("div",{key:0,class:p(["mb-3 mt-3",e.$route.params.category=="nns"?"max-w-max mx-auto":""])},[b(d,{level:u.data.level,text:u.data.text,pClass:"mb-2 mx-5"},null,8,["level","text"]),dt],2)):h("",!0),u.type=="image"?(n(),i("div",ct,[b(k,{caption:u.data.caption,url:u.data.file.url,captionClass:"text-sm md:text-lg transform -translate-y-7 translate-x-3 md:-translate-y-10 md:translate-x-5 bg-white bg-opacity-60 max-w-max px-2 italic rounded"},null,8,["caption","url"])])):h("",!0),u.type=="paragraph"?(n(),i("div",{key:2,class:p(e.$route.params.category=="nns"?"pl-5":"")},[b(m,{text:u.data.text},null,8,["text"])],2)):h("",!0)]))),128))],2)}var pt=f(lt,[["render",ut]]);const ht={name:"PageNotFound"};function mt(e,t,s,o,r,a){return n(),i("h1",null,"PageNotFound")}var gt=f(ht,[["render",mt]]);const ft=ne({history:re(),routes:[{path:"/",name:"Landing",component:Ve},{path:"/post/:category",name:"Post",component:G},{path:"/read/:category/:id",name:"Blog",component:pt},{path:"/edit/:category/:id",name:"Edit",component:G},{path:"/:pathMatch(.*)*",component:gt}]});ie(de).use(ft).mount("#app");