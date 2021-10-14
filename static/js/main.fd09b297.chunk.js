(this["webpackJsonpgoit-react-hw-03-image-finder"]=this["webpackJsonpgoit-react-hw-03-image-finder"]||[]).push([[0],{18:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(4),s=a.n(o),c=(a(18),a(9)),i=a.n(c),u=a(12),l=a(10),h=a(5),d=a(6),p=a(8),m=a(7),g=a(3),b=a(2),j=a.n(b),f=(a(22),a(1)),O=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:""},e.handleInputValueChange=function(t){e.setState({inputValue:t.currentTarget.value.toLowerCase()})},e.handleOnSubmit=function(t){if(t.preventDefault(),""===e.state.inputValue.trim())return g.b.error("Please enter keyword.");e.props.onSubmit(e.state.inputValue)},e}return Object(d.a)(a,[{key:"render",value:function(){return Object(f.jsxs)("header",{className:"Searchbar",children:[Object(f.jsx)("h1",{className:"Title",children:"Image Gallery"}),Object(f.jsxs)("form",{className:"SearchForm",onSubmit:this.handleOnSubmit,children:[Object(f.jsx)("input",{className:"SearchForm-input",type:"text",value:this.state.inputValue,onChange:this.handleInputValueChange,placeholder:"Search images and photos"}),Object(f.jsx)("button",{type:"submit",className:"SearchForm-button",children:Object(f.jsx)("span",{className:"SearchForm-button-label",children:"Search"})})]})]})}}]),a}(n.Component);O.proTotypes={onSubmit:j.a.func.isRequired};var v=function(e){var t=e.onToggle,a=e.images;return Object(f.jsx)(f.Fragment,{children:a.map((function(e){return Object(f.jsx)("li",{onClick:function(){return t(e.largeImageURL)},className:"ImageGalleryItem",children:Object(f.jsx)("img",{src:e.webformatURL,alt:e.tags[0],className:"ImageGalleryItem-image","data-largeimage":e.largeImageURL})},e.id)}))})},y=v;v.proTotypes={onToggle:j.a.func.isRequired,images:j.a.array.isRequired};var x=function(e){var t=e.images,a=e.onOpen;return Object(f.jsx)("ul",{className:"ImageGallery",children:Object(f.jsx)(y,{images:t,onToggle:a})})},w=x;function S(e){var t=e.onLoadMore;return Object(f.jsx)("button",{type:"button",className:"Button",onClick:t,children:"Load more"})}x.proTotypes={onOpen:j.a.func.isRequired,images:j.a.array.isRequired},S.proTotypes={onLoadMore:j.a.func.isRequired};var k=document.querySelector("#modal-root"),C=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={},e.handleKeyDown=function(t){"Escape"===t.code&&e.props.onClose(t)},e.handleBackdropClick=function(t){t.currentTarget===t.target&&e.props.onClose(t)},e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){window.addEventListener("keydown",this.handleKeyDown)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("keydown",this.handleKeyDown)}},{key:"render",value:function(){return Object(o.createPortal)(Object(f.jsx)("div",{className:"Overlay",onClick:this.handleBackdropClick,children:Object(f.jsx)("div",{className:"Modal",children:this.props.children})}),k)}}]),a}(n.Component),M=C;C.proTotypes={toggleModal:j.a.func.isRequired};var N=a(13),I=a.n(N);function T(){return Object(f.jsx)("div",{className:"loaderContainer",children:Object(f.jsx)(I.a,{type:"ThreeDots",color:"#000",height:50,width:50,timeout:3e3})})}function L(e){var t=e.message;return console.log("\u041e\u0448\u0438\u0431\u043a\u0430"),Object(f.jsx)("h3",{children:t})}Error.proTotypes={message:j.a.string.isRequired};var V=function(){var e=Object(l.a)(i.a.mark((function e(t,a){var n;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("https://pixabay.com/api/?key=10507999-623e060cae639baa9b9819f90&q=".concat(t,"&page=").concat(a,"&image_type=photo&orientation=horizontal&per_page=12")).then((function(e){return e.ok?e.json():Promise.reject({error:new Error("Your request ".concat(t," did not return any results"))})}));case 2:return n=e.sent,e.abrupt("return",n.hits);case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}(),q=function(e){Object(p.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(h.a)(this,a);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];return(e=t.call.apply(t,[this].concat(r))).state={inputValue:"",images:[],page:1,showModal:!1,error:null,status:"resolved"},e.handleSearchSubmit=function(t){console.log(t),e.setState({inputValue:t})},e.onLoadMore=function(t){e.setState((function(e){return{page:e.page+1}})),e.handleSearchSubmit(e.state.inputValue)},e.toggleModal=function(t){e.setState((function(e){return{showModal:!e.showModal}})),e.setState({largeImage:t})},e}return Object(d.a)(a,[{key:"componentDidUpdate",value:function(){var e=Object(l.a)(i.a.mark((function e(t,a){var n,r,o,s;return i.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(n=this.state,r=n.inputValue,o=n.page,a.inputValue===r&&a.page===o){e.next=19;break}return e.prev=2,this.setState({status:"pending"}),e.next=6,V(r,o);case 6:if(!((s=e.sent).length<1&&1!==o)){e.next=9;break}return e.abrupt("return",g.b.error("Sorry, that's all there is to your request. "));case 9:if(!(s.length<1)){e.next=11;break}return e.abrupt("return",g.b.error("Sorry, no results were found."));case 11:this.setState({status:"resolved"}),this.setState((function(e){return{images:[].concat(Object(u.a)(e.images),Object(u.a)(s))}})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.next=19;break;case 16:e.prev=16,e.t0=e.catch(2),this.setState({error:e.t0,status:"rejected"});case 19:case"end":return e.stop()}}),e,this,[[2,16]])})));return function(t,a){return e.apply(this,arguments)}}()},{key:"render",value:function(){var e=this.state,t=e.status,a=e.error,n=e.inputValue,r=e.showModal,o=e.largeImage,s=e.images;return Object(f.jsxs)("div",{className:"container",children:[Object(f.jsx)(O,{onSubmit:this.handleSearchSubmit}),"pending"===t&&Object(f.jsx)(T,{}),"rejected"===t&&Object(f.jsx)(L,{message:a.message}),Object(f.jsx)(w,{onOpen:this.toggleModal,images:s}),s.length>0&&Object(f.jsx)(S,{onLoadMore:this.onLoadMore}),r&&Object(f.jsx)(M,{onClose:this.toggleModal,children:Object(f.jsx)("img",{src:o,alt:n,className:"LargeImg"})}),Object(f.jsx)(g.a,{autoClose:2500})]})}}]),a}(n.Component);s.a.render(Object(f.jsx)(r.a.StrictMode,{children:Object(f.jsx)(q,{})}),document.getElementById("root"))}},[[42,1,2]]]);
//# sourceMappingURL=main.fd09b297.chunk.js.map