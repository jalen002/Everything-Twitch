(this["webpackJsonpeverything-twitch"]=this["webpackJsonpeverything-twitch"]||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),i=(a(73),a(14)),c=a(10),s=a(18),u=a(19),m=a(20),d=(a(74),a(59)),h=a.n(d),p=a(144),f=a(148),b=a(147),v=a(141),g=a(145),y=a(146);function E(e,t){return{command:e,description:t}}var k=[E("!date","Tells the user what today's date is"),E("!followed","Tells the user when they followed my channel"),E("!followers","Gives the count of current channel followers"),E("!following","Gives the user how long the you've been following my channel"),E("!give <username> <number>","Allows the user to give another user channel points"),E("!headset","A description of my current gaming headset"),E("!keyboard","A description of my current gaming keyboard"),E("!mouse","A description of my current gaming mouse"),E("!nextsong","Tells the user what the next song in the queue is"),E("!recentfollowers","Tells the 3 most recent followers"),E("!song","Tells user what song is currently playing"),E("!specs","Tells the user what my PC specs are"),E("!stats","Gives stats about stream: Game, title, Uptime, viewers"),E("!time","Gives the current time"),E("!top5points","Top 5 users based on channel points"),E("!top5time","Top 5 users based on hours watched"),E("!uptime","How long the current stream has been live"),E("!sr <youtube url>","Allows users to play a song on stream"),E("!songrequest <youtube url>","Allows users to play a song on stream"),E("!commands","Gives user a link to a website with all the commands listed")];function w(){var e=0;return r.a.createElement(v.a,null,r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,null,r.a.createElement(b.a,null,"Command"),r.a.createElement(b.a,null,"Description"))),r.a.createElement(f.a,null,k.map((function(t){return r.a.createElement(y.a,{key:e++},r.a.createElement(b.a,null,t.command),r.a.createElement(b.a,null,t.description))})))))}var x,O,j=a(60),C=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(j.a,{channel:"mintpatty17",id:"mintpatty17",theme:"dark",muted:!0,onVideoPause:function(){return console.log(":(")},height:"100vh",width:"100%"}))}}]),t}(n.Component),T=a(41),N=a.n(T),S=(a(95),a(61)),M=a.n(S),D=a(62),A=a.n(D),R=a(40),I=a.n(R),G=a(149),P=a(150),B=a(151),F=a(152),W=a(162),K=a(29),L=a(5),$=a(37),z=a.n($),U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).chartRef=r.a.createRef(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.buildChart()}},{key:"componentDidUpdate",value:function(){this.buildChart()}},{key:"buildChart",value:function(){var e=this.chartRef.current.getContext("2d"),t=this.props.data;"undefined"!==typeof x&&x.destroy();var a=this.getChartData(t);x=new z.a(e,{type:"line",data:{labels:[],datasets:[{label:"Kills",backgroundColor:"rgba(115, 210, 255, 0.4)",borderColor:"rgba(0, 0, 255, 0.4)",lineTension:0,data:a}]},options:{title:{display:!0,text:"Recent Matches",fontSize:20},legend:{display:!0,position:"right"},scales:{xAxes:[{type:"time",time:{unit:"hour",displayFormats:{hour:"MMM D h:mm a"}},ticks:{source:"auto"}}]},animation:{duration:2e3,easing:"easeOutBounce"}}})}},{key:"getChartData",value:function(e){var t=this,a=[];return e&&e.recentMatches.forEach((function(e){return a.push({x:t.convertDate(e.dateCollected),y:e.kills})})),a}},{key:"convertDate",value:function(e){e=new Date(e);var t=(new Date).getTimezoneOffset();return e.setMinutes(e.getMinutes()-t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("canvas",{id:"fortniteRecentGamesChart",ref:this.chartRef}))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).chartRef=r.a.createRef(),a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){this.buildChart()}},{key:"componentDidUpdate",value:function(){this.buildChart()}},{key:"getChartDataAndLabels",value:function(e){var t=[],a=[];if(e){var n=e.segments[0].stats;for(var r in n)n[r].displayName.includes("Wins")&&t.push({x:n[r].displayName,y:n[r].value});t.forEach((function(e){return a.push(e.x)}))}return{data:t,labels:a}}},{key:"buildChart",value:function(){var e=this.chartRef.current.getContext("2d"),t=this.props.data;"undefined"!==typeof O&&O.destroy();var a=this.getChartDataAndLabels(t);O=new z.a(e,{type:"line",data:{labels:a.labels,datasets:[{label:"Wins",backgroundColor:"rgba(179, 12, 0, 0.4)",borderColor:"rgba(255, 0, 0, 0.4)",lineTension:0,data:a.data}]},options:{title:{display:!0,text:"Wins by Season",fontSize:20},legend:{display:!0,position:"right"},scales:{yAxes:[{ticks:{suggestedMin:0}}]},animation:{duration:2e3,easing:"easeOutBounce"}}})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("canvas",{id:"apexWinsChart",ref:this.chartRef}))}}]),t}(n.Component),H="https://cors-anywhere.herokuapp.com/",J=I.a.apiKey,V=I.a.epicNickname,_=I.a.originName,Q=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={error:null,fortniteStats:null,apexStats:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([this.retrieveFortniteTrackingInfo("profile/kbm/"+V),this.retrieveApexTrackingInfo("standard/profile/5/"+_)]).then((function(t){e.setState({fortniteStats:t[0].data,apexStats:t[1].data.data,error:null})}))}},{key:"retrieveFortniteTrackingInfo",value:function(e){var t=H+"https://api.fortnitetracker.com/v1/"+e,a={method:"GET",headers:{"TRN-Api-Key":J}};return N.a.get(t,a)}},{key:"retrieveApexTrackingInfo",value:function(e){var t=H+"https://public-api.tracker.gg/v2/apex/"+e,a={method:"GET",headers:{"TRN-Api-Key":J}};return N.a.get(t,a)}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.fortniteStats,n=t.apexStats;t.error;return r.a.createElement("div",null,r.a.createElement("header",{className:"aboutMeHeader"},"Mint Patty 17"),r.a.createElement("div",{className:"aboutMeBody"},r.a.createElement(G.a,{className:e.root},r.a.createElement(P.a,{avatar:r.a.createElement(W.a,{alt:"fortnite",src:M.a}),title:"Fortnite"}),r.a.createElement(B.a,null,r.a.createElement(U,{data:a})),r.a.createElement(F.a,null,r.a.createElement(K.a,{variant:"body2",color:"textSecondary",component:"p"},"Total Fortnite Wins: ",a?a.lifeTimeStats[8].value:null,r.a.createElement("br",null),"Overall Fortnite K/D: ",a?a.lifeTimeStats[11].value:null))),r.a.createElement(G.a,{className:e.root},r.a.createElement(P.a,{avatar:r.a.createElement(W.a,{alt:"apex",src:A.a}),title:"Apex Legends"}),r.a.createElement(B.a,null,r.a.createElement(q,{data:n})),r.a.createElement(F.a,null,r.a.createElement(K.a,{variant:"body2",color:"textSecondary",component:"p"})))))}}]),t}(n.Component),X=Object(L.a)((function(e){return{root:{width:590,margin:"30px"},media:{height:0,paddingTop:"56.25%"}}}))(Q),Y=(a(98),a(63)),Z=a.n(Y),ee=function(e){function t(){return Object(i.a)(this,t),Object(s.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"main-404"},r.a.createElement("div",{className:"title-404"},"404"),r.a.createElement("img",{src:Z.a,className:"sad-face-logo",alt:"Sad Face"}),r.a.createElement("br",null),r.a.createElement("div",{className:"body-404"},"Oops! That page must've gotten lost in the nethers...",r.a.createElement("br",null),"Try looking elsewhere padawan.")))}}]),t}(n.Component),te=a(42),ae=a(6),ne=a(154),re=a(155),oe=a(160),le=a(153),ie=a(157),ce=a(156),se=a(161),ue=a(158),me=a(159),de=[{text:"About Me",icon:"fi-nnsuxx-home",linkTo:"/"},{text:"Commands",icon:"fi-cnluxx-pen",linkTo:"/commands"},{text:"Stream",icon:"fi-nnsuxx-twitch-glitch",linkTo:"/stream"}],he=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(u.a)(t).call(this,e))).state={selected:0},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"updateSelected",value:function(e,t){this.setState({selected:t})}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(le.a,null),r.a.createElement(ne.a,{position:"fixed",className:t.appBar},r.a.createElement(re.a,null)),r.a.createElement(te.a,{basename:"/Everything-Twitch"},r.a.createElement(oe.a,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper},anchor:"left"},r.a.createElement("span",{className:"Main-name"},"Mint Patty 17"),r.a.createElement(ce.a,{className:t.dividerColor}),r.a.createElement(ie.a,{disablePadding:!0},de.map((function(a,n){return r.a.createElement(se.a,{component:te.b,to:a.linkTo,classes:{root:t.menuItemRoot,selected:t.menuItemSelected},selected:n===e.state.selected,onClick:function(t){return e.updateSelected(t,n)}},r.a.createElement(ue.a,null,r.a.createElement("i",{className:a.icon,style:{color:"white"}})),r.a.createElement(me.a,{className:"Drawer-text"},a.text))})))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(ae.c,null,r.a.createElement(ae.a,{exact:!0,path:"/",component:X}),r.a.createElement(ae.a,{path:"/commands",component:w}),r.a.createElement(ae.a,{path:"/stream",component:C}),r.a.createElement(ae.a,{component:ee})))))}}]),t}(n.Component),pe=Object(L.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,backgroundColor:"black",borderBottom:"1px solid white"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,backgroundImage:"url("+h.a+")"},dividerColor:{backgroundColor:"white"},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default},menuItemRoot:{"&$menuItemSelected, &$menuItemSelected:focus, &$menuItemSelected:hover":{backgroundColor:"rgb(60,60,60)"}},menuItemSelected:{}}}))(he);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(pe,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},40:function(e,t){e.exports={apiKey:"2b19e9ac-9f31-44c5-ac10-02c6127fc63d",epicNickname:"Mint Patty 17 \u03a8",originName:"a_LethalMeatball"}},59:function(e,t,a){e.exports=a.p+"static/media/citi-field.b16487a2.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/fortnite.d8436339.jpg"},62:function(e,t,a){e.exports=a.p+"static/media/apex.d0d73426.jpg"},63:function(e,t,a){e.exports=a.p+"static/media/404-sad-face.64f4e1b7.png"},68:function(e,t,a){e.exports=a(101)},73:function(e,t,a){},74:function(e,t,a){},95:function(e,t,a){},98:function(e,t,a){}},[[68,1,2]]]);
//# sourceMappingURL=main.16ff1ee6.chunk.js.map