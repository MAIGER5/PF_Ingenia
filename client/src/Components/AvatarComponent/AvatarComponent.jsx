import { Avatar } from '@mui/material';


export default function AvatarComponent( props ) {
    const { name, height, width, fontSize } = props

    function stringAvatar(userName, userHeight, userWidth, userFontSize) {
        return {
            sx: {
            bgcolor: "#FF8906",
            height: `${userHeight}`, 
            width: `${userWidth}`,
            fontSize: `${userFontSize}`,
            },
            children: `${userName.split(' ')[0][0]}${userName.split(' ')[1][0]}`,
        };
    }

  return (

        <Avatar {...stringAvatar( name, height, width, fontSize)} />
    
  )
}
