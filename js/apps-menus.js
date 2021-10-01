function showImpactWidget(menuType, heroMenu, site) {
    var folder = '';

    switch (menuType) {
        case 'parks':
            folder = '/apps/img/impact/land/';
            break;

        case 'feature':
            folder = '/apps/school/';
            break;

        case 'air':
            folder = '';
            break;

        case 'energy':
            folder = '';
            break;
    }

    //heroMenu.air.img = folder + "air.jpg";
    //heroMenu.land.img = folder + "land.jpg";
    //heroMenu.energy.img = folder + "energy.jpg";

    var html = [];
    var i = 0;

    html[i++] = "<div class='impactIcons'>";
    html[i++] = "<div class='impactIcon_Air' onclick=\"goHash({'set':'air','indicators':'GHG,GCC,MGHG,OGHG,HRSP,OZON,SMOG,HAPS'});\">Air</div>";
    html[i++] = "<div class='impactIcon_Water' onclick=\"goHash({'set':'water','indicators':'WATR,ACID,EUTR,ETOX'});\">Water</div>";
    html[i++] = "<div class='impactIcon_Health' onclick=\"goHash({'set':'health','indicators':'HTOX,HCAN,HNCN,HTOX,HRSP'});\">Health</div>";
    html[i++] = "<div class='impactIcon_Land' onclick=\"goHash({'set':'land','indicators':'LAND,MNRL,PEST,METL,CRHW,CMSW,FMSW,CCDD'});\">Land</div>";
    html[i++] = "<div class='impactIcon_Energy' onclick=\"goHash({'set':'energy','indicators':'ENRG,NNRG,RNRG'});\">Energy</div>";
    html[i++] = "<div class='impactIcon_Prosperity' onclick=\"goHash({'set':'prosperity','indicators':'VADD,JOBS'});\">Prosperity</div>";
    html[i++] = "</div>";

    $(document).ready(function() {
        $('#insertImpactIcons').html(html.join(''));
    });
}

function showHeroMenu(menuType, heroMenu, site) {
    var menuImages = "";
      $.each(heroMenu, function (key, val) {
            //alert(key + val);
            //alert(heroMenu[key].img);
            menuImages += "<div>";
            menuImages += "<div style='max-height:110px;overflow:hidden'><a href='" + val.img + "'><img src='" + val.img + "'></a></div>";
            menuImages += key.toUpperCase();
            menuImages += "</div>";
      });
      $(document).ready(function() {
        $("#menuImages").html(menuImages);
      });
}