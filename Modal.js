import React, { Component } from 'react'
import { KeyboardAvoidingView, Modal, TouchableOpacity, View, Text } from 'react-native'

class ModalDemo extends Component {
  
  render() {
    const { showModal, onCloseModal } = this.props
    return (
      <Modal
        animationType="slide"
        transparent
        visible={showModal}
        onRequestClose={() => onCloseModal()}
      >
      <View style={styles.modalBackground} />
      <View style={styles.modalContainer}>
        <KeyboardAvoidingView
          style={styles.modalContainer}
          behavior="padding"
        >
          {chidren}
        </KeyboardAvoidingView>
      </View>
      </Modal>
    )
  }
}