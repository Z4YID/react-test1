import { ColorModeContext, useMode } from "./theme";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { Routes, Route} from "react-router-dom"
import Dashboard from "./scenes/dashboard";
import Header from "./scenes/global/Header";
import Navbar from "./scenes/global/Navbar";
import Team from "./scenes/team";
import Invoices from "./scenes/invoices";
import Contacts from "./scenes/contacts";
import Form from "./scenes/form";
import Calendar from "./scenes/calendar";
import FAQ from "./scenes/faq";
import Bar from "./scenes/bar";
import Pie from "./scenes/pie";
import Line from "./scenes/line";
import Geography from "./scenes/geography";

function App() {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value = {colorMode}>
      <ThemeProvider theme = {theme}>
        <CssBaseline /> {/* Resets the css to default so that the MUI can work */}
        <div className="app">
          <Navbar />
         <main className ="content">
          <Header />
            <Routes>
            <Route path="/" element={<Dashboard/>} />
            <Route path="/team" element={<Team/>} />
            <Route path="/contacts" element={<Contacts/>} />
            <Route path="/invoices" element={<Invoices/>} />
            <Route path="/form" element={<Form/>} />
            <Route path="/calendar" element={<Calendar/>} />
            <Route path="/faq" element={<FAQ/>} />
            <Route path="/bar" element={<Bar/>} />
            <Route path="/pie" element={<Pie/>} />
            <Route path="/line" element={<Line/>} />
            <Route path="/geography" element={<Geography/>} />
            </Routes>
         </main>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  );
}

export default App;