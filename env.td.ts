interface ImportMetaEnv {
    readonly VITE_SUPABASE_KEY: string;
    readonly VITE_SUPABASE_URL: string;
}

interface ImportMeta {
    readonly env: ImportMetaEnv;
}