module.exports = (req, res) => {
    res.status(200).json({
      symbol: 'AAPL',
      prices: [
        { date: '2024-03-01', close: 175.0 },
        { date: '2024-02-01', close: 172.5 },
        { date: '2024-01-01', close: 169.3 },
        // Agrega más datos simulados aquí
      ],
    });
  };
  