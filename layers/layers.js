var wms_layers = [];


        var lyr_OpenStreetMap_0 = new ol.layer.Tile({
            'title': 'OpenStreetMap',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var lyr_DEM_FIXBGT_1 = new ol.layer.Image({
        opacity: 1,
        
    title: 'DEM_FIXBGT<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/DEM_FIXBGT_1.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [12272503.995528, -796177.137462, 12304456.997987, -771725.730134]
        })
    });
var format_RBI10K_ADMINISTRASI_AR_DESA_2 = new ol.format.GeoJSON();
var features_RBI10K_ADMINISTRASI_AR_DESA_2 = format_RBI10K_ADMINISTRASI_AR_DESA_2.readFeatures(json_RBI10K_ADMINISTRASI_AR_DESA_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RBI10K_ADMINISTRASI_AR_DESA_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RBI10K_ADMINISTRASI_AR_DESA_2.addFeatures(features_RBI10K_ADMINISTRASI_AR_DESA_2);
var lyr_RBI10K_ADMINISTRASI_AR_DESA_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RBI10K_ADMINISTRASI_AR_DESA_2, 
                style: style_RBI10K_ADMINISTRASI_AR_DESA_2,
                popuplayertitle: 'RBI10K_ADMINISTRASI_AR_DESA',
                interactive: true,
                title: '<img src="styles/legend/RBI10K_ADMINISTRASI_AR_DESA_2.png" /> RBI10K_ADMINISTRASI_AR_DESA'
            });

lyr_OpenStreetMap_0.setVisible(true);lyr_DEM_FIXBGT_1.setVisible(true);lyr_RBI10K_ADMINISTRASI_AR_DESA_2.setVisible(true);
var layersList = [lyr_OpenStreetMap_0,lyr_DEM_FIXBGT_1,lyr_RBI10K_ADMINISTRASI_AR_DESA_2];
lyr_RBI10K_ADMINISTRASI_AR_DESA_2.set('fieldAliases', {'NAMOBJ': 'NAMOBJ', 'FCODE': 'FCODE', 'REMARK': 'REMARK', 'METADATA': 'METADATA', 'SRS_ID': 'SRS_ID', 'KDBBPS': 'KDBBPS', 'KDCBPS': 'KDCBPS', 'KDCPUM': 'KDCPUM', 'KDEBPS': 'KDEBPS', 'KDEPUM': 'KDEPUM', 'KDPBPS': 'KDPBPS', 'KDPKAB': 'KDPKAB', 'KDPPUM': 'KDPPUM', 'LUASWH': 'LUASWH', 'TIPADM': 'TIPADM', 'WADMKC': 'WADMKC', 'WADMKD': 'WADMKD', 'WADMKK': 'WADMKK', 'WADMPR': 'WADMPR', 'WIADKC': 'WIADKC', 'WIADKK': 'WIADKK', 'WIADPR': 'WIADPR', 'WIADKD': 'WIADKD', 'UUPP': 'UUPP', 'LUAS': 'LUAS', 'SHAPE_AREA': 'SHAPE_AREA', 'SHAPE_LEN': 'SHAPE_LEN', });
lyr_RBI10K_ADMINISTRASI_AR_DESA_2.set('fieldImages', {'NAMOBJ': 'TextEdit', 'FCODE': 'TextEdit', 'REMARK': 'TextEdit', 'METADATA': 'TextEdit', 'SRS_ID': 'TextEdit', 'KDBBPS': 'TextEdit', 'KDCBPS': 'TextEdit', 'KDCPUM': 'TextEdit', 'KDEBPS': 'TextEdit', 'KDEPUM': 'TextEdit', 'KDPBPS': 'TextEdit', 'KDPKAB': 'TextEdit', 'KDPPUM': 'TextEdit', 'LUASWH': 'TextEdit', 'TIPADM': 'TextEdit', 'WADMKC': 'TextEdit', 'WADMKD': 'TextEdit', 'WADMKK': 'TextEdit', 'WADMPR': 'TextEdit', 'WIADKC': 'TextEdit', 'WIADKK': 'TextEdit', 'WIADPR': 'TextEdit', 'WIADKD': 'TextEdit', 'UUPP': 'TextEdit', 'LUAS': 'TextEdit', 'SHAPE_AREA': 'TextEdit', 'SHAPE_LEN': 'TextEdit', });
lyr_RBI10K_ADMINISTRASI_AR_DESA_2.set('fieldLabels', {'NAMOBJ': 'no label', 'FCODE': 'no label', 'REMARK': 'no label', 'METADATA': 'no label', 'SRS_ID': 'no label', 'KDBBPS': 'no label', 'KDCBPS': 'no label', 'KDCPUM': 'no label', 'KDEBPS': 'no label', 'KDEPUM': 'no label', 'KDPBPS': 'no label', 'KDPKAB': 'no label', 'KDPPUM': 'no label', 'LUASWH': 'no label', 'TIPADM': 'no label', 'WADMKC': 'no label', 'WADMKD': 'no label', 'WADMKK': 'no label', 'WADMPR': 'no label', 'WIADKC': 'no label', 'WIADKK': 'no label', 'WIADPR': 'no label', 'WIADKD': 'no label', 'UUPP': 'no label', 'LUAS': 'no label', 'SHAPE_AREA': 'no label', 'SHAPE_LEN': 'no label', });
lyr_RBI10K_ADMINISTRASI_AR_DESA_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});