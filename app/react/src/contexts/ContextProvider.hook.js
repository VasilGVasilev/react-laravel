import { useContext } from "react";
import { StateContext } from "./ContextProvider.element";

export const useStateContext = () => useContext(StateContext)