(this["webpackJsonpeverything-twitch"]=this["webpackJsonpeverything-twitch"]||[]).push([[0],{100:function(e,t,a){e.exports=a.p+"static/media/fortnite.d8436339.jpg"},101:function(e,t,a){e.exports=a.p+"static/media/apex.d0d73426.jpg"},103:function(e,t,a){e.exports=a.p+"static/media/404-sad-face.64f4e1b7.png"},108:function(e,t,a){e.exports=a(228)},113:function(e,t,a){},114:function(e,t,a){},134:function(e,t,a){},226:function(e,t,a){},228:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(7),l=a.n(o),i=(a(113),a(14)),s=a(10),c=a(18),u=a(19),m=a(20),d=(a(114),a(98)),h=a.n(d),p=a(271),f=a(275),b=a(274),v=a(268),g=a(272),y=a(273);function E(e,t){return{command:e,description:t}}var w=[E("!date","Tells the user what today's date is"),E("!followed","Tells the user when they followed my channel"),E("!followers","Gives the count of current channel followers"),E("!following","Gives the user how long the you've been following my channel"),E("!give <username> <number>","Allows the user to give another user channel points"),E("!headset","A description of my current gaming headset"),E("!keyboard","A description of my current gaming keyboard"),E("!mouse","A description of my current gaming mouse"),E("!nextsong","Tells the user what the next song in the queue is"),E("!recentfollowers","Tells the 3 most recent followers"),E("!song","Tells user what song is currently playing"),E("!specs","Tells the user what my PC specs are"),E("!stats","Gives stats about stream: Game, title, Uptime, viewers"),E("!time","Gives the current time"),E("!top5points","Top 5 users based on channel points"),E("!top5time","Top 5 users based on hours watched"),E("!uptime","How long the current stream has been live"),E("!yeet","A sound"),E("!sr <youtube url>","Allows users to play a song on stream"),E("!songrequest <youtube url>","Allows users to play a song on stream"),E("!commands","Gives user a link to a website with all the commands listed"),E("!fk","A sound for when Mint Patty dies"),E("f","A sound for when Mint Patty dies"),E("!win","A sound for when Mint Patty wins"),E("b","A sound for when Mint Patty gets a kill"),E("!kill","A sound for when Mint Patty gets a kill")];function k(){var e=0;return r.a.createElement(v.a,null,r.a.createElement(p.a,null,r.a.createElement(g.a,null,r.a.createElement(y.a,null,r.a.createElement(b.a,null,"Command"),r.a.createElement(b.a,null,"Description"))),r.a.createElement(f.a,null,w.map((function(t){return r.a.createElement(y.a,{key:e++},r.a.createElement(b.a,null,t.command),r.a.createElement(b.a,null,t.description))})))))}var x=a(99),j=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement(x.a,{channel:"mintpatty17",id:"mintpatty17",theme:"dark",muted:!0,onVideoPause:function(){return console.log(":(")},height:"100vh",width:"100%"}))}}]),t}(n.Component),O=a(63),T=a.n(O),S=(a(134),a(100)),M=a.n(S),C=a(101),N=a.n(C),A=a(53),D=a.n(A),P=a(276),I=a(277),W=a(278),G=a(279),F=a(289),R=a(31),B=a(5),K=a(50),$=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={recentMatchData:{labels:[],datasets:[{label:"Kills",backgroundColor:"rgba(115, 210, 255, 0.4)",borderColor:"rgba(0, 0, 255, 0.4)",lineTension:0,data:[]}]}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data;this.updateChartData(t)}},{key:"updateChartData",value:function(e){var t=this,a=this.state.recentMatchData;a.datasets[0].data=e?e.recentMatches.map((function(e){return{x:t.convertDate(e.dateCollected),y:e.kills}})):[],this.setState({recentMatchData:a})}},{key:"convertDate",value:function(e){e=new Date(e);var t=(new Date).getTimezoneOffset();return e.setMinutes(e.getMinutes()-t)}},{key:"render",value:function(){var e=this.state.recentMatchData;return r.a.createElement(K.a,{data:e,options:{title:{display:!0,text:"Recent Matches",fontSize:20},legend:{display:!0,position:"right"},scales:{xAxes:[{type:"time",time:{unit:"hour",displayFormats:{hour:"MMM D h:mm a"}},ticks:{source:"auto"}}]}}})}}]),t}(n.Component),z=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={seasonWins:{labels:[],datasets:[{label:"Wins",backgroundColor:"rgba(179, 12, 0, 0.4)",borderColor:"rgba(255, 0, 0, 0.4)",lineTension:0,data:[]}]}},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentWillReceiveProps",value:function(e){var t=e.data;this.updateChartData(t)}},{key:"updateChartData",value:function(e){var t=this.state.seasonWins;e&&(t.datasets[0].data=e.stats.filter((function(e){return e.metadata.key.includes("Wins")})).map((function(e){return{x:e.metadata.name,y:e.value}})),t.labels=t.datasets[0].data.map((function(e){return e.x})),this.setState({seasonWins:t}))}},{key:"render",value:function(){var e=this.state.seasonWins;return r.a.createElement(K.a,{data:e,options:{title:{display:!0,text:"Wins by Season",fontSize:20},legend:{display:!0,position:"right"},scales:{yAxes:[{ticks:{suggestedMin:0}}]},animation:{duration:3e3,easing:"linear"}}})}}]),t}(n.Component),L="https://cors-anywhere.herokuapp.com/",q=D.a.apiKey,H=D.a.epicNickname,J=D.a.originName,U=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={error:null,fortniteStats:null,apexStats:null},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){var e=this;Promise.all([this.retrieveFortniteTrackingInfo("profile/kbm/"+H),this.retrieveApexTrackingInfo("standard/profile/5/"+J)]).then((function(t){e.setState({fortniteStats:t[0].data,apexStats:t[1].data.data,error:null})}))}},{key:"retrieveFortniteTrackingInfo",value:function(e){var t=L+"https://api.fortnitetracker.com/v1/"+e,a={method:"GET",headers:{"TRN-Api-Key":q}};return T.a.get(t,a)}},{key:"retrieveApexTrackingInfo",value:function(e){var t=L+"https://public-api.tracker.gg/apex/v1/"+e,a={method:"GET",headers:{"TRN-Api-Key":q}};return T.a.get(t,a)}},{key:"render",value:function(){var e=this.props.classes,t=this.state,a=t.fortniteStats,n=t.apexStats;t.error;return r.a.createElement("div",null,r.a.createElement("header",{className:"aboutMeHeader"},"Mint Patty 17"),r.a.createElement("div",{className:"aboutMeBody"},r.a.createElement(P.a,{className:e.root},r.a.createElement(I.a,{avatar:r.a.createElement(F.a,{alt:"fortnite",src:M.a}),title:"Fortnite"}),r.a.createElement(W.a,null,r.a.createElement($,{data:a})),r.a.createElement(G.a,null,r.a.createElement(R.a,{variant:"body2",color:"textSecondary",component:"p"},"Total Fortnite Wins: ",a?a.lifeTimeStats[8].value:null,r.a.createElement("br",null),"Overall Fortnite K/D: ",a?a.lifeTimeStats[11].value:null))),r.a.createElement(P.a,{className:e.root},r.a.createElement(I.a,{avatar:r.a.createElement(F.a,{alt:"apex",src:N.a}),title:"Apex Legends"}),r.a.createElement(W.a,null,r.a.createElement(z,{data:n})),r.a.createElement(G.a,null,r.a.createElement(R.a,{variant:"body2",color:"textSecondary",component:"p"})))))}}]),t}(n.Component),V=Object(B.a)((function(e){return{root:{width:590,margin:"30px"},media:{height:0,paddingTop:"56.25%"}}}))(U),_=(a(226),a(103)),Q=a.n(_),X=function(e){function t(){return Object(i.a)(this,t),Object(c.a)(this,Object(u.a)(t).apply(this,arguments))}return Object(m.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"main-404"},r.a.createElement("div",{className:"title-404"},"404"),r.a.createElement("img",{src:Q.a,className:"sad-face-logo",alt:"Sad Face"}),r.a.createElement("br",null),r.a.createElement("div",{className:"body-404"},"Oops! That page must've gotten lost in the nethers...",r.a.createElement("br",null),"Try looking elsewhere padawan.")))}}]),t}(n.Component),Y=a(64),Z=a(6),ee=a(281),te=a(282),ae=a(287),ne=a(280),re=a(284),oe=a(283),le=a(288),ie=a(285),se=a(286),ce=[{text:"About Me",icon:"fi-nnsuxx-home",linkTo:"/"},{text:"Commands",icon:"fi-cnluxx-pen",linkTo:"/commands"},{text:"Stream",icon:"fi-nnsuxx-twitch-glitch",linkTo:"/stream"}],ue=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(c.a)(this,Object(u.a)(t).call(this,e))).state={selected:0},a}return Object(m.a)(t,e),Object(s.a)(t,[{key:"updateSelected",value:function(e,t){this.setState({selected:t})}},{key:"render",value:function(){var e=this,t=this.props.classes;return r.a.createElement("div",{className:t.root},r.a.createElement(ne.a,null),r.a.createElement(ee.a,{position:"fixed",className:t.appBar},r.a.createElement(te.a,null)),r.a.createElement(Y.a,{basename:"/Everything-Twitch"},r.a.createElement(ae.a,{className:t.drawer,variant:"permanent",classes:{paper:t.drawerPaper},anchor:"left"},r.a.createElement("span",{className:"Main-name"},"Mint Patty 17"),r.a.createElement(oe.a,{className:t.dividerColor}),r.a.createElement(re.a,{disablePadding:!0},ce.map((function(a,n){return r.a.createElement(le.a,{component:Y.b,to:a.linkTo,classes:{root:t.menuItemRoot,selected:t.menuItemSelected},selected:n===e.state.selected,onClick:function(t){return e.updateSelected(t,n)}},r.a.createElement(ie.a,null,r.a.createElement("i",{className:a.icon,style:{color:"white"}})),r.a.createElement(se.a,{className:"Drawer-text"},a.text))})))),r.a.createElement("main",{className:t.content},r.a.createElement("div",{className:t.toolbar}),r.a.createElement(Z.c,null,r.a.createElement(Z.a,{exact:!0,path:"/",component:V}),r.a.createElement(Z.a,{path:"/commands",component:k}),r.a.createElement(Z.a,{path:"/stream",component:j}),r.a.createElement(Z.a,{component:X})))))}}]),t}(n.Component),me=Object(B.a)((function(e){return{root:{display:"flex"},appBar:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,backgroundColor:"black",borderBottom:"1px solid white"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240,backgroundImage:"url("+h.a+")"},dividerColor:{backgroundColor:"white"},toolbar:e.mixins.toolbar,content:{flexGrow:1,backgroundColor:e.palette.background.default},menuItemRoot:{"&$menuItemSelected, &$menuItemSelected:focus, &$menuItemSelected:hover":{backgroundColor:"rgb(60,60,60)"}},menuItemSelected:{}}}))(ue);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(me,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},53:function(e,t){e.exports={apiKey:"2b19e9ac-9f31-44c5-ac10-02c6127fc63d",epicNickname:"MintPatty17.tv \u03a8",originName:"a_LethalMeatball"}},98:function(e,t,a){e.exports=a.p+"static/media/citi-field.b16487a2.jpg"}},[[108,1,2]]]);
//# sourceMappingURL=main.602c0046.chunk.js.map