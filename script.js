
        // this part works to display the about me tags to view  the information in out
  var tablinks = document.getElementsByClassName("tab-links");
  var tabcontents = document.getElementsByClassName("tab-contents");

  function opentab(tabname){
      for(tablink of tablinks){
            tablink.classList.remove("active-link");
        }
        for (tabcontent of tabcontents){
                tabcontent.classList.remove("active-tab");
            }
            event.currentTarget.classList.add("active-link");
            document.getElementById(tabname).classList.add("active-tab");

        }
