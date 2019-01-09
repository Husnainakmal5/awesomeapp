import React, { Component } from 'react'
import {
  ActivityIndicator,
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  DrawerLayoutAndroid,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Modal,
  TouchableHighlight,
  ScrollView,
  Picker,
  ProgressBarAndroid,
  SectionList,
  Slider,
  StatusBar,
  TextInput,
  ToolbarAndroid
   
} from 'react-native'

export default class App extends Component {
  constructor(props) {
    super(props);
    //this.state = {};
  }
  state = {
    modalVisible: false,
    text: ''
  };

  setModalVisible(visible) {
    this.setState({modalVisible: visible});
  };
  
  render() {
    var navigationView = (
      <View style={{flex: 1, backgroundColor: '#fff'}}>
        <Text style={{margin: 10,marginTop:30, fontSize: 15, textAlign: 'left'}}>I'm in the Drawer!</Text>
      </View>
    );
    return (
      <DrawerLayoutAndroid
      drawerWidth={300}
      drawerPosition={DrawerLayoutAndroid.positions.Left}
      renderNavigationView={() => navigationView}>
      <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
      <ScrollView>
      <Text style={{margin: 10,marginTop:30, fontSize: 15}}>Activity Indicator</Text>
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />
        <ActivityIndicator size="large" color="#0000ff" />
        <ActivityIndicator size="small" color="#00ff00" />
        <Text style={{margin: 10, fontSize: 15}}>Button</Text>
        <Button style={{margin:10,padding:10}}
            onPress={() => {
              Alert.alert('You tapped the button!');
            }}
            title="Press Me"
          />
          <Text style={{margin: 10, fontSize: 15}}>Flat List</Text>
        <FlatList
          data={[
            {key: 'Devin'},
            {key: 'Jackson'},
            {key: 'James'},
            {key: 'Joel'},
            {key: 'John'},
            {key: 'Jillian'},
            {key: 'Jimmy'},
            {key: 'Julie'},
          ]}
          renderItem={({item}) => <Text style={styles.item}>{item.key}</Text>}
        />
        <Text style={{margin: 10, fontSize: 15}}>Images</Text>
        <Image
          style={{width: 50, height: 50}}
          source={{uri: 'https://facebook.github.io/react-native/docs/assets/favicon.png'}}
        />
        <Image
          style={{width: 66, height: 58}}
          source={{uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}}
        />
        <Text style={{margin: 10, fontSize: 15}}>Modal</Text>
        <Modal
          animationType="slide"
          transparent={false}
          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{marginTop: 22}}>
            <View>
              <Text>Welcome To my App! Welcome To Modal.</Text>

              <TouchableHighlight
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text>Hide Modal</Text>
              </TouchableHighlight>
            </View>
          </View>
        </Modal>

        <TouchableHighlight
          onPress={() => {
            this.setModalVisible(true);
          }}>
          <Text>Show Modal</Text>
        </TouchableHighlight>

        <Text style={{margin: 10, fontSize: 15}}>Picker</Text>

        <Picker
          selectedValue={this.state.language}
          style={{ height: 50, width: 200 }}
          onValueChange={(itemValue, itemIndex) => this.setState({language: itemValue})}>
          <Picker.Item label="Java" value="java" />
          <Picker.Item label="JavaScript" value="js" />
        </Picker>
        <Text style={{margin: 10, fontSize: 15}}>ProgressBar</Text>
        <View style={styles.container}>
        <ProgressBarAndroid />
        <ProgressBarAndroid styleAttr="Horizontal" />
        <ProgressBarAndroid styleAttr="Horizontal" color="#2196F3" />
        <ProgressBarAndroid
          styleAttr="Horizontal"
          indeterminate={false}
          progress={0.5}
        />
      </View>
      <Text style={{margin: 10, fontSize: 15}}>SectionList</Text>
      <SectionList
        renderItem={({item, index, section}) => <Text key={index}>{item}</Text>}
        renderSectionHeader={({section: {title}}) => (
          <Text style={{fontWeight: 'bold'}}>{title}</Text>
        )}
        sections={[
          {title: 'Title1', data: ['item1', 'item2']},
          {title: 'Title2', data: ['item3', 'item4']},
          {title: 'Title3', data: ['item5', 'item6']},
        ]}
        keyExtractor={(item, index) => item + index}
      />
      <Text style={{margin: 10, fontSize: 15}}>Slider</Text>
      <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
        <Slider
          value={this.state.value}
          onValueChange={(value) => this.setState({value})} />
        <Text>Value: {this.state.value}</Text>
      </View>
      <Text style={{margin: 10, fontSize: 15}}>Status Bar</Text>
      <StatusBar barStyle = "dark-content" hidden = {false} backgroundColor = "#00BCD4" translucent = {true}/>
      <Text style={{margin: 10, fontSize: 15}}>Text Input</Text>
      <View style={{padding: 10}}>
        <TextInput
          style={{height: 40}}
          placeholder="Type here to translate!"
          onChangeText={(text) => this.setState({text})}
        />
        <Text style={{padding: 10, fontSize: 42}}>
          {this.state.text.split(' ').map((word) => word && '🍕').join(' ')}
        </Text>
      </View>
      
        </ScrollView>
      </KeyboardAvoidingView>
      </DrawerLayoutAndroid>
    )
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center'
  },
  horizontal: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10
  }, 
  stretch: {
    width: 50,
    height: 200
  }
})

AppRegistry.registerComponent('App', () => App)
