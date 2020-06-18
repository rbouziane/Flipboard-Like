import React from 'react'
import { View, ImageBackground, Text, StyleSheet, ActivityIndicator } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { getNewsTopHeadlines } from "./API"

import NewsPaperView from './NewsPaperView'
import {
    Button,
} from 'native-base';

export default class Home extends React.Component {
    constructor() {
        super();

        this.state = {
          setModalVisible: false,
          articles: [],
          isReady: false,
          urlToOpen: "",
        }
    }

    handleItemDataOnPress = (url) => {
      this.setState({
        setModalVisible: true,
        urlToOpen: url
      })
    }

    handleModalClose = () => {
      this.setState({
        setModalVisible: false,
      });
    }

    async componentDidMount() {
      this.fetchNews();
    }

    async fetchNews() {
      let articles
      try {
        articles = await getNewsTopHeadlines("5")
        this.setState({articles: articles, isReady: true});
      } catch(e) {
        console.log("Error", e)
      }
    }

    secondArticle(imagePath, title, editorName, url) {
      return (
        <ImageBackground style={{flex: 1}} imageStyle={styles.imageStyle} source={{uri: imagePath}}>
          <View style={styles.container}>
            <View style={{flex: 1, flexDirection: 'row-reverse'}}>
              <Button
                transparent
                style={{height: null, width: null}}
                onPress={() => this.handleItemDataOnPress(url)}>
                <Entypo name="chevron-down" size={22} color="white" />
              </Button>
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
      if (this.state.isReady) {
      return (
        // <View style={{flex: 1, backgroundColor: "#333333"}}>
        <View style={{flex: 1, backgroundColor: "#F8F8FF"}}>
          {/* Main Article */}
          <View style={styles.container}>
            <ImageBackground style={{flex: 1}} imageStyle={styles.imageStyle} source={{uri: this.state.articles[0].urlToImage}}>
              <View style={styles.container}>
                <View style={{flexDirection: 'row-reverse'}}>
                  <Button
                    transparent
                    onPress={() => this.handleItemDataOnPress(this.state.articles[0].url)}>
                    <Entypo name="chevron-down" size={30} color="white" />
                  </Button>
                </View>
                <View style={{flex: 3}}>
                </View>
                <View style={{flex: 4, marginHorizontal: 10}}>
                  <Text numberOfLines={3} style={styles.mainArticleText}>{this.state.articles[0].title}</Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                  <View style={{flex: 1, flexDirection: 'row'}}>
                    <Ionicons name="ios-flash" size={18} color="red" />
                    <Text style={styles.mainEditorName}>{this.state.articles[0].source.name}</Text>
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
              <View style={{marginHorizontal: 5, flex: 1}}>
                <View style={{marginBottom: 5, flex: 2}}>
                  {this.secondArticle(this.state.articles[1].urlToImage, this.state.articles[1].title, this.state.articles[1].source.name, this.state.articles[1].url)}
                </View>
                <View style={{marginBottom: 5, flex: 2}}>
                  {this.secondArticle(this.state.articles[2].urlToImage, this.state.articles[2].title, this.state.articles[2].source.name, this.state.articles[2].url)}
                </View>
              </View>
            </View>
            {/*Left Articles */}
            {/*Right Article */}
            <View style={{flexDirection: 'row', flex: 1}}>
              <View style={styles.rightBorderView}>
                <View style={{marginRight: 5, flex: 1}}>
                  <View style={{marginBottom: 5, flex: 2}}>
                    {this.secondArticle(this.state.articles[3].urlToImage, this.state.articles[3].title, this.state.articles[3].source.name, this.state.articles[3].url)}
                  </View>
                  <View style={{marginBottom: 5, flex: 2}}>
                    {this.secondArticle(this.state.articles[4].urlToImage, this.state.articles[4].title, this.state.articles[4].source.name, this.state.articles[4].url)}
                  </View>
                </View>
              </View>
            </View>
            {/*Right Article */}
          </View>
          <NewsPaperView
            showModal={this.state.setModalVisible}
            url={this.state.urlToOpen}
            onClose={this.handleModalClose}
          />
        </View>
      )
    }
    else
      return (
          <View style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size="large" color="#e71d25"/>
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
