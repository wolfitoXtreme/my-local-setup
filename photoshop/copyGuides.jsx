#target photoshop
main();
function main(){
if(Number(app.version.match(/\d+/)) <12) return;
if(!documents.length) return;
var startRulerUnits = app.preferences.rulerUnits;
app.preferences.rulerUnits = Units.PIXELS;
if(ScriptUI.environment.keyboardState.shiftKey ){
    setGuides();
    }else{
        displayGuides();
        }
app.preferences.rulerUnits = startRulerUnits;
function setGuides(){
var guides = app.activeDocument.guides;
if(guides.length == 0){
    alert("No guides exist");
    return;
    }
var gH = '';
var gV = '';
for( var g = 0; g < guides.length; g++ ){
    if(guides[g].direction.toString() == 'Direction.HORIZONTAL'){
        gH+=(parseInt(guides[g].coordinate.value));
        gH+=',';
        }else{
            gV+=(parseInt(guides[g].coordinate.value));
            gV+=','
            }
}
gH=gH.replace(/,$/,'');
gV=gV.replace(/,$/,'');
currentGuides = 'Layer Guides' + "¬" + gH + "¬" + gV;
var desc2 = new ActionDescriptor();
desc2.putString(0, currentGuides.toSource()); 
app.putCustomOptions('7a301ec0-afde-11e1-afa6-0800200c9a66', desc2, true );
}
function displayGuides(){
try{
var desc1 = app.getCustomOptions('7a301ec0-afde-11e1-afa6-0800200c9a66');
var layerGuides = eval(desc1.getString(0));
    }catch(e){return;}
clearGuides();
var ar1 = layerGuides.toString().split('¬');
var Hor = ar1[1].toString().split(',');
var Ver = ar1[2].toString().split(',');
for(var H in Hor){
    activeDocument.guides.add(Direction.HORIZONTAL,new UnitValue(Number(Hor[H]),'px'));
    }
for(var V in Ver){
    activeDocument.guides.add(Direction.VERTICAL,new UnitValue(Number(Ver[V]),'px'));
    }
}
}
function clearGuides() { 
   var id556 = charIDToTypeID( "Dlt " ); 
       var desc102 = new ActionDescriptor(); 
       var id557 = charIDToTypeID( "null" ); 
           var ref70 = new ActionReference(); 
           var id558 = charIDToTypeID( "Gd  " ); 
           var id559 = charIDToTypeID( "Ordn" ); 
           var id560 = charIDToTypeID( "Al  " ); 
           ref70.putEnumerated( id558, id559, id560 ); 
       desc102.putReference( id557, ref70 ); 
   executeAction( id556, desc102, DialogModes.NO ); 
};