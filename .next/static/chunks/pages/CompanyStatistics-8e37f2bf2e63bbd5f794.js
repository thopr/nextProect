_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[29],{"4mzu":function(a,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/CompanyStatistics",function(){return s("DxOu")}])},DxOu:function(a,t,s){"use strict";s.r(t);var l=s("q1tI"),e=s.n(l),o=s("3Vrt"),c=s("UDbo"),n=s("oOAM"),i=(s("Aho5"),s("8lYe")),d=s("Aqy4"),r=s("On4J"),b=s("/s8U"),u=s("c7gn"),m=s("C2f+"),v=s("nOHt"),p=s("sZxp"),h=s.n(p),g=s("VtrM"),y=s("p46w"),x=s.n(y),w=e.a.createElement;t.default=Object(u.c)((function(){var a={legend:{labels:{fontColor:"white",fontSize:12}}},t=Object(l.useState)([]),s=t[0],p=t[1],y=Object(l.useState)([]),C=y[0],f=y[1],T=Object(l.useState)([]),A=T[0],F=T[1],O=Object(l.useState)([]),S=O[0],N=O[1],_=Object(v.useRouter)().query.name,j=Object(u.e)(),k=j.toggler,E=j.settoggler,B=j.loading,J=Object(m.a)(x.a.get("CompanyCode")),M=J.data,D=J.isLoading,z=(J.isError,!D&&M.data);console.log(z);var R,q=D||B,G=Object(l.useState)("branches"),I=G[0],P=G[1],U=Object(l.useState)(!0),V=U[0],X=U[1],Y=Object(l.useState)([]),H=Y[0],L=Y[1],Z=Object(l.useState)(),K=Z[0],Q=Z[1],W=Object(l.useState)(""),$=W[0],aa=W[1],ta=Object(l.useState)(),sa=ta[0],la=ta[1],ea=Object(l.useState)(),oa=ea[0],ca=(ea[1],Object(l.useState)(!1)),na=ca[0],ia=ca[1],da=Object(l.useState)(!1),ra=da[0],ba=da[1],ua=Object(l.useState)(""),ma=ua[0],va=ua[1];if(V&&z){va(z.Companys[0].company_name);var pa=z.Statistics.theYear;L(z.Statistics.All);var ha=pa.months;p({labels:["\u0627\u0644\u0645\u0631\u0633\u0644\u0629","\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629","\u0627\u0644\u0645\u0646\u062a\u0647\u064a\u0629 ","\u0627\u0644\u062c\u062f\u064a\u062f\u0629"],datasets:[{data:[pa.sentTotalCount,pa.usedTotalCount,pa.overTotalCount,pa.newTotalCount],backgroundColor:["#FF6384","#36A2EB","#FFCE56","#22936f"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#22936f"]}]}),f({labels:["\u0627\u0644\u0645\u0631\u0633\u0644\u0629","\u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629","\u0627\u0644\u0645\u0646\u062a\u0647\u064a\u0629 ","\u0627\u0644\u062c\u062f\u064a\u062f\u0629"],datasets:[{data:[pa.sentTotal,pa.usedTotal,pa.overTotal,pa.newTotal],backgroundColor:["#FF6384","#36A2EB","#FFCE56","#22936f"],hoverBackgroundColor:["#FF6384","#36A2EB","#FFCE56","#22936f"]}]}),F({labels:["\u064a\u0646\u0627\u064a\u0631","\u0641\u0628\u0631\u0627\u064a\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064a\u0644","\u0645\u0627\u064a\u0648","\u064a\u0648\u0646\u064a\u0648","\u064a\u0648\u0644\u064a\u0648","\u0623\u063a\u0633\u0637\u0633","\u0633\u0628\u062a\u0645\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062f\u064a\u0633\u0645\u0628\u0631"],datasets:[{label:"\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062a \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0629 \u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629",backgroundColor:"#42A5F5",data:[ha.JanuaryTotalCount,ha.FebruaryTotalCount,ha.MarchTotalCount,ha.AprilTotalCount,ha.MayTotalCount,ha.JuneTotalCount,ha.JulyTotalCount,ha.AugustTotalCount,ha.SeptemberTotalCount,ha.OctoberTotalCount,ha.NovemberTotalCount,ha.DecemberTotalCount]}]}),N({labels:["\u064a\u0646\u0627\u064a\u0631","\u0641\u0628\u0631\u0627\u064a\u0631","\u0645\u0627\u0631\u0633","\u0623\u0628\u0631\u064a\u0644","\u0645\u0627\u064a\u0648","\u064a\u0648\u0646\u064a\u0648","\u064a\u0648\u0644\u064a\u0648","\u0623\u063a\u0633\u0637\u0633","\u0633\u0628\u062a\u0645\u0628\u0631","\u0623\u0643\u062a\u0648\u0628\u0631","\u0646\u0648\u0641\u0645\u0628\u0631","\u062f\u064a\u0633\u0645\u0628\u0631"],datasets:[{label:"\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062a \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0629 \u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629",backgroundColor:"#42A5F5",data:[ha.JanuaryTotal,ha.FebruaryTotal,ha.MarchTotal,ha.AprilTotal,ha.MayTotal,ha.JuneTotal,ha.JulyTotal,ha.AugustTotal,ha.SeptemberTotal,ha.OctoberTotal,ha.NovemberTotal,ha.DecemberTotal]}]}),X(!1)}function ga(){ba(!1),ia(!1)}function ya(){Object(g.b)("rabwa/CompanysStatistic?name="+_),ba(!1),ia(!1)}return w(e.a.Fragment,null,w("body",{className:"rtl g-sidenav-show g-sidenav-pinned",dir:"rtl"},w("div",null,k?w(n.a,null):"",w("div",{className:"main-content",id:"panel"},w(e.a.Fragment,null,w("nav",{className:"navbar navbar-top navbar-expand navbar-dark bg-primary border-bottom"},w("a",{class:"nav-link",role:"button",href:"#","aria-haspopup":"true","aria-expanded":"false",style:{display:"block",zIndex:"99999999999999999",position:"relative",height:"40px",backgroundColor:"white",padding:"10px",marginRight:"10px"},onClick:function(){E(!k)}},w("i",{className:"ni ni-align-left-2"}))),w("div",{className:"header bg-primary pb-6"},"coubons"==I?w(e.a.Fragment,null,w("h1",{style:{textAlign:"center"}},ma+$)):"",z?"No_data"==z.Companys?w("div",{className:"row justify-content-center"},w("div",{className:" col "}," ")):w("div",{className:"row justify-content-center"},w("div",{className:" col "},(R=z.Companys,localStorage.CurrentCity="",w(e.a.Fragment,null,"branches"==I?w("div",null,w("h1",{style:{textAlign:"center"}},ma),w("div",{style:{clear:"both"}}),w("div",{class:"col-xl-12 col-md-12",style:{height:"50px"}}),R.map((function(a,t){return a.city==localStorage.CurrentCity?w(e.a.Fragment,null,w("div",{class:"col-xl-3 col-md-6",onClick:function(){Q(a.id),la(a.BracnhCode),P("coubons"),aa(" > "+a.branch_name)}},w("div",{class:"card card-stats"},w("div",{class:"card-body"},w("div",{class:"row"},w("div",{class:"col-auto"},w("div",{class:"icon icon-shape bg-gradient-primary text-white rounded-circle shadow"},w("i",{class:"ni ni-shop"}))),w("div",{class:"col"},w("span",{class:"h2 font-weight-bold mb-0"},a.branch_name),w("h5",{class:"card-title text-uppercase text-muted mb-0"},a.ShortDesc))))))):(localStorage.CurrentCity=a.city,w(e.a.Fragment,null,w("div",{class:"col-xl-12 col-md-12",style:{height:"50px",textAlign:"right"}}," ",w("h1",null,a.city)),w("div",{class:"col-xl-3 col-md-6",onClick:function(){Q(a.id),la(a.BracnhCode),aa(" > "+a.branch_name),P("coubons")}},w("div",{class:"card card-stats"},w("div",{class:"card-body"},w("div",{class:"row"},w("div",{class:"col-auto"},w("div",{class:"icon icon-shape bg-gradient-primary text-white rounded-circle shadow"},w("i",{class:"ni ni-shop"}))),w("div",{class:"col"},w("span",{class:"h2 font-weight-bold mb-0"},a.branch_name),w("h5",{class:"card-title text-uppercase text-muted mb-0"},a.ShortDesc))))))))}))," "):"coubons"==I?w(e.a.Fragment,null):"")))):"")),w("div",{className:"container-fluid mt--6"},"coubons"==I?w(e.a.Fragment,null,w(d.a,{branch_id:K,BracnhCode:sa,companyName:_,setChoose:function(a){P(a)}})):w("div",{className:"row justify-content-center"},w("div",{className:" col "},w("div",{className:"card"},w("div",{className:"card-header bg-transparent"}),z?w(e.a.Fragment,null,w("div",{style:{padding:25}},w("div",{class:"col-xl-12 col-md-12"},w("div",{class:""},w("div",{class:"card-body  rounded"},w("div",{class:"row"},w("div",{class:"col"},w("h1",{style:{textAlign:"center"}},"\u062c\u0645\u064a\u0639 \u0643\u0648\u0628\u0648\u0646\u0627\u062a ",ma)))))),w("div",{class:"row",dir:"rtl"},w("div",{class:"col-xl-3 col-md-3"},w("div",{class:"card card-stats"},w("div",{class:"card-body"},w("div",{class:"row"},w("div",{class:"col"},w("h5",{class:"card-title text-uppercase text-muted mb-0"},"\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062a \u0627\u0644\u0645\u0633\u062a\u062e\u062f\u0645\u0629"),w("span",{class:"h2  font-weight-bold mb-0"},H.usedTotalCountAll," \u0643\u0648\u0628\u0648\u0646"),w("br",null),w("span",{style:{color:"green"},class:"h3 font-weight-bold mb-0"},H.usedTotalAll," \u0631.\u0633")),w("div",{class:"col-auto"},w("div",{class:"icon icon-shape bg-gradient-danger text-white rounded-circle shadow"},w("i",{class:"ni ni-scissors"}))))))),w("div",{class:"col-xl-3 col-md-3"},w("div",{class:"card card-stats"},w("div",{class:"card-body"},w("div",{class:"row"},w("div",{class:"col"},w("h5",{class:"card-title text-uppercase text-muted mb-0"},"\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062a \u0627\u0644\u0645\u0631\u0633\u0644\u0629"),w("span",{class:"h2  font-weight-bold mb-0"},H.sentTotalCountAll," \u0643\u0648\u0628\u0648\u0646"),w("br",null),w("span",{style:{color:"green"},class:"h3 font-weight-bold mb-0"},H.sentTotalAll," \u0631.\u0633")),w("div",{class:"col-auto"},w("div",{class:"icon icon-shape bg-gradient-info text-white rounded-circle shadow"},w("i",{class:"ni ni-send"}))))))),w("div",{class:"col-xl-3 col-md-3"},w("div",{class:"card card-stats"},w("div",{class:"card-body"},w("div",{class:"row"},w("div",{class:"col"},w("h5",{class:"card-title text-uppercase text-muted mb-0"},"\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062a \u0627\u0644\u062c\u062f\u064a\u062f\u0629"),w("span",{class:"h2  font-weight-bold mb-0"},H.newTotalCountAll," \u0643\u0648\u0628\u0648\u0646"),w("br",null),w("span",{style:{color:"green"},class:"h3 font-weight-bold mb-0"},H.newTotalAll," \u0631.\u0633")),w("div",{class:"col-auto"},w("div",{class:"icon icon-shape bg-gradient-primary text-white rounded-circle shadow"},w("i",{class:"ni ni-tag"}))))))),w("div",{class:"col-xl-3 col-md-3"},w("div",{class:"card card-stats"},w("div",{class:"card-body"},w("div",{class:"row"},w("div",{class:"col"},w("h5",{class:"card-title text-uppercase text-muted mb-0"},"\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062a \u0627\u0644\u0645\u0646\u062a\u0647\u064a\u0629"),w("span",{class:"h2  font-weight-bold mb-0"},H.overTotalCountAll," \u0643\u0648\u0628\u0648\u0646"),w("br",null),w("span",{style:{color:"green"},class:"h3 font-weight-bold mb-0"},H.overTotalAll," \u0631.\u0633")),w("div",{class:"col-auto"},w("div",{class:"icon icon-shape bg-gradient-primary text-white rounded-circle shadow"},w("i",{class:"ni ni-tag"}))))))),w("div",{class:"col-xl-12 col-md-12"},w("div",{class:"card card-stats"},w("div",{class:"card-body"},w("div",{class:"row"},w("div",{class:"col"},w("h5",{class:"card-title text-uppercase text-muted mb-0"},"\u0645\u062c\u0645\u0648\u0639 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062a"),w("span",{class:"h2  font-weight-bold mb-0"},H.usedTotalCountAll+H.sentTotalCountAll+H.newTotalCountAll," ","\u0643\u0648\u0628\u0648\u0646"),w("br",null),w("span",{style:{color:"green"},class:"h3 font-weight-bold mb-0"},H.usedTotalAll+H.sentTotalAll+H.newTotalAll," ","\u0631.\u0633")),w("div",{class:"col-auto"},w("div",{class:"icon icon-shape bg-primary text-white rounded-circle shadow"},w("i",{class:"ni ni-chart-bar-32"}))))))))),w("div",{class:"col-xl-12 col-md-12"},w("div",{class:""},w("div",{class:"card-body  rounded"},w("div",{class:"row"},w("div",{class:"col"},w("h1",{style:{textAlign:"center"}},"\u0643\u0648\u0628\u0648\u0646\u0627\u062a \u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629")))))),w("div",{class:"row",dir:"rtl"},w("div",{class:"col-6"},w("div",{class:"nav-wrapper"},w("ul",{class:"nav nav-pills nav-fill flex-column flex-md-row",id:"tabs-icons-text",role:"tablist"},w("li",{class:"nav-item"},w("a",{class:"nav-link mb-sm-3 mb-md-0 active",id:"tabs-icons-text-1-tab","data-toggle":"tab",href:"#tabs-icons-text-1",role:"tab","aria-controls":"tabs-icons-text-1","aria-selected":"true"},w("i",{class:"ni ni-cloud-upload-96 mr-2"}),"\u0627\u0644\u0643\u0645\u064a\u0629")),w("li",{class:"nav-item"},w("a",{class:"nav-link mb-sm-3 mb-md-0",id:"tabs-icons-text-2-tab","data-toggle":"tab",href:"#tabs-icons-text-2",role:"tab","aria-controls":"tabs-icons-text-2","aria-selected":"false"},w("i",{class:"ni ni-bell-55 mr-2"})," \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0627\u0644\u0631\u064a\u0627\u0644")))),w("div",{class:"card card-stats"},w("div",{class:"card-body"},w("div",{class:"tab-content",id:"myTabContent"},w("div",{class:"tab-pane fade show active",id:"tabs-icons-text-1",role:"tabpanel","aria-labelledby":"tabs-icons-text-1-tab"},w(c.Bar,{data:A,options:{legend:{display:!1},barRoundness:.3,title:{display:!0,text:"\u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062a \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0629 \u0628\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629"}}})),w("div",{class:"tab-pane fade",id:"tabs-icons-text-2",role:"tabpanel","aria-labelledby":"tabs-icons-text-2-tab"},w(c.Bar,{data:S,options:{legend:{display:!1},barRoundness:.3,title:{display:!0,text:" \u0642\u064a\u0645\u0629 \u0627\u0644\u0643\u0648\u0628\u0648\u0646\u0627\u062a \u0627\u0644\u0645\u0635\u0631\u0648\u0641\u0629 \u0628\u0627\u0644\u0633\u0646\u0629 \u0627\u0644\u062d\u0627\u0644\u064a\u0629"}}})))))),w("div",{class:"col-6"},w("div",{class:"nav-wrapper"},w("ul",{class:"nav nav-pills nav-fill flex-column flex-md-row",id:"tabs-icons-text",role:"tablist"},w("li",{class:"nav-item"},w("a",{class:"nav-link mb-sm-3 mb-md-0 active",id:"tabs-icons-text-4-tab","data-toggle":"tab",href:"#tabs-icons-text-4",role:"tab","aria-controls":"tabs-icons-text-4","aria-selected":"true"},w("i",{class:"ni ni-cloud-upload-96 mr-2"}),"\u0627\u0644\u0643\u0645\u064a\u0629")),w("li",{class:"nav-item"},w("a",{class:"nav-link mb-sm-3 mb-md-0",id:"tabs-icons-text-3-tab","data-toggle":"tab",href:"#tabs-icons-text-3",role:"tab","aria-controls":"tabs-icons-text-3","aria-selected":"false"},w("i",{class:"ni ni-bell-55 mr-2"})," \u0627\u0644\u0642\u064a\u0645\u0629 \u0628\u0627\u0644\u0631\u064a\u0627\u0644")))),w("div",{class:"card card-stats",style:{backgroundColor:"rgb(23, 43, 77)"}}," ",w("div",{class:"card-body"},w("div",{class:"tab-content",id:"myTabContent"},w("div",{class:"tab-pane fade show active",id:"tabs-icons-text-4",role:"tabpanel","aria-labelledby":"tabs-icons-text-4-tab"},w(o.Chart,{type:"doughnut",data:s,options:a})),w("div",{class:"tab-pane fade",id:"tabs-icons-text-3",role:"tabpanel","aria-labelledby":"tabs-icons-text-3-tab"},w(o.Chart,{type:"doughnut",data:C,options:a})))))))," "):"",0==ra?w("div",{className:"card-body"}):w("div",{className:"card-body"}," ","branches"==I?0==na?w(r.a,{company_id:z.Companys[0].company_id,GoBackAndTriggerMutation:ya,changenewCompany:ga}):w(b.a,{company_id:z.Companys[0].company_id,GoBackAndTriggerMutation:ya,changenewCompany:ga,branch:oa}):"")))),w(i.a,null),q?w(h.a,{height:40,count:10}):"")))))}))}},[["4mzu",0,2,11,15,17,1,3,4,5,6,7,8,9,10,12,14,16,22]]]);