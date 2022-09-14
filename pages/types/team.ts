export type teamType = {
  _id: string,
  name: string;
  code: string;
  uniqueCode: string;
  top?: memberType;
  jg?: memberType;
  mid?: memberType;
  adc?: memberType;
  sup?: memberType;
  created: number;
  type: 'solo' | '5x5';
  isFull: boolean;
  __v: number;
}

export type memberType = {
  _id: string;
  name: string;
  position: 'top' | 'jg' | 'mid' | 'adc' | 'sup';
  password: string;
  created: number;
  __v: number;
}