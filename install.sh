#!/bin/bash

sudo apt-get update
sudo apt-get upgrade
sudo apt-get install php libapache2-mod-php php-mcrypt python python3 speedtest-cli rsync sed nodejs git sqlite curl wget apache2 supervisor
sudo composer require dragonmantank/cron-expression

cp -r pi/bin ~/
chmod +x ~/bin/*
cp -r pi/command-server/command_server.py ~/command_server/
chmod +x ~/command_server/command_server.py
sudo cp -r www/* /var/www/html/

cp files/profile ~/.profile
sudo cp files/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

mkdir ~/logs
