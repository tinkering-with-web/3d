(()=>{"use strict";var t,e={7913:(t,e,o)=>{var n=o(6038),a=o(9833),i=o(8656),s=o(1661),r=o(6173),l=o(7678),u=o(876),c=o(3662),d=o(4078),p=o(9090),m=o(6521),y=o(9046),h=o(140),v=o(2306),f=o(941),x=o(1557),g=o(6881),w=o(1138),z=o(7367),b=o(7016),P=o(3909),M=o(2607),I=o(7365),C=o(1051),T=o(6032),S=o(7228);const A=["Hey Visitor, I am Mynx!","For decades Web Apps have played a vital role in tech businesses","It is time to move beyond the ordinary,","it is time to make the web...","More engaging...","More immersive...","and more interesting...","Making use of the same arsenal","and conventional technologies,","I welcome you on this exciting journey,","of making the web more interactive!","Trying something new can be chaotic...","But believe, you`ve got it all!","Always Remember","TOUCH/CLICK to Interact with objects\nDRAG to Rotate, PINCH/SCROLL to Zoom"],Z=[new c.I("rgb(255, 255, 64)"),new c.I("rgb(255, 64, 0)")],k=.35,O=t=>t*(2*Math.PI/360),j=(t,e)=>{let o={method:"GET",mode:"cors",headers:{"Content-Type":"application/json"},...e};return fetch(`https://aks-mailserver.herokuapp.com${t}`,o).then((t=>{if(t.ok)return t.json();throw t})).catch((t=>{throw t}))},q=document.querySelector("canvas.webgl"),F=new I.x,_=t=>{F.add(t)},E={width:window.innerWidth,height:window.innerHeight};window.addEventListener("resize",(()=>{E.width=window.innerWidth,E.height=window.innerHeight,L.aspect=E.width/E.height,L.updateProjectionMatrix(),R.update(),U.setSize(E.width,E.height),U.setPixelRatio(Math.min(window.devicePixelRatio,2))}));const L=new C.c(75,E.width/E.height,.1,20);L.position.set(-2.71513,.61769,2.87168),F.add(L);const R=new S.z(L,q);R.enableDamping=!0,R.maxPolarAngle=Math.PI/2*.98,R.minAzimuthAngle=-Math.PI/2,R.maxAzimuthAngle=Math.PI/18,R.enablePan=!1,R.minDistance=1,R.maxDistance=15;const U=new T.C({canvas:q,antialias:!0});U.setSize(E.width,E.height),U.setPixelRatio(Math.min(window.devicePixelRatio,2)),U.outputEncoding=s.knz,U.toneMapping=s.LY2,U.toneMappingExposure=.65,U.setClearColor("#22221c"),j("/start");const H=new Audio("assets/audio/friendly-melody.mp3"),B=new Audio("assets/audio/spooky-wind.wav"),D=new Audio("assets/audio/mynx-wake.mp3"),K=new Audio("assets/audio/mynx-rings.wav"),N=new Audio("assets/audio/swoosh1.wav"),W=new Audio("assets/audio/swoosh2.wav"),$=new Audio("assets/audio/swoosh3.wav"),Y=new Audio("assets/audio/pop1.wav"),G=new Audio("assets/audio/pop2.wav");let J=0;const V=document.querySelector(".mynx-msg"),X=Number(new URL(window?.location?.href)?.searchParams?.get("speed"))||1,Q=(t,e,o)=>{if(0===t)return;const a=()=>{V.classList.add("fadeIn"),V.innerText=A[J]};e?(V.classList.remove("fadeIn"),n.ZP.delayedCall(.75/X,(()=>{a()}))):a(),t>1&&n.ZP.delayedCall(3/X,(()=>{V.classList.remove("fadeIn")})),n.ZP.delayedCall(t>1?4/X:3/X,(()=>{J++,1!==t||o?Q(t-1):et()}))},tt=document.querySelector(".next-btn"),et=()=>{tt.style.width="84px",tt.classList.remove("collapse"),tt.innerText="Continue"};let ot=null;const nt=(t,e)=>{const{x:o,y:a,z:i}=t.position,{spin:s,disp:{first:r,second:l}}=e;n.ZP.timeline({delay:1.5,defaults:{ease:"expo.out"}}).to(t.rotation,{duration:s.duration,...s.initial}).to(t.position,{duration:1,x:o+r.x,y:a+r.y,z:i+r.z},"<0%").to(t.position,{duration:10,x:o+l.x,y:a+l.y,z:i+l.z},"<90%").to(t.rotation,{duration:2,...s.final}).to(t.position,{duration:2,x:o,y:a,z:i},"<10%")};var at=o(9524),it=o(1157),st=o(845),rt=o(2913),lt=o(2757),ut=o(1361),ct=o(4876),dt=o(5850),pt=o(8146),mt=o(9596),yt=o(3250),ht=o(7360),vt=o(7797),ft=o(255),xt=o(9361),gt=o(9002);const wt={scene:null,screenmonitor:null,screenlaptop:null,tubelight:null,wall:null,floor:null,mat:null,table:null,sidetable:null,shelf:null,dumbell:null,monitor:null,laptop:null,lamp:null,headphone:null,football:null,board:null,papers:null,mynx:{body:null,hand1:null,hand2:null,glasses:null}},zt={notmagic:null,techstack:null,comingsoon:null,staytuned:null};let bt=null;const Pt={right:null,left:null,sidetable:null,hover:null},Mt={floor:null,table:null,mynx:null,football:null};let It=-2;const Ct=[!1,!1,!1];let Tt=!0;const St=(t,e,o,a)=>{const i={onUpdate:()=>{L.updateProjectionMatrix()},onComplete:e};if(t){const{x:e,y:o,z:a}=t;n.ZP.to(L.position,{duration:.5,x:e,y:o,z:a,...i}),delete i.onComplete,delete i.onUpdate}o&&n.ZP.timeline({defaults:{duration:.5}}).to(wt.scene.position,{z:wt.scene.position.z+o.z},0).to(zt.techstack.position,{z:zt.techstack.position.z+o.z},0).to(zt.comingsoon.position,{z:zt.comingsoon.position.z+o.z},0).to(zt.staytuned.position,{z:zt.staytuned.position.z+o.z},0).to(zt.notmagic.position,{z:zt.notmagic.position.z+o.z},0).to(Pt.sidetable.position,{z:Pt.sidetable.position.z+o.z},0).to(Pt.left.position,{z:Pt.left.position.z+o.z},0).to(Pt.right.position,{z:Pt.right.position.z+o.z},0).to(Pt.hover.position,{z:Pt.hover.position.z+o.z},0).to(Mt.floor.position,{z:Mt.floor.position.z+o.z},0).to(Mt.table.position,{z:Mt.table.position.z+o.z},0).to(Mt.mynx.position,{z:Mt.mynx.position.z+o.z},0).to(Mt.football.position,{z:Mt.football.position.z+o.z},0),a&&n.ZP.to(L,{duration:.5,zoom:a,...i})},At=E.width>E.height?.8:.625,Zt=(t=!1)=>{St({x:-3.83777,y:1.86222,z:2.97383},(()=>{n.ZP.delayedCall(1,(()=>{ee.uniforms.uFrequency.value=5})),n.ZP.delayedCall(2,(()=>{Jt.uniforms.uColor.value=Z[1],Qt.uniforms.uSize.value=8*U.getPixelRatio()})),((t,e,o,a,i)=>{const{football:s,dumbell:r,sidetable:l,board:u,table:c,papers:d,headphone:p,laptop:m,monitor:y,lamp:h,shelf:v,screenlaptop:f,screenmonitor:x}=t,{floor:g,table:w}=o;ot&&ot.pause();const{y:z}=s.rotation,b={spin:{duration:10,initial:{y:z+2*Math.PI},final:{y:z}},disp:{first:{x:-.3,y:.5,z:-.25},second:{x:-.5,y:.75,z:-.5}}};nt(s,b);const{z:P}=r.rotation,M={spin:{duration:8,initial:{z:P+2*Math.PI+Math.PI/3},final:{z:P}},disp:{first:{x:-.3,y:.4,z:.15},second:{x:-.55,y:.65,z:.3}}};nt(r,M);const{x:I}=l.rotation,C={spin:{duration:8,initial:{x:I+Math.PI/5},final:{x:I}},disp:{first:{x:-.1,y:.2,z:.2},second:{x:-.2,y:.3,z:.4}}};nt(l,C);const{z:T}=u.rotation,S={spin:{duration:8,initial:{z:T+Math.PI/14},final:{z:T}},disp:{first:{x:-.1,y:.05,z:.025},second:{x:-.15,y:.1,z:.075}}};nt(u,S);const{z:A}=c.rotation,Z={spin:{duration:10,initial:{z:A+Math.PI/10},final:{z:A}},disp:{first:{x:-.1,y:.1,z:.05},second:{x:-.15,y:.15,z:.1}}};nt(c,Z);const{z:k}=d.rotation,O={spin:{duration:8,initial:{z:k+Math.PI/4},final:{z:k}},disp:{first:{x:-.3,y:.15,z:.1},second:{x:-.55,y:.3,z:.25}}};nt(d,O);const{x:j}=p.rotation,q={spin:{duration:8,initial:{x:j+Math.PI/2},final:{x:j}},disp:{first:{x:-.3,y:.1,z:.1},second:{x:-.6,y:.2,z:.25}}};nt(p,q);const{z:_}=h.rotation,E={spin:{duration:10,initial:{z:_+Math.PI/6},final:{z:_}},disp:{first:{x:0,y:.3,z:-.05},second:{x:.2,y:.55,z:-.1}}};nt(h,E),f&&(m.attach(f),F.remove(f),f.geometry.dispose(),f.material.dispose(),delete t.screenlaptop);const{z:L}=m.rotation,R={spin:{duration:8,initial:{z:L+Math.PI/3},final:{z:L}},disp:{first:{x:0,y:.25,z:.025},second:{x:.2,y:.45,z:.075}}};nt(m,R),x&&(y.attach(x),F.remove(x),x.geometry.dispose(),x.material.dispose(),delete t.screenmonitor);const{z:U}=y.rotation,H={spin:{duration:10,initial:{z:U+Math.PI/6},final:{z:U}},disp:{first:{x:-.05,y:.25,z:.2},second:{x:-.2,y:.4,z:.4}}};nt(y,H);const{z:D}=v.rotation,K={spin:{duration:10,initial:{z:D+Math.PI/3},final:{z:D}},disp:{first:{x:0,y:0,z:0},second:{x:0,y:0,z:0}}};nt(v,K),n.ZP.timeline({ease:"power4.out"}).to(e.left.scale,{delay:1.25,duration:.5,x:1.75,z:1.75}).to(e.left.scale,{delay:10.75,duration:1,x:.125,z:.125}),n.ZP.timeline({ease:"expo.out"}).to(g.material,{delay:1.5,duration:.3,opacity:.075}).to(w.material,{duration:.3,opacity:.2},"<0%").to(g.material,{delay:11.25,duration:.5,opacity:.5}).to(w.material,{duration:.5,opacity:.45},"<0%"),a||(Q(1,!0,!0),n.ZP.delayedCall(11,(()=>{Q(1,!0)}))),i&&n.ZP.delayedCall(13.5,i),n.ZP.delayedCall(13.5,(()=>{ot.play()})),n.ZP.delayedCall(1,(()=>{B.play()}))})(wt,Pt,Mt,t,Ce)}),null,At)},kt=document.querySelector(".progress"),Ot=document.querySelector(".progress-per"),jt=document.querySelector(".progress-bar"),qt=document.querySelector(".progress-title"),Ft=()=>{Tt&&n.ZP.delayedCall(.5,(()=>{const t=Ct.length,e=Ct.reduce(((t,e)=>e?t+1:t),0),o=e/t;qt.textContent="Interactions",kt.style.opacity="0.6",Ot.textContent=e+"/"+t,jt.style.transform=`scaleX(${o})`,e===t&&n.ZP.delayedCall(2,(()=>{kt.style.opacity="0",Tt=!1}))}))},_t=()=>{if(It<0)return;const t=(It+1)/10;qt.textContent="Timeline",kt.style.opacity="0.6",Ot.textContent=parseInt(100*t)+" %",jt.style.transform=`scaleX(${t})`,9===It&&n.ZP.delayedCall(1,(()=>{kt.style.opacity="0",jt.style.transform="scaleX(0)",Ft()}))},Et=()=>{switch(n.ZP.delayedCall(.5,(()=>{_t()})),It){case 0:St({x:-3.05452,y:.6949,z:3.23064},(()=>{D.play(),n.ZP.delayedCall(.5,(()=>{((t,e,o)=>{const{mynx:a}=t,{left:i,right:s,hover:r}=e,{mynx:l}=o;n.ZP.timeline({repeat:-1,yoyo:!0,yoyoEase:!0,repeatDelay:.1}).to(a.position,{duration:1.75,y:a.position.y+.15},0).to(i.position,{duration:1.75,y:i.position.y+.15},0).to(s.position,{duration:1.75,y:s.position.y+.15},0).to(r.position,{duration:1.75,y:r.position.y+.15},0).to(l.material,{duration:1.75,opacity:.2},0),n.ZP.delayedCall(.5,(()=>{Q(2)}))})(wt,Pt,Mt)}))}),null,1.2);break;case 1:St({x:-3.05452,y:.6949,z:3.23064},(()=>{(t=>{const{mat:e}=t;n.ZP.to(e.scale,{x:1,y:1,z:1,duration:.6,ease:"expo.inOut"}),Q(2,!0)})(wt)}),null,1);break;case 2:St({x:-3.05452,y:.6949,z:3.23064},(()=>{((t,e)=>{const{right:o,left:a,hover:i}=t,{mynx:s}=e;a.rotation.z=Math.PI/30,o.rotation.z=Math.PI/30,i.scale.set(0,0,0);let r=null,l=null;for(const t of s.children)"MynxHand1"===t.name?r=t:"MynxHand2"===t.name&&(l=t);const u={defaults:{ease:"none",duration:1}};n.ZP.timeline(u).to(l.rotation,{y:Math.PI/8},0).to(l.position,{z:l.position.z+.1,y:l.position.y+.01,x:l.position.x+.015},0),n.ZP.timeline(u).to(r.rotation,{y:-Math.PI/8},0).to(r.position,{z:r.position.z-.095,y:r.position.y+.025,x:r.position.x+.015},0);const c={delay:1.25,duration:1,x:.125,z:.125};n.ZP.to(o.scale,c),n.ZP.to(a.scale,c);const d={...c,duration:.5,x:.25,y:.25,z:.25};n.ZP.to(i.scale,d),n.ZP.timeline({repeat:-1,defaults:{ease:"none",duration:3}}).to(o.rotation,{y:2*-Math.PI},0).to(a.rotation,{y:2*Math.PI},0).to(i.rotation,{y:2*Math.PI},0).to(i.rotation,{duration:.75,x:Math.PI/40},0).to(i.rotation,{delay:.75,duration:.75,x:0},0).to(i.rotation,{delay:1.5,duration:.75,x:-Math.PI/40},0).to(i.rotation,{delay:2.25,duration:.75,x:0},0),n.ZP.delayedCall(1.2,(()=>{K.play(),_(a),_(o),_(i)})),Q(1,!0)})(Pt,wt)}),null,1);break;case 3:St(null,(()=>{(t=>{const{shelf:e,wall:o,floor:a,tubelight:i}=t,s=i.rotation.z;o.scale.set(1,0,1),a.scale.set(0,0,0),e.scale.set(0,1,1),e.rotation.z=Math.PI/2,i.scale.set(1.3,1,1),n.ZP.timeline({defaults:{ease:"expo.inOut"}}).to(a.scale,{duration:.8,x:1,z:1,y:1},0).to(o.scale,{duration:.9,y:1},.1).to(e.scale,{duration:.4,x:1},.5).to(e.rotation,{duration:.6,z:0},.5).from(e.position,{duration:.9,y:0},.1).from(i.position,{duration:.9,y:0},.1).to(i.rotation,{duration:.5,z:s-.15*Math.PI},.3).to(i.rotation,{duration:.3,z:s+.1*Math.PI},"<90%").to(i.rotation,{duration:.2,z:s,ease:"bounce.out"},"<90%"),Q(1,!0),N.play()})(wt)}),null,At);break;case 4:St({x:-3.97628,y:1.11133,z:2.34876},(()=>{(t=>{const{football:e}=t,o=e.position.y;e.geometry.computeBoundingBox();const{max:{y:a}}=e.geometry.boundingBox;e.scale.set(1,0,1),n.ZP.timeline({defaults:{ease:"expo.inOut"}}).from(e.position,{duration:.5,y:o-a-.05},0).to(e.scale,{duration:.3,y:1},"<20%").to(e.position,{duration:.5,y:1.2},"<0%").to(e.scale,{duration:.5,x:.85,z:.85},"<10%").to(e.position,{duration:1,y:o,ease:"bounce.out"},"<80%").to(e.scale,{duration:.1,x:1,z:1},"<20%").to(e.rotation,{duration:1,y:2*Math.PI,ease:"power4.inOut"},.4),n.ZP.delayedCall(.5,(()=>{Y.play()}))})(wt),((t,e)=>{const{dumbell:o}=t,{floor:a,football:i}=e,s=o.position.y;o.geometry.computeBoundingBox();const{max:{y:r}}=o.geometry.boundingBox;o.scale.set(1,0,1),a.material.opacity=.1,_(a),_(i),n.ZP.timeline({defaults:{ease:"expo.inOut"}}).from(o.position,{duration:.4,y:s-r-.05},0).to(o.scale,{duration:.5,y:1},"<20%").to(o.position,{duration:.6,y:1},"<0%").to(o.rotation,{duration:.7,z:Math.PI/5},"<0%").to(o.rotation,{duration:.7,z:0},"<80%").to(o.position,{duration:.6,y:s},"<0%").to(a.material,{duration:.3,opacity:.5},.8)})(wt,Mt),(t=>{const{sidetable:e}=t;e.scale.set(0,1,0),n.ZP.timeline({delay:.1,defaults:{ease:"power4.in"}}).to(e.scale,{duration:.4,x:1,z:1},0).to(e.rotation,{duration:.3,z:Math.PI/10},.2).to(e.rotation,{duration:.3,z:Math.PI/8,ease:"power4.out"}).to(e.rotation,{duration:.3,z:0},"<90%"),Q(1,!0)})(wt),((t,e)=>{const{mynx:o}=t,{left:a,right:i,hover:s}=e;n.ZP.timeline({defaults:{ease:"expo.inOut",duration:.75}}).to(o.rotation,{y:0},0).to(a.position,{x:a.position.x+.125,z:a.position.z-.275},0).to(i.position,{x:i.position.x-.3,z:i.position.z-.125},0).to(s.position,{x:s.position.x-.04,z:s.position.z-.1},0)})(wt,Pt)}),{z:k},At);break;case 5:St({x:-3.00811,y:3.30665,z:1.60618},(()=>{(t=>{const{lamp:e,table:o,papers:a}=t,i=e.position.y;e.scale.set(1,0,1),e.rotation.y=-2/3*Math.PI,o.scale.set(1,0,1),a.scale.set(0,1,0),n.ZP.timeline({defaults:{ease:"expo.inOut"}}).to(e.scale,{duration:.6,y:1}).to(e.position,{duration:.5,y:1.75},"<20%").to(e.position,{duration:1,y:i},"<50%").to(e.rotation,{duration:1,y:0},.4).to(o.scale,{duration:.8,y:1,ease:"back.out"},.5).to(a.scale,{duration:.75,x:.85,z:.85},"<50%"),n.ZP.delayedCall(.3,(()=>{G.play()}))})(wt),((t,e)=>{const{headphone:o}=t,{table:a}=e,i=o.position.y;o.scale.set(1,0,1),a.material.opacity=.1,_(a),n.ZP.timeline({defaults:{ease:"expo.inOut"}}).to(o.scale,{duration:.4,y:1}).to(o.position,{duration:.8,y:2.5},"<20%").to(o.position,{duration:1.75,y:i},"<50%").to(o.rotation,{duration:.5,z:Math.PI/2},.1).to(o.rotation,{duration:1,z:0},"<75%").to(o.rotation,{duration:2,y:4*Math.PI},0).to(a.material,{duration:.3,opacity:.45},.9),Q(1,!0)})(wt,Mt),(t=>{const{laptop:e,screenlaptop:o}=t,a=e.position.y;e.remove(o),e.scale.set(1,0,1),o.scale.set(0,0,0),n.ZP.timeline({defaults:{ease:"expo.inOut"}}).to(e.scale,{duration:.6,y:1}).to(e.position,{duration:.6,y:1.5},"<20%").to(e.position,{duration:1.2,y:a},"<50%").to(e.rotation,{duration:1.5,y:2*Math.PI},0).to(o.scale,{duration:.5,x:1,y:1,z:1},"<45%")})(wt),(t=>{const{monitor:e,screenmonitor:o}=t,a=e.position.y;e.remove(o),e.scale.set(1,0,1),o.scale.set(0,0,0),n.ZP.timeline({defaults:{ease:"expo.inOut"}}).to(e.scale,{duration:.5,y:1}).to(e.position,{duration:.8,y:1.5},"<20%").to(e.position,{duration:1,y:a},"<50%").from(e.rotation,{duration:.8,z:-Math.PI/3},0).to(o.scale,{duration:.5,x:1,y:1,z:1},"<95%")})(wt)}),null,.85);break;case 6:St({x:-2.3862,y:1.76875,z:4.02213},(()=>{((t,e)=>{const{papers:o,football:a}=t,{football:i}=e;ot=n.ZP.timeline({repeat:-1,yoyo:!0,yoyoEase:!0,repeatDelay:1,defaults:{ease:"back.inOut"},delay:.5}).to(o.rotation,{duration:.8,y:-Math.PI/4},0).to(o.rotation,{duration:.6,y:0},"<90%").to(o.rotation,{duration:.7,y:Math.PI/3},"<95%").to(a.rotation,{duration:1.5,x:Math.PI/2},0).to(a.position,{duration:1.5,z:a.position.z+.2},0).to(i.position,{duration:1.5,z:i.position.z+.2},0)})(wt,Mt),(t=>{const{board:e}=t,o=e.position.z;e.scale.set(0,1,1),n.ZP.timeline({defaults:{ease:"expo.inOut"}}).to(e.scale,{duration:.4,x:1,z:1}).to(e.position,{duration:.5,z:o+.5},"<25%").to(e.rotation,{duration:.5,z:.03*-Math.PI},"<25%").to(e.position,{duration:.2,z:o},"<80%"),$.currentTime=.5,W.play(),Q(3,!0)})(wt),(t=>{const{techstack:e}=t,o=e.position.z;e.scale.set(0,0,0),_(e),n.ZP.timeline({defaults:{ease:"power4.inOut"}}).to(e.scale,{duration:1.2,x:1,y:1,z:1}).from(e.rotation,{duration:.8,z:-Math.PI/6},"<50%").to(e.position,{duration:.6,z:o+.3},"<25%").to(e.position,{duration:.4,z:o},"<80%")})(zt,wt.scene)}),null,At);break;case 7:Zt();break;case 8:St({x:-4.63347,y:2.35735,z:.11777},(()=>{((t,e)=>{const{notmagic:o}=t,a=o.position.x;o.scale.set(1,1,0),_(o),n.ZP.timeline({delay:2,defaults:{ease:"back.out"},onComplete:()=>{n.ZP.delayedCall(1.5,(()=>{(t=>{const{staytuned:e}=t,o=e.position.y,a=e.rotation.y;e.scale.set(0,0,0),_(e),n.ZP.timeline({defaults:{ease:"expo.inOut"}}).to(e.scale,{duration:.5,x:1,y:1,z:1}),n.ZP.timeline({delay:4,repeat:-1,repeatDelay:4,defaults:{ease:"expo.inOut"}}).to(e.position,{duration:1,y:o+.3}).to(e.rotation,{duration:.75,y:a-Math.PI/2},"<50%").to(e.rotation,{delay:1,duration:.5,y:a}).to(e.position,{duration:.5,y:o})})(t),Q(1,!0,!0),e()}))}}).from(o.position,{duration:2,x:a+.2}).to(o.scale,{duration:1,z:1},"<40%"),n.ZP.delayedCall(1,(()=>{$.play()})),Q(1,!0,!0)})(zt,(()=>{It++,St({x:-4.46821,y:1.54517,z:2.81026},(()=>{}),null,At+.1),_t()}))}),null,At)}},Lt=new a.l((()=>{n.ZP.delayedCall(.2,(()=>{document.querySelector(".loader").classList.add("hide"),document.querySelector(".background").classList.add("hide"),It++,Et()}))})),Rt=new i.d(Lt),Ut=Rt.load(ht);Ut.flipY=!1,Ut.encoding=s.knz;const Ht=Rt.load(vt),Bt=Rt.load(ft),Dt=Rt.load(xt),Kt=Rt.load(gt),Nt=new r.v({map:Ut}),Wt=new l.k({matcap:Ht}),$t=new l.k({matcap:Bt}),Yt=new l.k({matcap:Dt}),Gt=new u.j({vertexShader:at,fragmentShader:it,uniforms:{uTime:{value:0}}}),Jt=new u.j({vertexShader:st,fragmentShader:rt,uniforms:{uTime:{value:2},uColor:{value:Z[0]}}}),Vt=new u.j({vertexShader:lt,fragmentShader:ut,side:s.ehD,uniforms:{uTime:{value:0},uColor:{value:new c.I("rgb(1, 115, 143)")}}}),Xt=new u.j({vertexShader:ct,fragmentShader:dt,uniforms:{uTime:{value:0},uFactor:{value:.8},uColor:{value:new c.I("rgb(70, 226, 200)")}},transparent:!0}),Qt=new u.j({depthWrite:!1,vertexColors:!0,vertexShader:pt,fragmentShader:mt,transparent:!0,uniforms:{uSize:{value:6*U.getPixelRatio()},uTime:{value:0},uHeight:{value:.2},uFrequency:{value:.25}}}),te=new u.j({depthWrite:!1,vertexColors:!0,vertexShader:pt,fragmentShader:mt,transparent:!0,uniforms:{uSize:{value:5*U.getPixelRatio()},uTime:{value:0},uHeight:{value:.3},uFrequency:{value:.5}}}),ee=new u.j({depthWrite:!1,vertexColors:!0,vertexShader:pt,fragmentShader:mt,transparent:!0,uniforms:{uSize:{value:6*U.getPixelRatio()},uTime:{value:0},uHeight:{value:.05},uFrequency:{value:1}}}),oe=new r.v({color:0,transparent:!0,alphaMap:Kt,opacity:0}),ne=new r.v({color:0,transparent:!0,alphaMap:Kt,opacity:0}),ae=new r.v({color:0,transparent:!0,alphaMap:Kt,opacity:.4});new z.E(Lt).load(yt,(t=>{(t=>{t.scene.traverse((t=>{let e=t.name.toLowerCase().split("mynx"),o=Nt;switch(e[0]){case"screenmonitor":case"screenlaptop":o=Gt;break;case"glasses":o=Jt;break;case"mat":o=Vt;break;case"tubelight":o=Xt}t.material=o,["glasses"].includes(e[0])?wt.mynx[e[0]]=t:e.length>1?wt.mynx[e[1]]=t:wt[e[0]]=t}))})(t),(()=>{const{scene:t,mynx:e}=wt;t.position.y-=.5,t.position.z-=.2,Object.entries(wt).forEach((([t,e])=>{["scene","mynx"].includes(t)||e.scale.set(0,0,0)})),Object.entries(e).forEach((([t,o])=>{"body"!==t&&(e.body.attach(o),wt.scene.remove(o),o.geometry.dispose(),o.material.dispose(),delete e[t])})),wt.mynx=e.body,wt.mynx.rotation.y+=Math.PI/4})(),(()=>{const t=new m.f(.5,2,2,8),e=new m.f(.3,.5,2.5,4);e.translate(0,-2.1,0);const o=(0,M.qf)([t,e]);o.scale(.035,.035,.035),o.center();const n=new r.v({color:16776960,wireframe:!0});bt=new p.K(o,n)})(),(()=>{const t=[{count:24,radius:1,baseAngle:O(15)},{count:20,radius:.8,baseAngle:O(18)},{count:16,radius:.65,baseAngle:O(22.5)},{count:12,radius:.45,baseAngle:O(30)},{count:8,radius:.3,baseAngle:O(45)},{count:2,radius:.2,baseAngle:O(180)}],e=t.reduce(((t,e)=>t+e.count),0),o=new y.u,n=new y.u,a=new Float32Array(3*e),i=new Float32Array(e),s=new Float32Array(e),r=new Float32Array(3*e),l=new Float32Array(3*e),u=new Float32Array(e),d=new Float32Array(e),p=new Float32Array(3*e),m=new c.I("hsl(120, 100%, 50%)"),f=new c.I("hsl(0, 60%, 50%)");let x=0;t.forEach(((t,e)=>{const{radius:o,baseAngle:n,count:c}=t;for(let t=0;t<c;t++){const c=n*t,y=3*(t+x);i[t+x]=o,s[t+x]=e%2==0?1:0,a[y]=Math.cos(c)*o,a[y+1]=0,a[y+2]=Math.sin(c)*o,u[t+x]=o,d[t+x]=e%2==0?1:0,l[y]=Math.cos(c)*o,l[y+1]=0,l[y+2]=Math.sin(c)*o;const h=f.clone();h.lerp(m,o/.9),r[y]=h.r,r[y+1]=h.g,r[y+2]=h.b,p[y]=h.r,p[y+1]=h.g,p[y+2]=h.b}x+=c})),o.setAttribute("position",new h.Tl(a,3)),o.setAttribute("aRadius",new h.Tl(i,1)),o.setAttribute("aMovementType",new h.Tl(s,1)),o.setAttribute("color",new h.Tl(r,3)),n.setAttribute("position",new h.Tl(l,3)),n.setAttribute("aRadius",new h.Tl(u,1)),n.setAttribute("aMovementType",new h.Tl(d,1)),n.setAttribute("color",new h.Tl(p,3)),Pt.right=new v.w(o,Qt),Pt.left=new v.w(n,Qt),Pt.right.position.set(-.8,.025,1.325),Pt.left.position.set(-1.2,.025,.825)})(),(()=>{const t=[{count:30,radius:1.2,baseAngle:O(12)},{count:24,radius:1,baseAngle:O(15)},{count:20,radius:.9,baseAngle:O(18)},{count:16,radius:.8,baseAngle:O(22.5)},{count:12,radius:.7,baseAngle:O(30)},{count:8,radius:.6,baseAngle:O(45)},{count:6,radius:.5,baseAngle:O(60)}],e=t.reduce(((t,e)=>t+e.count),0),o=new y.u,n=new Float32Array(3*e),a=new Float32Array(e),i=new Float32Array(e),s=new Float32Array(3*e),r=new c.I("hsl(45, 100%, 50%)"),l=new c.I("hsl(0, 60%, 50%)");let u=0;t.forEach(((t,e)=>{const{radius:o,baseAngle:c,count:d}=t;for(let t=0;t<d;t++){const d=c*t,p=3*(t+u);a[t+u]=o,i[t+u]=e%2==0?1:0,n[p]=Math.cos(d)*o,n[p+1]=0,n[p+2]=Math.sin(d)*o;const m=l.clone();m.lerp(r,o),s[p]=m.r,s[p+1]=m.g,s[p+2]=m.b}u+=d})),o.setAttribute("position",new h.Tl(n,3)),o.setAttribute("aRadius",new h.Tl(a,1)),o.setAttribute("aMovementType",new h.Tl(i,1)),o.setAttribute("color",new h.Tl(s,3)),Pt.sidetable=new v.w(o,te),Pt.sidetable.position.set(.975,.55,1.1)})(),(()=>{const t=[{count:60,radius:1.2,baseAngle:O(6)},{count:48,radius:1,baseAngle:O(7.5)}],e=t.reduce(((t,e)=>t+e.count),0),o=new y.u,n=new Float32Array(3*e),a=new Float32Array(e),i=new Float32Array(e),s=new Float32Array(3*e),r=new c.I("hsl(45, 100%, 50%)"),l=new c.I("hsl(0, 60%, 50%)");let u=0;t.forEach(((t,e)=>{const{radius:o,baseAngle:c,count:d}=t;for(let t=0;t<d;t++){const d=c*t,p=3*(t+u);a[t+u]=o,i[t+u]=e%2==0?1:0,n[p]=Math.cos(d)*o,n[p+1]=0,n[p+2]=Math.sin(d)*o;const m=l.clone();m.lerp(r,o),s[p]=m.r,s[p+1]=m.g,s[p+2]=m.b}u+=d})),o.setAttribute("position",new h.Tl(n,3)),o.setAttribute("aRadius",new h.Tl(a,1)),o.setAttribute("aMovementType",new h.Tl(i,1)),o.setAttribute("color",new h.Tl(s,3)),Pt.hover=new v.w(o,ee),Pt.hover.position.set(-.85,-.2,.95)})(),(()=>{const t=new d._(.8,.5),e=new d._(.8,.5),o=new d._(.9,.9);t.translate(-.4,1.44,-.34),t.rotateZ(-.08),e.translate(.25,1.125,-.335),e.rotateZ(.45),o.translate(1,-1.05,-.34);const n=(0,M.qf)([t,e,o]),a=new p.K(n,oe);a.rotation.x=-Math.PI/2;const i=new d._(.4,.4),s=new d._(.7,.7),r=new d._(.5,.5),l=new d._(.35,1),u=new d._(1.5,3);i.translate(.975,1.4,.405),s.translate(.8,.75,.405),r.translate(.6,.2,.41),l.translate(.9,.375,.42),l.rotateZ(-.25),u.translate(.8,.85,-.34);const c=(0,M.qf)([i,s,r,l,u]),m=new p.K(c,ne);m.rotation.x=-Math.PI/2;const y=new d._(.8,.8);y.translate(-.85,-.9,-.28);const h=(0,M.qf)([y]),v=new p.K(h,ae);v.rotation.x=-Math.PI/2;const f=new d._(.625,.625);f.translate(-1.05,1.275,-.35);const x=(0,M.qf)([f]),g=new p.K(x,oe);g.rotation.x=-Math.PI/2,Mt.floor=a,Mt.table=m,Mt.mynx=v,Mt.football=g,_(Mt.mynx)})(),_(wt.scene)})),new b.J(Lt).load("assets/fonts/droid_sans_bold.typeface.json",(t=>{const e={font:t,size:.11,height:.04,curveSegments:1},o=["IT'S NOT MAGIC,","JUST FEW LINES OF","</CODE>"].map((t=>new P.M(t,e)));o[1].translate(.15,-.25,0),o[2].translate(.5,-.45,0),o[2].scale(1.25,1.25,1);const n=(0,M.qf)(o),a=new p.K(n,Wt);a.rotation.y=-Math.PI/2,a.position.set(1.35,2.2,-1.6),zt.notmagic=a;const i={font:t,size:.1,height:.03,curveSegments:1},s=["HTML","CSS","JS","REACT","NODE","ANIMATIONS","WEBGL"].map((t=>new P.M(t,i)));s[0].translate(-.5,1.24-1.6,0),s[0].rotateZ(.2),s[1].translate(.2,1.24-1.65,0),s[2].translate(.8,-.26,0),s[2].rotateZ(-.25),s[3].translate(.675,-.95,0),s[3].rotateZ(.15),s[4].translate(.9,-1.05,0),s[4].rotateZ(-.1),s[5].translate(0,-1.61,0),s[5].rotateZ(.1),s[6].translate(-.25,-1.6,0),s[6].rotateZ(-.2);const r=(0,M.qf)(s);r.center();const l=new p.K(r,$t);l.position.set(-.2,.95,-1.77),zt.techstack=l;const u={font:t,size:.035,height:.01,curveSegments:1},c=["Coming","Soon !","Resume","E-Com","Ed-Tech","More..."].map((t=>new P.M(t,u)));c[1].translate(.02,-.075,0),c.forEach(((t,e)=>{e<2||t.scale(.7,.7,1)})),c[2].rotateZ(Math.PI/4),c[2].rotateY(Math.PI/13),c[2].translate(-.61,.075,.0225),c[3].rotateZ(-Math.PI/5),c[3].rotateY(-Math.PI/13),c[3].translate(-.6,-.15,.015),c[4].rotateZ(Math.PI/5),c[4].rotateY(Math.PI/13),c[4].translate(-.41,-.1,.04),c[5].rotateZ(-Math.PI/4),c[5].rotateY(-Math.PI/13),c[5].translate(-.23,-.175,.015);const d=(0,M.qf)(c),m=new p.K(d,Yt);m.position.set(-.2575,1,-1.75),zt.comingsoon=m;const y={font:t,size:.11,height:.04,curveSegments:1},h=["Stay","Tuned"].map((t=>new P.M(t,y)));h[1].translate(0,-.2,0);const v=(0,M.qf)(h);v.center();const f=new p.K(v,Wt);f.position.set(-.25,-.28,-.1),f.rotation.set(-Math.PI/2,0,-Math.PI/3),zt.staytuned=f,Object.values(zt).forEach((t=>{t.scale.set(0,0,0)}))}));const ie=document.querySelector(".next-btn");ie.onclick=()=>{-1==It&&(H.load(),B.load(),D.load(),K.load(),N.load(),W.load(),$.load(),Y.load(),G.load()),It++,Et(),ie.classList.add("collapse"),ie.innerText="",gtag("event","timeline progress",{event_label:"next button",value:It})};const se=document.querySelector(".feedback-btn"),re=document.querySelector(".msg-box"),le=document.querySelector(".msg-box > .msg-box__close-btn"),ue=document.querySelector(".msg-box__action > button"),ce=document.querySelector(".msg-box__status"),de=document.getElementById("fname"),pe=document.getElementById("fmsg");let me=!1;const ye=()=>{re.classList.remove("show"),me=!1};se.onclick=()=>{me?re.classList.remove("show"):re.classList.add("show"),me=!me},le.onclick=ye,ue.onclick=()=>{const t=de.value.trim(),e=pe.value.trim();t?de.classList.remove("error"):de.classList.add("error"),e?pe.classList.remove("error"):pe.classList.add("error"),t&&e&&(ce.style.display="block",ce.innerText="Sending...",ue.classList.add("disabled"),j("/message",{method:"post",body:JSON.stringify({name:t,msg:e})}).then((t=>{t.success?(ce.innerText="Message Sent",n.ZP.delayedCall(1,(()=>{ye(),ue.classList.remove("disabled")}))):(ce.innerText="Please try later",ue.classList.remove("disabled"))})).catch((t=>{ce.innerText="Please try later",ue.classList.remove("disabled")})))};const he=document.querySelector(".audio-credits"),ve=document.querySelector(".credits-box"),fe=document.querySelector(".credits-box > .msg-box__close-btn");let xe=!1;he.onclick=()=>{xe?ve.classList.remove("show"):ve.classList.add("show"),xe=!xe},fe.onclick=()=>{ve.classList.remove("show"),xe=!1};const ge=new f.S,we=new x.i,ze=[{position:new g.P(-.45,1.1,-1.78+k),element:document.querySelector(".point-0")},{position:new g.P(1,.5,1.4),element:document.querySelector(".point-1")},{position:new g.P(-.8,.4,1.15),element:document.querySelector(".point-2")}];let be=!1,Pe=null,Me=[];const Ie=new w.F;window.addEventListener("mousemove",(t=>{Ie.x=t.clientX/E.width*2-1,Ie.y=-t.clientY/E.height*2+1}));const Ce=()=>{be=!1,Jt.uniforms.uColor.value=Z[0],Qt.uniforms.uSize.value=6*U.getPixelRatio(),ee.uniforms.uFrequency.value=1};let Te=!0;const Se=t=>{gtag("event","object interactions",{event_label:"interactions",value:t})};window.addEventListener("click",(t=>{if(It<9||be)return;we.setFromCamera(Ie,L);const e=we.intersectObjects(Me);if(Pe=e.length?e[0]:null,Pe)switch(Pe.object.name){case"Board":be=!0,Ct[0]=!0,Ft(),ze[0].element.style.display="none",ze.splice(0,1),Me.splice(0,1),((t,e,o)=>{const{board:a}=t,{z:i}=a.position;n.ZP.timeline({defaults:{ease:"expo.inOut"},onComplete:()=>{((t,e)=>{const{comingsoon:o}=t,a=o.position.z;o.scale.set(1,0,0),_(o),n.ZP.timeline({defaults:{ease:"expo.inOut"},onComplete:e}).to(o.scale,{duration:.5,z:1,y:1}).from(o.position,{duration:.6,z:a+.5},"<75%").to(o.position,{duration:.4,z:a},"<90%")})(e,o)}}).to(a.position,{duration:.6,z:i+.75}).to(a.rotation,{duration:.8,z:2*Math.PI},"<90%").to(a.position,{duration:.4,z:i},"<90%"),W.play()})(wt,zt,Ce),Se(0);break;case"SideTable":be=!0,Ct[1]=!0,Ft(),((t,e,o,a,i)=>{const{sidetable:s}=t,{sidetable:r}=o,{x:l,y:u,z:c}=s.position,d=u+.05;e.position.set(l,d,c-.2+k),e.scale.set(0,0,0),r.scale.set(0,0,0),i&&(_(e),_(r)),n.ZP.timeline({defaults:{ease:"expo.inOut"}}).to(r.scale,{duration:1,x:.15,z:.15}).to(e.scale,{duration:1,x:1,z:1,y:1},0),n.ZP.timeline({repeat:-1,yoyo:!0,yoyoEase:!0,defaults:{ease:"none"}}).to(e.rotation,{duration:6,z:2*Math.PI}).to(e.rotation,{duration:6,x:3*Math.PI},0),n.ZP.timeline({repeat:-1,yoyo:!0,yoyoEase:!0,defaults:{ease:"none"}}).to(r.rotation,{duration:4,z:.1*Math.PI}).to(r.rotation,{duration:4,y:2*Math.PI},0),n.ZP.timeline({repeat:-1,yoyo:!0,yoyoEase:!0,defaults:{ease:"ease.inOut"}}).to(e.position,{duration:2,y:d+.125}).to(e.position,{duration:2,y:d}),H.addEventListener("timeupdate",(()=>{H.currentTime>10&&(H.currentTime=0,H.pause(),a(),n.ZP.timeline({defaults:{ease:"expo.inOut"}}).to(r.scale,{duration:.5,x:0,z:0}).to(e.scale,{duration:.5,x:0,z:0,y:0},0))})),n.ZP.delayedCall(.5,(()=>{H.play()}))})(wt,bt,Pt,Ce,Te),Te=!1,Se(1);break;case"MynxHand1":case"MynxHand2":case"MynxBody":be=!0,Ct[2]=!0,Ft(),Zt(!0),Se(2)}}));const Ae=()=>{const t=ge.getElapsedTime();if(!Me.length&&8===It){const{board:t,mynx:e,sidetable:o}=wt;Me=[t,e,o]}if(It>-1&&(Jt.uniforms.uTime.value=t),Gt.uniforms.uTime.value=t,Vt.uniforms.uTime.value=t,Xt.uniforms.uTime.value=t,Qt.uniforms.uTime.value=t,te.uniforms.uTime.value=t,ee.uniforms.uTime.value=t,It>8)for(const t of ze){if(be){t.element.style.display="none";continue}const e=t.position.clone();e.project(L);const o=e.x*E.width*.5,n=-e.y*E.height*.5;t.element.style.transform=`translate(${o}px, ${n}px)`,t.element.style.display="block"}R.update(),U.render(F,L),window.requestAnimationFrame(Ae)};Ae()},7360:(t,e,o)=>{t.exports=o.p+"assets/images/baked.7025ec271a04ef08.jpg"},7797:(t,e,o)=>{t.exports=o.p+"assets/images/mat1.a5d3c326d839ccbc.png"},255:(t,e,o)=>{t.exports=o.p+"assets/images/mat2.fb286b31cada302b.png"},9361:(t,e,o)=>{t.exports=o.p+"assets/images/mat3.7f68cdb11723bc75.png"},3250:(t,e,o)=>{t.exports=o.p+"assets/images/scene.e0b410ca9a95ba1c.glb"},9002:(t,e,o)=>{t.exports=o.p+"assets/images/simpleShadow.f5833b00a97f6382.jpg"},2913:t=>{t.exports="varying vec2 vUv;\n\nuniform float uTime;\nuniform vec3 uColor;\n\nvoid main(){\n  float strength = abs(sin(vUv.y + uTime * 2.0));\n  vec3 color1 = vec3(uColor);\n  vec3 uvColor = vec3(vUv, 1.0);\n  vec3 mixedColor = mix(color1, uvColor, strength);\n  gl_FragColor = vec4(vec3(mixedColor) ,1.0);\n}"},845:t=>{t.exports="varying vec2 vUv;\n\nvoid main()\n{\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    vUv = uv;\n}"},1361:t=>{t.exports="uniform vec3 uColor;\n\nvarying vec2 vUv;\n\nvoid main(){\n  float strength = 1.0 - distance(vUv, vec2(0.1));\n  vec3 color1 = vec3(0.0, 0.0, 0.0);\n  vec3 mixedColor = mix(uColor, color1, strength);\n  gl_FragColor = vec4(vec3(mixedColor), 1.0);\n}\n\n"},2757:t=>{t.exports="uniform float uTime;\n\nvarying vec2 vUv;\n\nvoid main(){\n  vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n  float elevation = sin(modelPosition.z * 3.0 - uTime + modelPosition.x) * 0.025;\n  // elevation += sin(modelPosition.x * 2.0 - uTime) * 0.025;\n  modelPosition.y += 0.025 + elevation;\n  vec4 viewPosition = viewMatrix * modelPosition;\n  vec4 projectionPosition = projectionMatrix*viewPosition;\n  gl_Position = projectionPosition;\n  vUv = uv;\n}"},9596:t=>{t.exports="varying vec3 vColor;\n\nvoid main(){\n    // Disc\n    float strength = distance(gl_PointCoord, vec2(0.5));\n    strength = 1.0 - step(0.5, strength);\n\n    gl_FragColor = vec4(vColor, strength);\n}"},8146:t=>{t.exports="uniform float uSize;\nuniform float uTime;\nuniform float uHeight;\nuniform float uFrequency;\n\nattribute float aRadius;\nattribute float aMovementType;\n\nvarying vec3 vColor;\n\nvoid main(){\n\n    // Position\n    vec4 modelPosition = modelMatrix * vec4(position, 1.0);\n    modelPosition.y += (1.0-aMovementType)*(abs(cos(uTime * uFrequency))+0.5) * aRadius * uHeight;\n    modelPosition.y += aMovementType * (abs(sin(uTime * uFrequency))+0.5) * aRadius * uHeight;\n    vec4 viewPosition = viewMatrix * modelPosition;\n    vec4 porjectionPosition = projectionMatrix * viewPosition;\n\n    // Size\n    gl_Position = porjectionPosition;\n    gl_PointSize = uSize;\n\n    // Size Attenuation\n    gl_PointSize *= ( 1.0 / - viewPosition.z );\n\n    // Color\n    vColor = color;\n}"},1157:t=>{t.exports="varying vec2 vUv;\nuniform float uTime;\n\nvoid main(){\n    float factor = 0.5*abs(cos(uTime));\n    vec3 blackColor = vec3(0.0);\n    vec3 uvColor = vec3(1.0, vUv + vec2(factor));\n    vec3 mixedColor = mix(blackColor, uvColor, 0.7);\n    gl_FragColor = vec4(mixedColor, 1.0);\n\n    \n}\n\n"},9524:t=>{t.exports="varying vec2 vUv;\n\nvoid main()\n{\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n    vUv = uv;\n}"},5850:t=>{t.exports="uniform float uFactor;\nuniform float uTime;\nuniform vec3 uColor;\n\nvoid main(){\n  float factor = uFactor * abs(sin(uTime*1.5));\n  gl_FragColor = vec4(uColor, 1.0 - factor);\n}"},4876:t=>{t.exports="void main()\n{\n    gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);\n}"}},o={};function n(t){var a=o[t];if(void 0!==a)return a.exports;var i=o[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.m=e,t=[],n.O=(e,o,a,i)=>{if(!o){var s=1/0;for(c=0;c<t.length;c++){for(var[o,a,i]=t[c],r=!0,l=0;l<o.length;l++)(!1&i||s>=i)&&Object.keys(n.O).every((t=>n.O[t](o[l])))?o.splice(l--,1):(r=!1,i<s&&(s=i));if(r){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}i=i||0;for(var c=t.length;c>0&&t[c-1][2]>i;c--)t[c]=t[c-1];t[c]=[o,a,i]},n.d=(t,e)=>{for(var o in e)n.o(e,o)&&!n.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"==typeof window)return window}}(),n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),n.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},(()=>{var t;n.g.importScripts&&(t=n.g.location+"");var e=n.g.document;if(!t&&e&&(e.currentScript&&(t=e.currentScript.src),!t)){var o=e.getElementsByTagName("script");o.length&&(t=o[o.length-1].src)}if(!t)throw new Error("Automatic publicPath is not supported in this browser");t=t.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=t})(),(()=>{var t={179:0};n.O.j=e=>0===t[e];var e=(e,o)=>{var a,i,[s,r,l]=o,u=0;if(s.some((e=>0!==t[e]))){for(a in r)n.o(r,a)&&(n.m[a]=r[a]);if(l)var c=l(n)}for(e&&e(o);u<s.length;u++)i=s[u],n.o(t,i)&&t[i]&&t[i][0](),t[i]=0;return n.O(c)},o=self.webpackChunk=self.webpackChunk||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))})();var a=n.O(void 0,[736],(()=>n(7913)));a=n.O(a)})();