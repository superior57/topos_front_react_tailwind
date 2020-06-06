import React from 'react';
import {Card, Icon, Tooltip} from '@material-ui/core';
import GoogleMap from 'google-map-react';

function Marker(props)
{
    return (
        <Tooltip title={props.text} placement="top">
            <Icon className="text-red">place</Icon>
        </Tooltip>
    );
}

function Widget6(props)
{
    return (
        <Card className="w-full h-512 rounded-8 shadow-none border-1">
            <GoogleMap
                bootstrapURLKeys={{key: 'AIzaSyAT2cXBEgvmeQp_Dqvx1gg09DE7ID7haOo'}}
                defaultZoom={2}
                defaultCenter={[-23.553478, -46.604955]}
                options={{styles: props.data.styles}}
            >

                    {/* Markers for users  */}
                {props.data.markers.map(marker => (
                    <Marker
                    ///
                    title="teste"
                    shape = {
                        {
                            coords: [1, 1, 1, 30, 30, 30, 30, 1], 
                            type: "poly"
                        }
                    }
                    icon = {{
                        url: '/src/images/blue_marker.png',
                    }}
                    ///
                        key={marker.label}
                        text={marker.label}
                        lat={marker.lat}
                        lng={marker.lng}
                    />
                ))}
            </GoogleMap>
        </Card>
    );
}

export default Widget6;
