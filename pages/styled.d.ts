// import original module declarations
import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    bgColor: string;
    mainColor: string;
    tagPurpleColor: string;
    tagBlueColor: string;
    tagYelloColor: string;
    tagGreenColor: string;
    textColor: string;
  }
}