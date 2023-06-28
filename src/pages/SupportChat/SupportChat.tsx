import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import FooterMenu from '../../components/FooterMenu/FooterMenu';
import BackButton from '../../components/BackButton/BackButton';
import HeaderTitle from '../../components/HeaderTitle/HeaderTitle';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faCircleUp} from '@fortawesome/free-solid-svg-icons';

function SupportChat({route, navigation}) {
  const {currentMenu} = route.params;
  return (
    <View style={styles.parentContainer}>
      <ScrollView contentContainerStyle={styles.supportChatScreen}>
        <HeaderTitle
          imgUrl={require('../../../assets/img/support-background.jpg')}
          title="Support Care"
        />
        <View style={{marginBottom: 20}}>
          <BackButton route={route} navigation={navigation} />
        </View>
        <ScrollView contentContainerStyle={styles.chatContainer}>
          <Text style={styles.textChatInfo}>13:00</Text>
          <Text style={styles.textChatInfo}>
            You are now connected with Agent Lorem.
          </Text>

          <View style={styles.agentContainer}>
            <Image source={require('../../../assets/img/account.png')} />
            <View style={styles.agentBubbleContainer}>
              <Text style={styles.textChatName}>Agent Lorem</Text>
              <Text style={styles.txtChatMessage}>
                {
                  'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus vitae rutrum justo. Aenean sed sem quis quam lacinia pharetra sed at lacus. Sed nulla elit, interdum quis pretium vel, posuere in massa.'
                }
              </Text>
            </View>
          </View>
          <View style={styles.userContainer}>
            <Image source={require('../../../assets/img/account.png')} />
            <View style={styles.userBubbleContainer}>
              <Text style={styles.textChatNameUser}>You</Text>
              <Text style={styles.txtChatMessageUser}>
                {
                  'Nulla facilisi. Suspendisse suscipit mollis justo vitae vestibulum. Nullam fringilla, velit gravida congue faucibus, elit felis fringilla sapien, in varius elit arcu nec ipsum. Maecenas ut commodo ipsum. Etiam faucibus efficitur mauris id tristique. Sed enim elit, egestas vehicula lobortis id, sagittis sit amet neque. Aenean ac cursus elit. Integer aliquam gravida est, nec posuere ipsum tristique sit amet.'
                }
              </Text>
            </View>
          </View>

          <Text style={styles.textChatInfo}>13:02</Text>

          <View style={styles.agentContainer}>
            <Image source={require('../../../assets/img/account.png')} />
            <View style={styles.agentBubbleContainer}>
              <Text style={styles.textChatName}>Agent Lorem</Text>
              <Text style={styles.txtChatMessage}>
                {
                  'Cras id fermentum lacus. Etiam faucibus blandit euismod. Integer eu luctus mi. Quisque euismod rhoncus lorem nec consectetur.'
                }
              </Text>
            </View>
          </View>

          <View style={styles.agentContainer}>
            <Image source={require('../../../assets/img/account.png')} />
            <View style={styles.agentBubbleContainer}>
              <Text style={styles.textChatName}>Agent Lorem</Text>
              <Text style={styles.txtChatMessage}>
                {
                  'Sed congue augue velit, et varius mi malesuada varius. Nulla laoreet tortor est, non interdum tellus porttitor nec. Nam id aliquet leo. Phasellus quis urna eget erat scelerisque viverra. Praesent tristique sem eu enim porta, ac viverra mauris maximus.'
                }
              </Text>
            </View>
          </View>
        </ScrollView>
      </ScrollView>
      <View style={styles.chatInput}>
        <TextInput placeholder="Enter your text here..." />
        <TouchableOpacity activeOpacity={0.7}>
          <FontAwesomeIcon
            icon={faCircleUp}
            size={28}
            style={{transform: [{rotate: '90deg'}]}}
          />
        </TouchableOpacity>
      </View>
      <FooterMenu menu={currentMenu} />
    </View>
  );
}

export default SupportChat;

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
  },
  supportChatScreen: {
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: '#F9F9F9',
    minHeight: '100%',
    maxHeight: '100%',
  },
  chatContainer: {
    display: 'flex',
    flexDirection: 'column',
    paddingTop: 10,
    paddingBottom: 20,
    paddingLeft: 20,
    paddingRight: 20,
  },
  textChatInfo: {
    fontSize: 14,
    color: '#000',
    textAlign: 'center',
    marginBottom: 5,
  },
  agentContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginTop: 15,
    marginBottom: 15,
  },
  userContainer: {
    display: 'flex',
    flexDirection: 'row-reverse',
    justifyContent: 'flex-start',
    marginTop: 15,
    marginBottom: 15,
  },
  agentBubbleContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginLeft: 15,
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#E9E9EB',
  },
  userBubbleContainer: {
    display: 'flex',
    flexDirection: 'column',
    marginRight: 15,
    maxWidth: '80%',
    padding: 10,
    borderRadius: 10,
    backgroundColor: '#448AF7',
  },
  textChatName: {
    fontSize: 14,
    color: '#000',
    fontWeight: 'bold',
  },
  textChatNameUser: {
    fontSize: 14,
    color: '#fff',
    fontWeight: 'bold',
  },
  txtChatMessage: {
    fontSize: 14,
    color: '#000',
    fontWeight: '400',
    marginTop: 5,
  },
  txtChatMessageUser: {
    fontSize: 14,
    color: '#fff',
    fontWeight: '400',
    marginTop: 5,
  },
  chatInput: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingTop: 10,
    paddingBottom: 10,
    paddingLeft: 20,
    paddingRight: 20,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
    marginBottom: 5,
  },
});
