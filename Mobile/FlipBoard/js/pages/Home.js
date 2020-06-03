import React from 'react'
import { View, ImageBackground, Text, StyleSheet } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';

export default class Home extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }

    render() {
      return (
        <View style={{flex: 1, backgroundColor: "#F8F8FF"}}>
          {/* Main Article */}
          <View style={styles.container}>
            <ImageBackground style={{flex: 1}} imageStyle={styles.imageStyle} source={require('../../assets/gaspard-article.jpg')}>
              <View style={styles.container}>
                <View style={{flexDirection: 'row-reverse'}}>
                  <Entypo name="chevron-down" size={30} color="white" />
                </View>
                <View style={{flex: 3}}>
                </View>
                <View style={{flex: 1.5, marginHorizontal: 10}}>
                  <Text numberOfLines={3} style={styles.mainArticleText}>Gaspard Mater est-il un Mâle Blanc Privilégié Cis Genre Raciste Sexiste Homophobe Xénophobe Pas Ouvert d'Esprit Islamophobe Dictateur Nazi ?</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Ionicons name="ios-flash" size={18} color="red" />
                    <Text style={styles.mainEditorName}>Le vrai journal . 1h</Text>
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
            {/*Left Article */}
            <View style={styles.rightBorderView}>
              <View style={{margin: 5, flex: 1}}>
                <View style={{flex: 2}}>
                  <ImageBackground style={{flex: 1}} imageStyle={styles.imageStyle} source={require('../../assets/trone.jpg')}>
                  </ImageBackground>
                </View>
                <View style={{flex: 2}}>
                  <View style={{flex: 3, justifyContent: 'center'}}>
                    <Text numberOfLines={2} style={styles.articleText}>Wallah bilay B2O il est chaud de ouf, que des victoires so ez </Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
                    <View style={{flex: 4, flexDirection: 'row', alignItems: 'center'}}>
                      <Text numberOfLines={1} style={styles.articleText}>Le journal OKLM . 3h</Text>
                    </View>
                    <View style={styles.dotsView}>
                      <Entypo name="dots-three-vertical" size={17} color="black"/>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/*Left Article */}
            {/*Right Article */}
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={styles.rightBorderView}>
                <View style={{margin: 5, flex: 1}}>
                  <View style={{flex: 2}}>
                    <ImageBackground style={{flex: 1}} imageStyle={styles.imageStyle} source={require('../../assets/kaamelott.jpg')}>
                    </ImageBackground>
                  </View>
                  <View style={{flex: 2}}>
                    <View style={{flex: 3, justifyContent: 'center'}}>
                      <Text numberOfLines={2} style={styles.articleText}>Kaamelott, Alexandre Astier vien de dévoiler que Perceval</Text>
                    </View>
                    <View style={{flex: 1, justifyContent: 'center', flexDirection: 'row'}}>
                      <View style={{flex: 4, flexDirection: 'row', alignItems: 'center'}}>
                        <Text numberOfLines={1} style={styles.articleText}>La vérité vrai. 5h</Text>
                      </View>
                      <View style={styles.dotsView}>
                        <Entypo name="dots-three-vertical" size={17} color="black"/>
                      </View>
                    </View>
                  </View>
                </View>
              </View>
            </View>
            {/*Right Article */}
          </View>
        </View>
      )
    }
}

const styles = StyleSheet.create({
  container: {
      flex: 1.5,
      margin: 10,
  },
  imageStyle: {
      borderRadius: 10,
      backgroundColor: 'black',
      opacity: 0.6
  },
  mainArticleText: {
      fontFamily: "Roboto_medium",
      textAlign: 'center',
      fontSize: 17,
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
      fontSize: 14,
      color: 'black',
  },
  dotsView: {
      flex: 1,
      flexDirection: 'row-reverse',
      justifyContent: 'center',
      alignItems: 'center'
  },
  rightBorderView: {
      flex: 1,
      borderColor: 'grey',
      borderLeftWidth: 0.5,
      borderTopWidth: 0.5
  }

})
