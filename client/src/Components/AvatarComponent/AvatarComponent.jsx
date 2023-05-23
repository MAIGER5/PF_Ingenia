import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';


export default function AvatarComponent( props ) {
    /* const { name, height, width, fontSize } = props */
    const { height, width, fontSize } = props;

    /* function stringAvatar(userName, userHeight, userWidth, userFontSize) { */
    function stringAvatar(userHeight, userWidth, userFontSize) {
        // Obtener los valores de 'name' y 'lastname' del localStorage
        const name = localStorage.getItem('name');
        const lastname = localStorage.getItem('lastname');
        // const name = useSelector(state => state.user.name)
        // const lastname = useSelector(state => state.user.lastname)

        //console.log(name);

        if (lastname == null) {

            return { 
                sx: {
                bgcolor: "#FF8906",
                height: `${userHeight}`, 
                width: `${userWidth}`,
                fontSize: `${userFontSize}`,
                },
                /* children: `${userName.split(' ')[0][0]}${userName.split(' ')[1][0]}`, */
                children: `${name.charAt(0)}`,
            };
        } else {
            return { 
            sx: {
            bgcolor: "#FF8906",
            height: `${userHeight}`, 
            width: `${userWidth}`,
            fontSize: `${userFontSize}`,
            },
            /* children: `${userName.split(' ')[0][0]}${userName.split(' ')[1][0]}`, */
            children: `${name.charAt(0)}${lastname.charAt(0)}`,
        };
        }

        
    }

  return (

        <div>{/* <Avatar {...stringAvatar( name, height, width, fontSize)} /> */}
        <Avatar {...stringAvatar( height, width, fontSize)} /></div>
    
  )
}
