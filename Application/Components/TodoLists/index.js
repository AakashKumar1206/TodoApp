import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'
import InputItems from './InputItem'

export default class TodoLists extends Component {
    constructor(props){
        super(props);

            this.state={
                listdata:[],
                inputtodo:''
        }
    }
  render() {
    return (
      <View>
        <Text>Working!!</Text>
        <FlatList 
            data={this.state.listdata}
            renderItem={({item})=><Text> {item.todoitem}  </Text> }
            keyExtractor={item=>{item.mainkey}}
        />

        <InputItems  placeHolder='Enter Task'/>
      </View>
    )
  }
}
