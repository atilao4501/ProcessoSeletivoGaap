sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/Device",
    "listagem-invoices/listagem-invoices/model/models",
  ],
  function (UIComponent, Device, models) {
    "use strict";

    return UIComponent.extend("listagem-invoices.listagem-invoices.Component", {
      metadata: {
        manifest: "json",
      },

      /**
       * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
       * @public
       * @override
       */
      init: function () {
        // call the base component's init function
        UIComponent.prototype.init.apply(this, arguments);

        const oModel = new sap.ui.model.json.JSONModel();
        oModel.loadData("https://jsonplaceholder.typicode.com/todos");

        // Seta como global com o nome 'invoicesModel'
        this.setModel(oModel, "invoicesModel");

        // enable routing
        this.getRouter().initialize();

        // set the device model
        this.setModel(models.createDeviceModel(), "device");
      },
    });
  }
);
