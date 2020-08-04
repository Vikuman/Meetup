
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
import { Avatar } from "react-native-elements";
import React, { useState } from 'react';
import database from '@react-native-firebase/database';
// import ViewMoreText from 'react-native-view-more-text';
// import { FlatList } from 'react-native-gesture-handler';
import Card from '../shared/Card';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Icon from "react-native-vector-icons/FontAwesome";
// import 

// let listbackground = () => {

//     return '#00B894';
// }


export class PeopleScreen extends React.Component {
    // state = {

    constructor(props) {
        super(props);
        this.state = {
            flag: 1,
            // heartbackground: '#D63131',
            listbackground: '#00B894',
            heartbackground: '#ffffff',
            listIconColor: '#ffffff',
            heartIconColor: '#707070'
        };

    };

    componentDidMount() {

        const ref = database().ref();
        const userRef = ref.child("users");
        const subeventsRef = ref.child("events").child("event-id-1").child("attendees");
        let attendees = [];
        subeventsRef.once("value", snap => {
            // let tt = snap.key();
            // console.log(tt);

            snap.forEach(element => {
                // console.log(element.key)
                // console.log("mid");
                userRef.once("value", usersnap => {
                    // console.log(usersnap.key);
                    usersnap.forEach(userelement => {
                        if (userelement.key == element.key) {
                            let userelementval = userelement.val();
                            // console.log('a')
                            console.log(userelementval);
                            console.log(userelementval.name);

                            // console.log("jj");
                            // console.log(user)
                            attendees.push({
                                image: userelementval.image,
                                bio: userelementval.bio,
                                name: userelementval.name
                            })
                        }
                    })
                    this.setState({
                        attendees
                    }, () => {
                        console.log("hhhe")
                        console.log(this.state.attendees)
                    });

                })

            });


        })

    };

    list() {
        console.log("change2")
        this.setState({
            flag: 1,
            listbackground: '#00B894',
            heartbackground: '#ffffff',
            listIconColor: '#ffffff',
            heartIconColor: '#707070'
        });

        console.log("change")
    };
    heart() {
        console.log("change2")
        this.setState({
            flag: 0,
            listbackground: '#ffffff',
            heartbackground: '#D63131',
            listIconColor: '#707070',
            heartIconColor: '#ffffff'
        });


    };

    display() {
        if (this.state.flag == 1) {
            return <FlatList
                data={this.state.attendees}
                renderItem={({ item }) => (
                    <Card><View style={{ flex: 1, flexDirection: 'row' }}><View style={styles.avatarstyle}><Avatar
                        rounded
                        size="small"
                        source={{
                            uri:
                                item.image,
                        }}
                    /></View>
                        <View style={styles.content}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.bio}>{item.bio}</Text>
                        </View>
                    </View>
                    </Card>
                )}
            />;
        }
        else {
            return <FlatList
                data={this.state.attendees}
                renderItem={({ item }) => (
                    <Card><View style={{ flex: 1, flexDirection: 'row' }}><View style={styles.avatarstyle}><Avatar
                        rounded
                        size="large"
                        source={{
                            uri:
                                item.image,
                        }}
                    /></View>
                        <View style={styles.content}>
                            <Text style={styles.name}>{item.name}</Text>
                            <Text style={styles.bio}>{item.bio}</Text>
                        </View>
                    </View>
                    </Card>
                )}
            />
        }
    }

    render() {

        const sty = {
            heartIcon: {
                padding: 10,
                width: 45,
                height: 40,
                justifyContent: 'center',
                alignContent: 'center',
                backgroundColor: this.state.heartbackground,
                borderTopRightRadius: 50,
                borderBottomRightRadius: 50
            },
            listIcon: {
                width: 45,
                height: 40,
                padding: 10,
                backgroundColor: this.state.listbackground,
                borderTopLeftRadius: 50,
                borderBottomLeftRadius: 50
            },
        }
        return (
            <View>
                <View flexDirection='row' style={styles.bothicons}>
                    <View style={sty.listIcon}>
                        <Icon name="list"
                            color={this.state.listIconColor}
                            size={20}
                            alignContent={"center"}
                            onPress={this.list.bind(this)} />
                    </View>
                    <View style={sty.heartIcon}>
                        <Icon name="heart"
                            color={this.state.heartIconColor}
                            raised="true"
                            size={20}
                            underlayColor="#ff23ff"
                            onPress={this.heart.bind(this)} />
                    </View>
                </View>
                <View>
                    {this.display()}
                    {/* <FlatList
                        data={this.state.attendees}
                        renderItem={({ item }) => (
                            <Card><View style={{ flex: 1, flexDirection: 'row' }}><View style={styles.avatarstyle}><Avatar
                                rounded
                                size="large"
                                source={{
                                    uri:
                                        item.image,
                                }}
                            /></View>
                                <View style={styles.content}>
                                    <Text style={styles.name}>{item.name}</Text>
                                    <Text style={styles.bio}>{item.bio}</Text>
                                </View>
                            </View>
                            </Card>
                        )}
                    /> */}

                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    Image: {

    },
    bothicons: {
        paddingTop: 10,
        marginLeft: 20
    },

    content: {
        flex: 1
        // marginRight: "10%",
        // paddingRight: '20%'
    },
    avatarstyle: {
        marginRight: 20
    },
    name: {
        fontWeight: "bold",
        fontSize: 20,
        color: '#676C6E'
    },
    bio: {
        color: '#B0B6B8'

    }
})