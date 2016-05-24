import React from 'react'
import { View } from 'react-native'
import styles from './style'

class IconBadge extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <View>
        {
          //main element
          this.props.MainElement
        }
        <View style={[styles.IconBadge, (this.props.IconBadgeStyle ? this.props.IconBadgeStyle : {})]}>
          {
            // badge element
            this.props.BadgeElement
          }
        </View>
      </View>
    )
  }
}

export default IconBadge
