import { Theme } from "./Theme";

export function Header({ theme, onHandleTheme }) {
  return (
    <header className="header">
      <h1 className="logo">devfinder</h1>
      <Theme theme={theme} onHandleTheme={onHandleTheme} />
    </header>
  );
}
