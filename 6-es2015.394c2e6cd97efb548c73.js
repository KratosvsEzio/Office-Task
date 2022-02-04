(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{"2Snb":function(e,t,n){"use strict";n.r(t),n.d(t,"LazyLoadComponentModule",(function(){return f}));var o=n("ofXK"),a=n("fXoL"),c=n("tyNb");let i=(()=>{class e{constructor(){console.log("Cat component loaded")}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Zb({type:e,selectors:[["app-cat"]],inputs:{cat:"cat"},decls:9,vars:4,consts:[["id","card"],[3,"src"],["id","info"],["id","name"],["id","age"],["id","favoriteComfyPlace"]],template:function(e,t){1&e&&(a.lc(0,"div",0),a.gc(1,"img",1),a.lc(2,"div",2),a.lc(3,"div",3),a.Lc(4),a.kc(),a.lc(5,"div",4),a.Lc(6),a.kc(),a.lc(7,"div",5),a.Lc(8),a.kc(),a.kc(),a.kc()),2&e&&(a.Ub(1),a.zc("src",t.cat.profilePicture||"assets/image/cat.png",a.Hc),a.Ub(3),a.Mc(t.cat.name),a.Ub(2),a.Nc("Age: ",t.cat.age,""),a.Ub(2),a.Nc("Favorite Park: ",t.cat.favoriteComfyPlace,""))},styles:["#card[_ngcontent-%COMP%]{border:1px solid #a9a9a9;border-radius:3px;margin-bottom:10px;margin-left:150px;margin-right:150px;padding:10px;display:flex;flex-direction:row}img[_ngcontent-%COMP%]{width:50px;height:50px}#info[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:10px}#name[_ngcontent-%COMP%]{font-size:1.1em;font-weight:700;color:#20b2aa}#age[_ngcontent-%COMP%], #favoriteComfyPlace[_ngcontent-%COMP%]{font-size:.9em;color:#474444}"]}),e})(),r=(()=>{class e{constructor(){console.log("Dog component loaded")}ngOnInit(){}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275cmp=a.Zb({type:e,selectors:[["app-dog"]],inputs:{dog:"dog"},decls:9,vars:4,consts:[["id","card"],[3,"src"],["id","info"],["id","name"],["id","age"],["id","favoritePark"]],template:function(e,t){1&e&&(a.lc(0,"div",0),a.gc(1,"img",1),a.lc(2,"div",2),a.lc(3,"div",3),a.Lc(4),a.kc(),a.lc(5,"div",4),a.Lc(6),a.kc(),a.lc(7,"div",5),a.Lc(8),a.kc(),a.kc(),a.kc()),2&e&&(a.Ub(1),a.zc("src",t.dog.profilePicture||"assets/image/dog.png",a.Hc),a.Ub(3),a.Mc(t.dog.name),a.Ub(2),a.Nc("Age: ",t.dog.age,""),a.Ub(2),a.Nc("Favorite Park: ",t.dog.favoritePark,""))},styles:["#card[_ngcontent-%COMP%]{border:1px solid #a9a9a9;border-radius:3px;margin-bottom:10px;margin-left:150px;margin-right:150px;padding:10px;display:flex;flex-direction:row}img[_ngcontent-%COMP%]{width:50px;height:50px}#info[_ngcontent-%COMP%]{display:flex;flex-direction:column;margin-left:10px}#name[_ngcontent-%COMP%]{font-size:1.1em;font-weight:700;color:#20b2aa}#age[_ngcontent-%COMP%], #favoritePark[_ngcontent-%COMP%]{font-size:.9em;color:#474444}"]}),e})(),s=(()=>{class e{constructor(e,t){this.viewContainerRef=e,this.componentFactoryResolver=t}ngOnInit(){this.viewContainerRef.clear();const e=this.pet,t=this.pet;if(e.favoriteComfyPlace){const t=this.componentFactoryResolver.resolveComponentFactory(i);this.viewContainerRef.createComponent(t).instance.cat=e}else if(t.favoritePark){const e=this.componentFactoryResolver.resolveComponentFactory(r);this.viewContainerRef.createComponent(e).instance.dog=t}}}return e.\u0275fac=function(t){return new(t||e)(a.fc(a.hb),a.fc(a.m))},e.\u0275cmp=a.Zb({type:e,selectors:[["app-pets-container"]],inputs:{pet:"pet"},decls:0,vars:0,template:function(e,t){},styles:[""]}),e})(),p=(()=>{class e{get pets(){return[{name:"Rex",age:5,favoritePark:"Central Park, New York",profilePicture:"assets/image/sereja-ris-zGyG2OyLu4k-unsplash.jpg"},{name:"Max",age:2,favoritePark:"Treptower Park, Berlin"},{name:"Peanut",age:1,favoriteComfyPlace:"Human bellies",profilePicture:"assets/image/hang-niu-Tn8DLxwuDMA-unsplash.jpg"},{name:"Noob",age:3,favoriteComfyPlace:"Window side"},{name:"Carabas",age:7,favoritePark:"\xd6zg\xfcrl\xfck, Istanbul",profilePicture:"assets/image/jack-brind-rmvG_oHzCNA-unsplash.jpg"},{name:"Tom",age:4,favoritePark:"Bois de Boulogne, Paris",profilePicture:"assets/image/charles-zqhe4qjVTJI-unsplash.jpg"},{name:"Mia",age:2,favoriteComfyPlace:"Under the couch",profilePicture:"assets/image/zoe-gayah-jonker-13ky5Ycf0ts-unsplash.jpg"},{name:"Fitz",age:4,favoritePark:"Englisher Garten, Munich"}]}}return e.\u0275fac=function(t){return new(t||e)},e.\u0275prov=a.bc({token:e,factory:e.\u0275fac,providedIn:"root"}),e})();function l(e,t){1&e&&a.gc(0,"app-pets-container",1),2&e&&a.zc("pet",t.$implicit)}const g=[{path:"",component:(()=>{class e{constructor(e){this.petService=e}ngOnInit(){this.pets=this.petService.pets}}return e.\u0275fac=function(t){return new(t||e)(a.fc(p))},e.\u0275cmp=a.Zb({type:e,selectors:[["app-pets"]],decls:3,vars:1,consts:[[3,"pet",4,"ngFor","ngForOf"],[3,"pet"]],template:function(e,t){1&e&&(a.lc(0,"h2"),a.Lc(1,"List of Pets:"),a.kc(),a.Kc(2,l,1,1,"app-pets-container",0)),2&e&&(a.Ub(2),a.zc("ngForOf",t.pets))},directives:[o.j,s],styles:[""]}),e})()}];let f=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=a.dc({type:e}),e.\u0275inj=a.cc({imports:[[o.c,c.d.forChild(g)],c.d]}),e})()}}]);