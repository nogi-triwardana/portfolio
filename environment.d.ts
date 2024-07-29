declare namespace NodeJS {
  interface ProcessEnv {
    //types of envs
    NODE_ENV: 'development' | 'production' | 'test';
    [key: string]: string;
  }
}