import { Avatar } from '@mui/material';


export default function AvatarComponent( props ) {
    const { name, height, width, fontSize } = props

    function stringToColor(string) {
        let hash = 0;
        let i;

        /* eslint-disable no-bitwise */
        for (i = 0; i < string.length; i += 1) {
            hash = string.charCodeAt(i) + ((hash << 5) - hash);
        }

        let color = '#';

        for (i = 0; i < 3; i += 1) {
            const value = (hash >> (i * 8)) & 0xff;
            color += `00${value.toString(16)}`.slice(-2);
        }
        /* eslint-enable no-bitwise */

        return color;
    }

    function stringAvatar(userName, userHeight, userWidth, userFontSize) {
        return {
            sx: {
            bgcolor: stringToColor(userName),
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
