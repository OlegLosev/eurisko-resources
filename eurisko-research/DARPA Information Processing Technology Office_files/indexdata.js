




/*
     FILE ARCHIVED ON 4:14:39 Feb 9, 2007 AND RETRIEVED FROM THE
     INTERNET ARCHIVE ON 19:31:46 Oct 22, 2014.
     JAVASCRIPT APPENDED BY WAYBACK MACHINE, COPYRIGHT INTERNET ARCHIVE.

     ALL OTHER CONTENT MAY ALSO BE PROTECTED BY COPYRIGHT (17 U.S.C.
     SECTION 108(a)(3)).
*/

//  QuickMenu Pro, Copyright (c) - 2002, OpenCube Inc. - /web/20070209041439/http://www.opencube.com
//  
//
//
//  QuickMenu Pro - (QuickMenu v3.0) Works With....
//
//      IE4, IE5.x, IE6 (Win 95, 98, ME, 2000, NT, XP)
//      IE4, IE5.x, &up (Mac)
//      NS4.x (All Platforms)
//      NS5/6.x (All Platforms)
//      ns7 - beta (All Platforms)
//      Opera 5 & 6 (All Platforms)
//      Mozilla 1.0 & up
//
//  
//  To customize QuickMenu Pro open this file in a simple text 
//  editor (Notepad or similar). Modify and add parameters (all 
//  customizable parameters start with 'DQM_'), save this file,
//  and open 'sample.htm' in a browser to view your menu. View
//  the source for sample.htm for information on connecting 
//  sub menus to HTML images or build your page around the
//  included sample.htm file.
//
//  QuickMenu conditionally loads the necessary JavaScript
//  files (.js) depending on the browser and platform the user
//  is viewing the menu on. The total file size for each
//  browser / platform scenario is no larger than 12K.
//
//  This sample data file contains comments and help information
//  to assist in the initial customization of your drop down 
//  menu. If you base your implementation on this documented template
//  we recommend the removal of the comments before using on the web, as 
//  to optimize the overall file size and load time of the menu for 
//  the end user.  With the comments removed, this sample data files
//  size may be reduced by as much as 70%. Note: To simplify comment 
//  removal there is a uncommented version of this sample template
//  offered in the 'samples' folder.
//
//
//  NOTE: Parameters with an appended '//' are commented out,
//        delete the '//' to activate the parameter. 
//
//        Commenting out required parameters will cause errors.
//
//        Text values, except TRUE and FALSE statements, must be
//        enclosed by double quotes (").
//  
//        Each parameter value should appear on its own line.
//
//        This data file may also be placed within your HTML page
//        by enclosing between JavaScript tags.
//
//        Due to browser limitations, DHTML menus will not appear
//        on top of Flash objects, across frames, or over certain
//        form field elements. A hide and show workaround for form
//        fields is included with this menu (see the 'Menu event 
//        triggered custom function calls' section below).         




/*-------------------------------------------
Copyright Notice - The following parameter is 
required in order for the menu to function.
--------------------------------------------*/


   DQM_Notice = "DHTML QuickMenu, Copyright (c) - 2002, OpenCube Inc. - www.opencube.com"

	/*code0 = 1294
	code1 = 891
	code2 = 1256
	code3 = 1291
	code4 = 1169
	code5 = 774
	code6 = 648
	code7 = 774
	sequence = "9x88_4"*/
   	
	code0 = 1294
	code1 = 891
	code2 = 1256
	code4 = 319
	code3 = 1169 
	code4 = 774 
	code5 = 648 
	code6 = 774 
	code7 = 1402 
	code8 = 999 
	code9 = 319 
	code10 = 1291 
	code11 = 888 
	code12 = 357 
	sequence = '9x44_5' 

