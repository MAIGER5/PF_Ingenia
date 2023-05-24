import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';


export default function AvatarComponent( props ) {
    const { height, width, fontSize } = props;

    function stringAvatar(userHeight, userWidth, userFontSize) {
        const name = localStorage.getItem('name');
        const lastname = localStorage.getItem('lastname');
        if (lastname == null) {

            return {
                sx: {
                bgcolor: "#FF8906",
                height: `${userHeight}`,
                width: `${userWidth}`,
                fontSize: `${userFontSize}`,
                },
                /* children: `${userName.split(' ')[0][0]}${userName.split(' ')[1][0]}`, */
                children: `${name.charAt(0).toUpperCase()}`,
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
            children: `${name.charAt(0).toUpperCase()}${lastname.charAt(0).toUpperCase()}`,
        };
        }

    }

  return (

        <div>{/* <Avatar {...stringAvatar( name, height, width, fontSize)} /> */}
        <Avatar {...stringAvatar( height, width, fontSize)} /></div>

  )
}
