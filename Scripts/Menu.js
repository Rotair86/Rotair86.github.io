//Author - John Maher
function Menu(SourcePage)
{
	//Menu on the left side of the page.
	var txt='';
	//window.alert(SourcePage);
	txt =  		'';
	txt = txt + '';
	txt = txt +    	'<div class="searchcontainer">';
	txt = txt + '';
	txt = txt + 	   	'<form id="SearchForm" action="http://social.msdn.microsoft.com/search/en-us" method="get" style="margin: 0pt; padding: 0pt;" onsubmit="return checkSearchBox()">';
	txt = txt + 		   	'<div class="searchBoxContainer" style="">';
	txt = txt +					'<table class="searchBox" border="0" cellpadding="0" cellspacing="0">';
	txt = txt +						'<tbody>';
	txt = txt +							'<tr>';
	txt = txt +								'<td class="searchTextBoxTd">';
	txt = txt +									'<input value="Search MSDN with Bing" id="SearchInput" maxlength="200" class="searchTextBox" name="query" type="text">';
	txt = txt +								'</td>';
	txt = txt +								'<td class="searchButtonTd">';
	txt = txt +									'<input src="Graphics/Search.gif" style="position: relative;" title="Search " type="image">';
	txt = txt +								'</td>';
	txt = txt +							'</tr>';
	txt = txt +						'</tbody>';
	txt = txt +					'</table>';
	txt = txt +				'</div>';
	txt = txt +			'</form>';
	txt = txt + '';
	txt = txt +			'<script type="text/javascript">';
	txt = txt + '';
	txt = txt +				'if (!MTPS) var MTPS = {};';
	txt = txt +				'if (!MTPS.Watermarks) MTPS.Watermarks = {};';
	txt = txt +				'MTPS.Watermarks.SearchInput = {';
	txt = txt +					'"control": "SearchInput",';
	txt = txt +					'"defaultValue": "Search MSDN with Bing",';
	txt = txt +					'"defaultCSS": "searchTextBox",';
	txt = txt +					'"focusCSS": "searchTextBoxTrue"';
	txt = txt +				'};';
	txt = txt +				'function checkSearchBox() {';
	txt = txt +					'if (document.getElementById("SearchInput").value == MTPS.Watermarks.SearchInput.defaultValue) {';
	txt = txt +						'document.getElementById("SearchInput").value = "";';
	txt = txt +					'}';
	txt = txt +				'}';
	txt = txt + '';
	txt = txt +			'</script>';
	txt = txt +		'</div>';
	txt = txt + '';
	txt = txt +		'<div class="navcontainer">';
	txt = txt + '';
	txt = txt +			'<div class="nav">';
	txt = txt + '';
	txt = txt +				'<div id="tocnav">';
	txt = txt + '';
	txt = txt +					'<div class="toclevel0 ancestry">';
	txt = txt + '';
	//End of opening tags.
	txt = txt +						'<div class="clip5x9 nav_root">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_bullet_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot">';
	//txt = txt +							'<a href="http://msdn.microsoft.com/en-us/library/ms123401.aspx">MSDN Library</a><FONT style="BACKGROUND-COLOR: yellow">NEW MENU</FONT>';
	txt = txt +							'<a href="http://msdn.microsoft.com/en-us/library/ms123401.aspx">MSDN Library</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	txt = txt +						'<div class="clip5x9 nav_arrows">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_uparrow_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot">';
	txt = txt +							'<a href="http://msdn.microsoft.com/en-us/library/ff361664%28v=vs.110%29.aspx">.NET Development</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	txt = txt +						'<div class="clip5x9 nav_arrows">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_uparrow_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot">';
	txt = txt +							'<a href="http://msdn.microsoft.com/en-us/library/w0x726c2.aspx">.NET Framework 4</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	txt = txt +						'<div class="clip5x9 nav_arrows">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_uparrow_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot">';
	txt = txt +							'<a href="http://msdn.microsoft.com/en-us/library/gg145045.aspx">.NET Framework Class Library</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	//Installation Requirements
	txt = txt +						'<div class="clip5x9 nav_root">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_bullet_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot';
	if (SourcePage[0] == 'InstallRequirements') txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							'<a href="Installation Requirements.html">Installation Requirements</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	//ERP Namespaces
	txt = txt +						'<div class="clip5x9 nav_root">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_bullet_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot';
	if (SourcePage[0] == 'TopLevel') txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							'<a href="ERP Custom Namespaces.html">ERP Namespaces</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	//Custom Base Classes
	txt = txt +						'<div class="clip5x9 nav_arrows">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_uparrow_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot';
	if (CurrentFocus(SourcePage, "CustomBase", 0)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							'<a href="Custom Base Classes.html">Custom Base Classes</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[0] == "CustomBase") txt = txt + MenuCustomBase(SourcePage)
	//Custom Classes
	txt = txt +						'<div class="clip5x9 nav_arrows">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_uparrow_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot';
	if (CurrentFocus(SourcePage, "CustomClasses", 0)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							'<a href="Custom Classes.html">Custom Classes</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[0] == "CustomClasses") txt = txt + MenuCustomClasses(SourcePage)
	//Custom Controls
	txt = txt +						'<div class="clip5x9 nav_arrows">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_uparrow_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot';
	if (CurrentFocus(SourcePage, "CustomControls", 0)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							'<a href="Custom Controls.html">Custom Controls</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[0] == "CustomControls") txt = txt + MenuCustomControls(SourcePage)
	//Custom Derived from imsAppObject 
	txt = txt +						'<div class="clip5x9 nav_arrows">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_uparrow_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot';
	if (CurrentFocus(SourcePage, "CustomimsAppObjects", 0)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							'<a href="Custom Classes Derived imsAppObject.html">Custom Derived from imsAppObject</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[0] == "CustomimsAppObjects") txt = txt + MenuCustomimsAppObjects(SourcePage)
	//Custom Derived from rotAppObject 
	txt = txt +						'<div class="clip5x9 nav_arrows">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_uparrow_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot';
	if (CurrentFocus(SourcePage, "CustomrotAppObjects", 0)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							'<a href="Custom Classes Derived rotAppObject.html">Custom Derived from rotAppObject</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[0] == "CustomrotAppObjects") txt = txt + MenuCustomrotAppObjects(SourcePage)
	//Custom Forms Derived from imsForm
	txt = txt +						'<div class="clip5x9 nav_arrows">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_uparrow_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot';
	if (CurrentFocus(SourcePage, "CustomimsForms", 0)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							'<a href="Custom Forms Derived from imsForms.html">Custom Forms Derived from imsForm</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[0] == "CustomimsForms") txt = txt + MenuCustomimsForms(SourcePage)
	//Customized Intuitive imsAppObjects 
	txt = txt +						'<div class="clip5x9 nav_arrows">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_uparrow_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot';
	if (CurrentFocus(SourcePage, "CustomizedAppObjects", 0)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							'<a href="Customized Intuitive AppObjects.html">Customized Intuitive imsAppObjects</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[0] == "CustomizedAppObjects") txt = txt + MenuCustomizedAppObjects(SourcePage)
	//Customized Intuitive imsForms
	txt = txt +						'<div class="clip5x9 nav_arrows">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_uparrow_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot';
	if (CurrentFocus(SourcePage, "CustomizedimsForms", 0)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							'<a href="Customized Intuitive Forms.html">Customized Intuitive imsForms</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[0] == "CustomizedimsForms") txt = txt + MenuCustomizedimsForms(SourcePage)
	//ims Base Classes
	txt = txt +						'<div class="clip5x9 nav_arrows">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_uparrow_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot';
	if (CurrentFocus(SourcePage, "imsBase", 0)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							'<a href="ims Base Classes.html">ims Base Classes</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[0] == "imsBase") txt = txt + MenuImsBaseClasses(SourcePage)
	//Printing Classes
	txt = txt +						'<div class="clip5x9 nav_arrows">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_uparrow_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot';
	if (CurrentFocus(SourcePage, "PrintingClasses", 0)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							'<a href="Printing Classes.html">Printing Classes</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[0] == "PrintingClasses") txt = txt + MenuPrintingClasses(SourcePage)
	//Windows Custom Dialog Forms
	txt = txt +						'<div class="clip5x9 nav_arrows">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_uparrow_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot';
	if (CurrentFocus(SourcePage, "CustomWindowsDialogs", 0)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							'<a href="Windows Custom Dialog Forms.html">Windows Custom Dialog Forms</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[0] == "CustomWindowsDialogs") txt = txt + MenuCustomWindowsDialogs(SourcePage)
	//External Programs
	txt = txt +						'<div class="clip5x9 nav_root">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_bullet_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot';
	if (CurrentFocus(SourcePage, "ExternalPrograms", 0)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							'<a href="External Programs.html">External Programs</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[0] == "ExternalPrograms") txt = txt + MenuExternalPrograms(SourcePage)
	//Stored Procedures
	txt = txt +						'<div class="clip5x9 nav_root">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_bullet_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="nav_div_currentroot';
	if (CurrentFocus(SourcePage, "StoredProcedures", 0)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							'<a href="Stored Procedures.html">Stored Procedures</a>';
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[0] == "StoredProcedures") txt = txt + MenuStoredProcedures(SourcePage)
	//End of groups.  Finish the closing tags.
	txt = txt +					'</div>';
	txt = txt + '';
	txt = txt +				'</div>';
	txt = txt + '';
	txt = txt +			'</div>';
	txt = txt + '';
	txt = txt +		'</div>';

	return txt;
}

function MenuCustomBase(SourcePage) 
{
	var txt;
	//rotAppObject
	txt = '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairObject", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairObject") + ' (deprecated)';
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairObject")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "rotAppObject", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("rotAppObject");
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "rotAppLockingObject", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("rotAppLockingObject");
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "rotAppObjectCollection", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("rotAppObjectCollection");
		txt = txt +						'</div>';
		txt = txt +					'</div>';
		}
	txt = txt + '';

	return txt;

}

function MenuCustomClasses(SourcePage)
{
	var txt;
	//RotairDataAccess
	txt = '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairDataAccess", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairDataAccess");
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[1] == "RotairDataAccess")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (SourcePage[2] == 'CageCode') txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.CageCode");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "CageCode")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "DuplicateExists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.CageCode.DuplicateExists.html">DuplicateExists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Exists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.CageCode.Exists.html">Exists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastDBError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.CageCode.LastDBError.html">LastDBError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.CageCode.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "StoredProcedureReturnCode", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.CageCode.StoredProcedureReturnCode.html">StoredProcedureReturnCode</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Update", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.CageCode.Update.html">Update</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "Certificate", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.Certificate");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Certificate")
			{		
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CertificateBySalesOrder", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Certificate.CertificateBySalesOrder.html">CertificateBySalesOrder</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Header", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Certificate.Header.html">Header</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "Header")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Delete", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Certificate.Header.Delete.html">Delete</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Exists", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Certificate.Header.Exists.html">Exists</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "ItemDetail", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Certificate.Header.ItemDetail.html">ItemDetail</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				if (SourcePage[4] == "ItemDetail")
					{		
					txt = txt +					'<div class="toclevel2">';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Delete", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Certificate.Header.ItemDetail.Delete.html">Delete</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Exists", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Certificate.Header.ItemDetail.Exists.html">Exists</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Load", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Certificate.Header.ItemDetail.Load.html">Load</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "LoadFromParentList", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Certificate.Header.ItemDetail.LoadFromParentList.html">LoadFromParentList</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "LoadFromParentListWithSerialNumbers", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Certificate.Header.ItemDetail.LoadFromParentListWithSerialNumbers.html">LoadFromParentListWithSerialNumbers</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Save", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Certificate.Header.ItemDetail.Save.html">Save</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +					'</div>';
					}		
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Load", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Certificate.Header.Load.html">Load</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LoadListForInvoiceID", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Certificate.Header.LoadListForInvoiceID.html">LoadListForInvoiceID</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LoadListForSalesOrderID", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Certificate.Header.LoadListForSalesOrderID.html">LoadListForSalesOrderID</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "NextCertificateNumber", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Certificate.Header.NextCertificateNumber.html">NextCertificateNumber</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Save", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Certificate.Header.Save.html">Save</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastDBError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Certificate.LastDBError.html">LastDBError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Signature", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Certificate.Signature.html">Signature</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "Signature")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "DefaultSigner", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Certificate.Signature.DefaultSigner.html">DefaultSigner</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Delete", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Certificate.Signature.Delete.html">Delete</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Exists", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Certificate.Signature.Exists.html">Exists</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Load", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Certificate.Signature.Load.html">Load</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Save", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Certificate.Signature.Save.html">Save</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "StoredProcedureReturnCode", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Certificate.StoredProcedureReturnCode.html">StoredProcedureReturnCode</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}		
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "Customer", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.Customer");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Customer")
			{		
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Exists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Customer.Exists.html">Exists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Customer.ID.html">ID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "IDBySalesOrderID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Customer.IDBySalesOrderID.html">IDBySalesOrderID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "IsGovernment", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Customer.IsGovernment.html">IsGovernment</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Customer.LastError.html">LastError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ListAddress", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Customer.ListAddress.html">ListAddress</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ListName", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Customer.ListName.html">ListName</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NameByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Customer.NameByID.html">NameByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NoQuote", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Customer.NoQuote.html">NoQuote</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "RecordID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Customer.RecordID.html">RecordID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "RecordIDBySalesOrderID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Customer.RecordIDBySalesOrderID.html">RecordIDBySalesOrderID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Type", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Customer.Type.html">Type</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}		
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (SourcePage[2] == 'DAConstants') txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.DAConstants");
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="toclevel';
		if (SourcePage[2] == 'DataBase') txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.DataBase");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "DataBase")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Production", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.DataBase.Production.html">Production</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "RemoveBrackets", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.DataBase.RemoveBrackets.html">RemoveBrackets</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "WriteToErrorTable", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.DataBase.WriteToErrorTable.html">WriteToErrorTable</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}			
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "DataSetCustom", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.DataSetCustom");
		txt = txt +						'</div>';
		if (SourcePage[2] == "DataSetCustom")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Bookings", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.DataSetCustom.Bookings.html">Bookings</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Countries", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.DataSetCustom.Countries.html">Countries</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "Countries")
				{
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Countries", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Countries.Countries.html">Countries</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "CountryListByCustomer", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Countries.CountryListByCustomer.html">CountryListByCustomer</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "CountryListByVendor", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Countries.CountryListByVendor.html">CountryListByVendor</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FromMMTS", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.DataSetCustom.FromMMTS.html">FromMMTS</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Generic", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.DataSetCustom.Generic.html">Generic</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ManufacturedToInspect", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.DataSetCustom.ManufacturedToInspect.html">ManufacturedToInspect</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "PurchasedToInspect", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.DataSetCustom.PurchasedToInspect.html">PurchasedToInspect</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SalesOrderQuantities", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.DataSetCustom.SalesOrderQuantities.html">SalesOrderQuantities</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SupplierManufacturerTranslate", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.DataSetCustom.SupplierManufacturerTranslate.html">SupplierManufacturerTranslate</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "WIP", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.DataSetCustom.WIP.html">WIP</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "WIPIntuitive", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.DataSetCustom.WIPIntuitive.html">WIPIntuitive</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (SourcePage[2] == 'DBConstants') txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.DBConstants");
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "Employee", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.Employee");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Employee")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CurrentUserID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Employee.CurrentUserID.html">CurrentUserID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CurrentUserRecordID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Employee.CurrentUserRecordID.html">CurrentUserRecordID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "EMailByLogon", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Employee.EMailByLogon.html">EMailByLogon</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Employee.LastError.html">LastError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NameByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Employee.NameByID.html">NameByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Verify", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Employee.Verify.html">Verify</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "ExportLicense", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.ExportLicense");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "ExportLicense")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Delete", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.ExportLicense.Delete.html">Delete</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Exists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.ExportLicense.Exists.html">Exists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "HasAppliedForExportLicense", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.ExportLicense.HasAppliedForExportLicense.html">HasAppliedForExportLicense</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "HasCustomerExportLicense", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.ExportLicense.HasCustomerExportLicense.html">HasCustomerExportLicense</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Item", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.ExportLicense.Item.html">Item</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "Item")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Delete", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.ExportLicense.Item.Delete.html">Delete</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Exists", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.ExportLicense.Item.Exists.html">Exists</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Load", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.ExportLicense.Item.Load.html">Load</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Save", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.ExportLicense.Item.Save.html">Save</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.ExportLicense.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.ExportLicense.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Transaction", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.ExportLicense.Transaction.html">Transaction</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "Transaction")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Delete", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.ExportLicense.Transaction.Delete.html">Delete</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Exists", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.ExportLicense.Transaction.Exists.html">Exists</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Load", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.ExportLicense.Transaction.Load.html">Load</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Save", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.ExportLicense.Transaction.Save.html">Save</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "Item", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.Item");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Item")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "List", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Item.List.html">List</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NameByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Item.NameByID.html">NameByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "StockValue", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Item.StockValue.html">StockValue</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "UseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Item.UseClass.html">UseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "UseClass")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "IsUseClassDetermined", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Item.UseClass.IsUseClassDetermined.html">IsUseClassDetermined</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "ItemType", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Item.UseClass.ItemType.html">ItemType</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LastError", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Item.UseClass.LastError.html">LastError</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "UndeterminedItems", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Item.UseClass.UndeterminedItems.html">UndeterminedItems</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'Locking', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.Locking");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Locking")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddLockExclusive", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Locking.AddLockExclusive.html">AddLockExclusive</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddLockIntent", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Locking.AddLockIntent.html">AddLockIntent</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "IsLocked", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Locking.IsLocked.html">IsLocked</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "RemoveLock", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Locking.RemoveLock.html">RemoveLock</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "UnlockIfOwned", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Locking.UnlockIfOwned.html">UnlockIfOwned</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "MCTS", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.MCTS");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "MCTS")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AircraftList", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.MCTS.AircraftList.html">AircraftList</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CertificateList", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.MCTS.CertificateList.html">CertificateList</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Condition", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.MCTS.Condition.html">Condition</a>';
			txt = txt +						'</div>';
			if (SourcePage[3] == "Condition")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Condition", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.MCTS.Condition.Condition.html">Condition</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "CodeListForRFQ", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.MCTS.Condition.CodeListForRFQ.html">CodeListForRFQ</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "CodeList", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.MCTS.Condition.CodeList.html">CodeList</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "DescriptionList", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.MCTS.Condition.DescriptionList.html">DescriptionList</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LookupCodeByDescription", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.MCTS.Condition.LookupCodeByDescription.html">LookupCodeByDescription</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LookupDescriptionByCode", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.MCTS.Condition.LookupDescriptionByCode.html">LookupDescriptionByCode</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "MaterialTypeList", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.MCTS.MaterialTypeList.html">MaterialTypeList</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "MMTS", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.MMTS");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "MMTS")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AircraftList", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.MMTS.AircraftList.html">AircraftList</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CertificateList", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.MMTS.CertificateList.html">CertificateList</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Condition", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.MMTS.Condition.html">Condition</a>';
			txt = txt +						'</div>';
			if (SourcePage[3] == "Condition")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Condition", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.MMTS.Condition.Condition.html">Condition</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "CodeListForRFQ", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.MMTS.Condition.CodeListForRFQ.html">CodeListForRFQ</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "CodeList", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.MMTS.Condition.CodeList.html">CodeList</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "DescriptionList", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.MMTS.Condition.DescriptionList.html">DescriptionList</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LookupCodeByDescription", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.MMTS.Condition.LookupCodeByDescription.html">LookupCodeByDescription</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LookupDescriptionByCode", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.MMTS.Condition.LookupDescriptionByCode.html">LookupDescriptionByCode</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "MaterialTypeList", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.MCTS.MaterialTypeList.html">MaterialTypeList</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "NoteType", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.NoteType");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "NoteType")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ChildPOInformationByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.NoteType.ChildPOInformationByID.html">ChildPOInformationByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ChildSOInformationByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.NoteType.ChildSOInformationByID.html">ChildSOInformationByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Delete", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.NoteType.Delete.html">Delete</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetRI_NoteChildDescription", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.NoteType.GetRI_NoteChildDescription.html">GetRI_NoteChildDescription</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetRI_NoteParentDescription", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.NoteType.GetRI_NoteParentDescription.html">GetRI_NoteParentDescription</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastDBError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.NoteType.LastDBError.html">LastDBError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.NoteType.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Note", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.NoteType.Note.html">Note</a>';
			txt = txt +						'</div>';
			if (SourcePage[3] == "Note")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Delete", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.NoteType.Note.Delete.html">Delete</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LastNote", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.NoteType.Note.LastNote.html">LastNote</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Load", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.NoteType.Note.Load.html">Load</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "NoteCount", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.NoteType.Note.NoteCount.html">NoteCount</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "NoteListByTypeAndParent", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.NoteType.Note.NoteListByTypeAndParent.html">NoteListByTypeAndParent</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "NoteListByTypeParentAndChild", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.NoteType.Note.NoteListByTypeParentAndChild.html">NoteListByTypeParentAndChild</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "NoteListWithChildrenByTypeAndParent", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.NoteType.Note.NoteListWithChildrenByTypeAndParent.html">NoteListWithChildrenByTypeAndParent</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Save", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.NoteType.Note.Save.html">Save</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.NoteType.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "StoredProcedureReturnCode", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.NoteType.StoredProcedureReturnCode.html">StoredProcedureReturnCode</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "PhraseForm", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.PhraseForm");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "PhraseForm")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Delete", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.PhraseForm.Delete.html">Delete</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Exists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.PhraseForm.Exists.html">Exists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FormIDByName", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.PhraseForm.FormIDByName.html">FormIDByName</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastDBError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.PhraseForm.LastDBError.html">LastDBError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.PhraseForm.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Phrase", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.PhraseForm.Phrase.html">Phrase</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "Phrase")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "AddPhrase", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.PhraseForm.Phrase.AddPhrase.html">AddPhrase</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Delete", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.PhraseForm.Phrase.Delete.html">Delete</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Exists", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.PhraseForm.Phrase.Exists.html">Exists</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LastDBError", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.PhraseForm.Phrase.LastDBError.html">LastDBError</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Load", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.PhraseForm.Phrase.Load.html">Load</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LoadPhraseList", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.PhraseForm.Phrase.LoadPhraseList.html">LoadPhraseList</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Save", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.PhraseForm.Phrase.Save.html">Save</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "StoredProcedureReturnCode", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.PhraseForm.Phrase.StoredProcedureReturnCode.html">StoredProcedureReturnCode</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.PhraseForm.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "StoredProcedureReturnCode", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.PhraseForm.StoredProcedureReturnCode.html">StoredProcedureReturnCode</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "PMA", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.PMA");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "PMA")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Item", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.PMA.Item.html">Item</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "Item")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "IsPMA_Approved", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.PMA.Item.IsPMA_Approved.html">IsPMA_Approved</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.PMA.LastError.html">LastError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "PurchaseOrder", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.PurchaseOrder");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "PurchaseOrder")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Exists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.PurchaseOrder.Exists.html">Exists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Line", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.PurchaseOrder.Line.html">Line</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "Line")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "ByVendor", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.PurchaseOrder.Line.ByVendor.html">ByVendor</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "OpenPurchaseOrders", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.PurchaseOrder.Line.OpenPurchaseOrders.html">OpenPurchaseOrders</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "RecordIDByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.PurchaseOrder.RecordIDByID.html">RecordIDByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "VendorRecordIDByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.PurchaseOrder.VendorRecordIDByID.html">VendorRecordIDByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "Quote", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.Quote");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Quote")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Header", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Quote.Header.html">Header</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "Header")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "BuyerInfoByCustomer", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Quote.Header.BuyerInfoByCustomer.html">BuyerInfoByCustomer</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "CancelOpenQuotes", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Quote.Header.CancelOpenQuotes.html">CancelOpenQuotes</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "CustomerQuotes", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Quote.Header.CustomerQuotes.html">CustomerQuotes</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Line", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Quote.Header.Line.html">Line</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				if (SourcePage[4] == "Line")
					{		
					txt = txt +					'<div class="toclevel2">';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "ConditionByQuoteLineID", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Quote.Header.Line.ConditionByQuoteLineID.html">ConditionByQuoteLineID</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Delivery", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Quote.Header.Line.Delivery.html">Delivery</a>';
					txt = txt +						'</div>';
					if (SourcePage[5] == "Delivery")
						{		
						txt = txt +					'<div class="toclevel2">';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "LineNumbersAndQuantitiesByQuoteID", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.Quote.Header.Line.Delivery.LineNumbersAndQuantitiesByQuoteID.html">LineNumbersAndQuantitiesByQuoteID</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +					'</div>';
						}		
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "NumbersByQuoteID", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Quote.Header.Line.NumbersByQuoteID.html">NumbersByQuoteID</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Price", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Quote.Header.Line.Price.html">Price</a>';
					txt = txt +						'</div>';
					if (SourcePage[5] == "Price")
						{		
						txt = txt +					'<div class="toclevel2">';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "PriceByQuoteIDAndQuoteLine", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.Quote.Header.Line.Price.PriceByQuoteIDAndQuoteLine.html">PriceByQuoteIDAndQuoteLine</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +					'</div>';
						}		
					txt = txt + '';	
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "SalesOrderLineRecordID", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Quote.Header.Line.SalesOrderLineRecordID.html">SalesOrderLineRecordID</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +					'</div>';
					}		
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "QuoteIDAndLineByQLRecordID", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Quote.Header.QuoteIDAndLineByQLRecordID.html">QuoteIDAndLineByQLRecordID</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "QuoteIDQLRecordID", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Quote.Header.QuoteIDQLRecordID.html">QuoteIDQLRecordID</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "QuoteIDsByCustomer", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Quote.Header.QuoteIDsByCustomer.html">QuoteIDsByCustomer</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "QuotePhraseByID", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Quote.Header.QuotePhraseByID.html">QuotePhraseByID</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "SaveQuotePhrase", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Quote.Header.SaveQuotePhrase.html">SaveQuotePhrase</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ItemInformation", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Item.ItemInformation.html">ItemInformation</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Quote.LastError.html">LastError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "Report", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.Report");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Report")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Delete", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Report.Delete.html">Delete</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Exists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Report.Exists.html">Exists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Footer", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Report.Footer.html">Footer</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "Footer")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Delete", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Footer.Delete.html">Delete</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LastError", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Footer.LastError.html">LastError</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Load", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Footer.Load.html">Load</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LoadList", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Footer.LoadList.html">LoadList</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Save", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Footer.Save.html">Save</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Header", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Report.Header.html">Header</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "Header")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Delete", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Header.Delete.html">Delete</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LastError", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Header.LastError.html">LastError</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Load", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Header.Load.html">Load</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LoadList", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Header.LoadList.html">LoadList</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Save", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Header.Save.html">Save</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lastError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Report.lastError.html">lastError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Report.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LoadList", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Report.LoadList.html">LoadList</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Report.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Table", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Report.Table.html">Table</a>';
			txt = txt +						'</div>';
			if (SourcePage[3] == "Table")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Column", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Table.Column.html">Column</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				if (SourcePage[4] == "Column")
					{		
					txt = txt +					'<div class="toclevel2">';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Delete", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Report.Table.Column.Delete.html">Delete</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Exists", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Report.Table.Column.Exists.html">Exists</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "LastError", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Report.Table.Column.LastError.html">LastError</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Load", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Report.Table.Column.Load.html">Load</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "LoadList", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Report.Table.Column.LoadList.html">LoadList</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Save", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Report.Table.Column.Save.html">Save</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +					'</div>';
					}		
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Detail", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Table.Detail.html">Detail</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				if (SourcePage[4] == "Detail")
					{		
					txt = txt +					'<div class="toclevel2">';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Delete", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Report.Table.Detail.Delete.html">Delete</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Exists", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Report.Table.Detail.Exists.html">Exists</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "LastError", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Report.Table.Detail.LastError.html">LastError</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Load", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Report.Table.Detail.Load.html">Load</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "LoadList", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Report.Table.Detail.LoadList.html">LoadList</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Save", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.Report.Table.Detail.Save.html">Save</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +					'</div>';
					}		
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Delete", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Table.Delete.html">Delete</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LastError", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Table.LastError.html">LastError</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Load", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Table.Load.html">Load</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LoadList", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Table.LoadList.html">LoadList</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Save", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Report.Table.Save.html">Save</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "RFQ", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.RFQ");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "RFQ")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Imaging", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.RFQ.Imaging.html">Imaging</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "Imaging")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Exists", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.RFQ.Imaging.Exists.html">Exists</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "FilePathByKey", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.RFQ.Imaging.FilePathByKey.html">FilePathByKey</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LastDBError", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.RFQ.Imaging.LastDBError.html">LastDBError</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Load", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.RFQ.Imaging.Load.html">Load</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "RFQImageList", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.RFQ.Imaging.RFQImageList.html">RFQImageList</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "RFQImageListByItem", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.RFQ.Imaging.RFQImageListByItem.html">RFQImageListByItem</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "RFQImageListByRFQ", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.RFQ.Imaging.RFQImageListByRFQ.html">RFQImageListByRFQ</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "RFQImageListByVendor", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.RFQ.Imaging.RFQImageListByVendor.html">RFQImageListByVendor</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Save", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.RFQ.Imaging.Save.html">Save</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Master", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.RFQ.Master.html">Master</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "Master")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Exists", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Exists.html">Exists</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Load", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Load.html">Load</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Item", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.html">Item</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				if (SourcePage[4] == "Item")
					{		
					txt = txt +					'<div class="toclevel2">';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "ItemByRFQ", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.ItemByRFQ.html">ItemByRFQ</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "ItemList", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.ItemList.html">ItemList</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "ItemQty", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.ItemQty.html">ItemQty</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					if (SourcePage[5] == "ItemQty")
						{		
						txt = txt +					'<div class="toclevel2">';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "Load", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.ItemQty.Load.html">Load</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +					'</div>';
						}		
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "LineNumberByItemID", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.LineNumberByItemID.html">LineNumberByItemID</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Load", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Load.html">Load</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Vendor", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.html">Vendor</a>';
					txt = txt +						'</div>';
					if (SourcePage[5] == "Vendor")
						{		
						txt = txt +					'<div class="toclevel2">';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "AddVendorIfNeeded", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.AddVendorIfNeeded.html">AddVendorIfNeeded</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "ByVendor", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.ByVendor.html">ByVendor</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "Exists", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.Exists.html">Exists</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "Load", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.Load.html">Load</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "OpenByVendor", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.OpenByVendor.html">OpenByVendor</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "SetStatus", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.SetStatus.html">SetStatus</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "SetStatusAll", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.SetStatusAll.html">SetStatusAll</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "VendorByRFQ", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.VendorByRFQ.html">VendorByRFQ</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "VendorCharge", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.VendorCharge.html">VendorCharge</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						if (SourcePage[6] == "VendorCharge")
							{		
							txt = txt +					'<div class="toclevel2">';
							txt = txt + '';
							txt = txt +						'<div class="clip13x9 nav_dots_current">';
							txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
							txt = txt +						'</div>';
							txt = txt +						'<div class="toclevel';
							if (CurrentFocus(SourcePage, "Load", 7)) txt = txt + ' current'
							txt = txt + '">';
							txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.VendorCharge.Load.html">Load</a>';
							txt = txt +						'</div>';
							txt = txt + '';
							txt = txt +						'<div class="clip13x9 nav_dots_current">';
							txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
							txt = txt +						'</div>';
							txt = txt +						'<div class="toclevel';
							if (CurrentFocus(SourcePage, "Save", 7)) txt = txt + ' current'
							txt = txt + '">';
							txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.VendorCharge.Save.html">Save</a>';
							txt = txt +						'</div>';
							txt = txt + '';
							txt = txt +					'</div>';
							}		
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "VendorByRFQandItem", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.VendorByRFQandItem.html">VendorByRFQandItem</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "VendorList", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.VendorList.html">VendorList</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "VendorListActive", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.VendorListActive.html">VendorListActive</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "VendorQuote", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.VendorQuote.html">VendorQuote</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						if (SourcePage[6] == "VendorQuote")
							{		
							txt = txt +					'<div class="toclevel2">';
							txt = txt + '';
							txt = txt +						'<div class="clip13x9 nav_dots_current">';
							txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
							txt = txt +						'</div>';
							txt = txt +						'<div class="toclevel';
							if (CurrentFocus(SourcePage, "GetNextIteration", 7)) txt = txt + ' current'
							txt = txt + '">';
							txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.VendorQuote.GetNextIteration.html">GetNextIteration</a>';
							txt = txt +						'</div>';
							txt = txt + '';
							txt = txt +						'<div class="clip13x9 nav_dots_current">';
							txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
							txt = txt +						'</div>';
							txt = txt +						'<div class="toclevel';
							if (CurrentFocus(SourcePage, "Load", 7)) txt = txt + ' current'
							txt = txt + '">';
							txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.VendorQuote.Load.html">Load</a>';
							txt = txt +						'</div>';
							txt = txt + '';
							txt = txt +						'<div class="clip13x9 nav_dots_current">';
							txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
							txt = txt +						'</div>';
							txt = txt +						'<div class="toclevel';
							if (CurrentFocus(SourcePage, "Save", 7)) txt = txt + ' current'
							txt = txt + '">';
							txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Item.Vendor.VendorQuote.Save.html">Save</a>';
							txt = txt +						'</div>';
							txt = txt + '';
							txt = txt +					'</div>';
							}		
						txt = txt +					'</div>';
						}		
					txt = txt + '';
					txt = txt +					'</div>';
					}		
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "RFQImageList", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.RFQ.Master.RFQImageList.html">RFQImageList</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "RFQList", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.RFQ.Master.RFQList.html">RFQList</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Save", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.RFQ.Master.Save.html">Save</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'SalesOrder', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.SalesOrder");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "SalesOrder")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SalesOrderLine", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.SalesOrder.SalesOrderLine.html">SalesOrderLine</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "SalesOrderLine")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "HasNullMaterialType", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.SalesOrder.SalesOrderLine.HasNullMaterialType.html">HasNullMaterialType</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "SaveMaterialType", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.SalesOrder.SalesOrderLine.SaveMaterialType.html">SaveMaterialType</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'Scalar', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.Scalar");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Scalar")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Exception", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Scalar.Exception.html">Exception</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FieldLookup", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Scalar.FieldLookup.html">FieldLookup</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Scalar.LastError.html">LastError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Message", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Scalar.Message.html">Message</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'Screening', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.Screening");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Screening")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddOrDelete", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Screening.AddOrDelete.html">AddOrDelete</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Exists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Screening.Exists.html">Exists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "IDFromRecordID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Screening.IDFromRecordID.html">IDFromRecordID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastDBError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Screening.LastDBError.html">LastDBError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Screening.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "OpenRFQs", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Screening.OpenRFQs.html">OpenRFQs</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "RecordIDFromID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Screening.RecordIDFromID.html">RecordIDFromID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "StoredProcedureReturnCode", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Screening.StoredProcedureReturnCode.html">StoredProcedureReturnCode</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'Shipping', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.Shipping");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Shipping")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastDBError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Shipping.LastDBError.html">LastDBError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "PickList", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Shipping.PickList.html">PickList</a>';
			txt = txt +						'</div>';
			if (SourcePage[3] == "PickList")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "DeleteShippingPicklist", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.Shipping.PickList.DeleteShippingPicklist.html">DeleteShippingPicklist</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'SupplierManufacturer', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.SupplierManufacturer");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "SupplierManufacturer")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Exists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.SupplierManufacturer.Exists.html">Exists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastDBError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.SupplierManufacturer.LastDBError.html">LastDBError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'Vendor', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.Vendor");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Vendor")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Exists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Vendor.Exists.html">Exists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "IDByRecordID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Vendor.IDByRecordID.html">IDByRecordID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "List", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Vendor.List.html">List</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NameByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Vendor.NameByID.html">NameByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "RecordIDByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.Vendor.RecordIDByID.html">RecordIDByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'WorkOrder', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccess.WorkOrder");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "WorkOrder")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastDBError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.WorkOrder.LastDBError.html">LastDBError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Operation", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccess.WorkOrder.Operation.html">Operation</a>';
			txt = txt +						'</div>';
			if (SourcePage[3] == "Operation")
				{		
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "LastDBError", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.WorkOrder.Operation.LastDBError.html">LastDBError</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Memo", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccess.WorkOrder.Operation.Memo.html">Memo</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}		
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +					'</div>';
		}
	//RotairDataAccessWrapper
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairDataAccessWrapper", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairDataAccessWrapper") + ' (deprecated)';
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[1] == "RotairDataAccessWrapper")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (SourcePage[1] == 'DataSetCustom') txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccessWrapper.DataSetCustom");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "DataSetCustom")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Exists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccessWrapper.DataSetCustom.Exists.html">Exists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (SourcePage[1] == 'PurchaseOrder') txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccessWrapper.PurchaseOrder");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "PurchaseOrder")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Exists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccessWrapper.PurchaseOrder.Exists.html">Exists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (SourcePage[1] == 'Quote') txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccessWrapper.Quote");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Quote")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Header", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccessWrapper.Quote.Header.html">Header</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "Header")
				{
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "ConditionByQuoteLineID", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccessWrapper.Quote.Header.ConditionByQuoteLineID.html">ConditionByQuoteLineID</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Line", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccessWrapper.Quote.Header.Line.html">Line</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				if (SourcePage[4] == "Line")
					{		
					txt = txt +					'<div class="toclevel2">';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Delivery", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccessWrapper.Quote.Header.Line.Delivery.html">Delivery</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					if (SourcePage[5] == "Delivery")
						{		
						txt = txt +					'<div class="toclevel2">';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "LineNumbersAndQuantitiesByQuoteID", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.Quote.Header.Line.Delivery.LineNumbersAndQuantitiesByQuoteID.html">LineNumbersAndQuantitiesByQuoteID</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +					'</div>';
						}		
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "LineNumbersByQuoteID", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccessWrapper.Quote.Header.Line.LineNumbersByQuoteID.html">LineNumbersByQuoteID</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "Price", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccessWrapper.Quote.Header.Line.Price.html">Price</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					if (SourcePage[5] == "Price")
						{		
						txt = txt +					'<div class="toclevel2">';
						txt = txt + '';
						txt = txt +						'<div class="clip13x9 nav_dots_current">';
						txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
						txt = txt +						'</div>';
						txt = txt +						'<div class="toclevel';
						if (CurrentFocus(SourcePage, "PriceByQuoteIDAndQuoteLine", 6)) txt = txt + ' current'
						txt = txt + '">';
						txt = txt +							'<a href="RotairDataAccess.Quote.Header.Line.Price.PriceByQuoteIDAndQuoteLine.html">PriceByQuoteIDAndQuoteLine</a>';
						txt = txt +						'</div>';
						txt = txt + '';
						txt = txt +					'</div>';
						}		
					txt = txt +						'<div class="clip13x9 nav_dots_current">';
					txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
					txt = txt +						'</div>';
					txt = txt +						'<div class="toclevel';
					if (CurrentFocus(SourcePage, "SalesOrderLineRecordID", 5)) txt = txt + ' current'
					txt = txt + '">';
					txt = txt +							'<a href="RotairDataAccessWrapper.Quote.Header.Line.SalesOrderLineRecordID.html">SalesOrderLineRecordID</a>';
					txt = txt +						'</div>';
					txt = txt + '';
					txt = txt +					'</div>';
					}		
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "QuoteIDsByCustomer", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccessWrapper.Quote.Header.QuoteIDsByCustomer.html">QuoteIDsByCustomer</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "QuotePhraseByID", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccessWrapper.Quote.Header.QuotePhraseByID.html">QuotePhraseByID</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "SaveQuotePhrase", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairDataAccessWrapper.Quote.Header.SaveQuotePhrase.html">SaveQuotePhrase</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (SourcePage[1] == 'Scalar') txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccessWrapper.Scalar");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Scalar")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FieldReference", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccessWrapper.Scalar.FieldReference.html">FieldReference</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetException", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccessWrapper.Scalar.GetException.html">GetException</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetMessage", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccessWrapper.Scalar.GetMessage.html">GetMessage</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (SourcePage[1] == 'Shipping') txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDataAccessWrapper.Shipping");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Shipping")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "HasSalesOrderDeliveryLine", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDataAccessWrapper.Shipping.HasSalesOrderDeliveryLine.html">HasSalesOrderDeliveryLine</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +					'</div>';
		}
	//Rotair_Debugger
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairDebugger", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairDebugger");
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[1] == "RotairDebugger")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'ErrorHandler', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairDebugger.ErrorHandler");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "ErrorHandler")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "WriteToErrorFile", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDebugger.ErrorHandler.WriteToErrorFile.html">WriteToErrorFile</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "WriteToErrorTable", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDebugger.ErrorHandler.WriteToErrorTable.html">WriteToErrorTable</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//Rotair_DynamicEnums
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairDynamicEnums", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairDynamicEnums");
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[1] == "RotairDynamicEnums")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'RFQVendorStatus', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							FunctionLink("RotairDynamicEnums.RFQVendorStatus");
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//Rotair_Email
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairEmail", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairEmail");
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[1] == "RotairEmail")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'EmailBuilder', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairEmail.EmailBuilder");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "EmailBuilder")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ClearLastError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.EmailBuilder.ClearLastError.html">ClearLastError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.EmailBuilder.LastError.html">LastError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "rotPlaceholder", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.EmailBuilder.rotPlaceholder.html">rotPlaceholder</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "rotPlaceholder")
				{
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Name", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairEmail.EmailBuilder.rotPlaceholder.Name.html">Name</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Value", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairEmail.EmailBuilder.rotPlaceholder.Value.html">Value</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "rotPlaceholders", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.EmailBuilder.rotPlaceholders.html">rotPlaceholders</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			if (SourcePage[3] == "rotPlaceholders")
				{
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Add", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairEmail.EmailBuilder.rotPlaceholders.Add.html">Add</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Clear", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairEmail.EmailBuilder.rotPlaceholders.Clear.html">Clear</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Count", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairEmail.EmailBuilder.rotPlaceholders.Count.html">Count</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Exists", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairEmail.EmailBuilder.rotPlaceholders.Exists.html">Exists</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Item", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairEmail.EmailBuilder.rotPlaceholders.Item.html">Item</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "Remove", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairEmail.EmailBuilder.rotPlaceholders.Remove.html">Remove</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SendAdministratorEMail", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.EmailBuilder.SendAdministratorEMail.html">SendAdministratorEMail</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SendClassBasedEmail", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.EmailBuilder.SendClassBasedEmail.html">SendClassBasedEmail</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SendDeniedFlagEMail", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.EmailBuilder.SendDeniedFlagEMail.html">SendDeniedFlagEMail</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SendDeniedVendorEMail", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.EmailBuilder.SendDeniedVendorEMail.html">SendDeniedVendorEMail</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SendPurchaseOrderEMail", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.EmailBuilder.SendPurchaseOrderEMail.html">SendPurchaseOrderEMail</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SendSalesOrderRelated", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.EmailBuilder.SendSalesOrderRelated.html">SendSalesOrderRelated</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SendScreeningEMail", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.EmailBuilder.SendScreeningEMail.html">SendScreeningEMail</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SendShipmentRelatedEmail", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.EmailBuilder.SendShipmentRelatedEmail.html">SendShipmentRelatedEmail</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "TestFlag", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.EmailBuilder.TestFlag.html">TestFlag</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "TestRecipient", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.EmailBuilder.TestRecipient.html">TestRecipient</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'OutlookAutomation', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairEmail.OutlookAutomation");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "OutlookAutomation")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.OutlookAutomation.LastError.html">LastError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SendRFQ", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairEmail.OutlookAutomation.SendRFQ.html">SendRFQ</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	txt = txt + '';
	//Rotair_Excel
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairExcel", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairExcel");
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[1] == "RotairExcel")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'Excel', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairExcel.Excel");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Excel")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Dispose", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExcel.Excel.Dispose.html">Dispose</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExcel.Excel.LastError.html">LastError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetData", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExcel.Excel.GetData.html">GetData</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "OpenFile", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExcel.Excel.OpenFile.html">OpenFile</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SaveFile", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExcel.Excel.SaveFile.html">SaveFile</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ShowData", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExcel.Excel.ShowData.html">ShowData</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "UpdateProgress", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExcel.Excel.UpdateProgress.html">UpdateProgress</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//Rotair_ExportManagement
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairExportManagement", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairExportManagement");
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[1] == "RotairExportManagement")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'ExportManagement', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairExportManagement.ExportManagement");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "ExportManagement")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CheckSalesOrderExportLicense", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExportManagement.ExportManagement.CheckSalesOrderExportLicense.html">CheckSalesOrderExportLicense</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CustomerTypeScreen", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExportManagement.ExportManagement.CustomerTypeScreen.html">CustomerTypeScreen</a>';
			txt = txt +						'</div>';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ForeignCountry", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExportManagement.ExportManagement.ForeignCountry.html">ForeignCountry</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ForeignCustomerScreen", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExportManagement.ExportManagement.ForeignCustomerScreen.html">ForeignCustomerScreen</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ForeignVendorScreen", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExportManagement.ExportManagement.ForeignVendorScreen.html">ForeignVendorScreen</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExportManagement.ExportManagement.LastError.html">LastError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ScreenCustomer", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExportManagement.ExportManagement.ScreenCustomer.html">ScreenCustomer</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ScreenEndUserCheckExportLicense", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExportManagement.ExportManagement.ScreenEndUserCheckExportLicense.html">ScreenEndUserCheckExportLicense</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ScreenVendor", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairExportManagement.ExportManagement.ScreenVendor.html">ScreenVendor</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +					'</div>';
		}
	//Rotair_GeneralFunctions
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairGeneralFunctions", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairGeneralFunctions");
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[1] == "RotairGeneralFunctions")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'Scalar', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairGeneralFunctions.Scalar");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Scalar")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CanNotSaveMessage", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.CanNotSaveMessage.html">CanNotSaveMessage</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ComputerName", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.ComputerName.html">ComputerName</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetDate", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetDate.html">GetDate</a>';
			txt = txt +						'</div>';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetDBNull", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetDBNull.html">GetDBNull</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetNullableBoolean", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetNullableBoolean.html">GetNullableBoolean</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetNullableByte", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetNullableByte.html">GetNullableByte</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetNullableDecimal", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetNullableDecimal.html">GetNullableDecimal</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetNullableDouble", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetNullableDouble.html">GetNullableDouble</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetNullableInteger", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetNullableInteger.html">GetNullableInteger</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetNullableLong", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetNullableLong.html">GetNullableLong</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetNullableGuid", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetNullableGuid.html">GetNullableGuid</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetNullableSByte", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetNullableSByte.html">GetNullableSByte</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetNullableShort", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetNullableShort.html">GetNullableShort</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetNullableSingle", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetNullableSingle.html">GetNullableSingle</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetNullableString", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetNullableString.html">GetNullableString</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetNullableUInteger", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetNullableUInteger.html">GetNullableUInteger</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetNullableULong", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetNullableULong.html">GetNullableULong</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetNullableUShort", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.GetNullableUShort.html">GetNullableUShort</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "IsGuid", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.IsGuid.html">IsGuid</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.LastError.html">LastError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableBoolean", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableBoolean.html">SetNullableBoolean</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableByte", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableByte.html">SetNullableByte</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableChar", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableChar.html">SetNullableChar</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableDate", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableDate.html">SetNullableDate</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableDecimal", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableDecimal.html">SetNullableDecimal</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableDouble", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableDouble.html">SetNullableDouble</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableInteger", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableInteger.html">SetNullableInteger</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableLong", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableLong.html">SetNullableLong</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableGuid", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableGuid.html">SetNullableGuid</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableSByte", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableSByte.html">SetNullableSByte</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableShort", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableShort.html">SetNullableShort</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableSingle", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableSingle.html">SetNullableSingle</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableString", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableString.html">SetNullableString</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableUInteger", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableUInteger.html">SetNullableUInteger</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableULong", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableULong.html">SetNullableULong</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SetNullableUShort", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Scalar.SetNullableUShort.html">SetNullableUShort</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'String', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairGeneralFunctions.String");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "String")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastRevBy", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.String.LastRevBy.html">LastRevBy</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastQualifyer", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.String.LastQualifyer.html">LastQualifyer</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ToWords", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.String.ToWords.html">ToWords</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'Windows', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairGeneralFunctions.Windows");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Windows")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GatAccess", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairGeneralFunctions.Windows.GatAccess.html">GatAccess</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +					'</div>';
		}
	//Rotair_IMSExtensions
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairIMSExtensions", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairIMSExtensions");
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[1] == "RotairIMSExtensions")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'AppObject', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairIMSExtensions.AppObject");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "AppObject")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FieldHasChanged", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairIMSExtensions.AppObject.FieldHasChanged.html">FieldHasChanged</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "SubdomainCollectionExists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairIMSExtensions.AppObject.SubdomainCollectionExists.html">SubdomainCollectionExists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +					'</div>';
		}
	//Rotair_Report
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';	
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairReport", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairReport");
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[1] == "RotairReport")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'rotReport', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairReport.rotReport");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "rotReport")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CopyDataToReporter", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairReport.rotReport.CopyDataToReporter.html">CopyDataToReporter</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CustomerID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairReport.rotReport.CustomerID.html">CustomerID</a>';
			txt = txt +						'</div>';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CustomerName", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairReport.rotReport.CustomerName.html">CustomerName</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "PopulateData", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairReport.rotReport.PopulateData.html">PopulateData</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Print", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairReport.rotReport.Print.html">Print</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "PrintPreview", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairReport.rotReport.PrintPreview.html">PrintPreview</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "UpdateReportHeader", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairReport.rotReport.UpdateReportHeader.html">UpdateReportHeader</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "VendorID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairReport.rotReport.VendorID.html">VendorID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "VendorName", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairReport.rotReport.VendorName.html">VendorName</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +					'</div>';
		}
	//Rotair_Security
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';	
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairSecurity", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairSecurity");
	txt = txt +						'</div>';
	txt = txt + '';									
	if (SourcePage[1] == "RotairSecurity")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'Security', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairSecurity.Security");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Security")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "EmployeeVerification", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairSecurity.Security.EmployeeVerification.html">EmployeeVerification</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "IsAdministrator", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairSecurity.Security.IsAdministrator.html">IsAdministrator</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "RFQIndex", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairSecurity.Security.RFQIndex.html">RFQIndex</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ScreeningAllow", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairSecurity.Security.ScreeningAllow.html">ScreeningAllow</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ScreeningAllowAdvanced", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairSecurity.Security.ScreeningAllowAdvanced.html">ScreeningAllowAdvanced</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +					'</div>';
		}
	//Rotair_System
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';	
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairSystem", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairSystem");
	txt = txt +						'</div>';
	txt = txt + '';									
	if (SourcePage[1] == "RotairSystem")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'File', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairSystem.File");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "File")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "IsProduction", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairSystem.File.IsProduction.html">IsProduction</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'System', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairSystem.System");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "System")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "IsProduction", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairSystem.System.IsProduction.html">IsProduction</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +					'</div>';
		}
	//Rotair_Types
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairTypes", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairTypes");
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[1] == "RotairTypes")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "CodeChangeAttribute", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairTypes.CodeChangeAttribute");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "CodeChangeAttribute")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Author", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.CodeChangeAttribute.Author.html">Author</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ChangeSource", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.CodeChangeAttribute.ChangeSource.html">ChangeSource</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ChangeType", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.CodeChangeAttribute.ChangeType.html">ChangeType</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Comments", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.CodeChangeAttribute.Comments.html">Comments</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Date", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.CodeChangeAttribute.Date.html">Date</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "VerifyAuthor", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.CodeChangeAttribute.VerifyAuthor.html">VerifyAuthor</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "Constants", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairTypes.Constants");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Constants")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Intuitive", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Constants.Intuitive.html">Intuitive</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "Enumerations", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairTypes.Enumerations");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "Enumerations")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eCertificateType", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eCertificateType.html">eCertificateType</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eCustomerTypeScreenResult", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eCustomerTypeScreenResult.html">eCustomerTypeScreenResult</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eEmailForAdministration", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eEmailForAdministration.html">eEmailForAdministration</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eEmailForPurchaseOrder", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eEmailForPurchaseOrder.html">eEmailForPurchaseOrder</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eEmailForSalesOrder", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eEmailForSalesOrder.html">eEmailForSalesOrder</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eExcelReport", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eExcelReport.html">eExcelReport</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eException", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eException.html">eException</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eExportLicenseApprovalType", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eExportLicenseApprovalType.html">eExportLicenseApprovalType</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';				
			if (CurrentFocus(SourcePage, "eExportLicenseStatus", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eExportLicenseStatus.html">eExportLicenseStatus</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eItemUseClass.html">eItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eLineTypes", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eLineTypes.html">eLineTypes</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eLoadResultType", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eLoadResultType.html">eLoadResultType</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eNameReturnStyle", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eNameReturnStyle.html">eNameReturnStyle</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ePartyType", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.ePartyType.html">ePartyType</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ePhraseForm", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.ePhraseForm.html">ePhraseForm</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eRFQStatus", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eRFQStatus.html">eRFQStatus</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eSalesOrderExportFields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eSalesOrderExportFields.html">eSalesOrderExportFields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eSalesOrderExportLicense", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eSalesOrderExportLicense.html">eSalesOrderExportLicense</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eScreenAction", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eScreenAction.html">eScreenAction</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eScreeningRC", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eScreeningRC.html">eScreeningRC</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eScreeningResults", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eScreeningResults.html">eScreeningResults</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eScreenSource", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eScreenSource.html">eScreenSource</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eStockValue", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.eStockValue.html">eStockValue</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "MSG_ScreeningFailure", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairTypes.Enumerations.MSGScreeningFailure.html">MSG_ScreeningFailure</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "Structs", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairTypes.Structs");
		txt = txt +						'</div>';
		if (SourcePage[2] == "Structs")
			{
			txt = txt +				'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +					'<div class="clip13x9 nav_dots_current">';
			txt = txt +						'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +					'</div>';
			txt = txt +					'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CertificateLine", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +						'<a href="RotairTypes.Structs.CertificateLine.html">CertificateLine</a>';
			txt = txt +					'</div>';
			txt = txt + '';
			txt = txt +					'<div class="clip13x9 nav_dots_current">';
			txt = txt +						'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +					'</div>';
			txt = txt +					'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CustomerNano", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +						'<a href="RotairTypes.Structs.CustomerNano.html">CustomerNano</a>';
			txt = txt +					'</div>';
			txt = txt + '';
			txt = txt +					'<div class="clip13x9 nav_dots_current">';
			txt = txt +						'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +					'</div>';
			txt = txt +					'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ItemForSalesOrder", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +						'<a href="RotairTypes.Structs.ItemForSalesOrder.html">ItemForSalesOrder</a>';
			txt = txt +					'</div>';
			txt = txt + '';
			txt = txt +					'<div class="clip13x9 nav_dots_current">';
			txt = txt +						'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +					'</div>';
			txt = txt +					'<div class="toclevel';
			if (CurrentFocus(SourcePage, "PersonName", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +						'<a href="RotairTypes.Structs.PersonName.html">PersonName</a>';
			txt = txt +					'</div>';
			txt = txt + '';
			if (SourcePage[3] == "PersonName")
				{
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "FullName", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairTypes.Structs.PersonName.FullName.html">FullName</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "ToString", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairTypes.Structs.PersonName.ToString.html">ToString</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}
			txt = txt +					'<div class="clip13x9 nav_dots_current">';
			txt = txt +						'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +					'</div>';
			txt = txt +					'<div class="toclevel';
			if (CurrentFocus(SourcePage, "PhraseForm", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +						'<a href="RotairTypes.Structs.PhraseForm.html">PhraseForm</a>';
			txt = txt +					'</div>';
			txt = txt + '';
			if (SourcePage[3] == "PhraseForm")
				{
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "DBType", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairTypes.Structs.PhraseForm.DBType.html">DBType</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}
			txt = txt +					'<div class="clip13x9 nav_dots_current">';
			txt = txt +						'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +					'</div>';
			txt = txt +					'<div class="toclevel';
			if (CurrentFocus(SourcePage, "QuoteInfoForSalesOrder", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +						'<a href="RotairTypes.Structs.QuoteInfoForSalesOrder.html">QuoteInfoForSalesOrder</a>';
			txt = txt +					'</div>';
			txt = txt + '';
			txt = txt +					'<div class="clip13x9 nav_dots_current">';
			txt = txt +						'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +					'</div>';
			txt = txt +					'<div class="toclevel';
			if (CurrentFocus(SourcePage, "QuotePriceForSalesOrder", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +						'<a href="RotairTypes.Structs.QuotePriceForSalesOrder.html">QuotePriceForSalesOrder</a>';
			txt = txt +					'</div>';
			txt = txt + '';
			if (SourcePage[3] == "QuotePriceForSalesOrder")
				{
				txt = txt +					'<div class="toclevel2">';
				txt = txt + '';
				txt = txt +						'<div class="clip13x9 nav_dots_current">';
				txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
				txt = txt +						'</div>';
				txt = txt +						'<div class="toclevel';
				if (CurrentFocus(SourcePage, "ToString", 4)) txt = txt + ' current'
				txt = txt + '">';
				txt = txt +							'<a href="RotairTypes.Structs.QuotePriceForSalesOrder.ToString.html">ToString</a>';
				txt = txt +						'</div>';
				txt = txt + '';
				txt = txt +					'</div>';
				}
			txt = txt +				'</div>';
			}
		txt = txt +						'</div>';
		}
	//RotairUI_Common
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairUICommon", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairUICommon");
	txt = txt +						'</div>';
	txt = txt + '';
	if (SourcePage[1] == "RotairUICommon")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'UI', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairUICommon.UI");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "UI")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CantAddNotes", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UI.CantAddNotes.html">CantAddNotes</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ClearStatus", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UI.ClearStatus.html">ClearStatus</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "DisplayMessage", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UI.DisplayMessage.html">DisplayMessage</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eShowStatus", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UI.eShowStatus.html">eShowStatus</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "InvalidHandle", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UI.InvalidHandle.html">InvalidHandle</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LockedMessage", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UI.LockedMessage.html">LockedMessage</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "MakeReadOnly", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UI.MakeReadOnly.html">MakeReadOnly</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "OKToDiscard", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UI.OKToDiscard.html">OKToDiscard</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ShowAO", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UI.ShowAO.html">ShowAO</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ShowAppObject", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UI.ShowAppObject.html">ShowAppObject</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ShowStatus", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UI.ShowStatus.html">ShowStatus</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ShowStatusButtons", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UI.ShowStatusButtons.html">ShowStatusButtons</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'UIConstants', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairUICommon.UIConstants");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "UIConstants")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CantAddNotes", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UIConstants.CantAddNotes.html">CantAddNotes</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ClearStatus", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UIConstants.ClearStatus.html">ClearStatus</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "DisplayMessage", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UIConstants.DisplayMessage.html">DisplayMessage</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "eShowStatus", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UIConstants.eShowStatus.html">eShowStatus</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "InvalidHandle", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UIConstants.InvalidHandle.html">InvalidHandle</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LockedMessage", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UIConstants.LockedMessage.html">LockedMessage</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "MakeReadOnly", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UIConstants.MakeReadOnly.html">MakeReadOnly</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "OKToDiscard", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UIConstants.OKToDiscard.html">OKToDiscard</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ShowAO", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UIConstants.ShowAO.html">ShowAO</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ShowAppObject", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UIConstants.ShowAppObject.html">ShowAppObject</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ShowStatus", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UIConstants.ShowStatus.html">ShowStatus</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ShowStatusButtons", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.UIConstants.ShowStatusButtons.html">ShowStatusButtons</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'frmDisplayAO', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairUICommon.frmDisplayAO");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "frmDisplayAO")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "DisplayField", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.frmDisplayAO.DisplayField.html">DisplayField</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "DisplayMember", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.frmDisplayAO.DisplayMember.html">DisplayMember</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AO", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.frmDisplayAO.AO.html">AO</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "TitlePrefix", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.frmDisplayAO.TitlePrefix.html">TitlePrefix</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "strucDisplayField", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.frmDisplayAO.strucDisplayField.html">strucDisplayField</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ShowAO", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.frmDisplayAO.ShowAO.html">ShowAO</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'frmDisplayAppObject', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairUICommon.frmDisplayAppObject");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "frmDisplayAppObject")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AO", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.frmDisplayAppObject.AO.html">AO</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ShowAO", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.frmDisplayAppObject.ShowAO.html">ShowAO</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Title", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.frmDisplayAppObject.Title.html">Title</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, 'CustomMessage', 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairUICommon.CustomMessage");
		txt = txt +						'</div>';
		txt = txt + '';
		if (SourcePage[2] == "CustomMessage")
			{
			txt = txt +					'<div class="toclevel2">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "DisplayEMailFailure", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.CustomMessage.DisplayEMailFailure.html">DisplayEMailFailure</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "DisplayScreeningFailure", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.CustomMessage.DisplayScreeningFailure.html">DisplayScreeningFailure</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "DisplayWillNotSaveReason", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICommon.CustomMessage.DisplayWillNotSaveReason.html">DisplayWillNotSaveReason</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +					'</div>';
		}

	return txt;

}

function MenuCustomControls(SourcePage)
{
	var txt;
	//MultiColCombo
	txt = '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "MultiColCombo", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("MultiColCombo");
	txt = txt +						'</div>';
	if (SourcePage[1] == "MultiColCombo")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "DropDownForm", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="MultiColCombo.DropDownForm.html">DropDownForm</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "MultiColumnComboBox", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="MultiColCombo.MultiColumnComboBox.html">MultiColumnComboBox</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +					'</div>';
		}
	txt = txt + '';

	return txt;
}

function MenuCustomimsAppObjects(SourcePage)
{
	var txt;
	//RotairAO_Countries
	txt = '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairAOCountry", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairAOCountry");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairAOCountry")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOCountry", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairAOCountry.imsAOCountry");
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOCountry")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Countries", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAOCountry.imsAOCountry.Countries.html">Countries</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	txt = txt + '';
	//RotairAO_Email
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairAOEmail", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairAOEmail");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairAOEmail")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOEmailMaster", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairAOEmail.imsAOEmailMaster");
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOEmailMaster")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "XXX", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAOEmail.imsAOEmailMaster.XXX.html">XXX</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOEmailRecipient", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairAOEmail.imsAOEmailRecipient");
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOEmailRecipient")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "XXX", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAOEmail.imsAOEmailRecipient.XXX.html">XXX</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOEmailType", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairAOEmail.imsAOEmailType");
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOEmailType")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Countries", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAOEmail.imsAOEmailType.Countries.html">Countries</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	txt = txt + '';
	//RotairAO_Messages
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairAOMessages", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairAOMessages");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairAOMessages")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOMessage", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairAOMessages.imsAOMessage");
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOMessage")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Message", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAOMessages.imsAOMessage.Message.html">Message</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	txt = txt + '';
	//RotairAO_PMA
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairAOPMA", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairAOPMA");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairAOPMA")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOItem", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							ClassLink("RotairAOPMA.imsAOItem");
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOItem")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "IsApproved", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAOPMA.imsAOItem.IsApproved.html">IsApproved</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	txt = txt + '';
	//RotairAO_RFQ
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairAORFQ", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairAORFQ");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairAORFQ")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAORFQImaging", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairAORFQ.imsAORFQImaging.html">imsAO_RFQImaging</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAORFQImaging")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddToMetadata", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQImaging.AddToMetadata.html">AddToMetadata</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Delete", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQImaging.Delete.html">Delete</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "DomainName", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQImaging.DomainName.html">DomainName</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Exists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQImaging.Exists.html">Exists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FilePathByKey", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQImaging.FilePathByKey.html">FilePathByKey</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetValue", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQImaging.GetValue.html">GetValue</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ViewName", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQImaging.ViewName.html">ViewName</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAORFQImagingCollection", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairAORFQ.imsAORFQImagingCollection.html">imsAO_RFQImaging_Collection</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAORFQImagingCollectionX")//An 'X' was added so no members get displayed since there aren't any added beyond the base class.
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddToMetadata", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQImagingCollection.AddToMetadata.html">AddToMetadata</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAORFQImagingController", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairAORFQ.imsAORFQImagingController.html">imsAO_RFQImagingController</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAORFQImagingController")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddToMetadata", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQImagingController.AddToMetadata.html">AddToMetadata</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAORFQItem", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairAORFQ.imsAORFQItem.html">imsAO_RFQItem</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAORFQItem")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddToMetadata", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQItem.AddToMetadata.html">AddToMetadata</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAORFQItemQuantity", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairAORFQ.imsAORFQItemQuantity.html">imsAO_RFQItemQuantity</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAORFQItemQuantity")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddToMetadata", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQItemQuantity.AddToMetadata.html">AddToMetadata</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAORFQMaster", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairAORFQ.imsAORFQMaster.html">imsAO_RFQMaster</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAORFQMaster")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddToMetadata", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQMaster.AddToMetadata.html">AddToMetadata</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAORFQsEmailed", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairAORFQ.imsAORFQsEmailed.html">imsAO_RFQsEmailed</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAORFQsEmailed")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddToMetadata", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQsEmailed.AddToMetadata.html">AddToMetadata</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAORFQUnindexed", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairAORFQ.imsAORFQUnindexed.html">imsAO_RFQUnindexed</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAORFQUnindexed")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddToMetadata", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQUnindexed.AddToMetadata.html">AddToMetadata</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAORFQUnindexedController", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairAORFQ.imsAORFQUnindexedController.html">imsAO_RFQUnindexedController</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAORFQUnindexedController")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddToMetadata", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQUnindexedController.AddToMetadata.html">AddToMetadata</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAORFQVendor", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairAORFQ.imsAORFQVendor.html">imsAO_RFQVendor</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAORFQVendor")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddToMetadata", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQVendor.AddToMetadata.html">AddToMetadata</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAORFQVendorCharge", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairAORFQ.imsAORFQVendorCharge.html">imsAO_RFQVendorCharge</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAORFQVendorCharge")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddToMetadata", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQVendorCharge.AddToMetadata.html">AddToMetadata</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAORFQVendorQuote", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairAORFQ.imsAORFQVendorQuote.html">imsAO_RFQVendorQuote</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAORFQVendorQuote")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddToMetadata", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.imsAORFQVendorQuote.AddToMetadata.html">AddToMetadata</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "RFQIO", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairAORFQ.RFQIO.html">RFQIO</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "RFQIO")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "AddToMetadata", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairAORFQ.RFQIO.AddToMetadata.html">AddToMetadata</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	txt = txt + '';
	//RotairimsAO_Note
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairimsAONote", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairimsAONote");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairimsAONote")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAONote", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairimsAONote.imsAONote.html">imsAO_Note</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAONote")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CheckAllRequiredFields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAONote.imsAONote.CheckAllRequiredFields.html">CheckAllRequiredFields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOScreeningCollection", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairimsAONote.imsAONoteCollection.html">imsAO_Note_Collection</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +					'</div>';
		}
	txt = txt + '';
	//RotairimsAO_Screening
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairimsAOScreening", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairimsAOScreening");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairimsAOScreening")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOScreening", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.html">imsAO_Screening</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOScreening")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CheckAllRequiredFields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.CheckAllRequiredFields.html">CheckAllRequiredFields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CloseAndDeleteCustomerOpenItems", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.CloseAndDeleteCustomerOpenItems.html">CloseAndDeleteCustomerOpenItems</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CloseAndDeleteVendorOpenItems", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.CloseAndDeleteVendorOpenItems.html">CloseAndDeleteVendorOpenItems</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CustomerExists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.CustomerExists.html">CustomerExists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CustomerList", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.CustomerList.html">CustomerList</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "DeniedPartyInitially", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.DeniedPartyInitially.html">DeniedPartyInitially</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Domain", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.Domain.html">Domain</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Exists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.Exists.html">Exists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetOpenCustomerItems", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.GetOpenCustomerItems.html">GetOpenCustomerItems</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetOpenVendorItems", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.GetOpenVendorItems.html">GetOpenVendorItems</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetOpenVendorItemsForEmail", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.GetOpenVendorItemsForEmail.html">GetOpenVendorItemsForEmail</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.LastError.html">LastError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Name", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.Name.html">Name</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NewSetup", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.NewSetup.html">NewSetup</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "PartyExists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.PartyExists.html">PartyExists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "PartyList", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.PartyList.html">PartyList</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "OpenPurchaseOrders", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.OpenPurchaseOrders.html">OpenPurchaseOrders</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "OpenRFQs", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.OpenRFQs.html">OpenRFQs</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "PriorComments", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.PriorComments.html">PriorComments</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ScreenStatus", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.ScreenStatus.html">ScreenStatus</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "VendorList", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.VendorList.html">VendorList</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "VendorExists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.VendorExists.html">VendorExists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOScreeningCollection", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairimsAOScreening.imsAOScreeningCollection.html">imsAO_Screening_Collection</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +					'</div>';
		}
	txt = txt + '';
	//RotairimsAO_SupplierManufacturer
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairAOSupplierManufacturer", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairAOSupplierManufacturer");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairAOSupplierManufacturer")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAORotairimsAOSupplierManufacturer", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.html">imsAO_Screening</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAORotairimsAOSupplierManufacturer")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CheckAllRequiredFields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.CheckAllRequiredFields.html">CheckAllRequiredFields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CloseAndDeleteCustomerOpenItems", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.CloseAndDeleteCustomerOpenItems.html">CloseAndDeleteCustomerOpenItems</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CloseAndDeleteVendorOpenItems", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.CloseAndDeleteVendorOpenItems.html">CloseAndDeleteVendorOpenItems</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CustomerExists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.CustomerExists.html">CustomerExists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CustomerList", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.CustomerList.html">CustomerList</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "DeniedPartyInitially", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.DeniedPartyInitially.html">DeniedPartyInitially</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Domain", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.Domain.html">Domain</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Exists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.Exists.html">Exists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetOpenCustomerItems", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.GetOpenCustomerItems.html">GetOpenCustomerItems</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetOpenVendorItems", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.GetOpenVendorItems.html">GetOpenVendorItems</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetOpenVendorItemsForEmail", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.GetOpenVendorItemsForEmail.html">GetOpenVendorItemsForEmail</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "LastError", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.LastError.html">LastError</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Name", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.Name.html">Name</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NewSetup", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.NewSetup.html">NewSetup</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "PartyExists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.PartyExists.html">PartyExists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "PartyList", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.PartyList.html">PartyList</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "OpenPurchaseOrders", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.OpenPurchaseOrders.html">OpenPurchaseOrders</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "OpenRFQs", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.OpenRFQs.html">OpenRFQs</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "PriorComments", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.PriorComments.html">PriorComments</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ScreenStatus", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.ScreenStatus.html">ScreenStatus</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "VendorList", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.VendorList.html">VendorList</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "VendorExists", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairimsAOScreening.imsAOScreening.VendorExists.html">VendorExists</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOScreeningCollection", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairimsAOScreening.imsAOScreeningCollection.html">imsAO_Screening_Collection</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +					'</div>';
		}
	txt = txt + '';

	return txt;
}

