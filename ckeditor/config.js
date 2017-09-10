/**
 * @license Copyright (c) 2003-2017, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

CKEDITOR.editorConfig = function( config ) {
	// Define changes to default configuration here. For example:
	// config.language = 'fr';
	// config.uiColor = '#AADC6E';
  config.extraPlugins = 'youtube';
  config.youtube_width = '640px';
  config.youtube_height = '480px';
  config.youtube_responsive = false;
  config.youtube_related = true;
  config.youtube_older = false;
  config.youtube_privacy = false;
  config.youtube_autoplay = false;
  config.youtube_controls = true;
  config.youtube_disabled_fields = ['txtEmbed', 'chkAutoplay'];
};
