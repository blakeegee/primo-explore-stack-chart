var app = angular.module('viewCustom', ['stackChart']);
angular
  .module('stackChart', [])
  .component('prmSearchResultAvailabilityLineAfter', {
  bindings: { parentCtrl: '<' },
    controller: function controller($scope) {

//Gather availability info
           try {
               this.availability = this.parentCtrl.result.delivery.bestlocation.availabilityStatus;
           } catch(e) {
               this.availability = "";
           }
//Gather library location info
           try {
               this.libLocation = this.parentCtrl.result.delivery.bestlocation.libraryCode;
           } catch(e) {
               this.libLocation = "";
           }
//Gather library sublocation info
           try {
               this.subLocationCode = this.parentCtrl.result.delivery.bestlocation.subLocationCode;
           } catch(e) {
               this.subLocationCode = "";
           }
//Gather call number information
//Store SuDoc call number info
if (this.subLocationCode.startsWith("whu")) {
//Isolate the prefix from the number.
           try {
               this.callNumberPrefix = this.parentCtrl.result.delivery.bestlocation.callNumber.slice(1, -1).split(":")[0].split("/")[0].split(" ")[0].replace(/\d/g,'');
           } catch(e) {
               this.callNumberPrefix = "";
           }
//Isolate the number from its prefix. 
           try {
               this.callNumberNumber = this.parentCtrl.result.delivery.bestlocation.callNumber.slice(1, -1).split(":")[0].split("/")[0].split(" ")[1];
           } catch(e) {
               this.callNumberNumber = "";
           }
//Store Dewey call number info
		   } else if (this.subLocationCode.startsWith("whd")) {
//Isolate the numeric portion of the dewey.
           try {
               this.callNumberPrefix = this.parentCtrl.result.delivery.bestlocation.callNumber.slice(1, -1).split(" ")[0]
           } catch(e) {
               this.callNumberPrefix = "";
           }
//Isolate the non-numeric portion of the dewey.
           try {
               this.callNumberNumber = this.parentCtrl.result.delivery.bestlocation.callNumber.slice(1, -1).split(" ")[1]
           } catch(e) {
               this.callNumberNumber = "";
           }	
//Store LC call number info
		   } else {
//Isolate the prefix from the number.
           try {
               this.callNumberPrefix = this.parentCtrl.result.delivery.bestlocation.callNumber.slice(1, -1).split(".")[0].replace(/\d/g,'');
           } catch(e) {
               this.callNumberPrefix = "";
           }
//Isolate the number from its prefix.
           try {
               this.callNumberNumber = this.parentCtrl.result.delivery.bestlocation.callNumber.slice(1, -1).split(".")[0].replace(/\D/g,'');
           } catch(e) {
               this.callNumberNumber = "";
           }
}

//Holland, 3rd Floor, US Gov Documents -- whuo, whu, whu6
/*828 - 824*/if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("Y") && this.callNumberNumber > 3 || this.callNumberPrefix.startsWith("Z")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=516&posy=45&width=6&height=34";
/*823*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("Y") && this.callNumberNumber > 2) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=507&posy=45&width=6&height=60";
/*822*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("X") && this.callNumberNumber > 94 || this.callNumberPrefix.startsWith("Y")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=498&posy=45&width=6&height=60";				 
/*821*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("TD") && this.callNumberNumber > 2.1 || this.callNumberPrefix.startsWith("X")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=489&posy=45&width=6&height=60";
/*820*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("T") && this.callNumberNumber > 17.16 || this.callNumberPrefix.startsWith("TD")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=480&posy=45&width=6&height=60";
/*819*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("SE") && this.callNumberNumber > 1.8 || this.callNumberPrefix.startsWith("T")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=471&posy=45&width=6&height=60";	
/*818*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("S") && this.callNumberNumber > 1.43 || this.callNumberPrefix.startsWith("SE")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=462&posy=45&width=6&height=42";
/*817*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("PrEx") && this.callNumberNumber > 6 || this.callNumberPrefix.startsWith("S")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=453&posy=45&width=6&height=42";
/*816*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("PrEx") && this.callNumberNumber > 3.09) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=444&posy=45&width=6&height=43";
/*815*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("N") && this.callNumberNumber > 0 || this.callNumberPrefix.startsWith("PrEx")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=435&posy=44&width=6&height=43";				 
/*814*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("L") && this.callNumberNumber > 37.201 || this.callNumberPrefix.startsWith("MS")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=426&posy=44&width=6&height=43";
/*813*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("L") && this.callNumberNumber > 2.2) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=417&posy=44&width=6&height=58"; 
/*812*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("J") && this.callNumberNumber > 28.17 || this.callNumberPrefix.startsWith("L")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=408&posy=44&width=6&height=58";	
/*811*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("I") && this.callNumberNumber > 53.1 || this.callNumberPrefix.startsWith("J")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=399&posy=44&width=6&height=58";
/*810*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("I") && this.callNumberNumber > 1) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=390&posy=44&width=6&height=58";
/*809*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("HE") && this.callNumberNumber > 3.49 || this.callNumberPrefix.startsWith("HS")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=381&posy=44&width=6&height=58";
/*808*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("GA") && this.callNumberNumber > 1.15 || this.callNumberPrefix.startsWith("HE")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=372&posy=44&width=6&height=58";				 
/*807*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("FP") && this.callNumberNumber > 1.19 || this.callNumberPrefix.startsWith("GA")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=363&posy=44&width=6&height=58";
/*806*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("D") && this.callNumberNumber > 303.6 || this.callNumberPrefix.startsWith("FP")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=354&posy=44&width=6&height=58";
/*805*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("D") && this.callNumberNumber > 5.401) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=345&posy=44&width=6&height=58";
/*804*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("C") && this.callNumberNumber > 59.8 || this.callNumberPrefix.startsWith("D")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=336&posy=44&width=6&height=58";				 
/*803*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("C") && this.callNumberNumber > 3.222) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=327&posy=44&width=6&height=58";
/*802*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("C") && this.callNumberNumber > 3.157) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=318&posy=44&width=6&height=58";
/*801*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("A") && this.callNumberNumber > 92.52 || this.callNumberPrefix.startsWith("C")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=309&posy=44&width=6&height=58";
/*800*/      } else if (this.subLocationCode.startsWith("whu") && this.callNumberPrefix.startsWith("A") && this.callNumberNumber > 0) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=300&posy=44&width=6&height=58";

//Holland, 3rd Floor, Jackson Documents -- whj				 
/*709*/      } else if (this.subLocationCode.startsWith("whj") && this.callNumberPrefix.startsWith("TU") && this.callNumberNumber > 50 || this.callNumberPrefix.startsWith("UNY")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=291&posy=44&width=6&height=58";
/*708*/      } else if (this.subLocationCode.startsWith("whj") && this.callNumberPrefix.startsWith("TP") && this.callNumberNumber > 16 || this.callNumberPrefix.startsWith("TU")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=282&posy=44&width=6&height=58";
/*707*/      } else if (this.subLocationCode.startsWith("whj") && this.callNumberPrefix.startsWith("TIN") && this.callNumberNumber > 16 || this.callNumberPrefix.startsWith("TP")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=273&posy=44&width=6&height=58";
/*706*/      } else if (this.subLocationCode.startsWith("whj") && this.callNumberPrefix.startsWith("PI") && this.callNumberNumber > 32 || this.callNumberPrefix.startsWith("TIN")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=264&posy=44&width=6&height=58";				 
/*705*/      } else if (this.subLocationCode.startsWith("whj") && this.callNumberPrefix.startsWith("PG") && this.callNumberNumber > 128 || this.callNumberPrefix.startsWith("PI")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=255&posy=44&width=6&height=58";
/*704*/      } else if (this.subLocationCode.startsWith("whj") && this.callNumberPrefix.startsWith("PG") && this.callNumberNumber > 127) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=246&posy=44&width=6&height=58";
/*703*/      } else if (this.subLocationCode.startsWith("whj") && this.callNumberPrefix.startsWith("PC") && this.callNumberNumber > 48 || this.callNumberPrefix.startsWith("PG")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=237&posy=44&width=6&height=58";
/*702*/      } else if (this.subLocationCode.startsWith("whj") && this.callNumberPrefix.startsWith("MW") && this.callNumberNumber > 8 || this.callNumberPrefix.startsWith("PC")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=228&posy=44&width=6&height=58";
/*701*/      } else if (this.subLocationCode.startsWith("whj") && this.callNumberPrefix.startsWith("MW") && this.callNumberNumber > 7) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=219&posy=44&width=6&height=58";
/*700*/      } else if (this.subLocationCode.startsWith("whj") && this.callNumberPrefix.startsWith("MA") && this.callNumberNumber > 0) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=210&posy=44&width=6&height=58";

