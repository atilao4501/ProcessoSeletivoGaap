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

    return Controller.extend("ui5-template.ui5-template.controller.MainView", {
      onInit: function () {
        const oModel = new JSONModel();
        const oView = this.getView();

        oModel.loadData("https://jsonplaceholder.typicode.com/todos");
        oView.setModel(oModel, "invoicesModel");
      },
    });
  }
);
