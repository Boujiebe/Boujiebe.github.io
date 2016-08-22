<!DOCTYPE html>
<!--[if IE 7]>
<html class="ie ie7" <?php language_attributes(); ?>>
<![endif]-->
<!--[if IE 8]>
<html class="ie ie8" <?php language_attributes(); ?>>
<![endif]-->
<!--[if !(IE 7) | !(IE 8)  ]><!-->
<html <?php language_attributes(); ?>>
<!--<![endif]-->
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>" />
<meta content="width=device-width, initial-scale=1" name="viewport" />
<title><?php bloginfo( 'name' ); ?> | <?php bloginfo( 'description' ); ?></title>
<link rel="profile" href="http://gmpg.org/xfn/11" />
<!-- Favicon -->
<link rel="Shortcut Icon" type="image/x-icon" href="<?php bloginfo('template_url'); ?>/img/favicon.ico" />

<!-- Analytics -->
<!-- If staging or webhosting, don't index -->
<?php if(stristr( $_SERVER['SERVER_NAME'], "webhosting" ) || stristr($_SERVER['SERVER_NAME'], "staging" )): ?>
	<meta name="robots" content="noindex, nofollow">
<?php endif; ?>

<!-- Make IE recognise HTML5 elements for styling -->
<!--[if lte IE 9]>
	<script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
	<script src="<?php bloginfo('template_url'); ?>/assets/libraries/css3-mediaqueries.js"></script>
<![endif]-->

<!-- Make IE recognise media queries for styling -->

<!-- build:css dist/css/vendor.css -->
<!-- bower:css -->

<!-- endbower -->
<!-- endbuild -->

<!-- Theme styles -->
<link rel="stylesheet" type="text/css" href="<?php bloginfo('template_url'); ?>/dist/css/style-site.css" />
</head>

<body <?php body_class(); ?>>
	<header>
	</header>
	