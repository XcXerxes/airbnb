import React from 'react'
import Notification from './'

import TestRender from 'react-test-renderer'

const testRender = TestRender.create(<Notification type="success" firstLine="first" secondLine="second" />)
console.log(testRender)
const testInstance = testRender.root
const testTree = testRender.toJSON()

it('should return shot', () => {
  expect(testTree).toMatchSnapshot()
})

// it('should return props', () => {
//   expect(testInstance.findByType(Notification).props.type).toBe('success')
//   expect(testInstance.findByType(Notification).props.firstLine).toBe('first')
//   expect(testInstance.findByType(Notification).props.secondLine).toBe('second')
// })