function MenuCustomrotAppObjects(SourcePage)
{
	var txt;
	//RotairAO_CageCode
	txt = '';
	txt = txt + 					'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairAOCageCode", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairAOCageCode");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairAOCageCode")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "AOCopyItemWrapper", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.html">AOCopyItemWrapper</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "AOCopyItemWrapper")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FieldNames", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.FieldNames.html">FieldNames</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.lCopyItemSupplemental.html">lCopy_ItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.lCopyItemUseClass.html">lCopy_ItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "AOCreateItemRevisionWrapper", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.html">AOCreateItemRevisionWrapper</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "AOCreateItemRevisionWrapper")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FieldNames", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.FieldNames.html">FieldNames</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.lCopyItemSupplemental.html">lCopy_ItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.lCopyItemUseClass.html">lCopy_ItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOCopyItem", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.html">imsAO_CopyItem_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOCopyItem")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOCreateItemRevision", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCreateItemRevisionCUSTOM.html">imsAO_CreateItemRevision_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOCreateItemRevision")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCreateItemRevisionCUSTOM.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOItem", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.html">imsAO_Item_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOItem")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Copy", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.Copy.html">Copy</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.CopyItemSupplemental.html">Copy_ItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.CopyItemUseClass.html">Copy_ItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ItemSupplementalCollection", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.ItemSupplementalCollection.html">ItemSupplemental_Collection</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ItemUseClassCollection", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.ItemUseClassCollection.html">ItemUseClass_Collection</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NewSetup", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.NewSetup.html">NewSetup</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOItemSupplemental", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplemental.html">imsAO_ItemSupplemental</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOItemSupplemental")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CheckAllRequiredFields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplemental.CheckAllRequiredFields.html">CheckAllRequiredFields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Copy", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplemental.Copy.html">Copy</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NewSetup", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplemental.NewSetup.html">NewSetup</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplemental.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOItemSupplementalCollection", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplementalCollection.html">imsAO_ItemSupplemental_Collection</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOItemSupplementalCollection")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ListName", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplementalCollection.ListName.html">ListName</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOUseClass", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOUseClass.html">imsAO_UseClass</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOUseClass")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ListName", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOUseClass.ListName.html">ListName</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOUseClassCollection", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOUseClassCollection.html">imsAO_UseClass_Collection</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOUseClassCollection")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ListName", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOUseClassCollection.ListName.html">ListName</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsCopyOptions", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsCopyOptionsCUSTOM.html">imsCopyOptions_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsCopyOptions")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsCopyOptionsCUSTOM.CopyItemSupplemental.html">CopyItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsCopyOptionsCUSTOM.CopyItemUseClass.html">CopyItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	txt = txt + '';
	//RotairAO_Certificate
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairAOCertificate", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairAOCertificate");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairAOCertificate")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "DropDownForm", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="MultiColCombo.DropDownForm.html">DropDownForm</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "MultiColumnComboBox", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="MultiColCombo.MultiColumnComboBox.html">MultiColumnComboBox</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +					'</div>';
		}
	txt = txt + '';
	//RotairAO_ExportLicense
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairAOExportLicense", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairAOExportLicense");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairAOExportLicense")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "DropDownForm", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="MultiColCombo.DropDownForm.html">DropDownForm</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "MultiColumnComboBox", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="MultiColCombo.MultiColumnComboBox.html">MultiColumnComboBox</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +					'</div>';
		}
	txt = txt + '';
	//RotairAO_Note
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairAONote", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairAONote");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairAONote")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "DropDownForm", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="MultiColCombo.DropDownForm.html">DropDownForm</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "MultiColumnComboBox", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="MultiColCombo.MultiColumnComboBox.html">MultiColumnComboBox</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +					'</div>';
		}
		txt = txt + '';
	//RotairAO_Phrase
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairAOPhrase", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairAOPhrase");
	txt = txt +						'</div>';
