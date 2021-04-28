import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {fetchData} from '../store/actions'
import {SafeAreaView, FlatList} from 'react-native';
import ContentList from '../components/ContentList';
import Header from '../components/Header';

const Content = (props) => {

    useEffect(() => {
      props.fetchData();
    }, [])

    
    return (
        <SafeAreaView style={{flex: 1}}>
            <Header title={'Content'} data={props}/>
            <FlatList
             data={props.data}
             keyExtractor={(item) => item.id.toString()}
             renderItem={({item}) => (
                <ContentList {...item}/>
             )}
            />
        </SafeAreaView>
)}

const mapStateToProps = state => state.dataReducer

const mapDispatchToProps = {
    fetchData
}

export default connect(mapStateToProps, mapDispatchToProps)(Content);