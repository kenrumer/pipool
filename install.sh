#!/bin/bash

if [ "x-h" -eq "x$1" ]; then
  echo "install pipool on this Raspberry Pi"
  echo "--set-profile : overwrite .profile with a useful profile into the users home directory"
  exit 0
fi

sudo apt-get update
sudo apt-get upgrade
sudo apt-get install php libapache2-mod-php php-mcrypt python python3 speedtest-cli rsync sed nodejs git sqlite curl wget apache2 supervisor
sudo composer require dragonmantank/cron-expression

mkdir ./arduino
curl -fsSL https://raw.githubusercontent.com/arduino/arduino-cli/master/install.sh | BINDIR=./arduino sh
sudo cp ./arduino/arduino-cli /usr/bin/

chmod +x command_server/*
sudo cp command_server/* /usr/bin/

chmod +x ~/pipool/bin/*
cp -r pi/bin ~/pipool/bin/

sudo cp -r www/* /var/www/html/

sudo touch /var/log/pipool/send_commands.log
sudo touch /var/log/pipool/command_server.log
sudo chown pi:pi /var/log/pipool/send_commands.log

if [ "x--set-profile" -ne "x$1"]; then
  if [ -f ~/.profile ]; then
    cp ~/.profile ~/.profile.bak
  fi
  cp files/profile ~/.profile
fi

sudo cp files/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

sudo service supervisor restart