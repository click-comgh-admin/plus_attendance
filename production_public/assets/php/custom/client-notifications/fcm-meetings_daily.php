<?php
	require_once ('../../main.php');
	require_once DIRECTORY.'/settings/classes.php';

	$base_url = API_BASE_URL;

	$curl = curl_init();
	$response = curlCall($base_url."attendance/v2/meeting-alerts-daily", $curl, $method="GET");
    print_r($response);
	$err = curl_error($curl);
    curl_close($curl);
    $response = curlCallResponse($err, $response);
    if (@$response['error'] == 1) {
        $response = [];
    }
	echo json_encode($response);
?>