//Holland, 3rd Floor, LC
/*642*/      } else if (this.callNumberPrefix.startsWith("Z") && this.callNumberNumber > 8215 || this.callNumberPrefix.startsWith("ZA")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=104&posy=101&width=5&height=49";
/*641*/      } else if (this.callNumberPrefix.startsWith("Z") && this.callNumberNumber > 7163) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=94&posy=101&width=5&height=49";
/*640*/      } else if (this.callNumberPrefix.startsWith("Z") && this.callNumberNumber > 6950) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=94&posy=101&width=5&height=49";
/*639*/      } else if (this.callNumberPrefix.startsWith("Z") && this.callNumberNumber > 5054) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=68&posy=50&width=5&height=71";
/*638*/      } else if (this.callNumberPrefix.startsWith("Z") && this.callNumberNumber > 5054) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=59&posy=50&width=5&height=71";
/*637*/      } else if (this.callNumberPrefix.startsWith("Z") && this.callNumberNumber > 1037) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=49&posy=50&width=5&height=71";
/*636*/      } else if (this.callNumberPrefix.startsWith("Z") && this.callNumberNumber > 1010) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=50&posy=210&width=5&height=63";
/*635*/      } else if (this.callNumberPrefix.startsWith("Z") && this.callNumberNumber > 906) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=61&posy=210&width=5&height=63";
/*634*/      } else if (this.callNumberPrefix.startsWith("Z") && this.callNumberNumber > 694) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=82&posy=210&width=5&height=63";
/*633*/      } else if (this.callNumberPrefix.startsWith("Z") && this.callNumberNumber > 672) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=93&posy=210&width=5&height=63";
/*632*/      } else if (this.callNumberPrefix.startsWith("Z") && this.callNumberNumber > 312) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=104&posy=210&width=5&height=63";
/*631*/      } else if (this.callNumberPrefix > ("WSU R") || this.callNumberPrefix.startsWith("Z") && this.callNumberNumber > 1) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=114&posy=210&width=5&height=63";
/*630*/      } else if (this.callNumberPrefix > ("WSU D")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=125&posy=210&width=5&height=63";
/*629*/      } else if (this.callNumberPrefix.startsWith("V") && this.callNumberNumber > 220 || this.callNumberPrefix.startsWith("WSU")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=135&posy=210&width=5&height=63";
/*628*/      } else if (this.callNumberPrefix.startsWith("UA") && this.callNumberNumber > 646 || this.callNumberPrefix.startsWith("V")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=146&posy=210&width=5&height=63";
/*627*/      } else if (this.callNumberPrefix.startsWith("U") && this.callNumberNumber > 101 || this.callNumberPrefix.startsWith("UA")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=157&posy=210&width=5&height=63";				 
/*626*/      } else if (this.callNumberPrefix.startsWith("TX") && this.callNumberNumber > 900 || this.callNumberPrefix.startsWith("U")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=168&posy=210&width=5&height=63";
/*625*/      } else if (this.callNumberPrefix.startsWith("TT") && this.callNumberNumber > 504 || this.callNumberPrefix.startsWith("TX")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=178&posy=210&width=5&height=63";
/*624*/      } else if (this.callNumberPrefix.startsWith("TS") && this.callNumberNumber > 148 || this.callNumberPrefix.startsWith("TT")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=188&posy=210&width=5&height=63";
/*623*/      } else if (this.callNumberPrefix.startsWith("TR") && this.callNumberNumber > 299 || this.callNumberPrefix.startsWith("TS")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=199&posy=210&width=5&height=63";
/*622*/      } else if (this.callNumberPrefix.startsWith("TK") && this.callNumberNumber > 9151 || this.callNumberPrefix.startsWith("TR")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=278&posy=169&width=6&height=70";
/*621*/      } else if (this.callNumberPrefix.startsWith("T") && this.callNumberNumber > 174 || this.callNumberPrefix.startsWith("TK")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=288&posy=169&width=6&height=70";
/*620*/      } else if (this.callNumberPrefix.startsWith("SB") && this.callNumberNumber > 482 || this.callNumberPrefix.startsWith("T")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=298&posy=169&width=6&height=70";
/*619*/      } else if (this.callNumberPrefix.startsWith("RC") && this.callNumberNumber > 1200 || this.callNumberPrefix.startsWith("SB")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=309&posy=169&width=6&height=70";
/*618*/      } else if (this.callNumberPrefix.startsWith("RC") && this.callNumberNumber > 488) { /*618*/
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=319&posy=169&width=6&height=70";
/*617*/      } else if (this.callNumberPrefix.startsWith("RC") && this.callNumberNumber > 320) { /*617*/
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=329&posy=169&width=6&height=70";
/*616*/      } else if (this.callNumberPrefix.startsWith("RA") && this.callNumberNumber > 448 || this.callNumberPrefix.startsWith("RC")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=340&posy=169&width=6&height=70";
/*615*/      } else if (this.callNumberPrefix.startsWith("QC") && this.callNumberNumber > 803 || this.callNumberPrefix.startsWith("RA")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=350&posy=169&width=6&height=70";				 
/*614*/      } else if (this.callNumberPrefix.startsWith("Q") && this.callNumberNumber > 123 || this.callNumberPrefix.startsWith("QC")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=362&posy=208&width=6&height=69";
/*613*/      } else if (this.callNumberPrefix.startsWith("PZ") && this.callNumberNumber > 1 || this.callNumberPrefix.startsWith("Q")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=372&posy=208&width=6&height=69";
/*612*/      } else if (this.callNumberPrefix.startsWith("PT") && this.callNumberNumber > 2646 || this.callNumberPrefix.startsWith("PZ")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=382&posy=208&width=6&height=69";
/*611*/      } else if (this.callNumberPrefix.startsWith("PT") && this.callNumberNumber > 2602) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=393&posy=208&width=6&height=69";
/*610*/      } else if (this.callNumberPrefix.startsWith("PT") && this.callNumberNumber > 2292) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=403&posy=208&width=6&height=69";
/*609*/      } else if (this.callNumberPrefix.startsWith("PT") && this.callNumberNumber > 870) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=413&posy=208&width=6&height=69";
/*608*/      } else if (this.callNumberPrefix.startsWith("PS") && this.callNumberNumber > 3572 || this.callNumberPrefix.startsWith("PT")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=423&posy=208&width=6&height=69";
/*607*/      } else if (this.callNumberPrefix.startsWith("PS") && this.callNumberNumber > 3564) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=433&posy=208&width=6&height=69";
/*606*/      } else if (this.callNumberPrefix.startsWith("PS") && this.callNumberNumber > 3557) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=443&posy=208&width=6&height=69";
/*605*/      } else if (this.callNumberPrefix.startsWith("PS") && this.callNumberNumber > 3552) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=458&posy=179&width=6&height=70";
/*604*/      } else if (this.callNumberPrefix.startsWith("PS") && this.callNumberNumber > 3536) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=468&posy=179&width=6&height=70";
/*603*/      } else if (this.callNumberPrefix.startsWith("PS") && this.callNumberNumber > 3522) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=479&posy=179&width=6&height=69";
/*602*/      } else if (this.callNumberPrefix.startsWith("PS") && this.callNumberNumber > 3504) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=497&posy=179&width=6&height=69";
/*601*/      } else if (this.callNumberPrefix.startsWith("PS") && this.callNumberNumber > 1899) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=507&posy=179&width=6&height=69";
/*600*/      } else if (this.callNumberPrefix.startsWith("PS") && this.callNumberNumber > 529) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_3rd.jpg&posx=518&posy=180&width=5&height=68";

