import React from 'react'
import { Icon } from 'native-base'

const customIcon = ({
    size="2xl",
    iconName,
    color="coolGray.800",
    as
}) => {
  return (
    <Icon
            as={as}
            size={size}
            name={iconName}
            color={color}
            _dark={{
              color: "warmGray.50",
            }}
          />
  )
}

export default customIcon