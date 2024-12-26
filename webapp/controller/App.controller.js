// sap.ui.define([
//     "sap/ui/core/mvc/Controller"
//  ], (Controller) => {
//     "use strict";

//     return Controller.extend("ui5.walkthrough.controller.App", {
//        onShowHello() {
//           // show a native JavaScript alert
//           alert("Hello World");
//        }
//     });
//  });

// sap.ui.define([
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast"
//  ], (Controller, MessageToast) => {
//     "use strict";

//     return Controller.extend("ui5.walkthrough.controller.App", {
//        onShowHello() {
//           MessageToast.show("Hello World");
//        }
//     });
//  });

// sap.ui.define(
//   [
//     "sap/ui/core/mvc/Controller",
//     "sap/m/MessageToast",
//     "sap/ui/model/json/JSONModel",
//   ],
//   (Controller, MessageToast, JSONModel) => {
//     "use strict";

//     return Controller.extend("ui5.walkthrough.controller.App", {
//       onInit() {
//         // set data model on view
//         // const oData = {
//         //   recipient: {
//         //     name: "World",
//         //   },
//         // };

//         const oData = {
//           product: {
//             productItem: {
//               productName: "Car"
//             },
//             productDescription: {
//               lineItem: "sdsds"
//             }
//           },
//         };

//         const oModel = new JSONModel(oData);
//         this.getView().setModel(oModel);
//       },

//       onShowHello() {
//         MessageToast.show("Hello World");
//       },
//     });
//   }
// );

sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"
 ], (Controller, MessageToast) => {
    "use strict";
 
    return Controller.extend("ui5.walkthrough.controller.App", {
       onShowHello() {
          // read msg from i18n model
          const oBundle = this.getView().getModel("i18n").getResourceBundle();
          const sRecipient = this.getView().getModel().getProperty("/recipient/name");
          const sMsg = oBundle.getText("helloMsg", [sRecipient]);
 
          // show message
          MessageToast.show(sMsg);
       }
    });
 });
 
