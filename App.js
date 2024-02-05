import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView} from 'react-native';

const App = () =>{
  return(
    <ScrollView contentContainerStyle={styles.scrollViewContainer}>
    <View style={styles.container}>
      
      <View style={styles.container1}>
        <View style={styles.contenedorimagen}>
        <Image source={require('./assets/perfil307091-removebg.png')}
        style={styles.image}/>
        </View>

        <Text style={styles.textName}>Carlo Jesus Barrera Yañez</Text>

        <View style={styles.educacion}>
        <Text style={styles.texttitulo}>Educacion</Text>
        <Text style={styles.textsub}>Universidad Autonoma de Queretaro</Text>
        <Text style={styles.textsub}>Carrera de Ingeneria de software, en Curso.</Text>
        </View>

        <View style={styles.educacion}>
        <Text style={styles.texttitulo}>Idiomas</Text>
        <Text style={styles.textsub}>Idioma Ingles:Intermedio</Text>
        </View>

        <View style={styles.educacion}>
        <Text style={styles.texttitulo}>Contacto</Text>
        <Text style={styles.textsub}>cbarrera18@alumnos.uaq.mx</Text>
        <Text style={styles.textsub}>Cel: 7731873234</Text>
        <Text style={styles.textsub}>Av. Tlacote, Campo militar</Text>
        </View>

        </View>
      
      <View style={styles.container2}>
        <Text style={styles.textName}></Text>
        <View style={styles.contenedortitulos}>
          <Text style={styles.texttitulo}>Estuadiante de Ingeneria de software</Text>
          <Text>Estudiante de Ingeneria de software. Me considero una persona de valores con gusto al orden y en busca de experiencia laboral en mi area</Text>
          </View>

        <View style={styles.educacion}>
          <Text style={styles.texttitulo}>Experiencia laboral</Text>
          <Text style={styles.textsub}>Programacion, Tecnico de hardware, Vendedor, Fabricacion de muebles, Repartidor</Text>
          
        </View>

        <View style={styles.educacion}>
          <Text style={styles.texttitulo}>Otros conocimientos</Text>
          <Text style={styles.textsub}>Procesamiento de textos, hojas de calculo, presentacion de diapositivas, edicion de multimedia</Text>
          
        </View>
      </View>
    
    </View>
    </ScrollView>


  );
}

const styles = StyleSheet.create({
  scrollViewContainer: {
    flexGrow: 1,
    backgroundColor: '#e5e5e5',
    //alignItems: 'center',
  },
  container: {
    flex: 1,
    flexDirection: 'column',
  },
  container1: {
    flex: 1,
    width: '50%',
    height: '100%',
    backgroundColor: '#959595',
    top : 50,
    //justifyContent: 'center',
    alignItems: 'center',
  },
  container2: {
    flex: 1,
    position: 'absolute',
    width: '50%',
    height: '100%',
    backgroundColor: '#e5e5e5',
    left : 185,
    
    justifyContent: 'right',
    alignItems: 'center',
  },
  contenedorimagen: {
    width: '50%',
    height: '20%',
    backgroundColor: '#e5e5e5',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: 200,
    height: 200,
  },
  educacion:{
    backgroundColor: '#b0b0b0',
    fontSize: 25,
    borderRadius: 10,
    marginVertical: 30,
    

  },
  textName:{
    textAlign: 'center',
    marginVertical: 5,
    fontSize: 25,
    fontWeight: 'bold',
    backgroundColor: 'rgba(202, 202, 202, 0.6)',
    paddingHorizontal: 5, // Añade relleno horizontal
    borderRadius: 10,

    color: '#fff',
    //fontFamily: 'Helvetica'
  },
  texttitulo:{
    textAlign: 'center',
    fontWeight: 'bold', // Aplica negrita al texto
    fontSize: 25,
    fontWeight: '300',
    color: '#fff',
    backgroundColor: 'rgba(202, 202, 202, 0.6)',
    borderRadius: 10,

  },
  textsub:{
    textAlign: 'center',
    fontSize: 15,
    fontWeight: '300',
    color: '#fff',

  },
  textBody:{
    fontSize: 12,
    fontWeight: '300',
    color: 'red',
  }
})
export default App;