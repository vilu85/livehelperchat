(window.webpackJsonpLHCReactAPP=window.webpackJsonpLHCReactAPP||[]).push([[3],{131:function(t,e,a){"use strict";a.r(e);var i,n=a(3),o=a.n(n),s=a(4),p=a.n(s),r=a(5),c=a.n(r),d=a(6),h=a.n(d),l=a(1),g=a.n(l),v=a(7),m=a.n(v),u=a(9),w=a.n(u),I=a(0),f=a.n(I),_=a(12),b=a(8),y=a(2),E=a(24),P=Object(_.b)((function(t){return{chatwidget:t.chatwidget}}))(i=function(t){function e(t){var a;return o()(this,e),a=c()(this,h()(e).call(this,t)),w()(g()(a),"state",{shown:!1}),a.hideInvitation=a.hideInvitation.bind(g()(a)),a.fullInvitation=a.fullInvitation.bind(g()(a)),a.setBotPayload=a.setBotPayload.bind(g()(a)),a}return m()(e,t),p()(e,[{key:"componentDidMount",value:function(){var t=this;y.a.sendMessageParent("showInvitation",[]),this.props.chatwidget.getIn(["proactive","data","play_sound"])&&y.a.emitEvent("play_sound",[{type:"new_invitation",sound_on:!0===this.props.chatwidget.getIn(["proactive","data","play_sound"]),widget_open:this.props.chatwidget.get("shown")&&"widget"==this.props.chatwidget.get("mode")||document.hasFocus()}]),document.getElementById("id-invitation-height")&&setTimeout((function(){y.a.sendMessageParent("widgetHeight",[{force_width:t.props.chatwidget.hasIn(["proactive","data","message_width"])?t.props.chatwidget.getIn(["proactive","data","message_width"])+40:240,force_height:document.getElementById("id-invitation-height").offsetHeight+30}]),t.setState({shown:!0})}),50)}},{key:"componentWillUnmount",value:function(){y.a.sendMessageParent("widgetHeight",[{reset_height:!0}])}},{key:"hideInvitation",value:function(t){this.props.dispatch(Object(b.f)()),t.preventDefault(),t.stopPropagation()}},{key:"fullInvitation",value:function(){y.a.sendMessageParentDirect("hideInvitation",[{full:!0}]),this.props.dispatch({type:"FULL_INVITATION"})}},{key:"setBotPayload",value:function(t){this.props.setBotPayload(t),this.fullInvitation()}},{key:"render",value:function(){var t=this;this.props.chatwidget.hasIn(["proactive","data","full_widget"])&&this.fullInvitation();var e="p-2 float-right pointer proactive-need-help";return!1===this.state.shown?e+=" invisible":e+=" fade-in",f.a.createElement("div",{id:"id-invitation-height"},this.props.chatwidget.hasIn(["proactive","data","close_above_msg"])&&f.a.createElement("button",{title:"Close",onClick:function(e){return t.hideInvitation(e)},id:"invitation-close-btn",className:"float-right btn btn-sm rounded"},f.a.createElement("i",{className:"material-icons mr-0"},"")),f.a.createElement("div",{className:e,id:"proactive-wrapper",style:{width:this.props.chatwidget.hasIn(["proactive","data","message_width"])?this.props.chatwidget.getIn(["proactive","data","message_width"]):200},onClick:this.fullInvitation},!this.props.chatwidget.hasIn(["proactive","data","close_above_msg"])&&f.a.createElement("button",{title:"Close",onClick:function(e){return t.hideInvitation(e)},id:"invitation-close-btn",className:"float-right btn btn-sm rounded"},f.a.createElement("i",{className:"material-icons mr-0"},"")),this.props.chatwidget.hasIn(["proactive","data","photo_left_column"])&&this.props.chatwidget.getIn(["proactive","data","photo"])&&f.a.createElement("div",{className:"d-flex"},f.a.createElement("div",{className:"proactive-image"},f.a.createElement("img",{width:"30",alt:this.props.chatwidget.getIn(["proactive","data","name_support"])||this.props.chatwidget.getIn(["proactive","data","extra_profile"]),title:this.props.chatwidget.getIn(["proactive","data","name_support"])||this.props.chatwidget.getIn(["proactive","data","extra_profile"]),className:"mr-2 rounded",src:this.props.chatwidget.getIn(["proactive","data","photo"])})),f.a.createElement("div",{className:"flex-grow-1"},!this.props.chatwidget.hasIn(["proactive","data","hide_op_name"])&&f.a.createElement("div",{className:"fs14"},f.a.createElement("b",null,this.props.chatwidget.getIn(["proactive","data","name_support"])||this.props.chatwidget.getIn(["proactive","data","extra_profile"]))),f.a.createElement("p",{className:"fs13 mb-0 inv-msg-cnt",dangerouslySetInnerHTML:{__html:this.props.chatwidget.getIn(["proactive","data","message"])}}),this.props.chatwidget.hasIn(["proactive","data","bot_intro"])&&f.a.createElement(E.a,{setBotPayload:this.setBotPayload,content:this.props.chatwidget.getIn(["proactive","data","message_full"])}))),(!this.props.chatwidget.hasIn(["proactive","data","photo_left_column"])||!this.props.chatwidget.getIn(["proactive","data","photo"]))&&f.a.createElement("div",null,f.a.createElement("div",{className:"fs14"},this.props.chatwidget.getIn(["proactive","data","photo"])&&f.a.createElement("img",{width:"30",alt:this.props.chatwidget.getIn(["proactive","data","name_support"])||this.props.chatwidget.getIn(["proactive","data","extra_profile"]),title:this.props.chatwidget.getIn(["proactive","data","name_support"])||this.props.chatwidget.getIn(["proactive","data","extra_profile"]),className:"mr-2 rounded",src:this.props.chatwidget.getIn(["proactive","data","photo"])}),!this.props.chatwidget.hasIn(["proactive","data","hide_op_name"])&&f.a.createElement("b",null,this.props.chatwidget.getIn(["proactive","data","name_support"])||this.props.chatwidget.getIn(["proactive","data","extra_profile"]))),f.a.createElement("p",{className:"fs13 mb-0 inv-msg-cnt",dangerouslySetInnerHTML:{__html:this.props.chatwidget.getIn(["proactive","data","message"])}}),this.props.chatwidget.hasIn(["proactive","data","bot_intro"])&&f.a.createElement(E.a,{setBotPayload:this.setBotPayload,content:this.props.chatwidget.getIn(["proactive","data","message_full"])}))))}}]),e}(I.Component))||i;e.default=P}}]);