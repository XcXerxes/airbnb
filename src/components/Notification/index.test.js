import React from 'react'
import Notification from './index'

import TestRender from 'react-test-renderer'

const testRender = TestRender.create(<Notification type="success" firstLine="first" secondLine="second" />)
const testInstance = testRender.root
