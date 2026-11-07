import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

import type { MarketTab } from "@/lib/nexora-data";

export type UiState = {
  dark: boolean;
  menuOpen: boolean;
  marketTab: MarketTab;
};

const initialState: UiState = {
  dark: true,
  menuOpen: false,
  marketTab: "Trending",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    toggleTheme(state) {
      state.dark = !state.dark;
    },
    setTheme(state, action: PayloadAction<boolean>) {
      state.dark = action.payload;
    },
    toggleMenu(state, action: PayloadAction<boolean | undefined>) {
      state.menuOpen = action.payload ?? !state.menuOpen;
    },
    setMarketTab(state, action: PayloadAction<MarketTab>) {
      state.marketTab = action.payload;
    },
  },
});

export const { toggleTheme, setTheme, toggleMenu, setMarketTab } = uiSlice.actions;
export const uiReducer = uiSlice.reducer;
