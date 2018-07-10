import React, { Component } from 'react'
import { Text, View, FlatList } from 'react-native'

export default class TodoLists extends Component {
    constructor(props){
        super(props);

            this.state={
                listdata:[
                    {
                        mainkey:1,
                        todoitem:'Take Loan'
                    },
                    {
                        mainkey:2,
                        todoitem:'talk to kamlesh'
                    },
                    {
                        mainkey:3,
                        todoitem:'check RTGS status'
                    }
                ]
        }
    }
  render() {
    return (
      <View>
        <Text>Working!!</Text>
        <FlatList 
            data={this.state.listdata}
            renderItem={({item})=><Text> {item.todoitem} </Text> }
            keyExtractor={item=>{item.mainkey}}
        />

        
      </View>
    )
  }
}
