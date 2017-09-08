
//randomly places tea cup images around home page 
;(function(window,document,undefined){
    "use strict";
        var init = function(){    
            var canvas = document.querySelector('#randomTeaSpread');
            var icon_template = document.querySelector('#template');
            var icon_width = 20;
            var icon_height = 20;
            var the_images = [
             'https://docs.google.com/drawings/d/1sFp4Bz0h4VzOpii2bDmytG08bASzgxxKWFBkc4qwvwM/pub?w=40&amp;h=20',
            ];
            var pickRandomImage = function(){
                var i = Math.floor( Math.random() * the_images.length );
                return the_images[i];
            };
            var total_number_of_images = 67;
            var max_height = canvas.offsetHeight - icon_height;
            var max_width = canvas.offsetWidth - icon_width;
            var randomCoordinate = function(){
                var r = [];
                var x = Math.floor( Math.random() * max_width );
                var y = Math.floor( Math.random() * max_height );
                r = [x,y];
                return r;
            };
            var createImage = function(){
                var node = icon_template.cloneNode(true);
                var xy = randomCoordinate();
                node.removeAttribute('id');
                node.removeAttribute('hidden');
                node.style.top = xy[1] + 'px';
                node.style.left = xy[0] + 'px';
                node.setAttribute('src',pickRandomImage());
                canvas.appendChild(node);
            };
            for (var i=0;i<total_number_of_images;i++){
                createImage();
            };
        };
       window.addEventListener('load',init);
})(window,document);


//teacup animation that happens when you click the blue yeet in the menu bar
document.getElementById("container").style.display = "none";    
function move() {
  document.getElementById("container").style.display = "inline"; 
  //variables at least 2
  var elem = document.getElementById("animation");   
  var pos = 0;
  var id = setInterval(frame, .01);
    function frame() {
      if (pos == 650) {
        clearInterval(id);
        document.getElementById("container").style.display = "none"; 
      } else {
        pos++; 
        elem.style.top = pos + 'px'; 
        elem.style.left = pos + 'px'; 
      }
    }
}
       