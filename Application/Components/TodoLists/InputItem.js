import React, { Component } from 'react';
import { View,TextInput,StyleSheet } from 'react-native';
// import styles from './styles'

export default class InputItems extends Component {
    constructor(props){
        super (props);
        this.state={
            inputvalue:''
        }
    }

    inputHandler(e){
        // this.setState({
        //     inputvalue: e.target.value
        // })
        this.props.listdata(e.target.value)
    }
    render(){
        return(
    <View style={styles.InputFeild}>
        <TextInput 
            autoCorrect={false}
            placeholder= {this.props.placeHolder}
            onChangeText={this.inputHandler}
            returnKeyType={'done'}
        />
    </View>
         )}

}

const styles= StyleSheet.create({
   
    InputFeild :{
        width:200,
        margin : 20,
        padding : 10,
        borderColor:'grey',
        borderWidth:1

    }
})