import React, {Component} from 'react';
import {StyleSheet} from 'react-native';
import {WebView} from 'react-native-webview';

class PulpoAR extends Component {
  render() {
    return (
      <WebView
        {...this.props}
        useWebKit
        bounces={true}
        source={{uri: this.props.uri}} //takes url
        allowsInlineMediaPlayback
        javaScriptEnabledAndroid={true}
        mediaPlaybackRequiresUserAction={false}
        originWhitelist={['*']}
        onMessage={m => this.props.onMessage(m)}
        ref={this.props.pulpoRef}
      />
    );
  }
}
export default PulpoAR;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
