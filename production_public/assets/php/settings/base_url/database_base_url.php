<?php
	$actual_host = $_SERVER['SERVER_ADDR'];
	if (IN_PRODUCTION_MODE) {

		if (strpos($_SERVER['HTTP_HOST'], "-2.akwaabasoftware.com")) {
			define('CLIENT_BASE_URL', "https://database-2.akwaabasoftware.com/");
		} else {
			define('CLIENT_BASE_URL', "https://database.akwaabasoftware.com/");
		}
		
	} else {
		// define('DATABASE_BASE_URL', "http://$actual_host/AMG/plus_db/client_dashboard/");
		define('DATABASE_BASE_URL', "http://$actual_host:84/");
	}

	// $_SERVER['SERVER_NAME'] = "app.districtdb.com";
	$_SERVER['SERVER_NAME'] = "database.akwaabasoftware.com";

	// if ($_SERVER['SERVER_NAME'] == "app.districtdb.com") {
	// 	define('DATABASE_BASE_URL', "https://app.districtdb.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "database.akwaabasoftware.com") {
	// 	define('DATABASE_BASE_URL', "https://database.akwaabasoftware.com/");
	// } else if ($_SERVER['SERVER_NAME'] == "admin.clockintoday.com") {
	// 	define('DATABASE_BASE_URL', "https://admin.clockintoday.com/");
	// } else {
	// 	define('DATABASE_BASE_URL', "https://database.akwaabasoftware.com/");
	// }
	// print_r($_SERVER);

	// $_SERVER['SERVER_NAME'] = "nalag.Akwaaba.com";