import React from 'react'
import { View, ImageBackground, Image, ScrollView, Text, StyleSheet} from 'react-native'
import { Searchbar, Title } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons';

export default class Subscription extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    imageSubscription(imagePath, subscription) {
      return (
        <ImageBackground style={{flex: 1}} imageStyle={styles.imageStyle} source={imagePath}>
          <View style={{flex: 1, flexDirection: "row"}}>
            <Text style={styles.articleText}>{subscription}</Text>
            <View style={styles.mainDotsView}>
              <Entypo style={{margin: 10, flexDirection: 'row-reverse'}} name="dots-three-vertical" size={18} color="white"/>
            </View>
          </View>
        </ImageBackground>
      )
    }

    render() {
      return (
        <View style={{flex: 1, backgroundColor: "#F8F8FF"}}>
          <Searchbar style={{margin: 10, backgroundColor: "#b0abaa", borderRadius: 20}} placeholder="Abonnements" onChangeText={this._onChangeSearch}/>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.borderView}>
              {this.imageSubscription(require("../../assets/subscription/Europe.jpg"), "#Space")}
            </View>
            <View style={styles.borderView}>
              {this.imageSubscription(require("../../assets/subscription/jeuxvideo.png"), "#Jeux Vidéo")}
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.borderView}>
              {this.imageSubscription(require("../../assets/subscription/coronavirus.jpg"), "#Coronavirus")}
            </View>
            <View style={styles.borderView}>
              {this.imageSubscription(require("../../assets/subscription/sport.jpg"), "#Sport")}
            </View>
          </View>
          <View style={{flex: 1, flexDirection: 'row'}}>
            <View style={styles.borderView}>
              {this.imageSubscription(require("../../assets/subscription/technologie.jpeg"), "#Tech")}
            </View>
            <View style={styles.borderView}>
              {this.imageSubscription(require("../../assets/subscription/bourse.jpg"), "#Économie")}
            </View>
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
      margin: 10,
  },
  imageStyle: {
      backgroundColor: 'black',
      opacity: 0.6
  },
  articleText: {
      fontFamily: "Roboto_medium",
      fontSize: 18,
      margin: 10,
      color: 'white',
      fontWeight: 'bold'
  },
  mainEditorName: {
      marginLeft: 5,
      fontFamily: "Roboto_medium",
      color: 'white'
  },
  mainDotsView: {
      flex: 1,
      flexDirection: 'row-reverse',
  },
  editorName: {
      marginLeft: 5,
      fontFamily: "Roboto_medium",
      color: 'white',
      fontSize: 10,
  },
  dotsView: {
      flex: 1,
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center'
  },
  borderView: {
      flex: 1,
      borderRightWidth: 1,
      borderBottomWidth: 1,
      borderColor: "white"
  }
})
