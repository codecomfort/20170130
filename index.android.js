/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
  AppRegistry, Navigator, ListView, Text, TouchableHighlight
} from 'react-native';

import MyScene from './MyScene';

class SimpleNavigationApp extends Component {
  render() {
    const ds = new ListView.DataSource({
      rowHasChanged: (r1, r2) => r1 !== r2
    });
    const recipeTitles = [
      {
        "menu_name": "ラタトゥイユ"
      },
      {
        "menu_name": "カポナータ"
      },
      {
        "menu_name": "焼きパプリカ？"
      },
    ]
    const recipes = [
      {
        "menu_name": "ラタトゥイユ",
        "items": [
          { "item": "トマト" },
          { "item": "ズッキーニ" }
        ]
      },
      {
        "menu_name": "カポナータ",
        "items": [
          { "item": "トマト" },
          { "item": "なす" }
        ]
      },
      {
        "menu_name": "焼きパプリカ？",
        "items": [
          { "item": "赤パプリカ" },
          { "item": "黄パプリカ" }
        ]
      }

    ]
    return (
      <Navigator
        initialRoute={{ sceneName: 'RecipeTitles'}}
        renderScene={ (route, navigator) => {
          if (route.sceneName === 'RecipeTitles') {
              return <ListView
                  dataSource={ ds.cloneWithRows(recipeTitles) }
                  renderRow={ (data) => {
                    return (
                      <TouchableHighlight
                        onPress={ () => {
                          const nextRoute = {
                            sceneName: 'Recipe',
                            recipe: data.menu_name
                          }
                          navigator.push(nextRoute);
                        }}
                      >
                        <Text>{data.menu_name}</Text>
                      </TouchableHighlight>
                    )
                  }}
              />
          }
          if (route.sceneName === 'Recipe') {
              return <ListView
                  dataSource={ ds.cloneWithRows(recipes.find( recipe => recipe.menu_name === route.recipe).items) }
                  renderRow={ (data) => {
                    return (
                      <TouchableHighlight
                        onPress={ () => {
                          navigator.pop();
                        }}
                      >
                        <Text>{data.item}</Text>
                      </TouchableHighlight>
                    )
                  }}
              />
          }
      }}
      />
    )
  }
}

AppRegistry.registerComponent('sample', () => SimpleNavigationApp);