if (SourcePage[1] == "RotairAOPhrase")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "DropDownForm", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="MultiColCombo.DropDownForm.html">DropDownForm</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "MultiColumnComboBox", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="MultiColCombo.MultiColumnComboBox.html">MultiColumnComboBox</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +					'</div>';
		}
		txt = txt + '';
	//RotairAO_Report
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairAOReport", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairAOReport");
	txt = txt +						'</div>';
if (SourcePage[1] == "RotairAOReport")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "DropDownForm", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="MultiColCombo.DropDownForm.html">DropDownForm</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "MultiColumnComboBox", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="MultiColCombo.MultiColumnComboBox.html">MultiColumnComboBox</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +					'</div>';
		}
		txt = txt + '';
	//RotairAO_Screening
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairAOScreening", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairAOScreening");
	txt = txt +						'</div>';
if (SourcePage[1] == "RotairAOScreening")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "DropDownForm", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="MultiColCombo.DropDownForm.html">DropDownForm</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "MultiColumnComboBox", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="MultiColCombo.MultiColumnComboBox.html">MultiColumnComboBox</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +					'</div>';
		}
	txt = txt + '';

	return txt;
}

function MenuCustomimsForms(SourcePage)
{
	var txt;
	//RotairUI_CageCode
	txt = '';
	txt = txt + 					'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairUICageCode", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairUICageCode");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairUICageCode")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUI_RFQ", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUICageCode.imsUIRFQ.html">imsUI_RFQ</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIRFQ")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICageCode.imsUIRFQ.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIUnenteredVendorDialog", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUICageCode.imsUIUnenteredVendorDialog.html">imsUI_UnenteredVendorDialog</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIUnenteredVendorDialog")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICageCode.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIGrid", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUICageCode.imsUIGrid.html">imsUI_Grid</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIGrid")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICageCode.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
	}
	txt = txt + '';
	//RotairUI_CertificatePrint
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairUICertificatePrint", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairUICertificatePrint");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairUICertificatePrint")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "RotairUICertificatePrint", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUICertificatePrint.imsUIRFQ.html">imsUI_RFQ</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIRFQ")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICertificatePrint.imsUIRFQ.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIUnenteredVendorDialog", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUICertificatePrint.imsUIUnenteredVendorDialog.html">imsUI_UnenteredVendorDialog</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIUnenteredVendorDialog")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICertificatePrint.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIGrid", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUICertificatePrint.imsUIGrid.html">imsUI_Grid</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIGrid")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUICertificatePrint.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
	}
	txt = txt + '';
	//RotairUI_DeleteSalesOrderLine
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairUIDeleteSalesOrderLine", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairUIDeleteSalesOrderLine");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairUIDeleteSalesOrderLine")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUI_RFQ", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIDeleteSalesOrderLine.imsUIRFQ.html">imsUI_RFQ</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIRFQ")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIDeleteSalesOrderLine.imsUIRFQ.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIUnenteredVendorDialog", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIDeleteSalesOrderLine.imsUIUnenteredVendorDialog.html">imsUI_UnenteredVendorDialog</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIUnenteredVendorDialog")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIDeleteSalesOrderLine.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIGrid", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIDeleteSalesOrderLine.imsUIGrid.html">imsUI_Grid</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIGrid")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIDeleteSalesOrderLine.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
	}
	txt = txt + '';
	//RotairUI_Email
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairUIEmail", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairUIEmail");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairUIEmail")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUI_RFQ", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIEmail.imsUIRFQ.html">imsUI_RFQ</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIRFQ")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIEmail.imsUIRFQ.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIUnenteredVendorDialog", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIEmail.imsUIUnenteredVendorDialog.html">imsUI_UnenteredVendorDialog</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIUnenteredVendorDialog")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIEmail.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIGrid", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIEmail.imsUIGrid.html">imsUI_Grid</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIGrid")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIEmail.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
	}
	txt = txt + '';
	//RotairUI_Grid
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairUIGrid", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairUIGrid");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairUIGrid")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "frmDialogSelectBookings", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIGrid.frmDialogSelectBookings.html">frmDialog_SelectBookings</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "frmDialogSelectBookings")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIGrid.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "frmDialogSelectSalesOrder", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIGrid.frmDialogSelectSalesOrder.html">frmDialogSelect_SalesOrder</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "frmDialogSelectSalesOrder")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIGrid.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIGrid", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIGrid.imsUIGrid.html">imsUI_Grid</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIGrid")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIGrid.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
	}
	txt = txt + '';
	//RotairUI_Note
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairUINote", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairUINote");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairUINote")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUI_RFQ", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUINote.imsUIRFQ.html">imsUI_RFQ</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIRFQ")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUINote.imsUIRFQ.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIUnenteredVendorDialog", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUINote.imsUIUnenteredVendorDialog.html">imsUI_UnenteredVendorDialog</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIUnenteredVendorDialog")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUINote.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIGrid", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUINote.imsUIGrid.html">imsUI_Grid</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIGrid")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUINote.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
	}
	txt = txt + '';
	//RotairUI_RFQ
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairUIRFQ", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairUIRFQ");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairUIRFQ")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUI_RFQ", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIRFQ.imsUIRFQ.html">imsUI_RFQ</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIRFQ")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIRFQ.imsUIRFQ.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIUnenteredVendorDialog", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIRFQ.imsUIUnenteredVendorDialog.html">imsUI_UnenteredVendorDialog</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIUnenteredVendorDialog")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIRFQ.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIGrid", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIRFQ.imsUIGrid.html">imsUI_Grid</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIGrid")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIRFQ.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
	}
	txt = txt + '';
	//RotairUI_RFQResponse
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairUIRFQResponse", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairUIRFQResponse");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairUIRFQResponse")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUI_RFQ", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIRFQResponse.imsUIRFQ.html">imsUI_RFQ</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIRFQ")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIRFQResponse.imsUIRFQ.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIUnenteredVendorDialog", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIRFQResponse.imsUIUnenteredVendorDialog.html">imsUI_UnenteredVendorDialog</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIUnenteredVendorDialog")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIRFQResponse.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIGrid", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIRFQResponse.imsUIGrid.html">imsUI_Grid</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIGrid")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIRFQResponse.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
	}
	txt = txt + '';
	//RotairUI_Shipments
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairUIShipments", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairUIShipments");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairUIShipments")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUI_RFQ", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIShipments.imsUIRFQ.html">imsUI_RFQ</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIRFQ")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIShipments.imsUIRFQ.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIUnenteredVendorDialog", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIShipments.imsUIUnenteredVendorDialog.html">imsUI_UnenteredVendorDialog</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIUnenteredVendorDialog")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIShipments.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIGrid", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIShipments.imsUIGrid.html">imsUI_Grid</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIGrid")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIShipments.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
	}
	txt = txt + '';
	//RotairUI_StockToXL
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairUIStockToXL", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairUIStockToXL");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairUIStockToXL")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUI_RFQ", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIStockToXL.imsUIRFQ.html">imsUI_RFQ</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIRFQ")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIStockToXL.imsUIRFQ.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIUnenteredVendorDialog", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIStockToXL.imsUIUnenteredVendorDialog.html">imsUI_UnenteredVendorDialog</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIUnenteredVendorDialog")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIStockToXL.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIGrid", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUIRFQ.imsUIGrid.html">imsUI_Grid</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIGrid")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUIStockToXL.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
	}
	txt = txt + '';
	//RotairUI_SupplierManufacturer
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairUISupplierManufacturer", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairUISupplierManufacturer");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairUISupplierManufacturer")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUI_RFQ", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUISupplierManufacturer.imsUIRFQ.html">imsUI_RFQ</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIRFQ")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUISupplierManufacturer.imsUIRFQ.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIUnenteredVendorDialog", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUISupplierManufacturer.imsUIUnenteredVendorDialog.html">imsUI_UnenteredVendorDialog</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIUnenteredVendorDialog")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUISupplierManufacturer.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIGrid", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairUISupplierManufacturer.imsUIGrid.html">imsUI_Grid</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIGrid")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairUISupplierManufacturer.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
	}
	txt = txt + '';

	return txt;
}

