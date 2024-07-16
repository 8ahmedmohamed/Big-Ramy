import React, { useEffect, useState } from "react";

// Theme Provider
import { ThemeProvider } from "@mui/material/styles";

// Material UI Base Line
import CssBaseline from "@mui/material/CssBaseline";

// Route Provider
import RouteProvider from "./Services/Routes/RouteProvider";

// Translation
import { useTranslation } from "react-i18next";

// Theme
import theme from "./Theme";

const App = () => {
  const { t } = useTranslation();
  const [language, setLanguage] = useState(localStorage.language);

  // Set Direction
  useEffect(() => {
    document.documentElement.lang = localStorage.language || "en";
    document.documentElement.dir = localStorage.languageDir || "ltr";
  }, []);

  useEffect(() => {
    setLanguage(localStorage.language);
  }, [t]);

  return (
    <React.Fragment>
      <ThemeProvider theme={theme(language)}>
        <RouteProvider>
          <CssBaseline />
        </RouteProvider>
      </ThemeProvider>
    </React.Fragment>
  );
};

export default App;
