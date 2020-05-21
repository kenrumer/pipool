<?php
  $db = new SQLite3('/home/pi/data/config.db');

  try {
    $results = $db->query('SELECT * FROM scenes;');
  } catch (Exception $e) {
    $results = FALSE;
  }
  $jsonArray = [];
  if ($results) {
    while ($row = $results->fetchArray(SQLITE3_ASSOC)) {
      $jsonArray[] = $row;
    }
    echo json_encode($jsonArray);
  } else {
    echo "[]";
  }
?>