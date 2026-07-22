import { createContext, useContext, useState } from "react";

const ThemeContext = createContext({});

function Card() {
  let theme = useContext(ThemeContext);
  return (
    <div
      style={{
        border: theme.isDark ? "1px solid white" : "1px solid black",
        padding: "15px",
        borderRadius: "10px",
        display: "flex",
        flexDirection: "column",
        gap: "10px",
        transition: "300ms all ease",
        background: theme.isDark ? "black" : "white",
        color: theme.isDark ? "white" : "black",
        width: "350px",
      }}
    >
      <h1>This is title</h1>
      <p style={{fontSize:'18px'}}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit omnis
        alias modi explicabo libero consectetur placeat consequatur sint animi
        pariatur iure ipsam, aut praesentium sunt, nemo, earum rerum voluptatum
        veniam!
      </p>
      <button style={{padding: "10px 15px",
          fontSize: "15px",
          borderRadius: "10px",
          border: "1px solid",}}>Click</button>
    </div>
  );
}

function Navbar() {
  let theme = useContext(ThemeContext);
  return (
    <nav
      style={{
        display: "flex",
        width: "100%",
        justifyContent: "space-between",
        alignItems: "center",
        background: theme.isDark ? "black" : "white",
        color: theme.isDark ? "white" : "black",
        transition: "300ms all ease",
      }}
    >
      <h1 style={{ margin: "10px 20px" }}>Brand Name</h1>
      <ul
        style={{
          padding: "0",
          listStyle: "none",
          display: "flex",
          fontSize: "20px",
          margin: "10px 25px",
        }}
      >
        <li style={{ margin: "10px", padding: "10px 15px" }}>Home</li>
        <li style={{ margin: "10px", padding: "10px 15px" }}>About</li>
        <li style={{ margin: "10px", padding: "10px 15px" }}>More</li>
      </ul>
    </nav>
  );
}

function App() {
  const [isDark, setIsDark] = useState(false);
  function toggle() {
    setIsDark((prev) => !prev);
  }
  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        gap: "10%",
        alignItems: "center",
        background: isDark ? "black" : "white",
        color: isDark ? "white" : "black",
        transition: "300ms all ease",
      }}
    >
      <ThemeContext.Provider value={{ isDark, toggle }}>
        <ThemeProvider>
          <Navbar />
          <Card />
        </ThemeProvider>
        <ThemeToggle />
      </ThemeContext.Provider>
    </div>
  );
}

function ThemeProvider({ children }) {
  return <>{children}</>;
}

function ThemeToggle() {
  let theme = useContext(ThemeContext);
  return (
    <div>
      <button
        style={{
          padding: "10px 15px",
          fontSize: "15px",
          borderRadius: "10px",
          border: "1px solid",
        }}
        onClick={theme.toggle}
      >
        Toggle
      </button>
    </div>
  );
}

export default App;
