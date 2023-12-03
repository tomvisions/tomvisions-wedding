/* _______________  Google Custom Settings for Map ________________ */
if ($('#map-container').length) {

    $.fn.googleMap = function(address, options) {

        // ===== change map colors based on body class for theme color options (green, ivory, purple, gold) white is not named and is the default
        if ($('body').is('.green')) {
            var $hue = "#aad333";
            var $sat = "1";
        } else
        if ($('body').is('.ivory')) {
            var $hue = "#f8f5dc";
            var $sat = "1";
        } else
        if ($('body').is('.purple')) {
            var $hue = "#9c8fd0";
            var $sat = ".8";
        } else
        if ($('body').is('.gold')) {
            var $hue = "#f9e386";
            var $sat = "1";
        } else {
            var $hue = "#000000";
            var $sat = "-100";
        }


        // ===== styles 
        var styles = [{
            stylers: [{
                hue: $hue
            }, {
                saturation: $sat
            }, {
                gamma: .8
            }]
        }, {
            featureType: "road",
            elementType: "geometry",
            stylers: [{
                lightness: 20
            }, {
                visibility: "simplified"
            }]
        }, {
            featureType: "road",
            elementType: "labels",
            stylers: [{
                visibility: "simplified"
            }]
        }];

        var defaults = {
            lat: 44.081996,
            long: -123.0286928,
            zoom: 18,
            scrollwheel: false,
            mapTypeIds: [google.maps.MapTypeId.ROADMAP]
        };
        options = $.extend(defaults, options || {
            styles: styles
        });

        var center = new google.maps.LatLng(options.lat, options.long);
        var map = new google.maps.Map(this.get(0), $.extend(options, {
            center: center
        }));


        var infoContent = '<div id="content">' + $('#info-content').html() + '</div>';
        var infowindow = new google.maps.InfoWindow({
            content: infoContent
        });

        var geocoder = new google.maps.Geocoder();
        geocoder.geocode({
            address: address
        }, function(place, status) {
            if (status == google.maps.GeocoderStatus.OK && place.length) {
                if (status != google.maps.GeocoderStatus.ZERO_RESULTS) {
                    map.setCenter(place[0].geometry.location);
                    var marker = new google.maps.Marker({
                        position: place[0].geometry.location,
                        map: map
                    });

                    google.maps.event.addListener(marker, 'click', function() {
                        infowindow.open(map, marker);
                    });
                    infowindow.open(map, marker);

                }
            }
        });
    };


    // ===== center locator load and resize :: add the address 
    function googleMapCenter() {

        var location = $('#location').text();
        $('#map-container').googleMap(location);

    }

    $(window).load(googleMapCenter);
    $(window).resize(googleMapCenter);

} // end if #container-map