var id1=setInterval(function() {  
 console.log("setInterval: Hey! 1 millisecond completed!..");   
}, 1000);
var id2=setInterval(function() {  
 console.log("setInterval: Hey! 1 millisecond completed!..");   
}, 1000);

clearInterval(id2);