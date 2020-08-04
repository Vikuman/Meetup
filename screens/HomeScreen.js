
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    FlatList,
    Image,
    View,
    Text,
    StatusBar,
} from 'react-native';
import { List, ListItem } from "react-native-elements";
import React, { useState } from 'react';
import database from '@react-native-firebase/database';
// import ViewMoreText from 'react-native-view-more-text';
// import { FlatList } from 'react-native-gesture-handler';
import Card from '../shared/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
// import { isUndefined } from 'util';
// import { createRequire } from 'module';
// import console = require('console');
// import console = require('console');

export class HomeScreen extends React.Component {
    // state = {

    constructor(props) {
        super(props);
        this.state = {
            title: "",
            datetime: "",
            description: "",
            numberoflines: 2,
            readMoreFlag: "Read More",
            flag: 1,
            subeventsImagelink: [
                // { url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F98461144%2F4370194712%2F1%2Foriginal.20200410-205826?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=2a790d7800ab8d99799697e71d9a1f6a', key: '1' },
                // { url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F98461144%2F4370194712%2F1%2Foriginal.20200410-205826?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=2a790d7800ab8d99799697e71d9a1f6a', key: '1' },
                // { url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F98461144%2F4370194712%2F1%2Foriginal.20200410-205826?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=2a790d7800ab8d99799697e71d9a1f6a', key: '1' },
                // { url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F98461144%2F4370194712%2F1%2Foriginal.20200410-205826?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=2a790d7800ab8d99799697e71d9a1f6a', key: '1' },
                // { url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F98461144%2F4370194712%2F1%2Foriginal.20200410-205826?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=2a790d7800ab8d99799697e71d9a1f6a', key: '1' },
                // { url: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F98461144%2F4370194712%2F1%2Foriginal.20200410-205826?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=2a790d7800ab8d99799697e71d9a1f6a', key: '1' },

                // { title: 'hewre dfdf', key: '2' },
                // { title: "here comes the image link", key: '3' },
                // { title: 'hewre dfdf', key: '4' },
                // { title: "fdlfdjfl", key: '5' }
            ]
        };

    };

    componentDidMount() {

        const ref = database().ref().child("events").child("event-id-1");
        const subeventsRef = ref.child("subevents");
        let subeventsImagelink = [];
        subeventsRef.once("value", snap => {
            let tt = snap.val();
            // console.log(tt);
            snap.forEach(element => {
                let tt1 = element.val();
                console.log(tt1)
                subeventsImagelink.push({ url: tt1.imagelink })

            });
            this.setState({
                subeventsImagelink
            }, () => {
                console.log("he")
                console.log(this.state.subeventsImagelink)
            });
        })

        //Normal call karta
        ref.once("value", snapshot => {
            let data = snapshot.val();
            console.log(data.title);
            this.setState({
                title: data.title,
                datetime: data.datetime,
                description: data.description
            });
        });
    };
    renderViewMore(flag) {
        console.log(flag)
        if (flag == 1) {
            this.setState({
                numberoflines: 100,
                readMoreFlag: "Read Less",
                flag: 0
            });
        } else {
            this.setState({
                numberoflines: 3,
                readMoreFlag: "Read More",
                flag: 1
            })
        }
        console.log("hee")
        console.log(this.state.subeventsImagelink);
        console.log("eeh")
    };

    render() {
        // const { movies } = this.state;
        return (
            <ScrollView>
                <View style={{ flex: 1 }}>
                    <View >
                        <Text style={styles.title}>{this.state.title}</Text>
                        {/* {reference} */}
                    </View>
                    <View style={styles.DateTimeView}>
                        <Text style={styles.DateTime}>{this.state.datetime}</Text>
                    </View>
                    {/* <View style={styles.DescriptionView}> */}
                    <View style={styles.DescriptionView}>
                        <Text numberOfLines={this.state.numberoflines} style={styles.Description}>
                            {this.state.description}</Text></View>
                    <Text style={styles.readmore} onPress={this.renderViewMore.bind(this, this.state.flag)}>{this.state.readMoreFlag}</Text>
                    {/* <View style={styles.ImageView}>
                    <Image style={styles.image} source={{ uri: 'https://img.evbuc.com/https%3A%2F%2Fcdn.evbuc.com%2Fimages%2F98461144%2F4370194712%2F1%2Foriginal.20200410-205826?w=800&auto=format%2Ccompress&q=75&sharp=10&rect=0%2C60%2C1920%2C960&s=2a790d7800ab8d99799697e71d9a1f6a' }}
                         />
                </View> */}
                    <View style={styles.ImageView}>
                        {/* <Text>hello</Text> */}
                        <FlatList
                            data={this.state.subeventsImagelink}
                            renderItem={({ item }) => (
                                // <Card>
                                //     <Text>{item.title}</Text>
                                // </Card>
                                <Card><Image style={styles.image} source={{ uri: item.url }}
                                /></Card>
                            )}
                        />

                    </View>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    image: {
        width: null,
        resizeMode: 'contain',
        height: 180
        // flex: 1, height: undefined, width: undefined, position: 'absolute', left: 0, right: 0, top: 0, bottom: 0
    },
    ImageView: {
        flex: 1,
        // padding: 10,
        // marginLeft: 10,
        // marginRight: 10
    },
    title: {
        alignContent: 'center',
        color: '#02B894',
        fontSize: 20,
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: "bold"
    },
    DateTime: {
        alignContent: 'center',
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
        paddingTop: 10,
        fontWeight: "bold"
    },
    DateTimeView: {
        backgroundColor: '#E17055',
        borderRadius: 30,
        // width: default,
        marginLeft: 50,
        marginRight: 50,
        marginTop: 10,
        paddingBottom: 10
    },
    Description: {
        alignContent: 'center',
        textAlign: 'center',
        color: '#D0D3D4'
    },
    DescriptionView: {
        marginLeft: 10,
        marginRight: 10,

    },
    readmore: {
        alignItems: "flex-end",
        alignContent: 'flex-end',
        color: '#FFBF31',
        textAlign: 'right'
    }

});