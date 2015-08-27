(function($) {
    $(function(){
       

        if($("#block-block-7").length > 0)
        {
            createMap();
        }

    });

    function createMap()
    {
        var location = new google.maps.LatLng(43.2195367,-81.8676802);
        var mapOptions = {
            zoom: 17,
            center: location,
            draggable: false,
            scrollwheel: false,
        }

        var styles = [
                          {
                            stylers:  [
                                    {
                                        saturation: -400

                                    },
                                    {
                                        gamma: 0.2
                                    }
                                ]
                          },
                          {
                            featureType: "road",
                            elementType: "geometry",
                            stylers: [
                              { lightness: 16 },
                              {color:"#404040"},
                              { visibility: "simplified" }
                            ]
                          },
                            {
                                "featureType": "road",
                                "elementType": "labels.text.stroke",
                                "stylers": [
                                    {
                                        "lightness": 0, 
                                         color:"#404040"
                                    }
                                ]
                            },
                            {
                                "featureType": "road",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {   
                                        color:"#ffffff",
                                        "lightness":-100
                                    }
                                ]
                            },
                            {
                                "featureType": "road.arterial",
                                "elementType": "labels.text.fill",
                                "stylers": [
                                    {
                                        "color": "#ffffff"
                                    },
                                    {
                                        "lightness": 0
                                    }
                                ]
                            }
                         
                    ];

          google.maps.event.addDomListener(window, 'resize', function() {
            map.setCenter(location);
        });
        var image = '/sites/all/themes/wellingtonbuilders/images/map-marker.png';
    
        var map = new google.maps.Map($("#block-block-7").get(0),
                        mapOptions);

        var marker = new google.maps.Marker({
            position: location,
            map: map,
            icon: image,
            title: "Wellington Builders"
        });

       marker.setMap(map,marker);
       map.setOptions({styles: styles});
    }
}(jQuery));