/*-------------------------------------------
required menu Settings
--------------------------------------------*/


   DQM_sub_menu_width = 140      //default sub menu widths
   DQM_sub_xy = "0,0"            //default sub x,y coordinates
   
   
   DQM_codebase = ""             //relative location of .js files
   DQM_urltarget = "_self"       //set to: _self, _parent, _new, or "my frame name"

   DQM_border_width = 1
   DQM_divider_height = 1

   DQM_border_color = "#FFFFFF"  //Hex color value or 'transparent'
   DQM_menu_bgcolor = "#00356D"  //Hex color value or 'transparent'
   DQM_hl_bgcolor = "#548EBD"    //Hex color value
   

   /*---The following parameter defines the delay
   -----time between the mouse moving outside of
   -----a sub menu and the sub menu actually closing.
   -----In all browsers except Netscape 4.x this time 
   -----period starts after the mouse leaves the sub 
   -----menu and the user stops moving the mouse. 
   -----This setting is useful for reducing end-user 
   -----error in the selection of sub menus. Defined 
   -----in milliseconds (1/1000s)---*/

   DQM_mouse_off_delay = 100
   
  
   /*---Internet Explorer Mac Offset Fix - The following
   -----parameters correct position reporting bugs in
   -----ie4.x and ie5.x on the Mac OS9 and OSX platforms.
   -----Adjust the offsets below until the first level
   -----sub menus pop up in the correct location.*/
   
   DQM_os9_ie5mac_offset_X = 10
   DQM_os9_ie5mac_offset_Y = 15

   DQM_osx_ie5mac_offset_X = 0
   DQM_osx_ie5mac_offset_Y = 0

   DQM_ie4mac_offset_X = -8
   DQM_ie4mac_offset_Y = -50


   /*---Netscape 4.x fix option - bugs in Netscape 4.x
   -----can cause layers (sub menus) to be rendered
   -----incorrectly upon resizing the browser window.
   -----The only way to work around this issue is to reload
   -----the page after a resize. The following parameters allow
   -----the menu to automatically reload the page for the user
   -----after a resize, prompts the user to reload the page
   -----manually after resize, or attempts to correct the menu
   -----after a resize without reloading.-----*/
   
   DQM_nn4_reaload_after_resize = true

   DQM_nn4_resize_prompt_user = false
   DQM_nn4_resize_prompt_message = "To reinitialize the navigation menu please click the 'Reload' button."
   

   /*---Opera 4 & up fix - The following parameter option
   -----corrects div mouse detection bugs on Opera. Set the
   -----parameter value to true if your sub menus are located
   -----at the lowest point on the HTML page.---*/

   DQM_use_opera_div_detect_fix = true;


/*-------------------------------------------
Internet Explorer Transition Effects - IE5.5 & UP

Note: All non supporting browsers will ignore
the effect settings below while retaining the
complete sub menu functionality and look.
--------------------------------------------*/

	
   /*----Options include - none | fade | pixelate |
   ------iris | slide | gradientwipe | checkerboard |
   ------radialwipe | randombars | randomdissolve |stretch */

   DQM_sub_menu_effect = "none"
   DQM_sub_item_effect = "none"


   /*----Define the effect duration in seconds below---*/
   
   DQM_sub_menu_effect_duration = .4
   DQM_sub_item_effect_duration = .4

  
   /*----Customization option settings for the various effect
   ------transitions may be defined below---*/

   DQM_effect_pixelate_maxsqare = 25
   DQM_effect_iris_irisstyle = "CIRCLE"          //CROSS, CIRCLE, PLUS, SQUARE, or STAR
   DQM_effect_checkerboard_squaresx = 14
   DQM_effect_checkerboard_squaresY = 14
   DQM_effect_checkerboard_direction = "RIGHT"   //UP, DOWN, LEFT, RIGHT
   

   /*----Note: Due to browser limitations, when using a 
   ------drop shadow effect or sub menu opacity values
   ------less than 100, combined with sub menu and or
   ------sub menu item transitions, undesirable transition
   ------results may occur. To remedy the issue use
   ------semi transparent sub menus or borders without
   ------transition effects or use transition effects without
   ------borders and set the sub menu opacity value to 100.---*/
   
   /*----Opacity is defined with a value between
   ------1 and 100 with 100 being opaque---*/   	

   DQM_sub_menu_opacity = 100

   DQM_dropshadow_color = "none"                //Hex color value or 'none'
   DQM_dropshadow_offx = 5                      //drop shadow width
   DQM_dropshadow_offy = 5	                //drop shadow height



