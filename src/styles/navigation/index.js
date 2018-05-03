export const transparentHeaderStyle = {
  backgroundColor: 'transparent',
  position: 'absolute',
  top: 0,
  left: 0,
  right: 0,
  borderBottomWidth: 0
}
export const setHeaderStyle = (platform) => {
  return platform === 'ios' ? {headerStyle: transparentHeaderStyle} : {
    headerTransparent: true
  }
}
