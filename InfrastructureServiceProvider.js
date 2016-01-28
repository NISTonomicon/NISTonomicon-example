var passing = function(done) {
    done()
}
var failing = function(done) {
    throw new Error("You are not meeting this infrastructure requirement");
}

module.exports = {
    'CM_2': failing
}