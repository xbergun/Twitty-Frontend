import { View } from 'react-native';


const Header = ({
    title,
    subtitle,
    image,
    imageAlt,
    imagePosition,
    children,
    rightComponent,
    leftComponent,
    centerComponent,
}) => {
    return (
        <>
            {
                title && <Text style={styles.title}>{title}</Text>
            }

            {
                subtitle && <Text style={styles.subtitle}>{subtitle}</Text>
            }
            {
                rightComponent && <View style={styles.rightComponent}>{rightComponent}</View>
            }

            {
                leftComponent && <View style={styles.leftComponent}>{leftComponent}</View>
            }

            {
                centerComponent && <View style={styles.centerComponent}>{centerComponent}</View>
            }
            
        </>
    )
}


export default Header;