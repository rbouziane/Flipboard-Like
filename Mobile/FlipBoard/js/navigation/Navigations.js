import { createAppContainer } from 'react-navigation';
import { createStackNavigator} from 'react-navigation-stack';
import Home from '../pages/Home'

const AppStackNavigator = createStackNavigator({
    Home: {
        screen: Home,
    },
},{
    mode: Platform.OS === 'ios' ? 'modal' : 'card',
    headerMode: 'none',
})

export default createAppContainer(AppStackNavigator)
