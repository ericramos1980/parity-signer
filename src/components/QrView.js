// Copyright 2015-2017 Parity Technologies (UK) Ltd.
// This file is part of Parity.

// Parity is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.

// Parity is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.

// You should have received a copy of the GNU General Public License
// along with Parity.  If not, see <http://www.gnu.org/licenses/>.

'use strict'

import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { View, StyleSheet } from 'react-native'
import QRCode from 'react-native-qrcode'
import colors from '../colors';

export default class QrView extends Component {
  static propTypes = {
    text: PropTypes.string.isRequired,
    screen: PropTypes.bool
  }

  static defaultProps = {
    screen: false
  }

  render () {
    if (this.props.screen) {
      return (
        <View style={AppStyles.view}>
          {this.renderQr()}
        </View>
      )
    }

    return this.renderQr()
  }

  renderQr () {
    return (
      <View style={styles.rectangleContainer}>
        <QRCode
          value={this.props.text}
          size={290}
          bgColor='black'
          fgColor={ colors.card_bg }
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  rectangleContainer: {
    margin: 20,
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent'
  }
})