//Holland, 2nd Floor, LC
/*593*/      } else if (this.callNumberPrefix.startsWith("PS") && this.callNumberNumber > 168) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=520&posy=25&width=6&height=72";
/*592*/      } else if (this.callNumberPrefix.startsWith("PR") && this.callNumberNumber > 9369 || this.callNumberPrefix.startsWith("PS")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=509&posy=25&width=6&height=72";
/*591*/      } else if (this.callNumberPrefix.startsWith("PR") && this.callNumberNumber > 6063) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=499&posy=25&width=6&height=72";
/*590*/      } else if (this.callNumberPrefix.startsWith("PR") && this.callNumberNumber > 6044) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=489&posy=25&width=6&height=72";
/*589*/      } else if (this.callNumberPrefix.startsWith("PR") && this.callNumberNumber > 6014) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=479&posy=25&width=6&height=72";
/*588*/      } else if (this.callNumberPrefix.startsWith("PR") && this.callNumberNumber > 5699) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=468&posy=25&width=6&height=72";
/*587*/      } else if (this.callNumberPrefix.startsWith("PR") && this.callNumberNumber > 4699) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=458&posy=25&width=6&height=72";
/*586*/      } else if (this.callNumberPrefix.startsWith("PR") && this.callNumberNumber > 4030) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=448&posy=25&width=6&height=72";
/*585*/      } else if (this.callNumberPrefix.startsWith("PR") && this.callNumberNumber > 3094) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=438&posy=25&width=6&height=72";
/*584*/      } else if (this.callNumberPrefix.startsWith("PR") && this.callNumberNumber > 2064) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=428&posy=25&width=6&height=72";
/*583*/      } else if (this.callNumberPrefix.startsWith("PR") && this.callNumberNumber > 657) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=417&posy=25&width=6&height=72";
/*582*/      } else if (this.callNumberPrefix.startsWith("PR") && this.callNumberNumber > 12) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=407&posy=25&width=6&height=72";
/*581*/      } else if (this.callNumberPrefix.startsWith("PQ") && this.callNumberNumber > 8402 || this.callNumberPrefix.startsWith("PR")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=397&posy=25&width=6&height=72";
/*580*/      } else if (this.callNumberPrefix.startsWith("PQ") && this.callNumberNumber > 7296) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=387&posy=25&width=6&height=72";
/*579*/      } else if (this.callNumberPrefix.startsWith("PQ") && this.callNumberNumber > 6179) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=377&posy=25&width=6&height=72";
/*578*/      } else if (this.callNumberPrefix.startsWith("PQ") && this.callNumberNumber > 3919) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=366&posy=25&width=6&height=72";
/*577*/      } else if (this.callNumberPrefix.startsWith("PQ") && this.callNumberNumber > 2604) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=356&posy=25&width=6&height=72";
/*576*/      } else if (this.callNumberPrefix.startsWith("PQ") && this.callNumberNumber > 2002) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=346&posy=25&width=6&height=72";
/*575*/      } else if (this.callNumberPrefix.startsWith("PQ") && this.callNumberNumber > 149) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=336&posy=25&width=6&height=72";
/*574*/      } else if (this.callNumberPrefix.startsWith("PN") && this.callNumberNumber > 6070 || this.callNumberPrefix.startsWith("PQ")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=326&posy=25&width=6&height=72";
/*573*/      } else if (this.callNumberPrefix.startsWith("PN") && this.callNumberNumber > 4722) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=315&posy=25&width=6&height=72";
/*572*/      } else if (this.callNumberPrefix.startsWith("PN") && this.callNumberNumber > 2632) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=305&posy=25&width=6&height=72";
/*571*/      } else if (this.callNumberPrefix.startsWith("PN") && this.callNumberNumber > 1997) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=295&posy=25&width=6&height=72";
/*570*/      } else if (this.callNumberPrefix.startsWith("PN") && this.callNumberNumber > 1991) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=285&posy=25&width=6&height=72";
/*569*/      } else if (this.callNumberPrefix.startsWith("PN") && this.callNumberNumber > 770) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=274&posy=25&width=6&height=72";
/*568*/      } else if (this.callNumberPrefix.startsWith("PN") && this.callNumberNumber > 55) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=264&posy=25&width=6&height=72";
/*567*/      } else if (this.callNumberPrefix.startsWith("PM") && this.callNumberNumber > 2020 || this.callNumberPrefix.startsWith("PN")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=254&posy=25&width=6&height=72";
/*566*/      } else if (this.callNumberPrefix.startsWith("PL") && this.callNumberNumber > 2477 || this.callNumberPrefix.startsWith("PM")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=244&posy=25&width=6&height=72";
/*565*/      } else if (this.callNumberPrefix.startsWith("PL") && this.callNumberNumber > 725) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=233&posy=25&width=6&height=72";
/*564*/      } else if (this.callNumberPrefix.startsWith("PJ") && this.callNumberNumber > 1555 || this.callNumberPrefix.startsWith("PL")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=224&posy=25&width=6&height=72";
/*563*/      } else if (this.callNumberPrefix.startsWith("PG") && this.callNumberNumber > 3481 || this.callNumberPrefix.startsWith("PJ")) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=214&posy=25&width=6&height=72";
/*562*/      } else if (this.callNumberPrefix.startsWith("PG") && this.callNumberNumber > 3452) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=196&posy=23&width=6&height=33";
/*561*/      } else if (this.callNumberPrefix.startsWith("PG") && this.callNumberNumber > 3199) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=186&posy=23&width=6&height=33";
/*560*/      } else if (this.callNumberPrefix.startsWith("PG") && this.callNumberNumber > 1417) {
                 $scope.floorMap="https://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=175&posy=23&width=6&height=33";
/*559*/      } else if (this.callNumberPrefix.startsWith("PF") && this.callNumberNumber > 3002 || this.callNumberPrefix.startsWith("PG")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=164&posy=23&width=6&height=33";
/*558*/      } else if (this.callNumberPrefix.startsWith("PE") && this.callNumberNumber > 1627 || this.callNumberPrefix.startsWith("PF")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=154&posy=23&width=6&height=33";
/*557*/      } else if (this.callNumberPrefix.startsWith("PE") && this.callNumberNumber > 1189) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=143&posy=23&width=6&height=33";
/*556*/      } else if (this.callNumberPrefix.startsWith("PE") && this.callNumberNumber > 1000) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=132&posy=23&width=6&height=33";
/*555*/      } else if (this.callNumberPrefix.startsWith("PD") && this.callNumberNumber > 1499 || this.callNumberPrefix.startsWith("PE")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=122&posy=23&width=6&height=33";
/*554*/      } else if (this.callNumberPrefix.startsWith("PC") && this.callNumberNumber > 4119 || this.callNumberPrefix.startsWith("PD")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=112&posy=23&width=6&height=33";
/*553*/      } else if (this.callNumberPrefix.startsWith("PC") && this.callNumberNumber > 0) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=98&posy=25&width=6&height=52";
/*552*/      } else if (this.callNumberPrefix.startsWith("PA") && this.callNumberNumber > 6695 || this.callNumberPrefix.startsWith("PC")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=88&posy=25&width=6&height=52";
/*551*/      } else if (this.callNumberPrefix.startsWith("PA") && this.callNumberNumber > 2088) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=78&posy=25&width=6&height=52";
/*550*/      } else if (this.callNumberPrefix.startsWith("P") && this.callNumberNumber > 217 || this.callNumberPrefix.startsWith("PA")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=57&posy=25&width=6&height=52";
/*549*/      } else if (this.callNumberPrefix.startsWith("P") && this.callNumberNumber > 92) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=68&posy=25&width=6&height=52";
/*548*/      } else if (this.callNumberPrefix.startsWith("P") && this.callNumberNumber > 10) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=47&posy=25&width=6&height=52";
/*547*/      } else if (this.callNumberPrefix.startsWith("NX") && this.callNumberNumber > 0 || this.callNumberPrefix.startsWith("P")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=47&posy=25&width=6&height=52";
/*546*/      } else if (this.callNumberPrefix.startsWith("NK") && this.callNumberNumber > 4164 || this.callNumberPrefix.startsWith("NX")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=37&posy=84&width=6&height=53";
/*545*/      } else if (this.callNumberPrefix.startsWith("NK") && this.callNumberNumber > 1124) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=47&posy=84&width=6&height=53";
/*544*/      } else if (this.callNumberPrefix.startsWith("ND") && this.callNumberNumber > 2839 || this.callNumberPrefix.startsWith("NK")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=58&posy=84&width=6&height=53";
/*543*/      } else if (this.callNumberPrefix.startsWith("ND") && this.callNumberNumber > 812) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=68&posy=84&width=6&height=53";
/*542*/      } else if (this.callNumberPrefix.startsWith("ND") && this.callNumberNumber > 552) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=78&posy=84&width=6&height=53";
/*541*/      } else if (this.callNumberPrefix.startsWith("ND") && this.callNumberNumber > 236) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=88&posy=84&width=6&height=53";
/*540*/      } else if (this.callNumberPrefix.startsWith("NC") && this.callNumberNumber > 1498 || this.callNumberPrefix.startsWith("ND")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=97&posy=84&width=6&height=53";
/*539*/      } else if (this.callNumberPrefix.startsWith("NC") && this.callNumberNumber > 974) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=78&posy=163&width=6&height=42";
/*538*/      } else if (this.callNumberPrefix.startsWith("NB") && this.callNumberNumber > 1304 || this.callNumberPrefix.startsWith("NC")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=68&posy=163&width=6&height=42";
/*537*/      } else if (this.callNumberPrefix.startsWith("NB") && this.callNumberNumber > 93) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=57&posy=163&width=6&height=42";
/*536*/      } else if (this.callNumberPrefix.startsWith("NA") && this.callNumberNumber > 7099 || this.callNumberPrefix.startsWith("NB")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=47&posy=163&width=6&height=42";
/*535*/      } else if (this.callNumberPrefix.startsWith("NA") && this.callNumberNumber > 734) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=37&posy=163&width=6&height=42";
/*534*/      } else if (this.callNumberPrefix.startsWith("N") && this.callNumberNumber > 7379 || this.callNumberPrefix.startsWith("NA")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=37&posy=213&width=6&height=58";
/*533*/      } else if (this.callNumberPrefix.startsWith("N") && this.callNumberNumber > 6609) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=48&posy=213&width=6&height=58";
/*532*/      } else if (this.callNumberPrefix.startsWith("N") && this.callNumberNumber > 6486) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=58&posy=213&width=6&height=58";
/*531*/      } else if (this.callNumberPrefix.startsWith("N") && this.callNumberNumber > 609) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=69&posy=213&width=6&height=58";
/*530*/      } else if (this.callNumberPrefix.startsWith("N") && this.callNumberNumber > 4) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=79&posy=213&width=6&height=58";				 
/*529*/      } else if (this.callNumberPrefix.startsWith("N") && this.callNumberNumber > 0) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=89&posy=213&width=6&height=58";
/*528*/      } else if (this.callNumberPrefix.startsWith("MT") && this.callNumberNumber > 0 || this.callNumberPrefix.startsWith("N")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=99&posy=213&width=6&height=58";
/*527*/      } else if (this.callNumberPrefix.startsWith("ML") && this.callNumberNumber > 1210 || this.callNumberPrefix.startsWith("MT")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=109&posy=213&width=6&height=58";
/*526*/      } else if (this.callNumberPrefix.startsWith("ML") && this.callNumberNumber > 409) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=120&posy=213&width=6&height=58";
/*525*/      } else if (this.callNumberPrefix.startsWith("ML") && this.callNumberNumber > 156) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=130&posy=213&width=6&height=58";
/*524*/      } else if (this.callNumberPrefix.startsWith("ML") && this.callNumberNumber > 26) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=140&posy=213&width=6&height=58";
/*523*/      } else if (this.callNumberPrefix.startsWith("ML") && this.callNumberNumber > 0) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=151&posy=213&width=6&height=58";
/*522*/      } else if (this.callNumberPrefix.startsWith("LD") && this.callNumberNumber > 5730 || this.callNumberPrefix.startsWith("ML")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=161&posy=213&width=6&height=58";				 
/*521*/      } else if (this.callNumberPrefix.startsWith("LC") && this.callNumberNumber > 4801 || this.callNumberPrefix.startsWith("LD")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=171&posy=213&width=6&height=58";
/*520*/      } else if (this.callNumberPrefix.startsWith("LC") && this.callNumberNumber > 3969) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=182&posy=213&width=6&height=58";
/*519*/      } else if (this.callNumberPrefix.startsWith("LC") && this.callNumberNumber > 1099) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=192&posy=213&width=6&height=58";
/*518*/      } else if (this.callNumberPrefix.startsWith("LC") && this.callNumberNumber > 89) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=202&posy=213&width=6&height=58";
/*517*/      } else if (this.callNumberPrefix.startsWith("LB") && this.callNumberNumber > 2842 || this.callNumberPrefix.startsWith("LC")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=290&posy=166&width=6&height=42";
/*516*/      } else if (this.callNumberPrefix.startsWith("LB") && this.callNumberNumber > 2367) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=301&posy=166&width=6&height=42";
/*515*/      } else if (this.callNumberPrefix.startsWith("LB") && this.callNumberNumber > 2309) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=313&posy=166&width=6&height=42";
/*514*/      } else if (this.callNumberPrefix.startsWith("LB") && this.callNumberNumber > 1575) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=324&posy=166&width=6&height=42";
/*513*/      } else if (this.callNumberPrefix.startsWith("LB") && this.callNumberNumber > 1102) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=336&posy=166&width=6&height=42";
/*512*/      } else if (this.callNumberPrefix.startsWith("LB") && this.callNumberNumber > 1043) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=348&posy=166&width=6&height=42";
/*511*/      } else if (this.callNumberPrefix.startsWith("LB") && this.callNumberNumber > 1028) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=355&posy=238&width=6&height=31";
/*510*/      } else if (this.callNumberPrefix.startsWith("LB") && this.callNumberNumber > 1027) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=365&posy=238&width=6&height=31";
/*509*/      } else if (this.callNumberPrefix.startsWith("LB") && this.callNumberNumber > 14) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=376&posy=238&width=6&height=31";
/*508*/      } else if (this.callNumberPrefix.startsWith("LA") && this.callNumberNumber > 229 || this.callNumberPrefix.startsWith("LB")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=386&posy=238&width=6&height=31";
/*507*/      } else if (this.callNumberPrefix.startsWith("LA") && this.callNumberNumber > 209) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=398&posy=238&width=6&height=31";
/*506*/      } else if (this.callNumberPrefix.startsWith("L") && this.callNumberNumber > 899 || this.callNumberPrefix.startsWith("LA")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=409&posy=238&width=6&height=31";
/*505*/      } else if (this.callNumberPrefix.startsWith("L") && this.callNumberNumber > 11) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=420&posy=238&width=6&height=31";
/*504*/      } else if (this.callNumberPrefix.startsWith("L") && this.callNumberNumber > 10) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=431&posy=238&width=6&height=31";
/*503*/      } else if (this.callNumberPrefix.startsWith("L") && this.callNumberNumber > 0) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_2nd.jpg&posx=443&posy=238&width=6&height=31";

