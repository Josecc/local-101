'use strict';

angular.module('local101App')
  .controller('ContractorsCtrl', function ($scope) {
    $scope.jobs = [{
    	name: "carpenter",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/Comm-Gen_Craft.aspx",
        image: "assets/images/carpenter.jpg"
    },
    {
    	name: "millwrights",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/MW_Craft.aspx",
        image: "assets/images/millwrights.jpg"
    },
    {
    	name: "pile-drivers",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/PiledriversCraft.aspx",
        image: "assets/images/pile-drivers.jpg"
    },
    {
    	name: "lathers",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/LathersCraft.aspx",
        image: "assets/images/lathers.jpg"
    },
    {
    	name: "millwork",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/Mill-Cab_Craft.aspx",
        image: "assets/images/millwork.jpg"
    },
    {
    	name: "interior-systems",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/InSysCraft.aspx",
        image: "assets/images/interior-systems.jpg"
    },
    {
    	name: "residential",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/ResFramer_Craft.aspx",
        image: "assets/images/residential.jpg"
    },
    {
    	name: "floor-coverers",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/Floor_Coverers_Craft.aspx",
        image: "assets/images/floor-coverers.jpg"
    }];
  });
