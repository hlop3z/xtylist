type Props = (props: {
  class?: string | any[] | Record<string, boolean> | any;
  style?: string | any[] | Record<string, string> | any;
  children?: any;
  name?: string;
  slot?: any;
  persistent?: boolean;
  active?: any;
  "axis-y"?: "auto" | "top" | "bottom" | "center";
  "axis-x"?: "auto" | "left" | "right" | "center";
  "space-y"?: string | number;
  "space-x"?: string | number;
  elevation?: string | number;
  "elevation-inverted"?: boolean;
  "fx-on"?: any;
  "fx-off"?: any;
}) => any;

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
