import React, { useEffect } from "react";
import {
  StyleSheet,
  StatusBar,
  View,
} from "react-native";
import Map from '../components/map'
import Storelist from "../components/storelist";
import { useAppStore } from "../../_appstore";

export default function Storelocator(props) {

  const data = useAppStore(state => state.data)
  const getStore = useAppStore(state => state.getStore)
  const searchStore = useAppStore(state => state.searchStore)
  const search = useAppStore(state => state.search)
  const lat = useAppStore(state => state.lat)
  const setLat = useAppStore(state => state.setLat)
  const long = useAppStore(state => state.long)
  const setLong = useAppStore(state => state.setLong)

  useEffect(() => {
    getStore();
    return () => {
      console.log("This will be logged on unmount");
    };
  }, []);
  return (
    <View style={styles.MainContainer}>
      <Map lat={lat} long={long} ></Map>
      <Storelist data={data} getStore={getStore} searchStore={searchStore} search={search} setLat={setLat} setLong={setLong} />
      <StatusBar backgroundColor="black"></StatusBar>
    </View>
  );
}

const styles = StyleSheet.create({
  MainContainer: {
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    alignItems: "center",
    justifyContent: "flex-end",
  }
});