//Holland, 1st Floor, LC
/*432*/      } else if (this.callNumberPrefix.startsWith("KJC") && this.callNumberNumber > 4999 || this.callNumberPrefix.startsWith("KZZ")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=351&posy=34&width=3&height=37";
/*431*/      } else if (this.callNumberPrefix.startsWith("KFW") && this.callNumberNumber > 18 || this.callNumberPrefix.startsWith("KJC")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=345&posy=34&width=3&height=37";
/*430*/      } else if (this.callNumberPrefix.startsWith("KF") && this.callNumberNumber > 8744 || this.callNumberPrefix.startsWith("KFW")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=323&posy=34&width=3&height=37";
/*429*/      } else if (this.callNumberPrefix.startsWith("KF") && this.callNumberNumber > 6359) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=317&posy=34&width=3&height=37";				 
/*428*/      } else if (this.callNumberPrefix.startsWith("KF") && this.callNumberNumber > 5690) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=312&posy=34&width=3&height=37";
/*427*/      } else if (this.callNumberPrefix.startsWith("KF") && this.callNumberNumber > 4224) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=306&posy=34&width=3&height=37";
/*426*/      } else if (this.callNumberPrefix.startsWith("KF") && this.callNumberNumber > 1445) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=300&posy=34&width=3&height=37";
/*425*/      } else if (this.callNumberPrefix.startsWith("KF") && this.callNumberNumber > 100) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=295&posy=34&width=3&height=37";
/*424*/      } else if (this.callNumberPrefix.startsWith("K") && this.callNumberNumber > 486 || this.callNumberPrefix.startsWith("KF")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=290&posy=34&width=3&height=37";
/*423*/      } else if (this.callNumberPrefix.startsWith("K") && this.callNumberNumber > 11) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=267&posy=34&width=3&height=38";
/*422*/      } else if (this.callNumberPrefix.startsWith("K") && this.callNumberNumber > 0) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=261&posy=34&width=3&height=38";
/*421*/      } else if (this.callNumberPrefix.startsWith("JZ") && this.callNumberNumber > 5009) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=256&posy=34&width=3&height=38";
/*420*/      } else if (this.callNumberPrefix.startsWith("JX") && this.callNumberNumber > 1976 || this.callNumberPrefix.startsWith("JZ")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=250&posy=34&width=3&height=38";
/*419*/      } else if (this.callNumberPrefix.startsWith("JX") && this.callNumberNumber > 1394) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=244&posy=34&width=3&height=38";
/*418*/      } else if (this.callNumberPrefix.startsWith("JX") && this.callNumberNumber > 1) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=239&posy=34&width=3&height=38";
/*417*/      } else if (this.callNumberPrefix.startsWith("JS") && this.callNumberNumber > 39 || this.callNumberPrefix.startsWith("JX")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=233&posy=34&width=3&height=38";
/*416*/      } else if (this.callNumberPrefix.startsWith("JN") && this.callNumberNumber > 3970 || this.callNumberPrefix.startsWith("JS")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=227&posy=34&width=3&height=38";
/*415*/      } else if (this.callNumberPrefix.startsWith("JN") && this.callNumberNumber > 39) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=222&posy=34&width=3&height=38";
/*414*/      } else if (this.callNumberPrefix.startsWith("JK") && this.callNumberNumber > 2264 || this.callNumberPrefix.startsWith("JN")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=216&posy=34&width=3&height=38";
/*413*/      } else if (this.callNumberPrefix.startsWith("JK") && this.callNumberNumber > 467) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=210&posy=34&width=3&height=38";				 
/*412*/      } else if (this.callNumberPrefix.startsWith("JF") && this.callNumberNumber > 2048 || this.callNumberPrefix.startsWith("JK")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=205&posy=34&width=3&height=38";
/*411*/      } else if (this.callNumberPrefix.startsWith("JC") && this.callNumberNumber > 573 || this.callNumberPrefix.startsWith("JF")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=199&posy=34&width=3&height=38";
/*410*/      } else if (this.callNumberPrefix.startsWith("JA") && this.callNumberNumber > 84 || this.callNumberPrefix.startsWith("JC")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=194&posy=34&width=3&height=38";
/*409*/      } else if (this.callNumberPrefix.startsWith("JA") && this.callNumberNumber > 13) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=188&posy=34&width=3&height=38";
/*408*/      } else if (this.callNumberPrefix.startsWith("HX") && this.callNumberNumber > 703 || this.callNumberPrefix.startsWith("JA")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=183&posy=34&width=3&height=38";
/*407*/      } else if (this.callNumberPrefix.startsWith("HX") && this.callNumberNumber > 10) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=161&posy=34&width=3&height=37";
/*406*/      } else if (this.callNumberPrefix.startsWith("HV") && this.callNumberNumber > 9104 || this.callNumberPrefix.startsWith("HX")) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=155&posy=34&width=3&height=37";
/*405*/      } else if (this.callNumberPrefix.startsWith("HV") && this.callNumberNumber > 7430) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=148&posy=34&width=3&height=37";
/*404*/      } else if (this.callNumberPrefix.startsWith("HV") && this.callNumberNumber > 6625) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=142&posy=34&width=3&height=13";
/*403*/      } else if (this.callNumberPrefix.startsWith("HV") && this.callNumberNumber > 6431) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=136&posy=34&width=3&height=13";
/*402*/      } else if (this.callNumberPrefix.startsWith("HV") && this.callNumberNumber > 6058) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=130&posy=34&width=3&height=13";
/*401*/      } else if (this.callNumberPrefix.startsWith("HV") && this.callNumberNumber > 5999) {
                 $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=125&posy=34&width=3&height=12";				 

//Terrell, Basement, LC
/*364*/      } else if (this.callNumberPrefix.startsWith("HV") && this.callNumberNumber > 4998) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=504&posy=45&width=16&height=4";
/*363*/      } else if (this.callNumberPrefix.startsWith("HV") && this.callNumberNumber > 887) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=504&posy=50&width=16&height=4";
/*362*/      } else if (this.callNumberPrefix.startsWith("HV") && this.callNumberNumber > 94) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=504&posy=55&width=16&height=4";
/*361*/      } else if (this.callNumberPrefix.startsWith("HT") && this.callNumberNumber > 1092 || this.callNumberPrefix.startsWith("HV")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=504&posy=60&width=16&height=4";				
/*360*/      } else if (this.callNumberPrefix.startsWith("HT") && this.callNumberNumber > 165) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=504&posy=64&width=16&height=4";
/*359*/      } else if (this.callNumberPrefix.startsWith("HS") && this.callNumberNumber > 607 || this.callNumberPrefix.startsWith("HT")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=504&posy=69&width=16&height=4";
/*358*/      } else if (this.callNumberPrefix.startsWith("HQ") && this.callNumberNumber > 1415 || this.callNumberPrefix.startsWith("HS")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=504&posy=74&width=16&height=4";
/*357*/      } else if (this.callNumberPrefix.startsWith("HQ") && this.callNumberNumber > 1074) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=461&posy=82&width=32&height=4";
/*356*/      } else if (this.callNumberPrefix.startsWith("HQ") && this.callNumberNumber > 783) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=461&posy=87&width=25&height=4";
/*355*/      } else if (this.callNumberPrefix.startsWith("HQ") && this.callNumberNumber > 766) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=461&posy=92&width=20&height=4";
/*354*/      } else if (this.callNumberPrefix.startsWith("HQ") && this.callNumberNumber > 622) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=429&posy=101&width=26&height=4";
/*353*/      } else if (this.callNumberPrefix.startsWith("HQ") && this.callNumberNumber > 10) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=429&posy=96&width=26&height=4";				
/*352*/      } else if (this.callNumberPrefix.startsWith("HN") && this.callNumberNumber > 397 || this.callNumberPrefix.startsWith("HQ")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=429&posy=92&width=26&height=4";
/*351*/      } else if (this.callNumberPrefix.startsWith("HN") && this.callNumberNumber > 56) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=429&posy=87&width=26&height=4";
/*350*/      } else if (this.callNumberPrefix.startsWith("HM") && this.callNumberNumber > 850 || this.callNumberPrefix.startsWith("HN")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=429&posy=82&width=26&height=4";
/*349*/      } else if (this.callNumberPrefix.startsWith("HM") && this.callNumberNumber > 47) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=392&posy=68&width=32&height=4";
/*347*/      } else if (this.callNumberPrefix.startsWith("HM") && this.callNumberNumber > 1) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=392&posy=73&width=32&height=4";
/*346*/      } else if (this.callNumberPrefix.startsWith("HJ") && this.callNumberNumber > 2321 || this.callNumberPrefix.startsWith("HM")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=392&posy=82&width=32&height=4";
/*345*/      } else if (this.callNumberPrefix.startsWith("HG") && this.callNumberNumber > 8750 || this.callNumberPrefix.startsWith("HJ")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=392&posy=87&width=32&height=4";
/*344*/      } else if (this.callNumberPrefix.startsWith("HG") && this.callNumberNumber > 4930) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=392&posy=92&width=32&height=4";				
/*343*/      } else if (this.callNumberPrefix.startsWith("HG") && this.callNumberNumber > 4500) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=392&posy=96&width=32&height=4";
/*342*/      } else if (this.callNumberPrefix.startsWith("HG") && this.callNumberNumber > 2880) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=392&posy=101&width=32&height=4";
/*341*/      } else if (this.callNumberPrefix.startsWith("HG") && this.callNumberNumber > 1500) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=392&posy=105&width=32&height=4";
/*340*/      } else if (this.callNumberPrefix.startsWith("HG") && this.callNumberNumber > 10) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=392&posy=110&width=32&height=4";
/*339*/      } else if (this.callNumberPrefix.startsWith("HF") && this.callNumberNumber > 5800 || this.callNumberPrefix.startsWith("HG")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=392&posy=115&width=29&height=4";
/*338*/      } else if (this.callNumberPrefix.startsWith("HF") && this.callNumberNumber > 5629) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=392&posy=119&width=29&height=4";
/*337*/      } else if (this.callNumberPrefix.startsWith("HF") && this.callNumberNumber > 5548) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=345&posy=132&width=20&height=3";
/*336*/      } else if (this.callNumberPrefix.startsWith("HF") && this.callNumberNumber > 5464) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=345&posy=127&width=20&height=3";				
/*335*/      } else if (this.callNumberPrefix.startsWith("HF") && this.callNumberNumber > 5414) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=345&posy=122&width=20&height=3";
/*334*/      } else if (this.callNumberPrefix.startsWith("HF") && this.callNumberNumber > 5000) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=322&posy=122&width=20&height=3";
/*333*/      } else if (this.callNumberPrefix.startsWith("HF") && this.callNumberNumber > 3830) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=322&posy=127&width=20&height=3";
/*332*/      } else if (this.callNumberPrefix.startsWith("HF") && this.callNumberNumber > 1413) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=322&posy=132&width=20&height=3";
/*331*/      } else if (this.callNumberPrefix.startsWith("HF") && this.callNumberNumber > 1) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=323&posy=168&width=34&height=4";
/*330*/      } else if (this.callNumberPrefix.startsWith("HE") && this.callNumberNumber > 6189 || this.callNumberPrefix.startsWith("HF")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=323&posy=173&width=30&height=4";
/*329*/      } else if (this.callNumberPrefix.startsWith("HE") && this.callNumberNumber > 1060) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=323&posy=178&width=26&height=4";
/*328*/      } else if (this.callNumberPrefix.startsWith("HE") && this.callNumberNumber > 191) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=323&posy=182&width=24&height=4";				
/*327*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 9899 || this.callNumberPrefix.startsWith("HE")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=323&posy=187&width=22&height=4";
/*326*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 9714) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=239&width=22&height=4";
/*325*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 9664) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=234&width=25&height=4";
/*324*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 9512) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=229&width=28&height=4";
/*323*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 9197) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=225&width=31&height=4";
/*322*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 8388) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=220&width=31&height=4";
/*321*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 7800) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=216&width=31&height=4";
/*320*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 6514) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=211&width=31&height=4";				
/*319*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 5724) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=206&width=31&height=4";
/*318*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 4825) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=201&width=31&height=4";
/*317*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 2776) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=197&width=31&height=4";
/*316*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 2345) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=192&width=31&height=4";
/*315*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 1400) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=187&width=31&height=4";
/*314*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 81) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=183&width=31&height=4";
/*313*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 57) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=178&width=31&height=4";
/*312*/      } else if (this.callNumberPrefix.startsWith("HD") && this.callNumberNumber > 29) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=173&width=31&height=4";				
/*311*/      } else if (this.callNumberPrefix.startsWith("HC") && this.callNumberNumber > 659 || this.callNumberPrefix.startsWith("HD")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=168&width=31&height=4";
/*310*/      } else if (this.callNumberPrefix.startsWith("HC") && this.callNumberNumber > 430) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=164&width=31&height=4";
/*309*/      } else if (this.callNumberPrefix.startsWith("HC") && this.callNumberNumber > 335) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=159&width=31&height=4";
/*308*/      } else if (this.callNumberPrefix.startsWith("HC") && this.callNumberNumber > 243) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=155&width=31&height=4";
/*307*/      } else if (this.callNumberPrefix.startsWith("HC") && this.callNumberNumber > 116) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=150&width=31&height=4";
/*306*/      } else if (this.callNumberPrefix.startsWith("HC") && this.callNumberNumber > 105) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=145&width=31&height=4";
/*305*/      } else if (this.callNumberPrefix.startsWith("HC") && this.callNumberNumber > 105) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=141&width=31&height=4";
/*304*/      } else if (this.callNumberPrefix.startsWith("HC") && this.callNumberNumber > 58) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=136&width=31&height=4";				
/*303*/      } else if (this.callNumberPrefix.startsWith("HC") && this.callNumberNumber > 9) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=131&width=31&height=4";
/*302*/      } else if (this.callNumberPrefix.startsWith("HB") && this.callNumberNumber > 848 || this.callNumberPrefix.startsWith("HC")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=126&width=31&height=4";
/*301*/      } else if (this.callNumberPrefix.startsWith("HB") && this.callNumberNumber > 149) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=286&posy=122&width=31&height=4";

