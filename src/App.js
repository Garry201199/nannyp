
import { createTheme, ThemeProvider} from '@mui/material/styles';
import './App.css';
import QrTemp from './Comp/QrTemp';

const theme = createTheme({
  typography: {
    fontFamily:'poppins',
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
    <div className="App">
     
  
     <QrTemp/>

    </div>
  </ThemeProvider>
    
    
  );
}

export default App;