/*---------------------------------------------
Optional event triggered custom function calls
----------------------------------------------*/


   /*----This menu uses the documents onload event to
   ------initially generate the menus. If your HTML page requires
   ------the onload statement for calling other script functions
   ------or statements you may execute your code using the
   ------parameter below------*/

   //DQM_onload_code = "alert('custom function - onload')"


   /*----the following parameters may be used to execute
   ------custom code upon menu pop-up and hide.
   ------These are useful for hiding drop down boxes which
   ------may not be displayed under the menus due to
   ------browser limitations with certain form fields.---*/

   //DQM_showmenu_code0 = "status = 'custom show menu function call - menu0'"
   //DQM_showmenu_code1 = "status = 'custom show menu function call - menu1'"

   //DQM_hidemenu_code0 = "status = 'custom hide menu function call - menu0'"
   //DQM_hidemenu_code1 = "status = 'custom hide menu function call - menu1'"

 
   /*----the following parameters may be used to execute
   ------custom code upon clicking a menu item. If a URL link 
   ------and custom code are both defined the code will be 
   ------executed first, then the URL link will be loaded. This 
   ------parameter option is useful for opening custom pop up windows.---*/

   //DQM_clickitem_code0_0 = "alert('custom Function - Menu Item 0_0')"
   //DQM_clickitem_code1_0 = "alert('custom Function - Menu Item 1_0')"



/*-------------------------------------------
Required font Settings
--------------------------------------------*/
   

   DQM_textcolor = "#FFFFFF"
   DQM_fontfamily = "Verdana"            //Any available system font     
   DQM_fontsize = 10		         //Defined with pixel sizing  	
   DQM_fontsize_ie4 = 10		         //Defined with point sizing
   DQM_textdecoration = "normal"         //set to: 'normal', or 'underline'
   DQM_fontweight = "bold"             //set to: 'normal', or 'bold'
   DQM_fontstyle = "normal"	         //set to: 'normal', or 'italic' 	
   DQM_hl_textcolor = "#FFFFFF"
   DQM_hl_textdecoration = "normal"   //set to: 'normal', or 'underline'

   DQM_margin_top = 3
   DQM_margin_bottom = 3
   DQM_margin_left = 5
   DQM_margin_right = 4

   DQM_text_alignment = "left"           //set to: 'left', 'center' or 'right'
   



/*---------------------------------------------
Optional Icon Images - Relative Positioning

The relative positioned icon images are automatically
placed directly before or after the sub menu items
text (placement is determined by text alignment). 
By adding transparent space to the left or right
of the icon image itself, a custom image to text gap
may be obtained (Note: The gap space between icon
images and text may also be achieved by using the
menus optional 2nd icon image, see the 'optional 2nd
icon images' section for more information). The 
relative positioned icons are useful for creating
text bullets for aesthetic purposes or symbolic icons
for different sub menu items.
-----------------------------------------------*/


   /*----Unlimited icon images may be defined and associated with any sub menu
   ------item by specifying the icons index with the 'DQM_icon_index' parameter 
   ------see the 'sub menu customization' section below for examples---------*/


 /*  DQM_icon_image0 = "sample_images/bullet.gif"
     DQM_icon_rollover0 = "sample_images/bullet_hl.gif"
     DQM_icon_image_wh0 = "13,8"

     DQM_icon_image1 = "sample_images/arrow.gif"
     DQM_icon_rollover1 = "sample_images/arrow.gif"
     DQM_icon_image_wh1 = "13,10"  */


/*---------------------------------------------
Optional 2nd Icon Images - Absolute Positioning

The 2nd absolute positioned icons may be positioned 
anywhere within the sub menu items bounding area. 
These icon images are useful for creating arrows 
or other symbols which indicate the existence of a 
child sub menu. Sub menu text alignment or length 
will not affect the images placement.  If your images 
undesirably appear over the top of sub menu text 
items then adjust the icons coordinates, sub menu 
widths, or margins accordingly.

Note: Icon image coordinates are defined relative to
the top right corner of the sub menu item when the
sub menu text is left aligned, or relative to the
top left corner when the sub menus text is right
aligned.
-----------------------------------------------*/


   /*----Unlimited icon images may be defined and associated with any sub menu
   ------item by specifying the icons index with the 'DQM_2nd_icon_index' parameter 
   ------see the 'sub menu customization' section below for examples---------*/

/*   DQM_2nd_icon_image0 = "sample_images/arrow.gif"
     DQM_2nd_icon_rollover0 = "sample_images/arrow.gif"
     DQM_2nd_icon_image_wh0 = "13,10"
     DQM_2nd_icon_image_xy0 = "0,4" */


