import { StyleSheet, Text, View, FlatList } from 'react-native';
import CategoryItem from './CategoryItem';
import { commonCategories } from '../mockData/commonCategories';

const Categories = ({ setTerm, term }) => {

  return (
    <View>
      <FlatList data={commonCategories}
        renderItem={({ item, index }) => {
          return <CategoryItem
            imgUrl={item.imgUrl}
            name={item.name}
            index={index}
            active={item.name === term}
            handlePress={() => setTerm(item.name)}
          />
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(category) => category.id}
      />
    </View>
  )
}

export default Categories;
