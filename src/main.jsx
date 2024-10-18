import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './router/Router'
import { ConfigProvider } from 'antd'


createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ConfigProvider
      theme={{
        components: {
          Tabs: {
            itemSelectedColor: '#f97316',
            itemColor: '#64748b',
            titleFontSize: '20px',
            inkBarColor: '#f97316',
            itemHoverColor: '#f97316',
          },
        },
      }}
    >
      <RouterProvider router={router} />
    </ConfigProvider>
  </StrictMode>,
)
