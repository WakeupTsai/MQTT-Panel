## MQTT-Panel

Base on fabaff/mqtt-panel https://github.com/fabaff/mqtt-panel.

![demo](https://github.com/WakeupTsai/FogComputingPlatform-MQTT-Panel/blob/master/mqtt-panel.gif)


#### Install
```
git clone https://github.com/WakeupTsai/MQTT-Panel.git
cd MQTT-Panel

# install dependencies
npm install

# set environment variables
export MQTTPANELPORT=[port] # default 5000
export MQTTBROKER=mqtt:[broker ip] # default mqtt:m2m.eclipse.org

# start mqtt-panel
npm start

# publish message to check
mosquitto_pub -h [broker ip] -t "lab/test" -m "test"