function MenuCustomizedAppObjects(SourcePage)
{
	var txt;
	//IntuitiveAO_Customer_CUSTOM
	txt = '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveAOCustomerCUSTOM", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveAOCustomerCUSTOM");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveAOCustomerCUSTOM")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOCustomerCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOCustomerCUSTOM.imsAOCustomerCUSTOM.html">imsAO_Customer_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOCustomerCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOCustomerCUSTOM.imsAOCustomerCUSTOM.ID.html">ID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "IDBySalesOrderID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOCustomerCUSTOM.imsAOCustomerCUSTOM.IDBySalesOrderID.html">IDBySalesOrderID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "IsGovernment", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOCustomerCUSTOM.imsAOCustomerCUSTOM.IsGovernment.html">IsGovernment</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ListAddress", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOCustomerCUSTOM.imsAOCustomerCUSTOM.ListAddress.html">ListAddress</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ListName", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOCustomerCUSTOM.imsAOCustomerCUSTOM.ListName.html">ListName</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NameByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOCustomerCUSTOM.imsAOCustomerCUSTOM.NameByID.html">NameByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NoQuoteCustomer", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOCustomerCUSTOM.imsAOCustomerCUSTOM.NoQuoteCustomer.html">NoQuoteCustomer</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOVendorCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOCustomerCUSTOM.imsAOVendorCUSTOM.html">imsAO_Vendor_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOVendorCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ExistsByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOCustomerCUSTOM.imsAOVendorCUSTOM.ExistsByID.html">ExistsByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOCustomerCUSTOM.imsAOVendorCUSTOM.ID.html">ID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NameByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOCustomerCUSTOM.imsAOVendorCUSTOM.NameByID.html">NameByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//IntuitiveAO_Employee_CUSTOM
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveAOEmployeeCUSTOM", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveAOEmployeeCUSTOM");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveAOEmployeeCUSTOM")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOEmployeeCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOEmployeeCUSTOM.imsAOEmployeeCUSTOM.html">imsAO_Employee_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOEmployeeCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CurrentUserID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOEmployeeCUSTOM.imsAOEmployeeCUSTOM.CurrentUserID.html">CurrentUserID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CurrentUserName", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOEmployeeCUSTOM.imsAOEmployeeCUSTOM.CurrentUserName.html">CurrentUserName</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "EMailByLogon", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOEmployeeCUSTOM.imsAOEmployeeCUSTOM.EMailByLogon.html">EMailByLogon</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NameByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOEmployeeCUSTOM.imsAOEmployeeCUSTOM.NameByID.html">NameByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//IntuitiveAO_Item_CUSTOM
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveAOItemCUSTOM", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveAOItemCUSTOM");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveAOItemCUSTOM")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "AOCopyItemWrapper", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.html">AOCopyItemWrapper</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "AOCopyItemWrapper")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FieldNames", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.FieldNames.html">FieldNames</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.lCopyItemSupplemental.html">lCopy_ItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.lCopyItemUseClass.html">lCopy_ItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "AOCreateItemRevisionWrapper", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.html">AOCreateItemRevisionWrapper</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "AOCreateItemRevisionWrapper")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FieldNames", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.FieldNames.html">FieldNames</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.lCopyItemSupplemental.html">lCopyItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.lCopyItemUseClass.html">lCopyItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOCopyItemCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.html">imsAO_CopyItem_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOCopyItemCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOCreateItemRevisionCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCreateItemRevisionCUSTOM.html">imsAO_CreateItemRevision_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOCreateItemRevisionCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCreateItemRevisionCUSTOM.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOItemCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.html">imsAO_Item_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOItemCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CheckAllRequiredFields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.CheckAllRequiredFields.html">CheckAllRequiredFields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Copy", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.Copy.html">Copy</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.CopyItemSupplemental.html">Copy_ItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.CopyItemUseClass.html">Copy_ItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ItemSupplementalCollection", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.ItemSupplementalCollection.html">ItemSupplemental_Collection</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ItemUseClassCollection", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.ItemUseClassCollection.html">ItemUseClass_Collection</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ListSorted", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.ListSorted.html">ListSorted</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NameByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.NameByID.html">NameByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NewSetup", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.NewSetup.html">NewSetup</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "StockValueManufactured", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.StockValueManufactured.html">StockValueManufactured</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "StockValuePurchased", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.StockValuePurchased.html">StockValuePurchased</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOItemSupplemental", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplemental.html">imsAO_ItemSupplemental</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOItemSupplemental")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CheckAllRequiredFields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplemental.CheckAllRequiredFields.html">CheckAllRequiredFields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Copy", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplemental.Copy.html">Copy</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NewSetup", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplemental.NewSetup.html">NewSetup</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplemental.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOItemSupplementalCollection", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplementalCollection.html">imsAO_ItemSupplemental_Collection</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOItemUseClass", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOUseClass.html">imsAO_UseClass</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOItemUseClass")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CheckAllRequiredFields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClass.CheckAllRequiredFields.html">CheckAllRequiredFields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Copy", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClass.Copy.html">Copy</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetValue", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClass.GetValue.html">GetValue</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "IsUseClassDetermined", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClass.IsUseClassDetermined.html">IsUseClassDetermined</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ItemType", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClass.ItemType.html">ItemType</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NewSetup", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClass.NewSetup.html">NewSetup</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClass.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOItemUseClassCollection", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClassCollection.html">imsAO_UseClass_Collection</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsCopyOptionsCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsCopyOptionsCUSTOM.html">imsCopyOptions_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsCopyOptionsCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsCopyOptionsCUSTOM.CopyItemSupplemental.html">Copy_ItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsCopyOptionsCUSTOM.CopyItemUseClass.html">Copy_ItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//IntuitiveAO_MasterControls_CUSTOM
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveAOMasterControlsCUSTOM", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveAOMasterControlsCUSTOM");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveAOMasterControlsCUSTOM")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "AOCopyItemWrapper", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.html">AOCopyItemWrapper</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "AOCopyItemWrapper")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FieldNames", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.FieldNames.html">FieldNames</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.lCopyItemSupplemental.html">lCopy_ItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.lCopyItemUseClass.html">lCopy_ItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "AOCreateItemRevisionWrapper", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.html">AOCreateItemRevisionWrapper</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "AOCreateItemRevisionWrapper")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FieldNames", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.FieldNames.html">FieldNames</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.lCopyItemSupplemental.html">lCopyItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.lCopyItemUseClass.html">lCopyItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOCopyItemCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.html">imsAO_CopyItem_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOCopyItemCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOCreateItemRevisionCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCreateItemRevisionCUSTOM.html">imsAO_CreateItemRevision_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOCreateItemRevisionCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCreateItemRevisionCUSTOM.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOItemCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.html">imsAO_Item_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOItemCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CheckAllRequiredFields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.CheckAllRequiredFields.html">CheckAllRequiredFields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Copy", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.Copy.html">Copy</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.CopyItemSupplemental.html">Copy_ItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.CopyItemUseClass.html">Copy_ItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ItemSupplementalCollection", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.ItemSupplementalCollection.html">ItemSupplemental_Collection</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ItemUseClassCollection", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.ItemUseClassCollection.html">ItemUseClass_Collection</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ListSorted", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.ListSorted.html">ListSorted</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NameByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.NameByID.html">NameByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NewSetup", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.NewSetup.html">NewSetup</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "StockValueManufactured", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.StockValueManufactured.html">StockValueManufactured</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "StockValuePurchased", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemCUSTOM.StockValuePurchased.html">StockValuePurchased</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOItemSupplemental", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplemental.html">imsAO_ItemSupplemental</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOItemSupplemental")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CheckAllRequiredFields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplemental.CheckAllRequiredFields.html">CheckAllRequiredFields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Copy", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplemental.Copy.html">Copy</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NewSetup", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplemental.NewSetup.html">NewSetup</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplemental.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOItemSupplementalCollection", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemSupplementalCollection.html">imsAO_ItemSupplemental_Collection</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOItemUseClass", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOUseClass.html">imsAO_UseClass</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOItemUseClass")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CheckAllRequiredFields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClass.CheckAllRequiredFields.html">CheckAllRequiredFields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Copy", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClass.Copy.html">Copy</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "GetValue", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClass.GetValue.html">GetValue</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "IsUseClassDetermined", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClass.IsUseClassDetermined.html">IsUseClassDetermined</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ItemType", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClass.ItemType.html">ItemType</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "NewSetup", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClass.NewSetup.html">NewSetup</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClass.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOItemUseClassCollection", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOItemUseClassCollection.html">imsAO_UseClass_Collection</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsCopyOptionsCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsCopyOptionsCUSTOM.html">imsCopyOptions_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsCopyOptionsCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsCopyOptionsCUSTOM.CopyItemSupplemental.html">Copy_ItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "CopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsCopyOptionsCUSTOM.CopyItemUseClass.html">Copy_ItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//IntuitiveAO_PurchaseOrder_CUSTOM
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveAOPurchaseOrderCUSTOM", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveAOPurchaseOrderCUSTOM");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveAOPurchaseOrderCUSTOM")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOPurchaseOrderCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOPurchaseOrderCUSTOM.imsAOPurchaseOrderCUSTOM.html">imsAO_PurchaseOrder_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOPurchaseOrderCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOPurchaseOrderCUSTOM.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FieldNames", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.FieldNames.html">FieldNames</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.lCopyItemSupplemental.html">lCopy_ItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.lCopyItemUseClass.html">lCopy_ItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOPurchaseOrderDeliveryCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOPurchaseOrderCUSTOM.imsAOPurchaseOrderDeliveryCUSTOM.html">imsAO_PurchaseOrderDelivery_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOPurchaseOrderDeliveryCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FieldNames", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.FieldNames.html">FieldNames</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.lCopyItemSupplemental.html">lCopyItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.lCopyItemUseClass.html">lCopyItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOCopyItemCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOPurchaseOrderCUSTOM.imsAOPurchaseOrderLineCUSTOM.html">imsAO_PurchaseOrderLine_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOPurchaseOrderLineCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//IntuitiveAO_QuoteHeader_CUSTOM
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveAOQuoteHeaderCUSTOM", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveAOQuoteHeaderCUSTOM");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveAOQuoteHeaderCUSTOM")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOQuoteDeliveryCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOQuoteHeaderCUSTOM.imsAOQuoteDeliveryCUSTOM.html">imsAO_QuoteDelivery_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOPurchaseOrderCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOPurchaseOrderCUSTOM.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FieldNames", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.FieldNames.html">FieldNames</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.lCopyItemSupplemental.html">lCopy_ItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.lCopyItemUseClass.html">lCopy_ItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOQuoteHeaderCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOQuoteHeaderCUSTOM.imsAOQuoteHeaderCUSTOM.html">imsAO_QuoteHeader_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOQuoteHeaderCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FieldNames", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.FieldNames.html">FieldNames</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.lCopyItemSupplemental.html">lCopyItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.lCopyItemUseClass.html">lCopyItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOQuoteLineCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOQuoteHeaderCUSTOM.imsAOQuoteLineCUSTOM.html">imsAO_QuoteLine_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOQuoteLineCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOQuotePriceCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOQuoteHeaderCUSTOM.imsAOQuotePriceCUSTOM.html">imsAO_QuotePrice_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOQuotePriceCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//IntuitiveAO_SalesOrder_CUSTOM
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveAOSalesOrderCUSTOM", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveAOSalesOrderCUSTOM");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveAOSalesOrderCUSTOM")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOExportData", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOSalesOrder.imsAOExportData.html">imsAO_ExportData</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOExportData")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOSalesOrderCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOSalesOrder.imsAOSalesOrderCUSTOM.html">imsAO_SalesOrder_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOSalesOrderCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOPurchaseOrderCUSTOM.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FieldNames", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.FieldNames.html">FieldNames</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.lCopyItemSupplemental.html">lCopy_ItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCopyItemWrapper.lCopyItemUseClass.html">lCopy_ItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOSalesOrderDeliveryCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOSalesOrder.imsAOSalesOrderDeliveryCUSTOM.html">imsAO_SalesOrderDelivery_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOSalesOrderDeliveryCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Fields", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.Fields.html">Fields</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "FieldNames", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.FieldNames.html">FieldNames</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemSupplemental", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.lCopyItemSupplemental.html">lCopyItemSupplemental</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "lCopyItemUseClass", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.AOCreateItemRevisionWrapper.lCopyItemUseClass.html">lCopyItemUseClass</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAOSalesOrderLineCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAOSalesOrder.imsAOSalesOrderLineCUSTOM.html">imsAO_SalesOrderLine_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAOSalesOrderLineCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Load", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Load.html">Load</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "Save", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAOItemCUSTOM.imsAOCopyItemCUSTOM.Save.html">Save</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	txt = txt + '';

	return txt;
}