/*---------------------------------------------
Optional Status Bar Text

Note: Custom defined status bar text for a menu item 
will be displayed in place of the URL when the 
'DQM_show_urls_statusbar' parameter is set to true.
-----------------------------------------------*/

   DQM_show_urls_statusbar = false
   
   //DQM_status_text0 = "Sample text - Main Menu Item 0"
   //DQM_status_text1 = "Sample text - Main Menu Item 1"

   //DQM_status_text1_0 = "Sample text - Main Menu Item 1, Sub Item 0"	
   //DQM_status_text1_0 = "Sample text - Main Menu Item 1, Sub Item 1"	




/*********************************************************************/
/*                                                                   */
/*                       MAIN MENU CUSTOMIZATION                     */
/*                                                                   */ 
/*********************************************************************/

/*--------------------------------------------------------------------

The following parameters define the main menu items rollover images and 
URL's. Each rollover image is connected to a pre-defined HTML image within
your web page by matching the rollover parameters index to the defined
index of your html pages menu image (See the documentation or view the
source of 'sample.htm' for information on setting up HTML image tags 
as menu items). The rollover image parameters are provided as an optional 
effect and are not required in order for the menu to function.

Note: To define URL links for a main menu image, define both a URL link
      parameter below (i.e. "DQM_url0 = 'myurl.htm'") and attach a
      hyperlink tag (<a href='myurl.htm'>...<a>) to the menu's associated
      image within your HTML page. This redundancy is required for 
      complete cross browser functionality of main menu URL links.

      Specific main menu image URL targets may also be defined by defining
      a 'DQM_urltargetX' parameter, where X is the the associated main
      menu items index number. Allowable 'DQM_urltarget' param values
      include... _self, _parent, _new, or "my frame name".

---------------------------------------------------------------------*/
  

   /************************************************
   *********-------Main Menu 0---Personnel-----**************
   ************************************************/

   DQM_rollover_image0 = "/web/20070209041439/http://www.darpa.mil/ipto/images/personnel-button_rollover_1.gif"
   DQM_rollover_wh0 = "139,24"
   DQM_url0 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/personnel.htm";   


   /************************************************
   *********-------Main Menu 1----Programs----**************
   ************************************************/

   DQM_rollover_image1 = "/web/20070209041439/http://www.darpa.mil/ipto/images/programs-button_rollover_12.gif"
   DQM_rollover_wh1 = "139,25"
   DQM_url1 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/programs.htm";


   /************************************************
   *********-------Main Menu 2---Solicitations-----**************
   ************************************************/    

   DQM_rollover_image2 = "/web/20070209041439/http://www.darpa.mil/ipto/images/solicitations-button_rollov.gif" 
   DQM_rollover_wh2 = "139,25"
   DQM_url2 = "/web/20070209041439/http://www.darpa.mil/ipto/solicitations/solicitations.htm";   


   /************************************************
   *********-------Main Menu 3----Briefings----***************
   ************************************************/

   DQM_rollover_image3 = "/web/20070209041439/http://www.darpa.mil/ipto/images/briefings-button_rollover_1.gif" 
   DQM_rollover_wh3 = "139,25"
   DQM_url3 = "/web/20070209041439/http://www.darpa.mil/ipto/briefings/briefings.htm";   
  
  /************************************************
   *********-------Main Menu 4---News/Information-----***************
   ************************************************/

    DQM_rollover_image4 = "/web/20070209041439/http://www.darpa.mil/ipto/images/news-button_rollover_15.gif" 
    DQM_rollover_wh4 = "139,25"
    DQM_url4 = "/web/20070209041439/http://www.darpa.mil/ipto/news/news.htm";


  /************************************************
   *********-------Main Menu 5--DARPA Offices------***************
   ************************************************/

     DQM_rollover_image5 = "/web/20070209041439/http://www.darpa.mil/ipto/images/darpa-button_rollover_16.gif" 
     DQM_rollover_wh5 = "139,25"
     DQM_url5 = "/web/20070209041439/http://www.darpa.mil/body/darpaoff.html";
	 DQM_urltarget7 = " _new";	

	 
  /************************************************
   *********-------Main Menu 6--Contact------***************
   ************************************************/

     DQM_rollover_image6 = "/web/20070209041439/http://www.darpa.mil/ipto/images/contact-button_rollover_17.gif" 
     DQM_rollover_wh6 = "139,26"
     DQM_url6 = "/web/20070209041439/http://www.darpa.mil/ipto/contact.htm";	 
	 
	 
	 
  /************************************************
   *********-------Main Menu 7--IPTO Home------***************
   ************************************************/

     DQM_rollover_image7 = "/web/20070209041439/http://www.darpa.mil/ipto/images/ipto-button_rollover_18.gif" 
     DQM_rollover_wh7 = "139,41"
     DQM_url7 = "/web/20070209041439/http://www.darpa.mil/ipto/index.htm"
	 //DQM_urltarget7 = " _new";		

	 
	 
