import './App.css';
import Material from "./MaterialUi/Material"
import { GridBox } from "./MaterialUi/Grid"
import { Layout } from "./MaterialUi/Layout"
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';
import { useState } from 'react';
const theme = createMuiTheme({
  palette: {
    primary: {
      main: purple[500],
    },
    secondary: {
      main: '#f44336',
    },
  },

});
const theme2 = createMuiTheme({
  palette: {
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      main: '#f44336',
    },
  },

});
function App() {
  const [isDark, setDark] = useState(false)

  return (
    <ThemeProvider theme={
      isDark ? theme : theme2
    }>

      <button onClick={() => setDark(!isDark)} style={{ width: "15%", marginTop: "10px", marginBottom: "10px", marginLeft: "40%", }}>Change Theme</button>

      <div className="App">
        <Layout>
          <Material />
          <GridBox />
        </Layout>
      </div>
    </ThemeProvider>
  );
}

export default App;
