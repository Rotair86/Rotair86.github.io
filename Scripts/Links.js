//Author - John Maher
//Builds links to all assembly, classes, functions and tables.  Enables changes to the links in one location.
function AssemblyLink(Key, Parameter)
{
	//Parameter is optional.  Some links require a parameter so it can be supplied with this variable.
	var Link;
	var Extension = '';

	if (Parameter !== undefined)
		if (Parameter.substring(0,1) == '.')
			Extension = Parameter
			
	switch(Key) {
		case 'CodeRecon':
			Link = '<a href="Code Recon.html">Code Recon</a>';
			break;
		case 'DataDictionary':
			Link = '<a href="Data Dictionary.html">Data Dictionary</a>';
			break;
		case 'DBSearch':
			Link = '<a href="DB Search.html">DB Search</a>';
			break;
		case 'EnumBuilder':
			Link = '<a href="EnumBuilder.html">EnumBuilder</a>';
			break;
		case 'ERPPicker':
			Link = '<a href="ERP Picker.html">ERP Picker</a>';
			break;
		case 'LLMClient':
			Link = '<a href="LLM CLient.html">LLM CLient' + Extension + '</a>';
			break;
		case 'LLMServer':
			Link = '<a href="LLM Server.html">LLM Server' + Extension + '</a>';
			break;
		case 'IntuitiveAOCustomerCUSTOM':
			Link = '<a href="IntuitiveAOCustomerCUSTOM.html">IntuitiveAO_Customer_CUSTOM' + Extension + '</a>';
			break;
		case 'IntuitiveAOEmployeeCUSTOM':
			Link = '<a href="IntuitiveAOEmployeeCUSTOM.html">IntuitiveAO_Employee_CUSTOM' + Extension + '</a>';
			break;
		case 'IntuitiveAOItemCUSTOM':
			Link = '<a href="IntuitiveAOItemCUSTOM.html">IntuitiveAO_Item_CUSTOM' + Extension + '/a>';
			break;
		case 'IntuitiveAOMasterControlsCUSTOM':
			Link = '<a href="IntuitiveAOMasterControlsCUSTOM.html">IntuitiveAO_MasterControls_CUSTOM' + Extension + '</a>';
			break;
		case 'IntuitiveAOPurchaseOrderCUSTOM':
			Link = '<a href="IntuitiveAOPurchaseOrderCUSTOM.html">IntuitiveAO_PurchaseOrder_CUSTOM' + Extension + '</a>';
			break;
		case 'IntuitiveAOQuoteHeaderCUSTOM':
			Link = '<a href="IntuitiveAOQuoteHeaderCUSTOM.html">IntuitiveAO_QuoteHeader_CUSTOM' + Extension + '</a>';
			break;
		case 'IntuitiveAOSalesOrderCUSTOM':
			Link = '<a href="IntuitiveAOSalesOrderCUSTOM.html">IntuitiveAO_SalesOrder_CUSTOM' + Extension + '</a>';
			break;
		case 'IntuitiveAppObjectFramework2':
			Link = '<a href="IntuitiveAppObjectFramework2.html">IntuitiveAppObjectFramework2' + Extension + '</a>';
			break;
		case 'IntuitiveForms':
			Link = '<a href="IntuitiveForms.html">IntuitiveForms' + Extension + '</a>';
			break;
		case 'IntuitiveUICustomerCUSTOM':
			Link = '<a href="IntuitiveUICustomerCUSTOM.html">IntuitiveUI_Customer_CUSTOM' + Extension + '</a>';
			break;
		case 'IntuitiveUIItemCardCUSTOM':
			Link = '<a href="IntuitiveUIItemCardCUSTOM.html">IntuitiveUI_ItemCard_CUSTOM' + Extension + '</a>';
			break;
		case 'IntuitiveUIMasterControlCUSTOM':
			Link = '<a href="IntuitiveUIMasterControlCUSTOM.html">IntuitiveUI_MasterControl_CUSTOM' + Extension + '</a>';
			break;
		case 'IntuitiveUIPurchaseOrderCUSTOM':
			Link = '<a href="IntuitiveUIPurchaseOrderCUSTOM.html">IntuitiveUI_PurchaseOrder_CUSTOM' + Extension + '</a>';
			break;
		case 'IntuitiveUIQuoteCUSTOM':
			Link = '<a href="IntuitiveUIQuoteCUSTOM.html">IntuitiveUI_Quote_CUSTOM' + Extension + '</a>';
			break;
		case 'IntuitiveUISalesOrderCUSTOM':
			Link = '<a href="IntuitiveUISalesOrderCUSTOM.html">IntuitiveUI_SalesOrder_CUSTOM' + Extension + '</a>';
			break;
		case 'IntuitiveUIShipmentCUSTOM':
			if (Parameter === undefined)
				Link = '<a href="IntuitiveUIShipmentCUSTOM.html">IntuitiveUI_Shipment_CUSTOM' + Extension + '</a>';
			else
				Link = '<a href="IntuitiveUIShipmentCUSTOM.html" + Parameter + ">IntuitiveUI_Shipment_CUSTOM' + Extension + '</a>';
			break;
		case 'IntuitiveUIShopDataMaintenanceCUSTOM':
			Link = '<a href="IntuitiveUIShopDataMaintenanceCUSTOM.html">IntuitiveUI_ShopDataMaintenance_CUSTOM' + Extension + '</a>';
			break;
		case 'MultiColCombo':
			Link = '<a href="MultiColCombo.html">MultiColCombo' + Extension + '</a>';
			break;
		case 'NetGen':
			Link = '<a href="NetGen.html">NetGen</a>';
			break;
		case 'RotairAOCageCode':
			Link = '<a href="RotairAOCageCode.html">RotairAO_CageCode' + Extension + '</a>';
			break;
		case 'RotairAOCertificate':
			Link = '<a href="RotairAOCertificate.html">RotairAO_Certificate' + Extension + '</a>';
			break;
		case 'RotairAOCountry':
			Link = '<a href="RotairAOCountry.html">RotairAO_Country' + Extension + '</a>';
			break;
		case 'RotairAOEmail':
			Link = '<a href="RotairAOEmail.html">RotairAO_Email' + Extension + '</a>';
			break;
		case 'RotairAOExportLicense':
			Link = '<a href="RotairAOExportLicense.html">RotairAO_ExportLicense' + Extension + '</a>';
			break;
		case 'RotairAOMessages':
			Link = '<a href="RotairAOMessages.html">RotairAO_Messages' + Extension + '</a>';
			break;
		case 'RotairAONote':
			Link = '<a href="RotairAONote.html">RotairAO_Note' + Extension + '</a>';
			break;
		case 'RotairAOPhrase':
			Link = '<a href="RotairAOPhrase.html">RotairAO_Phrase' + Extension + '</a>';
			break;
		case 'RotairAOPMA':
			Link = '<a href="RotairAOPMA.html">RotairAO_PMA' + Extension + '</a>';
			break;
		case 'RotairAOReport':
			Link = '<a href="RotairAOReport.html">RotairAO_Report' + Extension + '</a>';
			break;
		case 'RotairAORFQ':
			Link = '<a href="RotairAORFQ.html">RotairAO_RFQ' + Extension + '</a>';
			break;
		case 'RotairAOScreening':
			Link = '<a href="RotairAOScreening.html">RotairAO_Screening' + Extension + '</a>';
			break;
		case 'RotairAOSupplierManufacturer':
			Link = '<a href="RotairAOSupplierManufacturer.html">RotairAO_SupplierManufacturer' + Extension + '</a>';
			break;
		case 'RotairimsAONote':
			Link = '<a href="RotairimsAONote.html">RotairimsAO_Note' + Extension + '</a>';
			break;
		case 'RotairimsAOScreening':
			Link = '<a href="RotairimsAOScreening.html">RotairimsAO_Screening' + Extension + '</a>';
			break;
		case 'RotairDataAccess':
			Link = '<a href="RotairDataAccess.html">RotairDataAccess' + Extension + '</a>';
			break;
		case 'RotairDataAccessWrapper':
			Link = '<a href="RotairDataAccessWrapper.html">RotairDataAccessWrapper' + Extension + '</a>';
			break;
		case 'RotairDebugger':
			Link = '<a href="RotairDebugger.html">Rotair_Debugger' + Extension + '</a>';
			break;
		case 'RotairDialogPhrases':
			Link = '<a href="RotairDialogPhrases.html">RotairDialog_Phrases' + Extension + '</a>';
			break;
		case 'RotairDialogScreening':
			Link = '<a href="RotairDialogScreening.html">RotairDialog_Screening' + Extension + '</a>';
			break;
		case 'RotairDynamicEnums':
			Link = '<a href="RotairDynamicEnums.html">Rotair_DynamicEnums' + Extension + '</a>';
			break;
		case 'RotairEmail':
			Link = '<a href="RotairEmail.html">Rotair_Email' + Extension + '</a>';
			break;
		case 'RotairExcel':
			Link = '<a href="RotairExcel.html">Rotair_Excel' + Extension + '</a>';
			break;
		case 'RotairExportManagement':
			Link = '<a href="RotairExportManagement.html">Rotair_ExportManagement' + Extension + '</a>';
			break;
		case 'RotairGeneralFunctions':
			Link = '<a href="RotairGeneralFunctions.html">Rotair_GeneralFunctions' + Extension + '</a>';
			break;			
		case 'RotairHCCertificate':
			Link = '<a href="RotairHCCertificate.html">RotairHC_Certificate' + Extension + '</a>';
			break;
		case 'RotairHCReport':
			Link = '<a href="RotairHCReport.html">RotairHC_Report' + Extension + '</a>';
			break;
		case 'RotairIMSExtensions':
			Link = '<a href="RotairIMSExtensions.html">Rotair_IMS_Extensions' + Extension + '</a>';
			break;
		case 'RotairObject':
			Link = '<a href="RotairObject.html">RotairObject' + Extension + '</a>';
			break;
		case 'RotairReport':
			Link = '<a href="RotairReport.html">Rotair_Report' + Extension + '</a>';
			break;
		case 'RotairSecurity':
			Link = '<a href="RotairSecurity.html">Rotair_Security' + Extension + '</a>';
			break;
		case 'RotairSystem':
			Link = '<a href="RotairSystem.html">Rotair_System' + Extension + '</a>';
			break;
		case 'RotairTypes':
			Link = '<a href="RotairTypes.html">Rotair_Types' + Extension + '</a>';
			break;
		case 'RotairUICageCode':
			Link = '<a href="RotairUICageCode.html">RotairUI_CageCode' + Extension + '</a>';
			break;
		case 'RotairUICommon':
			Link = '<a href="RotairUICommon.html">RotairUI_Common' + Extension + '</a>';
			break;
		case 'RotairUICertificatePrint':
			Link = '<a href="RotairUICertificatePrint.html">RotairUI_CertificatePrint' + Extension + '</a>';
			break;
		case 'RotairUIDeleteSalesOrderLine':
			Link = '<a href="RotairUIDeleteSalesOrderLine.html">RotairUI_DeleteSalesOrderLine' + Extension + '</a>';
			break;
		case 'RotairUIEmail':
			Link = '<a href="RotairUIEmail.html">RotairUI_Email' + Extension + '</a>';
			break;
		case 'RotairUIGrid':
			Link = '<a href="RotairUIGrid.html">RotairUI_Grid' + Extension + '</a>';
			break;
		case 'RotairUINote':
			Link = '<a href="RotairUINote.html">RotairUI_Note' + Extension + '</a>';
			break;
		case 'RotairUIRFQ':
			Link = '<a href="RotairUIRFQ.html">RotairUI_RFQ' + Extension + '</a>';
			break;
		case 'RotairUIRFQResponse':
			Link = '<a href="RotairUIRFQResponse.html">RotairUI_RFQResponse' + Extension + '</a>';
			break;
		case 'RotairUIShipments':
			Link = '<a href="RotairUIShipments.html">RotairUI_Shipments' + Extension + '</a>';
			break;
		case 'RotairUIStockToXL':
			Link = '<a href="RotairUIStockToXL.html">RotairUI_StockToXL' + Extension + '</a>';
			break;
		case 'RotairUISupplierManufacturer':
			Link = '<a href="RotairUISupplierManufacturer.html">RotairUI_SupplierManufacturer' + Extension + '</a>';
			break;
		default:
			Link = '***NOT FOUND***';
	} 

	return Link
}

