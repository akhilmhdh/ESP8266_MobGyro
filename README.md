# ESP8266_MobGyro
A project on esp8266 to controll a dc car using smart phone gyroscope. Using websockets,C library and advance features provided by esp8266
# Getting Started
## Softwares
- Arduino IDE
## Hardwares
- ESP8266(mine was -01 version)
- Usb-ttl
- Arduino uno or any other versions
- A complete kit of dc car including motor driver,power supply etc
## Files
### esp.ino
It contains the code to be flashed on to esp8266.
Completes following tasks:
- Creates a webserver and sets up the esp
- Opens a websockets and provides a web page for smartphone controlling
- Handles the input data
- Sends it to arduino(i used arduino to control my car because as i was using esp8266-01 which has few pins)
### esp-to-arduino.ino
It receives the data and controls the motors depending on data received
### data
It contains the html,css and js files for the server routes of esp.Needs to flash in on esp using spiff file system

#THATS ALL TY:)

      
