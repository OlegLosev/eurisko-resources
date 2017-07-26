(function ($) {

Drupal.behaviors.omega_cycorp = {

  attach: function (context, settings) {  
 
    $('.navigation ul.menu').superfish();  
 
    $('.announce-text, .content_slideshow').cycle();
    
    if($.cookie("announce")){ 
       $('#special-announce .showpanel').hide();
       $('#special-announce #opend').text('+');
    }
    $('#special-announce #opend').click(function(){  
        if(!$.cookie("announce")){ 
           $.cookie("announce", 1);  
        }
        else{         
          $.cookie('announce', null);
        }       
        var link = $(this);
        $('#special-announce .showpanel').slideToggle('slow', function() {
            if ($(this).is(":visible")) {
                 link.text('x');                              
            } else {
                 link.text('+');
                            
            }        
        });

    });
   /*-------------------------*/
   $('#search-block-form .form-text').focus(function(){
      $(this).animate({'width':'250px'}, 500);
     });
   $('#search-block-form .form-text').blur(function(){
      $(this).animate({'width':'180px'},500);
     });
   
     /*-------------------------*/
    $('map[name=Map] area').each(function(){
        var valueID = $(this).attr('href');              
        valueID = valueID.substring(19);
        valueID = valueID.replace("/", "-"); 
        content = $('#'+valueID).html();
       $(this).qtip({
         content: {text : content},
         style: {
            width: 432,
            padding: 10,
            tip: true,
            border: {
               width: 2,
               radius: 5,
               color: '#dfdfdf'
            },
            name: 'dark',//'dark', 'cream', 'green', 'red', 'light', 'blue'
         }
       });
  
    });
     
 
  
        /*-------------------------*/
  
           
       
   
   
   // 
  }};
})(jQuery);

    