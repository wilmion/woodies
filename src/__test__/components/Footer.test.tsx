import React from 'react'
import { shallow } from 'enzyme';
import { create } from 'react-test-renderer';
import Footer from '../../components/Footer';

describe('<Footer />' , () => {
    test('Render component' , () => {
        const footer = shallow(<Footer />)

        expect(footer.length).toEqual(1);
    })
    test('Snapshot' , () => {
        const footer = create(<Footer />).toJSON();

        expect(footer).toMatchSnapshot();
    })
})