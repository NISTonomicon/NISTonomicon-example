//Importing a High High Medium Overlay
var overlay = require('./OverlayHHM.js');

//Tailoring additional controls onto the overlay
var tailored_overlay = overlay.push('CM_2', 'MP_2', 'CP_1');

//Importing inheritable control tests
var auditSP = require('./AuditTenantService.js');
var infrastructureSP = require('./InfrastructureServiceProvider.js');



//passing the inherited tests 
var inherited = {
    'Audit Service Provider': auditSP,
    'Infrastructure Service Provider': infrastructureSP
}

//passing the implemented tests
implemented = {
}

var nistonomicon = require('nistonomicon');
nistonomicon(overlay, inherited, implemented, function(error, result) {
   console.log(result)
})