/*********************************************************************/
/*                                                                   */
/*                       SUB MENU CUSTOMIZATION                      */
/*                                                                   */ 
/*********************************************************************/

/*--------------------------------------------------------------------

The parameters below define the menus tree structure, text descriptions, 
associated icon images, URL links, and sub menu positioning. An infinite 
number of sub menu items and levels may be defined for each main menu item
by appending the appropriate index values to the 'DQM_subdesc' parameter. 
The included sample menus ('sample.htm') tree structure is defined below and
may be used as a simple guide for how to index your items.

The sub menu items text descriptions may be defined using plain text or
HTML. To use HTML simply place the entire string on one line and replace
all double quotes with single quotes.



ADDITIONAL SUB MENU CUSTOMIZATION OPTIONS:

The following parameters are referenced for documentation purposes and are 
additional customizable features which may be included as part of the sample 
sub menus defined below. (Note: to use these parameters add them to the sub 
menu sections below, they are not active when inside this comment field.)


Sub Menu Group Options:

The following setting apply to individual sub menu groups. Reference a sub
menu group within the parameter by appending the index value of the group
to the parameter name.
   
 1---The following parameters define unique colors, highlight colors
   border sizes, and divider heights for a sub menu. The X at the end
   of the parameter name represents the index of the sub menu. Child sub
   menus may also be referenced, i.e. 'DQM_menu_bgcolor1_0' refers to the
   2nd main menus, 1st sub menu items, child sub menu.
   
   DQM_border_widthX = 10;
   DQM_divider_heightX = 5;		
 
   DQM_border_colorX = "#0000ff";     
   DQM_menu_bgcolorX = "#ff0000"
   DQM_hl_bgcolorX = "#00ff00"
   DQM_textcolorX = "#00ff00"	 
   DQM_hl_textcolorX = "#ff0000"

 2---For more information on the following two parameter options see the 
   section above labeled 'Optional event triggered custom function calls'

   DQM_showmenu_codeX = "status = 'custom show menu function call'"
   DQM_hidemenu_codeX = "status = 'custom hide menu function call'"

 3---Define the text alignment of the sub menu as 'left', 'center', or 'right'

   DQM_text_alignmentX = "left"



Sub Menu Item Options:

The following settings apply to individual sub menu items, reference a sub
menu item within the parameter by appending the index value of the item
to the parameter name.

 1---The following parameter creates custom highlight text, any html tags
   may also be used to create formatted text and images. (Note: when using
   HTML convert all double quotes to single quotes and keep to one line.)
   Any number of 'DQM_hl_subdescX' parameters may be defined so long as there
   is a corresponding 'DQM_subdescX' parameter. The X at the end of the
   parameters name is variable and represents the index of the sub menu item.

   DQM_hl_subdescX = "custom highlight text"

 2---For more information on the following parameter option see the 
   section above labeled 'Optional event triggered custom function calls'

   DQM_clickitem_codeX = "alert('Sample onclick function call.')"

 3---Unique sub menu item URL targets may be defined with the 
   following parameter option. Allowable 'DQM_urltargetX' param values
   include... _self, _parent, _new, or "my frame name".

   DQM_urltargetX = "_new"


---------------------------------------------------------------------*/


/*---------------------------------------------
'Personnel' Sub Menu Items and Settings  #0
-----------------------------------------------*/

DQM_sub_xy0 = "0,0"
DQM_sub_menu_width0 = 150
DQM_subdesc0_0 = "Director"
DQM_url0_0 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/holland.htm"

	DQM_sub_xy0_0 = "0,0"
	DQM_sub_menu_width0_0 = 150
	DQM_subdesc0_0_0 = "Dr. Charles Holland"
	DQM_url0_0_0 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/holland.htm"

DQM_sub_xy0 = "0,0"
DQM_sub_menu_width0 = 150
DQM_subdesc0_1 = "Deputy Director"
	
	DQM_sub_xy0_1 = "0,0"
	DQM_sub_menu_width0_1 = 150
	DQM_subdesc0_1_0 = "Dr. Barbara Yoon"
	DQM_url0_1_0 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/yoon.htm"
	
