import React, { Component, useEffect } from "react";
import { createRoot } from 'react-dom/client';

import "./styles.css";
import MissionLanding from "./mission/mission-landing";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import { ChakraProvider, useColorMode, withDefaultColorScheme } from "@chakra-ui/react";
import FullpageTest from "./general-components/fullpage";
import Topbar from "./navbar/navbar";
import Mission from "./mission/mission";
import Scalability from "./details/details";
import Details from "./details/details";
import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";

const theme = extendTheme(
  {
    styles: {
      global: (props: any) => ({
        body: {
          backgroundColor: mode('#000000', '#000000')(props)
        },
      }),
    },
  }
);

export default class App extends React.Component {
  render() {
    return (
      // <React.StrictMode> cant use because anchor scrolling wont work anymore when used
        <ChakraProvider theme={theme}>
          <BrowserRouter>
            <div className="App">
              <Routes>
                <Route index element={<Mission/>} />
                <Route path="details" element={<Details />} />
                <Route path="*" element={<Mission />} />
              </Routes>
            </div>
          </BrowserRouter>
        </ChakraProvider>
      // </React.StrictMode>
    );
  }
}

const rootElement = document.getElementById("react-root");
const root = createRoot(rootElement!);
root.render(<App />);
