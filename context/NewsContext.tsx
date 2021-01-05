import React, {
  useReducer,
  useContext,
  createContext,
  ReactChildren,
  ReactChild,
} from "react";

const NewsStateContext = createContext();
const NewsDispatchContext = createContext();

const initialState = {
  articles: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "GET_LAST_ARTICLES":
      return {
        ...state,
        articles: action.payload,
      };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
};

type NewsProviderProps = {
  children: ReactChild | ReactChildren;
};

export const NewsProvider: React.FC<NewsProviderProps> = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <NewsDispatchContext.Provider value={dispatch}>
      <NewsStateContext.Provider value={state}>
        {children}
      </NewsStateContext.Provider>
    </NewsDispatchContext.Provider>
  );
};

export const useNews = (): void => useContext(NewsStateContext);
export const useDispatchNews = (): void => useContext(NewsDispatchContext);
