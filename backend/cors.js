app.use(cors({
    origin: 'http://127.0.0.1:5500', // Specify the allowed origin
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Specify allowed methods
    allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
    credentials: true // Set to true if cookies or credentials are needed
  }));
  