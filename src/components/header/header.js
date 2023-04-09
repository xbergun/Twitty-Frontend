import { View } from 'react-native';


const Header = ({
    rightComponent,
    leftComponent,
    centerComponent,
    isGoBack,
    isToggleDrawer,
}) => {
    return (
        <HStack styles={{
            justifyContent: 'space-between',
            alignItems: 'center',
            height: 50,
            backgroundColor: 'white',
            borderBottomWidth: 1,
            borderBottomColor: 'lightgray',
        }}>
            {
                leftComponent && (
                    <View>
                        {leftComponent}
                    </View>
                )
            }
            {
                centerComponent && (
                    <View>
                        {centerComponent}
                    </View>
                )
            }
            {
                rightComponent && (
                    <View>
                        {rightComponent}
                    </View>
                )
            }

        </HStack>
    )
}


export default Header;