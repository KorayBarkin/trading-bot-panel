import { useState } from 'react';
import { TextField, Button, Paper, Box, Typography, MenuItem, Container, Grid } from '@mui/material';
import ActiveBotsList from './ActiveBotsList';

const TradingBotPanel = () => {
  const [botConfig, setBotConfig] = useState({
    ticker: 'DOGEUSDT',
    exchange: '',
    price: '',
    side: 'BUY',
    quantity: '0.0003',
    time: '',
    telegramBotApi: '',
    telegramUserId: '',
    binanceApiKey: '',
    binanceSecretKey: ''
  });

  const handleChange = (e) => {
    setBotConfig({
      ...botConfig,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const error = validateForm();
    if (error) {
      alert(error);
      return;
    }
    try {
      // Here you would send this to your backend or TradingView
      console.log('Bot Configuration:', botConfig);
      
      // Example API call (replace with your actual endpoint)
      const response = await fetch('YOUR_TRADINGVIEW_WEBHOOK_URL', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(botConfig)
      });

      if (!response.ok) throw new Error('Failed to configure bot');
      
      alert('Configuration saved successfully!');
    } catch (error) {
      console.error('Error:', error);
      alert('Failed to save configuration');
    }
  };

  const validateForm = () => {
    if (!botConfig.ticker) return 'Ticker is required';
    if (!botConfig.quantity) return 'Quantity is required';
    if (!botConfig.telegramBotApi) return 'Telegram Bot API Token is required';
    if (!botConfig.telegramUserId) return 'Telegram User ID is required';
    if (!botConfig.binanceApiKey) return 'Binance API Key is required';
    if (!botConfig.binanceSecretKey) return 'Binance Secret Key is required';
    return null;
  };

  return (
    <Container maxWidth={false} sx={{ px: 4 }}>
      <Grid container spacing={3} sx={{ mt: 4 }}>
        <Grid item xs={12} md={6}>
          <Paper elevation={3} sx={{ p: 3, height: '100%' }}>
            <Typography variant="h5" gutterBottom>
              Trading Bot Configuration
            </Typography>
            
            <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
              <TextField
                fullWidth
                margin="normal"
                label="Ticker"
                name="ticker"
                value={botConfig.ticker}
                onChange={handleChange}
              />
              
              <TextField
                fullWidth
                margin="normal"
                label="Side"
                name="side"
                select
                value={botConfig.side}
                onChange={handleChange}
              >
                <MenuItem value="BUY">BUY</MenuItem>
                <MenuItem value="SELL">SELL</MenuItem>
              </TextField>

              <TextField
                fullWidth
                margin="normal"
                label="Quantity"
                name="quantity"
                type="number"
                value={botConfig.quantity}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Telegram Bot API Token"
                name="telegramBotApi"
                value={botConfig.telegramBotApi}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Telegram User ID"
                name="telegramUserId"
                value={botConfig.telegramUserId}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Binance API Key"
                name="binanceApiKey"
                value={botConfig.binanceApiKey}
                onChange={handleChange}
              />

              <TextField
                fullWidth
                margin="normal"
                label="Binance Secret Key"
                name="binanceSecretKey"
                type="password"
                value={botConfig.binanceSecretKey}
                onChange={handleChange}
              />

              <Button 
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                sx={{ mt: 3 }}
              >
                Save Configuration
              </Button>
            </Box>
          </Paper>
        </Grid>
        
        <Grid item xs={12} md={6}>
          <ActiveBotsList />
        </Grid>
      </Grid>
    </Container>
  );
};

export default TradingBotPanel; 