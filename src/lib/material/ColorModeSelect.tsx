import MenuItem from "@mui/material/MenuItem";
import Select, { SelectProps } from "@mui/material/Select";
import { useColorScheme } from "@mui/material/styles";

export default function ColorModeSelect(props: SelectProps) {
  const { mode, setMode } = useColorScheme();
  if (!mode) {
    return null;
  }
  return (
    <Select
      value={mode}
      onChange={(e) => setMode(e.target.value as "system" | "light" | "dark")}
      SelectDisplayProps={{
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        "data-screenshot": "toggle-mode",
      }}
      {...props}
    >
      <MenuItem value="system">Sistema</MenuItem>
      <MenuItem value="light">Claro</MenuItem>
      <MenuItem value="dark">Escuro</MenuItem>
    </Select>
  );
}
