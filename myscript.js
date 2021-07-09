


function SHprojects()
{
    var pjBtn = document.getElementById("pjs");
    isHidden = pjBtn.hidden;
    if(isHidden)
    {
        pjBtn.hidden = false;
    }
    else
    {
        pjBtn.hidden = true;
    }
}

function Theme_Change()
{
    var mainbody = document.getElementById("mainbody");
    var btn = document.getElementById("PJbutton");
    var btn2 = document.getElementById("theme_button");
    
    var redBG = "rgb(219, 35, 73)";
    
    var mainStyle = window.getComputedStyle(mainbody);

    var BG = mainStyle.getPropertyValue('background-color');
    
    if(BG==redBG)
    {
        mainbody.style.setProperty("background-color", "#23272a");
        btn.style.setProperty("background-color", "#23272a");
        btn2.style.setProperty("background-color", "#DB2349");
        
    }
    else{
        mainbody.style.setProperty("background-color", "#DB2349");
        btn.style.setProperty("background-color", "#DB2349");
        btn2.style.setProperty("background-color", "#23272a");
    }
    

   
    
}