function MenuCustomizedimsForms(SourcePage)
{
	var txt;
	//IntuitiveUI_Customer_CUSTOM
	txt = '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveUICustomerCUSTOM", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveUICustomerCUSTOM");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveUICustomerCUSTOM")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUICustomerCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUICustomerCUSTOM.imsUICustomerCUSTOM.html">imsUI_Customer_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUICustomerCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUICustomerCUSTOM.imsUICustomerCUSTOM.ID.html">ID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIVendorCardCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUICustomerCUSTOM.imsUIVendorCardCUSTOM.html">imsUI_VendorCard_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIVendorCardCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ExistsByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUICustomerCUSTOM.imsUIVendorCardCUSTOM.ExistsByID.html">ExistsByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//IntuitiveUI_ItemCard_CUSTOM
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveUIItemCardCUSTOM", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveUIItemCardCUSTOM");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveUIItemCardCUSTOM")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUICustomerCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUIItemCardCUSTOM.imsUICustomerCUSTOM.html">imsUI_Customer_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUICustomerCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUIItemCardCUSTOM.imsUICustomerCUSTOM.ID.html">ID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIVendorCardCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUIItemCardCUSTOM.imsUIVendorCardCUSTOM.html">imsUI_VendorCard_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIVendorCardCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ExistsByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUIItemCardCUSTOM.imsUIVendorCardCUSTOM.ExistsByID.html">ExistsByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//IntuitiveUI_MasterControl_CUSTOM
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveUIMasterControlCUSTOM", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveUIMasterControlCUSTOM");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveUIMasterControlCUSTOM")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUICustomerCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUIMasterControlCUSTOM.imsUICustomerCUSTOM.html">imsUI_Customer_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUICustomerCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUIMasterControlCUSTOM.imsUICustomerCUSTOM.ID.html">ID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIVendorCardCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUIMasterControlCUSTOM.imsUIVendorCardCUSTOM.html">imsUI_VendorCard_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIVendorCardCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ExistsByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUIMasterControlCUSTOM.imsUIVendorCardCUSTOM.ExistsByID.html">ExistsByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//IntuitiveUI_PurchaseOrder_CUSTOM
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveUIPurchaseOrderCUSTOM", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveUIPurchaseOrderCUSTOM");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveUIPurchaseOrderCUSTOM")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUICustomerCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUIPurchaseOrderCUSTOM.imsUICustomerCUSTOM.html">imsUI_Customer_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUICustomerCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUIPurchaseOrderCUSTOM.imsUICustomerCUSTOM.ID.html">ID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIVendorCardCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUIPurchaseOrderCUSTOM.imsUIVendorCardCUSTOM.html">imsUI_VendorCard_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIVendorCardCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ExistsByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUIPurchaseOrderCUSTOM.imsUIVendorCardCUSTOM.ExistsByID.html">ExistsByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//IntuitiveUI_Quote_CUSTOM
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveUIQuoteCUSTOM", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveUIQuoteCUSTOM");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveUIQuoteCUSTOM")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUICustomerCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUIQuoteCUSTOM.imsUICustomerCUSTOM.html">imsUI_Customer_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUICustomerCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUIQuoteCUSTOM.imsUICustomerCUSTOM.ID.html">ID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIVendorCardCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUIQuoteCUSTOM.imsUIVendorCardCUSTOM.html">imsUI_VendorCard_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIVendorCardCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ExistsByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUIQuoteCUSTOM.imsUIVendorCardCUSTOM.ExistsByID.html">ExistsByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//IntuitiveUI_SalesOrder_CUSTOM
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveUISalesOrderCUSTOM", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveUISalesOrderCUSTOM");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveUISalesOrderCUSTOM")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUICustomerCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUISalesOrderCUSTOM.imsUICustomerCUSTOM.html">imsUI_Customer_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUICustomerCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUISalesOrderCUSTOM.imsUICustomerCUSTOM.ID.html">ID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIVendorCardCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUISalesOrderCUSTOM.imsUIVendorCardCUSTOM.html">imsUI_VendorCard_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIVendorCardCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ExistsByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUISalesOrderCUSTOM.imsUIVendorCardCUSTOM.ExistsByID.html">ExistsByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//IntuitiveUI_Shipment_CUSTOM
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveUIShipmentCUSTOM", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveUIShipmentCUSTOM");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveUIShipmentCUSTOM")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUICustomerCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUIShipmentCUSTOM.imsUICustomerCUSTOM.html">imsUI_Customer_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUICustomerCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUIShipmentCUSTOM.imsUICustomerCUSTOM.ID.html">ID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIVendorCardCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUIShipmentCUSTOM.imsUIVendorCardCUSTOM.html">imsUI_VendorCard_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIVendorCardCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ExistsByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUIShipmentCUSTOM.imsUIVendorCardCUSTOM.ExistsByID.html">ExistsByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//IntuitiveUI_ShopDataMaintenance_CUSTOM
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveUIShopDataMaintenanceCUSTOM", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveUIShopDataMaintenanceCUSTOM");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveUIShopDataMaintenanceCUSTOM")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUICustomerCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUIShopDataMaintenanceCUSTOM.imsUICustomerCUSTOM.html">imsUI_Customer_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUICustomerCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUIShopDataMaintenanceCUSTOM.imsUICustomerCUSTOM.ID.html">ID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIVendorCardCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUIShopDataMaintenanceCUSTOM.imsUIVendorCardCUSTOM.html">imsUI_VendorCard_CUSTOM</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsUIVendorCardCUSTOM")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ExistsByID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUIShopDataMaintenanceCUSTOM.imsUIVendorCardCUSTOM.ExistsByID.html">ExistsByID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}

	return txt;
			
}

