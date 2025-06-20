declare module '*.pdf';

export type ReturnFuncType<T> = T extends (...args: unknown[]) => infer R ? R : never;

export type Kebab2Snake<T> = T extends `${infer R}-${infer K}` ? `${R}_${K}` : false;

export type KeyValueSplitter<T extends string> = T extends `${infer K}:${infer V}`
  ? {
      key: K;
      value: V;
    }
  : never;

export type UserTransformed<T extends Record<string, unknown>> = {
  [K in keyof T as `get${Capitalize<K & string>}`]: () => T[K];
};
