type Props = {
  class?: string | any[] | Record<string, boolean> | any;
  style?: string | any[] | Record<string, string> | any;
  children?: any;
  name?: string;
  slot?: any;
  persistent?: boolean;
  active?: boolean;
  height?: string;
  width?: string;
  "axis-y"?: "top" | "bottom" | "center";
  "axis-x"?: "left" | "right" | "center";
  "center-y"?: boolean;
  "center-x"?: boolean;
  "shadow-inverted"?: boolean;
  "shadow-y"?: string | number;
  "shadow-x"?: string | number;
  "space-y"?: string | number;
  "space-x"?: string | number;
  "fx-on"?: any;
  "fx-off"?: any;
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
