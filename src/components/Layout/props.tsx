type Props = {
  state: any;
  toggle: (name: string, value?: boolean) => any;
  App: (props: {
    class?: string | any[] | Record<string, boolean> | any;
    style?: string | any[] | Record<string, string> | any;
    children?: any;
    breakpoints?: string[];
    "theme-color"?: string;
    "clip-right"?: boolean;
    "clip-left"?: boolean;
    "space-x"?: string | number;
    "space-y"?: string | number;
    "slot-header"?: (props: any) => void;
    "slot-left"?: (props: any) => void;
    "slot-right"?: (props: any) => void;
    "slot-footer"?: (props: any) => void;
  }) => any;
  Main: (props: {
    class?: string | any[] | Record<string, boolean> | any;
    style?: string | any[] | Record<string, string> | any;
    children?: any;
  }) => any;
  Header: (props: {
    class?: string | any[] | Record<string, boolean> | any;
    style?: string | any[] | Record<string, string> | any;
    children?: any;
    elevation?: string | number;
  }) => any;
  Footer: (props: {
    class?: string | any[] | Record<string, boolean> | any;
    style?: string | any[] | Record<string, string> | any;
    children?: any;
    elevation?: string | number;
  }) => any;
  Left: (props: {
    class?: string | any[] | Record<string, boolean> | any;
    style?: string | any[] | Record<string, string> | any;
    children?: any;
    elevation?: string | number;
  }) => any;
  Right: (props: {
    class?: string | any[] | Record<string, boolean> | any;
    style?: string | any[] | Record<string, string> | any;
    children?: any;
    elevation?: string | number;
  }) => any;
  LeftMini: (props: {
    class?: string | any[] | Record<string, boolean> | any;
    style?: string | any[] | Record<string, string> | any;
    children?: any;
    elevation?: string | number;
  }) => any;
  RightMini: (props: {
    class?: string | any[] | Record<string, boolean> | any;
    style?: string | any[] | Record<string, string> | any;
    children?: any;
    elevation?: string | number;
  }) => any;
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
