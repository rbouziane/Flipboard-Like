import React from 'react'
import {
  Text
} from 'native-base';
import { View, ImageBackground, StyleSheet, ActivityIndicator, Dimensions} from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import { Entypo } from '@expo/vector-icons';
import { Searchbar, Title } from 'react-native-paper';
import NewsPaperView from './NewsPaperView'
import { getNews } from "./API"
import {
    Button,
    Container,
    Content
} from 'native-base';

const windowHeight = Dimensions.get('window').height;

export default class Explore extends React.Component {
    constructor() {
        super();

        this.state = {
          setModalVisible: false,
          articles: [],
          isReady: false,
          urlToOpen: "",
          searchQuery: 'Science',
        }
    }

    _onChangeSearch = query => this.setState({ searchQuery: query });

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
      this.fetchNews(this.state.searchQuery);
    }

    async fetchNews(category) {
      this.setState({isReady: false});
      let articles
      try {
        articles = await getNews("10", category)
        if (articles.length != 0)
          this.setState({articles: articles, isReady: true});
      } catch(e) {
        console.log("Error", e)
      }
    }

    articleList (article) {
      return (
        <View key={article.title} style={{margin: 5, height: windowHeight / 3.5}}>
        <ImageBackground style={{flex: 1}} imageStyle={styles.imageStyle} source={{uri: article.urlToImage}}>
          <View style={styles.container}>
            <View style={{flexDirection: 'row-reverse'}}>
             <Button
               transparent
               style={{height: null, width: null}}
               onPress={() => this.handleItemDataOnPress(article.url)}>
               <Entypo name="chevron-down" size={22} color="white" />
             </Button>
            </View>
            <View style={{flex: 3}}>
            </View>
            <View style={{flex: 4, marginHorizontal: 10}}>
              <Text numberOfLines={3} style={styles.articleText}>{article.title}</Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <View style={{flex: 10, flexDirection: 'row'}}>
                <Ionicons name="ios-flash" size={15} color="red" />
                <Text style={styles.editorName}>{article.source.name}</Text>
              </View>
              <View style={styles.mainDotsView}>
                <Entypo name="dots-three-vertical" size={15} color="white"/>
              </View>
            </View>
          </View>
        </ImageBackground>
        </View>
      )
    }

    render() {
      return (
        <Container style={{flex: 1, backgroundColor: "#F8F8FF"}}>
          <Content contentContainerStyle={{flexGrow: 1}}>
            <Searchbar
              style={{margin: 10, backgroundColor: "#b0abaa", borderRadius: 20}}
              placeholder="Rechercher sur Flipboard"
              onSubmitEditing={() => this.fetchNews(this.state.searchQuery)}
              onChangeText={this._onChangeSearch}
              value={this.state.searchQuery}/>
            <Title style={styles.titleInfos}>INÉDIT</Title>
            {this.state.isReady == true
              ?
                <View style={{flexGrow: 1}}>
                  {this.state.articles.map((article) => this.articleList(article))}
                </View>
              :
                <View style={{flexGrow: 1, justifyContent: 'center'}}>
                  <ActivityIndicator size="large" color="#e71d25"/>
                </View>
            }
          </Content>
          <NewsPaperView
            showModal={this.state.setModalVisible}
            url={this.state.urlToOpen}
            onClose={this.handleModalClose}
          />
        </Container>
      )
    }
}

const styles = StyleSheet.create({
  imageStyle: {
      borderRadius: 20,
      backgroundColor: 'black',
      opacity: 0.6
  },
  articleText: {
    fontFamily: "Roboto_medium",
    fontSize: 17,
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold'
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
  },
  editorName: {
      marginLeft: 5,
      fontFamily: "Roboto_medium",
      color: 'white',
      fontSize: 10,
  },
  container: {
      flex: 1,
      margin: 10,
  },
  mainDotsView: {
      flex: 1,
      flexDirection: 'row-reverse',
  },
})
