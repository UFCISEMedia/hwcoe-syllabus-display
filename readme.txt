=== HWCOE Syllabus Upload ===
Contributors: Allison Logan

Allows admin to display a dynamic table of entries using the Syllabus Upload custom_post_type.

== Description ==

The HWCOE Syllabus Upload plugin has been created specifically for HWCOE child theme websites. This plugin allows admin to display a dynamic table of entries using the Syllabus Upload custom_post_type and Advanced Custom Fields (ACF) using the Syllabus Upload Modules field group. 

The specified custom_post_type and ACF Field Group must be used for this plugin to work. 

== Installation ==

1. Ensure all required plugins are installed and activated. 
2. Upload the plugin to the plugins folder. 
3. Upload the "datatables.min.css" file to the css folder. 
4. Upload the "datatables.min.js" and "hwcoesyllabi.js" files to the js folder. 
5. Activate the plugin from the Plugins dashboard.
6. Go to Import/Export under the Gravity Forms Plugin.
7. Import the "gravityforms-syllabi-upload.json" file.
8. Go to ACF > Tools and import the "group_5cd17365c47bc.json" file.
9. Paste the form shortcode on a page on your website.
10. Paste the plugin shortcode -- [syllabi-table] -- on the page you would like to display the table. 
11. As syllabi entries are submitted, they will be pending approval in the Course Syllabi tab and will display in the table once you have published the entry.

== Required Plugins ==

Advanced Custom Fields
Gravity Forms
Gravity Forms + Custom Post Types

== Changelog ==

= v1.0 (2019-05-16) =
* [NEW] Initial release