function ClassLink(Key)
{
	var Link;
	
	switch(Key) {
		case 'IntuitiveAppObjectFramework2.imsAppObject':
			Link = '<a href="IntuitiveAppObjectFramework2.imsAppObject.html">imsAppObject</a>';
			break;
		case 'IntuitiveSystem.imsSecurity':
			Link = '<a href="IntuitiveSystem.imsSecurity.html">imsSecurity</a>';
			break;
		case 'RotairAOCountry.imsAOCountry':
			Link = '<a href="RotairAOCountry.imsAOCountry.html">imsAO_Country</a>';
			break;
		case 'RotairAOEmail.imsAOEmailMaster':
			Link = '<a href="RotairAOEmail.imsAOEmailMaster.html">imsAO_EmailMaster</a>';
			break;
		case 'RotairAOEmail.imsAOEmailRecipient':
			Link = '<a href="RotairAOEmail.imsAOEmailRecipient.html">imsAO_EmailRecipient</a>';
			break;
		case 'RotairAOEmail.imsAOEmailType':
			Link = '<a href="RotairAOEmail.imsAOEmailType.html">imsAO_EmailType</a>';
			break;
		case 'RotairAOMessages.imsAOMessage':
			Link = '<a href="RotairAOMessages.imsAOMessage.html">imsAO_Message</a>';
			break;
		case 'RotairAOReport.rotAOReportCollection.rotAOReport':
			Link = '<a href="RotairAOReport.rotAOReportCollection.rotAOReport.html">rotAO_Report_Collection.rotAO_Report</a>';
			break;
		case 'RotairAOPMA.imsAOItem':
			Link = '<a href="RotairAOPMA.imsAOItem.html">imsAO_Item</a>';
			break;
		case 'RotairAORFQ.imsAORFQImaging':
			Link = '<a href="RotairAORFQ.imsAORFQImaging.html">imsAO_RFQImaging</a>';
			break;
		case 'RotairAORFQ.imsAORFQImagingCollection':
			Link = '<a href="RotairAORFQ.imsAORFQImagingCollection.html">imsAO_RFQImaging_Collection</a>';
			break;
		case 'RotairAORFQ.imsAORFQImagingController':
			Link = '<a href="RotairAORFQ.imsAORFQImagingController.html">imsAO_RFQImagingController</a>';
			break;
		case 'RotairAORFQ.imsAORFQItem':
			Link = '<a href="RotairAORFQ.imsAORFQItem.html">imsAO_RFQItem</a>';
			break;
		case 'RotairAORFQ.imsAORFQItemQuantity':
			Link = '<a href="RotairAORFQ.imsAORFQItemQuantity.html">imsAO_RFQItemQuantity</a>';
			break;
		case 'RotairAORFQ.imsAORFQMaster':
			Link = '<a href="RotairAORFQ.imsAORFQMaster.html">imsAO_RFQMaster</a>';
			break;
		case 'RotairAORFQ.imsAORFQsEmailed':
			Link = '<a href="RotairAORFQ.imsAORFQsEmailed.html">imsAO_RFQsEmailed</a>';
			break;
		case 'RotairAORFQ.imsAORFQUnindexed':
			Link = '<a href="RotairAORFQ.imsAORFQUnindexed.html">imsAO_RFQUnindexed</a>';
			break;
		case 'RotairAORFQ.imsAORFQUnindexedController':
			Link = '<a href="RotairAORFQ.imsAORFQUnindexedController.html">imsAO_RFQUnindexedController</a>';
			break;
		case 'RotairAORFQ.imsAORFQVendor':
			Link = '<a href="RotairAORFQ.imsAORFQVendor.html">imsAO_RFQVendor</a>';
			break;
		case 'RotairAORFQ.imsAORFQVendorCharge':
			Link = '<a href="RotairAORFQ.imsAORFQVendorCharge.html">imsAO_RFQVendorCharge</a>';
			break;
		case 'RotairAORFQ.imsAORFQVendorQuote':
			Link = '<a href="RotairAORFQ.imsAORFQVendorQuote.html">imsAO_RFQVendorQuote</a>';
			break;
		case 'RotairAORFQ.RFQIO':
			Link = '<a href="RotairAORFQ.RFQIO.html">RFQIO</a>';
			break;
		case 'RotairDataAccess.CageCode':
			Link = '<a href="RotairDataAccess.CageCode.html">CageCode</a>';
			break;
		case 'RotairDataAccess.Certificate':
			Link = '<a href="RotairDataAccess.Certificate.html">Certificate</a>';
			break;
		case 'RotairDataAccess.Certificate.Header':
			Link = '<a href="RotairDataAccess.Certificate.Header.html">Certificate.Header</a>';
			break;
		case 'RotairDataAccess.Certificate.Header.ItemDetail':
			Link = '<a href="RotairDataAccess.Certificate.Header.ItemDetail.html">Certificate.Header.ItemDetail</a>';
			break;
		case 'RotairDataAccess.Certificate.Signature':
			Link = '<a href="RotairDataAccess.Certificate.Signature.html">Certificate.Signature</a>';
			break;
		case 'RotairDataAccess.Customer':
			Link = '<a href="RotairDataAccess.Customer.html">Customer</a>';
			break;
		case 'RotairDataAccess.DAConstants':
			Link = '<a href="RotairDataAccess.DAConstants.html">DAConstants</a>';
			break;
		case 'RotairDataAccess.DataBase':
			Link = '<a href="RotairDataAccess.DataBase.html">DataBase</a>';
			break;
		case 'RotairDataAccess.DataSetCustom':
			Link = '<a href="RotairDataAccess.DataSetCustom.html">DataSetCustom</a>';
			break;
		case 'RotairDataAccess.DataSetCustom.Countries':
			Link = '<a href="RotairDataAccess.DataSetCustom.Countries.html">DataSetCustom.Countries</a>';
			break;
		case 'RotairDataAccess.DBConstants':
			Link = '<a href="RotairDataAccess.DBConstants.html">DBConstants</a>';
			break;
		case 'RotairDataAccess.Employee':
			Link = '<a href="RotairDataAccess.Employee.html">Employee</a>';
			break;
		case 'RotairDataAccess.ExportLicense':
			Link = '<a href="RotairDataAccess.ExportLicense.html">ExportLicense</a>';
			break;
		case 'RotairDataAccess.ExportLicense.Item':
			Link = '<a href="RotairDataAccess.ExportLicense.Item.html">ExportLicense.Item</a>';
			break;
		case 'RotairDataAccess.ExportLicense.Transaction':
			Link = '<a href="RotairDataAccess.ExportLicense.Transaction.html">ExportLicense.Transaction</a>';
			break;
		case 'RotairDataAccess.Item':
			Link = '<a href="RotairDataAccess.Item.html">Item</a>';
			break;
		case 'RotairDataAccess.Item.UseClass':
			Link = '<a href="RotairDataAccess.Item.UseClass.html">Item.UseClass</a>';
			break;
		case 'RotairDataAccess.Locking':
			Link = '<a href="RotairDataAccess.Locking.html">Locking</a>';
			break;
		case 'RotairDataAccess.MCTS':
			Link = '<a href="RotairDataAccess.MCTS.html">MCTS</a>';
			break;
		case 'RotairDataAccess.MMTS':
			Link = '<a href="RotairDataAccess.MMTS.html">MMTS</a>';
			break;
		case 'RotairDataAccess.MMTS.Condition':
			Link = '<a href="RotairDataAccess.MMTS.Condition.html">MMTS.Condition</a>';
			break;
		case 'RotairDataAccess.NoteType':
			Link = '<a href="RotairDataAccess.NoteType.html">NoteType</a>';
			break;
		case 'RotairDataAccess.NoteType.Note':
			Link = '<a href="RotairDataAccess.NoteType.Note.html">NoteType.Note</a>';
			break;
		case 'RotairDataAccess.PhraseForm':
			Link = '<a href="RotairDataAccess.PhraseForm.html">PhraseForm</a>';
			break;
		case 'RotairDataAccess.PhraseForm.Phrase':
			Link = '<a href="RotairDataAccess.PhraseForm.Phrase.html">PhraseForm.Phrase</a>';
			break;
		case 'RotairDataAccess.PMA':
			Link = '<a href="RotairDataAccess.PMA.html">PMA</a>';
			break;
		case 'RotairDataAccess.PMA.Item':
			Link = '<a href="RotairDataAccess.PMA.Item.html">PMA.Item</a>';
			break;
		case 'RotairDataAccess.PurchaseOrder':
			Link = '<a href="RotairDataAccess.PurchaseOrder.html">PurchaseOrder</a>';
			break;
		case 'RotairDataAccess.PurchaseOrder.Line':
			Link = '<a href="RotairDataAccess.PurchaseOrder.Line.html">PurchaseOrder.Line</a>';
			break;
		case 'RotairDataAccess.Quote':
			Link = '<a href="RotairDataAccess.Quote.html">Quote</a>';
			break;
		case 'RotairDataAccess.Quote.Header':
			Link = '<a href="RotairDataAccess.Quote.Header.html">Quote.Header</a>';
			break;
		case 'RotairDataAccess.Quote.Header.Line':
			Link = '<a href="RotairDataAccess.Quote.Header.Line.html">Quote.Header.Line</a>';
			break;
		case 'RotairDataAccess.Quote.Header.Line.Delivery':
			Link = '<a href="RotairDataAccess.Quote.Header.Line.Delivery.html">Quote.Header.Line.Delivery</a>';
			break;
		case 'RotairDataAccess.Quote.Header.Line.Price':
			Link = '<a href="RotairDataAccess.Quote.Header.Line.Price.html">Quote.Header.Line.Price</a>';
			break;
		case 'RotairDataAccess.Report':
			Link = '<a href="RotairDataAccess.Report.html">Report</a>';
			break;
		case 'RotairDataAccess.Report.Footer':
			Link = '<a href="RotairDataAccess.Report.Footer.html">Report.Footer</a>';
			break;
		case 'RotairDataAccess.Report.Header':
			Link = '<a href="RotairDataAccess.Report.Header.html">Report.Header</a>';
			break;
		case 'RotairDataAccess.Report.Table':
			Link = '<a href="RotairDataAccess.Report.Table.html">Report.Table</a>';
			break;
		case 'RotairDataAccess.Report.Table.Column':
			Link = '<a href="RotairDataAccess.Report.Table.Column.html">Report.Table.Column</a>';
			break;
		case 'RotairDataAccess.Report.Table.Detail':
			Link = '<a href="RotairDataAccess.Report.Table.Detail.html">Report.Table.Detail</a>';
			break;
		case 'RotairDataAccess.RFQ':
			Link = '<a href="RotairDataAccess.RFQ.html">RFQ</a>';
			break;
		case 'RotairDataAccess.RFQ.Imaging':
			Link = '<a href="RotairDataAccess.RFQ.Imaging.html">RFQ.Imaging</a>';
			break;
		case 'RotairDataAccess.RFQ.Master':
			Link = '<a href="RotairDataAccess.RFQ.Master.html">RFQ.Master</a>';
			break;
		case 'RotairDataAccess.RFQ.Master.Item':
			Link = '<a href="RotairDataAccess.RFQ.Master.Item.html">RFQ.Master.Item</a>';
			break;
		case 'RotairDataAccess.RFQ.Master.Item.Vendor':
			Link = '<a href="RotairDataAccess.RFQ.Master.Item.Vendor.html">RFQ.Master.Item.Vendor</a>';
			break;
		case 'RotairDataAccess.RFQ.Master.Item.Vendor.VendorQuote':
			Link = '<a href="RotairDataAccess.RFQ.Master.Item.Vendor.VendorQuote.html">RFQ.Master.Item.Vendor.VendorQuote</a>';
			break;
		case 'RotairDataAccess.SalesOrder':
			Link = '<a href="RotairDataAccess.SalesOrder.html">SalesOrder</a>';
			break;
		case 'RotairDataAccess.SalesOrder.SalesOrderLine':
			Link = '<a href="RotairDataAccess.SalesOrder.SalesOrderLine.html">SalesOrder.SalesOrderLine</a>';
			break;
		case 'RotairDataAccess.SalesOrder.SalesOrderLine.SalesOrderDelivery':
			Link = '<a href="RotairDataAccess.SalesOrder.SalesOrderLine.SalesOrderDelivery.html">SalesOrder.SalesOrderLine.SalesOrderDelivery</a>';
			break;
		case 'RotairDataAccess.SalesOrder.SOMExportData':
			Link = '<a href="RotairDataAccess.SalesOrder.SOMExportData.html">SalesOrder.SOMExportData</a>';
			break;
		case 'RotairDataAccess.Scalar':
			Link = '<a href="RotairDataAccess.Scalar.html">Scalar</a>';
			break;
		case 'RotairDataAccess.Screening':
			Link = '<a href="RotairDataAccess.Screening.html">Screening</a>';
			break;
		case 'RotairDataAccess.Shipping':
			Link = '<a href="RotairDataAccess.Shipping.html">Shipping</a>';
			break;
		case 'RotairDataAccess.Shipping.Picklist':
			Link = '<a href="RotairDataAccess.Shipping.PickList.html">Shipping.PickList</a>';
			break;			  
		case 'RotairDataAccess.Shipping.Picklist.PickListDelivery':
			Link = '<a href="RotairDataAccess.Shipping.PickList.PickListDelivery.html">Shipping.PickList.PickListDelivery</a>';
			break;
		case 'RotairDataAccess.SupplierManufacturer':
			Link = '<a href="RotairDataAccess.SupplierManufacturer.html">SupplierManufacturer</a>';
			break;
		case 'RotairDataAccess.Vendor':
			Link = '<a href="RotairDataAccess.Vendor.html">Vendor</a>';
			break;
		case 'RotairDataAccess.WorkOrder':
			Link = '<a href="RotairDataAccess.WorkOrder.html">WorkOrder</a>';
			break;
		case 'RotairDataAccess.WorkOrder.Operation':
			Link = '<a href="RotairDataAccess.WorkOrder.Operation.html">WorkOrder.Operation</a>';
			break;
		case 'RotairDataAccessWrapper.DataSetCustom':
			Link = '<a href="RotairDataAccessWrapper.DataSetCustom.html">DataSetCustom</a>';
			break;
		case 'RotairDataAccessWrapper.PurchaseOrder':
			Link = '<a href="RotairDataAccessWrapper.PurchaseOrder.html">PurchaseOrder</a>';
			break;
		case 'RotairDataAccessWrapper.Quote':
			Link = '<a href="RotairDataAccessWrapper.Quote.html">Quote</a>';
			break;
		case 'RotairDataAccessWrapper.Scalar':
			Link = '<a href="RotairDataAccessWrapper.Scalar.html">Scalar</a>';
			break;
		case 'RotairDataAccessWrapper.Shipping':
			Link = '<a href="RotairDataAccessWrapper.Shipping.html">Shipping</a>';
			break;
		case 'RotairDebugger.ErrorHandler':
			Link = '<a href="RotairDebugger.ErrorHandler.html">ErrorHandler</a>';
			break;
		case 'RotairEmail.EmailBuilder':
			Link = '<a href="RotairEmail.EmailBuilder.html">EmailBuilder</a>';
			break;
		case 'RotairEmail.OutlookAutomation':
			Link = '<a href="RotairEmail.OutlookAutomation.html">OutlookAutomation</a>';
			break;
		case 'RotairExcel.Excel':
			Link = '<a href="RotairExcel.Excel.html">Excel</a>';
			break;
		case 'RotairExcel.XLEnumerations':
			Link = '<a href="RotairExcel.XLEnumerations.html">XLEnumerations</a>';
			break;
		case 'RotairExportManagement.ExportManagement':
			Link = '<a href="RotairExportManagement.ExportManagement.html">ExportManagement</a>';
			break;
		case 'RotairExportManagement.Constants':
			Link = '<a href="RotairExportManagement.Constants.html">Constants</a>';
			break;
		case 'RotairGeneralFunctions.Scalar':
			Link = '<a href="RotairGeneralFunctions.Scalar.html">Scalar</a>';
			break;
		case 'RotairGeneralFunctions.String':
			Link = '<a href="RotairGeneralFunctions.String.html">String</a>';
			break;
		case 'RotairGeneralFunctions.Windows':
			Link = '<a href="RotairGeneralFunctions.Windows.html">Windows</a>';
			break;
		case 'RotairHCReport.rotHCReporter':
			Link = '<a href="RotairHCReport.rotHCReporter.html">rotHC_Reporter</a>';
			break;
		case 'RotairIMSExtensions.AppObject':
			Link = '<a href="RotairIMSExtensions.AppObject.html">AppObject</a>';
			break;
		case 'RotairReport.rotReport':
			Link = '<a href="RotairReport.rotReport.html">rotReport</a>';
			break;
		case 'RotairSecurity.Security':
			Link = '<a href="RotairSecurity.Security.html">Security</a>';
			break;
		case 'RotairSystem.File':
			Link = '<a href="RotairSystem.File.html">File</a>';
			break;
		case 'RotairSystem.System':
			Link = '<a href="RotairSystem.System.html">System</a>';
			break;
		case 'RotairTypes.CodeChangeAttribute':
			Link = '<a href="RotairTypes.CodeChangeAttribute.html">CodeChangeAttribute</a>';
			break;
		case 'RotairTypes.Constants':
			Link = '<a href="RotairTypes.Constants.html">Constants</a>';
			break;
		case 'RotairTypes.Enumerations':
			Link = '<a href="RotairTypes.Enumerations.html">Enumerations</a>';
			break;
		case 'RotairTypes.Structs':
			Link = '<a href="RotairTypes.Structs.html">Structs</a>';
			break;
		case 'RotairUICommon.CustomMessage':
			Link = '<a href="RotairUICommon.CustomMessage.html">CustomMessage</a>';
			break;
		case 'RotairUICommon.frmDisplayAO':
			Link = '<a href="RotairUICommon.frmDisplayAO.html">frmDisplayAO</a>';
			break;
		case 'RotairUICommon.frmDisplayAppObject':
			Link = '<a href="RotairUICommon.frmDisplayAppObject.html">frmDisplayAppObject</a>';
			break;
		case 'RotairUICommon.UI':
			Link = '<a href="RotairUICommon.UI.html">UI</a>';
			break;
		case 'RotairUICommon.UIConstants':
			Link = '<a href="RotairUICommon.UIConstants.html">UI_Constants</a>';
			break;
		case 'rotAppLockingObject':		//Unstandard key.  Thats OK, this object is deprecated.
			Link = '<a href="RotairObject.rotAppLockingObject.html">rotAppLockingObject</a>';
			break;
		case 'rotAppObject':			//Unstandard key.  Thats OK, this object is deprecated.
			Link = '<a href="RotairObject.rotAppObject.html">rotAppObject</a>';
			break;
		case 'rotAppObjectCollection':	//Unstandard key.  Thats OK, this object is deprecated.
			Link = '<a href="RotairObject.rotAppObjectCollection.html">rotAppObjectCollection</a>';
			break;
		default:
			//Link = '***"' + Key + '"NOT FOUND***';//For degbugging.
			Link = '***NOT FOUND***';
	} 

	return Link
}

