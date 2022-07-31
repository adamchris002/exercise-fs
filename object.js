var caca = {
    name : "Caca",
    hobbies : ["Nonton", "Makan"],
    umur : "20",
    weight : 55,
    height : 164,
    ableToCode : true,
    profile : {
        city : "bandung",
        tempatlahir : "surabaya",
        domisili : {
            alamat : "Jalan Pluto Blok B7 No. 33",
            kota : "tangerang selatan",
            provinsi : "Banten"
        }
    },

    addNewHobby : function(hobby) {
        this.hobbies.push(hobby);
    },

    sebutkanHobby : function() {
        for (var i = 0; i < this.hobbies.length; i++) {
            console.log((i + 1) + ". " + this.hobbies[i]);
        }
    }
}

// console.log(caca["100"]);
// console.log(caca.profile.domisili);

caca.addNewHobby("Tidur");
caca.sebutkanHobby();


