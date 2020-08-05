import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Card } from 'native-base';

import Articles from '../../Component/Community/Articles';

import axios from 'axios';
import { connect } from 'react-redux';

const MyScrap = ({ navigation, userInfo }) => {
    const [isMyScrapLoading, setIsMyScrapLoading] = useState(false);
    const [myScraps, setMyScraps] = useState([]);
    console.log('마이스크랩 진입 완료')

    const getMyScrap = async () => {
        try {
            setIsMyScrapLoading(true);
            const { data } = await axios.get(
                `http://192.168.0.5:5050/user/scrap/${userInfo.userId}`
            );
            setMyScraps([...data.scrapPosts]);
            // console.log(data);
            // console.log('=========================');
            // console.log(data.scrapPosts);
            setIsMyScrapLoading(false);
        } catch (error) {
            console.log(error);
        }
    };
    //console.log(myScraps);
    useEffect(() => {
        getMyScrap();
    }, []);

    return isMyScrapLoading ? (
        <View>
            <Text>로딩중</Text>
        </View>
    ) : (
        <View>
            <View style={styles.myArticle}>
                <Card style={styles.card}>
                    <Text>스크랩한 게시글</Text>
                </Card>
            </View>
            {myScraps.map((myScrap, idx) => (
                <TouchableOpacity
                    key={idx}
                    style={styles.article}
                    onPress={() => {
                        navigation.navigate('MyScrapDetail', {
                            id: myScrap._id,
                        });
                        //console.log(myScrap);
                    }}
                >
                    <Articles article={myScrap} />
                </TouchableOpacity>
            ))}
        </View>
    );
};
const styles = StyleSheet.create({
    myArticle: {
        position: 'relative',
        marginTop: 0,
        justifyContent: 'center',
        alignItems: 'center',
    },
    card: {
        position: 'relative',
        height: 80,
        width: 150,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'yellowgreen',
    },
    article: {
        position: 'relative',
        marginTop: 10,
    },
});
const mapStateToProps = (state) => {
    return {
        userInfo: state.authReducer.userInfo,
    };
};
export default connect(mapStateToProps)(MyScrap);
