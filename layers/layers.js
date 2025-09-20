var wms_layers = [];

var format_Grid_5X5Km_0 = new ol.format.GeoJSON();
var features_Grid_5X5Km_0 = format_Grid_5X5Km_0.readFeatures(json_Grid_5X5Km_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Grid_5X5Km_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Grid_5X5Km_0.addFeatures(features_Grid_5X5Km_0);
var lyr_Grid_5X5Km_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Grid_5X5Km_0, 
                style: style_Grid_5X5Km_0,
                popuplayertitle: 'Grid_5X5Km',
                interactive: true,
                title: '<img src="styles/legend/Grid_5X5Km_0.png" /> Grid_5X5Km'
            });
var format_STR_1 = new ol.format.GeoJSON();
var features_STR_1 = format_STR_1.readFeatures(json_STR_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_STR_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_STR_1.addFeatures(features_STR_1);
var lyr_STR_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_STR_1, 
                style: style_STR_1,
                popuplayertitle: 'STR',
                interactive: true,
                title: '<img src="styles/legend/STR_1.png" /> STR'
            });
var format_LineTransect_2 = new ol.format.GeoJSON();
var features_LineTransect_2 = format_LineTransect_2.readFeatures(json_LineTransect_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_LineTransect_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_LineTransect_2.addFeatures(features_LineTransect_2);
var lyr_LineTransect_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_LineTransect_2, 
                style: style_LineTransect_2,
                popuplayertitle: 'LineTransect',
                interactive: true,
                title: '<img src="styles/legend/LineTransect_2.png" /> LineTransect'
            });
var format_SignSurvey_3 = new ol.format.GeoJSON();
var features_SignSurvey_3 = format_SignSurvey_3.readFeatures(json_SignSurvey_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignSurvey_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignSurvey_3.addFeatures(features_SignSurvey_3);
var lyr_SignSurvey_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SignSurvey_3, 
                style: style_SignSurvey_3,
                popuplayertitle: 'SignSurvey',
                interactive: true,
                title: '<img src="styles/legend/SignSurvey_3.png" /> SignSurvey'
            });
var format_lineTransect_observation_4 = new ol.format.GeoJSON();
var features_lineTransect_observation_4 = format_lineTransect_observation_4.readFeatures(json_lineTransect_observation_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_lineTransect_observation_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_lineTransect_observation_4.addFeatures(features_lineTransect_observation_4);
var lyr_lineTransect_observation_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_lineTransect_observation_4, 
                style: style_lineTransect_observation_4,
                popuplayertitle: 'lineTransect_observation',
                interactive: true,
                title: '<img src="styles/legend/lineTransect_observation_4.png" /> lineTransect_observation'
            });
var format_MajorMammalDistributionPhaseIIIIV_Demo_5 = new ol.format.GeoJSON();
var features_MajorMammalDistributionPhaseIIIIV_Demo_5 = format_MajorMammalDistributionPhaseIIIIV_Demo_5.readFeatures(json_MajorMammalDistributionPhaseIIIIV_Demo_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MajorMammalDistributionPhaseIIIIV_Demo_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MajorMammalDistributionPhaseIIIIV_Demo_5.addFeatures(features_MajorMammalDistributionPhaseIIIIV_Demo_5);
var lyr_MajorMammalDistributionPhaseIIIIV_Demo_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MajorMammalDistributionPhaseIIIIV_Demo_5, 
                style: style_MajorMammalDistributionPhaseIIIIV_Demo_5,
                popuplayertitle: 'Major Mammal Distribution Phase III IV_Demo',
                interactive: true,
                title: '<img src="styles/legend/MajorMammalDistributionPhaseIIIIV_Demo_5.png" /> Major Mammal Distribution Phase III IV_Demo'
            });
var format_SignSurvey_Observation_6 = new ol.format.GeoJSON();
var features_SignSurvey_Observation_6 = format_SignSurvey_Observation_6.readFeatures(json_SignSurvey_Observation_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SignSurvey_Observation_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SignSurvey_Observation_6.addFeatures(features_SignSurvey_Observation_6);
var lyr_SignSurvey_Observation_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SignSurvey_Observation_6, 
                style: style_SignSurvey_Observation_6,
                popuplayertitle: 'SignSurvey_Observation',
                interactive: true,
                title: '<img src="styles/legend/SignSurvey_Observation_6.png" /> SignSurvey_Observation'
            });

