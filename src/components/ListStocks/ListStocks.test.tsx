import { mount } from 'enzyme';
import * as React from 'react';
import {Provider} from 'react-redux'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

import {createStore} from 'redux'
import ListStocks from './ListStocks';
import { Data } from '../../types'
import TableRow from "@material-ui/core/TableRow/TableRow";
import TableContainer from "@material-ui/core/TableContainer/TableContainer";

const middlewares = [thunk]
const mockStore = configureStore(middlewares)

const data: Data = {
    DE000BASF111: {
        isin: 'DE000BASF111',
        price: 323.2,
        bid: 323.2,
        ask: 323.2
    },
    XE000BASF111: {
        isin: 'XE000BASF111',
        price: 123.2,
        bid: 123.2,
        ask: 123.2
    }
};

const store = mockStore({data: data})

const withStore = (component:any) => (
    <Provider store={store}>
        {component}
    </Provider>
)

const getComponent = (props = {}) => mount(withStore(
    <ListStocks removeValue={() => {}} />
))

describe('ListStocks component', () => {
    it('renders without crashing', () => {
    const wrapper = getComponent()
    expect(wrapper).not.toBe(null)
    });

    it('should render correct number of messages', () => {
      const wrapper = getComponent()
      expect(wrapper.find(TableContainer).length).toEqual(1);
    })

    it('should render correct number of messages', () => {
    const wrapper = getComponent()
    expect(wrapper.find(TableRow).length).toEqual(3);
    })
});