function MenuImsBaseClasses(SourcePage)
{
	var txt;
	//IntuitiveAppObjectFramework2
	txt = '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveAppObjectFramework2", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveAppObjectFramework2");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveAppObjectFramework2")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsAppObject", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveAppObjectFramework2.imsAppObject.html">imsAppObject</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsAppObject")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveAppObjectFramework2.imsAppObject.ID.html">ID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIVendorCardCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUICustomerCUSTOM.imsUIVendorCardCUSTOM.html">imsUI_VendorCard_CUSTOM</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//IntuitiveForms
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "IntuitiveForms", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("IntuitiveForms");
	txt = txt +						'</div>';
	if (SourcePage[1] == "IntuitiveForms")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsForm", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveForms.imsForm.html">imsForm</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "imsForm")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "ID", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveForms.imsForm.ID.html">ID</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "imsUIVendorCardCUSTOM", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUIItemCardCUSTOM.imsUIVendorCardCUSTOM.html">imsUI_VendorCard_CUSTOM</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +					'</div>';
		}

	return txt;

	}

function MenuPrintingClasses(SourcePage)
{
	var txt;
	//RotairHC_Certificate
	txt = '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairHCCertificate", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairHCCertificate");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairHC_Certificate")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "XXX", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUIShipmentCUSTOM.XXX.html">XXX</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "XXX")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "YYY", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="IntuitiveUIShipmentCUSTOM.XXX.YYY.html">YYY</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "ZZZ", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="IntuitiveUIShipmentCUSTOM.ZZZ.html">ZZZ</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//RotairHC_Report
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairHCReport", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairHCReport");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairHCReport")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "XXX", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairHCReport.XXX.html">XXX</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "XXX")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "YYY", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairHCReport.XXX.YYY.html">YYY</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "ZZZ", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairHCReport.ZZZ.html">ZZZ</a>';
		txt = txt +						'</div>';
		txt = txt + '';
		txt = txt +					'</div>';
		}

	return txt;

	}

