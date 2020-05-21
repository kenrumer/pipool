# PiPool
Control pool equipment with raspberry pi and arduino

<h1 align="center">
  <br>
  <img src="https://github.com/kenrumer/pipool/blob/master/images/swimmer-solid.png" alt="pipool" width="160">
</h1>

<h4 align="center">A Raspberry Pi Pool Controller.</h4>

PiPool is an IoT automation tool for your :swimmer: pool equiptment.
PiPool offers a more extensible solution than traditional pool automation systems.
Simple software installation, just use your engineering skills to create the physical connections.
Using ssh or RESTapi the system will work with Alexa or Google home.

# Demo
👉 Intructable <a href="https://www.instructables.com/id/Custom-Pool-Controller-Arduino-and-Raspberry-Pi-No/">here</a>.
<br>

## Installation
[FR]: https://github.com/kenrumer/pipool/releases

Probably should work through all of your wiring and connections before the software parts.

### Arduino

Install Arduino IDE, upload the arduino image using the upload via serial button

### Raspberry Pi

Use: 'git clone https://github.com/kenrumer/pipool.git' to download the project.<br/>
Run install.sh to set everything in motion. <br/>
There are various os packages that get installed.  Use your judgement for what you want.<br/>
Required binaries are supervisor, apache2, php, composer and python<br/>
If you pass --set-profile the install will overwrite your .profile file to include health checks.<br/>
If your Arduino is not connected to the serial port you will get an error the next time you login.<br/>
Created a server called command_server.py which opens port 10000, this probably didn't need to happen, thought I would use it as an api given the small storage of the pi at the time.  I may update this<br/>

## License

MIT  © [Ken Rumer](http://kenrumer.com)

command_server dir manages the serial and socket communications
pi dir controls the rpi stuff
arduino dir controls the arduino stuff (need to document the arduino build process)
www controls the UI stuff
