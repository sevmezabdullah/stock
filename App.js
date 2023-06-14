import { SafeAreaView, StyleSheet, View } from 'react-native';
import Home from './src/pages/Home';
import { Provider } from 'react-redux';
import { store } from './src/app/store';
export default function App() {
  return (
    <Provider store={store}>
      <SafeAreaView>
        <Home />
      </SafeAreaView>
    </Provider>
  );
}
