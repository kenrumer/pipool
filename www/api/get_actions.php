<?php
  $db = new SQLite3('/home/pi/data/config.db');

  try {
    $results1 = $db->query('SELECT a.name AS name, a.description, st.name AS statusType, sv.value AS statusValue FROM actions a, statuses stat, status_types st, status_values sv WHERE a.statuses_id == stat.id AND stat.status_values_id = sv.id AND stat.status_types_id = st.id;');
  } catch (Exception $e) {
    $results1 = [];
  }
  try {
    $results2 = $db->query('SELECT a.name AS name, a.description, st.name AS statusType, t.value AS temperatureValue, t.desiredValue AS temperatureDesiredValue FROM actions a, statuses stat, status_types st, temperatures t WHERE a.statuses_id == stat.id AND st.name = "temperature" AND a.id = t.actions_id;');
  } catch (Exception $e) {
    $results2 = [];
  }
  $jsonArray = [];
  if ($results1 || $results2) {
    if ($results1) {
      while ($row = $results1->fetchArray(SQLITE3_ASSOC)) {
        $jsonArray[] = $row;
      }
    }
    if ($results2) {
      while ($row = $results2->fetchArray(SQLITE3_ASSOC)) {
        $jsonArray[] = $row;
      }
    }
    echo json_encode($jsonArray);
  } else {
    echo "[]";
  }
?>