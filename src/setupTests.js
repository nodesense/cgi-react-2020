// if present, jest execute this file to initialize test envionement
// mock, add adapters etc

console.log("setupTests...called")

import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });