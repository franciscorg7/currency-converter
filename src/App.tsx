import CurrencyInput from "./components/CurrencyInput";
import CurrencyOutput from "./components/CurrencyOutput";
import { CurrencyProvider } from "./context/CurrencyContext";

function App() {
  return (
    <CurrencyProvider>
      <div className="min-h-screen bg-linear-to-b from-[#0b1220] via-slate-950 to-slate-950 text-slate-100 antialiased">
        <div className="mx-auto flex min-h-screen w-full max-w-3xl flex-col justify-center px-4 py-10">
          <div className="rounded-2xl border border-slate-800/60 bg-slate-900/30 p-6 shadow-[0_0_0_1px_rgba(148,163,184,0.08),0_16px_48px_rgba(0,0,0,0.45)] backdrop-blur sm:p-8">
            <div className="flex flex-col gap-2 text-center">
              <h1 className="text-balance text-4xl font-medium tracking-tight text-white">
                Currency Converter
              </h1>
              <p className="text-sm leading-6 text-slate-300">
                Minimal, fast conversions with live rates.
              </p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-8">
              <CurrencyInput />
              <CurrencyOutput />
            </div>
          </div>

          <footer className="mt-6 text-center text-xs text-slate-400">
            Powered by an{" "}
            <a
              className="font-bold cursor-pointer hover:underline"
              href="https://github.com/fawazahmed0/exchange-api"
              target="_blank"
              rel="noopener noreferrer"
            >
              open-source exchange-rate API
            </a>
            .
          </footer>
        </div>
      </div>
    </CurrencyProvider>
  );
}

export default App;
