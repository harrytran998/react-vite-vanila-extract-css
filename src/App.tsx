import React, { Suspense, useMemo, useState } from 'react'
import logo from './logo.svg'
import * as Style from './App.css'
import { atoms } from './sprinkles.css'
const LazyComponent = React.lazy(
  () =>
    new Promise((resolve) => {
      // @ts-ignore
      setTimeout(() => import('./Dynamic').then((c) => resolve(c)), 2000)
    }),
)

function App() {
  const [count, setCount] = useState(0)
  return (
    <div className={Style.App}>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
      <header className={Style.AppHeader}>
        <img src={logo} className={Style.AppLogo} alt="logo" />
        <p>Hello Vite + React + vanilla-extract!</p>
        <p>
          <button className={Style.Button} onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </p>
        <p>
          Edit <code>App.tsx</code> and save to test HMR updates.
        </p>
        <p>
          <a
            className={Style.AppLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {' | '}
          <a
            className={Style.AppLink}
            href="https://vitejs.dev/guide/features.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Vite Docs
          </a>
        </p>
      </header>
      <div
        className={atoms({
          background: {
            lightMode: count === 1 ? 'green-500' : 'gray-700',
            darkMode: 'gray-900',
          },
          height: '100vh',
          width: '100vw',
          display: 'flex',
          placeItems: 'center',
          padding: '6x',
          paddingX: '4x',
        })}
      >
        <div className={Style.card}>
          <div
            className={atoms({
              display: 'flex',
              alignItems: 'center',
              flexDirection: 'column',
              gap: {
                mobile: '5x',
                desktop: '6x',
              },
            })}
          >
            <h1
              className={atoms({
                fontFamily: 'body',
                textAlign: 'center',
                typeSize: {
                  mobile: '4x',
                  tablet: '4x',
                  desktop: '5x',
                },
              })}
            >
              <span role="img" aria-label="Waving hand">
                👋 hello
              </span>
              <span role="img" aria-label="vanilla-extract logo">
                🧁
              </span>
              <span role="img" aria-label="Sprinkles logo">
                🍨
              </span>
            </h1>
            <h2
              className={atoms({
                fontFamily: 'body',
                color: {
                  lightMode: 'green-700',
                  darkMode: 'green-50',
                },
                textAlign: 'center',
                typeSize: {
                  mobile: '2x',
                  tablet: '3x',
                  desktop: '4x',
                },
              })}
            >
              Hello from vanilla-extract and Sprinkles
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
