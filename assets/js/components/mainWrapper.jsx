import React from 'react';
import $ from 'jquery';
import Link from 'react-router/lib/Link';
import Header from './header';
import Footer from './footer'

export default class MainWrapper extends React.Component {
  render() {
    return (
      <div id='site-wrapper'>
        <Header/>

        <div id='site-content' className='adjust-size'>
          {this.props.children}
        </div>

        <Footer/>
      </div>
    )
  }
}
