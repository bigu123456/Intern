/// <reference types="react-scripts" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly REACT_APP_API_URL: string;
    readonly REACT_APP_API_TOKEN: string;
    readonly REACT_APP_ENV: "development" | "production" | "test";
    readonly GENERATE_SOURCEMAP: "true" | "false";
  }
}
