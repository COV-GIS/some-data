import GeoJSONLayer from '@arcgis/core/layers/GeoJSONLayer';
import { SimpleRenderer } from '@arcgis/core/renderers';
import { SimpleFillSymbol, TextSymbol } from '@arcgis/core/symbols';
import LabelClass from '@arcgis/core/layers/support/LabelClass';
export const county = new GeoJSONLayer({
    url: 'https://cov-gis.github.io/some-data/columbia-county/county.geojson',
    renderer: new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            color: [0, 0, 0, 0],
            outline: {
                color: 'red',
                width: 1.5,
                style: 'short-dash-dot',
            }
        })
    })
});
export const cities = new GeoJSONLayer({
    url: 'https://cov-gis.github.io/some-data/columbia-county/cities.geojson',
    minScale: 600000,
    renderer: new SimpleRenderer({
        symbol: new SimpleFillSymbol({
            color: [0, 0, 0, 0],
            outline: {
                color: 'red',
                width: 1,
                style: 'short-dash-dot',
            }
        })
    }),
    labelingInfo: [
        new LabelClass({
            labelExpressionInfo: {
                expression: 'Proper($feature.city)'
            },
            maxScale: 40000,
            symbol: new TextSymbol({
                color: 'red',
                haloColor: 'white',
                haloSize: 1,
                font: {
                    size: 8,
                    weight: 'normal',
                }
            })
        })
    ]
});
