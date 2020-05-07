import React, {useEffect, useState} from 'react';
import "./Map.scss" ;
import * as am4core from "@amcharts/amcharts4/core";
import * as am4maps from "@amcharts/amcharts4/maps";
import am4geodata_worldLow from "@amcharts/amcharts4-geodata/worldLow";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";
import * as am4plugins_bullets from "@amcharts/amcharts4/plugins/bullets";
import mountain from "./mountain.svg"


export default function Map() {
    const [loading, setLoading] = useState(false);
    const[resort,setResort]=useState([]);
    const [resortToDisplay, setResortToDisplay] = useState([])
    const[id]=useState([2070,1011,732,634,1828,977,1955,2040,1867]);

    let targetSVG =mountain;

    useEffect(()=>{
          let x =resort.map(el=>({
              minZoomLevel: 7,
              imageURL: targetSVG,
              title: el.name,
              latitude: el.latitude,
              longitude: el.longitude,
              website: el.official_website
          }));
          if(x.length === id.length){setResortToDisplay(x); console.log(x);}
    },[resort]);


    useEffect(
        () => {
            for(const el of id){
            fetch(`https://skimap.org/SkiAreas/view/${el}.json`)
                .then(resp => resp.json())
                .then(ski => setResort(prev=>[...prev,ski]))
                .catch(err => console.log(err.message))}
        }, []);


    useEffect(() => {

        let w = window.innerWidth;
        const timeout = setTimeout(() => {

            setLoading(true);
            am4core.ready(function () {

                am4core.useTheme(am4themes_animated);

                let map = am4core.create("chartdiv", am4maps.MapChart);

                // Set map definition
                map.geodata = am4geodata_worldLow;

                // Set projection
                map.projection = new am4maps.projections.Miller();


                // Create map polygon series
                let polygonSeries = map.series.push(new am4maps.MapPolygonSeries());

                // Exclude Antartica
                polygonSeries.exclude = ["AQ"];

                // Make map load polygon (like country names) data from GeoJSON
                polygonSeries.useGeodata = true;

//data
                polygonSeries.data = [
                    {
                        "id": "IT",
                        "color": am4core.color("lightpink"),
                        "description": "Włochy oferują niezliczone możliwości rozwoju pod kątem narciarstwa w każdym wydaniu. Możemy tu wybierać dokładnie ze 105 ośrodków narciarskich. Najpopularnieszym z nich jest Livigno liczące 120 kmetrów tras zjazdowych i bardzo dużo tras skiturowych. Sezon narciarski trwa tu od jesieni do późnej wiosny. Po więcej informacji o tym i innych ośrodkach zapraszam <a href='https://www.europe-mountains.com/pl/stacje-narciarskie/wlochy/' target=\"_blank\">TUTAJ</a>."
                    },
                    {
                        "id": "CH",
                        "color": am4core.color("lightpink"),
                        "description": "99 ośrodków narciarskich-tyle oferuje nam Szwajcaria. Najpopularniejszym jest St. Moritz posiadając 336 km tras co czyni go jednym z największych w Europie. Ale ma on do zaoferowania o wiele więcej- najpiękniejsze widoki, przepiękne zabytkowe miasteczko, nic dziwnego, że co roku gromadzi najbogatszych ludzi świata. Po więcej informacji o tym i innych ośrodkach zapraszam <a href='https://www.europe-mountains.com/pl/stacje-narciarskie/szwajcaria/' target=\"_blank\">TUTAJ</a>."
                    },
                    {
                        "id": "FR",
                        "color": am4core.color("lightpink"),
                        "description": "40 ośrodków narciarskich to liczba Francji. Jednym zn ajpopularniejszych jest Les Deux Alpes posiadając 226 km tras. Nie jest to dużo, ale ośrodek ten jest bardzo atrakcyjny- różnorodne trasy, punkty widokowe czy ogromny snow park. No i Francja oferuje największy plac rozrywki dla narciarzy- Les Portes Du Soleil-1950 km tras!. Po więcej informacji o tym i innych ośrodkach zapraszam <a href='https://www.europe-mountains.com/pl/stacje-narciarskie/francja/?p=1#_' target=\"_blank\">TUTAJ</a>."
                    },

                    {
                        "id": "AT",
                        "color": am4core.color("lightpink"),
                        "description": "Austria oferuje 230 ośrodków narciarskich- na tak niewielkiej powierzchni kraju jest to ogromna liczba. Jeden z najpopularniejszych to Zillertal Arena- ma 620 km tras. Co odróżnia go od innych kurortów? Między innymi bardzo nowoczesna infrastruktura i najbardziej stroma trasa na świecie- Harakiri- nazwa mówi sama za siebie! . Po więcej informacji o tym i innych ośrodkach zapraszam <a href='https://www.europe-mountains.com/pl/stacje-narciarskie/austria/?p=1#_' target=\"_blank\">TUTAJ</a>."
                    },
                    {
                        "id": "CZ",
                        "color": am4core.color("lightpink"),
                        "description": "Czechy mają w swojej ofercie około 20 ośrodków. Jeden z najbardziej znanych to Spindleruv Mlyn- 24 km, co czyni go największym w Czechach. Do kurortów alpejskich nie można go przyrównać, ale jak chcemy pojeździć to pojeździmy :) . Po więcej informacji o tym i innych ośrodkach zapraszam <a href='https://www.europe-mountains.com/pl/stacje-narciarskie/czechy/' target=\"_blank\">TUTAJ</a>."
                    },

                    {
                        "id": "DE",
                        "color": am4core.color("lightpink"),
                        "description": "Około 60 kurortów oferują nam Niemcy. Jeden z najfajniejszych to Garmisch-Partenkirchen. Znajdziemy tu 65 km tras- da się poszusować. Po więcej informacji o tym i innych ośrodkach zapraszam <a href='https://www.europe-mountains.com/pl/stacje-narciarskie/niemcy/' target=\"_blank\">TUTAJ</a>."
                    },

                    {
                        "id": "SK",
                        "color": am4core.color("lightpink"),
                        "description": "Około 50 kurortów oferuje Słowacja. Największy ośrodek to Chopok Jasna- 36 km zróżnicowanych tras. Po więcej informacji o tym i innych ośrodkach zapraszam <a href='https://www.europe-mountains.com/pl/stacje-narciarskie/slowacja/' target=\"_blank\">TUTAJ</a>."
                    },
                    {
                        "id": "UA",
                        "color": am4core.color("lightpink"),
                        "description": "Okazuje się, że Ukraina ma też coś do zaoferowania jeżeli chodzi o narty. 6 ośrodków narciarskich z czego największy jest Bukovel posiadający 53 km tras. A na Ukrainie ceny też bardzo przystępne. Po więcej informacji o tym i innych ośrodkach zapraszam <a href='https://www.gazetaprawna.pl/galerie/1014768,duze-zdjecie,1,6-kurortow-narciarskich-na-ukrainie.html' target=\"_blank\">TUTAJ</a>."
                    },

                    {
                        "id": "PL",
                        "color": am4core.color("lightpink"),
                        "description": "I jeszcze Polska. Bardzo poszaleć tu się nie da, ale mamy około 100 stoków mniejszych lub większych. Nahpopularniejsza chyba jest Białka Tatrzańska z 20 km tras. Po więcej informacji o tym i innych ośrodkach zapraszam <a href='https://www.europe-mountains.com/pl/stacje-narciarskie/polska/?p=1#_' target=\"_blank\">TUTAJ</a>."
                    },


                ];

                let imageSeries = map.series.push(new am4maps.MapImageSeries());
                let imageTemplate = imageSeries.mapImages.template;
                imageTemplate.propertyFields.longitude = "longitude";
                imageTemplate.propertyFields.latitude = "latitude";
                imageTemplate.nonScaling = true;
                let pin = imageTemplate.createChild(am4plugins_bullets.PinBullet);

// Set what to display on rollover tooltip
//                 pin.tooltipText = `{title}`;
                pin.tooltipHTML = '<b>{title}</b><br><a href={website}>Dowiedz się więcej</a>';
                // pin.tooltip.properties.fill = am4core.color(`var(--pink)`)
                // Set up tooltips
                pin.calculateVisualCenter = true;
                // pin.tooltip.tooltipPosition = "fixed";
                // pin.tooltip.label.interactionsEnabled = true;
                // pin.tooltip.keepTargetHover = true;

                imageSeries.tooltip.pointerOrientation = "right";

// Configuring pin appearance
                pin.background.fill = map.colors.getIndex(0);
                pin.background.fillOpacity = 0.7;
                pin.background.pointerAngle = 120;
                pin.background.pointerBaseWidth = 10;

// Adding an image with its "href" attribute tied to values in data
                pin.image = new am4core.Image();
                pin.image.propertyFields.href = "imageURL";
                pin.image.scale = (0.6);

// Creating a "heat rule" to modify "radius" of the bullet based
// on value in data
                imageSeries.heatRules.push({
                    "target": pin.background,
                    "property": "radius",
                    "min": 20,
                    "max": 40,
                    "dataField": "value"
                });

// Add a circle to pin base.
// Bullet is a Container, so we can add there anything.
                let circle = pin.createChild(am4core.Ellipse);
                circle.radius = 6;
                circle.radiusY = 3;
                circle.strokeWidth = 0;
                circle.fillOpacity = 0.1;
                circle.zIndex = -1;
                imageSeries.id = "markers";

// set zoom events
                imageSeries.events.on("datavalidated", updateImageVisibility);
                map.events.on("zoomlevelchanged", updateImageVisibility);

                function updateImageVisibility(ev) {
                    let map = ev.target.baseSprite;
                    let series = map.map.getKey("markers");
                    series.mapImages.each(function(image) {
                        if (image.dataItem.dataContext.minZoomLevel) {
                            if (image.dataItem.dataContext.minZoomLevel >= map.zoomLevel) {
                                image.hide();
                            }
                            else {
                                image.show();
                            }
                        }
                    });
                }

                imageSeries.data = resortToDisplay;


                // Configure series
                let polygonTemplate = polygonSeries.mapPolygons.template;
                polygonTemplate.tooltipText = "{name}";
                polygonTemplate.fill = am4core.color("lightgray");
                polygonTemplate.propertyFields.fill = "color";

                //event klik kraj-
                polygonTemplate.events.on("hit", function (ev) {
                    ev.target.series.chart.zoomToMapObject(ev.target);
                    let data = ev.target.dataItem.dataContext;
                    let info = document.getElementById("info");
                    info.innerHTML = "<h3>" + data.name + " (" + data.id + ")</h3>";
                    if (data.description) {
                        info.innerHTML += data.description;
                    } else {
                        info.innerHTML += "<i>No description provided.</i>"
                    }

                });

                // Create hover state and set alternative fill color
                let hs = polygonTemplate.states.create("hover");
                hs.properties.fill = am4core.color("lightblue");


                map.zoomControl = new am4maps.ZoomControl();
                let homeButton = new am4core.Button();
                homeButton.events.on("hit", function () {
                    map.goHome();
                });

                homeButton.icon = new am4core.Sprite();
                homeButton.padding(7, 5, 7, 5);
                homeButton.width = 30;
                homeButton.icon.path =
                    "M16,8 L14,8 L14,16 L10,16 L10,10 L6,10 L6,16 L2,16 L2,8 L0,8 L8,0 L16,8 Z M16,8";
                homeButton.marginBottom = 10;
                homeButton.parent = map.zoomControl;
                homeButton.insertBefore(map.zoomControl.plusButton);

                // Center on the groups by default
                if(w<700) {
                    map.homeZoomLevel = 7;
                    map.homeGeoPoint = {longitude: 20, latitude: 54};
                }
                map.homeZoomLevel = 6;
                map.homeGeoPoint = {longitude: 20, latitude: 48};

            });
        },1000);
        return()=>clearTimeout(timeout)

    },[resortToDisplay]);

    return <div className="all">
        <p className="map-p">Gdzie warto poszusować?</p>
        <div className='map'>
            <div id="chartdiv">{!loading? <span className='loading'>Wczytywanie mapy... </span> : null}</div>
        <div id="info"></div>
        </div>
    </div>
}
