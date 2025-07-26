export type TStringDictionary = Record<string, string>;

export interface IDeepStringDictionary {
  [key: string]: IDeepStringDictionary | string;
}
