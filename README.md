## FogComputingPlatform-MQTT-Panel

Base on fabaff/mqtt-panel https://github.com/fabaff/mqtt-panel.

![demo](https://github.com/WakeupTsai/FogComputingPlatform-MQTT-Panel/blob/master/mqtt-panel.gif)


#### 安裝
```
git clone https://github.com/WakeupTsai/FogComputingPlatform-MQTT-Panel.git
cd FogComputingPlatform-MQTT-Panel

# 安裝dependencies
npm install

# 設定環境變數
export MQTTPANELPORT=[port] #若沒設定預設為5000
export MQTTBROKER=mqtt:[broker ip] #若沒設定預設為mqtt:m2m.eclipse.org

# 啟動mqtt-panel,完成後即可到localhost:[port]查看
npm start

# 可隨便publish一則訊息測試網頁是否正常
mosquitto_pub -h [broker ip] -t "lab/test" -m "test"
