import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';

import Articles from '../../Component/Community/Articles';

import axios from 'axios';
import Loading from '../Loading';

const CommunitySearch = ({ route, navigation }) => {
    const [isSearchLoading, setIsSearchLoading] = useState(true);
    const [searchs, setSearch] = useState([]);

    const searchArticle = async () => {
        try {
            setIsSearchLoading(true);
            const { data } = await axios.get(
                `http://192.168.0.5:5050/community/search?content=${route.params.searchValue}`
            );
            const articleSearchDatas = data.map((articleSearchData) => {
                return {
                    _id: articleSearchData._id,
                    title: articleSearchData.title,
                    article: articleSearchData.article,
                    name: articleSearchData.name,
                    view: articleSearchData.view,
                };
            });

            setSearch([...articleSearchDatas]);
            setIsSearchLoading(false);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        searchArticle();
    }, []);

    return isSearchLoading ? (
        <Loading />
    ) : (
        <View
        style={{
            flexDirection: 'column',
            alignItems: 'center',
            flex : 1,
            marginTop : 5
        }}>
            <ScrollView >
            {searchs.map((search, idx) => (
                <TouchableOpacity
                    key={idx}
                    onPress={() => {
                        navigation.navigate('ArticleDetail', {
                            id: search._id,
                        });
                        console.log(search);
                    }}
                >
                    <Articles article={search} />
                </TouchableOpacity>
            ))}
            </ScrollView>
        </View>
    );
};

export default CommunitySearch;
