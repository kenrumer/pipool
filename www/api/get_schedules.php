<?php
  $db = new SQLite3('/home/pi/data/config.db');

  try {
    $results = $db->query('SELECT s.name, s.description, s.cron, s.status, sc.name AS sceneName, sc.description AS sceneDescription FROM schedules s, schedule_scene ss, scenes sc WHERE s.id == ss.schedules_id AND sc.id == ss.scenes_id;');
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