var passing = function(done) {
    done()
}
var failing = function(done) {
    throw new Error("error");
}

module.exports = {
    'AU_8': passing,
    'AC_3': passing,
    'AC_18': passing,
    'AC_1': passing,
    'MP_2': passing
}