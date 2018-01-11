url = location.href.replace(/\/[\d\.]+\//, "/current/");
if ( url != location.href)
{
	location.href = url;
}