sap.ui.define(
  ["ui5-template/ui5-template/controller/BaseController"],
  function (BaseController) {
    "use strict";

    return BaseController.extend(
      "ui5-template.ui5-template.controller.DetailedView",
      {
        onNavBack: function () {
          this.getOwnerComponent().getRouter().navTo("MainView");
        },

        onInit: function () {
          const oRouter = sap.ui.core.UIComponent.getRouterFor(this);
          oRouter
            .getRoute("DetailedView")
            .attachPatternMatched(this.onRouteMatched, this);
        },

        onRouteMatched: function (oEvent) {
          const sId = parseInt(oEvent.getParameter("arguments").id, 10);
          const oModel = this.getView().getModel("invoicesModel");
          const oItem = this._findItemById(oModel, sId);

          if (oItem) {
            this._setDetailedModel(oItem);
          } else {
            this._loadExternalData(sId);
          }
        },

        _findItemById: function (oModel, sId) {
          const aData = oModel?.getData();
          const aList = Array.isArray(aData) ? aData : aData?.data || [];
          return aList.find((item) => item.id === sId);
        },

        _setDetailedModel: function (oItem) {
          const oDetailModel = new sap.ui.model.json.JSONModel(oItem);
          this.getView().setModel(oDetailModel, "detailedModel");
        },

        _loadExternalData: function (sId) {
          const oModel = new sap.ui.model.json.JSONModel();
          oModel.loadData(
            "https://jsonplaceholder.typicode.com/todos",
            null,
            false
          );

          const oItem = this._findItemById(oModel, sId);
          if (oItem) {
            this._setDetailedModel(oItem);
          }
        },
      }
    );
  }
);
