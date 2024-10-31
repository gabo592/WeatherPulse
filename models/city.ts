export interface City {
  name: string;
  local_names?: LocalNames;
  lat: number;
  lon: number;
  country: string;
  state?: string;
}

export interface LocalNames {
  sv?: string;
  os?: string;
  mk?: string;
  fy?: string;
  be?: string;
  en?: string;
  ta?: string;
  bg?: string;
  oc?: string;
  de?: string;
  ku?: string;
  ur?: string;
  es?: string;
  ht?: string;
  ug?: string;
  hy?: string;
  he?: string;
  fa?: string;
  ar?: string;
  sr?: string;
  mr?: string;
  ru?: string;
  mn?: string;
  el?: string;
  eo?: string;
  pl?: string;
  ko?: string;
  th?: string;
  lt?: string;
  am?: string;
  lv?: string;
  hu?: string;
  bo?: string;
  is?: string;
  fr?: string;
  ja?: string;
  az?: string;
  zh?: string;
  uk?: string;
  ka?: string;
  pt?: string;
}