//Terrell, Ground Floor, LC			
/*275*/      } else if (this.callNumberPrefix.startsWith("HB") && this.callNumberNumber > 74) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=517&posy=76&width=24&height=4";				
/*274*/      } else if (this.callNumberPrefix.startsWith("HB") && this.callNumberNumber > 1) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=517&posy=70&width=26&height=4";	
/*273*/      } else if (this.callNumberPrefix.startsWith("HB") && this.callNumberNumber > 0) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=517&posy=64&width=27&height=4";				
/*272*/      } else if (this.callNumberPrefix.startsWith("HA") && this.callNumberNumber > 28 || this.callNumberPrefix.startsWith("HB")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=517&posy=59&width=28&height=4";
/*271*/      } else if (this.callNumberPrefix.startsWith("H") && this.callNumberNumber > 61 || this.callNumberPrefix.startsWith("HA")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=517&posy=54&width=28&height=4";				
/*270*/      } else if (this.callNumberPrefix.startsWith("H") && this.callNumberNumber > 30) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=517&posy=49&width=26&height=4";
/*269*/      } else if (this.callNumberPrefix.startsWith("H") && this.callNumberNumber > 1) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=517&posy=43&width=24&height=3";				
/*268*/      } else if (this.callNumberPrefix.startsWith("H") && this.callNumberNumber > 0) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=476&posy=59&width=30&height=3";	
/*267*/      } else if (this.callNumberPrefix.startsWith("GV") && this.callNumberNumber > 1313 || this.callNumberPrefix.startsWith("H")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=482&posy=44&width=32&height=4";				
/*266*/      } else if (this.callNumberPrefix.startsWith("GV") && this.callNumberNumber > 874) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=482&posy=38&width=32&height=4";
/*265*/      } else if (this.callNumberPrefix.startsWith("GV") && this.callNumberNumber > 705) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=482&posy=33&width=32&height=4";				
/*264*/      } else if (this.callNumberPrefix.startsWith("GV") && this.callNumberNumber > 427) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=482&posy=27&width=32&height=4";
/*263*/      } else if (this.callNumberPrefix.startsWith("GV") && this.callNumberNumber > 53) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=482&posy=22&width=32&height=4";				
/*262*/      } else if (this.callNumberPrefix.startsWith("GS") && this.callNumberNumber > 0 || this.callNumberPrefix.startsWith("GV")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=482&posy=16&width=32&height=4";	
/*261*/      } else if (this.callNumberPrefix.startsWith("GN") && this.callNumberNumber > 798 || this.callNumberPrefix.startsWith("GR")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=446&posy=16&width=32&height=4";				
/*260*/      } else if (this.callNumberPrefix.startsWith("GN") && this.callNumberNumber > 489) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=446&posy=22&width=32&height=4";
/*259*/      } else if (this.callNumberPrefix.startsWith("GN") && this.callNumberNumber > 69) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=446&posy=28&width=32&height=4";				
/*258*/      } else if (this.callNumberPrefix.startsWith("GN") && this.callNumberNumber > 1) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=446&posy=33&width=32&height=4";
/*257*/      } else if (this.callNumberPrefix.startsWith("GF") && this.callNumberNumber > 79 || this.callNumberPrefix.startsWith("GN")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=446&posy=38&width=32&height=4";				
/*256*/      } else if (this.callNumberPrefix.startsWith("G") && this.callNumberNumber > 999 || this.callNumberPrefix.startsWith("GF")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=446&posy=44&width=32&height=4";	
/*255*/      } else if (this.callNumberPrefix.startsWith("G") && this.callNumberNumber > 148) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=447&posy=81&width=31&height=4";				
/*254*/      } else if (this.callNumberPrefix.startsWith("G") && this.callNumberNumber > 1) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=447&posy=87&width=31&height=4";
/*253*/      } else if (this.callNumberPrefix.startsWith("F") && this.callNumberNumber > 2515 || this.callNumberPrefix.startsWith("G")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=447&posy=92&width=31&height=4";				
/*252*/      } else if (this.callNumberPrefix.startsWith("F") && this.callNumberNumber > 1528) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=447&posy=97&width=31&height=4";
/*251*/      } else if (this.callNumberPrefix.startsWith("F") && this.callNumberNumber > 1400) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=410&posy=114&width=31&height=4";				
/*250*/      } else if (this.callNumberPrefix.startsWith("F") && this.callNumberNumber > 1200) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=410&posy=114&width=31&height=4";	
/*249*/      } else if (this.callNumberPrefix.startsWith("F") && this.callNumberNumber > 1003) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=410&posy=114&width=31&height=4";				
/*248*/      } else if (this.callNumberPrefix.startsWith("F") && this.callNumberNumber > 879) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=410&posy=108&width=31&height=4";
/*247*/      } else if (this.callNumberPrefix.startsWith("F") && this.callNumberNumber > 801) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=410&posy=103&width=31&height=4";				
/*246*/      } else if (this.callNumberPrefix.startsWith("F") && this.callNumberNumber > 595) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=410&posy=97&width=31&height=4";
/*245*/      } else if (this.callNumberPrefix.startsWith("F") && this.callNumberNumber > 445) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=410&posy=92&width=31&height=4";				
/*244*/      } else if (this.callNumberPrefix.startsWith("F") && this.callNumberNumber > 220) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=410&posy=87&width=31&height=4";	
/*243*/      } else if (this.callNumberPrefix.startsWith("F") && this.callNumberNumber > 115) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=412&posy=54&width=31&height=4";				
/*242*/      } else if (this.callNumberPrefix.startsWith("E") && this.callNumberNumber > 849 || this.callNumberPrefix.startsWith("F")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=412&posy=49&width=31&height=4";
/*241*/      } else if (this.callNumberPrefix.startsWith("E") && this.callNumberNumber > 806) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=412&posy=43&width=31&height=4";				
/*240*/      } else if (this.callNumberPrefix.startsWith("E") && this.callNumberNumber > 743) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=412&posy=37&width=31&height=4";
/*239*/      } else if (this.callNumberPrefix.startsWith("E") && this.callNumberNumber > 516) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=412&posy=32&width=31&height=4";				
/*238*/      } else if (this.callNumberPrefix.startsWith("E") && this.callNumberNumber > 452) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=412&posy=27&width=31&height=4";	
/*237*/      } else if (this.callNumberPrefix.startsWith("E") && this.callNumberNumber > 311) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=412&posy=21&width=31&height=4";				
/*236*/      } else if (this.callNumberPrefix.startsWith("E") && this.callNumberNumber > 187) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=412&posy=16&width=31&height=4";
/*235*/      } else if (this.callNumberPrefix.startsWith("E") && this.callNumberNumber > 184) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=371&posy=87&width=31&height=4";				
/*234*/      } else if (this.callNumberPrefix.startsWith("E") && this.callNumberNumber > 183) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=371&posy=92&width=31&height=4";
/*233*/      } else if (this.callNumberPrefix.startsWith("E") && this.callNumberNumber > 182) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=371&posy=98&width=31&height=4";				
/*232*/      } else if (this.callNumberPrefix.startsWith("E") && this.callNumberNumber > 171) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=371&posy=103&width=31&height=4";	
/*231*/      } else if (this.callNumberPrefix.startsWith("E") && this.callNumberNumber > 159) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=371&posy=108&width=31&height=4";				
/*230*/      } else if (this.callNumberPrefix.startsWith("E") && this.callNumberNumber > 98) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=371&posy=118&width=31&height=4";
/*229*/      } else if (this.callNumberPrefix.startsWith("E") && this.callNumberNumber > 77) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=371&posy=124&width=31&height=4";				
/*228*/      } else if (this.callNumberPrefix.startsWith("E") && this.callNumberNumber > 74) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=371&posy=130&width=31&height=4";
/*227*/      } else if (this.callNumberPrefix.startsWith("DU") && this.callNumberNumber > 401 || this.callNumberPrefix.startsWith("E")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=371&posy=135&width=31&height=4";				
/*226*/      } else if (this.callNumberPrefix.startsWith("DT") && this.callNumberNumber > 929 || this.callNumberPrefix.startsWith("DU")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=334&posy=188&width=24&height=4";	
/*225*/      } else if (this.callNumberPrefix.startsWith("DT") && this.callNumberNumber > 509) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=334&posy=183&width=27&height=4";				
/*224*/      } else if (this.callNumberPrefix.startsWith("DT") && this.callNumberNumber > 60) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=334&posy=178&width=29&height=4";
/*223*/      } else if (this.callNumberPrefix.startsWith("DS") && this.callNumberNumber > 900 || this.callNumberPrefix.startsWith("DT")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=299&posy=178&width=29&height=4";				
/*222*/      } else if (this.callNumberPrefix.startsWith("DS") && this.callNumberNumber > 795) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=299&posy=183&width=29&height=4";
/*221*/      } else if (this.callNumberPrefix.startsWith("DS") && this.callNumberNumber > 754) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=299&posy=189&width=29&height=4";				
/*220*/      } else if (this.callNumberPrefix.startsWith("DS") && this.callNumberNumber > 645) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=299&posy=194&width=29&height=4";	
/*219*/      } else if (this.callNumberPrefix.startsWith("DS") && this.callNumberNumber > 502) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=299&posy=199&width=29&height=4";				
/*218*/      } else if (this.callNumberPrefix.startsWith("DS") && this.callNumberNumber > 477) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=299&posy=205&width=29&height=4";
/*217*/      } else if (this.callNumberPrefix.startsWith("DS") && this.callNumberNumber > 328) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=299&posy=210&width=29&height=4";				
/*216*/      } else if (this.callNumberPrefix.startsWith("DS") && this.callNumberNumber > 133) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=299&posy=215&width=29&height=4";
/*215*/      } else if (this.callNumberPrefix.startsWith("DS") && this.callNumberNumber > 78) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=299&posy=221&width=29&height=4";				
/*214*/      } else if (this.callNumberPrefix.startsWith("DS") && this.callNumberNumber > 34) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=299&posy=226&width=29&height=4";	
/*213*/      } else if (this.callNumberPrefix.startsWith("DR") && this.callNumberNumber > 259 || this.callNumberPrefix.startsWith("DS")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=264&posy=258&width=29&height=4";				
/*212*/      } else if (this.callNumberPrefix.startsWith("DL") && this.callNumberNumber > 500 || this.callNumberPrefix.startsWith("DR")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=264&posy=253&width=29&height=4";
/*211*/      } else if (this.callNumberPrefix.startsWith("DK") && this.callNumberNumber > 287 || this.callNumberPrefix.startsWith("DL")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=264&posy=247&width=29&height=4";				
/*210*/      } else if (this.callNumberPrefix.startsWith("DK") && this.callNumberNumber > 171) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=264&posy=242&width=29&height=4";
/*209*/      } else if (this.callNumberPrefix.startsWith("DK") && this.callNumberNumber > 1) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=264&posy=237&width=29&height=4";				
/*208*/      } else if (this.callNumberPrefix.startsWith("DG") && this.callNumberNumber > 67 || this.callNumberPrefix.startsWith("DK")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=264&posy=232&width=29&height=4";	
/*207 - 204*/} else if (this.callNumberPrefix.startsWith("DE") && this.callNumberNumber > 0 || this.callNumberPrefix.startsWith("DG")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=264&posy=226&width=29&height=4";				
/*203*/      } else if (this.callNumberPrefix.startsWith("DD") && this.callNumberNumber > 260) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=264&posy=188&width=29&height=4";				
/*202*/      } else if (this.callNumberPrefix.startsWith("DD") && this.callNumberNumber > 246) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=264&posy=183&width=29&height=4";	
/*201*/      } else if (this.callNumberPrefix.startsWith("DD") && this.callNumberNumber > 0) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_ground.jpg&posx=264&posy=177&width=29&height=4";

