import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
    root: {
        flex: 1,
        justifyContent: 'center',
        backgroundColor: '$blackBlueColor'
    },
    scrollview: {
        flex:1,
        marginTop:25
    },
    card: {
        alignSelf: 'stretch',
        backgroundColor: 'white',
        padding: 20,
        flexDirection: 'row',
        borderTopWidth:.2,
        borderColor:'rgba(0,0,0,.2)'
    },
    cardText: {
        color: 'rgba(0,0,0,.8)',
        fontWeight:'700',
        fontSize:20
    },
    teamContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems:'center'
    },
    stats: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    statsText: {
        fontSize: 25
    }
})

export default styles;