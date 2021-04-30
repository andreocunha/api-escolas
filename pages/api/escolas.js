// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
let dados = [
  {
    "ID":3200102,
    "cidade":"AFONSO CLAUDIO"
  },
  {
    "ID":3200136,
    "cidade":"AGUIA BRANCA"
  },
  {
    "ID":3200169,
    "cidade":"AGUA DOCE DO NORTE"
  },
  {
    "ID":3200201,
    "cidade":"ALEGRE"
  },
  {
    "ID":3200300,
    "cidade":"ALFREDO CHAVES"
  },
  {
    "ID":3200359,
    "cidade":"ALTO RIO NOVO"
  },
  {
    "ID":3200409,
    "cidade":"ANCHIETA"
  },
  {
    "ID":3200508,
    "cidade":"APIACA"
  },
  {
    "ID":3200607,
    "cidade":"ARACRUZ"
  },
  {
    "ID":3200706,
    "cidade":"ATILIO VIVACQUA"
  },
  {
    "ID":3200805,
    "cidade":"BAIXO GUANDU"
  },
  {
    "ID":3200904,
    "cidade":"BARRA DE SAO FRANCISCO"
  },
  {
    "ID":3201001,
    "cidade":"BOA ESPERANCA"
  },
  {
    "ID":3201100,
    "cidade":"BOM JESUS DO NORTE"
  },
  {
    "ID":3201159,
    "cidade":"BREJETUBA"
  },
  {
    "ID":3201209,
    "cidade":"CACHOEIRO DE ITAPEMIRIM"
  },
  {
    "ID":3201308,
    "cidade":"CARIACICA"
  },
  {
    "ID":3201407,
    "cidade":"CASTELO"
  },
  {
    "ID":3201506,
    "cidade":"COLATINA"
  },
  {
    "ID":3201605,
    "cidade":"CONCEICAO DA BARRA"
  },
  {
    "ID":3201704,
    "cidade":"CONCEICAO DO CASTELO"
  },
  {
    "ID":3201803,
    "cidade":"DIVINO DE SAO LOURENCO"
  },
  {
    "ID":3201902,
    "cidade":"DOMINGOS MARTINS"
  },
  {
    "ID":3202009,
    "cidade":"DORES DO RIO PRETO"
  },
  {
    "ID":3202108,
    "cidade":"ECOPORANGA"
  },
  {
    "ID":3202207,
    "cidade":"FUNDAO"
  },
  {
    "ID":3202256,
    "cidade":"GOVERNADOR LINDENBERG"
  },
  {
    "ID":3202306,
    "cidade":"GUACUI"
  },
  {
    "ID":3202405,
    "cidade":"GUARAPARI"
  },
  {
    "ID":3202454,
    "cidade":"IBATIBA"
  },
  {
    "ID":3202504,
    "cidade":"IBIRACU"
  },
  {
    "ID":3202553,
    "cidade":"IBITIRAMA"
  },
  {
    "ID":3202603,
    "cidade":"ICONHA"
  },
  {
    "ID":3202652,
    "cidade":"IRUPI"
  },
  {
    "ID":3202702,
    "cidade":"ITAGUACU"
  },
  {
    "ID":3202801,
    "cidade":"ITAPEMIRIM"
  },
  {
    "ID":3202900,
    "cidade":"ITARANA"
  },
  {
    "ID":3203007,
    "cidade":"IUNA"
  },
  {
    "ID":3203056,
    "cidade":"JAGUARE"
  },
  {
    "ID":3203106,
    "cidade":"JERONIMO MONTEIRO"
  },
  {
    "ID":3203130,
    "cidade":"JOAO NEIVA"
  },
  {
    "ID":3203163,
    "cidade":"LARANJA DA TERRA"
  },
  {
    "ID":3203205,
    "cidade":"LINHARES"
  },
  {
    "ID":3203304,
    "cidade":"MANTENOPOLIS"
  },
  {
    "ID":3203320,
    "cidade":"MARATAIZES"
  },
  {
    "ID":3203346,
    "cidade":"MARECHAL FLORIANO"
  },
  {
    "ID":3203353,
    "cidade":"MARILANDIA"
  },
  {
    "ID":3203403,
    "cidade":"MIMOSO DO SUL"
  },
  {
    "ID":3203502,
    "cidade":"MONTANHA"
  },
  {
    "ID":3203601,
    "cidade":"MUCURICI"
  },
  {
    "ID":3203700,
    "cidade":"MUNIZ FREIRE"
  },
  {
    "ID":3203809,
    "cidade":"MUQUI"
  },
  {
    "ID":3203908,
    "cidade":"NOVA VENECIA"
  },
  {
    "ID":3204005,
    "cidade":"PANCAS"
  },
  {
    "ID":3204054,
    "cidade":"PEDRO CANARIO"
  },
  {
    "ID":3204104,
    "cidade":"PINHEIROS"
  },
  {
    "ID":3204203,
    "cidade":"PIUMA"
  },
  {
    "ID":3204252,
    "cidade":"PONTO BELO"
  },
  {
    "ID":3204302,
    "cidade":"PRESIDENTE KENNEDY"
  },
  {
    "ID":3204351,
    "cidade":"RIO BANANAL"
  },
  {
    "ID":3204401,
    "cidade":"RIO NOVO DO SUL"
  },
  {
    "ID":3204500,
    "cidade":"SANTA LEOPOLDINA"
  },
  {
    "ID":3204559,
    "cidade":"SANTA MARIA DE JETIBA"
  },
  {
    "ID":3204609,
    "cidade":"SANTA TERESA"
  },
  {
    "ID":3204658,
    "cidade":"SAO DOMINGOS DO NORTE"
  },
  {
    "ID":3204708,
    "cidade":"SAO GABRIEL DA PALHA"
  },
  {
    "ID":3204807,
    "cidade":"SAO JOSE DO CALCADO"
  },
  {
    "ID":3204906,
    "cidade":"SAO MATEUS"
  },
  {
    "ID":3204955,
    "cidade":"SAO ROQUE DO CANAA"
  },
  {
    "ID":3205002,
    "cidade":"SERRA"
  },
  {
    "ID":3205010,
    "cidade":"SOORETAMA"
  },
  {
    "ID":3205036,
    "cidade":"VARGEM ALTA"
  },
  {
    "ID":3205069,
    "cidade":"VENDA NOVA DO IMIGRANTE"
  },
  {
    "ID":3205101,
    "cidade":"VIANA"
  },
  {
    "ID":3205150,
    "cidade":"VILA PAVAO"
  },
  {
    "ID":3205176,
    "cidade":"VILA VALERIO"
  },
  {
    "ID":3205200,
    "cidade":"VILA VELHA"
  },
  {
    "ID":3205309,
    "cidade":"VITORIA"
  }
]

export default (req, res) => {
  console.log(req.query)
    if(req.query.nome === 'es'){
        res.status(200).json(dados);
    }
    let i;
    for(i = 0; i < 78; i++){
        if(req.query.nome === dados[i]["cidade"]){
            console.log(dados[i]["cidade"]);
            res.status(200).json(dados[i]);
        }
    }
    res.status(200).json({});
}
