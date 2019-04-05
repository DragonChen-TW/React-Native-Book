import React, { Component } from 'react';
import {View, Text, Button, StyleSheet, TabBarIOS} from 'react-native';

import ChildView from './ChildView';

var base64Icon = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEsAAABLCAQAAACSR7JhAAADtUlEQVR4Ac3YA2Bj6QLH0XPT1Fzbtm29tW3btm3bfLZtv7e2ObZnms7d8Uw098tuetPzrxv8wiISrtVudrG2JXQZ4VOv+qUfmqCGGl1mqLhoA52oZlb0mrjsnhKpgeUNEs91Z0pd1kvihA3ULGVHiQO2narKSHKkEMulm9VgUyE60s1aWoMQUbpZOWE+kaqs4eLEjdIlZTcFZB0ndc1+lhB1lZrIuk5P2aib1NBpZaL+JaOGIt0ls47SKzLC7CqrlGF6RZ09HGoNy1lYl2aRSWL5GuzqWU1KafRdoRp0iOQEiDzgZPnG6DbldcomadViflnl/cL93tOoVbsOLVM2jylvdWjXolWX1hmfZbGR/wjypDjFLSZIRov09BgYmtUqPQPlQrPapecLgTIy0jMgPKtTeob2zWtrGH3xvjUkPCtNg/tm1rjwrMa+mdUkPd3hWbH0jArPGiU9ufCsNNWFZ40wpwn+62/66R2RUtoso1OB34tnLOcy7YB1fUdc9e0q3yru8PGM773vXsuZ5YIZX+5xmHwHGVvlrGPN6ZSiP1smOsMMde40wKv2VmwPPVXNut4sVpUreZiLBHi0qln/VQeI/LTMYXpsJtFiclUN+5HVZazim+Ky+7sAvxWnvjXrJFneVtLWLyPJu9K3cXLWeOlbMTlrIelbMDlrLenrjEQOtIF+fuI9xRp9ZBFp6+b6WT8RrxEpdK64BuvHgDk+vUy+b5hYk6zfyfs051gRoNO1usU12WWRWL73/MMEy9pMi9qIrR4ZpV16Rrvduxazmy1FSvuFXRkqTnE7m2kdb5U8xGjLw/spRr1uTov4uOgQE+0N/DvFrG/Jt7i/FzwxbA9kDanhf2w+t4V97G8lrT7wc08aA2QNUkuTfW/KimT01wdlfK4yEw030VfT0RtZbzjeMprNq8m8tnSTASrTLti64oBNdpmMQm0eEwvfPwRbUBywG5TzjPCsdwk3IeAXjQblLCoXnDVeoAz6SfJNk5TTzytCNZk/POtTSV40NwOFWzw86wNJRpubpXsn60NJFlHeqlYRbslqZm2jnEZ3qcSKgm0kTli3zZVS7y/iivZTweYXJ26Y+RTbV1zh3hYkgyFGSTKPfRVbRqWWVReaxYeSLarYv1Qqsmh1s95S7G+eEWK0f3jYKTbV6bOwepjfhtafsvUsqrQvrGC8YhmnO9cSCk3yuY984F1vesdHYhWJ5FvASlacshUsajFt2mUM9pqzvKGcyNJW0arTKN1GGGzQlH0tXwLDgQTurS8eIQAAAABJRU5ErkJggg==';

export default class MainTabBar extends Component{
  constructor() {
    super();
    this.state = {
      selectedTab: 'redTab',
      badgeBlue: '2',
      badgeRed: '',
      badgeYellow: '6'
    };
  }

  _renderContent = (color, pageNext) => {
    return(
      <View style={[styles.tabContent, {backgroundColor: color}]}
        name={pageNext}
      >
        <Text style={{fontSize: 40}}>{pageNext}</Text>
        <Button title={'點擊顯示詳情 ' + this.props.id}
          onPress={
            this.gotoDetails(pageNext).bind(this)
          }
        />
      </View>
    );
  }

  gotoDetails(name) {
    this.props.navigator.push({
      title: '詳情',
      component: ChildView,
      passProps: {
        name: 'hi'
      }
    });
  }

  render() {
    return(
      <TabBarIOS barStyle='black' itemPositioning='center'
        tintColor='#DD4444' translucent={false}>
        <TabBarIOS.Item
          title='Blue Tab'
          icon={{uri: base64Icon, scale: 3}}
          selected={this.state.selectedTab === 'blueTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'blueTab',
              badgeBlue: null
            });
          }}
          badge={this.state.badgeBlue}>
          {this._renderContent('#414A8C', 'Blue Tab - 1')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Red Tab'
          systemIcon='history'
          selected={this.state.selectedTab === 'redTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'redTab'
            });
          }}>
          {this._renderContent('#783E33', 'Red Tab - 2')}
        </TabBarIOS.Item>
        <TabBarIOS.Item
          title='Yellow Tab'
          systemIcon='downloads'
          selected={this.state.selectedTab === 'yellowTab'}
          onPress={() => {
            this.setState({
              selectedTab: 'yellowTab'
            });
          }}
          badge={this.state.badgeYellow}>
          {this._renderContent('#E37833', 'Yellow Tab - 3')}
        </TabBarIOS.Item>
      </TabBarIOS>
    );
  }
}

const styles = StyleSheet.create({
  tabContent:{
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: 'white',
    margin: 50,
  }
});
