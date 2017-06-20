import { load, loaded } from './loader'
import Styles from './styles'

load('AIzaSyAW3SWKqAKSuPP780RpZKbMGjd2HnWt1m4')

class Map
{
	init() {
		loaded.then(() => {
			this.map = new google.maps.Map(document.getElementById('map'), {
	          	center: {lat: -0.789275, lng: 113.92132700000002},
	          	zoom: 5,
	          	minZoom: 5,
	          	maxZoom: 15,
	          	scrollwheel: false,
	          	streetViewControl: false,
	          	mapTypeControl: false,
	          	styles: Styles
	        });
		});

		return this;
	}

	remove() {
		this.map.remove();
	}

	loadMarker(addressPoints, type = 'kota') {
		const self = this;
		self.activeInfowindow = null;

		loaded.then(() => {
			for (var i = 0; i < addressPoints.length; i++) {
	        	let latLng = new google.maps.LatLng(addressPoints[i].geocoder.lat, addressPoints[i].geocoder.lng);

	        	let marker = new google.maps.Marker({
		            position: latLng,
		            map: self.map,
		            icon: {
		            	path: google.maps.SymbolPath.CIRCLE,
						fillColor: '#e18f2c',
						fillOpacity: .6,
						scale: 20,
						strokeColor: '#ae6928',
						strokeWeight: .5
		            },
		            label: {
		            	text: addressPoints[i].counter.toString()
		            }
		        });

		        let contentString = `
					<div class="map-info">
						<label for="" class="map-info__title">${addressPoints[i][type]}</label>
						<a href="#" class="map-info__filter">Filter <i class="fa fa-angle-right"></i></a>
					</div>
		        `;

		        let infowindow = new google.maps.InfoWindow({
					content: contentString
				});

				google.maps.event.addListener(infowindow, 'domready', function() {
				    document.querySelector(".map-info__filter").addEventListener("click", function(e) {
				        e.preventDefault();

				        let query = store.state.query;
				        query[type] = addressPoints[i][type];

				        let textFiled = document.querySelector('input[name="kota"]');

				        textFiled.value = addressPoints[i][type];

				        let anchor = $('#anchor');

				        setTimeout(() => {
				        	$('html, body').animate({
						        scrollTop: anchor.offset().top
						    }, 1000);
				        }, 1000)

            			store.dispatch('filterAll', query)
				    });
				});

				marker.addListener('click', function() {
					if(self.activeInfowindow) {
						self.activeInfowindow.close();
					}

				    infowindow.open(self.map, marker);
				    self.activeInfowindow = infowindow;
				});

				marker.addListener('dblclick', function() {
					self.map.panTo(latLng);
				});
	        }
		});
	}
}
export default Map;