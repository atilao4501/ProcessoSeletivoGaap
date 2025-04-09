sap.ui.define(
  ["ui5-template/ui5-template/controller/BaseController"],
  function (BaseController) {
    "use strict";

    return BaseController.extend(
      "ui5-template.ui5-template.controller.MainView",
      {
        onInit: function () {
          this.getOwnerComponent().getRouter().initialize();
        },
      }
    );
  }
);
