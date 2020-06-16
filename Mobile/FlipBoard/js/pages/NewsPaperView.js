import React from 'react'
import { View, Share, Modal } from 'react-native'
import { Body, Left, Icon, Right, Title, Button, ActivityIndicator } from 'native-base';
import { WebView } from 'react-native-webview';

export default class NewsPaperView extends React.Component {
    constructor() {
        super();
    }

    handleShare = () => {
      const { url } = this.props;
      const title = "L'article";
      var message = `${title}\n\nRead More ${url}\n\nShared via FlipBoard Like App`;
      return Share.share(
          {title, message, url: message},
          {dialogTitle:`Share ${title}`}
      );
    }

    handleClose = () => {
       return this.props.onClose();
    }

    render() {
        const { showModal, url } = this.props;
        const title = "Article";
        if (url != null) {
          return (
            <Modal
              animationType="slide"
              transparent
              visible={showModal}
              onRequestClose={this.handleClose}>
                <View style={{flex: 1, marginBottom:0, backgroundColor:'#F8F8FF'}}>
                  <View style={{flexDirection: 'row', flex: 0.1, backgroundColor:'#696969'}}>
                    <Left>
                      <Button onPress={this.handleClose} transparent>
                        <Icon name="close" style={{color: 'white', fontSize: 20}}/>
                      </Button>
                    </Left>
                    <Body>
                      <Title children={title} style={{color: 'white'}}/>
                    </Body>
                    <Right>
                      <Button onPress={this.handleShare} transparent>
                        <Icon name="share" style={{color: 'white', fontSize: 20}}/>
                      </Button>
                    </Right>
                   </View>
                  <WebView source={{uri: url}} style={{flex: 1}}
                    onError={this.handleClose}
                    scrollEnabled
                    startInLoadingState
                    scalesPageToFit
                    />
                </View>
            </Modal>
          )
        }
        else {
          return (
              <View style={{flex: 1, justifyContent: 'center'}}>
                <ActivityIndicator size="large" color="#e71d25"/>
              </View>
          )
        }
    }
}
