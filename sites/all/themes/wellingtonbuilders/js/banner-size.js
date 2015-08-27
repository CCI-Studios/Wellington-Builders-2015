(function($){    
    $(function(){

          var imgSrc = $('.view-services-detail > .view-header img').attr('src');
            var current1 = $('.view-services-detail > .view-header');
            $('.view-services-detail > .view-header img').remove();
            $(current1).html('<div class="backbg"></div>');
            $('.view-services-detail >.view-header .backbg').css('background-image', 'url(' + imgSrc + ')');  

                                 var max= $('.view-banner-images .views-row').length;

             for(var i=1; i<=max; i++)
                    {   
                        var imgSrc = $('.view-banner-images .views-row-'+i+' .views-field-field-image-banner .field-content img').attr('src');
                        var current1 = $('.view-banner-images .views-row-'+i+' .views-field-field-image-banner .field-content');
                        $('.view-banner-images .views-row-'+i+' .views-field-field-image-banner .field-content img').remove();
                        $(current1).html('<div class="backbg"></div>');
                        $('.view-banner-images .views-row-'+i+' .views-field-field-image-banner .field-content .backbg').css('background-image', 'url(' + imgSrc + ')');        
                   }

    });
})(jQuery);