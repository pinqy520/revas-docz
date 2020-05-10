import React from 'react';
import { View } from 'revas';

export function AreaCenter(props: any) {
  return <View {...props} style={style} />;
}

const style = {
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
};
