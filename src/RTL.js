// eslint-disable-next-line import/no-extraneous-dependencies
import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset } from '@material-ui/core/styles';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

// eslint-disable-next-line react/prop-types
const RTL = ({ children }) => (
  <StylesProvider jss={jss}>
    {children}
  </StylesProvider>
);
export default RTL;
