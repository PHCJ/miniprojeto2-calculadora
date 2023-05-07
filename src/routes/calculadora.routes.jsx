import { createStackNavigator} from '@react-navigation/stack';
import Home from '../Home/Home';
import Basica from '../Basica/Basica';
import Conversao from '../Aritmetica/Conversao';
import Trigonometria from '../Trigonometria/Trigonometria';

const { Screen, Navigator} = createStackNavigator();

export function CalculadoraRountes(){
    return(
        <Navigator>
            <Screen name="Home"
                component={Home}
                options={{
                    headerShown:false,
                    }
                }
            />
            <Screen name="Basica"
                component={Basica}
                options={{
                    headerTitleAlign:'center',
                    headerTitle:'Calculadora Básica'
                    }
                }
            />
             <Screen name="Conversao"
                component={Conversao}
                options={{
                    headerTitleAlign:'center',
                    }
                }
            />
             <Screen name="Trigonometria"
                component={Trigonometria}
                options={{
                    headerTitleAlign:'center',
                    }
                }
            />
        </Navigator>
    )
}