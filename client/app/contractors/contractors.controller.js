'use strict';

angular.module('local101App')
  .controller('ContractorsCtrl', function ($scope) {
    $scope.jobs = [{
    	name: "carpenter",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/Comm-Gen_Craft.aspx"
    },
    {
    	name: "millwrights",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/MW_Craft.aspx"
    },
    {
    	name: "pile-drivers",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/PiledriversCraft.aspx"
    },
    {
    	name: "lathers",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/LathersCraft.aspx"
    },
    {
    	name: "millwork",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/Mill-Cab_Craft.aspx"
    },
    {
    	name: "interior-systems",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/InSysCraft.aspx"
    },
    {
    	name: "residential",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/ResFramer_Craft.aspx"
    },
    {
    	name: "floor-coverers",
    	link: "https://carpenters.org/UBC_Crafts_top-nav/Floor_Coverers_Craft.aspx"
    }];
  });