DQM_sub_xy0 = "0,0"
DQM_sub_menu_width0 = 150
DQM_subdesc0_2 = "Program Managers &nbsp;>>"

	DQM_sub_xy0_2 = "0,0"
	DQM_sub_menu_width0_2 = 150
	DQM_subdesc0_2_0 = "Mr. Lee Badger"
	DQM_url0_2_0 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/badger.htm"	
				
	DQM_sub_xy0_2 = "0,0"
	DQM_sub_menu_width0_2 = 150
	DQM_subdesc0_2_1 = "Mr. David Gunning"
	DQM_url0_2_1 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/gunning.htm"			
	
	DQM_sub_xy0_2 = "0,0"
	DQM_sub_menu_width0_2 = 150
	DQM_subdesc0_2_2 = "Dr. William Harrod"
	DQM_url0_2_2 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/harrod.htm"			
				
	DQM_sub_xy0_2 = "0,0"
	DQM_sub_menu_width0_2 = 150
	DQM_subdesc0_2_3 = "Dr. Lawrence Jackel"
	DQM_url0_2_3 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/jackel.htm"			
				
	DQM_sub_xy0_2 = "0,0"
	DQM_sub_menu_width0_2 = 150
	DQM_subdesc0_2_4 = "Dr. Mari Maeda"
	DQM_url0_2_4 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/maeda.htm"	
	
	DQM_sub_xy0_2 = "0,0"
	DQM_sub_menu_width0_2 = 150
	DQM_subdesc0_2_5 = "Dr. Daniel Oblinger"
	DQM_url0_2_5 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/oblinger.htm"	
	
	DQM_sub_xy0_2 = "0,0"
	DQM_sub_menu_width0_2 = 150
	DQM_subdesc0_2_6 = "Dr. Sean O’Brien"
	DQM_url0_2_6 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/obrien.htm"	

	DQM_sub_xy0_2 = "0,0"
	DQM_sub_menu_width0_2 = 150
	DQM_subdesc0_2_7 = "Dr. Joseph Olive"
	DQM_url0_2_7 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/olive.htm"	
		
	DQM_sub_xy0_2 = "0,0"
	DQM_sub_menu_width0_2 = 150
	DQM_subdesc0_2_8 = "J. Christopher Ramming"
	DQM_url0_2_8 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/ramming.htm"			
		
	DQM_sub_xy0_2 = "0,0"
	DQM_sub_menu_width0_2 = 150
	DQM_subdesc0_2_9 = "LTC John R. Surdu, Ph.D."
	DQM_url0_2_9 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/surdu.htm"	
	
	DQM_sub_xy0_2 = "0,0"
	DQM_sub_menu_width0_2 = 150
	DQM_subdesc0_2_10 = "Dr. Tom Wagner"
	DQM_url0_2_10 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/wagner.htm"	
	
DQM_sub_xy0 = "0,0"
DQM_sub_menu_width0 = 150
DQM_subdesc0_3 = "Program Management"
DQM_url0_3 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/wsmith.htm"	

	DQM_sub_xy0_3 = "0,0"
	DQM_sub_menu_width0_3 = 150
	DQM_subdesc0_3_0 = "Mrs. Wendy Smith"
	DQM_url0_3_0 = "/web/20070209041439/http://www.darpa.mil/ipto/personnel/wsmith.htm"		
	

/*---------------------------------------------
'Programs' Sub Menu Items and Settings  #1
-----------------------------------------------*/

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_0 = "Adaptive Cognition-Enhanced Radio Teams (ACERT)"
DQM_url1_0 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/acert/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_1 = "Architectures for Cognitive Information Processing (ACIP)"
DQM_url1_1 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/acip/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_2 = "Biologically-Inspired Cognitive Architectures (BICA)"
DQM_url1_2 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/bica/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_3 = "Coordination Decision Support Assistants (Coordinators)"
DQM_url1_3 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/coordinators/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_4 = "Global Autonomous Language Exploitation (GALE)"
DQM_url1_4 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/gale/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_5 = "High Productivity Computing Systems (HPCS)"
DQM_url1_5 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/hpcs/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_6 = "Integrated Learning (IL)"
DQM_url1_6 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/il/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_7 = "Information Theory for Mobile Ad-Hoc Networks (ITMANET)"
DQM_url1_7 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/itmanet/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_8 = "Learning Applied to Ground Robots (LAGR)"
DQM_url1_8 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/lagr/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_9 = "Learning Locomotion"
DQM_url1_9 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/ll/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_10 = "Personalized Assistant that Learns (PAL)"
DQM_url1_10 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/pal/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_11 = "Polymorphous Computing Architectures (PCA)"
DQM_url1_11 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/pca/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_12 = "Power Aware Computing and Communication (PAC/C)"
DQM_url1_12 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/pacc/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_13 = "Real-World Reasoning (REAL)"
DQM_url1_13 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/real/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_14 = "Situation Aware Protocols in Edge Network Technologies (SAPIENT)"
DQM_url1_14 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/sapient/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_15 = "Self-Regenerative Systems (SRS)"
DQM_url1_15 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/srs/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_16 = "Taskable Agent Software Kit (TASK)"
DQM_url1_16 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/task/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_17 = "Transfer Learning (TL)"
DQM_url1_17 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/tl/index.htm"

