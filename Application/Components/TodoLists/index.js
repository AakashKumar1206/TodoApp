import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput,ScrollView, TouchableOpacity,SafeAreaView } from 'react-native'
import TodoItems from './TodoItems'

export default class TodoLists extends Component {
    constructor(props){
        super(props);
            this.state={
                listdata:[],
                inputtodo:''
        }
    }
  render() {
    let todo = this.state.listdata.map((val, key)=>{
            return <TodoItems key={key} keyval={key} val={val}
                    deleteMethod={()=>this.deleteTodo(key)}/>
        });
    return (
        <SafeAreaView>
      <View style={styles.container}>
          <View style={styles.header}>
              <Text style={styles.headerText}>- Todo Tasks -</Text>
          </View>
          <ScrollView style={styles.scrollContainer}>
              {todo}
          </ScrollView>
          <View style={styles.footer}>
              <TextInput 
                  style={styles.textInput}
                  placeholder='Add Item here'
                  onChangeText={(inputtodo)=> this.setState({inputtodo})}
                  value={this.state.inputtodo}
                  placeholderTextColor='white'
                  underlineColorAndroid='transparent'>
              </TextInput>
          </View>
          <TouchableOpacity onPress={ this.addTodo.bind(this) } style={styles.addButton}>
              <Text style={styles.addButtonText}>+</Text>
          </TouchableOpacity>
      </View>
      </SafeAreaView>
    )
  }

  addTodo(){
    if(this.state.inputtodo){
        var d = new Date();
        this.state.listdata.push({
            'date':d.getFullYear()+
            "/"+(d.getMonth()+1) +
            "/"+ d.getDate(),
            'note': this.state.inputtodo
        });
        this.setState({ listdata: this.state.listdata });
        this.setState({inputtodo:''});
    }
}
deleteTodo(key){
    this.state.listdata.splice(key, 1);
    this.setState({listdata: this.state.listdata});
}
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  header: {
      backgroundColor: 'rgb(45,59,174)',
      alignItems: 'center',
      justifyContent:'center',
      borderBottomWidth: 10,
      borderBottomColor: '#ddd'
  },
  headerText: {
      color: 'white',
      fontSize: 18,
      padding: 26
  },
  scrollContainer: {
      flex: 1,
      marginBottom: 100
  },
  footer: {
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      zIndex: 10
  },
  textInput: {
      alignSelf: 'stretch',
      color: '#fff',
      padding: 20,
      backgroundColor: '#252525',
      borderTopWidth:2,
      borderTopColor: '#ededed'
  },
  addButton: {
      position: 'absolute',
      zIndex: 11,
      right: 20,
      bottom: 90,
      backgroundColor: 'rgb(45,59,174)',
      width: 70,
      height: 70,
      borderRadius: 35,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8
  },
  addButtonText: {
      color: '#fff',
      fontSize: 24
  }
});

