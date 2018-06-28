import React, { Component } from 'react';
import { App, Panel, View, Statusbar, Page, Navbar, NavLeft, NavTitle, BlockTitle, Block, Link, List, ListItem } from "framework7-react";

import "framework7/css/framework7.css"
import "framework7-icons/css/framework7-icons.css"


const AImportedListItem = (props) => {
  return (
    <ListItem>
      Seems to be missing being included in the ul of the list
    </ListItem>
  )
}


const Home = (props) => {
  return (
      <Page>
        <BlockTitle>A framework7 app</BlockTitle>
        <List>
          <ListItem>
            No problems here
          </ListItem>
          <AImportedListItem/>
        </List>
      </Page>
  )
}


const routes = [
  {
    path: '/',
    component: Home,
  },
]

class Entry extends Component {
  render() {
    const theme = 'ios'
    return (
      <App params={{ theme, routes }}>
        <Statusbar />
        <Panel className="theme-dark" left cover>
          <View url="/panel-left/" linksView=".view-main" />
        </Panel>
        <View url="/" main className="ios-edges" />
      </App>
    );
  }
}



export default Entry;
