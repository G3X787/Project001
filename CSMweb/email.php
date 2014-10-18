<?php

	$spam = $_POST['title'];
	
	if($spam == ""){
		$to = "mike@centralschoolmanor.com";
		$subject = "Email from Central School Manor Website Contact Form";
		$Fname = $_POST['firstName'];
		$Lname = $_POST['lastName'];
		$address = $_POST['address'];
		$city = $_POST['city'];
		$phone = $_POST['phone'];
		$email = $_POST['mail'];
		$message = $_POST['iAmInterestedIn'];
		
		$reply = "Reply to: ".$email;
		
		$msg = "Name: ".$Fname." ".$Lname."\n\nAddress: ".$address."\n\nCity: ".$city."\n\nEmail: ".$email."\n\nPhone: ".$phone."\n\nMessage: ".$message;
		
		mail($to, $subject, $msg, $reply);
		header("Location: contact.html");
	}else{
		
	}
?>