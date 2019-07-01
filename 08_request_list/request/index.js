import React, {Component} from 'react';
import {
    Text, View, Image,
    FlatList
} from 'react-native';

export default class RequestView extends Component {
    // native func
    constructor() {
        super();
        this.state = {
            data: null
        };
    }

    componentDidMount() {
        this.fetchData();
    }

    render() {
        return (
            <View style={{flex:1, justifyContent: 'center', alignContent: 'center'}}>
                <Text>Hi</Text>
                <FlatList
                    data={this.state.data}
                    renderItem={this._renderItem}
                    keyExtractor={(item, index) => index.toString()}
                />
                <Text>Bye</Text>
            </View>
        );
    }
    // else func
    fetchData = async () => {
        const url = 'https://api.myjson.com/bins/zy4tv';
        fetch(url).then(res => {
            return res.json();
        }).then(data => {
            console.log(data);
            this.setState({
                data: data
            });
        });
    }

    _renderItem(rowData) {
        console.log(rowData.item.url);
        return (
            <View>
                <Text>{rowData.index}</Text>
                <Text>{rowData.item.creat}</Text>
                <Image
                    style={{width: 170,  height: 170}}
                    source={{uri: rowData.item.url}} />
                {/* <Text>{rowData.item.url}</Text> */}
            </View>
        );
    }
}