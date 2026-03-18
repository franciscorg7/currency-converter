import CurrencyInput from "./components/CurrencyInput"
import CurrencyOutput from "./components/CurrencyOutput"
import { CurrencyProvider } from "./context/CurrencyContext"

function App() {

  return (
    <CurrencyProvider>
      <div className="flex flex-col gap-16">
        <h1 className="text-4xl font-bold text-blue-500">Currency Converter</h1>
        <div className="flex w-full justify-center gap-8">
          <CurrencyInput />
          <CurrencyOutput />
        </div>
      </div>
    </CurrencyProvider>
  )
}

export default App
