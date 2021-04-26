import React from 'react'
import { shallow } from 'enzyme'
import { expect } from 'chai'

describe('With Enzyme', () => {
  it('App shows "Hello world!"', () => {
    const app = shallow(
      <div>
        <p>Hello World!</p>
      </div>
    )

    expect(app.find('p').text()).to.equal('Hello World!')
  })
})
