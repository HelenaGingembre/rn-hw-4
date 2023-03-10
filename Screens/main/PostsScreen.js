import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

import { Header } from '../../components/header';
import { User } from '../../components/user';
import { Publication } from '../../components/publications';
import { Login } from '../../Screens/auth/LoginScreen';

import photo1 from '../../assets/images/post_1.png';
import photo2 from '../../assets/images/post_2.png';

export const PostsScreen = ({}) => {
    return (
        <View style={styles.container}>
            {/* <Header title="Публікaції" out={true} /> */}
            <ScrollView style={styles.main}>
                <User />
                <Publication
                    title={'Ліс'}
                    image={photo1}
                    comments={0}
                    location={`Ivano-Frankivs'k Region, Ukraine`}
                />

                <Publication
                    title={'Чорне море'}
                    image={photo2}
                    comments={0}
                    location={'Odessa, Ukraine'}
                />

                {/* {posts.map(({ id, image, title, comments, location }) =>
					<Publication key={id} title={title}
						image={image}
						coments={comments}
						location={location} />)} */}
            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    main: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: 30,
        paddingHorizontal: 16,
    },
});
