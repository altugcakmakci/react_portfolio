(this["webpackJsonp00-react-app"]=this["webpackJsonp00-react-app"]||[]).push([[0],{14:function(e,t,a){},15:function(e,t,a){},17:function(e,t,a){"use strict";a.r(t);var c=a(2),s=a(8),n=a.n(s),i=a(3),r=(a(7),a(1));var o=function(e){var t=e.currentPage,a=e.handlePageChange;return Object(r.jsxs)("ul",{className:"nav nav-tabs",children:[Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#about",onClick:function(){return a("About")},className:"About"===t?"nav-link active":"nav-link",children:"About me"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#portfolio",onClick:function(){return a("Portfolio")},className:"Portfolio"===t?"nav-link active":"nav-link",children:"Portfolio"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#contact",onClick:function(){return a("Contact")},className:"Contact"===t?"nav-link active":"nav-link",children:"Contact"})}),Object(r.jsx)("li",{className:"nav-item",children:Object(r.jsx)("a",{href:"#resume",onClick:function(){return a("Resume")},className:"Resume"===t?"nav-link active":"nav-link",children:"Resume"})})]})},l=a.p+"static/media/resume-image.5b3915db.jpeg";function m(e){var t=e.proficiencies;return Object(r.jsxs)("div",{className:"about",children:[Object(r.jsx)("h2",{children:"Resume"}),Object(r.jsx)("a",{href:"#",children:Object(r.jsx)("img",{src:l,className:"center",alt:"resume"})}),Object(r.jsx)("p",{children:" "}),Object(r.jsx)("h2",{className:"left",children:"Proficiencies"}),Object(r.jsx)("ul",{className:"list-group",children:t.map((function(e){return Object(r.jsx)("li",{className:"list-group-item center prof-list",children:e.name})}))})]})}var u=a.p+"static/media/altug.5962d062.jpg";function j(){return Object(r.jsxs)("div",{className:"about",children:[Object(r.jsx)("h2",{children:"About me!"}),Object(r.jsx)("img",{src:u,className:"center",alt:"Altug Cakmakci"}),Object(r.jsx)("p",{className:"center",children:"Hello! My name is Altug, and I am a Toronto based freelancer. I work remotely on projects for clients all over the world."}),Object(r.jsx)("p",{className:"center",children:"I have a diverse set of skills, ranging from design to HTML, CSS, javascript, java, Node, Express, JQuery, Bootstrap, SQL and to custom module development and project and product management."})]})}a(14);var b=a(4);function h(e){var t=e.projects;return Object(r.jsxs)("div",{className:"mywork",children:[Object(r.jsx)("h2",{children:"My Work"}),Object(r.jsx)("section",{className:"item-container",children:t.map((function(e){return Object(r.jsxs)("article",{className:e.classType,children:[Object(r.jsx)("h3",{children:e.name}),Object(r.jsx)("a",{href:e.link,children:Object(r.jsx)("img",{src:e.image,className:"center",alt:"Altug Cakmakci"})}),Object(r.jsxs)("a",{href:e.github,children:[Object(r.jsx)(b.a,{})," "]})]})}))})]})}a(15);var p=function(){var e=Object(c.useState)(""),t=Object(i.a)(e,2),a=t[0],s=t[1],n=Object(c.useState)(""),o=Object(i.a)(n,2),l=o[0],m=o[1],u=Object(c.useState)(""),j=Object(i.a)(u,2),b=j[0],h=j[1],p=Object(c.useState)(""),d=Object(i.a)(p,2),g=d[0],O=d[1],f=function(e){var t=e.target,a=t.name,c=t.value;"email"===a?s(c):"userName"===a?m(c):h(c)};return Object(r.jsxs)("div",{className:"contact",children:[Object(r.jsx)("h2",{children:"Let's talk about your next project!"}),Object(r.jsxs)("form",{className:"form contact-column",children:[Object(r.jsx)("div",{class:"row",children:Object(r.jsx)("input",{value:l,name:"userName",onChange:f,type:"text",placeholder:"Your name"})}),Object(r.jsx)("div",{class:"row",children:Object(r.jsx)("input",{value:a,name:"email",onChange:f,type:"email",placeholder:"Your e-mail"})}),Object(r.jsx)("div",{class:"row",children:Object(r.jsx)("textarea",{value:b,name:"userMessage",cols:"30",rows:"7",onChange:f,type:"userMessage",placeholder:"A brief description of your project."})}),Object(r.jsx)("div",{class:"row",children:Object(r.jsx)("button",{type:"button",onClick:function(e){e.preventDefault(),function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(a)?l?b?(m(""),h(""),s("")):O("Please enter your message!"):O("Please enter your name!"):O("Please enter a valid email adress!")},children:"Send message"})})]}),g&&Object(r.jsx)("div",{children:Object(r.jsx)("p",{className:"error-text",children:g})})]})},d=a(6);var g=function(){return Object(r.jsx)("div",{children:Object(r.jsxs)("footer",{children:[Object(r.jsx)("h3",{children:"Designed with care"}),Object(r.jsxs)("section",{class:"links",children:[Object(r.jsx)("a",{href:"https://github.com/altugcakmakci",children:Object(r.jsx)(b.a,{})}),Object(r.jsx)("a",{href:"https://ca.linkedin.com/in/altug-cakmakci-990a54a",children:Object(r.jsx)(d.b,{})}),Object(r.jsx)("a",{href:"https://www.facebook.com/altug.cakmakci",children:Object(r.jsx)(d.a,{})})]})]})})};function O(e){var t=e.projects,a=e.proficiencies,s=Object(c.useState)("About"),n=Object(i.a)(s,2),l=n[0],u=n[1];console.log(t);return Object(r.jsxs)("div",{children:[Object(r.jsx)(o,{currentPage:l,handlePageChange:function(e){return u(e)}}),"Resume"===l?Object(r.jsx)(m,{proficiencies:a}):"About"===l?Object(r.jsx)(j,{}):"Portfolio"===l?Object(r.jsx)(h,{projects:t}):Object(r.jsx)(p,{}),Object(r.jsx)(g,{})]})}var f=[{name:"Trip Expense Planner",link:"https://rta-trip-planner.herokuapp.com/",image:"https://user-images.githubusercontent.com/90043589/139721745-8a4379b1-328b-4e99-8ddb-b902b720a08e.png",classType:"item item-main",github:"https://github.com/romzzp/Trip-Expense-Planner.git"},{name:"Workout Tracker",link:"https://vast-reaches-84508.herokuapp.com/",image:"https://user-images.githubusercontent.com/90043589/141137832-6b273762-8379-4918-bae4-a2b2b24375ac.png",classType:"item",github:"https://github.com/altugcakmakci/workout_tracker.git"},{name:"Day Planner",link:"#",image:"https://user-images.githubusercontent.com/90043589/141991432-265e7ccf-32de-4f2a-95b9-ff0f3f04ff9a.png",classType:"item",github:"https://github.com/altugcakmakci/day_planner.git"},{name:"Weather Dashboard",link:"#",image:"https://user-images.githubusercontent.com/90043589/135177992-8e09ca2d-d43e-4f26-9f7e-62d24945a021.png",classType:"item",github:"https://github.com/altugcakmakci/weather_dashboard.git"},{name:"Tech Blog",link:"https://caa-techblog.herokuapp.com/",image:"https://user-images.githubusercontent.com/90043589/139152637-0aa2a0cf-abb3-43d9-8ab8-29ef4b3baa3f.png",classType:"item",github:"https://github.com/altugcakmakci/tech_blog.git"},{name:"Note Taker",link:"https://caa-notetaker.herokuapp.com/",image:"https://user-images.githubusercontent.com/90043589/139722827-688fca4c-6489-46ba-afcd-fb7a020ea9b3.png",classType:"item",github:"https://github.com/altugcakmakci/note_taker.git"},{name:"Movie Pal",lnk:"#",image:"https://user-images.githubusercontent.com/90043589/135674372-d8e2936e-7480-44a5-893a-9012fea9a6b2.png",classType:"item",github:"https://github.com/altugcakmakci/movie_pal.git"}],x=[{name:"JavaScript"},{name:"HTML"},{name:"CSS"},{name:"JQuery"},{name:"Bootstrap"},{name:"Node"},{name:"OOP"},{name:"SQL"},{name:"Express"},{name:"NoSQL"},{name:"MVC"},{name:"React"}],k=function(){return Object(r.jsx)(O,{projects:f,proficiencies:x})};a(16);n.a.render(Object(r.jsx)(k,{}),document.getElementById("root"))},7:function(e,t,a){}},[[17,1,2]]]);
//# sourceMappingURL=main.cbb03576.chunk.js.map