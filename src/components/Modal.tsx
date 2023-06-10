import { Box, Dialog, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

interface ModalProps {
  children: React.ReactNode;
  isOpen: boolean;
  handleClose: () => void;
  title: string;
}

export function Modal({ isOpen, handleClose, title, children }: ModalProps) {
  console.log('here');

  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': { padding: '2rem', width: '100%', maxWidth: '500px' }
      }}
      open={isOpen}
      onClose={handleClose}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Box
          component="header"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4" component="h2">
            {title}
          </Typography>

          <IconButton onClick={handleClose}>
            <Close />
          </IconButton>
        </Box>

        <>{children}</>
      </Box>
    </Dialog>
  );
}
