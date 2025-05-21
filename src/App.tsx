import { Button } from "./components/Button";
import { ThemeProvider } from 'styled-components'
import { defaultTheme } from "./styles/themes/default";

export function App() {
  

  return (
    <ThemeProvider theme={defaultTheme} >
      <Button varient="primary"/>
      <Button varient="secondary"/>
      <Button varient="danger"/>
      <Button/>
    </ThemeProvider>
  )
}
