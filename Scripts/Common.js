//Author - John Maher
function Init(SourcePage)
{
	Source = new Array(8);
	
	for (r = 0; r <= Source.length - 1; r++)
		Source[r] = ''
		
}

function CurrentFocus(SourcePage, FocusedItem, Level)
{
	return (SourcePage[Level] == FocusedItem && SourcePage[Level + 1] == '')
}

function CurrentFocustest(SourcePage, FocusedItem, Level)
{
	window.alert(SourcePage[Level] + ' == ' + FocusedItem + ' && ' + SourcePage[Level + 1])
	return (SourcePage[Level] == FocusedItem && SourcePage[Level + 1] == '')
}

function ImageToggle(Image)
{
	//Need something to shrink and expand large charts
	if (ImageToggle.FullSize === undefined)
		ImageToggle.FullSize = true;

	if (ImageToggle.FullSize)
		{
			//Image.style.maxWidth="100%";
			Image.style="max-width: 100%";
			ImageToggle.FullSize = false;
		}
	else
		{
			//Image.style.maxWidth="none";
			Image.style="max-width: none";
			Image.width=Image.naturalWidth;
			ImageToggle.FullSize = true;
		}
	return 1
}

function CollapseExpand(divID) {

	var divObject = document.getElementById(divID);
	var currentCssClass = divObject.className;

	if (divObject.style.display == "none") 
		{
			divObject.style.display = "block" ;
			document[divID].src = "Graphics/minus.png";
		}
	else 
		{
			divObject.style.display = "none";
			document[divID].src = "Graphics/plus.png";
		}

}

function IsCommonLoaded()
{
	alert('Common Is Loaded');
}