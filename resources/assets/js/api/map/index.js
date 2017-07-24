import { load, loaded } from './loader'
import Styles from './styles'
import Icon from './map-pin-empty'
import ClusterIcon from './cluster-icon'
import MarkerClusterer from './markerclusterer'

load('AIzaSyDxu7mv5mlPM9Aj2CiYKFWY9b6adizdC4c');

class Map
{
	init() {
		loaded.then(() => {
			this.map = new google.maps.Map(document.getElementById('map'), {
	          	center: {lat: -0.789275, lng: 113.92132700000002},
				zoom: 4,
                minZoom: 4,
	          	scrollwheel: false,
	          	streetViewControl: false,
	          	mapTypeControl: false,
                zoomControlOptions: {
                    position: google.maps.ControlPosition.LEFT_TOP
                },
	          	//styles: Styles
	        });
		});

		return this;
	}

	remove() {
		this.map.remove();
	}

	loadMarker(addressPoints) {
		const self = this;
		self.activeInfowindow = null;

		loaded.then(() => {
            let bounds = new google.maps.LatLngBounds();

            let markers = [];
			for (let i = 0; i < addressPoints.length; i++) {
	        	let latLng = new google.maps.LatLng(addressPoints[i].lat, addressPoints[i].lng);

	        	let marker = new google.maps.Marker({
		            position: latLng,
		            map: self.map,
		            icon: {
		            	url: Icon
		            },
		            // label: {
		            // 	text: addressPoints[i].counter.toString()
		            // }
		        });

                bounds.extend(marker.getPosition());

		        let contentString = `
					<div class="c-info-box">
						${document.getElementById('venue-card-'+addressPoints[i].id).outerHTML}
					</div>
		        `;

		        let infowindow = new google.maps.InfoWindow({
					content: contentString
				});

		        // customize info window style on DOM ready
                google.maps.event.addListener(infowindow, 'domready', function() {

                    // Reference to the DIV which receives the contents of the infowindow
                    const iwOuter = document.querySelector('.gm-style-iw');

                    // add class for reset height of infowindow
                    iwOuter.children[0].classList.add('gm-style-iw__body');

                    // reposition of infowindow
                    iwOuter.parentNode.parentNode.style.top = '40px';
                    iwOuter.parentNode.parentNode.style.left = '18px';

                    // Remove the background shadow & white background DIV
                    const iwBackground = iwOuter.previousElementSibling;

                    iwBackground.children[0].style.display = 'none';
                    iwBackground.children[1].style.display = 'none';
                    iwBackground.children[2].style.display = 'none';
                    iwBackground.children[3].style.display = 'none';

                    // hide close button
                    const iwCloseBtn = iwOuter.nextElementSibling;
					iwCloseBtn.style.display = 'none';
                });

                // close infowindow when map clicked
                google.maps.event.addListener(this.map, "click", function(event) {
                	infowindow.close();
				});

                // open infowindow when marker clicked
				marker.addListener('click', function() {
					if(self.activeInfowindow) {
						self.activeInfowindow.close();
					}

				    infowindow.open(self.map, marker);
				    self.activeInfowindow = infowindow;
				});

                markers.push(marker);
	        }

            this.map.fitBounds(bounds);

			const clusterStyles = [
                {
                    textColor: 'white',
                    fontFamily: "Hanken, Arial, sans-serif",
                    textSize: 20,
                    url: ClusterIcon,
                    width: 50,
					height: 60,
                    anchorIcon: [50, 25]
                },
                {
                    textColor: 'white',
                    fontFamily: "Hanken, Arial, sans-serif",
                    textSize: 20,
                    url: ClusterIcon,
                    width: 50,
                    height: 60,
                    anchorIcon: [50, 25]
                },
                {
                    textColor: 'white',
                    fontFamily: "Hanken, Arial, sans-serif",
                    textSize: 20,
                    url: ClusterIcon,
                    width: 50,
                    height: 60,
                    anchorIcon: [50, 25]
                }
			];

            const markerCluster = new MarkerClusterer(this.map, markers, { styles: clusterStyles });
		});



	}
}
export default Map;