DQM_sub_xy1 = "0,0"
DQM_sub_menu_width1 = 415
DQM_subdesc1_18 = "Program Initiative: Bootstrapped Learning (BL)"
DQM_url1_18 = "/web/20070209041439/http://www.darpa.mil/ipto/programs/bl/index.htm"

/*---------------------------------------------
'Solicitations' Sub Menu Items and Settings   #2
-----------------------------------------------*/

//DQM_sub_xy2 = "0,0"
//DQM_sub_menu_width2 = 145
//DQM_subdesc2_0 = "Upcoming BAAs" 
//DQM_url2_0 = "/web/20070209041439/http://www.darpa.mil/ipto/solicitations/upcomingBAAs.htm"

	

/*---------------------------------------------
'Briefings' Sub Menu Items and Settings   #3
-----------------------------------------------*/

//DQM_sub_xy3 = "0,0"
//DQM_sub_menu_width3 = 150
//DQM_subdesc3_0 = "Available shortly" 
//DQM_url3_0 = "/web/20070209041439/http://www.darpa.mil/ipto/briefings/briefings.htm"
//DQM_icon_image2_2 = "test.jpg"
//DQM_icon_rollover2_2 = "testblue.jpg"
//DQM_icon_image_wh2_2 = "9,13"
//DQM_url2_2 = ""

/*---------------------------------------------
'NEWS / INFO Sub Menu Items and Settings   #4
-----------------------------------------------*/

//DQM_sub_xy4 = "0,0"
//DQM_sub_menu_width4 = 150
//DQM_subdesc4_0 = "Available shortly"
//DQM_url4_0 = "/web/20070209041439/http://www.darpa.mil/ipto/news/news.htm"

/*---------------------------------------------
DARPA Offices' Sub Menu Items and Settings  #5
-----------------------------------------------*/

DQM_sub_xy5 = "0,0"
DQM_sub_menu_width5 = 105
DQM_subdesc5_0 = "Director's Office"
DQM_url5_0 = "/web/20070209041439/http://www.darpa.mil/body/Diro.html"
DQM_urltarget5_0 = " _new";	

DQM_sub_xy5 = "0,0"
DQM_sub_menu_width5 = 105
DQM_subdesc5_1 = "DSO"
DQM_url5_1 = "/web/20070209041439/http://www.darpa.mil/dso/"
DQM_urltarget5_1 = " _new";	

	DQM_sub_xy5_1 = "0,0"
	DQM_sub_menu_width5_1 = 150
	DQM_subdesc5_1_0 = "Defense Sciences Office"

DQM_sub_xy5 = "0,0"
DQM_sub_menu_width5 = 105
DQM_subdesc5_2 = "IPTO"
DQM_url5_2 = "/web/20070209041439/http://www.darpa.mil/ipto/index.htm"
DQM_urltarget5_2 = " _new";	

	DQM_sub_xy5_2 = "0,0"
	DQM_sub_menu_width5_2 = 150
	DQM_subdesc5_2_0 = "Information Processing Technology Office"

DQM_sub_xy5 = "0,0"
DQM_sub_menu_width5 = 105
DQM_subdesc5_3 = "IXO"
DQM_url5_3 = "/web/20070209041439/http://dtsn.darpa.mil/ixo/"
DQM_urltarget5_3 = " _new";	

	DQM_sub_xy5_3 = "0,0"
	DQM_sub_menu_width5_3 = 150
	DQM_subdesc5_3_0 = "Information Exploitation Office"

