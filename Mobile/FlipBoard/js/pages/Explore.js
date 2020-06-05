import React from 'react'
import {
  Text
} from 'native-base';
import { View, ImageBackground, StyleSheet, ScrollView } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Searchbar, Title } from 'react-native-paper';

export default class Explore extends React.Component {
    constructor() {
        super();
    }

    componentDidMount() {
    }
    Article(imagePath, title, editorName) {
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
     )}
    render() {
      return (
        <View style={{flex: 1, backgroundColor: "#F8F8FF"}}>
        <Searchbar style={{margin: 10, backgroundColor: "#b0abaa", borderRadius: 20}} placeholder="Rechercher sur Flipboard" onChangeText={this._onChangeSearch}/>
        <Title style={styles.titleInfos}>INÉDIT</Title>
          {/*Left Article */}
          <View style={{flexDirection: 'row', flex: 1}}>
          <View style={styles.rightBorderView}>
            <View style={{margin: 5, flex: 1}}>
                {this.Article(require("../../assets/explore/News1.jpg"), "Propos racistes dans la police : six policiers de Rouen en conseil de discipline, la justice saisie dans une autre affaire ", "Le Monde. 5h")}
            </View>
          </View>
          {/*Left Article */}
          {/*Right Article */}
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={styles.rightBorderView}>
              <View style={{margin: 5, flex: 1}}>
                  {this.Article(require("../../assets/explore/News2.jpg"), "William Barr, le bouclier de Donald Trump", "Le Parisien. 5h")}
              </View>
            </View>
          </View>
          {/*Left Article */}
        </View>

          {/*Left Article */}
        <View style={{flex: 1}}>
          <View style={{flexDirection: 'row', flex: 1}}>
            <View style={styles.rightBorderView}>
              <View style={{margin: 5, flex: 1}}>
                {this.Article(require("../../assets/explore/News3.jpg"), "Des restructurations au coronavirus, l’apport controversé des cabinets de consulting à l’hôpital", "Le monde . 2h")}
              </View>
            </View>
              {/*Left Article */}
              {/*Right Article */}
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={styles.rightBorderView}>
                <View style={{margin: 5, flex: 1}}>
                        {this.Article(require("../../assets/explore/News4.jpg"), "Jordan Peterson, nouveau héraut des masculinistes", "Kombini. 5h")}
                </View>
              </View>
            </View>
        </View>
      </View>
      {/*Right Article */}
    </View>
    )
  }
}

const styles = StyleSheet.create({
  imageStyle: {
      borderRadius: 10,
      backgroundColor: 'black',
      opacity: 0.6
  },
  articleText: {
      fontFamily: "Roboto_medium",
      fontSize: 14,
      color: 'black',
  },
  titleStyle: {
    fontWeight: 'bold',
    color: 'black',
    marginLeft: 10
  },
  titleInfos: {
    fontFamily: "Roboto_medium",
    fontSize: 15,
    color: 'black',
    marginLeft: 10,
    fontWeight: 'bold'
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
