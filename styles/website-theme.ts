import { createTheme, styled } from '@material-ui/core/styles';
import { red } from '@material-ui/core/colors';

//Custom Variables
// declare module '@material-ui/core/styles' {
//     interface Theme {
//         status: {
//             danger: string;
//         };
//     }
//     // allow configuration using `createTheme`
//     interface ThemeOptions {
//         status?: {
//             danger?: string;
//         };
//     }
// }

export const theme = createTheme({
    components: {
        MuiAppBar: {
            styleOverrides: {
                root: {
                    backgroundColor: '#BE161E'
                }
            }
        }
    }
});