import React from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, ScrollView } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { Button, Paragraph, Menu, Divider, Provider, Searchbar } from 'react-native-paper';
import Icon from 'react-native-vector-icons/FontAwesome';

import Firebase from '../Login/FirebaseConfig'
import { SendNewName } from '../Login/FirebaseAPI'

import { EvilIcons } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default class Profile extends React.Component {
    constructor() {
        super();
        this.state = {
          visible: false,
          show: false,
          getname: '',
        };
    }

    componentDidMount() {
      Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        Firebase.database().ref(`users/${user.uid}`).once('value', (data) => {
               const update = data.val();
                this.setState({ getname: update.name });
          })
        }
      });
    }
    _openMenu = () => this.setState({ visible: true });
    _closeMenu = () => this.setState({ visible: false });
    newname = () => this.setState({ show: true });
    closenewname = () => this.setState({ show: false});

    Setname = async () => {
      console.log('ici');
      Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        Firebase.database().ref(`users/${user.uid}`).once('value', (data) => {
              const update = data.val();
               this.setState({getname: update.name});
          })
        }
      });
    }
    PressIN = async () => {
      this.setState({ show: false })
      console.log(this.state.name)
        if (this.name != '') {
            await SendNewName(this.state.name)
            this.Setname()
        }
      }

    render() {
      return (
        <View style={styles.container}>
          <ScrollView showsVerticalScrollIndicator={false}>


          <View>
            {this.state.show ? (
            <Searchbar placeholder="Nom" placeholderTextColor="black" value={this.state.name} onChangeText={text => this.setState({ name: text })}/>
              ) : null}
            {this.state.show ? (
                <Button transparent onPress={() => this.PressIN()}>
                  <Feather name="save" size={24} color="black" />
                </Button>
                ) : null}
            </View>

              <View style={styles.menu}>
                <Menu visible={this.state.visible} onDismiss={this._closeMenu} anchor={
                  <Button transparent onPress={this._openMenu}>
                    <EvilIcons name="gear" size={35} color="black" />
                  </Button>
                  }>
                  <Menu.Item onPress={() => {}} title="Changer photo" />
                  <Divider/>
                  <Menu.Item onPress={this.newname} title="Changer de nom" />
                </Menu>
              </View>


                <View style={styles.titleBar}>
                    {/*<Ionicons name="ios-arrow-back" size={24} color="#52575D"></Ionicons>
                    <Ionicons name="md-more" size={24} color="#52575D"></Ionicons>*/}
                </View>

                <View style={{ alignSelf: "center" }}>
                    <View style={styles.profileImage}>
                        <Image source={require("../../assets/profile.jpg")} style={styles.image} resizeMode="center"></Image>
                    </View>
                </View>

                <View style={styles.infoContainer}>
                    <Text style={[styles.text, { fontWeight: "200", fontSize: 36 }]}>{this.state.getname}</Text>
                </View>

                <View style={styles.statsContainer}>
                    <View style={[styles.statsBox, { borderColor: "#DFD8C8", borderLeftWidth: 1, borderRightWidth: 1 }]}>
                        <Text style={[styles.text, { fontSize: 24 }]}>3</Text>
                        <Text style={[styles.text, styles.subText]}>Likes</Text>
                    </View>
                    <View style={styles.statsBox}>
                        <Text style={[styles.text, { fontSize: 24 }]}>6</Text>
                        <Text style={[styles.text, styles.subText]}>Follow</Text>
                    </View>
                </View>
                <Text style={[styles.subText, styles.recent]}>Activité récente</Text>
                <View style={{ alignItems: "center" }}>
                    <View style={styles.recentItem}>
                        <View style={[styles.activityIndicator, {backgroundColor: "#235a8c"}]}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                Abonnement à<Text style={{ fontWeight: "400" }}> #Space</Text> et <Text style={{ fontWeight: "400" }}>#Sport</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.recentItem}>
                        <View style={[styles.activityIndicator, {backgroundColor: "#FF0000"}]}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                Abonnement à <Text style={{ fontWeight: "400" }}>#Coronavirus</Text>
                            </Text>
                        </View>
                    </View>
                    <View style={styles.recentItem}>
                        <View style={[styles.activityIndicator, {backgroundColor: "#00FF00"}]}></View>
                        <View style={{ width: 250 }}>
                            <Text style={[styles.text, { color: "#41444B", fontWeight: "300" }]}>
                                Abonnement à <Text style={{ fontWeight: "400" }}>#Tech</Text>
                            </Text>
                        </View>
                    </View>
                </View>
            </ScrollView>
        </View>
      )
    }
}

const styles = StyleSheet.create ({
  container: {
    flex: 1,
    backgroundColor: "#fff"
  },
  text: {
    color: "#52575D"
  },
  image: {
    flex: 1,
    width: undefined,
    height: undefined
  },
  titleBar: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 24,
    marginHorizontal: 16
  },
  profileImage: {
    width: 200,
    height: 200,
    borderRadius: 200,
    overflow: "hidden"
  },
  dm: {
    backgroundColor: "#41444B",
    position: "absolute",
    top: 20,
    width: 40,
    height: 40,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center"
  },
    active: {
        backgroundColor: "#34FFB9",
        position: "absolute",
        bottom: 28,
        left: 10,
        padding: 4,
        height: 20,
        width: 20,
        borderRadius: 10
    },
    add: {
        backgroundColor: "#41444B",
        position: "absolute",
        bottom: 0,
        right: 0,
        width: 60,
        height: 60,
        borderRadius: 30,
        alignItems: "center",
        justifyContent: "center"
    },
    infoContainer: {
        alignSelf: "center",
        alignItems: "center",
        marginTop: 16
    },
    statsContainer: {
        flexDirection: "row",
        alignSelf: "center",
        marginTop: 32
    },
    statsBox: {
        alignItems: "center",
        flex: 1
    },
    mediaImageContainer: {
        width: 180,
        height: 200,
        borderRadius: 12,
        overflow: "hidden",
        marginHorizontal: 10
    },
    mediaCount: {
        backgroundColor: "#41444B",
        position: "absolute",
        top: "50%",
        marginTop: -50,
        marginLeft: 30,
        width: 100,
        height: 100,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 12,
        shadowColor: "rgba(0, 0, 0, 0.38)",
        shadowOffset: { width: 0, height: 10 },
        shadowRadius: 20,
        shadowOpacity: 1
    },
    recent: {
        marginLeft: 78,
        marginTop: 32,
        marginBottom: 6,
        fontSize: 10
    },
    recentItem: {
        flexDirection: "row",
        alignItems: "flex-start",
        marginBottom: 16
    },
    activityIndicator: {
        // backgroundColor: "#CABFAB",
        padding: 4,
        height: 12,
        width: 12,
        borderRadius: 6,
        marginTop: 3,
        marginRight: 20
    },
    menu: {
      paddingTop: 10,
      flexDirection: 'row-reverse',
    }
})
