import React from 'react'
import NextArrowButton from './NextArrowButton'

import TestRender from 'react-test-renderer'

const testRender = TestRender.create(<NextArrowButton disabled={true} />)
const testInstance = testRender.root
const testTree = testRender.toJSON()


it('should renders components shot', () => {
  expect(testTree).toMatchSnapshot()
})

it('should renders props of disabled', () => {
  expect(testInstance.findByType(NextArrowButton).props.disabled).toBe(true)
})

it('should renders props number one', () => {
  expect(Object.values(testInstance.props).length).toBe(1)
})
