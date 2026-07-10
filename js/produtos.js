const produtos = [
    // ==========================
    // SMARTPHONES
    // ==========================
    {
        id_produto: 1,
        descricao_produto: "Samsung Galaxy S25 Ultra",
        caminho_da_imagem: "/imagens/produtos/samsung S25.jfif",
        valor_unitario: 7499.90,
        id_secao: 1,
        nome_secao: "Smartphones"
    },
    {
        id_produto: 2,
        descricao_produto: "iPhone 16 Pro Max",
        caminho_da_imagem: "imagens/produtos/IPHONE 16 PRO MAX.jfif",
        valor_unitario: 9999.90,
        id_secao: 1,
        nome_secao: "Smartphones"
    },
    {
        id_produto: 3,
        descricao_produto: "Motorola Edge 60 Pro",
        caminho_da_imagem: "imagens/Produtos/Motorola edge 60.jfif",
        valor_unitario: 3999.90,
        id_secao: 1,
        nome_secao: "Smartphones"
    },
    {
        id_produto: 4,
        descricao_produto: "Xiaomi Redmi Note 14 Pro",
        caminho_da_imagem: "imagens/Produtos/xiamo note 14.webp",
        valor_unitario: 2399.90,
        id_secao: 1,
        nome_secao: "Smartphones"
    },

    // ==========================
    // CARREGADORES
    // ==========================
    {
        id_produto: 5,
        descricao_produto: "Carregador Turbo USB-C 25W",
        caminho_da_imagem: "imagens/Produtos/Carregador Turbo USB-C 25w.webp",
        valor_unitario: 99.90,
        id_secao: 2,
        nome_secao: "Carregadores"
    },
    {
        id_produto: 6,
        descricao_produto: "Carregador Turbo USB-C 45W",
        caminho_da_imagem: "imagens/Produtos/Carregador Turbo USB-C 45w.webp",
        valor_unitario: 179.90,
        id_secao: 2,
        nome_secao: "Carregadores"
    },
    {
        id_produto: 7,
        descricao_produto: "Carregador Sem Fio MagSafe",
        caminho_da_imagem: "imagens/Produtos/Carregador Sem Fio MagSafe.jfif",
        valor_unitario: 299.90,
        id_secao: 2,
        nome_secao: "Carregadores"
    },
    {
        id_produto: 8,
        descricao_produto: "Carregador Veicular USB-C",
        caminho_da_imagem: "imagens/Produtos/Carregador Veicular USB-C.jfif",
        valor_unitario: 89.90,
        id_secao: 2,
        nome_secao: "Carregadores"
    },

    // ==========================
    // CAPAS
    // ==========================
    {
        id_produto: 9,
        descricao_produto: "Capa Transparente para iPhone",
        caminho_da_imagem: "imagens/Produtos/Capa Transparente para iPhone.jfif",
        valor_unitario: 59.90,
        id_secao: 3,
        nome_secao: "Capas"
    },
    {
        id_produto: 10,
        descricao_produto: "Capa Antichoque Samsung",
        caminho_da_imagem: "imagens/Produtos/Capa Antichoque Samsung.jfif",
        valor_unitario: 69.90,
        id_secao: 3,
        nome_secao: "Capas"
    },
    {
        id_produto: 11,
        descricao_produto: "Capa Premium Motorola",
        caminho_da_imagem: "imagens/Produtos/Capa Premium Motorola.jfif",
        valor_unitario: 54.90,
        id_secao: 3,
        nome_secao: "Capas"
    },
    {
        id_produto: 12,
        descricao_produto: "Capa Silicone Xiaomi",
        caminho_da_imagem: "imagens/Produtos/Capa Silicone Xiaomi.jfif",
        valor_unitario: 49.90,
        id_secao: 3,
        nome_secao: "Capas"
    },

    // ==========================
    // FONES DE OUVIDO
    // ==========================
    {
        id_produto: 13,
        descricao_produto: "Galaxy Buds FE",
        caminho_da_imagem: "imagens/Produtos/Galaxy Buds FE.jfif",
        valor_unitario: 399.90,
        id_secao: 4,
        nome_secao: "Fones de Ouvido"
    },
    {
        id_produto: 14,
        descricao_produto: "AirPods Pro 2",
        caminho_da_imagem: "imagens/Produtos/AirPods Pro 2.jfif",
        valor_unitario: 1899.90,
        id_secao: 4,
        nome_secao: "Fones de Ouvido"
    },
    {
        id_produto: 15,
        descricao_produto: "JBL Wave Buds",
        caminho_da_imagem: "imagens/Produtos/JBL Wave Buds.jfif",
        valor_unitario: 299.90,
        id_secao: 4,
        nome_secao: "Fones de Ouvido"
    },
    {
        id_produto: 16,
        descricao_produto: "Motorola Moto Buds",
        caminho_da_imagem: "imagens/Produtos/Motorola Moto Buds.jfif",
        valor_unitario: 249.90,
        id_secao: 4,
        nome_secao: "Fones de Ouvido"
    },

    // ==========================
    // PELÍCULAS
    // ==========================
    {
        id_produto: 17,
        descricao_produto: "Película de Vidro Samsung",
        caminho_da_imagem: "imagens/Produtos/Película de Vidro Samsung.jfif",
        valor_unitario: 39.90,
        id_secao: 5,
        nome_secao: "Películas"
    },
    {
        id_produto: 18,
        descricao_produto: "Película de Vidro iPhone",
        caminho_da_imagem: "imagens/Produtos/Película de Vidro iPhone.jfif",
        valor_unitario: 49.90,
        id_secao: 5,
        nome_secao: "Películas"
    },
    {
        id_produto: 19,
        descricao_produto: "Película 3D Motorola",
        caminho_da_imagem: "imagens/Produtos/Película 3D Motorola.jfif",
        valor_unitario: 34.90,
        id_secao: 5,
        nome_secao: "Películas"
    },
    {
        id_produto: 20,
        descricao_produto: "Película Nano Xiaomi",
        caminho_da_imagem: "imagens/Produtos/Película Nano Xiaomi.jfif",
        valor_unitario: 29.90,
        id_secao: 5,
        nome_secao: "Películas"
    },
];



export {produtos}