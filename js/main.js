/** ===============

.. header_search
.. Fixed-header
.. Menu
.. Number rotator
.. Skillbar
.. Tab
.. Accordion
.. Isotope
.. Prettyphoto
.. share-icon_btn
.. Slick_slider
.. Back to top 

 =============== */



jQuery(function($) {

  "use strict";


/*------------------------------------------------------------------------------*/
/* header_search
/*------------------------------------------------------------------------------*/
    
    $(".header_search").each(function(){  
        $(".search_btn", this).on("click", function(e){

            e.preventDefault();
            e.stopPropagation();

            $(".header_search_content").toggleClass("on");

            if ($('.header_search a').hasClass('open')) {

                $( ".header_search a i" ).removeClass('ti-close').addClass('ti-search');
                
                $(this).removeClass('open').addClass('sclose');    

            } 

            else {
                $(".header_search a").removeClass('sclose').addClass('open');

                $( ".header_search a i" ).removeClass('ti-search').addClass('ti-close');  
                
            }
        });

    });


/*------------------------------------------------------------------------------*/
/* Fixed-header
/*------------------------------------------------------------------------------*/

    $(window).scroll(function(){
        

        if ( matchMedia( 'only screen and (min-width: 1200px)' ).matches ) 
        {
            if ($(window).scrollTop() >= 50 ) {
                $('.cmt-stickable-header').addClass('fixed-header');
            }
            else {
                $('.cmt-stickable-header').removeClass('fixed-header');
            }
        }
    });



/*------------------------------------------------------------------------------*/
/* Menu
/*------------------------------------------------------------------------------*/

    var menu = {
        initialize: function() {
            this.Menuhover();
        },

        Menuhover : function(){
            var getNav = $("nav.main-menu"),
                getWindow = $(window).width(),
                getHeight = $(window).height(),
                getIn = getNav.find("ul.menu").data("in"),
                getOut = getNav.find("ul.menu").data("out");
            
            if ( matchMedia( 'only screen and (max-width: 1200px)' ).matches ) {
                                                     
                // Enable click event
                $("nav.main-menu ul.menu").each(function(){
                    
                    // Dropdown Fade Toggle
                    $("a.mega-menu-link", this).on('click', function (e) {
                        e.preventDefault();
                        var t = $(this);
                        t.toggleClass('active').next('ul').toggleClass('active');
                    });   

                    // Megamenu style
                    $(".megamenu-fw", this).each(function(){
                        $(".col-menu", this).each(function(){
                            $(".title", this).off("click");
                            $(".title", this).on("click", function(){
                                $(this).closest(".col-menu").find(".content").stop().toggleClass('active');
                                $(this).closest(".col-menu").toggleClass("active");
                                return false;
                                e.preventDefault();
                                
                            });

                        });
                    });  
                    
                }); 
            }
        },
    };
    
    $('.btn-show-menu-mobile').on('click', function(e){
        $(this).toggleClass('is-active'); 
        $('.menu-mobile').toggleClass('show'); 
        return false;
        e.preventDefault();  
    });

    // Initialize
    $(document).ready(function(){
        menu.initialize();

    });



/*------------------------------------------------------------------------------*/
/* Animation on scroll: Number rotator
/*------------------------------------------------------------------------------*/
    
    $("[data-appear-animation]").each(function() {
    var self      = $(this);
    var animation = self.data("appear-animation");
    var delay     = (self.data("appear-animation-delay") ? self.data("appear-animation-delay") : 0);
        
        if( $(window).width() > 959 ) {
            self.html('0');
            self.waypoint(function(direction) {
                if( !self.hasClass('completed') ){
                    var from     = self.data('from');
                    var to       = self.data('to');
                    var interval = self.data('interval');
                    self.numinate({
                        format: '%counter%',
                        from: from,
                        to: to,
                        runningInterval: 2000,
                        stepUnit: interval,
                        onComplete: function(elem) {
                            self.addClass('completed');
                        }
                    });
                }
            }, { offset:'85%' });
        } else {
            if( animation == 'animateWidth' ) {
                self.css('width', self.data("width"));
            }
        }
    });


   
/*------------------------------------------------------------------------------*/
/* Skillbar
/*------------------------------------------------------------------------------*/
    
    $('.cmt-progress-bar').each(function() {
        $(this).find('.progress-bar').width(0);
    });

    $('.cmt-progress-bar').each(function() {

        $(this).find('.progress-bar').animate({
            width: $(this).attr('data-percent')
        }, 2000);
    });


    // Part of the code responsible for loading percentages:

    $('.progress-bar-percent[data-percentage]').each(function () {

        var progress = $(this);
        var percentage = Math.ceil($(this).attr('data-percentage'));

            $({countNum: 0}).animate({countNum: percentage}, {
                duration: 2000,
                easing:'linear',
                step: function() {
                // What todo on every count
                    var pct = '';
                    if(percentage == 0){
                        pct = Math.floor(this.countNum) + '%';
                    }else{
                        pct = Math.floor(this.countNum+1) + '%';
                    }
                    progress.text(pct);
                }
            });
    });

/*------------------------------------------------------------------------------*/
/* Tab
/*------------------------------------------------------------------------------*/ 
    $(document).ready(function() {

        $('.cmt-tabs > .tabs').children('li').on('click', function(e) {  

            var tab = $(this).closest('.cmt-tabs > .tabs > .tab'), 

            index = $(this).closest('.cmt-tabs > .tabs > li').index();

            $(this).parents('.cmt-tabs').children(' .tabs').children('li.active ').removeClass('active'); 

            $(this).addClass('active'); 
            $(this).addClass('active').parents('.cmt-tabs').children('.content-tab').find('.content-inner').not('.content-inner:eq(' + index + ')').slideUp();
            $(this).addClass('active').parents('.cmt-tabs').children('.content-tab').find('.content-inner:eq(' + index + ')').slideDown();

            e.preventDefault();
        });
    });


/*------------------------------------------------------------------------------*/
/* Accordion
/*------------------------------------------------------------------------------*/

    var allPanels = $('.accordion > .toggle').children('.toggle-content').hide();

    $('.toggle-title').on('click',function(e) {

        e.preventDefault();
        var $this = $(this);
            $this.parent().parent().find('.toggle .toggle-title a').removeClass('active');

        if ($this.next().hasClass('show')) {

            $this.next().removeClass('show');   
            $this.next().slideUp('easeInExpo');

        } else {
            $this.parent().parent().find('.toggle .toggle-content').removeClass('show');
            $this.parent().parent().find('.toggle .toggle-content').slideUp('easeInExpo');
            $this.next().toggleClass('show');
            $this.next().removeClass('show');
            $this.next().slideToggle('easeInExpo');
           $this.next().parent().children().children().addClass('active');

        }

    });


/*------------------------------------------------------------------------------*/
/* Isotope
/*------------------------------------------------------------------------------*/

   $(function () {

        if ( $().isotope ) {           
            var $container = $('.isotope-project');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.project_item',
                    transitionDuration: '1s',
                    layoutMode: 'fitRows'
                });
            });

            $('.portfolio-filter li').on('click',function() {                           
                var selector = $(this).find("a").attr('data-filter');
                $('.portfolio-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        };

   });


    
/*------------------------------------------------------------------------------*/
/* Prettyphoto
/*------------------------------------------------------------------------------*/
    $(function () {
        jQuery("a[data-gal^='prettyPhoto']").prettyPhoto({hook:'data-gal'});
        if(typeof jQuery.fn.prettyPhoto=="function"){
            jQuery('div.gallery a[href*=".jpg"], div.gallery a[href*=".jpeg"],div.gallery a[href*=".png"], div.gallery a[href*=".gif"]').each(function(){
                if(jQuery(this).attr('target')!='_blank'){jQuery(this).attr('rel','prettyPhoto[wp-gallery]')}
            });
            jQuery('.gallery-item a[href*=".jpg"], .gallery-item a[href*=".jpeg"], .gallery-item a[href*=".png"], .gallery-item a[href*=".gif"]').each(function(){
                if(jQuery(this).attr('target')!='_blank'){jQuery(this).attr('rel','prettyPhoto[coregallery]')}
            });
            jQuery('a[href*=".jpg"], a[href*=".jpeg"], a[href*=".png"], a[href*=".gif"]').each(function(){
                if(jQuery(this).attr('target')!='_blank'&&!jQuery(this).hasClass('prettyphoto')){var attr=$(this).attr('rel');
                if(typeof attr!==typeof undefined&&attr!==!1&&attr!='prettyPhoto'){jQuery(this).attr('data-rel','prettyPhoto')}}
            });
            jQuery('a[data-rel^="prettyPhoto"]').prettyPhoto();
            jQuery('a.cmt_prettyphoto, div.cmt_prettyphoto a').prettyPhoto();
            jQuery('a[rel^="prettyPhoto"]').prettyPhoto();
        };
    });
    
    
    
/*------------------------------------------------------------------------------*/
/* share-icon_btn
/*------------------------------------------------------------------------------*/
    jQuery(".cmt-blog-classic").each(function(t){
        var e=jQuery(this);
        e.find(".cmt-social-share-icon_btn").on("click",function(){
            return e.find(".social-icons").toggleClass("show"),!1
        })
    });

/*------------------------------------------------------------------------------*/
/* Slick_slider
/*------------------------------------------------------------------------------*/
    $(".slick_slider").slick({
        speed: 1000,
        infinite: true,
        arrows: false,
        dots: false,                   
        autoplay: false,
        centerMode : false,

        responsive: [{

            breakpoint: 1360,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {

            breakpoint: 1024,
            settings: {
            slidesToShow: 3,
            slidesToScroll: 3
            }
        },
        {

            breakpoint: 680,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 575,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }]
    });




/*------------------------------------------------------------------------------*/
/* Back to top
/*------------------------------------------------------------------------------*/
     
    // ===== Scroll to Top ==== 
    jQuery('#totop').hide();

    $(window).on("scroll",function(){
        if (jQuery(this).scrollTop() >= 500) {        // If page is scrolled more than 50px
            jQuery('#totop').fadeIn(200);    // Fade in the arrow
            jQuery('#totop').addClass('top-visible');
        } else {
            jQuery('#totop').fadeOut(200);   // Else fade out the arrow
            jQuery('#totop').removeClass('top-visible');
        }
    });

    jQuery('#totop').on("click",function() {      // When arrow is clicked
        jQuery('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 500);
        return false;
    });



});