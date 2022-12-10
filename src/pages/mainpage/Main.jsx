import React, { Component } from 'react'
import Header from '../../components/Header'
import Contentbox from './Contentbox'
import "./style.css"

export default class Main extends Component {
  render() {
    return (
      <main className='main-wrapper'>
        <Header />
        <Contentbox />
      </main>
    )
  }
}
