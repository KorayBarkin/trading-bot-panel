import { Paper, Typography, List, ListItem, ListItemText, Chip, IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

const ActiveBotsList = () => {
  // This would typically come from your backend/state management
  const activeBots = [
    { id: 1, ticker: 'DOGEUSDT', side: 'BUY', quantity: '0.0003', status: 'running' },
    { id: 2, ticker: 'BTCUSDT', side: 'SELL', quantity: '0.0001', status: 'paused' },
  ];

  const handleDelete = (id) => {
    // Handle bot deletion here
    console.log('Delete bot:', id);
  };

  return (
    <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
      <Typography variant="h5" gutterBottom>
        Active Bots
      </Typography>
      <List>
        {activeBots.map((bot) => (
          <ListItem
            key={bot.id}
            secondaryAction={
              <IconButton edge="end" onClick={() => handleDelete(bot.id)}>
                <DeleteIcon />
              </IconButton>
            }
            sx={{ borderBottom: '1px solid rgba(255, 255, 255, 0.12)' }}
          >
            <ListItemText
              primary={`${bot.ticker} - ${bot.side}`}
              secondary={`Quantity: ${bot.quantity}`}
            />
            <Chip
              label={bot.status}
              color={bot.status === 'running' ? 'success' : 'warning'}
              size="small"
              sx={{ mr: 2 }}
            />
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default ActiveBotsList; 