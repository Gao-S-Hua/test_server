var WebSocket = require('ws');
var wss;

const TIME_GAP = 1000;

function wsInit(server) {
  wss = new WebSocket.Server({ server, path: '/record' });
  wss.on('connection', (ws) => {
    let timer = null;
    //connection is up, let's add a simple simple event
    ws.on('message', (message) => {
      console.log(message);
      switch(message) {
        case 'close' : {
          if(timer) clearInterval(timer);
          ws.terminate();
          break;
        }
        case 'temperature' : {
          if(timer) clearInterval(timer);
          timer = setInterval( () => ws.send(getTemperature()), TIME_GAP);
          break;
        }
        case 'current' : {
          if(timer) clearInterval(timer);
          timer = setInterval( () => ws.send(getCurrent()), TIME_GAP);
          break;
        }
        default: break;
      }
    });
  });
}

function getTemperature() {
  const base = 25;
  const newTemp = (base + 40 * Math.random()).toFixed(2);
  console.log('Temperature: ' + newTemp.toString());
  return newTemp;
}

function getCurrent() {
  const base = 1.2;
  const newCurrent = (base + 0.2 * Math.random()).toFixed(2);
  console.log('Current: ' + newCurrent.toString());
  return newCurrent;
}

function wsClose() {
  wss.close();
}
exports.wsInit = wsInit;
exports.wsClose = wsClose;