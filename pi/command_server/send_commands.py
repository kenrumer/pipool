#!/usr/bin/python

import socket
import sys
import random
import datetime

MSG_LENGTH = 14
LOG_FILE = "/var/log/pipool/send_commands.log"

def logger(string):
  log_file = open(LOG_FILE, 'a')
  log_file.write(datetime.datetime.now().strftime("%c")+" : "+string+"\n")
  log_file.close()

if __name__ == "__main__":
  socketInstance = socket.create_connection(("localhost", 10000))
  for arg in sys.argv[1:]:
    message = str.encode("<@"+str(random.randint(0, 9999)).zfill(4)+arg+"@>")
    socketInstance.sendall(message)
    response = socketInstance.recv(MSG_LENGTH)
    logger(response)
    print(response)
  socketInstance.close()