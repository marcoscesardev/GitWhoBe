import Enzyme, { configure, shallow, render } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
export { shallow, render };
export default Enzyme;
