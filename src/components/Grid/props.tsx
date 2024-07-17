type Props = {
  class?: string | any[] | Record<string, boolean> | any;
  style?: string | any[] | Record<string, string> | any;
  children?: any;
  row?: boolean;
  "gap-x"?: string | number;
  "gap-y"?: string | number;
  cols?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
};

export default Props;
/**
  ---------------
  @ Cheat-Sheet
  ---------------
  
  // Primitives
  void
  null
  bigint
  
  // Basic types
  any
  boolean
  number
  string
  
  // Arrays
  string[]        
  Array<string>  
  
  // Tuples
  [string, number]
  
  // Unions
  string | null | undefined 
  
**/
