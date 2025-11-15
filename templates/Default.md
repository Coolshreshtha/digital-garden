<%*
let title =tp.file.title
if(title.startsWith("Untitled")){
	title =await tp.system.prompt("Title");
	if(title) { await tp.file.rename(title); }
}
%>