DQM_sub_xy5 = "0,0"
DQM_sub_menu_width5 = 105
DQM_subdesc5_4 = "MTO"
DQM_url5_4 = "/web/20070209041439/http://www.darpa.mil/mto/"
DQM_urltarget5_4 = " _new";	

	DQM_sub_xy5_4 = "0,0"
	DQM_sub_menu_width5_4 = 150
	DQM_subdesc5_4_0 = "Microsystems Technology Office"

DQM_sub_xy5 = "0,0"
DQM_sub_menu_width5 = 105
DQM_subdesc5_5 = "STO"
DQM_url5_5 = "/web/20070209041439/http://www.darpa.mil/sto/"
DQM_urltarget5_5 = " _new";	

	DQM_sub_xy5_5 = "0,0"
	DQM_sub_menu_width5_5 = 150
	DQM_subdesc5_5_0 = "Strategic Technology Office"

DQM_sub_xy5 = "0,0"
DQM_sub_menu_width5 = 105
DQM_subdesc5_6 = "TTO"
DQM_url5_6 = "/web/20070209041439/http://www.darpa.mil/tto/"
DQM_urltarget5_6 = " _new";	

	DQM_sub_xy5_6 = "0,0"
	DQM_sub_menu_width5_6 = 150
	DQM_subdesc5_6_0 = "Tactical Technology Office"

DQM_sub_xy5 = "0,0"
DQM_sub_menu_width5 = 105
DQM_subdesc5_7 = "COMP"
DQM_url5_7 = "/web/20070209041439/http://www.darpa.mil/body/darpaoff.html#comp"
DQM_urltarget5_7 = " _new";	

	DQM_sub_xy5_7 = "0,0"
	DQM_sub_menu_width5_7 = 150
	DQM_subdesc5_7_0 = "The Office of the Comptroller"

DQM_sub_xy5 = "0,0"
DQM_sub_menu_width5 = 105
DQM_subdesc5_8 = "CMO"
DQM_url5_8 = "/web/20070209041439/http://www.darpa.mil/cmo/"
DQM_urltarget5_8 = " _new";	

	DQM_sub_xy5_8 = "0,0"
	DQM_sub_menu_width5_8 = 150
	DQM_subdesc5_8_0 = "Contracts Management Office"

DQM_sub_xy5 = "0,0"
DQM_sub_menu_width5 = 105
DQM_subdesc5_9 = "OMO"
DQM_url5_9 = "/web/20070209041439/http://www.darpa.mil/body/darpaoff.html#omo"
DQM_urltarget5_9 = " _new";	

	DQM_sub_xy5_9 = "0,0"
	DQM_sub_menu_width5_9 = 150
	DQM_subdesc5_9_0 = "Office of Management Operations"

DQM_sub_xy5 = "0,0"
DQM_sub_menu_width5 = 105
DQM_subdesc5_10 = "HRD"
DQM_url5_10 = "/web/20070209041439/http://www.darpa.mil/hrd/"
DQM_urltarget5_10 = " _new";	

	DQM_sub_xy5_10 = "0,0"
	DQM_sub_menu_width5_10 = 150
	DQM_subdesc5_10_0 = "Human Resources Directorate"
	//DQM_url5_11_0 = ""

DQM_sub_xy5 = "0,0"
DQM_sub_menu_width5 = 105
DQM_subdesc5_11 = "SBIR"
DQM_url5_11 = "/web/20070209041439/http://www.darpa.mil/sbir/"
DQM_urltarget5_11 = " _new";	

	DQM_sub_xy5_11 = "0,0"
	DQM_sub_menu_width5_11 = 150
	DQM_subdesc5_11_0 = "Small Business Innovation Research"


/*---------------------------------------------
'Site Map' Sub Menu Items and Settings  #6
-----------------------------------------------*/

//DQM_sub_xy6 = "0,0"
//DQM_sub_menu_width6 = 180
//DQM_subdesc6_0 = ""
//DQM_url6_0 = "/web/20070209041439/http://www.darpa.mil/ipto/contact.htm"

/*---------------------------------------------
'Site Map' Sub Menu Items and Settings   #7
-----------------------------------------------*/

//DQM_sub_xy7 = "0,0"
//DQM_sub_menu_width7 = 180
//DQM_subdesc7_0 = "Not currently available"
//DQM_url7_0 = "/web/20070209041439/http://www.darpa.mil/ipto/index.htm"
