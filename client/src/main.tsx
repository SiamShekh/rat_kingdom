import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Provider } from 'react-redux'
import { store } from './redux-store/Store'
import { RouterProvider } from 'react-router-dom'
import Routes from './Routes'
import WebApp from '@twa-dev/sdk'
import { TonConnectUIProvider } from '@tonconnect/ui-react'
import MagicContext from './utils/MagicContext'
import { Toaster } from 'react-hot-toast'

WebApp.setHeaderColor("#000")
ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <TonConnectUIProvider manifestUrl='asda'>
        <MagicContext>
          <RouterProvider router={Routes} />
          <Toaster/>
        </MagicContext>
      </TonConnectUIProvider>
    </Provider>
  </React.StrictMode>,
)
