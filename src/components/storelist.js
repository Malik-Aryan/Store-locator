import {
    Modal,
    StyleSheet,
    Text,
    Pressable,
    TextInput,
    Image,
    FlatList,
    View,
} from "react-native";
import React, { useState } from 'react'

export default function storelist(props) {
    const { data, searchStore, search, setLong, setLat } = props;
    const [modalVisible, setModalVisible] = useState(true);

    return (
        <View style={styles.MainContainer}>
            <Modal
                animationType="fade"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                            }}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <View style={styles.buttonClose}></View>
                        </Pressable>
                        <View style={styles.search_container}>
                            <TextInput
                                style={styles.search_input}
                                placeholder="Search..."
                                onChangeText={(text) => {
                                    search(text);
                                    searchStore();
                                }}
                            />
                            <Pressable>
                                <Image
                                    style={styles.search_image}
                                    source={require("../../assets/search_icon.png")}
                                />
                            </Pressable>
                        </View>
                        {/* flatlist */}
                        <FlatList
                            data={data}
                            renderItem={(store) => (
                                <View style={styles.store_list}>
                                    <View style={styles.image_container}>
                                        <Image
                                            style={styles.store_image}
                                            resizeMode="contain"
                                            source={{ uri: data.image || store.item.image }}
                                        />
                                        <Text
                                            style={{
                                                color: "#727272",
                                                fontSize: 14,
                                                fontWeight: "700",
                                            }}
                                        >
                                            1.2km
                                        </Text>
                                    </View>
                                    <View style={styles.store_desc}>
                                        <Text style={{ fontSize: 16, fontWeight: "900" }}>
                                            {store.item.name}
                                        </Text>
                                        <Text
                                            style={{
                                                color: "#727272",
                                                fontSize: 12,
                                                fontWeight: "700",
                                            }}
                                        >
                                            {store.item.address1 + ","}
                                            {store.item.address2 + ","}
                                            {store.item.city + ","}
                                            pincode: {store.item.pincode}
                                        </Text>
                                    </View>
                                    <View style={styles.direction_container}>
                                        <Pressable
                                            onPress={() => {
                                                setLat(parseInt(store.item.latitude));
                                                setLong(parseInt(store.item.longitude));
                                                setModalVisible(!modalVisible);
                                            }}
                                        >
                                            <Image
                                                style={styles.search_image}
                                                source={require("../../assets/direction_icon.png")}
                                            />
                                        </Pressable>
                                    </View>
                                </View>
                            )}
                            keyExtractor={(item) => item.id}
                        />
                        {/* {end} */}
                    </View>
                </View>
            </Modal>

            <Pressable
                style={styles.buttonOpen}
                onPress={() => setModalVisible(true)}
            ></Pressable>
        </View>
    )
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
    },
    // Model ------Start
    centeredView: {
        display: "flex",
        height: "100%",
        justifyContent: "flex-end",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.5)",
    },

    modalView: {
        backgroundColor: "white",
        display: "flex",
        alignItems: "center",
        borderRadius: 20,
        width: "100%",
        height: "50%",
    },
    buttonOpen: {
        backgroundColor: "rgba(0,0,0,0.5)",
        width: 200,
        borderRadius: 10,
        height: 15,
        marginTop: 10,
    },
    buttonClose: {
        backgroundColor: "rgba(0,0,0,0.5)",
        width: 100,
        borderRadius: 10,
        height: 5,
        marginTop: 10,
    },
    //  Model --------End

    // Search Container ------Start
    search_container: {
        backgroundColor: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        height: 50,
        marginHorizontal: 10,
        marginVertical: 15,
        borderWidth: 1,
        borderRadius: 10,
        borderColor: "#EDF0F2",
    },
    search_input: {
        paddingHorizontal: 15,
        paddingLeft: 12,
        width: "90%",
    },
    search_image: {
        width: 25,
        height: 25,
        marginRight: 10,
    },
    // search Container -----End

    store_list: {
        display: "flex",
        flexDirection: "row",
        width: "90%",
        marginVertical: 10,
    },
    image_container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginRight: 10,
    },
    store_image: {
        height: 50,
        width: 50,
    },
    store_desc: {
        width: "74%",
    },
    direction_container: {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 5,
    },
});