import React from 'react'
import { View, ImageBackground, Text, StyleSheet, Button } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import NewsPaperView from './NewsPaperView'

export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {
          setModalVisible: false,
        }
    }

    handleItemDataOnPress = () => {
      this.setState({
        setModalVisible: true,
      });
    }

    handleModalClose = () => {
      this.setState({
        setModalVisible: false,
      });
    }

    componentDidMount() {
    }

    secondArticle(imagePath, title, editorName) {
      return (
        <ImageBackground style={{flex: 1}} imageStyle={styles.imageStyle} source={imagePath}>
          <View style={styles.container}>
            <View style={{flexDirection: 'row-reverse'}}>
              <Entypo name="chevron-down" size={18} color="white" />
            </View>
            <View style={{flex: 3}}>
            </View>
            <View style={{flex: 4, marginHorizontal: 10}}>
              <Text numberOfLines={3} style={styles.articleText}>{title}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 10, flexDirection: 'row'}}>
                <Ionicons name="ios-flash" size={15} color="red" />
                <Text style={styles.editorName}>{editorName}</Text>
              </View>
              <View style={styles.mainDotsView}>
                <Entypo name="dots-three-vertical" size={15} color="white"/>
              </View>
            </View>
          </View>
        </ImageBackground>
      )
    }

    render() {
      return (
        // <View style={{flex: 1, backgroundColor: "#333333"}}>
        <View style={{flex: 1, backgroundColor: "#F8F8FF"}}>
          {/* Main Article */}
          <View style={styles.container}>
            <ImageBackground style={{flex: 1}} imageStyle={styles.imageStyle} source={require('../../assets/article/spaceX.jpg')}>
              <View style={styles.container}>
                <View style={{flexDirection: 'row-reverse'}}>
                  <Button title="Press me"
                    color="#f194ff"
                    onPress={this.handleItemDataOnPress}>
                    {/*<Entypo name="chevron-down" size={30} color="white" />*/}
                  </Button>
                </View>
                <View style={{flex: 3}}>
                </View>
                <View style={{flex: 1.5, marginHorizontal: 10}}>
                  <Text numberOfLines={3} style={styles.mainArticleText}>SpaceX Starship : un autre prototype part en fumée</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Ionicons name="ios-flash" size={18} color="red" />
                    <Text style={styles.mainEditorName}>FredZone . 1h</Text>
                  </View>
                  <View style={styles.mainDotsView}>
                    <Entypo name="dots-three-vertical" size={18} color="white"/>
                  </View>
                </View>
              </View>
            </ImageBackground>
          </View>
          {/* Main Article */}
          <View style={{flexDirection: 'row', flex: 1}}>
            {/*Left Articles */}
            <View style={styles.rightBorderView}>
              <View style={{margin: 5, flex: 1}}>
                <View style={{marginBottom: 5, flex: 2}}>
                  {this.secondArticle(require("../../assets/article/Zurich.jpg"), "Bourse Zurich: le SMI s'envole au-dessus des 10'000 points", "Agefi . 1h")}
                </View>
                <View style={{flex: 2}}>
                  {this.secondArticle(require("../../assets/article/JO.jpeg"), "Vers des Jeux olympiques « simplifiés » à Tokyo en 2021", "RMC Sport . 1J")}
                </View>
              </View>
            </View>
            {/*Left Articles */}
            {/*Right Article */}
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={styles.rightBorderView}>
                <View style={{margin: 5, flex: 1}}>
                  <View style={{marginBottom: 5, flex: 2}}>
                    {this.secondArticle(require("../../assets/article/perou.jpg"), "Covid-19 : le Pérou au bord de l'asphyxies", "EuroNews Français . 14h")}
                  </View>
                  <View style={{flex: 2}}>
                    {this.secondArticle(require("../../assets/article/Business.jpeg"), "Croissance: rebond attendu à 0,3% au 1er trimestre 2020, selon la Banque de France", "BFM Business . 2J")}
                  </View>
                </View>
              </View>
            </View>
            {/*Right Article */}
          </View>
          <NewsPaperView
            showModal={this.state.setModalVisible}
            onClose={this.handleModalClose}
          />
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
      borderRadius: 20,
      backgroundColor: 'black',
      opacity: 0.6
  },
  mainArticleText: {
      fontFamily: "Roboto_medium",
      textAlign: 'center',
      fontSize: 20,
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
  articleText: {
      fontFamily: "Roboto_medium",
      fontSize: 11,
      color: 'white',
      textAlign: 'center',
      fontWeight: 'bold'
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
  rightBorderView: {
      flex: 1,
  }
})
