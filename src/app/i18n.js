angular.module('trainingApp').run(['gettextCatalog', function (gettextCatalog) {
/* jshint -W100 */
    gettextCatalog.setStrings('en_US', {"Add new Author":"Add Author","delete":"Delete","details":"Details","edit":"Edit"});
    gettextCatalog.setStrings('es_ES', {"Add new Author":"es Add Author","Author":"es Author","Book":"es Book","First Name":"es First Name","Home":"es Home","Last Name":"es Last Name","Memo":"es Menu","Required Field":"es Requried Field","Too Short":"es Too Short","delete":"es Delete","details":"es Details","edit":"es Edit"});
/* jshint +W100 */
}]);