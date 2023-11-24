<?php
  // دریافت مقادیر فرم
  $name = $_POST['name'];
  $email = $_POST['email'];
  $message = $_POST['message'];

  // ارسال ایمیل
  mail('soheilahasanpoory1999@gmail.com', $message, 'From: ' . $email);

  // پیام موفقیت
  echo "message sent!";
?>
