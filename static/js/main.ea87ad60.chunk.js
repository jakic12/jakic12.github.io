(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{20:function(t){t.exports=JSON.parse('[{"title":"bezier-regression","subtitle":"Fit a bezier to a given function","online":"https://jakic12.github.io/bezier-regression/","link":"https://jakic12.github.io/bezier-regression/","tech":["html5","css3","javascript"],"linkToRepo":"https://github.com/jakic12/bezier-regression","createdAt":"2019-11-22T12:22:39Z"},{"title":"word-saver","subtitle":"Check for word definitions and save them for recap","online":"https://jakic12.github.io/word-saver","link":"https://jakic12.github.io/word-saver","tech":["javascript","css3","html5"],"linkToRepo":"https://github.com/jakic12/word-saver","createdAt":"2019-11-09T15:54:40Z"},{"title":"simple-html-form","subtitle":"Simple html form for school","online":"https://jakic12.github.io/simple-html-form/","link":"https://jakic12.github.io/simple-html-form/","tech":["html5","css3","javascript"],"linkToRepo":"https://github.com/jakic12/simple-html-form","createdAt":"2019-10-13T22:56:29Z"},{"title":"CNN-java","subtitle":"Convolutional Neural Network training library in java","online":false,"link":null,"linkToRepo":"https://github.com/jakic12/CNN-java","createdAt":"2019-10-06T09:27:07Z"},{"title":"yt-rec","subtitle":"Build a graph from recursively getting recommended videos, making a interconnected network of videos","online":"https://jakic12.github.io/yt-rec/","link":"https://jakic12.github.io/yt-rec/","tech":["javascript","html5"],"linkToRepo":"https://github.com/jakic12/yt-rec","createdAt":"2019-09-19T19:10:59Z"},{"title":"nne","subtitle":"an ecosystem of neural network controlled animals","online":"https://jakic12.github.io/nne/","link":"https://jakic12.github.io/nne/","tech":["javascript","html5"],"linkToRepo":"https://github.com/jakic12/nne","createdAt":"2019-07-05T20:47:28Z"},{"title":"Text-LSTM","subtitle":"Text generating LSTM","online":false,"link":null,"tech":["java"],"linkToRepo":"https://github.com/jakic12/Text-LSTM","createdAt":"2019-03-13T14:19:29Z"},{"title":"islandija_web","subtitle":"simple website built for front end training","online":"https://jakic12.github.io/islandija_web/","link":"https://jakic12.github.io/islandija_web/","tech":["html5","css3","javascript"],"linkToRepo":"https://github.com/jakic12/islandija_web","createdAt":"2019-01-31T20:09:58Z"},{"title":"random-javascript-simulations","subtitle":"javascript simulations and visualizations","online":"https://jakic12.github.io/random-javascript-simulations","link":"https://jakic12.github.io/random-javascript-simulations","linkToRepo":"https://github.com/jakic12/random-javascript-simulations","createdAt":"2019-01-19T13:45:41Z"},{"title":"pythonML","subtitle":"python library to create, use and learn neural networks - multilayered perceptrons","online":false,"link":"","tech":["python"],"linkToRepo":"https://github.com/jakic12/pythonML","createdAt":"2018-08-03T13:57:50Z"}]')},31:function(t,e,n){t.exports=n(48)},36:function(t,e,n){},37:function(t,e,n){},38:function(t,e,n){},39:function(t,e,n){},40:function(t,e,n){},41:function(t,e,n){},42:function(t,e,n){},48:function(t,e,n){"use strict";n.r(e);var i=n(1),a=n.n(i),o=n(26),r=n.n(o),c=(n(36),n(37),n(18)),s=n(15),l=(n(38),n(5)),u=n(11),h=n(9),m=n(7),p=n(10),d=n(4);Number.prototype.clamp=function(t,e){return Math.min(Math.max(this,t),e)};var b=function(t){function e(){var t,n;Object(l.a)(this,e);for(var i=arguments.length,a=new Array(i),o=0;o<i;o++)a[o]=arguments[o];return(n=Object(h.a)(this,(t=Object(m.a)(e)).call.apply(t,[this].concat(a)))).DEBUG_MODE=!1,n.MAX_POINTS=2e3,n.VECT_FIELD_X=function(t,e,n){return 1e-4},n.VECT_FIELD_Y=function(t,e,i){return 1e-4+Math.sin(i/20+n.mouseX/window.innerWidth*10)},n.VECT_FIELD_Z=function(t,e,i){return 1e-4+Math.sin(e/20+n.mouseY/window.innerHeight*10)},n.CAMERA_DISTANCE=100,n.CAMERA_SPEED=n.DEBUG_MODE?.9:.1,n.start=function(){n.frameId||(n.frameId=requestAnimationFrame(n.animate))},n.stop=function(){cancelAnimationFrame(n.frameId)},n.animate=function(){if(n.DEBUG_MODE&&n.vectorField.update(n.VECT_FIELD_X,n.VECT_FIELD_Y,n.VECT_FIELD_Z),n.mouseX&&n.mouseY){var t=2*(n.mouseX/window.innerWidth-.5)*Math.PI/(n.DEBUG_MODE?2:8),e=2*(n.mouseY/window.innerHeight-.5)*Math.PI/(n.DEBUG_MODE?2:8),i=Math.cos(e)*Math.cos(t)*n.CAMERA_DISTANCE,a=Math.sin(e)*n.CAMERA_DISTANCE,o=Math.sin(t)*n.CAMERA_DISTANCE;n.camera.position.set(n.camera.position.x+(i-n.camera.position.x)*n.CAMERA_SPEED,n.camera.position.y+(a-n.camera.position.y)*n.CAMERA_SPEED,n.camera.position.z+(o-n.camera.position.z)*n.CAMERA_SPEED),n.camera.lookAt(0,0,0)}n.renderScene(),n.frameId=window.requestAnimationFrame(n.animate),n.particles.replaceParticles((function(t){n.camera.updateMatrix(),n.camera.updateMatrixWorld();var e=new d.d;e.setFromMatrix((new d.e).multiplyMatrices(n.camera.projectionMatrix,n.camera.matrixWorldInverse));var i=new d.j(t.x,t.y,t.z);return!e.containsPoint(i)}),(function(t){return new g((Math.random()-.5)*n.CAMERA_DISTANCE*3,(Math.random()-.5)*n.CAMERA_DISTANCE*3,(Math.random()-.5)*n.CAMERA_DISTANCE*3)})),n.particles.alterParticles((function(t){t.Vx=n.VECT_FIELD_X(t.x,t.y,t.z),t.Vy=n.VECT_FIELD_Y(t.x,t.y,t.z),t.Vz=n.VECT_FIELD_Z(t.x,t.y,t.z)})),n.particles.moveParticles(),n.line.geometry.attributes.position.needsUpdate=!0},n.handleMouseMove=function(t){n.state.mouseInside&&(n.mouseX=t.clientX,n.mouseY=t.clientY)},n.renderScene=function(){n.renderer.render(n.scene,n.camera)},n.handleResize=function(){var t=window.getComputedStyle(n.mount),e=t.width,i=t.height;e=e.replace("px",""),i=i.replace("px",""),n.camera.aspect=e/i,n.camera.updateProjectionMatrix(),n.renderer.setSize(e,i)},n}return Object(p.a)(e,t),Object(u.a)(e,[{key:"componentDidMount",value:function(){var t=this;this.state={mouseInside:!0},this.point_color_gradient=new j(716784,16718425),this.mouseX=window.innerWidth/2,this.mouseY=window.innerHeight/2;var e=this.mount.clientWidth,n=this.mount.clientHeight;this.scene=new d.i,this.camera=new d.f(75,e/n,.1,1e3),this.camera.position.set(0,0,100),this.camera.lookAt(0,0,0),this.renderer=new d.k({antialias:!0,alpha:!0}),this.renderer.setSize(e,n),this.mount.appendChild(this.renderer.domElement);var i=new d.c,a=new d.h({color:16777215});this.particles=new f(this.MAX_POINTS),i.addAttribute("position",new d.b(this.particles.positions,3)),this.particles.generateParticles((function(){return new g((Math.random()-.5)*t.CAMERA_DISTANCE*3,(Math.random()-.5)*t.CAMERA_DISTANCE*3,(Math.random()-.5)*t.CAMERA_DISTANCE*3)})),this.t=0,this.line=new d.g(i,a),this.scene.add(this.line),this.DEBUG_MODE&&(this.vectorField=new w(this.scene,this.VECT_FIELD_X,this.VECT_FIELD_Y,this.VECT_FIELD_Z,1,this.CAMERA_DISTANCE,2*this.CAMERA_DISTANCE,void 0,void 0,this.point_color_gradient)),this.DEBUG_MODE&&E(this.scene,10),this.start(),window.addEventListener("resize",this.handleResize),window.addEventListener("mousemove",this.handleMouseMove)}},{key:"componentWillUnmount",value:function(){this.stop(),this.mount.removeChild(this.renderer.domElement),window.removeEventListener("resize",this.handleResize),window.removeEventListener("mousemove",this.handleMouseMove)}},{key:"render",value:function(){var t=this;return a.a.createElement("div",{style:{width:"100%",height:"100%"},ref:function(e){t.mount=e},onMouseOver:function(){return t.setState({mouseInside:!0})},onMouseOut:function(){return t.setState({mouseInside:!1})}})}}]),e}(i.Component),g=function(){function t(e,n,i){var a=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,o=arguments.length>4&&void 0!==arguments[4]?arguments[4]:0,r=arguments.length>5&&void 0!==arguments[5]?arguments[5]:0;Object(l.a)(this,t),this.x=e,this.y=n,this.z=i,this.Vx=a,this.Vy=o,this.Vz=r}return Object(u.a)(t,[{key:"move",value:function(){this.x+=this.Vx,this.y+=this.Vy,this.z+=this.Vz}}]),t}(),f=function(){function t(e){Object(l.a)(this,t),this.max_points=e,this.positions=new Float32Array(3*e),this.particles=[]}return Object(u.a)(t,[{key:"generateParticles",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.max_points,n=0,i=0;n<e;n++){var a=t({index:n});if(!(a instanceof g))throw new Error("the particleFunction should return Particle");this.particles.push(a),this.positions[i++]=a.x,this.positions[i++]=a.y,this.positions[i++]=a.z}}},{key:"alterParticles",value:function(t){for(var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.max_points,n=0,i=0;n<e;n++){t(this.particles[n],n);this.positions[i++]=this.particles[n].x,this.positions[i++]=this.particles[n].y,this.positions[i++]=this.particles[n].z}}},{key:"moveParticles",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.max_points,e=0,n=0;e<t;e++)this.particles[e].move(),this.positions[n++]=this.particles[e].x,this.positions[n++]=this.particles[e].y,this.positions[n++]=this.particles[e].z}},{key:"updatePositions",value:function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.max_points,e=0,n=0;e<t;e++)this.positions[n++]=this.particles[e].x,this.positions[n++]=this.particles[e].y,this.positions[n++]=this.particles[e].z}},{key:"replaceParticles",value:function(t,e){for(var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.max_points,i=0;i<n;i++)if(t(this.particles[i])){var a=e(this.particles[i]);this.particles[i]=a,this.positions[3*i]=a.x,this.positions[3*i+1]=a.y,this.positions[3*i+2]=a.z}}}]),t}(),w=function(){function t(e){var n=this,i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(){return 0},a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:function(){return 0},o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:function(){return 0},r=arguments.length>4?arguments[4]:void 0,c=arguments.length>5&&void 0!==arguments[5]?arguments[5]:r,s=arguments.length>6&&void 0!==arguments[6]?arguments[6]:r,u=arguments.length>7&&void 0!==arguments[7]?arguments[7]:10,h=arguments.length>8&&void 0!==arguments[8]?arguments[8]:10,m=arguments.length>9&&void 0!==arguments[9]?arguments[9]:3355443;Object(l.a)(this,t),this.arrows=[],this.lengths=[],this.maxLen=-1,this.minLen=-1,this.xFunct=i,this.yFunct=a,this.zFunct=o,this.vectorSizeFactor=h,this.color=m;for(var p=-r/2;p<r/2;p+=u)for(var b=-c/2;b<c/2;b+=u)for(var g=-s/2;g<s/2;g+=u){var f=new d.j(i(p,b,g),a(p,b,g),o(p,b,g)),w=new d.j(p,b,g),E=h*f.length(),v=void 0;m instanceof j?(isFinite(E)&&(E>this.maxLen&&(this.maxLen=E),E<this.minLen&&(this.minLen=E),-1==this.maxLen&&(this.maxLen=E),-1==this.minLen&&(this.minLen=E)),this.lengths.push(E)):v=m;var k=new d.a(f,w,E,v);this.arrows.push(k),e.add(k)}m instanceof j&&this.arrows.forEach((function(t,e){var i=(n.lengths[e]-n.minLen)/(n.maxLen-n.minLen);i&&isFinite(i)||(i=1),t.setColor(m.getColor(i))}))}return Object(u.a)(t,[{key:"update",value:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:this.xFunct,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:this.yFunct,i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:this.zFunct;this.arrows.forEach((function(a,o){var r=new d.j(e(a.position.x,a.position.y,a.position.z),n(a.position.x,a.position.y,a.position.z),i(a.position.x,a.position.y,a.position.z));t.lengths[o]=r.length()*t.vectorSizeFactor,t.color instanceof j&&isFinite(t.lengths[o])&&(t.lengths[o]>t.maxLen&&(t.maxLen=t.lengths[o]),t.lengths[o]<t.minLen&&(t.minLen=t.lengths[o]),-1==t.maxLen&&(t.maxLen=t.lengths[o]),-1==t.minLen&&(t.minLen=t.lengths[o])),a.setLength(t.lengths[o]),a.setDirection(r)})),this.color instanceof j&&this.arrows.forEach((function(e,n){var i=(t.lengths[n]-t.minLen)/(t.maxLen-t.minLen);i&&isFinite(i)||(i=1),e.setColor(t.color.getColor(i))}))}}]),t}(),E=function(t,e){t.add(new d.a(new d.j(1,0,0),new d.j(0,0,0),e,16711680)),t.add(new d.a(new d.j(0,1,0),new d.j(0,0,0),e,65280)),t.add(new d.a(new d.j(0,0,1),new d.j(0,0,0),e,255))},j=function(){function t(){Object(l.a)(this,t);for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];this.colors=n.map((function(t){return t=t.toString(16).padStart(6,"0"),[parseInt(t.substring(0,2),16),parseInt(t.substring(2,4),16),parseInt(t.substring(4,6),16)]}))}return Object(u.a)(t,[{key:"getColor",value:function(t){var e=t*=this.colors.length-1,n=[this.colors[Math.floor(e)][0]*(1-(t-Math.floor(e)))+this.colors[Math.ceil(e)][0]*(t-Math.floor(e)),this.colors[Math.floor(e)][1]*(1-(t-Math.floor(e)))+this.colors[Math.ceil(e)][1]*(t-Math.floor(e)),this.colors[Math.floor(e)][2]*(1-(t-Math.floor(e)))+this.colors[Math.ceil(e)][2]*(t-Math.floor(e))];return n=n.map((function(t){return parseInt(t)})),parseInt("".concat(n[0].toString(16).padStart(2,"0")).concat(n[1].toString(16).padStart(2,"0")).concat(n[2].toString(16).padStart(2,"0")),16)}}]),t}(),v=b,k=(n(39),n(16)),O=(n(40),n(41),function(t){t.pictures;return a.a.createElement("div",{className:"carousel"})}),y=n(2),M=n.n(y);console.log(y.iconList);var x={android:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"android"}))},label:"Android",link:"https://www.android.com/"},appcelerator:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"appcelerator"}))},label:"Appcelerator",link:"https://www.appcelerator.com/"},apple:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"apple"}))},label:"Apple",link:"https://www.apple.com/"},atom:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"atom"}))},label:"Atom",link:"https://atom.io/"},bitbucket:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"bitbucket"}))},label:"Bitbucket",link:"https://bitbucket.org/"},bootstrap:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"bootstrap"}))},label:"Bootstrap",link:"https://getbootstrap.com/"},bower:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"bower"}))},label:"Bower",link:"https://bower.io/"},chrome:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"chrome"}))},label:"Chrome",link:"https://www.google.com/intl/sl_SI/chrome/"},codeigniter:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"codeigniter"}))},label:"Codeigniter",link:"https://codeigniter.com/"},coffeescript:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"coffeescript"}))},label:"Coffeescript",link:"https://coffeescript.org/"},css3:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"css3"}))},label:"Css3",link:"http://www.css3.info/"},debian:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"debian"}))},label:"Debian",link:"https://www.debian.org/"},django:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"django"}))},label:"Django",link:"https://www.djangoproject.com/"},docker:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"docker"}))},label:"Docker",link:"https://www.docker.com/"},doctrine:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"doctrine"}))},label:"Doctrine",link:"https://www.doctrine-project.org/"},dotnet:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"dotnet"}))},label:"DotNet",link:"https://dotnet.microsoft.com/"},drupal:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"drupal"}))},label:"Drupal",link:"https://www.drupal.org/"},ember:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"ember"}))},label:"Ember",link:"https://emberjs.com/"},erlang:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"erlang"}))},label:"Erlang",link:"https://www.erlang.org/"},firefox:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"firefox"}))},label:"Firefox",link:"https://www.mozilla.org/sl/firefox/new/"},git:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"git"}))},label:"Git",link:"https://git-scm.com/"},github:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"github"}))},label:"Github",link:"https://github.com/"},go:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"go"}))},label:"Go",link:"https://golang.org/"},grunt:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"grunt"}))},label:"Grunt",link:"https://gruntjs.com/"},gulp:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"gulp"}))},label:"Gulp",link:"https://gulpjs.com/"},heroku:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"heroku"}))},label:"Heroku",link:"https://www.heroku.com/"},html5:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"html5"}))},label:"Html5",link:"https://en.wikipedia.org/wiki/HTML5"},illustrator:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"illustrator"}))},label:"Illustrator",link:"https://www.adobe.com/si/products/illustrator.html"},intellij:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"intellij"}))},label:"Intellij",link:"https://www.jetbrains.com/idea/"},ionic:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"ionic"}))},label:"Ionic",link:"https://ionicframework.com/"},java:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"java"}))},label:"Java",link:"https://www.java.com/download/"},javascript:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"javascript"}))},label:"Javascript",link:"https://www.javascript.com/"},jquery:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"jquery"}))},label:"Jquery",link:"https://jquery.com/"},krakenjs:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"krakenjs"}))},label:"Krakenjs",link:"http://krakenjs.com/"},laravel:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"laravel"}))},label:"Laravel",link:"https://laravel.com/"},less:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"less"}))},label:"Less",link:"http://lesscss.org/"},linkedin:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"linkedin"}))},label:"Linkedin",link:"https://www.linkedin.com/"},linux:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"linux"}))},label:"Linux",link:"https://www.linux.org/"},meteor:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"meteor"}))},label:"Meteor",link:"https://www.meteor.com/"},mongodb:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"mongodb"}))},label:"Mongodb",link:"https://www.mongodb.com/"},mysql:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"mysql"}))},label:"Mysql",link:"https://www.mysql.com/"},nginx:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"nginx"}))},label:"Nginx",link:"https://www.nginx.com/"},nodejs:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"nodejs"}))},label:"Nodejs",link:"https://nodejs.org/"},npm:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"npm"}))},label:"Npm",link:"https://www.npmjs.com/"},photoshop:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"photoshop"}))},label:"Photoshop",link:"https://www.photoshop.com/"},php:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"php"}))},label:"Php",link:"https://www.php.net/"},postgresql:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"postgresql"}))},label:"Postgresql",link:"https://www.postgresql.org/"},python:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"python"}))},label:"Python",link:"https://www.python.org/"},react:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"react"}))},label:"React",link:"https://reactjs.org/"},redhat:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"redhat"}))},label:"Redhat",link:"https://www.redhat.com/en"},redis:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"redis"}))},label:"Redis",link:"https://redis.io/"},ruby:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"ruby"}))},label:"Ruby",link:"https://www.ruby-lang.org/en/"},safari:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"safari"}))},label:"Safari",link:"https://www.apple.com/safari/"},sass:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"sass"}))},label:"Sass",link:"https://sass-lang.com/"},stylus:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"stylus"}))},label:"Stylus",link:"http://stylus-lang.com/"},swift:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"swift"}))},label:"Swift",link:"https://www.swift.com/"},symfony:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"symfony"}))},label:"Symfony",link:"https://symfony.com/"},travis:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"travis"}))},label:"Travis",link:"https://travis-ci.org/"},trello:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"trello"}))},label:"Trello",link:"https://trello.com/"},typescript:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"typescript"}))},label:"Typescript",link:"https://www.typescriptlang.org/"},ubuntu:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"ubuntu"}))},label:"Ubuntu",link:"https://ubuntu.com/"},vim:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"vim"}))},label:"Vim",link:"https://www.vim.org/"},visualstudio:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"visualstudio"}))},label:"Visualstudio",link:"https://visualstudio.microsoft.com/"},vuejs:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"vuejs"}))},label:"Vuejs",link:"https://vuejs.org/"},webpack:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"webpack"}))},label:"Webpack",link:"https://webpack.js.org/"},wordpress:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"wordpress"}))},label:"Wordpress",link:"https://wordpress.com/"},yii:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"yii"}))},label:"Yii",link:"https://www.yiiframework.com/"},zend:{icon:function(t){return a.a.createElement(M.a,Object.assign({},t,{icon:"zend"}))},label:"Zend",link:"https://www.zend.com/"}},A=n(28),_=n(27),C=["https://cors-anywhere.herokuapp.com/","https://crossorigin.me/"];var T=function t(e,n){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;return new Promise((function(a,o){n.length<=i&&o(),fetch(n[i]+e).then((function(t){a(t)})).catch((function(r){console.log(n[i],"didn't work, trying the next one"),t(e,n,i+1).then((function(t){a(t)})).catch((function(){o()}))}))}))},L=["linear-gradient(to right, #00d2ff, #3a7bd5)","linear-gradient(to right, #d3959b, #bfe6ba)","linear-gradient(to right, #dad299, #b0dab9)","linear-gradient(to right, #f2709c, #ff9472)","linear-gradient(to right, #e6dada, #274046)","linear-gradient(to right, #5d4157 -50%, #a8caba 150%)","linear-gradient(to right, #ddd6f3, #faaca8)","linear-gradient(to right, #616161, #9bc5c3)","linear-gradient(to right, #50c9c3, #96deda)","linear-gradient(to right, #de6262, #ffb88c)","linear-gradient(to right, #a73737, #7a2828)","linear-gradient(to right, #f857a6, #ff5858)","linear-gradient(to right, #4b6cb7, #182848)","linear-gradient(to right, #e43a15, #e65245)"],N=function(){return a.a.createElement("div",{className:"noIcon",style:{background:L[parseInt(Math.random()*L.length)]}},a.a.createElement(A.a,{size:"100px"}))},D=function(t){var e=t.title,n=t.subtitle,o=t.online,r=t.link,c=t.iconUrl,s=(t.open,t.bigPictures),l=t.tech,u=t.linkToRepo;r||(r=u);var h,m=Object(i.useState)(o),p=Object(k.a)(m,2),d=p[0],b=p[1],g=Object(i.useState)(!0),f=Object(k.a)(g,2),w=f[0],E=f[1],j=Object(i.useState)(0),v=Object(k.a)(j,2),y=v[0],M=v[1];return d&&(b(!1),(h=r,new Promise((function(t){fetch(h).then((function(e){e.ok?t(2):t(0)})).catch((function(e){T(h,C).then((function(e){console.log("corsBypass:",e),e.ok?t(2):t(0)})).catch((function(e){fetch(h,{mode:"no-cors"}).then((function(e){t(1)})).catch((function(e){t(0)}))}))}))}))).then((function(t){E(!1),M(t)}))),a.a.createElement("div",{className:"projectCardWrapper"},a.a.createElement("a",{className:"projectCard",href:r},a.a.createElement("div",{className:"cardHeader"},a.a.createElement("div",{className:"icon"},c&&a.a.createElement("img",{src:c,alt:"project card icon"}),!c&&a.a.createElement(N,null)),a.a.createElement("div",{className:"cardHeaderMain"},a.a.createElement("div",{className:"cardTitle"},a.a.createElement("div",{className:"titleWrapper"},a.a.createElement("a",{href:u,className:"githubLink"},a.a.createElement(_.a,{color:"black",size:"2em"})),a.a.createElement("h1",{className:"title"},e)),a.a.createElement("h5",{className:"subtitle"},n),a.a.createElement("div",{className:"techs"},a.a.createElement("div",{className:"techList"},l&&l.map((function(t){if(x[t])return a.a.createElement("a",{href:x[t].link},x[t].icon({width:"30px",height:"30px",fill:"#ff1a59"}))}))))),o&&a.a.createElement("div",{className:"onlineProject".concat(w?" loading":"").concat(w||0!=y?"":" down").concat(w||1!=y?"":" maybe")},w&&a.a.createElement(a.a.Fragment,null,"Loading",a.a.createElement("div",{className:"lds-dual-ring"})),!w&&2==y&&"Online",!w&&0==y&&"Down",!w&&1==y&&"Server exists"))),a.a.createElement("div",{className:"cardBody"},a.a.createElement("div",{className:"cardBodyInner"},a.a.createElement(O,{images:s})))))},I=n(20),S=function(t){t.items;return console.log(I),a.a.createElement("div",{className:"listProject"},I.map((function(t,e){return a.a.createElement(D,Object.assign({},t,{key:"project_".concat(e)}))})))},z=function(){return a.a.createElement("div",{className:"mainPage"},a.a.createElement("div",{className:"topTitle"},a.a.createElement("div",{className:"middleCard"},a.a.createElement("div",{className:"title"},a.a.createElement("h1",null,"Jakob Drusany"))),a.a.createElement(v,null)),a.a.createElement("div",{className:"projectList"},a.a.createElement("div",{className:"projectListInner"},a.a.createElement(S,null))))},F=(n(42),n(23)),R=function(t){var e=t.item,n=e.label,o=e.url,r=e.exact,l=Object(i.useState)(!1),u=Object(k.a)(l,2),h=u[0],m=u[1],p=Object(i.useState)(!1),d=Object(k.a)(p,2),b=d[0],g=d[1],f=Object(F.b)({from:{transform:"scale(1)"},to:{transform:"scale(".concat(b?.8:h?1.2:1,")")}});return a.a.createElement(s.a,{path:o,exact:r,children:function(t){var e=t.match;return a.a.createElement(c.b,{to:o,className:e?"selected":"",onMouseEnter:function(){return m(!0)},onMouseLeave:function(){return m(!1)},onMouseDown:function(){return g(h)},onMouseUp:function(){return g(!1)}},a.a.createElement(F.a.div,{style:f},n))}})},P=function(t){var e=t.items;return a.a.createElement("nav",{className:"Menu"},e.map((function(t,e){return a.a.createElement(R,{item:t,key:"menuItem_".concat(e)})})))},V=[{label:"Project list",url:"/",exact:!0,component:z},{label:"About",url:"/about",exact:!0,component:function(t){return a.a.createElement("div",null,"about")}},{label:"Contact",url:"/contact",exact:!0,component:function(t){return a.a.createElement("div",null,"contact")}}],B=function(){return a.a.createElement(c.a,null,a.a.createElement("div",{className:"app"},a.a.createElement("div",{className:"topBar"},a.a.createElement("div",{className:"menu"},a.a.createElement(P,{items:V}))),V.map((function(t,e){var n=t.url,i=t.exact,o=t.component,r=t.render;return a.a.createElement(s.a,{key:"screen_".concat(e),path:n,exact:i,component:o,render:r})}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(a.a.createElement(B,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[31,1,2]]]);
//# sourceMappingURL=main.ea87ad60.chunk.js.map