import TradingBotPanel from './TradingBotPanel';
import Banner from './components/Banner';
import { ThemeProvider, createTheme } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Banner />
      <div className="App">
        <TradingBotPanel />
      </div>
    </ThemeProvider>
  );
}

export default App;
