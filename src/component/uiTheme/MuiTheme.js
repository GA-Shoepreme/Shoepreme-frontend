import { createMuiTheme } from '@material-ui/core/styles';
function MuiTheme(props) {
    const muiTheme = createMuiTheme({
        overrides:{
            MuiButton:{
                    text:{
                        backgroundColor:"#ed1c25",
                        color:'white',
                        '&:hover': {
                            backgroundColor:"rgb(43,35,97)"
                         },
                         marginLeft:'-0.5rem',
                         marginTop:"0.75rem",
                         
                    }
                },
          MuiSlider: {
            thumb:{
            color: "#ed1c25",
            width:'1rem',
            height:'1rem',
            marginTop:'-6px',
            '&:hover': {
                boxShadow: "0px 0px 0px 8px rgba(237,28,37,0.1)"
             }
            },
            track: {
              color: '#ed1c25',
              height: '0.25rem'
            },
            rail: {
              color: '#bbbbbb',
              height: '0.25rem',
            },
            valueLabel:{
                marginLeft: '4px',
                fontSize: '1rem'
                
            }
          }
      }
      });
    return muiTheme
}

export default MuiTheme;