var mq5 = new Array();
var mq7 = new Array();
var mq131 = new Array();
var mq135 = new Array();
var pir1 = new Array();
var pir2 = new Array();
var pir3 = new Array();
var headCount = new Array();
var socket = io.connect();

socket.on('connect', function () {
  socket.on('mqtt', function (msg) {
    var message = msg.topic.split('/');
    var sensor = message[4];

    //console.log('message: '+message);
    //console.log('sensor: '+sensor);
    //console.log(String.fromCharCode.apply(null, new Uint8Array(msg.payload)));

    var payload = String.fromCharCode.apply(null, new Uint8Array(msg.payload));

    $('#topic').html(msg.topic);
    $('#message').html(msg.topic + ', ' + payload);
    var obj = JSON.parse(payload);
    payload = obj.d.value;
    //console.log('payload: '+payload);

    switch (sensor) {

      case 'heatmap':
        $('#heat_map_result').html('(Pollution Range: ' + payload + ')');
        $('#heat_map').text(payload);
        $('#heat_map').removeClass('label-danger').addClass('label-success');

        break;

      case 'audio':
        $('#audio_result').html('(Sound: ' + payload + ')');
        $('#sound').text(payload);
        $('#sound').removeClass('label-danger').addClass('label-success');

        break;

      case 'sound_detect':
        $('#audio_result').html('(Sound: ' + payload + '...)');
        $('#sound').text(payload);

        break;

      case 'yolo':
        $('#yolo_result').html('(Object: ' + payload + ')');
        $('#object').text(payload);
        $('#object').removeClass('label-danger').addClass('label-success');

        break;

      case 'motion':
        $('#pir_value').html('(Sense value: ' + payload + ')');
        //console.log("which"+message[2])
        if (payload == '0') {
          switch (message[2]){
            case 'rpi1':
              $('#pir1').text('Nothing');
              $('#pir1').removeClass('label-danger').addClass('label-success');
              pir1Values.push(payload);
              pir1Values.shift();
              charts.forEach(function(chart) { chart.update(); });
              break;
            case 'rpi2':
              $('#pir2').text('Nothing');
              $('#pir2').removeClass('label-danger').addClass('label-success');
              pir2Values.push(payload);
              pir2Values.shift();
              charts.forEach(function(chart) { chart.update(); });
              break;
            case 'rpi3':
              $('#pir3').text('Nothing');
              $('#pir3').removeClass('label-danger').addClass('label-success');
              pir3Values.push(payload);
              pir3Values.shift();
              charts.forEach(function(chart) { chart.update(); });
              break;
          }
        } else {
          switch (message[2]){
            case 'rpi1':
              $('#pir1').text('Motion');
              $('#pir1').removeClass('label-success').addClass('label-danger');
              pir1Values.push(payload);
              pir1Values.shift();
              charts.forEach(function(chart) { chart.update(); });
              break;
            case 'rpi2':
              $('#pir2').text('Motion');
              $('#pir2').removeClass('label-success').addClass('label-danger');
              pir2Values.push(payload);
              pir2Values.shift();
              charts.forEach(function(chart) { chart.update(); });
              break;
            case 'rpi3':
              $('#pir3').text('Motion');
              $('#pir3').removeClass('label-success').addClass('label-danger');
              pir3Values.push(payload);
              pir3Values.shift();
              charts.forEach(function(chart) { chart.update(); });
              break;
            }
        }
        break;

      case 'pollution_air_mq5':
        var mq5_value = (parseFloat(payload))+"";
        $('#mq5Sensor').html('(Sensor value: ' + mq5_value + ')');
        $('#mq5Label').text(mq5_value);
        $('#mq5Label').removeClass('').addClass('label-primary');

        mq5Values.push(mq5_value);
        mq5Values.shift();
        charts.forEach(function(chart) { chart.update(); });

        break;

      case 'pollution_air_mq7':
        var mq7_value = (parseFloat(payload))+"";
        $('#mq7Sensor').html('(Sensor value: ' + mq7_value + ')');
        $('#mq7Label').text(mq7_value);
        $('#mq7Label').removeClass('').addClass('label-primary');

        mq7Values.push(mq7_value);
        mq7Values.shift();
        charts.forEach(function(chart) { chart.update(); });

        break;

      case 'pollution_air_mq131':
        var mq131_value = (parseFloat(payload))+"";
        $('#mq131Sensor').html('(Sensor value: ' + mq131_value + ')');
        $('#mq131Label').text(mq131_value);
        $('#mq131Label').removeClass('').addClass('label-primary');

        mq131Values.push(mq131_value);
        mq131Values.shift();
        charts.forEach(function(chart) { chart.update(); });

        break;

      case 'pollution_air_mq135':
        var mq135_value = (parseFloat(payload))+"";
        $('#mq135Sensor').html('(Sensor value: ' + mq135_value + ')');
        $('#mq135Label').text(mq135_value);
        $('#mq135Label').removeClass('').addClass('label-primary');

        mq135Values.push(mq135_value);
        mq135Values.shift();
        charts.forEach(function(chart) { chart.update(); });

        break;

      default: console.log('Error: Data do not match the MQTT topic.'); break;
    }
  }
);

socket.emit('subscribe', {topic : 'iot-1/d/+/evt/#'});
});

var interval = setInterval(function() {
    $('img').each(function() {
        var time = (new Date()).getTime();
        var oldurl = $(this).prop('src');
        var newurl = oldurl.split("?")[0]+'?'+ new Date().getTime();
        $(this).prop('src', newurl);
    });
}, 2000);

window.onload = function() {
  initializeChart();
};
