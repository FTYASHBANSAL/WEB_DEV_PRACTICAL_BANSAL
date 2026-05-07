import { createContext, useContext, useState } from "react";

const ThemeContext = createContext();

export function ThemeProvider({ children }) {
  const [isBlack, setIsBlack] = useState(false);

  return (
    <ThemeContext.Provider value={{ isBlack, setIsBlack }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function Page() {
  const { isBlack, setIsBlack } = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: isBlack ? "black" : "white",
        height: "100vh",
        display: "grid",
        placeItems: "center",
      }}
    >
      <button onClick={() => setIsBlack(!isBlack)}>
        {isBlack ? "White" : "Black"}
      </button>
    </div>
  );
}
