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
        onMessage={() => {}}
        source={{uri: 'https://devphotomakeup.pulpoar.com/'}}
        allowsInlineMediaPlayback
        allowsInlineMediaPlaybackjavaScriptEnabledoriginWhitelist={['*']}
        originWhitelist={['*']}
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
