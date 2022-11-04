interface iConfig {
  api: {
    env: string;
    port: number;
  };
}

export default (): Partial<iConfig> => ({
  api: {
    env: process.env.NODE_ENV || 'development',
    port: parseInt(process.env.PORT, 10) || 4000,
  },
});
