/** @format */

import { StatusBar } from "expo-status-bar";
import React from "react";
import Index from "./Index";
import { Provider } from "react-redux";
import store, { persistedstore } from "./src/redux/store";
import { PersistGate } from "redux-persist/integration/react";
import colors from "./src/content/colors";
import Appview from "./src/components/Appview";

export default function App() {
   return (

      <Provider store={store}>
        <PersistGate loading={null} persistor={persistedstore}>
          <Appview style={`flex-1`} light={colors.grey}>
            <Index />
            <StatusBar style="auto" />
          </Appview>
        </PersistGate>
      </Provider>

  );
}
