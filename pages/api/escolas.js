let dados = [{"id": 1,"nome": "CEEMTI AFONSO CLAUDIO","uf": "ES","cidade": "Afonso Claudio"}, {"id": 2,"nome": "EEEFM JOSE ROBERTO CHRISTO","uf": "ES","cidade": "Afonso Claudio"}, {"id": 3,"nome": "EEEFM JOSE GIESTAS","uf": "ES","cidade": "Afonso Claudio"}, {"id": 4,"nome": "EEEFM MARIA DE ABREU ALVIM","uf": "ES","cidade": "Afonso Claudio"}]


export default (req, res) => {
    res.status(200).json(dados);
}