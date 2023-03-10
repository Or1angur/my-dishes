import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from 'react-native';
import { COLORS, ROUTES } from '../../constants';

const Login = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.main}>
            <View style={styles.container}>
                <View style={styles.wFull}>
                    <View style={styles.row}>
                        <Image
                            source={require('../../../assets/logo.png')}
                            style={{ width: 85, height: 85 }}
                        />
                        <Text style={styles.brandName}>myDishes</Text>
                    </View>

                    <Text style={styles.loginContinueTxt}>
                        Login in to continue
                    </Text>
                    <TextInput style={styles.input} placeholder='Email' />
                    <TextInput style={styles.input} placeholder='Password' />

                    <TouchableOpacity
                        activeOpacity={0.7}
                        style={styles.loginBtn}
                        onPress={() => {navigation.navigate(ROUTES.HOME)}}
                    >
                        <Text style={styles.loginText}>Log In</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={styles.forgotPassBtn}
                        onPress={() => {
                            navigation.navigate(ROUTES.FORGOT_PASSWORD, {
                                userID: 'X0001'
                            });
                        }}
                    >
                        <Text style={styles.forgotPassText}>
                            Forgot Password?
                        </Text>
                    </TouchableOpacity>
                </View>

                <View style={styles.footer}>
                    <Text style={styles.footerText}>
                        {' '}
                        Don't have an account?{' '}
                    </Text>

                    <TouchableOpacity onPress={() => {navigation.navigate(ROUTES.REGISTER)}}>
                        <Text style={styles.signupBtn}>Sign Up</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default Login;

const styles = StyleSheet.create({
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 16,
    },
    container: {
        padding: 15,
        width: '100%',
        position: 'relative',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    brandName: {
        fontSize: 42,
        textAlign: 'center',
        fontWeight: 'bold',
        color: COLORS.primary,
        opacity: 0.9,
    },
    loginContinueTxt: {
        fontSize: 21,
        textAlign: 'center',
        color: COLORS.gray,
        marginBottom: 16,
        fontWeight: 'bold',
    },
    input: {
        borderWidth: 1,
        borderColor: COLORS.grayLight,
        padding: 15,
        marginVertical: 10,
        borderRadius: 5,
        height: 55,
        paddingVertical: 0,
    },
    // Login Btn Styles
    loginBtnWrapper: {
        height: 55,
        marginTop: 12,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    linearGradient: {
        width: '100%',
        borderRadius: 50,
    },
    loginBtn: {
        textAlign: 'center',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: 55,
        backgroundColor: COLORS.primary,
        borderRadius: 50,
    },
    loginText: {
        color: COLORS.white,
        fontSize: 16,
        fontWeight: '400',
    },
    forgotPassText: {
        color: COLORS.primary,
        textAlign: 'center',
        fontWeight: 'bold',
        marginTop: 15,
    },
    forgotPassBtn: {
        marginBottom: 15,
    },
    // footer
    footer: {
        textAlign: 'center',
        flexDirection: 'row',
    },
    footerText: {
        color: COLORS.gray,
        fontWeight: 'bold',
    },
    signupBtn: {
        color: COLORS.primary,
        fontWeight: 'bold',
    },
    // utils
    wFull: {
        width: '100%',
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 20,
    },
    mr7: {
        marginRight: 7,
    },
});
