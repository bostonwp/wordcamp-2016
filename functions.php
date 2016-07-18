<?php

/**
 * Enqueue the parent theme's styles.
 * You can leave this out if you're replacing the parent theme's CSS.
 */
function boston_2016_styles() {
	wp_enqueue_style( 'parent-style', get_template_directory_uri() . '/style.css' );
}
add_action( 'wp_enqueue_scripts', 'boston_2016_styles' );

function boston_2016_enable_features( $sites ) {
	$sites[] = 47;
	return $sites;
}
add_filter( 'wcpt_speaker_post_avatar_enabled_site_ids',       'boston_2016_enable_features' );
add_filter( 'wcpt_session_post_speaker_info_enabled_site_ids', 'boston_2016_enable_features' );
add_filter( 'wcpt_session_post_slides_info_enabled_site_ids',  'boston_2016_enable_features' );
add_filter( 'wcpt_session_post_video_info_enabled_site_ids',   'boston_2016_enable_features' );
add_filter( 'wcpt_speaker_post_session_info_enabled_site_ids', 'boston_2016_enable_features' );