function FunctionLink(Key)
{
	//Contains enumerations, functions and methods (class members).
	var Link;
	
	switch(Key) {
		case 'RotairDynamicEnums.RFQVendorStatus':
			Link = '<a href="RotairDynamicEnums.RFQVendorStatus.html">RFQVendorStatus</a>';
			break;
		default:
			Link = '***NOT FOUND***';
	} 

	return Link
}

function StoredProceduresLink(Key)
{
	var Link;
	
	switch(Key) {
		case 'CreateHistoryTrigger':
			Link = '<a href="History Trigger.html">History Trigger</a>';
			break;
		case 'GetFindTypeSQL':
			Link = '<a href="Get Find Type SQL.html">Get Find Type SQL</a>';
			break;
		case 'RestoreLatest':
			Link = '<a href="Restore Latest.html">Restore Latest</a>';
			break;
		case 'RestoreLatestToDev':
			Link = '<a href="Restore Latest.html", "ToDev">Restore Latest To Dev</a>';
			break;
		case 'RestoreLatestToTest':
			Link = '<a href="Restore Latest.html", "ToTest">Restore Latest To Test</a>';
			break;
		case 'ToggleCustom':
			Link = '<a href="Toggle Custom.html">Toggle Custom</a>';
			break;
		default:
			Link = '***NOT FOUND***';
	} 

	return Link
}

