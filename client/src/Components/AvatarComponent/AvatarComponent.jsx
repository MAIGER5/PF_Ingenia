import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';


export default function AvatarComponent( props ) {
    const { height, width, fontSize } = props;

    function stringAvatar(userHeight, userWidth, userFontSize) {
        const name = useSelector(state => state.user.name)
            const lastname = useSelector(state => state.user.lastname)

        if (lastname == null) {
            return {
                sx: { bgcolor: "#FF8906", height: `${userHeight}`, width: `${userWidth}`, fontSize: `${userFontSize}`, },
                children: `${name.charAt(0)}`,
                    };
        } else {
            return {
                sx: { bgcolor: "#FF8906", height: `${userHeight}`, width: `${userWidth}`, fontSize: `${userFontSize}`, },
                children: `${name.charAt(0)}${lastname.charAt(0)}`,
                    };}}

    return (
        <div>
            <Avatar {...stringAvatar( height, width, fontSize)} />
                </div>
                    )
}
