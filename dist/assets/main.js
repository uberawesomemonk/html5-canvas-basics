$(function(){function t(){"down"==l&&(d.y+=5),"up"==l&&(d.y-=5),"left"==l&&(d.x-=5),"right"==l&&(d.x+=5),d.x=d.clamp(d.x,0,n-d.width),d.y=d.clamp(d.y,0,o-d.height)}function e(){h.clearRect(0,0,n,o),d.draw()}var n=480,o=320,i=30,c=$("<canvas width='"+n+"' height='"+o+"'></canvas>"),h=c.get(0).getContext("2d");c.appendTo("body"),setInterval(function(){t(),e()},1e3/i);var d={color:"#00A",x:220,y:270,width:32,height:32,draw:function(){h.fillStyle=this.color,h.fillRect(this.x,this.y,this.width,this.height)},clamp:function(t,e,n){return e>t?t=e:t>n&&(t=n),t}},a=["none","left","right","up","down"],l="none";$(document).keydown(function(t){40==t.keyCode?l=a[4]:38==t.keyCode?l=a[3]:37==t.keyCode?l=a[1]:39==t.keyCode&&(l=a[2])}),$(document).keyup(function(t){l=a[0]})});
//# sourceMappingURL=maps/main.js.map