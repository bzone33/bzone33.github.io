
   
    /* want sticky nav to reappear each time we get to new section, hidden at top page, appear once hit the first "get food fast" section , will add new class to the section section-features used for js so the section- features is for css formatting */



 $(document).ready(function() {                                   /* makes sure can only run after the document has been loaded, lets change bkgrnd color of the h1 element, incorp this into index.html file at bottom */   
 
   
/* For Sticky Navigation */     
     
    $('.js--section-features').waypoint(function(direction)       /*direction detects if user is scrolling down or up on page*/
            { if (direction == "down")      
                              
            { $('nav').addClass('sticky');                          /* above added the sticky class in our index.html: <header><nav class="sticky">  WE deleted this class now in index.html bc declaring it here */
                } 
             
             else {
            $('nav').removeClass('sticky');  
                }
            }, 
            
            { offset: '60px;'});                                   /* nav will show up 60px before we hit the nav section/get food fast */ 
                                        
 /* For Scroll On Buttons - need to add these classes js by the btn-full classes that are css in the index.html file 'scroll to plans and scroll to start' */    
     
     $('.js--scroll-to-plans').click(function () {
         $('html, body').animate({scrollTop: $('.js--section-plans').offset().top}, 1000);})         /* add js section-plans to index.html */
     
     
      $('.js--scroll-to-start').click(function () {
         $('html, body').animate({scrollTop: $('.js--section-features').offset().top}, 1000);})
     
         
/*  Navigation Scroll - to make work, need to go to index.html navigation and define some anchors */
  
     
 $(function() {    
     
     $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') 
        || location.hostname == this.hostname) {

        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
           if (target.length) {
             $('html,body').animate({
                 scrollTop: target.offset().top
            }, 1000);
            return false;
        }
    }
  });
});     
     
     
/* Animations on scroll= add js--wp-1 for row of features to include all 4 items, need to make content invisible first   */  
     /* download the animate.css from animate.css website, save file in css vendor resources. incorp in  index.html header */
     
 
     $('.js--wp-1').waypoint(function(direction) {
         $('.js--wp-1').addClass('animated fadeIn');  
        } , {
         offset: '50%'
     });
     
     
     
     $('.js--wp-2').waypoint(function(direction) {
         $('.js--wp-2').addClass('animated fadeInUp');  
        } , {
         offset: '50%'
     });
     
     
     
     $('.js--wp-3').waypoint(function(direction) {
         $('.js--wp-3').addClass('animated fadeIn');  
        } , {
         offset: '50%'
     });
     
     
     
     $('.js--wp-4').waypoint(function(direction) {
         $('.js--wp-4').addClass('animated pulse');  
        } , {
         offset: '50%'
     });
     
     /* Mobile Nav - want to make main menu appear when click mobile nav button. go to index file and create class by mobile-nav-icon to use for this called it js--nav-icon, also js--main-nav.  */ 
     
     $('.js--nav-icon').click(function() {
         var nav = $('.js--main-nav'); /* we create this variable called nav which is reference to js--main-nav so dont have to type all out here forward, just type 'nav' */
         var icon = $('.js--nav-icon i');
         
         nav.slideToggle(200); /* this is 200 miliseconds nts */ 
         
         /* now need to see the mobile menu what it looks like once clicked. an "X" instead of the 3bar menu or in my case the infinity symbol */
         
         
         if (icon.hasClass('ion-md-infinite')) {
             icon.addClass('ion-md-time');
             icon.removeClass('ion-md-infinite');
         } else {
               icon.addClass('ion-md-infinite');
             icon.removeClass('ion-md-time');
         }
         
         
         
         
         
     });     
     
});
     

            
            
                            
  
    

    
                                        

















