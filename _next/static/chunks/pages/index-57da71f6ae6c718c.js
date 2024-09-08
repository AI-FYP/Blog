(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(t,e,o){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return o(2396)}])},2396:function(t,e,o){"use strict";o.r(e),o.d(e,{default:function(){return O}});var a=o(5893),s=o(7294),i=o(1837),r=o(1163),n=o(382),l=o(2951),c=o(6722),d=o(3821),u=o(9203),h=o(4324),p=o(7580),x=o(5440),m=o(8046),g=o(6799),j=o(2021),f=o(4020),w=o(9262),v=o(5185);let Z=(0,w.ZP)(d.Z)(t=>{let{theme:e}=t;return{display:"flex",flexDirection:"column",padding:0,height:"100%",backgroundColor:e.palette.background.paper,"&:hover":{backgroundColor:"transparent",cursor:"pointer"},"&:focus-visible":{outline:"3px solid",outlineColor:"hsla(210, 98%, 48%, 0.5)",outlineOffset:"2px"}}}),b=(0,w.ZP)(u.Z)({display:"flex",flexDirection:"column",gap:4,padding:16,flexGrow:1,"&:last-child":{paddingBottom:16}}),y=(0,w.ZP)(m.Z)({display:"-webkit-box",WebkitBoxOrient:"vertical",WebkitLineClamp:2,overflow:"hidden",textOverflow:"ellipsis"});function C(t){let{authors:e,date:o}=t;return(0,a.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"center",justifyContent:"space-between",padding:"16px"},children:[(0,a.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"row",gap:1,alignItems:"center"},children:[(0,a.jsx)(l.Z,{max:3,children:e.map((t,e)=>(0,a.jsx)(n.Z,{alt:t.name,src:t.avatar,sx:{width:24,height:24}},e))}),(0,a.jsx)(m.Z,{variant:"caption",children:e.map(t=>t.name).join(", ")})]}),(0,a.jsx)(m.Z,{variant:"caption",children:o})]})}function W(t){let{setSearchQuery:e}=t;return(0,a.jsx)(g.Z,{sx:{width:{xs:"100%",md:"25ch"}},variant:"outlined",children:(0,a.jsx)(f.Z,{size:"small",id:"search",placeholder:"Search…",sx:{flexGrow:1},startAdornment:(0,a.jsx)(j.Z,{position:"start",sx:{color:"text.primary"},children:(0,a.jsx)(v.Z,{fontSize:"small"})}),inputProps:{"aria-label":"search"},onChange:t=>e&&e(t.target.value)})})}function A(t){let{data:e,searchQuery:o,setSearchQuery:s}=t,i=(0,r.useRouter)(),n=e.posts.filter(t=>t.title.toLowerCase().includes(o.toLowerCase())||t.description.toLowerCase().includes(o.toLowerCase()));return(0,a.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",gap:4},children:[(0,a.jsxs)("div",{children:[(0,a.jsx)(m.Z,{variant:"h1",gutterBottom:!0,children:"ALIF Blog"}),(0,a.jsx)(m.Z,{children:"Stay in the loop with the latest about ALIF."})]}),(0,a.jsx)(c.Z,{sx:{display:{xs:"flex",sm:"none"},flexDirection:"row",gap:1,width:{xs:"100%",md:"fit-content"},overflow:"auto"},children:(0,a.jsx)(W,{setSearchQuery:s})}),(0,a.jsxs)(c.Z,{sx:{display:"flex",flexDirection:{xs:"column-reverse",md:"row"},width:"100%",justifyContent:"space-between",alignItems:{xs:"start",md:"center"},gap:4,overflow:"auto"},children:[(0,a.jsx)(c.Z,{sx:{display:"inline-flex",flexDirection:"row",gap:3,overflow:"auto"},children:e.tags.map((t,e)=>(0,a.jsx)(p.Z,{onClick:()=>i.push(t.url),size:"medium",label:t.name},e))}),(0,a.jsx)(c.Z,{sx:{display:{xs:"none",sm:"flex"},flexDirection:"row",gap:1,width:{xs:"100%",md:"fit-content"},overflow:"auto"},children:(0,a.jsx)(W,{setSearchQuery:s})})]}),n.length>0&&(0,a.jsx)(x.Z,{container:!0,spacing:2,columns:12,children:n.map((t,e)=>(0,a.jsx)(x.Z,{size:{xs:12,md:6},children:(0,a.jsxs)(Z,{variant:"outlined",onClick:()=>window.location.href=t.url,tabIndex:0,children:[(0,a.jsx)(h.Z,{component:"img",alt:t.title,image:t.img,sx:{borderBottom:"1px solid",borderColor:"divider"}}),(0,a.jsxs)(b,{children:[(0,a.jsx)(m.Z,{gutterBottom:!0,variant:"caption",children:t.tag}),(0,a.jsx)(m.Z,{gutterBottom:!0,variant:"h6",children:t.title}),(0,a.jsx)(y,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:t.description})]}),(0,a.jsx)(C,{authors:t.authors,date:t.date})]})},e))})]})}var D=o(7243),I=JSON.parse('{"tags":[{"name":"Engineering","url":"/tag/engineering"},{"name":"Product","url":"/tag/product"},{"name":"Design","url":"/tag/design"},{"name":"Company","url":"/tag/company"}],"posts":[{"img":"https://picsum.photos/800/450?random=1","tag":"Engineering","title":"Welcome to the Blog","description":"This is the introduction to our blog, where we share insights on engineering and technology.","date":"2023-09-15","url":"/post/welcome-to-blog","authors":[{"name":"John Doe","avatar":"/static/images/avatar/1.jpg","url":"/author/john-doe"},{"name":"Robert","avatar":"/static/images/avatar/2.jpg","url":"/author/robert"}]},{"img":"https://picsum.photos/800/450?random=2","tag":"Product","title":"Product Introduction","description":"A deep dive into our latest product introduction.","date":"2023-09-10","url":"/post/product-introduction","authors":[{"name":"Robert","avatar":"/static/images/avatar/2.jpg","url":"/author/robert"}]}]}'),L=o(7574),P=o(386),k=o(3694),B=JSON.parse('[{"title":"Welcome to ALIF","date":"2024-09-10","authors":[{"name":"Abdullah Ahmad","avatar":"/assets/images/avatar/john-doe.jpg"}],"tags":["Introduction","Welcome"],"description":"Welcome to the new blog! We are excited to share updates and stories with you.","slug":"welcome-to-alif","url":"/welcome-to-alif"},{"title":"Our Mission","date":"2024-09-09","authors":[{"name":"Abdullah Ahmad","avatar":"/assets/images/avatar/john-doe.jpg"}],"tags":["Mission"],"description":"Our mission regarding ALIF project.","slug":"mission","url":"/mission"},{"title":"Test Post Two","date":"2024-09-09","authors":[{"name":"Abdullah Ahmad","avatar":"/assets/images/avatar/john-doe.jpg"}],"tags":["Introduction","Welcome"],"description":"Welcome to the new blog! We are excited to share updates and stories with you.","slug":"test-post-2","url":"/test-post-2"},{"title":"Test Post Three","date":"2024-09-09","authors":[{"name":"Abdullah Ahmad","avatar":"/assets/images/avatar/john-doe.jpg"}],"tags":["Introduction","Welcome"],"description":"Welcome to the new blog! We are excited to share updates and stories with you.","slug":"test-post-3","url":"/test-post-3"},{"title":"Test Post","date":"2024-09-09","authors":[{"name":"Abdullah Ahmad","avatar":"/assets/images/avatar/john-doe.jpg"}],"tags":["Introduction","Welcome"],"description":"Welcome to the new blog! We are excited to share updates and stories with you.","slug":"test-post","url":"/test-post"},{"title":"Product Introduction","date":"2023-09-10","slug":"product-introduction","url":"/product-introduction"}]');let S=(0,w.ZP)(m.Z)(()=>({position:"relative",textDecoration:"none","&:hover":{cursor:"pointer"},"& .arrow":{visibility:"hidden",position:"absolute",right:0,top:"50%",transform:"translateY(-50%)"},"&:hover .arrow":{visibility:"visible",opacity:.7}}));function _(t){let{authors:e}=t;return e&&0!==e.length?(0,a.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"row",gap:2,alignItems:"center"},children:[(0,a.jsx)(l.Z,{max:3,children:e.map((t,e)=>(0,a.jsx)(n.Z,{alt:t.name,src:t.avatar,sx:{width:24,height:24}},e))}),(0,a.jsx)(m.Z,{variant:"caption",children:e.map(t=>t.name).join(", ")})]}):null}function N(t){let{searchQuery:e}=t,o=(0,r.useRouter)(),[i,n]=(0,s.useState)([]),[l,d]=(0,s.useState)(1),[u,h]=(0,s.useState)(1);return(0,s.useEffect)(()=>{let t=B.filter(t=>t.title.toLowerCase().includes(e.toLowerCase())||t.description&&t.description.toLowerCase().includes(e.toLowerCase()));n(t.slice((u-1)*2,2*u)),d(Math.ceil(t.length/2))},[B,e,u]),(0,a.jsxs)("div",{children:[(0,a.jsx)(m.Z,{variant:"h2",gutterBottom:!0,children:"Latest"}),(0,a.jsx)(x.Z,{container:!0,spacing:8,columns:12,sx:{my:4},children:i.length>0?i.map((t,e)=>(0,a.jsx)(x.Z,{size:{xs:12,sm:6},children:(0,a.jsxs)(c.Z,{sx:{display:"flex",flexDirection:"column",gap:1,height:"100%"},children:[(0,a.jsx)(m.Z,{gutterBottom:!0,variant:"caption",children:t.tag}),(0,a.jsx)(L.Z,{href:"#",onClick:()=>o.push("/post/".concat(t.url)),children:(0,a.jsxs)(S,{gutterBottom:!0,variant:"h6",tabIndex:0,children:[t.title,(0,a.jsx)(k.Z,{className:"arrow",sx:{fontSize:"1rem"}})]})}),(0,a.jsx)(m.Z,{variant:"body2",color:"text.secondary",gutterBottom:!0,children:t.description}),(0,a.jsx)(_,{authors:t.authors})]})},e)):(0,a.jsxs)(m.Z,{children:['No posts found for "',e,'".']})}),l>1&&(0,a.jsx)(c.Z,{sx:{display:"flex",flexDirection:"row",pt:4},children:(0,a.jsx)(P.Z,{count:l,page:u,onChange:(t,e)=>{h(e)}})})]})}var O=()=>{let[t,e]=(0,s.useState)("");return(0,a.jsx)(i.Z,{children:(0,a.jsxs)(D.Z,{maxWidth:"lg",component:"main",sx:{display:"flex",flexDirection:"column",my:16,gap:10},children:[(0,a.jsx)(A,{data:I,searchQuery:t,setSearchQuery:e}),(0,a.jsx)(N,{searchQuery:t})]})})}}},function(t){t.O(0,[213,866,837,888,774,179],function(){return t(t.s=8312)}),_N_E=t.O()}]);