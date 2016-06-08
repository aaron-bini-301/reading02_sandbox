//javascript native function wrapped in $() creates jquery object with the passed in id
//that element fades out in two seconds
$(function(){
  $(document.getElementById('three')).fadeOut(2000);
});
