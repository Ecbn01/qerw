import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, Modal, Image } from 'react-native';
import { WebView } from 'react-native-webview'; 

function HomeScreen({ navigation }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [webViewVisible, setWebViewVisible] = useState(true); 
  const [currentUrl, setCurrentUrl] = useState('https://ogu.edu.tr/Web/DuyuruDetay'); 

  const handleOptionPress = (option) => {
    if (option === 'Seçenek 1') {
      setCurrentUrl('https://smyo.esogu.edu.tr/Sayfa/Index/129/yonetim');
      setWebViewVisible(true); 
    } else if (option === 'Seçenek 2') {
      setCurrentUrl('https://stf.ogu.edu.tr/');
      setWebViewVisible(true); 
    } else if (option === 'Seçenek 3') {
      setCurrentUrl('https://oidb.ogu.edu.tr/');
      setWebViewVisible(true); 
    } else if (option === 'Seçenek 4') {
      setCurrentUrl('https://ogubs1.ogu.edu.tr/');
      setWebViewVisible(true); 
    } else {
      console.log(`Seçenek tıklandı: ${option}`);
    }
    setMenuVisible(false); 
  };

  return (
    <View style={styles.container}>
      <View style={styles.greenStrip}>
        <TouchableOpacity style={styles.menuButton} onPress={() => setMenuVisible(true)}>
          <Text style={styles.menuButtonText}>☰</Text>
        </TouchableOpacity>
        <View style={styles.logoWrapper}>
          <Image
            source={require('./assets/esogu.png')}
            style={styles.logoImage}
          />
        </View>
      </View>

      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.menuContainer}>
            <TouchableOpacity onPress={() => handleOptionPress('Seçenek 1')}>
              <Text style={styles.menuOption}>SMYO</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOptionPress('Seçenek 2')}>
              <Text style={styles.menuOption}>Sanat Fakültesi</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOptionPress('Seçenek 3')}>
              <Text style={styles.menuOption}>Öğrenci İşleri</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => handleOptionPress('Seçenek 4')}>
              <Text style={styles.menuOption}>Öğrenci Bilgi Sistemi</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.closeButton} onPress={() => setMenuVisible(false)}>
              <Text style={styles.closeButtonText}>Kapat</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {webViewVisible && (
        <View style={{ flex: 1, marginTop: 70 }}>
          <WebView
            source={{ uri: currentUrl }}
            style={{ flex: 1 }}
          />
          <TouchableOpacity
            style={styles.closeWebViewButton}
            onPress={() => setWebViewVisible(false)}
          >
            <Text style={styles.closeWebViewButtonText}>Kapat</Text>
          </TouchableOpacity>
        </View>
      )}

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: 20,
  },
  greenStrip: {
    backgroundColor: 'green',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    position: 'absolute',
    top: 45,
    left: 0,
    right: 0,
    zIndex: 100,
  },
  menuButton: {
    backgroundColor: '#007bff',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  menuButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  logoWrapper: {
    alignItems: 'center',
  },
  logoImage: {
    width: 100,
    height: 100,
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  menuContainer: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  menuOption: {
    fontSize: 18,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  closeButton: {
    marginTop: 15,
    backgroundColor: '#f00',
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  closeButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  closeWebViewButton: {
    position: 'absolute',
    top: 40,
    left: 20,
    backgroundColor: '#f00',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  closeWebViewButtonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default HomeScreen;
