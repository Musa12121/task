import { useContext } from 'react';
import {ThemeContext} from './ThemeContext'
export default function ThemeToggle() {
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
