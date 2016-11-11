
var currentInput;

function updateBits(bitEl){
  console.log('Global :: updateBits()');
  
  var currentBit = bitEl.innerText;
  if(currentBit == '0')
    currentBit = '1';
  else
    currentBit = '0';
  bitEl.innerText = currentBit;
  
  // $(".bit")[0].innerText = '1';
  
  var binVal = '';
  var bits = $(".bit");
  bits.each(function(id, el){
    binVal += el.innerText;
  });
  
  $("#binInput").val(binVal);
  $("#binInput").change();
}

$(function(){
  
  currentInput = $("#decInput");
  
  $("#decInput").focus(function(){
    currentInput = $(this);
  });
  
  $("#hexInput").focus(function(){
    currentInput = $(this);
  });
  
  $("#binInput").focus(function(){
    currentInput = $(this);
  });
  
  
  $("#decCopy").click(function(){
    var val = $("#decInput").val();
    if(val){
      clipboard.copy(val);
    }
  });
  
  $("#hexCopy").click(function(){
    var val = $("#hexInput").val();
    if(val){
      clipboard.copy(val);
    }
  });
  
  $("#binCopy").click(function(){
    var val = $("#binInput").val();
    if(val){
      clipboard.copy(val);
    }
  });
  
  $("#buttonClear").click(function(){
    $("#decInput").val('');
    $("#hexInput").val('');
    $("#binInput").val('');
    
    $("#decInput").focus();
  });
  
  $("#buttonCopyAll").click(function(){
    var val = '';
    
    val += $("#decInput").val() + '\n';
    val += $("#hexInput").val() + '\n';
    val += $("#binInput").val();
    
    if(val.trim()){
      clipboard.copy(val);
    }
    
    $("#decInput").focus();
  });
  
});
