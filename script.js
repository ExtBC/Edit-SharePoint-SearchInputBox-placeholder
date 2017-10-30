     $(document).ready(function(){
          SetDefaultValues();
          $('#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sbox')
               .focus(FocusPlaceHolder);
          $('#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sbox')
               .blur(BlurPlaceHolder);
     });

     function FocusPlaceHolder(){
          var value = $('#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sbox')
               .val();
          if(value == "Поиск") 
          $('#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sbox')
               .val("");
     }

     function BlurPlaceHolder(){
          var value = $('#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sbox')
               .val();
          if(value == "Поиск" || value == "Поиск на этом сайте" )
          SetDefaultValues(); 

     }

     function SetDefaultValues(){
          $('#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sbox')
               .attr("placeholder", "Поиск по сайту");
          $('#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sbox')
               .attr("title", "Поиск по сайту");
          $('#ctl00_PlaceHolderSearchArea_SmallSearchInputBox1_csr_sbox')
               .val("Поиск"); 
     }