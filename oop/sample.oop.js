
const user= {
    name: "pepe",
    renderUpper: function(){
        console.log((this.name.toLocaleUpperCase()));
    }
};



const user2 = {
    name: 'Ernesto',
    renderUpper: function () {
        console.log(this.name.toLocaleUpperCase());
    },
};

user.renderUpper();
user2.renderUpper();