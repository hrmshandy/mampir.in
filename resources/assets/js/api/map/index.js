import L from 'leaflet'
import 'leaflet.markercluster'
import './googleTileLayer.js'
import './activeArea.js'

// SVG Icon
import svgMapPinCluster from './svg/map-pin-cluster.js'
import svgMapPinSelected from './svg/map-pin-selected.js'
import svgMapPinEmpty from './svg/map-pin-empty.js'

// Utilities
import Cookies from '../cookies.js'
import {empty} from '../helpers.js'

class Map {
	constructor($el) {
		this.$el = $el;
	}

	init() {
		if (typeof L !== "object" || !L.hasOwnProperty('map')) {
            return;
        }

        const map = this.map = L.map('map', {
            scrollWheelZoom: false,
            zoom: 5,
            attributionControl: false
        });
        const markers = this.markers = new L.MarkerClusterGroup({
            showCoverageOnHover: false
        });

        // $(window).on('pxg:refreshmap', function() {
        //     map._onResize();
        // });

        const tileLayer = L.gridLayer.googleMutant({
            type: 'roadmap'
        });
        $(this.$el).addClass('map--google');

        map.addLayer(tileLayer);

        if(!$(this.$el).is('.map--detail')) {
        	Event.listen("updated_results", (cards) => {
				this.updateCards(cards);
			});
        } else {
            Event.listen("load-map", (location) => {
                if (typeof location.lat !== "undefined" && typeof location.lng !== "undefined") {
                    this.addPinToMap({ lat: location.lat, lng: location.lng }, true);
                    this.map.addLayer(this.markers);
                    this.map.setView({ lat: location.lat, lng: location.lng }, 13);
                } else {
                    $(this.$el).hide();
                }
            });
        }
	}

	updateCards(cards) {
		const self = this;
		var cardsWithLocation = 0;

		if (!cards) {
            $('body').addClass('has-no-listings');
            this.defaultMapView();
            return;
        }

        if(typeof this.map !== "undefined") {
        	this.map.removeLayer(this.markers);

        	this.markers = new L.MarkerClusterGroup({
                showCoverageOnHover: false,
                iconCreateFunction: function(cluster) {
                   	var childCount = cluster.getChildCount();

					var c = ' marker-cluster-';
					if (childCount < 10) {
						c += 'small';
					} else if (childCount < 100) {
						c += 'medium';
					} else {
						c += 'large';
					}

					return new L.DivIcon({ html: svgMapPinCluster + '<span>' + childCount + '</span>', className: 'marker-cluster' + c, iconSize: new L.Point(40, 40) });
    			}
            });
            cards.forEach((obj, i) => {
                var cardHasLocation = self.addPinToMap(obj, true);
                if (cardHasLocation) {
                    cardsWithLocation += 1;
                }
            });

            if (cardsWithLocation != 0) {
                this.map.fitBounds(this.markers.getBounds(), {
                    padding: [50, 50]
                });
                this.map.addLayer(this.markers);

                var mapZoom = this.map.getZoom();
                var bounds = this.markers.getBounds();
                var lat = (bounds._northEast.lat + bounds._southWest.lat) / 2;
                var lng = (bounds._northEast.lng + bounds._southWest.lng) / 2;
                bounds = [lat, lng];

                Cookies.set('mampir.in-bounds', JSON.stringify(bounds), 1);
                Cookies.set('mampir.in-mapZoom', mapZoom, 1);
            } else {
                this.defaultMapView();
            }
        }
	}

	addPinToMap($item, archive) {
		var iconClass, m;

		if (empty($item.lat) || empty($item.lng)) {
            return false;
        }

        if (typeof $item.categories !== "undefined" && !$item.categories.length) {
            iconClass = 'pin pin--empty';
        } else {
            iconClass = 'pin';
        }



        var iconHTML = "<div class='" + iconClass + "'>" + svgMapPinEmpty + "</div>";

        // if ($(this.$el).is('.map--detail')) {
        //     iconHTML = "<div class='" + iconClass + "'>" + svgMapPinSelected + "<div class='pin__icon'>" + $('.single-listing-map-category-icon').html() + "</div></div>";
        // } else if ($categories.length) {
        //     iconHTML = "<div class='" + iconClass + "'>" + svgMapPinSelected + "<div class='pin__icon'>" + $categories.html() + "</div></div>";
        // }

        const divIcon = L.divIcon({
            html: iconHTML,
            className: '',
            iconSize: [48, 59], // size of the icon
            iconAnchor: [24, 59], // point of the icon which will correspond to marker's location
            popupAnchor: [0, -59] // point from which the popup should open relative to the iconAnchor
        });

        let coord = new L.LatLng($item.lat, $item.lng);

        m = L.marker(coord, {
            icon: divIcon
        });

        if (typeof archive !== "undefined" && !archive) {

            // $item.hover(function() {
            //     $(m._icon).find('.pin').addClass('pin--selected');
            // }, function() {
            //     $(m._icon).find('.pin').removeClass('pin--selected');
            // });

            // var rating = $item.find('.js-average-rating').text(),
            //     ratingHTML = rating.length ? "<div class='popup__rating'><span>" + rating + "</span></div>" : "",
            //     address = $item.find('.card__address').text();
            //console.log($item);
            m.bindPopup(
                "<a class='popup' href='/detail/" + $item.slug + "'>" +
                "<div class='popup__image' style='background-image: url(/storage/" + $item.photos[0].filename + ");'></div>" +
                "<div class='popup__content'>" +
                "<h3 class='popup__title'>" + $item.name + "</h3>" +
                "<div class='popup__footer'>" +
                //ratingHTML +
               // "<div class='popup__address'>" + $item.find('.card__address').html() + "</div>" +
                "</div>" +
                "</div>" +
                "</a>").openPopup();
        }

        this.markers.addLayer(m);

        return true;
	}

	defaultMapView() {
        var bounds = Cookies.get('mampir.in-bounds'),
            zoom = Cookies.get('mampir.in-mapZoom');

        if (bounds == "") {
            bounds = [-0.789275, 113.92132700000002];
            zoom = 5;
        } else {
            bounds = JSON.parse(bounds);
        }

        this.map.removeLayer(this.markers);
        this.map.setView(bounds, zoom);
	}


}

export default Map;
