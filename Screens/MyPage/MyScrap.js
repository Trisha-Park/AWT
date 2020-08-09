import React, { useState, useEffect } from 'react';
import { useIsFocused } from '@react-navigation/native';
import { StyleSheet, View, TouchableOpacity, ScrollView } from 'react-native';

import Articles from '../../Component/Community/Articles';
import Loading from '../Loading';

import axios from 'axios';
import { connect } from 'react-redux';

const MyScrap = ({ navigation, resourceToken }) => {
    const [isMyScrapLoading, setIsMyScrapLoading] = useState(false);
    const [myScraps, setMyScraps] = useState([]);

    const getMyScrap = async () => {
        try {
            setIsMyScrapLoading(true);
            const { data } = await axios.get(
                `http://3.34.197.112:5050/user/scrap`,
                {
                    headers: { authorization: resourceToken },
                    withCredentials: true,
                }
            );
            setMyScraps([...data.scrapPosts]);
            setIsMyScrapLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getMyScrap();
    }, []);

    const isFocused = useIsFocused();

    useEffect(() => {
        try {
            if (isFocused) {
                getMyScrap();
            }
        } catch (error) {
            console.log(error);
        }
    }, [isFocused]);

    return isMyScrapLoading ? (
        <Loading />
    ) : (
        <View
            style={{
                flexDirection: 'column',
                alignItems: 'center',
                backgroundColor: '#F1F2F6',
                flex: 1,
                paddingTop: 5,
            }}
        >
            <ScrollView>
                {myScraps.map((myScrap, idx) => (
                    <TouchableOpacity
                        key={idx}
                        onPress={() => {
                            navigation.navigate('글 알아보기', {
                                id: myScrap._id,
                            });
                        }}
                    >
                        <Articles article={myScrap} />
                    </TouchableOpacity>
                ))}
            </ScrollView>
        </View>
    );
};
const styles = StyleSheet.create({});
const mapStateToProps = (state) => {
    return {
        resourceToken: state.authReducer.resourceToken,
    };
};
export default connect(mapStateToProps)(MyScrap);
