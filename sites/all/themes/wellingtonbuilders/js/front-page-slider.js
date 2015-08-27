(function($){    

    $(function(){
     
        
        var active = 0;
        var min = 0;
        var max = 0;
        var timer;
        var row=[];

        $(".view-projects-front .views-row").click(stop);
        max = rows().length;
        $(".view-projects-front a.prev").click(clickPrevious);
        $(".view-projects-front a.next").click(clickNext);
        var $first = rows().eq(0).clone();
       
        container().append($first);
     
         console.log(rows());
      // createIndicators();
        setTimeout(layout, 50);
        $(window).resize(layout);

        //start();


        function createIndicators()
        {
            var $ul = $("<ul class='indicators' />");
            i=0;
            rows().each(function(i){

                if (i < max)
                {   
                    row[i]=rows().eq(i);
                   
                }
            });
         $.each( row, function( i,val ) {
         if (i < max)
            {   
                 var $li = $("<li>"+val+"</li>");
                    $li.click(clickIndicator);
                    $ul.append($li);
                    console.log(val);
            }
        
        });
            $ul.find(":first-child").addClass("active");
            $(".view-projects-front .view-content").append($ul);
        }

       

    function start()
    {
        timer = setInterval(timerNext, 8000);
    }

    function container()
    {
        return $(".view-projects-front .view-content");
    }
    function rows()
    {
        return container().find(".views-row");
    }
    function indicators()
    {
        return $(".view-projects-front .indicators li");
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
            return 1;
        }
        
        return 1;
    }

    function isMobile()
    {
        return $(window).width() < 540;
    }
    
    function isTablet()
    {
        return $(window).width() < 1220;
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