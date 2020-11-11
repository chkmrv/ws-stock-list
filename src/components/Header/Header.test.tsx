import React from 'react'
import {shallow} from 'enzyme'
import Header from './Header'

describe('(componenewets) Header', () => {
    let _wrapper: any

    const render = () => {
        _wrapper = shallow(<Header />)
    }

    beforeEach(() => {
        render()
    })

    describe('Tests Header', () => {
        it('render header elements', () => {
          expect(_wrapper.find('.header').length).toEqual(1)
          expect(_wrapper.find('.nav-item').length).toEqual(1)
        })

        it('connection header', () => {
          expect(_wrapper.find('.navbar-connection').length).toEqual(1)
        })
    })
})
