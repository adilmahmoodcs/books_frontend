var ne=Object.defineProperty,oe=Object.defineProperties;var ie=Object.getOwnPropertyDescriptors;var A=Object.getOwnPropertySymbols;var S=Object.prototype.hasOwnProperty,v=Object.prototype.propertyIsEnumerable;var I=(r,t,n)=>t in r?ne(r,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):r[t]=n,C=(r,t)=>{for(var n in t||(t={}))S.call(t,n)&&I(r,n,t[n]);if(A)for(var n of A(t))v.call(t,n)&&I(r,n,t[n]);return r},T=(r,t)=>oe(r,ie(t));var D=(r,t)=>{var n={};for(var i in r)S.call(r,i)&&t.indexOf(i)<0&&(n[i]=r[i]);if(r!=null&&A)for(var i of A(r))t.indexOf(i)<0&&v.call(r,i)&&(n[i]=r[i]);return n};import{P as d,u as se,j as e,A as ae,T as W,a as c,g,b as B,r as y,C as le,c as a,d as de,B as ce,e as ue,L as N,f as P,t as h,D as he,h as u,i as L,k as O,l as R,m as pe,n as fe,o as H,p as _,q as j,s as z,v as F,w as b,x as me,O as be,y as ye,z as M,M as ge,E as ke,F as $,G as f,H as xe,I as Ae,J as Y,K as Ce,N as E,R as Be,Q as w,S as Te,U as we,V as Ie,W as Se,X as ve,Y as De,Z as Le,_ as Oe,$ as Re}from"./vendor.d29462b7.js";const $e=function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const o of s)if(o.type==="childList")for(const l of o.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&i(l)}).observe(document,{childList:!0,subtree:!0});function n(s){const o={};return s.integrity&&(o.integrity=s.integrity),s.referrerpolicy&&(o.referrerPolicy=s.referrerpolicy),s.crossorigin==="use-credentials"?o.credentials="include":s.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(s){if(s.ep)return;s.ep=!0;const o=n(s);fetch(s.href,o)}};$e();function q({position:r="static"}){const t=se();return e(ae,{position:r,sx:{zIndex:n=>n.zIndex.drawer+1},children:e(W,{children:e(c,{variant:"h6",noWrap:!0,onClick:()=>t("/"),to:"/",sx:{display:"block",cursor:"pointer"},children:"Books Collection"})})})}q.propTypes={position:d.string};const Ee=g`
  mutation CreateAuthor($author: AuthorCreateInput!) {
    authorCreate(input: $author) {
      author {
        id
        firstname
        surname
        dob
      }
    }
  }
`,Ge=g`
  mutation DeleteAuthor($authorId: AuthorDeleteInput!) {
    authorDelete(input: $authorId) {
      author {
        id
      }
    }
  }
`,We=g`
  mutation CreateBook($book: BookCreateInput!) {
    bookCreate(input: $book) {
      book {
        id
        title
      }
    }
  }
`,Ne=g`
  mutation DeleteBook($bookId: BookDeleteInput!) {
    bookDelete(input: $bookId) {
      book {
        id
      }
    }
  }
`;function Q({data:r}){const[t]=B(Ne,{refetchQueries:["GetAuthorById"]}),[n,i]=y.exports.useState(!1),s=async()=>{try{i(!0),await t({variables:{bookId:{id:r.id}}}),h.success("Book deleted successfully")}catch{h.error("Something went wrong")}finally{i(!1)}};return e(le,{sx:{minWidth:275},children:a(de,{children:[a(ce,{sx:{display:"flex",justifyContent:"space-between"},children:[e(c,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:r.genre}),e(c,{sx:{fontSize:14},color:"text.secondary",gutterBottom:!0,children:`Id: ${r.id}`})]}),e(c,{variant:"h5",component:"div",children:r.title}),e(c,{variant:"body2",children:`Published on: ${new Date(r.publishYear).getFullYear()}`}),e(ue,{children:e(N,{loading:n,loadingPosition:"start",startIcon:e(P,{}),variant:"outlined",color:"error",sx:{marginLeft:"auto"},onClick:s,children:"Delete"})})]})})}Q.propTypes={data:d.object};const G=240;function U(r){return a(he,{variant:"permanent",sx:{width:G,flexShrink:0,["& .MuiDrawer-paper"]:{width:G,boxSizing:"border-box"}},children:[e(W,{}),a(u,{sx:{overflow:"auto"},children:[e(L,{children:[].map((t,n)=>e(O,{button:!0,children:e(R,{primary:t})},t))}),e(pe,{}),e(L,{children:[].map((t,n)=>e(O,{button:!0,children:e(R,{primary:t})},t))})]})]})}U.propTypes={};const m=s=>{var o=s,{form:r,name:t,label:n}=o,i=D(o,["form","name","label"]);return e(fe,T(C({},i),{label:n,name:t,value:r.values[t],onChange:r.handleChange,error:r.touched[t]&&Boolean(r.errors[t]),helperText:r.touched[t]&&r.errors[t],variant:"standard",margin:"dense",InputLabelProps:{shrink:!0}}))};m.propTypes={form:d.object,name:d.string,label:d.string};function K({open:r,handleClose:t}){const[n]=B(Ee,{refetchQueries:["GetAuthors"]}),i=H({initialValues:{firstname:"",surname:"",dob:""},onSubmit:l=>s(l)}),s=async l=>{try{await n({variables:{author:{authorInput:C({},l)}}}),h.success("Author added successfully"),i.handleReset(),t()}catch(p){h.error("Oops, something went wrong!"),console.log({error:p})}},o=()=>{i.handleReset(),t()};return e(_,{open:r,onClose:o,children:a("form",{onSubmit:i.handleSubmit,children:[e(j,{children:"Add Author"}),a(z,{children:[e(m,{form:i,name:"firstname",label:"First Name",autoFocus:!0,fullWidth:!0}),e(m,{form:i,name:"surname",label:"Surname",fullWidth:!0}),e(m,{form:i,name:"dob",label:"Date of Birth",type:"date",fullWidth:!0})]}),a(F,{children:[e(b,{onClick:o,children:"Cancel"}),e(b,{type:"submit",children:"Add"})]})]})})}K.propTypes={open:d.bool,handleClose:d.func};function V({open:r,handleClose:t,authorId:n}){const[i]=B(We,{refetchQueries:["GetAuthorById"]}),s=H({initialValues:{title:"",genre:"",publishYear:""},onSubmit:p=>o(p)}),o=async p=>{try{await i({variables:{book:{bookInput:T(C({},p),{authorId:Number(n)})}}}),h.success("Author added successfully"),s.handleReset(),t()}catch(k){h.error("Oops, something went wrong!"),console.log({error:k})}},l=()=>{s.handleReset(),t()};return e(_,{open:r,onClose:l,children:a("form",{onSubmit:s.handleSubmit,children:[e(j,{children:"Add Book"}),a(z,{children:[e(m,{form:s,name:"title",label:"Book Title",autoFocus:!0,fullWidth:!0}),e(m,{form:s,name:"genre",label:"Genre",fullWidth:!0}),e(m,{form:s,name:"publishYear",label:"Publish Date",type:"date",fullWidth:!0})]}),a(F,{children:[e(b,{onClick:l,children:"Cancel"}),e(b,{type:"submit",children:"Add"})]})]})})}V.propTypes={open:d.bool,handleClose:d.func,authorId:d.string};function J(r){return a(u,{sx:{display:"flex"},children:[e(me,{}),e(q,{position:"fixed"}),e(U,{}),e(u,{component:"main",sx:{flexGrow:1,m:"100px 30px 0"},children:e(be,{})})]})}J.propTypes={};const Pe=g`
  query GetAuthors {
    authors {
      id
      firstname
      surname
      dob
    }
  }
`,He=r=>g`
  query GetAuthorById {
    author(id: ${r}) {
      firstname
      surname
      dob
      books {
        id
        title
        genre
        publishYear
      }
    }
  }
`,_e=["Author Id","First Name","Surname","Date of Birth","Books",""];function X({data:r=[]}){const[t]=B(Ge,{refetchQueries:["GetAuthors"]}),[n,i]=y.exports.useState(!1),s=async o=>{try{i(!0),await t({variables:{authorId:{id:o}}}),h.success("Author deleted successfully")}catch{h.error("Something went wrong")}finally{i(!1)}};return e(ye,{component:M,children:a(ge,{sx:{minWidth:650},"aria-label":"simple table",children:[e(ke,{children:e($,{children:_e.map(o=>e(f,{align:"center",children:o},o))})}),e(xe,{children:r.map(o=>a($,{sx:{"& .MuiTableCell-root":{textAlign:"center"}},children:[e(f,{children:o.id}),e(f,{children:o.firstname}),e(f,{children:o.surname}),e(f,{children:new Date(o.dob).toDateString()}),e(f,{sx:{},children:e(b,{variant:"outlined",LinkComponent:Ae,to:`/${o.id}/books`,children:"Books"})}),e(f,{align:"right",children:e(N,{loading:n,loadingPosition:"start",startIcon:e(P,{}),variant:"outlined",color:"error",sx:{marginLeft:"auto"},onClick:()=>s(o.id),children:"Delete"})})]},o.id))})]})})}X.propTypes={data:d.array};function Z(r){const{data:t,error:n,loading:i,refetch:s}=Y(Pe),[o,l]=y.exports.useState(!1);return i?e("p",{children:"Loading..."}):n?e("p",{children:"Error..."}):a(u,{sx:{},children:[a(u,{sx:{display:"flex",justifyContent:"space-between",alignItems:"center",mb:2},children:[e(c,{variant:"h5",sx:{mb:2},children:"Authors"}),e(b,{variant:"contained",onClick:()=>l(!0),children:"Add New Author"})]}),e(X,{data:t.authors}),e(K,{open:o,handleClose:()=>l(!1)})]})}Z.propTypes={};function ee({data:r,genres:t,onAddNewBookClick:n}){return a(M,{elevation:1,children:[a(u,{sx:{p:3,display:"flex",justifyContent:"space-between"},children:[a(u,{children:[e(c,{sx:{display:"inline",fontSize:20,fontWeight:"500"},children:"Author: "}),a(c,{sx:{display:"inline"},children:[r.author.firstname," ",r.author.surname]})]}),a(u,{children:[e(c,{sx:{display:"inline",fontSize:18,fontWeight:"500"},children:"Genres: "}),t.length===0&&e(c,{sx:{display:"inline"},children:"None"}),t.map((i,s)=>e(c,{sx:{display:"inline"},children:`${i}${s<t.length-1?", ":""}`},i))]})]}),a(u,{sx:{p:3,display:"flex",justifyContent:"space-between"},children:[a(u,{children:[e(c,{sx:{display:"inline",fontSize:18,fontWeight:"500"},children:"Total Books: "}),e(c,{sx:{display:"inline"},children:r.author.books.length})]}),e(u,{children:e(b,{variant:"contained",onClick:n,children:"Add New Book"})})]})]})}ee.propTypes={data:d.object,genres:d.array,onAddNewBookClick:d.func};function te(r){const{authorId:t}=Ce(),{data:n,error:i,loading:s}=Y(He(t)),[o,l]=y.exports.useState([]),[p,k]=y.exports.useState(!1);return y.exports.useEffect(()=>{if(n){const x=[...new Set(n.author.books.map(re=>re.genre))];l(x)}},[n]),s||i?null:a("div",{children:[e(ee,{data:n,genres:o,onAddNewBookClick:()=>k(!0)}),e(E,{container:!0,spacing:3,sx:{mt:2},children:n.author.books.map(x=>e(E,{item:!0,lg:3,children:e(Q,{data:x})},x.id))}),e(V,{open:p,handleClose:()=>k(!1),authorId:t})]})}te.propTypes={};function je(){return e(Be,{children:a(w,{path:"/",element:e(J,{}),children:[e(w,{path:"/",element:e(Z,{})}),e(w,{path:"/:authorId/books",element:e(te,{})})]})})}const ze=new Te({link:new we({uri:"https://books-test-task.herokuapp.com/graphql",fetch:Ie}),cache:new Se});function Fe(){return e(ve,{client:ze,children:a(De,{children:[e(je,{}),e(Le,{})]})})}Oe.render(e(Re.StrictMode,{children:e(Fe,{})}),document.getElementById("root"));
