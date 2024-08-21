"use strict";(self.webpackChunkcarbondesignsystem=self.webpackChunkcarbondesignsystem||[]).push([[523994],{366192:function(e,t,n){n.r(t),n.d(t,{_frontmatter:function(){return s},default:function(){return T}});var a=n(145987),i=(n(667294),n(603905)),o=n(503624),r=n(696659);const l=["components"],s={},m=e=>function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),(0,i.kt)("div",t)},d=m("PageDescription"),p=m("AnchorLinks"),u=m("AnchorLink"),c=m("Video"),k=m("Tabs"),g=m("Row"),h=m("Column"),b=m("DoDontRow"),N=m("DoDont"),y=m("ResourceCard"),v=m("MdxIcon"),f={_frontmatter:s},x=o.Z;function T(e){let{components:t}=e,n=(0,a.Z)(e,l);return(0,i.kt)(x,Object.assign({},f,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)(d,{mdxType:"PageDescription"},(0,i.kt)("p",null,"Motion can bring the screen to life, guide users through complex experiences,\nand help move them forward—from here to there, now to next, start to finish—and\nmake progress.")),(0,i.kt)(p,{mdxType:"AnchorLinks"},(0,i.kt)(u,{mdxType:"AnchorLink"},"Carbon in motion"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Style"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Easing"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Duration"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Implementation"),(0,i.kt)(u,{mdxType:"AnchorLink"},"Resources")),(0,i.kt)(c,{title:"Motion Overview",vimeoId:"281513709",mdxType:"Video"}),(0,i.kt)("h2",null,"Carbon in motion"),(0,i.kt)("p",null,(0,i.kt)("a",{parentName:"p",href:"../../components/overview/"},"Carbon components")," have motion built in for\nmicrointeractions. However, the motion design of the overarching UI — that is,\nhow the components interact with each other and enter and exit the page itself —\nis up to each product team to implement. Use this guidance to customize,\ncombine, coordinate, and choreograph this aspect of motion in the UI."),(0,i.kt)("h2",null,"Style"),(0,i.kt)("p",null,"Carbon recognizes different types of moments in users’ experience and offers two\nstyles of motion—",(0,i.kt)("em",{parentName:"p"},"productive")," motion, and ",(0,i.kt)("em",{parentName:"p"},"expressive")," motion. The motion curves\nare designed to reflect the duality of man and machine."),(0,i.kt)("p",null,"Productivity and expression are both essential to an interface. Reserve\nexpressive motion for occasional, important moments, to better capture the\nuser’s attention and offer a rhythmic break to the productive experience."),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(r.OK9,{label:"Curves",mdxType:"Tab"},(0,i.kt)(g,{mdxType:"Row"},(0,i.kt)(h,{colSm:6,colMd:4,colLg:6,mdxType:"Column"},(0,i.kt)("p",{className:"tab--columns_label"}," Productive "),(0,i.kt)("img",{src:"/88eb36164b01911cdfbbfcadf25d450c/Motion_overview_Curves_productive.svg",alt:"Curve graphs representing differences between productive and expressive animation curves"})),(0,i.kt)(h,{colSm:6,colMd:4,colLg:6,mdxType:"Column"},(0,i.kt)("p",{className:"tab--columns_label"},"Expressive"),(0,i.kt)("img",{src:"/dc374d592da23460cf0079bb133577d6/Motion_overview_Curves_expressive.svg",alt:"Curve graphs representing differences between productive and expressive animation curves"})))),(0,i.kt)(r.OK9,{label:"Abstract",mdxType:"Tab"},(0,i.kt)(c,{title:"Style Abstract",vimeoId:"310583009",mdxType:"Video"})),(0,i.kt)(r.OK9,{label:"In-situ",mdxType:"Tab"},(0,i.kt)(c,{title:"Style In-situ",vimeoId:"310583036",mdxType:"Video"}))),(0,i.kt)("h3",null,"Productive motion"),(0,i.kt)("p",null,"Productive motion creates a sense of efficiency and responsiveness, while\nremaining subtle and out of the way. Productive motion is appropriate for\nmoments when the user needs to focus on completing tasks. Microinteractions in\nCarbon such as button states, dropdowns, revealing additional information, or\nrendering data tables and visualizations were all designed with productive\nmotion."),(0,i.kt)("h3",null,"Expressive motion"),(0,i.kt)("p",null,"Expressive motion delivers enthusiastic, vibrant, and highly visible movement.\nUse expressive motion for significant moments such as opening a new page,\nclicking the primary action button, or when the movement itself conveys a\nmeaning. System alerts and the appearance of notification boxes are great cases\nfor expressive motion."),(0,i.kt)(b,{mdxType:"DoDontRow"},(0,i.kt)(N,{type:"do",colLg:12,colMd:8,fullWidth:!0,caption:"Productive moments are labeled in blue, and expressive moments are labeled in magenta.",mdxType:"DoDont"},(0,i.kt)(c,{title:"Expressive motion",vimeoId:"310583077",mdxType:"Video"}))),(0,i.kt)("h2",null,"Easing"),(0,i.kt)("p",null,"Strictly linear movement appears unnatural to the human eye. Elements on the\nscreen should speed up quickly and slow down smoothly, obeying the physics of a\nlight-weight material. “Easing curves” describe the precise amount of\naccelerations in motion. We commonly use one of these three types of easing."),(0,i.kt)(b,{mdxType:"DoDontRow"},(0,i.kt)(N,{type:"do",colLg:12,colMd:8,fullWidth:!0,caption:"Elements on the screen speed up quickly and slow down smoothly, obeying the physics of a light-weight material.",mdxType:"DoDont"},(0,i.kt)(c,{title:"Erasing",vimeoId:"310582370",mdxType:"Video"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,"Avoid easing curves that are unnatural, distracting, or purely decorative. IBM\nmotion is essential and efficient, guiding users to value as quickly as\npossible."),(0,i.kt)(b,{mdxType:"DoDontRow"},(0,i.kt)(N,{colLg:12,colMd:8,type:"dont",fullWidth:!0,caption:"Do not use easing curves that suggest bounce, stretch, or sudden stops.",mdxType:"DoDont"},(0,i.kt)(c,{title:"avoid easing curves",vimeoId:"310582418",mdxType:"Video"}))),(0,i.kt)("h3",null,"Standard easing"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"standard-easing")," when an element is visible from the beginning to the end\nof a motion. Expanding tiles and the sorting of table rows are good examples."),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(r.OK9,{label:"Curves",mdxType:"Tab"},(0,i.kt)("div",null,(0,i.kt)(c,{title:"Standard easing curves 01",vimeoId:"310582611",mdxType:"Video"}))),(0,i.kt)(r.OK9,{label:"Examples",mdxType:"Tab"},(0,i.kt)("div",null,(0,i.kt)(c,{title:"Standard easing examples 01",vimeoId:"310582667",mdxType:"Video"})))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Style"),(0,i.kt)("th",{parentName:"tr",align:null},"IBM Motion package"),(0,i.kt)("th",{parentName:"tr",align:null},"CSS"),(0,i.kt)("th",{parentName:"tr",align:null},"After Effects"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Productive"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"motion(standard, productive)")),(0,i.kt)("td",{parentName:"tr",align:null},"cubic-bezier(0.2, 0, 0.38, 0.9)"),(0,i.kt)("td",{parentName:"tr",align:null},"outgoing 20%, incoming 62%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Expressive"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"motion(standard, expressive)")),(0,i.kt)("td",{parentName:"tr",align:null},"cubic-bezier(0.4, 0.14, 0.3, 1)"),(0,i.kt)("td",{parentName:"tr",align:null},"outgoing 40%, incoming 70%")))),(0,i.kt)("h3",null,"Entrance easing"),(0,i.kt)("p",null,"With this style, an element quickly appears and slows down to a stop. Use\n",(0,i.kt)("inlineCode",{parentName:"p"},"entrance-ease")," when adding elements to the view, such as a modal or toaster\nappearing. Elements moving in response to the user’s input, such as a dropdown\nopening or toggle switching should also use this style."),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(r.OK9,{label:"Curves",mdxType:"Tab"},(0,i.kt)("div",null,(0,i.kt)(c,{title:"Standard easing curves 02",vimeoId:"310582467",mdxType:"Video"}))),(0,i.kt)(r.OK9,{label:"Examples",mdxType:"Tab"},(0,i.kt)("div",null,(0,i.kt)(c,{title:"Standard easing examples 02",vimeoId:"310582503",mdxType:"Video"})))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Style"),(0,i.kt)("th",{parentName:"tr",align:null},"IBM Motion package"),(0,i.kt)("th",{parentName:"tr",align:null},"CSS"),(0,i.kt)("th",{parentName:"tr",align:null},"After Effects"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Productive"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"motion(entrance, productive)")),(0,i.kt)("td",{parentName:"tr",align:null},"cubic-bezier(0, 0, 0.38, 0.9)"),(0,i.kt)("td",{parentName:"tr",align:null},"outgoing 0%, incoming 62%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Expressive"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"motion(entrance, expressive)")),(0,i.kt)("td",{parentName:"tr",align:null},"cubic-bezier(0, 0, 0.3, 1)"),(0,i.kt)("td",{parentName:"tr",align:null},"outgoing 0%, incoming 70%")))),(0,i.kt)("h3",null,"Exit easing"),(0,i.kt)("p",null,"Use ",(0,i.kt)("inlineCode",{parentName:"p"},"exit-easing")," when removing elements from view, such as closing a modal or\ntoaster. The element speeds up as it exits from view, implying that its\ndeparture from the screen is permanent."),(0,i.kt)("p",null,"An exception to exits: if an element leaves the view but stays nearby, ready to\nreappear upon user action, use standard easing instead. A good example of this\nis a side panel. The panel leaves the view, but slows down as it exits, implying\nthat it would come to rest just outside the view, and ready to be recalled."),(0,i.kt)(k,{mdxType:"Tabs"},(0,i.kt)(r.OK9,{label:"Curves",mdxType:"Tab"},(0,i.kt)("div",null,(0,i.kt)(c,{title:"Standard easing curves 03",vimeoId:"310582530",mdxType:"Video"}))),(0,i.kt)(r.OK9,{label:"Examples",mdxType:"Tab"},(0,i.kt)("div",null,(0,i.kt)(c,{title:"Standard easing examples 03",vimeoId:"310582574",mdxType:"Video"})))),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Style"),(0,i.kt)("th",{parentName:"tr",align:null},"IBM motion package"),(0,i.kt)("th",{parentName:"tr",align:null},"CSS"),(0,i.kt)("th",{parentName:"tr",align:null},"After Effects"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Productive"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"motion(exit, productive)")),(0,i.kt)("td",{parentName:"tr",align:null},"cubic-bezier(0.2, 0, 1, 0.9)"),(0,i.kt)("td",{parentName:"tr",align:null},"outgoing 20%, incoming 0%")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Expressive"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"motion(exit, expressive)")),(0,i.kt)("td",{parentName:"tr",align:null},"cubic-bezier(0.4, 0.14, 1, 1)"),(0,i.kt)("td",{parentName:"tr",align:null},"outgoing 40%, incoming 0%")))),(0,i.kt)("h3",null,"Summary on easing"),(0,i.kt)("p",null,"The\n",(0,i.kt)("a",{parentName:"p",href:"https://github.com/carbon-design-system/carbon/tree/v10/packages/motion"},"IBM motion package"),"\nhas the easing curves stored for fast access. This is the recommended method to\ncall an easing curve and stay connected to receive any future updates."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Easing curve"),(0,i.kt)("th",{parentName:"tr",align:null},"Productive"),(0,i.kt)("th",{parentName:"tr",align:null},"Expressive"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Standard easing"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"motion(standard, productive)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"motion(standard, expressive)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Entrance easing"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"motion(entrance, productive)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"motion(entrance, expressive)"))),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Exit easing"),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"motion(exit, productive)")),(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"motion(exit, expressive)"))))),(0,i.kt)("p",null,"If you are unable to use the above method, cubic-bezier curve notation is the\nstandard way to express easing curves."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Easing curve"),(0,i.kt)("th",{parentName:"tr",align:null},"Productive"),(0,i.kt)("th",{parentName:"tr",align:null},"Expressive"))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Standard easing"),(0,i.kt)("td",{parentName:"tr",align:null},"cubic-bezier(0.2, 0, 0.38, 0.9)"),(0,i.kt)("td",{parentName:"tr",align:null},"cubic-bezier(0.4, 0.14, 0.3, 1)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Entrance easing"),(0,i.kt)("td",{parentName:"tr",align:null},"cubic-bezier(0, 0, 0.38, 0.9)"),(0,i.kt)("td",{parentName:"tr",align:null},"cubic-bezier(0, 0, 0.3, 1)")),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},"Exit easing"),(0,i.kt)("td",{parentName:"tr",align:null},"cubic-bezier(0.2, 0, 1, 0.9)"),(0,i.kt)("td",{parentName:"tr",align:null},"cubic-bezier(0.4, 0.14, 1, 1)")))),(0,i.kt)("h2",null,"Duration"),(0,i.kt)("p",null,"Duration is calculated based on the style and size of the motion. Among the two\nmotion styles, productive motion is significantly faster than expressive motion.\nMotion’s duration should be dynamic based on the size of the animation; the\nlarger the change in distance (traveled) or size (scaling) of the element, the\nlonger the animation takes."),(0,i.kt)(b,{mdxType:"DoDontRow"},(0,i.kt)(N,{type:"do",colLg:8,colMd:8,caption:"Duration contrast between a taller and a shorter component.",mdxType:"DoDont"},(0,i.kt)(c,{title:"Duration",vimeoId:"310582312",mdxType:"Video"}))),(0,i.kt)("br",null),(0,i.kt)("p",null,"When custom duration is possible, please use the\n",(0,i.kt)("a",{parentName:"p",href:"https://ibm.github.io/motion/"},"Motion Generator")," to get the customized duration\ncalculated for your element. Carbon uses a non-linear duration scale to achieve\nbetter perceived consistency across all distances."),(0,i.kt)(g,{className:"resource-card-group",mdxType:"Row"},(0,i.kt)(h,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,i.kt)(y,{subTitle:"Motion Generator",href:"https://ibm.github.io/motion/",mdxType:"ResourceCard"}))),(0,i.kt)("br",null),(0,i.kt)("h3",null,"Duration tokens"),(0,i.kt)("p",null,"Dynamic duration is an upcoming built-in feature for Carbon components and a\npart of the motion package. Currently, there are six static value tokens for\neasier implementation."),(0,i.kt)("table",null,(0,i.kt)("thead",{parentName:"table"},(0,i.kt)("tr",{parentName:"thead"},(0,i.kt)("th",{parentName:"tr",align:null},"Token"),(0,i.kt)("th",{parentName:"tr",align:null},"Usage"),(0,i.kt)("th",{parentName:"tr",align:null},"Value"),(0,i.kt)("th",{parentName:"tr",align:null}))),(0,i.kt)("tbody",{parentName:"table"},(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"duration-fast-01")),(0,i.kt)("td",{parentName:"tr",align:null},"Micro-interactions such as button and toggle"),(0,i.kt)("td",{parentName:"tr",align:null},"70ms"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"duration-fast-02")),(0,i.kt)("td",{parentName:"tr",align:null},"Micro-interactions such as fade"),(0,i.kt)("td",{parentName:"tr",align:null},"110ms"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"duration-moderate-01")),(0,i.kt)("td",{parentName:"tr",align:null},"Micro-interactions, small expansion, short distance movements"),(0,i.kt)("td",{parentName:"tr",align:null},"150ms"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"duration-moderate-02")),(0,i.kt)("td",{parentName:"tr",align:null},"Expansion, system communication, toast"),(0,i.kt)("td",{parentName:"tr",align:null},"240ms"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"duration-slow-01")),(0,i.kt)("td",{parentName:"tr",align:null},"Large expansion, important system notifications"),(0,i.kt)("td",{parentName:"tr",align:null},"400ms"),(0,i.kt)("td",{parentName:"tr",align:null})),(0,i.kt)("tr",{parentName:"tbody"},(0,i.kt)("td",{parentName:"tr",align:null},(0,i.kt)("inlineCode",{parentName:"td"},"duration-slow-02")),(0,i.kt)("td",{parentName:"tr",align:null},"Background dimming"),(0,i.kt)("td",{parentName:"tr",align:null},"700ms"),(0,i.kt)("td",{parentName:"tr",align:null})))),(0,i.kt)("h2",null,"Implementation"),(0,i.kt)("h3",null,"Motion design strategy"),(0,i.kt)("p",null,"Follow these steps to assess your interface for purposeful motion:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Define the goals and values of the product."),(0,i.kt)("li",{parentName:"ol"},"Establish information hierarchy within the view."),(0,i.kt)("li",{parentName:"ol"},"Identify the journey you will guide users through."),(0,i.kt)("li",{parentName:"ol"},"Identify key moments and opportunities for UI motion in the journey.\nExamples:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Give feedback, such as hover states and active state component behaviors\nlike opening a dropdown menu"),(0,i.kt)("li",{parentName:"ul"},"Solutions to a UX need, such as reducing cognitive load with progressive\ndisclosure"),(0,i.kt)("li",{parentName:"ul"},"Providing guidance, such as revealing a call to action to draw users’\nattention"))),(0,i.kt)("li",{parentName:"ol"},"Assign or determine either productive or expressive motion"),(0,i.kt)("li",{parentName:"ol"},"Prototype and test")),(0,i.kt)("h3",null,"Evaluation checklist"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"Is your motion purposeful?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"What problem is motion solving?"),(0,i.kt)("li",{parentName:"ul"},"Does it enhance the user’s understanding of an action?"))),(0,i.kt)("li",{parentName:"ol"},"Is your motion responsive?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Do user actions receive immediate feedback that’s seen and felt?"),(0,i.kt)("li",{parentName:"ul"},"Do micro-interactions use ",(0,i.kt)("inlineCode",{parentName:"li"},"ease-out")," on user input?"),(0,i.kt)("li",{parentName:"ul"},"Do micro-interactions fall within a static duration ranging from 90–120 ms?"),(0,i.kt)("li",{parentName:"ul"},"If there are large, or full screen, transitions in your product, are there\ncontinuous elements in your transition to guide the user?"))),(0,i.kt)("li",{parentName:"ol"},"Is your motion meticulous?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"Did you use the appropriate easing curves?"),(0,i.kt)("li",{parentName:"ul"},"Is each motion individually considered?"),(0,i.kt)("li",{parentName:"ul"},"Do related movements have a unified relationship with each other?"),(0,i.kt)("li",{parentName:"ul"},"Is the motion effective across all screen sizes? Keep in mind that on\nmobile screens, subtle motions may be easily missed."))),(0,i.kt)("li",{parentName:"ol"},"Is your motion unobtrusive?",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"The best interface motion may go unnoticed, because it often keeps users\nengaged with their tasks. Is your motion frequently noticed by average\nusers? If so, consider removing or minimizing it.")))),(0,i.kt)("h3",null,"Adaptive interface motion design"),(0,i.kt)("p",null,"A large population of users exist with impaired vision or impaired ability to\nperceive and handle motion in UI. In addition, not all devices are powerful\nenough to smoothly perform all the motion you would like, no matter how\nessential the motion design is. Always provide alternatives for interface state\ntransitions. Consider simplified or reduced motion designs for mobile and\ntablet. Make sure there is always a way to communicate similar messages\nstatically."),(0,i.kt)("h2",null,"Resources"),(0,i.kt)(g,{className:"resource-card-group",mdxType:"Row"},(0,i.kt)(h,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,i.kt)(y,{subTitle:"IBM Motion Generator",href:"https://ibm.github.io/motion/",mdxType:"ResourceCard"},(0,i.kt)(v,{name:"bee",mdxType:"MdxIcon"}))),(0,i.kt)(h,{colMd:4,colLg:4,noGutterSm:!0,mdxType:"Column"},(0,i.kt)(y,{subTitle:"Elements package: Motion",href:"https://github.com/carbon-design-system/carbon/tree/v10/packages/motion",mdxType:"ResourceCard"},(0,i.kt)(v,{name:"github",mdxType:"MdxIcon"})))))}T.isMDXComponent=!0}}]);