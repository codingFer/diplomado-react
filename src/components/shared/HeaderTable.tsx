import {Box, Button, Typography} from '@mui/material';
import {Add as AddIcon} from '@mui/icons-material';
import {useState} from "react";

interface Props {
    handleOpenCreateDialog: () => void;
    initialTitle: string;
    initialTextButton: string;
}

export const HeaderTable = ({handleOpenCreateDialog, initialTitle, initialTextButton}: Props) => {
    const [title, setTitle] = useState(initialTitle);
    const [textButton, setTextButton] = useState(initialTextButton);

    return (
        <Box sx={{display: 'flex', justifyContent: 'space-between', mb: 2}}>
            <Typography variant="h5" fontWeight={'bold'}>
                {title}
            </Typography>
            <Button
                variant="contained"
                startIcon={<AddIcon/>}
                onClick={handleOpenCreateDialog}
                sx={{borderRadius: 3}}
            >
                {textButton}
            </Button>
        </Box>
    );
};
