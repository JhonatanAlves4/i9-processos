const nextConfig = {
    output: 'export',  // Isto substitui a necessidade do comando 'next export'
    generateStaticParams: async () => {
      return [
        {
          params: {},
          locale: 'default',
        },
        // Adicione mais rotas estáticas conforme necessário
      ];
    },
    images: {
        unoptimized: true,  // Desativa a otimização de imagens
    },
  };
  
  module.exports = nextConfig;
  