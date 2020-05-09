 //// 0. Describe this demo
 window.demoDescription = "Adding and removing circles in svg. Notice the rendering performance is much slower than html5 canvas.";


 //// 1. Define Space and Form
 var colors = {
   a1: "#ff2d5d", a2: "#42dc8e", a3: "#2e43eb", a4: "#ffe359",
   b1: "#96bfed", b2: "#252934", b3: "#f1f3f7", b4: "#e2e6ef",
   c1: "#111", c2: "#567", c3: "#abc", c4: "rgba(255,255,255,.9)"
 };
 
 var space = new SVGSpace("pt", ready).setup({bgcolor: colors.b2});
 
 var form = new SVGForm( space );
 form.stroke( false );
 
 
 //// 2. Create Elements
 
 // A Dust is a kind of Vector
 function Dust() {
   Vector.apply( this, arguments ); // call Vector's constructor
   this.age = 0;
   this.maxAge = Math.random() * 500 + 50;
   this.weight =  0.25 + Math.random()*3;
   this.color = (this.weight > 0.7) ? colors["a"+Math.ceil(Math.random()*4)] : "#000";
 }
 Util.extend( Dust, Vector ); // extends Vector class
 
 
 // define an animate function so it can be animated when added into Space
 Dust.prototype.animate = function(time, fps, context) {
 
   form.enterScope(this);
 
   // drift movement
   this.add( rand(1), (Math.random() - Math.random()*(1-this.weight/1.5)) );
 
   // glitter
   var gray = (this.maxAge-this.age)/this.maxAge * 0.4;
   gray = Math.max(0, Math.min( 0.6, (Math.random() > 0.5) ? gray + 0.05 : gray - 0.05 ) );
 
   // draw dust
   form.fill( Util.toRGBColor( this.color, true, gray ) );
   form.point( this, this.weight, true );
 
   // remove when done
   if (this.age++ > this.maxAge) space.remove(this);
 
 };
 
 // a helper function for randomness
 function rand(r) { return Math.random() * r - Math.random() * r; }
 
 
 //// 3. Visualize, Animate, Interact
 space.add({
   animate: function(time, fps, context) {},
 
   onMouseAction: function(type, x, y, evt) {
     // When mouse moved, add two dust into space
     if (type=="move") {
       space.add( new Dust( x+rand(5), y+rand(5) ) );
       space.add( new Dust( x+rand(5), y+rand(5) ) );
     }
   },
 
   onTouchAction: function(type, x, y, evt) {
     this.onMouseAction( type, x, y );
   }
 });
 
 
 // 4. Start playing
 // Here we need to make sure the svg dom is ready first, via callback function ( see constructor SVGSpace(...) )
 function ready(bounds, elem) {
   form.scope("item", elem ); // initiate the scope which uses the svg dom as parent node
   space.bindMouse();
   space.bindTouch();
   space.play();
 }