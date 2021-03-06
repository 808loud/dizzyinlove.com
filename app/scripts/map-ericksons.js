function initialize() {
    // Create an array of styles.
    var styles = [{
            stylers: [{
                    hue: '#D44645'
                },
                {
                    saturation: 0
                }
            ]
        },
        {
            featureType: 'water',
            stylers: [{
                    visibility: 'on'
                },
                {
                    color: '#9a9efd'
                },
                {
                    weight: 2.2
                },
                {
                    gamma: 2.54
                }
            ]
        },
        {
            featureType: 'road',
            elementType: 'geometry',
            stylers: [{
                    lightness: 100
                },
                {
                    visibility: 'simplified'
                }
            ]
        },
        {
            featureType: 'road',
            elementType: 'labels',
            stylers: [{
                    hue: '#00ffee'
                },
                {
                    lightness: 10
                },
                {
                    visibility: 'simplified'
                }
            ]
        }
    ];

    // Create a new StyledMapType object, passing it the array of styles,
    // as well as the name to be displayed on the map type control.
    var styledMap = new google.maps.StyledMapType(styles, {
        name: 'Styled Map'
    });

    var mapCanvas = document.getElementById('map-ericksons');
    var ericksons = new google.maps.LatLng(45.243798, -94.938861);
    var mapOptions = {
        zoom: 15,
        center: ericksons,
        mapTypeControlOptions: {
            mapTypeIds: [google.maps.MapTypeId.ROADMAP, 'map_style']
        },
        scrollwheel: false,
        disableDefaultUI: true
    };
    var map = new google.maps.Map(mapCanvas, mapOptions);

    //Associate the styled map with the MapTypeId and set it to display.
    map.mapTypes.set('map_style', styledMap);
    map.setMapTypeId('map_style');

    // To add the marker to the map, use the 'map' property
    var image = 'images/map-marker.svg';
    var marker = new google.maps.Marker({
        position: ericksons,
        map: map,
        icon: image
    });
}

google.maps.event.addDomListener(window, 'load', initialize);
