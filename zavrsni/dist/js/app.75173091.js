(function(e){function t(t){for(var n,o,l=t[0],u=t[1],s=t[2],b=0,d=[];b<l.length;b++)o=l[b],Object.prototype.hasOwnProperty.call(c,o)&&c[o]&&d.push(c[o][0]),c[o]=0;for(n in u)Object.prototype.hasOwnProperty.call(u,n)&&(e[n]=u[n]);i&&i(t);while(d.length)d.shift()();return a.push.apply(a,s||[]),r()}function r(){for(var e,t=0;t<a.length;t++){for(var r=a[t],n=!0,l=1;l<r.length;l++){var u=r[l];0!==c[u]&&(n=!1)}n&&(a.splice(t--,1),e=o(o.s=r[0]))}return e}var n={},c={app:0},a=[];function o(t){if(n[t])return n[t].exports;var r=n[t]={i:t,l:!1,exports:{}};return e[t].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=n,o.d=function(e,t,r){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(o.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(r,n,function(t){return e[t]}.bind(null,n));return r},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var s=0;s<l.length;s++)t(l[s]);var i=u;a.push([0,"chunk-vendors"]),r()})({0:function(e,t,r){e.exports=r("56d7")},"0519":function(e,t,r){"use strict";r("d5fc")},"348a":function(e,t,r){"use strict";r("f770")},"38e9":function(e,t,r){e.exports=r.p+"img/dumbbell-light.ef471ab1.png"},"53c9":function(e,t,r){},"56d7":function(e,t,r){"use strict";r.r(t);r("e260"),r("e6cf"),r("cca6"),r("a79d");var n=r("7a23");function c(e,t,r,c,a,o){var l=Object(n["C"])("Sidebar"),u=Object(n["C"])("router-view");return c.appReady?(Object(n["u"])(),Object(n["g"])("div",{key:0,style:Object(n["q"])({"margin-left":c.sidebarWidth})},[Object(n["j"])(l),Object(n["j"])(u)],4)):Object(n["f"])("",!0)}var a=r("38e9"),o=r.n(a),l=function(e){return Object(n["x"])("data-v-083aa38f"),e=e(),Object(n["v"])(),e},u={key:0},s=l((function(){return Object(n["h"])("div",null,"AJ",-1)})),i=[s],b={key:1},d=l((function(){return Object(n["h"])("img",{class:"w-14",src:o.a},null,-1)})),p=l((function(){return Object(n["h"])("h1",{class:"text-lg"},"AJ Training Log",-1)})),f=[d,p],g=Object(n["i"])("Home"),j=Object(n["i"])("Create"),O=Object(n["i"])("Analytics"),h=Object(n["i"])("Friends"),x=Object(n["i"])("Images"),m=Object(n["i"])("Login"),v=Object(n["i"])("Register"),y=Object(n["i"])("Logout"),w=l((function(){return Object(n["h"])("i",{class:"fa-solid fa-angles-left"},null,-1)})),k=[w];function E(e,t,r,c,a,o){var l=Object(n["C"])("SidebarLink");return Object(n["u"])(),Object(n["g"])("div",{class:Object(n["p"])(["sidebar",{collapsed:a.sidebarCollapsed}]),id:"sidebarino"},[Object(n["h"])("h1",null,[c.collapsed?(Object(n["u"])(),Object(n["g"])("span",u,i)):(Object(n["u"])(),Object(n["g"])("span",b,f))]),Object(n["j"])(l,{class:"gap-x-5 cursor-pointer",to:"/",icon:"fas fa-home"},{default:Object(n["J"])((function(){return[g]})),_:1}),c.user?(Object(n["u"])(),Object(n["e"])(l,{key:0,class:"gap-x-5 cursor-pointer",to:{name:"Create"},icon:"fas fa-square-plus"},{default:Object(n["J"])((function(){return[j]})),_:1})):Object(n["f"])("",!0),c.user?(Object(n["u"])(),Object(n["e"])(l,{key:1,class:"gap-x-5 cursor-pointer",to:"/analytics",icon:"fas fa-chart-bar"},{default:Object(n["J"])((function(){return[O]})),_:1})):Object(n["f"])("",!0),c.user?(Object(n["u"])(),Object(n["e"])(l,{key:2,class:"gap-x-5 cursor-pointer",to:"/friends",icon:"fas fa-users"},{default:Object(n["J"])((function(){return[h]})),_:1})):Object(n["f"])("",!0),c.user?(Object(n["u"])(),Object(n["e"])(l,{key:3,class:"gap-x-5 cursor-pointer",to:"/image",icon:"fas fa-image"},{default:Object(n["J"])((function(){return[x]})),_:1})):Object(n["f"])("",!0),c.user?Object(n["f"])("",!0):(Object(n["u"])(),Object(n["e"])(l,{key:4,class:"gap-x-5 cursor-pointer",to:{name:"Login"},icon:"fas fa-sign-in"},{default:Object(n["J"])((function(){return[m]})),_:1})),c.user?Object(n["f"])("",!0):(Object(n["u"])(),Object(n["e"])(l,{key:5,class:"gap-x-5 cursor-pointer",to:{name:"Register"},icon:"fas fa-user-plus"},{default:Object(n["J"])((function(){return[v]})),_:1})),c.user?(Object(n["u"])(),Object(n["e"])(l,{key:6,onClick:c.logout,class:"gap-x-5 cursor-pointer",to:{name:"Login"},icon:"fas fa-right-from-bracket"},{default:Object(n["J"])((function(){return[y]})),_:1},8,["onClick"])):Object(n["f"])("",!0),Object(n["h"])("span",{class:Object(n["p"])(["collapse-icon",{"rotate-180":c.collapsed}]),id:"sidebar-collapser",onClick:t[0]||(t[0]=function(){return o.toggleSidebarino&&o.toggleSidebarino.apply(o,arguments)})},k,2)],2)}var V=r("1da1"),U=(r("96cf"),Object(n["z"])(!1)),C=function(){return U.value=!U.value},T=180,R=38,M=Object(n["c"])((function(){return"".concat(U.value?R:T,"px")})),H={key:0};function S(e,t,r,c,a,o){var l=Object(n["C"])("router-link");return Object(n["u"])(),Object(n["e"])(l,{to:r.to,class:Object(n["p"])(["link",{active:c.isActive}])},{default:Object(n["J"])((function(){return[Object(n["h"])("i",{class:Object(n["p"])(["icon",r.icon])},null,2),Object(n["j"])(n["b"],{name:"fade"},{default:Object(n["J"])((function(){return[c.collapsed?Object(n["f"])("",!0):(Object(n["u"])(),Object(n["g"])("span",H,[Object(n["B"])(e.$slots,"default",{},void 0,!0)]))]})),_:3})]})),_:3},8,["to","class"])}var K=r("6c02"),z={props:{to:{type:String,required:!0},icon:{type:String,required:!0}},setup:function(e){var t=Object(K["c"])(),r=Object(n["c"])((function(){return t.path===e.to}));return{isActive:r,collapsed:U}}},J=(r("bfc5"),r("d959")),_=r.n(J);const L=_()(z,[["render",S],["__scopeId","data-v-5dde2b65"]]);var q=L,W=r("940b"),I="https://fpivawiicicfnjyawoxv.supabase.co",P="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZwaXZhd2lpY2ljZm5qeWF3b3h2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NjczMTA1NzMsImV4cCI6MTk4Mjg4NjU3M30.YHhbex5B_RVpd0F9o8xVSfYeWkEMXN95iXcxy-NTH80",A=Object(W["a"])(I,P),N=Object(n["y"])({user:null}),D={setUser:function(e){N.user=e?e.user:null}},G={state:N,methods:D},X={components:{SidebarLink:q},data:function(){return{sidebarCollapsed:!1}},methods:{toggleSidebarino:function(){this.sidebarCollapsed=!this.sidebarCollapsed}},setup:function(){var e=Object(K["d"])(),t=Object(n["c"])((function(){return G.state.user})),r=function(){var t=Object(V["a"])(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,A.auth.signOut();case 2:e.push({name:"Home"});case 3:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}();return{collapsed:U,toggleSidebar:C,sidebarWidth:M,logout:r,user:t}}};r("348a"),r("ebef");const Z=_()(X,[["render",E],["__scopeId","data-v-083aa38f"]]);var F=Z,Y={components:{Sidebar:F},setup:function(){var e=Object(n["z"])(null),t=A.auth.user();return t||(e.value=!0),A.auth.onAuthStateChange((function(t,r){G.methods.setUser(r),e.value=!0})),{sidebarWidth:M,appReady:e}}};r("0519");const B=_()(Y,[["render",c]]);var Q=B,$=(r("45fc"),r("f7da")),ee=r.n($),te=r("a25c"),re=r.n(te),ne={key:0,class:"container mt-10 px-4"},ce={key:0,class:"w-full flex flex-col items-center"},ae=Object(n["h"])("h1",{class:"text-2xl"},"Looks empty here...",-1),oe=Object(n["i"])("Create Workout"),le={key:1,class:"grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"},ue={key:0,src:ee.a,class:"h-24 w-auto",alt:""},se={key:1,src:re.a,class:"h-24 w-auto",alt:""},ie={class:"mt-6 py-1 px-3 text-xs text-white bg-at-light-green shadow-md rounded-lg"},be={class:"mt-8 mb-2 text-center text-xl text-at-light-green"};function de(e,t,r,c,a,o){var l=Object(n["C"])("router-link");return c.dataLoaded?(Object(n["u"])(),Object(n["g"])("div",ne,[0===c.data.length?(Object(n["u"])(),Object(n["g"])("div",ce,[ae,Object(n["j"])(l,{class:"mt-6 py-2 px-6 rounded-sm text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green",to:{name:"Create"}},{default:Object(n["J"])((function(){return[oe]})),_:1})])):(Object(n["u"])(),Object(n["g"])("div",le,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(c.data,(function(e,t){return Object(n["u"])(),Object(n["e"])(l,{class:"flex flex-col items-center bg-light-grey p-8 shadow-md cursor-pointer",to:{name:"View-Workout",params:{workoutId:e.id}},key:t},{default:Object(n["J"])((function(){return["cardio"===e.workoutType?(Object(n["u"])(),Object(n["g"])("img",ue)):(Object(n["u"])(),Object(n["g"])("img",se)),Object(n["h"])("p",ie,Object(n["E"])(e.workoutType),1),Object(n["h"])("h1",be,Object(n["E"])(e.workoutName),1)]})),_:2},1032,["to"])})),128))]))])):Object(n["f"])("",!0)}var pe={name:"home",components:{},setup:function(){var e=Object(n["z"])([]),t=Object(n["z"])(null),r=function(){var r=Object(V["a"])(regeneratorRuntime.mark((function r(){var n,c,a;return regeneratorRuntime.wrap((function(r){while(1)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,A.from("workouts").select("*");case 3:if(n=r.sent,c=n.data,a=n.error,!a){r.next=8;break}throw a;case 8:e.value=c,t.value=!0,r.next=15;break;case 12:r.prev=12,r.t0=r["catch"](0),console.warn(r.t0.message);case 15:case"end":return r.stop()}}),r,null,[[0,12]])})));return function(){return r.apply(this,arguments)}}();return r(),{data:e,dataLoaded:t}}};const fe=_()(pe,[["render",de]]);var ge=fe,je={class:"max-w-screen-sm mx-auto px-4 py-10"},Oe={key:0,class:"mb-10 p-4 rounded-mg bg-light-grey shadow-lg"},he={class:"text-red-500"},xe=Object(n["h"])("h1",{class:"text-3xl text-at-light-green mb-4"},"Login",-1),me={class:"flex flex-col mb-2"},ve=Object(n["h"])("label",{for:"email",class:"mb-1 text-sm text-at-light-green"},"Email",-1),ye={class:"flex flex-col mb-2"},we=Object(n["h"])("label",{for:"password",class:"mb-1 text-sm text-at-light-green"},"Password",-1),ke=Object(n["h"])("button",{class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green",type:"submit"},"Login",-1),Ee=Object(n["i"])(" Dont have an account? "),Ve=Object(n["h"])("span",{class:"text-at-light-green"},"Register",-1);function Ue(e,t,r,c,a,o){var l=Object(n["C"])("router-link");return Object(n["u"])(),Object(n["g"])("div",je,[c.errorMsg?(Object(n["u"])(),Object(n["g"])("div",Oe,[Object(n["h"])("p",he,Object(n["E"])(c.errorMsg),1)])):Object(n["f"])("",!0),Object(n["h"])("form",{onSubmit:t[2]||(t[2]=Object(n["L"])((function(){return c.login&&c.login.apply(c,arguments)}),["prevent"])),class:"p-8 flex flex-col bg-light-grey rounded-md shadow-lg"},[xe,Object(n["h"])("div",me,[ve,Object(n["K"])(Object(n["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.email=e}),type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"email"},null,512),[[n["H"],c.email]])]),Object(n["h"])("div",ye,[we,Object(n["K"])(Object(n["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.password=e}),type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"password"},null,512),[[n["H"],c.password]])]),ke,Object(n["j"])(l,{class:"text-sm mt-6 text-center",to:{name:"Register"}},{default:Object(n["J"])((function(){return[Ee,Ve]})),_:1})],32)])}r("4795");var Ce={name:"login",setup:function(){var e=Object(K["d"])(),t=Object(n["z"])(null),r=Object(n["z"])(null),c=Object(n["z"])(null),a=function(){var n=Object(V["a"])(regeneratorRuntime.mark((function n(){var a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,A.auth.signIn({email:t.value,password:r.value});case 3:if(a=n.sent,o=a.error,!o){n.next=7;break}throw o;case 7:e.push({name:"Home"}),n.next=14;break;case 10:n.prev=10,n.t0=n["catch"](0),c.value=n.t0.message,setTimeout((function(){c.value=null}),5e3);case 14:case"end":return n.stop()}}),n,null,[[0,10]])})));return function(){return n.apply(this,arguments)}}();return{email:t,password:r,errorMsg:c,login:a}}};const Te=_()(Ce,[["render",Ue]]);var Re=Te,Me={class:"max-w-screen-sm mx-auto px-4 py-10"},He={key:0,class:"mb-10 p-4 rounded-mg bg-light-grey shadow-lg"},Se={class:"text-red-500"},Ke=Object(n["h"])("h1",{class:"text-3xl text-at-light-green mb-4"},"Register",-1),ze={class:"flex flex-col mb-2"},Je=Object(n["h"])("label",{for:"email",class:"mb-1 text-sm text-at-light-green"},"Email",-1),_e={class:"flex flex-col mb-2"},Le=Object(n["h"])("label",{for:"password",class:"mb-1 text-sm text-at-light-green"},"Password",-1),qe={class:"flex flex-col mb-2"},We=Object(n["h"])("label",{for:"confirmPassword",class:"mb-1 text-sm text-at-light-green"},"Confirm your password",-1),Ie=Object(n["h"])("button",{class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green",type:"submit"},"Register",-1),Pe=Object(n["i"])(" Already have an account? "),Ae=Object(n["h"])("span",{class:"text-at-light-green"},"Login",-1);function Ne(e,t,r,c,a,o){var l=Object(n["C"])("router-link");return Object(n["u"])(),Object(n["g"])("div",Me,[c.errorMsg?(Object(n["u"])(),Object(n["g"])("div",He,[Object(n["h"])("p",Se,Object(n["E"])(c.errorMsg),1)])):Object(n["f"])("",!0),Object(n["h"])("form",{onSubmit:t[3]||(t[3]=Object(n["L"])((function(){return c.register&&c.register.apply(c,arguments)}),["prevent"])),class:"p-8 flex flex-col bg-light-grey rounded-md shadow-lg"},[Ke,Object(n["h"])("div",ze,[Je,Object(n["K"])(Object(n["h"])("input",{"onUpdate:modelValue":t[0]||(t[0]=function(e){return c.email=e}),type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"email"},null,512),[[n["H"],c.email]])]),Object(n["h"])("div",_e,[Le,Object(n["K"])(Object(n["h"])("input",{"onUpdate:modelValue":t[1]||(t[1]=function(e){return c.password=e}),type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"password"},null,512),[[n["H"],c.password]])]),Object(n["h"])("div",qe,[We,Object(n["K"])(Object(n["h"])("input",{"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.confirmPassword=e}),type:"password",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"confirmPassword"},null,512),[[n["H"],c.confirmPassword]])]),Ie,Object(n["j"])(l,{class:"text-sm mt-6 text-center",to:{name:"Login"}},{default:Object(n["J"])((function(){return[Pe,Ae]})),_:1})],32)])}var De={name:"register",setup:function(){var e=Object(K["d"])(),t=Object(n["z"])(null),r=Object(n["z"])(null),c=Object(n["z"])(null),a=Object(n["z"])(null),o=function(){var n=Object(V["a"])(regeneratorRuntime.mark((function n(){var o,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(r.value!==c.value){n.next=16;break}return n.prev=1,n.next=4,A.auth.signUp({email:t.value,password:r.value});case 4:if(o=n.sent,l=o.error,!l){n.next=8;break}throw l;case 8:e.push({name:"Login"}),n.next=15;break;case 11:n.prev=11,n.t0=n["catch"](1),a.value=n.t0.message,setTimeout((function(){a.value=null}),5e3);case 15:return n.abrupt("return");case 16:a.value="Passwords do not match",setTimeout((function(){a.value=null}),5e3);case 18:case"end":return n.stop()}}),n,null,[[1,11]])})));return function(){return n.apply(this,arguments)}}();return{email:t,password:r,confirmPassword:c,errorMsg:a,register:o}}};const Ge=_()(De,[["render",Ne]]);var Xe=Ge,Ze=r("9b82"),Fe=r.n(Ze),Ye={class:"max-w-screen-md mx-auto px-4 py-10"},Be={key:0,class:"mb-10 p-4 bg-light-grey rounded-md shadow-lg"},Qe={class:"text-at-light-green"},$e={class:"text-red-500"},et={class:"p-8 flex items-start bg-light-grey rounded-md shadow-lg"},tt=Object(n["h"])("h1",{class:"text-2xl text-at-light-green"},"Record your workout",-1),rt={class:"flex flex-col"},nt=Object(n["h"])("label",{for:"workout-name",class:"mb-1 text-sm text-at-light-green"},"Workout name",-1),ct={class:"flex flex-col"},at=Object(n["h"])("label",{for:"workout-type",class:"mb-1 text-sm text-at-light-green"},"Workout type",-1),ot=Object(n["h"])("option",{value:"select-workout"},"Select Workout",-1),lt=Object(n["h"])("option",{value:"strength"},"Strength training",-1),ut=Object(n["h"])("option",{value:"cardio"},"Cardio",-1),st=[ot,lt,ut],it={key:0,class:"flex flex-col gap-y-4"},bt={class:"flex flex-col md:w-1/3"},dt=Object(n["h"])("label",{for:"exercise-name",class:"mb-1 text-sm text-at-light-green"},"Exercise",-1),pt=["onUpdate:modelValue"],ft={class:"flex flex-col flex-1"},gt=Object(n["h"])("label",{for:"sets",class:"mb-1 text-sm text-at-light-green"},"Sets",-1),jt=["onUpdate:modelValue"],Ot={class:"flex flex-col flex-1"},ht=Object(n["h"])("label",{for:"reps",class:"mb-1 text-sm text-at-light-green"},"Reps",-1),xt=["onUpdate:modelValue"],mt={class:"flex flex-col flex-1"},vt=Object(n["h"])("label",{for:"weight",class:"mb-1 text-sm text-at-light-green"},"Weight in KG",-1),yt=["onUpdate:modelValue"],wt={class:"flex flex-col flex-1"},kt=Object(n["h"])("label",{for:"rpe",class:"mb-1 text-sm text-at-light-green"},"RPE",-1),Et=["onUpdate:modelValue"],Vt=["onClick"],Ut={key:1,class:"flex flex-col gap-y-4"},Ct={class:"flex flex-col md:w-1/3"},Tt=Object(n["h"])("label",{for:"cardio-type",class:"mb-1 text-sm text-at-light-green"},"Type",-1),Rt=["onUpdate:modelValue"],Mt=Object(n["h"])("option",{value:"#"},"Select type",-1),Ht=Object(n["h"])("option",{value:"run"},"Run",-1),St=Object(n["h"])("option",{value:"walk"},"Walk",-1),Kt=[Mt,Ht,St],zt={class:"flex flex-col flex-1"},Jt=Object(n["h"])("label",{for:"distance",class:"mb-1 text-sm text-at-light-green"},"Distance",-1),_t=["onUpdate:modelValue"],Lt={class:"flex flex-col flex-1"},qt=Object(n["h"])("label",{for:"duration",class:"mb-1 text-sm text-at-light-green"},"Duration",-1),Wt=["onUpdate:modelValue"],It={class:"flex flex-col flex-1"},Pt=Object(n["h"])("label",{for:"pace",class:"mb-1 text-sm text-at-light-green"},"Pace",-1),At=["onUpdate:modelValue"],Nt=["onClick"],Dt=Object(n["h"])("button",{class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green",type:"submit"},"Record workout",-1);function Gt(e,t,r,c,a,o){return Object(n["u"])(),Object(n["g"])("div",Ye,[c.statusMsg||c.errorMsg?(Object(n["u"])(),Object(n["g"])("div",Be,[Object(n["h"])("p",Qe,Object(n["E"])(c.statusMsg),1),Object(n["h"])("p",$e,Object(n["E"])(c.errorMsg),1)])):Object(n["f"])("",!0),Object(n["h"])("div",et,[Object(n["h"])("form",{onSubmit:t[5]||(t[5]=Object(n["L"])((function(){return c.createWorkout&&c.createWorkout.apply(c,arguments)}),["prevent"])),class:"flex flex-col gap-y-5 w-full"},[tt,Object(n["h"])("div",rt,[nt,Object(n["K"])(Object(n["h"])("input",{type:"text",required:"",class:"p-2 text-gray-500 focus:outline-none",id:"workout-name","onUpdate:modelValue":t[0]||(t[0]=function(e){return c.workoutName=e})},null,512),[[n["H"],c.workoutName]])]),Object(n["h"])("div",ct,[at,Object(n["K"])(Object(n["h"])("select",{id:"workout-type",required:"",class:"p-2 text-gray-500 focus:outline-none","onUpdate:modelValue":t[1]||(t[1]=function(e){return c.workoutType=e}),onChange:t[2]||(t[2]=function(){return c.workoutChange&&c.workoutChange.apply(c,arguments)})},st,544),[[n["G"],c.workoutType]])]),"strength"===c.workoutType?(Object(n["u"])(),Object(n["g"])("div",it,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(c.exercises,(function(e,r){return Object(n["u"])(),Object(n["g"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative md:flex-row",key:r},[Object(n["h"])("div",bt,[dt,Object(n["K"])(Object(n["h"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.exercise=t}},null,8,pt),[[n["H"],e.exercise]])]),Object(n["h"])("div",ft,[gt,Object(n["K"])(Object(n["h"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.sets=t}},null,8,jt),[[n["H"],e.sets]])]),Object(n["h"])("div",Ot,[ht,Object(n["K"])(Object(n["h"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.reps=t}},null,8,xt),[[n["H"],e.reps]])]),Object(n["h"])("div",mt,[vt,Object(n["K"])(Object(n["h"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.weight=t}},null,8,yt),[[n["H"],e.weight]])]),Object(n["h"])("div",wt,[kt,Object(n["K"])(Object(n["h"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.rpe=t}},null,8,Et),[[n["H"],e.rpe]])]),Object(n["h"])("img",{onClick:function(t){return c.deleteExercise(e.id)},src:Fe.a,alt:"",class:"h-4 w-auto absolute -left-5 cursor-pointer"},null,8,Vt),Object(n["h"])("button",{onClick:t[3]||(t[3]=function(){return c.addExercise&&c.addExercise.apply(c,arguments)}),class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green",type:"button"},"Add exercise")])})),128))])):Object(n["f"])("",!0),"cardio"===c.workoutType?(Object(n["u"])(),Object(n["g"])("div",Ut,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(c.exercises,(function(e,r){return Object(n["u"])(),Object(n["g"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative md:flex-row",key:r},[Object(n["h"])("div",Ct,[Tt,Object(n["K"])(Object(n["h"])("select",{id:"cardio-type",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.cardioType=t}},Kt,8,Rt),[[n["G"],e.cardioType]])]),Object(n["h"])("div",zt,[Jt,Object(n["K"])(Object(n["h"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.distance=t}},null,8,_t),[[n["H"],e.distance]])]),Object(n["h"])("div",Lt,[qt,Object(n["K"])(Object(n["h"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.duration=t}},null,8,Wt),[[n["H"],e.duration]])]),Object(n["h"])("div",It,[Pt,Object(n["K"])(Object(n["h"])("input",{required:"",type:"text",class:"p-2 w-full text-gray-500 focus:outline-none","onUpdate:modelValue":function(t){return e.pace=t}},null,8,At),[[n["H"],e.pace]])]),Object(n["h"])("img",{onClick:function(t){return c.deleteExercise(e.id)},src:Fe.a,alt:"",class:"h-4 w-auto absolute -left-5 cursor-pointer"},null,8,Nt),Object(n["h"])("button",{onClick:t[4]||(t[4]=function(){return c.addExercise&&c.addExercise.apply(c,arguments)}),class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green",type:"button"},"Add exercise")])})),128))])):Object(n["f"])("",!0),Dt],32)])])}r("4de4");var Xt=r("8a77"),Zt={name:"create",setup:function(){var e=Object(n["z"])(""),t=Object(n["z"])("select-workout"),r=Object(n["z"])([1]),c=Object(n["z"])(null),a=Object(n["z"])(null),o=function(){"strength"!==t.value?r.value.push({id:Object(Xt["a"])(),cardioType:"",distance:"",duration:"",pace:""}):r.value.push({id:Object(Xt["a"])(),exercise:"",sets:"",reps:"",weight:"",rpe:""})},l=function(e){r.value.length>1?r.value=r.value.filter((function(t){return t.id!==e})):(a.value="Error: cannot remove,needs to have atleast 2 exercises",setTimeout((function(){a.value=!1}),5e3))},u=function(){r.value=[],o()},s=function(){var n=Object(V["a"])(regeneratorRuntime.mark((function n(){var o,l;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,A.from("workouts").insert([{workoutName:e.value,workoutType:t.value,exercises:r.value}]);case 3:if(o=n.sent,l=o.error,!l){n.next=7;break}throw l;case 7:c.value="Sucess: workout created :D",e.value=null,t.value="select-workout",r.value=[],setTimeout((function(){c.value=!1}),5e3),n.next=18;break;case 14:n.prev=14,n.t0=n["catch"](0),a.value="Error: ".concat(n.t0.message),setTimeout((function(){a.value=!1}),5e3);case 18:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}();return{workoutName:e,workoutType:t,exercises:r,statusMsg:c,errorMsg:a,addExercise:o,workoutChange:u,deleteExercise:l,createWorkout:s}}};const Ft=_()(Zt,[["render",Gt]]);var Yt=Ft,Bt=r("6122"),Qt=r.n(Bt),$t=r("a407"),er=r.n($t),tr={class:"max-w-screen-sm mx-auto px-4 py-10"},rr={key:0,class:"mb-10 p-4 rounded-md shadow-md bg-light-grey"},nr={class:"text-at-light-green"},cr={class:"text-red-500"},ar={key:1},or={class:"flex flex-col items-center p-8 rounded-md shadow-md bg-light-grey relative"},lr={key:0,class:"flex absolute left-2 top-2 gap-x-2"},ur=Object(n["h"])("img",{class:"h-3.5 w-auto",src:Qt.a},null,-1),sr=[ur],ir=Object(n["h"])("img",{class:"h-3.5 w-auto",src:er.a},null,-1),br=[ir],dr={key:1,class:"h-24 w-auto",src:ee.a,alt:""},pr={key:2,class:"h-24 w-auto",src:re.a,alt:""},fr={class:"mt-6 py-1.5 px-5 text-xs text-white bg-at-light-green rounded-lg shadow-md"},gr={class:"w-full mt-6"},jr={key:1,class:"text-at-light-green text-2xl text-center"},Or={class:"mt-10 p-8 rounded-md flex flex-col item-center bg-light-grey shadow-md text-at-light-green"},hr={key:0,class:"flex flex-col gap-y-4 w-full"},xr={class:"flex flex-2 flex-col md:w-1/3"},mr=Object(n["h"])("label",{for:"exercise-name",class:"mb-1 text-sm text-at-light-green"}," Exercise ",-1),vr=["onUpdate:modelValue"],yr={key:1},wr={class:"flex flex-1 flex-col"},kr=Object(n["h"])("label",{for:"sets",class:"mb-1 text-sm text-at-light-green"}," Sets ",-1),Er=["onUpdate:modelValue"],Vr={key:1},Ur={class:"flex flex-1 flex-col"},Cr=Object(n["h"])("label",{for:"reps",class:"mb-1 text-sm text-at-light-green"}," Reps ",-1),Tr=["onUpdate:modelValue"],Rr={key:1},Mr={class:"flex flex-1 flex-col"},Hr=Object(n["h"])("label",{for:"weight",class:"mb-1 text-sm text-at-light-green"}," Weight (KG) ",-1),Sr=["onUpdate:modelValue"],Kr={key:1},zr={class:"flex flex-1 flex-col"},Jr=Object(n["h"])("label",{for:"rpe",class:"mb-1 text-sm text-at-light-green"}," RPE ",-1),_r=["onUpdate:modelValue"],Lr={key:1},qr=["onClick"],Wr={key:1,class:"flex flex-col gap-y-4 w-full"},Ir={class:"flex flex-2 flex-col md:w-1/3"},Pr=Object(n["h"])("label",{for:"cardioType",class:"mb-1 text-sm text-at-light-green"}," Type ",-1),Ar=["onUpdate:modelValue"],Nr=Object(n["h"])("option",{value:"#"},"Select type",-1),Dr=Object(n["h"])("option",{value:"run"},"Run",-1),Gr=Object(n["h"])("option",{value:"walk"},"Walk",-1),Xr=[Nr,Dr,Gr],Zr={key:1},Fr={class:"flex flex-1 flex-col"},Yr=Object(n["h"])("label",{for:"distance",class:"mb-1 text-sm text-at-light-green"}," Distance ",-1),Br=["onUpdate:modelValue"],Qr={key:1},$r={class:"flex flex-1 flex-col"},en=Object(n["h"])("label",{for:"duration",class:"mb-1 text-sm text-at-light-green"}," Duration ",-1),tn=["onUpdate:modelValue"],rn={key:1},nn={class:"flex flex-1 flex-col"},cn=Object(n["h"])("label",{for:"pace",class:"mb-1 text-sm text-at-light-green"}," Pace ",-1),an=["onUpdate:modelValue"],on={key:1},ln=["onClick"];function un(e,t,r,c,a,o){return Object(n["u"])(),Object(n["g"])("div",tr,[c.statusMsg||c.errorMsg?(Object(n["u"])(),Object(n["g"])("div",rr,[Object(n["h"])("p",nr,Object(n["E"])(c.statusMsg),1),Object(n["h"])("p",cr,Object(n["E"])(c.errorMsg),1)])):Object(n["f"])("",!0),c.dataLoaded?(Object(n["u"])(),Object(n["g"])("div",ar,[Object(n["h"])("div",or,[c.user?(Object(n["u"])(),Object(n["g"])("div",lr,[Object(n["h"])("div",{class:"h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-at-light-green shadow-lg",onClick:t[0]||(t[0]=function(){return c.editMode&&c.editMode.apply(c,arguments)})},sr),Object(n["h"])("div",{class:"h-7 w-7 rounded-full flex justify-center items-center cursor-pointer bg-at-light-green shadow-lg",onClick:t[1]||(t[1]=function(){return c.deleteWorkout&&c.deleteWorkout.apply(c,arguments)})},br)])):Object(n["f"])("",!0),"cardio"===c.data.workoutType?(Object(n["u"])(),Object(n["g"])("img",dr)):(Object(n["u"])(),Object(n["g"])("img",pr)),Object(n["h"])("span",fr,Object(n["E"])(c.data.workoutType),1),Object(n["h"])("div",gr,[c.edit?Object(n["K"])((Object(n["u"])(),Object(n["g"])("input",{key:0,"onUpdate:modelValue":t[2]||(t[2]=function(e){return c.data.workoutName=e}),type:"text",class:"p-2 w-full text-gray-500 focus:outline-none"},null,512)),[[n["H"],c.data.workoutName]]):(Object(n["u"])(),Object(n["g"])("h1",jr,Object(n["E"])(c.data.workoutName),1))])]),Object(n["h"])("div",Or,["strength"===c.data.workoutType?(Object(n["u"])(),Object(n["g"])("div",hr,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(c.data.exercises,(function(e,t){return Object(n["u"])(),Object(n["g"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative sm:flex-row",key:t},[Object(n["h"])("div",xr,[mr,c.edit?Object(n["K"])((Object(n["u"])(),Object(n["g"])("input",{key:0,id:"exercise-name","onUpdate:modelValue":function(t){return e.exercise=t},class:"p-2 w-full text-gray-500 focus:outline-none",type:"text"},null,8,vr)),[[n["H"],e.exercise]]):(Object(n["u"])(),Object(n["g"])("p",yr,Object(n["E"])(e.exercise),1))]),Object(n["h"])("div",wr,[kr,c.edit?Object(n["K"])((Object(n["u"])(),Object(n["g"])("input",{key:0,id:"sets","onUpdate:modelValue":function(t){return e.sets=t},class:"p-2 w-full text-gray-500 focus:outline-none",type:"text"},null,8,Er)),[[n["H"],e.sets]]):(Object(n["u"])(),Object(n["g"])("p",Vr,Object(n["E"])(e.sets),1))]),Object(n["h"])("div",Ur,[Cr,c.edit?Object(n["K"])((Object(n["u"])(),Object(n["g"])("input",{key:0,id:"reps","onUpdate:modelValue":function(t){return e.reps=t},class:"p-2 w-full text-gray-500 focus:outline-none",type:"text"},null,8,Tr)),[[n["H"],e.reps]]):(Object(n["u"])(),Object(n["g"])("p",Rr,Object(n["E"])(e.reps),1))]),Object(n["h"])("div",Mr,[Hr,c.edit?Object(n["K"])((Object(n["u"])(),Object(n["g"])("input",{key:0,id:"weight","onUpdate:modelValue":function(t){return e.weight=t},class:"p-2 w-full text-gray-500 focus:outline-none",type:"text"},null,8,Sr)),[[n["H"],e.weight]]):(Object(n["u"])(),Object(n["g"])("p",Kr,Object(n["E"])(e.weight),1))]),Object(n["h"])("div",zr,[Jr,c.edit?Object(n["K"])((Object(n["u"])(),Object(n["g"])("input",{key:0,id:"rpe","onUpdate:modelValue":function(t){return e.rpe=t},class:"p-2 w-full text-gray-500 focus:outline-none",type:"text"},null,8,_r)),[[n["H"],e.rpe]]):(Object(n["u"])(),Object(n["g"])("p",Lr,Object(n["E"])(e.rpe),1))]),c.edit?(Object(n["u"])(),Object(n["g"])("img",{key:0,onClick:function(t){return c.deleteExercise(e.id)},class:"absolute h-4 w-auto -left-5 cursor-pointer",src:Fe.a,alt:""},null,8,qr)):Object(n["f"])("",!0)])})),128)),c.edit?(Object(n["u"])(),Object(n["g"])("button",{key:0,type:"button",onClick:t[3]||(t[3]=function(){return c.addExercise&&c.addExercise.apply(c,arguments)}),class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"},"Add Exercise ")):Object(n["f"])("",!0)])):(Object(n["u"])(),Object(n["g"])("div",Wr,[(Object(n["u"])(!0),Object(n["g"])(n["a"],null,Object(n["A"])(c.data.exercises,(function(e,t){return Object(n["u"])(),Object(n["g"])("div",{class:"flex flex-col gap-x-6 gap-y-2 relative sm:flex-row",key:t},[Object(n["h"])("div",Ir,[Pr,c.edit?Object(n["K"])((Object(n["u"])(),Object(n["g"])("select",{key:0,id:"cardioType","onUpdate:modelValue":function(t){return e.cardioType=t},class:"p-2 w-full text-gray-500 focus:outline-none",type:"text"},Xr,8,Ar)),[[n["G"],e.cardioType]]):(Object(n["u"])(),Object(n["g"])("p",Zr,Object(n["E"])(e.cardioType),1))]),Object(n["h"])("div",Fr,[Yr,c.edit?Object(n["K"])((Object(n["u"])(),Object(n["g"])("input",{key:0,id:"distance","onUpdate:modelValue":function(t){return e.distance=t},class:"p-2 w-full text-gray-500 focus:outline-none",type:"text"},null,8,Br)),[[n["H"],e.distance]]):(Object(n["u"])(),Object(n["g"])("p",Qr,Object(n["E"])(e.distance),1))]),Object(n["h"])("div",$r,[en,c.edit?Object(n["K"])((Object(n["u"])(),Object(n["g"])("input",{key:0,id:"duration","onUpdate:modelValue":function(t){return e.duration=t},class:"p-2 w-full text-gray-500 focus:outline-none",type:"text"},null,8,tn)),[[n["H"],e.duration]]):(Object(n["u"])(),Object(n["g"])("p",rn,Object(n["E"])(e.duration),1))]),Object(n["h"])("div",nn,[cn,c.edit?Object(n["K"])((Object(n["u"])(),Object(n["g"])("input",{key:0,id:"pace","onUpdate:modelValue":function(t){return e.pace=t},class:"p-2 w-full text-gray-500 focus:outline-none",type:"text"},null,8,an)),[[n["H"],e.pace]]):(Object(n["u"])(),Object(n["g"])("p",on,Object(n["E"])(e.pace),1))]),c.edit?(Object(n["u"])(),Object(n["g"])("img",{key:0,onClick:function(t){return c.deleteExercise(e.id)},class:"absolute h-4 w-auto -left-5 cursor-pointer",src:Fe.a,alt:""},null,8,ln)):Object(n["f"])("",!0)])})),128)),c.edit?(Object(n["u"])(),Object(n["g"])("button",{key:0,type:"button",onClick:t[4]||(t[4]=function(){return c.addExercise&&c.addExercise.apply(c,arguments)}),class:"mt-6 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"},"Add Exercise ")):Object(n["f"])("",!0)]))]),c.edit?(Object(n["u"])(),Object(n["g"])("button",{key:0,onClick:t[5]||(t[5]=function(){return c.update&&c.update.apply(c,arguments)}),type:"button",class:"mt-10 py-2 px-6 rounded-sm self-start text-sm text-white bg-at-light-green duration-200 border-solid border-2 border-transparent hover:border-at-light-green hover:bg-white hover:text-at-light-green"},"Update Workout")):Object(n["f"])("",!0)])):Object(n["f"])("",!0)])}var sn={name:"view-workout",setup:function(){var e=Object(n["z"])(null),t=Object(n["z"])(null),r=Object(n["z"])(null),c=Object(n["z"])(null),a=Object(K["c"])(),o=Object(K["d"])(),l=Object(n["c"])((function(){return G.state.user})),u=a.params.workoutId,s=function(){var n=Object(V["a"])(regeneratorRuntime.mark((function n(){var c,a,o;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,A.from("workouts").select("*").eq("id",u);case 3:if(c=n.sent,a=c.data,o=c.error,!o){n.next=8;break}throw o;case 8:e.value=a[0],t.value=!0,console.log(e.value),console.log("userData",l),n.next=18;break;case 14:n.prev=14,n.t0=n["catch"](0),r.value=n.t0.message,setTimeout((function(){r.value=!1}),5e3);case 18:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(){return n.apply(this,arguments)}}();s();var i=function(){var e=Object(V["a"])(regeneratorRuntime.mark((function e(){var t,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,A.from("workouts")["delete"]().eq("id",u);case 3:if(t=e.sent,n=t.error,!n){e.next=7;break}throw n;case 7:o.push({name:"Home"}),e.next=14;break;case 10:e.prev=10,e.t0=e["catch"](0),r.value="Error: ".concat(e.t0.message),setTimeout((function(){r.value=!1}),5e3);case 14:case"end":return e.stop()}}),e,null,[[0,10]])})));return function(){return e.apply(this,arguments)}}(),b=Object(n["z"])(null),d=function(){b.value=!b.value},p=function(){"strength"!==e.value.workoutType?e.value.exercises.push({id:Object(Xt["a"])(),cardioType:"",distance:"",duration:"",pace:""}):e.value.exercises.push({id:Object(Xt["a"])(),exercise:"",sets:"",reps:"",weight:"",rpe:""})},f=function(t){e.value.exercises.length>1?e.value.exercises=e.value.exercises.filter((function(e){return e.id!==t})):(r.value="Error: cannot remove,needs to have atleast 2 exercises",setTimeout((function(){r.value=!1}),5e3))},g=function(){var t=Object(V["a"])(regeneratorRuntime.mark((function t(){var n,a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,A.from("workouts").update({workoutName:e.value.workoutName,exercises:e.value.exercises}).eq("id",u);case 3:if(n=t.sent,a=n.error,!a){t.next=7;break}throw a;case 7:b.value=!1,c.value="Succes: workout updated",setTimeout((function(){c.value=!1}),5e3),t.next=16;break;case 12:t.prev=12,t.t0=t["catch"](0),r.value="Error: ".concat(t.t0.message),setTimeout((function(){r.value=!1}),5e3);case 16:case"end":return t.stop()}}),t,null,[[0,12]])})));return function(){return t.apply(this,arguments)}}();return{statusMsg:c,data:e,dataLoaded:t,errorMsg:r,edit:b,editMode:d,user:l,deleteWorkout:i,addExercise:p,deleteExercise:f,update:g}}};const bn=_()(sn,[["render",un]]);var dn=bn,pn=[{path:"/",name:"Home",component:ge,meta:{title:"Home",auth:!1}},{path:"/login",name:"Login",component:Re,meta:{title:"Login",auth:!1}},{path:"/register",name:"Register",component:Xe,meta:{title:"Register",auth:!1}},{path:"/create",name:"Create",component:Yt,meta:{title:"Create",auth:!0}},{path:"/view-workout/:workoutId",name:"View-Workout",component:dn,meta:{title:"View Workout",auth:!1}}],fn=Object(K["a"])({history:Object(K["b"])("/"),routes:pn});fn.beforeEach((function(e,t,r){document.title="".concat(e.meta.title," | Active Tracker"),r()})),fn.beforeEach((function(e,t,r){var n=A.auth.user();if(e.matched.some((function(e){return e.meta.auth})))return n?void r():void r({name:"Login"});r()}));var gn=fn;r("ba8c"),r("7051");Object(n["d"])(Q).use(gn).mount("#app")},6122:function(e,t,r){e.exports=r.p+"img/pencil-light.67a7865c.png"},"95d0":function(e,t,r){},"9b82":function(e,t,r){e.exports=r.p+"img/trash-light-green.f27ed677.png"},a25c:function(e,t,r){e.exports=r.p+"img/dumbbell-light-green.e9869f64.png"},a407:function(e,t,r){e.exports=r.p+"img/trash-light.f5a99b6a.png"},ba8c:function(e,t,r){},bfc5:function(e,t,r){"use strict";r("95d0")},d5fc:function(e,t,r){},ebef:function(e,t,r){"use strict";r("53c9")},f770:function(e,t,r){},f7da:function(e,t,r){e.exports=r.p+"img/running-light-green.599f4302.png"}});
//# sourceMappingURL=app.75173091.js.map