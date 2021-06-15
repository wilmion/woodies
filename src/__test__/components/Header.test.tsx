import React from 'react'
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Header from '../../components/Header'; 

describe('<Header />' , () => {
    const func = jest.fn();
    const header = shallow(<Header toggleMenu={func} />);
    test('Render' , () => {
        const headerT = shallow(<Header toggleMenu={(open) => null} />);
        expect(headerT.length).toEqual(1);
    })
    test('Click on menu' , () => {    
        header.find('.header__menu__icon').simulate('click')
        expect(func).toBeCalledTimes(1)
    })
    test('Contain 3 items ' , () => {
        expect(header.find('.header-nav-ul').children().length).toEqual(7);
    })
    test('Snapshopt' , () => {
        const snapshot = create(<Header toggleMenu={jest.fn()} />).toJSON();

        expect(snapshot).toMatchSnapshot();
    })
})