import { StyleSheet } from 'react-native'
import React from 'react'
import MapView, { Marker } from "react-native-maps";

export default function map(props) {
    const { lat, long } = props
    return (

        <MapView
            style={styles.mapStyle}
            showsUserLocation={false}
            zoomEnabled={true}
            zoomControlEnabled={true}
            region={{
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
            initialRegion={{
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.0922,
                longitudeDelta: 0.0421,
            }}
        >
            <Marker
                coordinate={{ latitude: lat, longitude: long }}
                title={"JavaTpoint"}
                description={"Java Training Institute"}
            />

        </MapView>
    )
}

const styles = StyleSheet.create({
    mapStyle: {
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
})