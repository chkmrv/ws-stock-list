import React from 'react'
import {shallow} from 'enzyme'
import AppView from './AppView';
import {Data} from "../../types";

const data: Data = {}

const setup = () => {
    return shallow(<AppView
        mergeMessage={() => {}}
        deleteCode={() => {}}
        data={data}
    />)
};

describe('(Component) AppView', () => {
    it('renders without crashing', () => {
        const wrapper = setup();
        expect(wrapper).not.toBe(null)
    });
})