function TableLink(Key)
{
	var Link;
	var TablesDirectory = 'Tables';
	
	switch(Key) {
		case 'AppObjMetaDataHeader':
			Link = '<a href="' + TablesDirectory + '/AppObj_MetaDataHeader.png">AppObj_MetaDataHeader</a>';
			break;
		case 'Customer':
			Link = '<a href="' + TablesDirectory + '/Customer.png">Customer</a>';
			break;
		case 'EMP':
			Link = '<a href="' + TablesDirectory + '/EMP.png">EMP</a>';
			break;
		case 'Item':
			Link = '<a href="' + TablesDirectory + '/Item.png">Item</a>';
			break;
		case 'LaunchProcessMetadataHeader':
			Link = '<a href="' + TablesDirectory + '/LaunchProcess_MetadataHeader.png">LaunchProcess_MetadataHeader</a>';
			break;
		case 'MCTS':
			Link = '<a href="' + TablesDirectory + '/MCTS.png">MCTS</a>';
			break;
		case 'MMTS':
			Link = '<a href="' + TablesDirectory + '/MMTS.png">MMTS</a>';
			break;			
		case 'MSG_English':
			Link = '<a href="' + TablesDirectory + '/MSG_English.png">MSG_English</a>';
			break;
		case 'POD':
			Link = '<a href="' + TablesDirectory + '/POD.png">POD</a>';
			break;
		case 'POI':
			Link = '<a href="' + TablesDirectory + '/POI.png">POI</a>';
			break;
		case 'POM':
			Link = '<a href="' + TablesDirectory + '/POM.png">POM</a>';
			break;
		case 'QuoteDelivery':
			Link = '<a href="' + TablesDirectory + '/QuoteDelivery.png">QuoteDelivery</a>';
			break;
		case 'QuoteHeader':
			Link = '<a href="' + TablesDirectory + '/QuoteHeader.png">QuoteHeader</a>';
			break;
		case 'QuoteLine':
			Link = '<a href="' + TablesDirectory + '/QuoteLine.png">QuoteLine</a>';
			break;
		case 'QuotePrice':
			Link = '<a href="' + TablesDirectory + '/QuotePrice.png">QuotePrice</a>';
			break;
		case 'SalesOrder':
			Link = '<a href="' + TablesDirectory + '/SalesOrder.png">SalesOrder</a>';
			break;
		case 'SalesOrderDelivery':
			Link = '<a href="' + TablesDirectory + '/SalesOrderDelivery.png">SalesOrderDelivery</a>';
			break;
		case 'SalesOrderLine':
			Link = '<a href="' + TablesDirectory + '/SalesOrderLine.png">SalesOrderLine</a>';
			break;
		case 'Shipment':
			Link = '<a href="' + TablesDirectory + '/Shipment.png">Shipment</a>';
			break;
		case 'ShippingPicklist':
			Link = '<a href="' + TablesDirectory + '/ShippingPicklist.png">ShippingPicklist</a>';
			break;
		case 'ShippingPicklistDelivery':
			Link = '<a href="' + TablesDirectory + '/ShippingPicklistDelivery.png">ShippingPicklistDelivery</a>';
			break;
		case 'tblCAGECode':
			Link = '<a href="' + TablesDirectory + '/tblCAGECode.png">tblCAGECode</a>';
			break;
		case 'tblCertHeader':
			Link = '<a href="' + TablesDirectory + '/tblCertHeader.png">tblCertHeader</a>';
			break;
		case 'tblCertItemDetail':
			Link = '<a href="' + TablesDirectory + '/tblCertItemDetail.png">tblCertItemDetail</a>';
			break;
		case 'tblCertSignature':
			Link = '<a href="' + TablesDirectory + '/tblCertSignature.png">tblCertSignature</a>';
			break;
		case 'tblEmailType':
			Link = '<a href="' + TablesDirectory + '/tblEmailType.png">tblEmailType</a>';
			break;
		case 'tblEmailRecipient':
			Link = '<a href="' + TablesDirectory + '/tblEmailRecipient.png">tblEmailRecipient</a>';
			break;
		case 'tblExDPScreen':
			Link = '<a href="' + TablesDirectory + '/tblExDPScreen.png">tblExDPScreen</a>';
			break;
		case 'tblExLicense':
			Link = '<a href="' + TablesDirectory + '/tblExLicense.png">tblExLicense</a>';
			break;
		case 'tblExLicenseItem':
			Link = '<a href="' + TablesDirectory + '/tblExLicenseItem.png">tblExLicenseItem</a>';
			break;
		case 'tblExLicenseTrans':
			Link = '<a href="' + TablesDirectory + '/tblExLicenseTrans.png">tblExLicenseTrans</a>';
			break;
		case 'tblItemSupplemental':
			Link = '<a href="' + TablesDirectory + '/tblItemSupplemental.png">tblItemSupplemental</a>';
			break;
		case 'tblItemUseClass':
			Link = '<a href="' + TablesDirectory + '/tblItemUseClass.png">tblItemUseClass</a>';
			break;
		case 'tblMMTS_Condition':
			Link = '<a href="' + TablesDirectory + '/tblMMTS_Condition.png">tblMMTS_Condition</a>';
			break;
		case 'tblPhrase':
			Link = '<a href="' + TablesDirectory + '/tblPhrase.png">tblPhrase</a>';
			break;
		case 'tblPhraseForm':
			Link = '<a href="' + TablesDirectory + '/tblPhraseForm.png">tblPhraseForm</a>';
			break;
		case 'tblPhraseUsage':
			Link = '<a href="' + TablesDirectory + '/tblPhraseUsage.png">tblPhraseUsage</a>';
			break;
		case 'tblPMAItem':
			Link = '<a href="' + TablesDirectory + '/tblPMAItem.png">tblPMAItem</a>';
			break;
		case 'tblReport':
			Link = '<a href="' + TablesDirectory + '/tblReport.png">tblReport</a>';
			break;
		case 'tblReportColumn':
			Link = '<a href="' + TablesDirectory + '/tblReportColumn.png">tblReportColumn</a>';
			break;
		case 'tblReportColumnText':
			Link = '<a href="' + TablesDirectory + '/tblReportColumnText.png">tblReportColumnText</a>';
			break;
		case 'tblReportDetail':
			Link = '<a href="' + TablesDirectory + '/tblReportDetail.png">tblReportDetail</a>';
			break;
		case 'tblReportFooter':
			Link = '<a href="' + TablesDirectory + '/tblReportFooter.png">tblReportFooter</a>';
			break;
		case 'tblReportHeader':
			Link = '<a href="' + TablesDirectory + '/tblReportHeader.png">tblReportHeader</a>';
			break;
		case 'tblReportHorizontalRule':
			Link = '<a href="' + TablesDirectory + '/tblReportHorizontalRule.png">tblReportHorizontalRule</a>';
			break;
		case 'tblReportTable':
			Link = '<a href="' + TablesDirectory + '/tblReportTable.png">tblReportTable</a>';
			break;
		case 'tblRFQMaster':
			Link = '<a href="' + TablesDirectory + '/tblRFQMaster.png">tblRFQMaster</a>';
			break;
		case 'tblRFQItem':
			Link = '<a href="' + TablesDirectory + '/tblRFQItem.png">tblRFQItem</a>';
			break;
		case 'tblRFQItemQty':
			Link = '<a href="' + TablesDirectory + '/tblRFQItemQty.png">tblRFQItemQty</a>';
			break;
		case 'tblRFQVendor':
			Link = '<a href="' + TablesDirectory + '/tblRFQVendor.png">tblRFQVendor</a>';
			break;
		case 'tblRFQVendorQuote':
			Link = '<a href="' + TablesDirectory + '/tblRFQVendorQuote.png">tblRFQVendorQuote</a>';
			break;
		case 'tblRFQVendorCharge':
			Link = '<a href="' + TablesDirectory + '/tblRFQVendorCharge.png">tblRFQVendorCharge</a>';
			break;
		case 'tblRFQImaging':
			Link = '<a href="' + TablesDirectory + '/tblRFQImaging.png">tblRFQImaging</a>';
			break;
		case 'tblRFQsEmailed':
			Link = '<a href="' + TablesDirectory + '/tblRFQsEmailed.png">tblRFQsEmailed</a>';
			break;
		case 'tblRI_Note':
			Link = '<a href="' + TablesDirectory + '/tblRI_Note.png">tblRI_Note</a>';
			break;
		case 'tblRI_NoteType':
			Link = '<a href="' + TablesDirectory + '/tblRI_NoteType.png">tblRI_NoteType</a>';
			break;
		case 'tblSOMExportData':
			Link = '<a href="' + TablesDirectory + '/tblSOMExportData.png">tblSOMExportData</a>';
			break;
		case 'tblsuppman':
			Link = '<a href="' + TablesDirectory + '/tblsuppman.png">tblsuppman</a>';
			break;
		case 'tblSuppManTranslate':
			Link = '<a href="' + TablesDirectory + '/tblSuppManTranslate.png">tblSuppManTranslate</a>';
			break;
		case 'VEN':
			Link = '<a href="' + TablesDirectory + '/VEN.png">VEN</a>';
			break;
		case 'viewRFQImaging':
			Link = '<a href="' + TablesDirectory + '/viewRFQImaging.png">viewRFQImaging</a>';
			break;
		case 'WKO':
			Link = '<a href="' + TablesDirectory + '/WKO.png">WKO</a>';
			break;
		case 'WOO':
			Link = '<a href="' + TablesDirectory + '/WOO.png">WOO</a>';
			break;
		default:
			Link = '***NOT FOUND***';
	} 

	return Link
}

function IsLinksLoaded()
{
	alert('Links Is Loaded');
}
