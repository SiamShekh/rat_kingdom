/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PROJECT_NAME: string;
    readonly VITE_ICON: string;
    readonly VITE_TOKEN_SYMBOL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
