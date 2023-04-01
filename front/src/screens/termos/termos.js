import React from 'react';
import { Modal, View, Text } from 'react-native';
import styleTerms from './styleTermos.js';

const TermsAndConditionsModal = ({ visible, onClose }) => {
  return (
    <Modal style={styleTerms.modalBackground} visible={visible} animationType="slide">
      <View style={styleTerms.modalContainer}>
        <Text style={styleTerms.modalTitle}>Termos e condições</Text>
        <Text style={styleTerms.modalText}>Aqui vão os termos e condições</Text>
        <Text style={styleTerms.closeButton} onPress={onClose}>Fechar</Text>
      </View>
    </Modal>
  );
};

export default TermsAndConditionsModal;
