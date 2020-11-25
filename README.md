# s60030049

![กราฟ.jpg](กราฟ.jpg)

ใช้โค้ดจากงาน RTC https://github.com/GT013/s60030049.git

1.config->modbus.js เชื่อมต่อพอร์ท modbus ttyUSB0 และใช้ buadRate: 9600

![modbus.png](modbus.PNG)

2. แก้ไขไฟล์ config->mongoose.js ดังรูป

![mongoose.png](mongoose.PNG)

3. ไฟล์ index.js setInterval ดังรูป

![index.png](index.PNG)

เรียกใช้งานคำสั่ง node index.js
