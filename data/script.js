window.onload=function(){
    var websock = new WebSocket('ws://' + window.location.hostname + ':81/');
      websock.onopen = function(evt) { console.log('websock open'); };
  websock.onclose = function(evt) { console.log('websock close'); };
  websock.onerror = function(evt) { console.log(evt); };
    var garden = document.querySelector('.garden');
function handleOrientation(event) {
  var x = event.gamma;
  var z=event.beta;
  var u=x.toFixed(0)+" "+z.toFixed(0);
  garden.innerHTML=u;
websock.send(u);
}

window.addEventListener('deviceorientation', handleOrientation);
}