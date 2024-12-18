/// <reference types="vite/client" />

declare global {
    interface Window {}
}

interface ImportMetaEnv {
    readonly VITE_NODE_ENV: string
    readonly VITE_END_POINT: string
    // more env variables...
}

interface ImportMeta {
    readonly env: ImportMetaEnv
}
