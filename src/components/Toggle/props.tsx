type Props = {
  class?: string | any[] | Record<string, boolean> | any;
  style?: string | any[] | Record<string, string> | any;
  children?: any;
  size?: "sm" | "md" | "lg";
  color?: any;
  fill?: boolean;
  variant?: "radio" | "switch";
  radio?: boolean;
  disabled?: boolean;
  dark?: boolean;
  value?: any;
  active?: any;
  "on-input"?: any;
  "on-click"?: any;
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
