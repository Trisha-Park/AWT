import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Articles from '../../Component/Community/Articles';

import axios from 'axios';

const CommunitySearch = ({ route }) => {
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
        <View>
            <Text>로딩 중</Text>
        </View>
    ) : (
        <View>
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
                    <Articles article={searchs} />
                </TouchableOpacity>
            ))}
        </View>
    );
};

export default CommunitySearch;