//Terrell, 1st Floor, LC	
/*155*/      } else if (this.callNumberPrefix.startsWith("DC") && this.callNumberNumber > 315) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=522&posy=162&width=24&height=4";
/*154*/      } else if (this.callNumberPrefix.startsWith("DC") && this.callNumberNumber > 102) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=522&posy=168&width=26&height=4";				
/*153*/      } else if (this.callNumberPrefix.startsWith("DB") && this.callNumberNumber > 79 || this.callNumberPrefix.startsWith("DC")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=522&posy=174&width=28&height=4";
/*152*/      } else if (this.callNumberPrefix.startsWith("DA") && this.callNumberNumber > 669 || this.callNumberPrefix.startsWith("DB")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=522&posy=180&width=30&height=4";				
/*151*/      } else if (this.callNumberPrefix.startsWith("DA") && this.callNumberNumber > 534) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=522&posy=186&width=30&height=4";	
/*150*/      } else if (this.callNumberPrefix.startsWith("DA") && this.callNumberNumber > 255) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=523&posy=192&width=25&height=4";				
/*149*/      } else if (this.callNumberPrefix.startsWith("DA") && this.callNumberNumber > 27) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=523&posy=198&width=24&height=4";
/*148*/      } else if (this.callNumberPrefix.startsWith("D") && this.callNumberNumber > 838 || this.callNumberPrefix.startsWith("DA")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=483&posy=203&width=34&height=4";				
/*147*/      } else if (this.callNumberPrefix.startsWith("D") && this.callNumberNumber > 809) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=483&posy=209&width=30&height=4";
/*146*/      } else if (this.callNumberPrefix.startsWith("D") && this.callNumberNumber > 763) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=444&posy=221&width=34&height=4";				
/*145*/      } else if (this.callNumberPrefix.startsWith("D") && this.callNumberNumber > 444) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=444&posy=215&width=34&height=4";	
/*144*/      } else if (this.callNumberPrefix.startsWith("D") && this.callNumberNumber > 201) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=444&posy=209&width=34&height=4";				
/*143*/      } else if (this.callNumberPrefix.startsWith("D") && this.callNumberNumber > 15) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=444&posy=203&width=34&height=4";
/*142*/      } else if (this.callNumberPrefix.startsWith("D") && this.callNumberNumber > 1) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=404&posy=209&width=34&height=4";				
/*141*/      } else if (this.callNumberPrefix.startsWith("CS") && this.callNumberNumber > 41 || this.callNumberPrefix.startsWith("D")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=404&posy=215&width=34&height=4";
/*140*/      } else if (this.callNumberPrefix.startsWith("CB") && this.callNumberNumber > 424 || this.callNumberPrefix.startsWith("CS")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=404&posy=221&width=34&height=4";				
/*139*/      } else if (this.callNumberPrefix.startsWith("BX") && this.callNumberNumber > 8634 || this.callNumberPrefix.startsWith("CB")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=404&posy=227&width=34&height=4";	
/*138*/      } else if (this.callNumberPrefix.startsWith("BX") && this.callNumberNumber > 2618) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=404&posy=233&width=34&height=4";				
/*137*/      } else if (this.callNumberPrefix.startsWith("BV") && this.callNumberNumber > 4207 || this.callNumberPrefix.startsWith("BX")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=404&posy=239&width=34&height=4";
/*136*/      } else if (this.callNumberPrefix.startsWith("BS") && this.callNumberNumber > 2554 || this.callNumberPrefix.startsWith("BV")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=404&posy=245&width=34&height=4";				
/*135*/      } else if (this.callNumberPrefix.startsWith("BR") && this.callNumberNumber > 753 || this.callNumberPrefix.startsWith("BS")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=364&posy=262&width=34&height=4";
/*134*/      } else if (this.callNumberPrefix.startsWith("BR") && this.callNumberNumber > 52) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=364&posy=256&width=34&height=4";				
/*133*/      } else if (this.callNumberPrefix.startsWith("BP") && this.callNumberNumber > 162 || this.callNumberPrefix.startsWith("BR")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=364&posy=250&width=34&height=4";	
/*132*/      } else if (this.callNumberPrefix.startsWith("BL") && this.callNumberNumber > 2000 || this.callNumberPrefix.startsWith("BP")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=364&posy=244&width=34&height=4";				
/*131*/      } else if (this.callNumberPrefix.startsWith("BL") && this.callNumberNumber > 624) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=364&posy=221&width=34&height=4";
/*130*/      } else if (this.callNumberPrefix.startsWith("BL") && this.callNumberNumber > 1) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=364&posy=215&width=34&height=4";				
/*129*/      } else if (this.callNumberPrefix.startsWith("BF") && this.callNumberNumber > 1588 || this.callNumberPrefix.startsWith("BL")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=364&posy=210&width=34&height=4";
/*128*/      } else if (this.callNumberPrefix.startsWith("BF") && this.callNumberNumber > 720) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=325&posy=204&width=34&height=4";
/*127*/      } else if (this.callNumberPrefix.startsWith("BF") && this.callNumberNumber > 636) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=325&posy=210&width=34&height=4";
/*126*/      } else if (this.callNumberPrefix.startsWith("BF") && this.callNumberNumber > 370) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=325&posy=216&width=34&height=4";
/*125*/      } else if (this.callNumberPrefix.startsWith("BF") && this.callNumberNumber > 172) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=325&posy=221&width=34&height=4";
/*124*/      } else if (this.callNumberPrefix.startsWith("BF") && this.callNumberNumber > 1) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=325&posy=244&width=34&height=4";
/*123*/      } else if (this.callNumberPrefix.startsWith("BD") && this.callNumberNumber > 437 || this.callNumberPrefix.startsWith("BF")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=325&posy=250&width=34&height=4";
/*122*/      } else if (this.callNumberPrefix.startsWith("B") && this.callNumberNumber > 3315 || this.callNumberPrefix.startsWith("BD")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=325&posy=256&width=34&height=4";
/*121*/      } else if (this.callNumberPrefix.startsWith("B") && this.callNumberNumber > 1892) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=325&posy=262&width=34&height=4";
/*120*/      } else if (this.callNumberPrefix.startsWith("B") && this.callNumberNumber > 830) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=325&posy=268&width=34&height=4";
/*119*/      } else if (this.callNumberPrefix.startsWith("B") && this.callNumberNumber > 132) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=325&posy=274&width=34&height=4";
/*118*/      } else if (this.callNumberPrefix.startsWith("B") && this.callNumberNumber > 2) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=285&posy=274&width=33&height=4";				
/*117*/      } else if (this.callNumberPrefix.startsWith("B") && this.callNumberNumber > 1) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=285&posy=268&width=33&height=4";
/*116*/      } else if (this.callNumberPrefix.startsWith("AS") && this.callNumberNumber > 161 || this.callNumberPrefix.startsWith("B")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=285&posy=262&width=33&height=4";
/*115*/      } else if (this.callNumberPrefix.startsWith("AS") && this.callNumberNumber > 7) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=285&posy=256&width=33&height=4";
/*114*/      } else if (this.callNumberPrefix.startsWith("AP") && this.callNumberNumber > 59 || this.callNumberPrefix.startsWith("AS")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=285&posy=250&width=34&height=4";
/*113*/      } else if (this.callNumberPrefix.startsWith("AP") && this.callNumberNumber > 29) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=285&posy=245&width=34&height=4";
/*112*/      } else if (this.callNumberPrefix.startsWith("AP") && this.callNumberNumber > 7) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=285&posy=239&width=34&height=4";
/*111*/      } else if (this.callNumberPrefix.startsWith("AP") && this.callNumberNumber > 3) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=285&posy=233&width=34&height=4";
/*110*/      } else if (this.callNumberPrefix.startsWith("AP") && this.callNumberNumber > 2) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=285&posy=228&width=34&height=4";
/*109*/      } else if (this.callNumberPrefix.startsWith("AP") && this.callNumberNumber > 2) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=246&posy=228&width=34&height=4";
/*108*/      } else if (this.callNumberPrefix.startsWith("AP") && this.callNumberNumber > 2) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=246&posy=233&width=34&height=4";
/*107*/      } else if (this.callNumberPrefix.startsWith("AP") && this.callNumberNumber > 2) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=246&posy=239&width=34&height=4";
/*106*/      } else if (this.callNumberPrefix.startsWith("AP") && this.callNumberNumber > 2) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=246&posy=245&width=34&height=4";				
/*105*/      } else if (this.callNumberPrefix.startsWith("AP") && this.callNumberNumber > 2) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=246&posy=250&width=34&height=4";
/*104*/      } else if (this.callNumberPrefix.startsWith("AP") && this.callNumberNumber > 1) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=246&posy=256&width=34&height=4";
/*103*/      } else if (this.callNumberPrefix.startsWith("AI") && this.callNumberNumber > 2 || this.callNumberPrefix.startsWith("AP")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=246&posy=262&width=34&height=4";
/*102*/      } else if (this.callNumberPrefix.startsWith("AE") && this.callNumberNumber > 24 || this.callNumberPrefix.startsWith("AI")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=246&posy=268&width=34&height=4";
/*101*/      } else if (this.callNumberPrefix.startsWith("A") && this.callNumberNumber > 0 || this.callNumberPrefix.startsWith("AE")) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=holland_1st.jpg&posx=246&posy=274&width=34&height=4";

