var _ = require('lodash');
var date = Date.now();
console.log(date);

var order_request = [
    {
        "codProd": "2876",
        "canProd": "10",
        "undMedida": "CAR"
    },
    {
        "codProd": "2889",
        "canProd": "3",
        "undMedida": "BS"
    },
    {
        "codProd": "2890",
        "canProd": "6",
        "undMedida": "BS"
    },
    {
        "codProd": "3132",
        "canProd": "2",
        "undMedida": "TP"
    },
    {
        "codProd": "3282",
        "canProd": "2",
        "undMedida": "DP"
    },
    {
        "codProd": "3330",
        "canProd": "30",
        "undMedida": "PL"
    }
];

var colombina_resp = [
    {
        "__metadata": {
            "id": "https://fiori.colombina.com:44300/sap/opu/odata/sap/ZGW_RALLYAPP_SO_SRV/SalesOrdersItemsSet(docVentas='000',codProd='2876')",
            "uri": "https://fiori.colombina.com:44300/sap/opu/odata/sap/ZGW_RALLYAPP_SO_SRV/SalesOrdersItemsSet(docVentas='000',codProd='2876')",
            "type": "ZGW_RALLYAPP_SO_SRV.SalesOrdersItems"
        },
        "docVentas": "000",
        "codProd": "2876",
        "canProd": "10.000",
        "undMedida": "CAR"
    },
    {
        "__metadata": {
            "id": "https://fiori.colombina.com:44300/sap/opu/odata/sap/ZGW_RALLYAPP_SO_SRV/SalesOrdersItemsSet(docVentas='000',codProd='2889')",
            "uri": "https://fiori.colombina.com:44300/sap/opu/odata/sap/ZGW_RALLYAPP_SO_SRV/SalesOrdersItemsSet(docVentas='000',codProd='2889')",
            "type": "ZGW_RALLYAPP_SO_SRV.SalesOrdersItems"
        },
        "docVentas": "000",
        "codProd": "2889",
        "canProd": "3.000",
        "undMedida": "BS"
    },
    {
        "__metadata": {
            "id": "https://fiori.colombina.com:44300/sap/opu/odata/sap/ZGW_RALLYAPP_SO_SRV/SalesOrdersItemsSet(docVentas='000',codProd='2890')",
            "uri": "https://fiori.colombina.com:44300/sap/opu/odata/sap/ZGW_RALLYAPP_SO_SRV/SalesOrdersItemsSet(docVentas='000',codProd='2890')",
            "type": "ZGW_RALLYAPP_SO_SRV.SalesOrdersItems"
        },
        "docVentas": "000",
        "codProd": "2890",
        "canProd": "6.000",
        "undMedida": "BS"
    },
    {
        "__metadata": {
            "id": "https://fiori.colombina.com:44300/sap/opu/odata/sap/ZGW_RALLYAPP_SO_SRV/SalesOrdersItemsSet(docVentas='000',codProd='3132')",
            "uri": "https://fiori.colombina.com:44300/sap/opu/odata/sap/ZGW_RALLYAPP_SO_SRV/SalesOrdersItemsSet(docVentas='000',codProd='3132')",
            "type": "ZGW_RALLYAPP_SO_SRV.SalesOrdersItems"
        },
        "docVentas": "000",
        "codProd": "3132",
        "canProd": "2.000",
        "undMedida": "TP"
    },
    {
        "__metadata": {
            "id": "https://fiori.colombina.com:44300/sap/opu/odata/sap/ZGW_RALLYAPP_SO_SRV/SalesOrdersItemsSet(docVentas='000',codProd='3282')",
            "uri": "https://fiori.colombina.com:44300/sap/opu/odata/sap/ZGW_RALLYAPP_SO_SRV/SalesOrdersItemsSet(docVentas='000',codProd='3282')",
            "type": "ZGW_RALLYAPP_SO_SRV.SalesOrdersItems"
        },
        "docVentas": "000",
        "codProd": "3282",
        "canProd": "2.000",
        "undMedida": "DP"
    },
    {
        "__metadata": {
            "id": "https://fiori.colombina.com:44300/sap/opu/odata/sap/ZGW_RALLYAPP_SO_SRV/SalesOrdersItemsSet(docVentas='000',codProd='3330')",
            "uri": "https://fiori.colombina.com:44300/sap/opu/odata/sap/ZGW_RALLYAPP_SO_SRV/SalesOrdersItemsSet(docVentas='000',codProd='3330')",
            "type": "ZGW_RALLYAPP_SO_SRV.SalesOrdersItems"
        },
        "docVentas": "000",
        "codProd": "3330",
        "canProd": "30.000",
        "undMedida": "PL"
    }
]

function deleteProdsFromOrden(ordOriginal, prodsND) {
    prodsND.forEach(prod => {
        var index = _.findIndex(ordOriginal, prod);
        console.log("INDICE", index);
        ordOriginal.splice(index, 1);
    });
};


 
var prodND = [];
var p = [];
var flag = false;

for (let prods of colombina_resp) {
    if (prods.undMedida === "BS") {
        flag = true;
        //console.log("INDEX OF", order_request.indexOf(prods));
        prodND.push({
            "codProd": prods.codProd,
            "canProd": parseInt(prods.canProd) + "",
            "undMedida": prods.undMedida
        }); 
        p.push(prods.codProd + "");
    }
}

deleteProdsFromOrden(order_request, prodND);
console.log(order_request);
console.log(`Los productos ${p}, no se encuentran disponibles`);