lyr_Grid_5X5Km_0.setVisible(true);lyr_STR_1.setVisible(true);lyr_LineTransect_2.setVisible(true);lyr_SignSurvey_3.setVisible(true);lyr_lineTransect_observation_4.setVisible(true);lyr_MajorMammalDistributionPhaseIIIIV_Demo_5.setVisible(true);lyr_SignSurvey_Observation_6.setVisible(true);
var layersList = [lyr_Grid_5X5Km_0,lyr_STR_1,lyr_LineTransect_2,lyr_SignSurvey_3,lyr_lineTransect_observation_4,lyr_MajorMammalDistributionPhaseIIIIV_Demo_5,lyr_SignSurvey_Observation_6];
lyr_Grid_5X5Km_0.set('fieldAliases', {'PageName': 'PageName', 'PageNumber': 'PageNumber', });
lyr_STR_1.set('fieldAliases', {'Name': 'Name', 'Area_Sq_Km': 'Area_Sq_Km', });
lyr_LineTransect_2.set('fieldAliases', {'track_id': 'track_id', 'T': 'T', 'R': 'R', 'Y': 'Y', 'Shape_Leng': 'Shape_Leng', 'abc': 'abc', });
lyr_SignSurvey_3.set('fieldAliases', {'track_id': 'track_id', 'Y': 'Y', 'Shape_Leng': 'Shape_Leng', });
lyr_lineTransect_observation_4.set('fieldAliases', {'Track_ID': 'Track_ID', 'TR': 'TR', 'Transect': 'Transect', 'Replicate': 'Replicate', 'PDate': 'PDate', 'PTime': 'PTime', 'Animal': 'Animal', 'AY': 'AY', 'Y': 'Y', 'A': 'A', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'A_Bearing': 'A_Bearing', 'WalkBear': 'WalkBear', 'Ang_Dist': 'Ang_Dist', 'prb100': 'prb100', 'prb25': 'prb25', 'prb1': 'prb1', });
lyr_MajorMammalDistributionPhaseIIIIV_Demo_5.set('fieldAliases', {'Site': 'Site', 'Row_Labels': 'Row_Labels', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'Species_Na': 'Species_Na', });
lyr_SignSurvey_Observation_6.set('fieldAliases', {'Track_Id': 'Track_Id', 'Trail': 'Trail', 'TDate': 'TDate', 'TTime': 'TTime', 'SPP_Type': 'SPP_Type', 'Carnivore': 'Carnivore', 'Carn_Sn': 'Carn_Sn', 'Sign': 'Sign', 'TrackAge': 'TrackAge', 'Longitude': 'Longitude', 'Latitude': 'Latitude', 'No_Indi': 'No_Indi', 'Male': 'Male', 'Female': 'Female', 'Young': 'Young', 'Unknown': 'Unknown', 'prb100': 'prb100', 'prb25': 'prb25', 'prb1': 'prb1', });
lyr_Grid_5X5Km_0.set('fieldImages', {'PageName': 'TextEdit', 'PageNumber': 'TextEdit', });
lyr_STR_1.set('fieldImages', {'Name': 'TextEdit', 'Area_Sq_Km': 'TextEdit', });
lyr_LineTransect_2.set('fieldImages', {'track_id': '', 'T': '', 'R': '', 'Y': '', 'Shape_Leng': '', 'abc': '', });
lyr_SignSurvey_3.set('fieldImages', {'track_id': '', 'Y': '', 'Shape_Leng': '', });
lyr_lineTransect_observation_4.set('fieldImages', {'Track_ID': '', 'TR': '', 'Transect': '', 'Replicate': '', 'PDate': '', 'PTime': '', 'Animal': '', 'AY': '', 'Y': '', 'A': '', 'Longitude': '', 'Latitude': '', 'A_Bearing': '', 'WalkBear': '', 'Ang_Dist': '', 'prb100': '', 'prb25': '', 'prb1': '', });
lyr_MajorMammalDistributionPhaseIIIIV_Demo_5.set('fieldImages', {'Site': '', 'Row_Labels': '', 'Longitude': '', 'Latitude': '', 'Species_Na': '', });
lyr_SignSurvey_Observation_6.set('fieldImages', {'Track_Id': '', 'Trail': '', 'TDate': '', 'TTime': '', 'SPP_Type': '', 'Carnivore': '', 'Carn_Sn': '', 'Sign': '', 'TrackAge': '', 'Longitude': '', 'Latitude': '', 'No_Indi': '', 'Male': '', 'Female': '', 'Young': '', 'Unknown': '', 'prb100': '', 'prb25': '', 'prb1': '', });
lyr_Grid_5X5Km_0.set('fieldLabels', {'PageName': 'no label', 'PageNumber': 'no label', });
lyr_STR_1.set('fieldLabels', {'Name': 'no label', 'Area_Sq_Km': 'no label', });
lyr_LineTransect_2.set('fieldLabels', {'track_id': 'no label', 'T': 'no label', 'R': 'no label', 'Y': 'no label', 'Shape_Leng': 'no label', 'abc': 'no label', });
lyr_SignSurvey_3.set('fieldLabels', {'track_id': 'no label', 'Y': 'no label', 'Shape_Leng': 'no label', });
lyr_lineTransect_observation_4.set('fieldLabels', {'Track_ID': 'no label', 'TR': 'no label', 'Transect': 'no label', 'Replicate': 'no label', 'PDate': 'inline label - always visible', 'PTime': 'inline label - always visible', 'Animal': 'inline label - always visible', 'AY': 'inline label - always visible', 'Y': 'inline label - always visible', 'A': 'inline label - always visible', 'Longitude': 'no label', 'Latitude': 'no label', 'A_Bearing': 'no label', 'WalkBear': 'no label', 'Ang_Dist': 'no label', 'prb100': 'no label', 'prb25': 'no label', 'prb1': 'no label', });
lyr_MajorMammalDistributionPhaseIIIIV_Demo_5.set('fieldLabels', {'Site': 'no label', 'Row_Labels': 'no label', 'Longitude': 'no label', 'Latitude': 'no label', 'Species_Na': 'inline label - always visible', });
lyr_SignSurvey_Observation_6.set('fieldLabels', {'Track_Id': 'inline label - always visible', 'Trail': 'no label', 'TDate': 'inline label - always visible', 'TTime': 'inline label - always visible', 'SPP_Type': 'no label', 'Carnivore': 'no label', 'Carn_Sn': 'header label - always visible', 'Sign': 'inline label - always visible', 'TrackAge': 'no label', 'Longitude': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'No_Indi': 'no label', 'Male': 'no label', 'Female': 'no label', 'Young': 'no label', 'Unknown': 'no label', 'prb100': 'no label', 'prb25': 'no label', 'prb1': 'no label', });
lyr_SignSurvey_Observation_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});