function MenuCustomWindowsDialogs(SourcePage)
{
	var txt;
	//RotairDialog_Phrases
	txt = '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairDialogPhrases", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairDialogPhrases");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairDialogPhrases")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "XXX", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairDialog_Phrases.XXX.html">XXX</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "XXX")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "YYY", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDialog_Phrases.XXX.YYY.html">YYY</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	//RotairDialog_Screening
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RotairDialogScreening", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("RotairDialogScreening");
	txt = txt +						'</div>';
	if (SourcePage[1] == "RotairDialogScreening")
		{
		txt = txt +					'<div class="toclevel0">';
		txt = txt + '';
		txt = txt +						'<div class="clip13x9 nav_dots_current">';
		txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
		txt = txt +						'</div>';
		txt = txt +						'<div class="toclevel';
		if (CurrentFocus(SourcePage, "XXX", 2)) txt = txt + ' current'
		txt = txt + '">';
		txt = txt +							'<a href="RotairDialogScreening.XXX.html">XXX</a>';
		txt = txt +						'</div>';
		if (SourcePage[2] == "XXX")
			{
			txt = txt +					'<div class="toclevel0">';
			txt = txt + '';
			txt = txt +						'<div class="clip13x9 nav_dots_current">';
			txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
			txt = txt +						'</div>';
			txt = txt +						'<div class="toclevel';
			if (CurrentFocus(SourcePage, "YYY", 3)) txt = txt + ' current'
			txt = txt + '">';
			txt = txt +							'<a href="RotairDialogScreening.XXX.YYY.html">YYY</a>';
			txt = txt +						'</div>';
			txt = txt + '';
			txt = txt +					'</div>';
			}
		txt = txt + '';
		txt = txt +					'</div>';
		}
	
	return txt;

	}

