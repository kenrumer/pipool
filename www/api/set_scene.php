<?php
  //echo 'Hello ' . htmlspecialchars($_GET["name"]) . '!';
  if (htmlspecialchars($_GET["name"]) == "spa") {
      exec("ls /home/pi/bin/", $output, $return_var);
      print_r ($output);
  }
?>