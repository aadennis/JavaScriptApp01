(function name(angularx) {
    var composerCtrl = angularx.module("composerApp").controller("composerCtrl", 
    function () {
        var vm = this;
        vm.message = "Hi there";
        vm.footballers = [
            {
                "name": "Payet",
                "age" : "22"
            },
            {
                "name": "Pele",
                "age" : "87"
            },
            {
                "name": "Kane",
                "age" : "21"
            },
        ];
    });
})(angular);