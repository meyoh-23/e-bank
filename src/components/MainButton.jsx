import { Button } from '@mui/material';

const MainButton = () => {
    const colorGrandient = 'linear-gradient(to right, hsl(136, 65%, 51%), hsl(192, 70%, 51%))'
    return (
    <Button
        variant='outlined'
        sx={{
            borderRadius: 8,
            background: colorGrandient,
            textTransform: "capitalize",
            fontFamily:"'Public Sans', sans-serif",
            fontSize: "1.125rem",
            fontWeight: "400",
            whiteSpace: "nowrap",
        }}
        >
            request Invite
    </Button>
)}

export default MainButton;