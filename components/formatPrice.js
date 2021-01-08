
//pour formater le style des prix  en euro etc

export   function FormatPrice(value) {
    const  int1=new Intl.NumberFormat("fr-FR", {style: "currency", currency: "EUR", currencyDisplay: "symbol"}).format(value)
     return int1
}



