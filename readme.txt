=== HWCOE Syllabus Upload ===
Contributors: Allison Logan

Allows admin to display a dynamic table of entries using the Syllabus Upload custom_post_type.

== Description ==

The HWCOE Syllabus Upload plugin has been created specifically for HWCOE child theme websites. This plugin allows admin to display a dynamic table of entries using the Syllabus Upload custom_post_type, Gravity Forms  using the Syllabi Uploads form, the Gravity Forms + Custom Post Types plugin and Advanced Custom Fields (ACF) using the Syllabus Upload Modules field group. 

The specified custom_post_type, Gravity Form and ACF Field Group must be used for this plugin to work. 

== Required Plugins ==

Advanced Custom Fields
Gravity Forms
Gravity Forms + Custom Post Types

== Installation ==

1. Ensure all required plugins are installed and activated. 
2. Upload the plugin to the plugins folder. 
3. Activate the plugin from the Plugins dashboard.
4. Go to Import/Export under the Gravity Forms Plugin.
5. Import the "gravityforms-syllabi-upload.json" file.
6. Go to ACF > Tools and import the "group_5cd17365c47bc.json" file.
7. Paste the form shortcode on a page on your website.
8. Paste the plugin shortcode -- [syllabi-table] -- on the page you would like to display the table. 
9. As syllabi entries are submitted, they will be pending approval in the Course Syllabi tab and will display in the table once you have published the entry.



== Changelog ==

= v1.2 (2019-05-30) =
	- Update form settings to previous version

= v1.1 (2019-05-21) =
	- Enqueue assets
	- Update form settings
		- Delete form entries automatically after 10 days ("Course Syllabi" posts created by the form are not affected)
		- Enable form admin notification with link to edit/approve the Custom Post Type entry
		- Update form confirmation message to include hard refresh (allows easier multiple uploads)

= v1.0 (2019-05-16) =
* [NEW] Initial release