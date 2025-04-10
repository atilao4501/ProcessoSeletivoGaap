sap.ui.define(
  ["listagem-invoices/listagem-invoices/controller/BaseController"],
  function (BaseController) {
    "use strict";

    return BaseController.extend(
      "listagem-invoices.listagem-invoices.controller.MainView",
      {
        onInit: function () {
          this.getOwnerComponent().getRouter().initialize();
        },
      }
    );
  }
);
