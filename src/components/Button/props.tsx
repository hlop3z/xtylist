type Props = (props: {
  class?: string | any[] | Record<string, boolean> | any;
  style?: string | any[] | Record<string, string> | any;
  children?: any;
  type?: any;
  variant?: "outlined" | "fill";
  size?: "sm" | "md" | "lg";
  color?: any;
  dark?: boolean;
  stack?: boolean;
  disabled?: boolean;
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
