import { configure } from 'enzyme';
import '@testing-library/jest-dom';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17'
import 'jest-enzyme';
import '@testing-library/jest-dom/extend-expect'
configure({ adapter: new Adapter() });