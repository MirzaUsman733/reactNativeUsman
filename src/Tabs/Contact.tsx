import React from 'react';
import {ScrollView} from 'react-native';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
} from 'react-native';
import {useTheme} from '../Components/ThemeContext';

const Contact: React.FC = () => {
  const {backgroundColor, textColor} = useTheme();

  return (
    <ScrollView contentContainerStyle={styles.scrollContainer}>
      <View style={[styles.container, {backgroundColor}]}>
        <View style={styles.contactInfo}>
          <Text style={styles.header}>Contact Info</Text>
          <View style={styles.info}>
            <View style={styles.infoItem}>
              <Text style={{color: textColor}}>
                184 Ippokratous Street, Athens, Gr, 11472
              </Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={{color: textColor}}>nassosanagn@gmail.com</Text>
            </View>
            <View style={styles.infoItem}>
              <Text style={{color: textColor}}>702-279-3488</Text>
            </View>
          </View>
        </View>

        {/* Contact Form */}
        <View style={styles.contactForm}>
          <Text style={styles.header}>Send a Message</Text>
          <View style={styles.formBox}>
            <TextInput
              style={styles.input}
              placeholder="First Name"
              placeholderTextColor="rgba(0, 0, 0, 0.5);"
            />
            <TextInput
              style={styles.input}
              placeholder="Last Name"
              placeholderTextColor="rgba(0, 0, 0, 0.5);"
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="rgba(0, 0, 0, 0.5);"
              placeholder="Email Address"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              placeholderTextColor="rgba(0, 0, 0, 0.5);"
              placeholder="Mobile Number"
              keyboardType="phone-pad"
            />
            <TextInput
              style={[styles.input, styles.textarea]}
              multiline={true}
              placeholderTextColor="rgba(0, 0, 0, 0.5);"
              placeholder="Write your message here..."
            />
            <TouchableOpacity style={styles.submitButton}>
              <Text style={{color: '#fff'}}>Send</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  contactInfo: {
    marginBottom: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#095a55',
    marginBottom: 10,
  },
  info: {
    marginTop: 10,
  },
  infoItem: {
    marginBottom: 10,
  },
  contactForm: {},
  formBox: {
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#777',
    marginBottom: 15,
    fontSize: 18,
  },
  textarea: {
    height: 120,
    textAlignVertical: 'top',
  },
  submitButton: {
    backgroundColor: '#095a55',
    borderRadius: 20,
    padding: 12,
    alignItems: 'center',
  },
});

export default Contact;
