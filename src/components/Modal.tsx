import { Box, Dialog, IconButton, Typography } from '@mui/material';
import { Close } from '@mui/icons-material';

export interface ModalProps {
  children: React.ReactNode;
  open: boolean;
  onClose: () => void;
  title: string;
}

export function Modal({ open, onClose, title, children }: ModalProps) {
  return (
    <Dialog
      sx={{
        '& .MuiDialog-paper': { padding: '2rem', width: '100%', maxWidth: '500px' }
      }}
      open={open}
      onClose={onClose}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <Box
          component="header"
          sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography variant="h4" component="h2">
            {title}
          </Typography>

          <IconButton onClick={onClose}>
            <Close />
          </IconButton>
        </Box>

        <>{children}</>
      </Box>
    </Dialog>
  );
}
