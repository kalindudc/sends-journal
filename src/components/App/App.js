import React, { Component } from 'react';
import {
  NextUIProvider,
  Button,
  createTheme,
  Switch,
  useTheme
} from '@nextui-org/react';

import {
  ThemeProvider as NextThemesProvider,
  useTheme as useNextTheme
} from 'next-themes';

import logo from './logo.svg';
import './App.css';


const lightTheme = createTheme({
  type: 'light',
  theme: {}
})

const darkTheme = createTheme({
  type: 'dark',
  theme: {}
})

const MainApp = () => {
  const { setTheme } = useNextTheme();
  const { isDark, type } = useTheme();

  return (
    <div>
      <div className='main-component'>
        <Button>Button</Button>
        The current theme is: {type}
        <Switch
          checked={isDark}
          onChange={(e) => setTheme(e.target.checked ? 'dark' : 'light')}
        />
      </div>
      <div className='navigation'>

      </div>
    </div>
  )
}

class App extends Component {
  _isMounted = false;

  constructor(props) {
    super(props);

    this.state = {

    };
  }

  componentDidMount() {
    this._isMounted = true;
  }

  render() {
    return (
      <NextThemesProvider
        defaultTheme="system"
        attribute="class"
        value={{
          light: lightTheme.className,
          dark: darkTheme.className
        }}
      >
        <NextUIProvider>
          <MainApp />
        </NextUIProvider>
      </NextThemesProvider>
    );
  }
}

export default App;
