import { Widget } from "./components/Widget";
import imageNLW from './assets/NLW-return-1920x1080.webp'

export function App() {

  return (
    <>
      <img src={imageNLW} alt="Banner NLW Return"/>
      <Widget/>
    </>
  )
}

