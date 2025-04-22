//import liraries
import {NavigationContainer} from '@react-navigation/native';

// create a component
const App: React.FC = () => {
  return (
    <NavigationContainer>{/* Rest of your app code */}</NavigationContainer>
  );
};

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2c3e50',
  },
});

//make this component available to the app
export default App;
