  (function($){    

    $(function(){
     
        
        var active = 0;
        var min = 0;
        var max = 0;
        var timer;

        $(".view-portfolio-projects .views-row").click(stop);
        max = rows().length;
        $(".view-portfolio-projects a.prev").click(clickPrevious);
        $(".view-portfolio-projects a.next").click(clickNext);
        $(".view-portfolio-projects a.prev,.view-portfolio-projects a.next").hide();

        if( $(window).width() < 980)
        {   
            sliderarrows();
        }

        function sliderarrows()
        {
            if($(window).width() < 980 && $(window).width() > 550)
            {   
                if(max > 3)
                {
                   cloning();
                }
             }
             else if($(window).width() < 550)
             {

                if(max > 1)
                {
                   cloning();
                } 
             }
             else if(max > 5)
             {
                cloning();

                return false;
             }
        }

        function cloning()
        {
            var $first = rows().eq(0).clone();
            var $second = rows().eq(1).clone();
            var $third = rows().eq(2).clone();
            var $fourth = rows().eq(3).clone();
            var $fifth = rows().eq(4).clone();
            container().append($first);
            container().append($second);
            container().append($third);
            container().append($fourth);
            container().append($fifth);
            $(".view-portfolio-projects a.prev,.view-portfolio-projects a.next").show();
            //start();
        }

        $(window).resize(function()
        {   
            if( $(window).width() < 980)
            {   
                sliderarrows();
            }

         });

       
       // createIndicators();
        setTimeout(layout, 50);
        $(window).resize(layout);
         sliderarrows();

       

        function createIndicators()
        {
            var $ul = $("<ul class='indicators' />");
            rows().each(function(i){
                if (i < max)
                {
                    var $li = $("<li>"+i+"</li>");
                    $li.click(clickIndicator);
                    $ul.append($li);
                }
            });
            $ul.find(":first-child").addClass("active");
            $(".view-portfolio-projects .view-content").append($ul);
        }

    function start()
    {
        timer = setInterval(timerNext, 8000);
    }

    function container()
    {
        return $(".view-portfolio-projects .view-content");
    }
    function rows()
    {
        return container().find(".views-row");
    }
    function indicators()
    {
        return $(".view-portfolio-projects .indicators li");
    }

    function layout()
    {
        var numRows = rows().length;
        var containerWidth = numRows * rowWidth();
        var width = 1/numRows*100
        container().width(containerWidth+"%");
        rows().width(width+"%");
    }

    function moveContainer()
    {
        var left = "-" + (active*rowWidth()) + "%";
        container().stop(false, false).animate({"left":left},1500);
        setActiveIndicator(active);
    }
    function jumpToEnd()
    {
        var active = rows().length-rowsPerPage();
        var left = "-" + (active*rowWidth()) + "%";
        container().css({"left":left});
    }
    function jumpToBeginning()
    {
        var active = min;
        var left = "-" + (active*rowWidth()) + "%";
        container().css({"left":left});
    }
    function rowWidth()
    {
        return 100/rowsPerPage();
    }
    function rowsPerPage()
    {
        if (isMobile())
        {
            return 1;
        }
        else if (isTablet())
        {
            return 3;
        }
        
        return 5;
    }

    function isMobile()
    {
        return $(window).width() < 540;
    }
    
    function isTablet()
    {
        return $(window).width() < 980;
    }

    function previous()
    {
        active--;
        if (active < min)
        {
            jumpToEnd();
            active = max-1;
        }
        moveContainer();
    }

    function next()
    {
        active++;
        if (active > max)
        {
            jumpToBeginning();
            active = min+1;
        }
        moveContainer();
    }

    function gotoIndex(i)
    {
        active = i;
        moveContainer();
    }

    function clickPrevious()
    {
        previous();
        stop();
        return false;
    }

    function clickNext()
    {
        next();
        stop();
        return false;
    }

    function clickIndicator()
    {
        var i = $(this).index();
        setActiveIndicator(i);
        gotoIndex(i);
        stop();
    }

    function setActiveIndicator(i)
    {
        if (i >= max)
        {
            i = 0;
        }
        indicators().removeClass("active").eq(i).addClass("active");
    }

    function stop()
    {
        clearInterval(timer);
    }

    function timerNext()
    {
        next();
        layout();
    }


});

 

})(jQuery);