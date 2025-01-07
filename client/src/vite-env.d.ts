/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_PROJECT_NAME: string;
    readonly VITE_ICON: string;
    readonly VITE_TOKEN_SYMBOL: string;
    readonly VITE_LOCAL_SERVER: string;
    readonly VITE_LIVE_SERVER: string;
    readonly VITE_TELEGRAM_CHANNEL: string;
    readonly VITE_YOUTUBE_CHANNEL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}
