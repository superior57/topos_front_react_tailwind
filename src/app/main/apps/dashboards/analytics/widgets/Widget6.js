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

var shape = {
    coords: [1, 1, 1, 30, 30, 30, 30, 1],
    type: 'poly'
};  

function Widget6(props)
{
    return (
        <Card className="w-full h-512 rounded-8 shadow-none border-1">

            <GoogleMap
                // bootstrapURLKeys={{
                //     key: process.env.REACT_APP_MAP_KEY
                // }}
                
                // defaultZoom={2}
                // defaultCenter={[17.308688, 7.03125]}
                // options={{
                //     styles: props.data.styles
                // }}
            >
                {props.data.markers.map(marker => (
                    <Marker

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
