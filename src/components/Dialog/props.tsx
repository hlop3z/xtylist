type Props = (props: {
  class?: string | any[] | Record<string, boolean> | any;
  style?: string | any[] | Record<string, string> | any;
  children?: any;
  name?: string;
  persistent?: boolean;
  overlay?: boolean;
  active?: boolean;
  full?: "screen" | "width" | "height";
  "fx-on"?: any;
  "fx-off"?: any;
  height?: string;
  width?: string;
  "slot-header"?: (props: any) => void;
  "slot-left"?: (props: any) => void;
  "slot-right"?: (props: any) => void;
  "slot-main"?: (props: any) => void;
  "slot-footer"?: (props: any) => void;
}) => any;

export default Props;
/**
  ---------------
  @ Cheat-Sheet
  ---------------
  (props: {
    Slot: any;
    info: any;
    args: any;
    parent: any;
  }) => void  
  
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
