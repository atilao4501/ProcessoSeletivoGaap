sap.ui.define(
  [
    "sap/base/Log",
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "sap/m/MessageToast",
    "sap/ui/core/format/DateFormat",
    "sap/ui/thirdparty/jquery",
    "sap/ui/core/date/UI5Date",
  ],
  function (
    Log,
    Controller,
    JSONModel,
    MessageToast,
    DateFormat,
    jQuery,
    UI5Date
  ) {
    "use strict";

    return Controller.extend(
      "ui5-template.ui5-template.controller.InvoicesView",
      {
        onInit: function () {},

        onSearch: function (oEvent) {
          const sQuery = oEvent.getParameter("query");
          const oTable = this.byId("idTable");
          const oBinding = oTable.getBinding("rows");

          if (sQuery && sQuery.length > 0) {
            const oFilter = new sap.ui.model.Filter(
              "title",
              sap.ui.model.FilterOperator.Contains,
              sQuery
            );
            oBinding.filter([oFilter]);
          } else {
            oBinding.filter([]);
          }
        },

        onDetailsPress: function (oEvent) {
          const oItem = oEvent.getSource();
          const oContext = oItem.getBindingContext("invoicesModel");
          const sId = oContext.getProperty("id");

          this.getOwnerComponent().getRouter().navTo("DetailedView", {
            id: sId,
          });
        },
      }
    );
  }
);
