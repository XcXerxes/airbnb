import React from 'react'
import RoundedButton from './RoundedButton'

import render from 'react-test-renderer'

const treeRender = render.create(<RoundedButton text="测试" textColor="#000000" />)
const tree = treeRender.toJSON()
const treeRoot = treeRender.root
console.log(treeRoot.props)
it('renders correctly shot', () => {
  expect(tree).toMatchSnapshot()
  // expect(treeRoot.findByType(RoundedButton).props.background).toBe('transparent')
})

it('should renders props of text values', () => {
  expect(treeRoot.findByType(RoundedButton).props.text).toBe('测试')
})

it('should renders props of background', () => {
  expect(treeRoot.findByType(RoundedButton).props.background).toBe(undefined)
})

it('should renders props of textColor', () => {
  expect(treeRoot.findByType(RoundedButton).props.textColor).toBe("#000000")
})

it('should renders props numbers', () => {
  expect(Object.keys(treeRoot.props).length).toBe(2)
})
