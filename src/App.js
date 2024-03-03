import { useEffect, useState } from "react";
import "./App.css";
import { Header } from "./Header";
import { Search } from "./Search";
import { User } from "./User";

// https://api.github.com/users/:username
function App() {
  const [name, setName] = useState("octocat");
  const [user, setUser] = useState("");
  const [theme, setTheme] = useState(function () {
    const storedTheme = localStorage.getItem("theme");
    return storedTheme ? JSON.parse(storedTheme) : "dark";
  });
  const [error, setError] = useState(null);

  function handleTheme() {
    setTheme((curr) => (curr === "light" ? "dark" : "light"));
  }

  function handleAddUser(name) {
    setName(name);
  }

  console.log(theme);

  useEffect(
    function () {
      if (name.length > 1) {
        async function fetchUser() {
          try {
            const response = await fetch(
              `https://api.github.com/users/${name}`
            );

            if (!response.ok) {
              throw Error("Greska");
            }

            const data = await response.json();
            setUser(data);
          } catch (error) {
            setError(error.message);
          }
        }
        fetchUser();
      }
    },
    [name]
  );

  useEffect(
    function () {
      localStorage.setItem("theme", JSON.stringify(theme));
    },
    [theme]
  );

  return (
    <main id={theme}>
      <div className="container">
        <Header theme={theme} onHandleTheme={handleTheme} />
        <Search name={name} onAddName={handleAddUser} error={error} />
        <User user={user} theme={theme}></User>
      </div>
    </main>
  );
}

export default App;