function MenuExternalPrograms(SourcePage)
{
	var txt;
	//Code Recon
	txt = '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "CodeRecon", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("CodeRecon");
	txt = txt +						'</div>';
	//Data Dictionary
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "DataDictionary", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("DataDictionary");
	txt = txt +						'</div>';
	//DB Search
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "DBSearch", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("DBSearch");
	txt = txt +						'</div>';
	//EnumBuilder
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "EnumBuilder", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("EnumBuilder");
	txt = txt +						'</div>';
	//ERP Picker
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "ERPPicker", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("ERPPicker");
	txt = txt +						'</div>';
	//LLM Client
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "LLMClient", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("LLMClient");
	txt = txt +						'</div>';
	//LLM Server
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "LLMServer", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("LLMServer");
	txt = txt +						'</div>';
	//NetGen
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "NetGen", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							AssemblyLink("NetGen");
	txt = txt +						'</div>';

	return txt;

	}

function MenuStoredProcedures(SourcePage)
{
	var txt;
	//CreateHistoryTrigger
	txt = '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "CreateHistoryTrigger", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							StoredProceduresLink("CreateHistoryTrigger");
	txt = txt +						'</div>';
	//GetFindTypeSQL
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "GetFindTypeSQL", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							StoredProceduresLink("GetFindTypeSQL");
	txt = txt +						'</div>';
	//RestoreLatest
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RestoreLatest", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							StoredProceduresLink("RestoreLatest");
	txt = txt +						'</div>';
	//RestoreLatestToDev
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RestoreLatestToDev", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							StoredProceduresLink("RestoreLatestToDev");
	txt = txt +						'</div>';
	//RestoreLatestToTest
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "RestoreLatestToTest", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							StoredProceduresLink("RestoreLatestToTest");
	txt = txt +						'</div>';
	//ToggleCustom
	txt = txt + '';
	txt = txt +						'<div class="clip13x9 nav_dots_current">';
	txt = txt +							'<img src="Graphics/Graphics.png" class="tree_dots_pic" alt="">';
	txt = txt +						'</div>';
	txt = txt +						'<div class="toclevel';
	if (CurrentFocus(SourcePage, "ToggleCustom", 1)) txt = txt + ' current'
	txt = txt + '">';
	txt = txt +							StoredProceduresLink("ToggleCustom");
	txt = txt +						'</div>';

	return txt;

	}

function PurchaseOrderExportComplianceEmail()
{
	var txt;
	//Help explaining why emails go out for purchase orders that may need an export license
	txt = '<ul>';
	txt = txt + '<li>The vendor has foreign  contacts and in the case of a pre-existing purchase order, the vendor did not change from the last time it was saved.:</li>';
	txt = txt + '	<ul>';
	txt = txt + '	<li>At least one defense article was added; send an email warning about it.</li>';
	txt = txt + '	<li>No defense articles were added and this is a new purchase order; send an email warning about the foreign  vendor.</li>';
	txt = txt + '	</ul>';
	txt = txt + '<li>If the vendor did change and it is does have foreign  contacts, send an email whether the purchase order has defense articles or not.</li>';
	txt = txt + '</ul>';

	return txt;
}

function IsMenuLoaded()
{
	alert('MenuIsLoaded');
}