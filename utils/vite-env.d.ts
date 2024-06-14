/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_BASE_URL: string
    readonly VITE_APP_USERNAME: string
    
  }
  
  interface ImportMeta {
    readonly env: ImportMetaEnv
  }