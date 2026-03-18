# 💱 Currency Converter

A simple **currency converter** built with **React + TypeScript + Vite**, using live exchange rates from a public currency API.

---

## ✨ Features

- 🔁 Convert an amount from one currency to another
- 🌍 Currency list + names loaded from the API
- ⚡ Fast dev experience with Vite (HMR)
- 🧠 State managed via React Context

---

## 🧰 Tech Stack

- ⚛️ React
- 🟦 TypeScript
- ⚡ Vite
- 🌬️ Tailwind CSS
- 🌐 Axios

---

## 📦 Getting Started

### ✅ Prerequisites

- 🟩 Node.js (LTS recommended)
- 📦 npm (comes with Node)

### ⬇️ Install

```bash
npm install
```

### ▶️ Run (dev)

```bash
npm run dev
```

Then open the local URL shown in the terminal (usually `http://localhost:5173`).

### 🏗️ Build (production)

```bash
npm run build
```

### 🔎 Preview the build

```bash
npm run preview
```

### 🧹 Lint

```bash
npm run lint
```

---

## 🧭 How It Works

- 🧩 **App state** (amount / from / to) lives in `src/context/CurrencyContext.tsx`
- 📚 **Currency list** comes from `GET /currencies.json`
- 📈 **Rates** come from `GET /currencies/{base}.json`
- 🧮 The UI multiplies `amount * rate` and formats the output using `Intl.NumberFormat`

---

## 🌐 API Source

This app uses the **Fawaz Ahmed Currency API** (served via jsDelivr CDN) as configured in `src/api/axiosConfig.ts`:

- **Base URL**: `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1`
- **Endpoints used**:
  - `GET /currencies.json`
  - `GET /currencies/{from}.json`

---

## 🗂️ Project Structure

```text
src/
  api/            # Axios client (base URL, timeouts)
  components/     # UI components (inputs/selects/output)
  context/        # React Context for shared state
  hooks/          # Data fetching + conversion hooks
  services/       # API calls (currency endpoints)
  utils/          # Formatting helpers (currency display)
```

---

## 🧪 Usage Tips

- 📝 Enter an amount in the first input
- 🏳️ Pick a “from” currency and a “to” currency
- 🔄 Rates refresh automatically when you change the “from” currency

---

## 🛠️ Troubleshooting

- ⏳ **Requests timing out**: the Axios timeout is set to **10s** in `src/api/axiosConfig.ts`. Check your connection and try again.
- 🚫 **No rates / empty dropdown**: the app depends on the public API being reachable. If the CDN is blocked on your network, try a different network/VPN.
- 🧮 **Formatting looks odd**: currency formatting uses `Intl.NumberFormat` with default locale `"en-US"`. You can change the locale in `src/utils/currency.util.ts`.

---

## 🗺️ Roadmap (ideas)

- 📊 Show the exact rate and last-updated info
- 🔁 Swap currencies button
- ⭐ Favorite currencies
- 📴 Offline cache (last fetched rates)