//Terrell, Basement, Dewey
/*064*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 980) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=137&posy=175&width=16&height=17";
/*063*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 976.2) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=137&posy=175&width=16&height=17";
/*062*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 973.45) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=137&posy=175&width=16&height=17";
/*061*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 972.01) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=137&posy=175&width=16&height=17";
/*060 - 059*/} else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 945.04) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=137&posy=175&width=16&height=17";
/*058*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 949) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=137&posy=151&width=16&height=17";
/*057*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 944.01) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=137&posy=151&width=16&height=17";
/*056*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 941) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=137&posy=151&width=16&height=17";
/*055*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 940.90) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=137&posy=151&width=16&height=17";
/*054*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 920.91) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=137&posy=151&width=16&height=17";
/*053*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 918) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=152&posy=151&width=16&height=17";
/*052*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 914.7) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=152&posy=151&width=16&height=17";
/*051*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 913) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=152&posy=151&width=16&height=17";
/*050*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 904) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=152&posy=151&width=16&height=17";
/*049*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 898.04) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=152&posy=151&width=16&height=17";
/*048*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 880.2) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=168&posy=151&width=16&height=17";
/*047*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 861) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=168&posy=151&width=16&height=17";
/*046*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 847) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=168&posy=151&width=16&height=17";
/*045*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 842) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=168&posy=151&width=16&height=17";
/*044*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 841.07) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=168&posy=151&width=16&height=17";
/*043*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 840.4) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=168&posy=151&width=16&height=17";
/*042*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 832) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=168&posy=151&width=16&height=17";
/*041*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 827) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=168&posy=151&width=16&height=17";
/*040*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 823) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=185&posy=151&width=16&height=17";
/*039*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 822.33) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=185&posy=151&width=16&height=17";
/*038*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 821) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=185&posy=151&width=16&height=17";
/*037*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 820.91) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=185&posy=151&width=16&height=17";
/*036*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 813.08) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=185&posy=151&width=16&height=17";
/*035*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 812) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=185&posy=151&width=16&height=17";
/*034*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 810) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=185&posy=151&width=16&height=17";
/*033*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 808.7) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=185&posy=151&width=16&height=17";
/*032*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 808.2) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=202&posy=151&width=16&height=17";
/*031*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 805) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=202&posy=151&width=16&height=17";
/*030*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 804) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=202&posy=151&width=16&height=17";
/*029*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 796.32) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=202&posy=151&width=16&height=17";
/*028*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 784.92) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=202&posy=151&width=16&height=17";
/*027*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 750.7) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=202&posy=151&width=16&height=17";
/*026*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 705) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=202&posy=151&width=16&height=17";
/*025*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 658.541) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=202&posy=151&width=16&height=17";
/*024*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 495.131) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=218&posy=151&width=16&height=17";
/*023*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 414) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=218&posy=151&width=16&height=17";
/*022*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 380.7) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=218&posy=151&width=16&height=17";
/*021*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 378.04) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=218&posy=151&width=16&height=17";
/*020*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 368.04) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=218&posy=151&width=16&height=17";
/*019*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 355.091) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=218&posy=151&width=16&height=17";
/*018*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 347.96) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=218&posy=151&width=16&height=17";
/*017*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 341.47) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=218&posy=151&width=16&height=17";
/*016*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 338.972) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=235&posy=151&width=16&height=17";
/*015*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 337) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=235&posy=151&width=16&height=17";
/*014*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 332.3) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=235&posy=151&width=16&height=17";
/*013*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 331.061) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=235&posy=151&width=16&height=17";
/*012*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 330.15) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=235&posy=151&width=16&height=17";
/*011*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 327.04) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=235&posy=151&width=16&height=17";
/*010*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 320.8) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=235&posy=151&width=16&height=17";
/*009*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 309.172) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=235&posy=151&width=16&height=17";
/*008*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 304) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=251&posy=151&width=16&height=17";
/*007*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 290.4) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=251&posy=151&width=16&height=17";
/*006*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 260) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=251&posy=151&width=16&height=17";
/*005*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 204) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=251&posy=151&width=16&height=17";
/*004*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 149) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=251&posy=151&width=16&height=17";
/*003*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 60.451) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=251&posy=151&width=16&height=17";
/*002*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 10) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=251&posy=151&width=16&height=17";
/*001*/      } else if (this.subLocationCode.startsWith("whd") && this.callNumberPrefix > 0) {
                $scope.floorMap="http://libraries.wsu.edu/map.php?floor=terrel_basement.jpg&posx=251&posy=151&width=16&height=17";
             } else {
                $scope.floorMap="https://libraries.wsu.edu/stackchart";
             }

//Create a Boolean variable to display or not display floorMap text and url
           this.showTraceLink = Boolean(this.availability === 'available' && this.callNumberNumber && this.libLocation === 'WSU_HOLLTERR');

    },
  template: '<a ng-show="$ctrl.showTraceLink" href="{{floorMap}}">Help me find this book.</a>'
});