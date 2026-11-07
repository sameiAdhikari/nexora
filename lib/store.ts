import { configureStore } from "@reduxjs/toolkit";

import { uiReducer } from "@/lib/features/ui/ui-slice";

export { setMarketTab, setTheme, toggleMenu, toggleTheme } from "@/lib/features/ui/ui-slice";

export const store = configureStore({
  reducer: {
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
