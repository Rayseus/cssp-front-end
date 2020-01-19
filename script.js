function $(id) {
    return document.getElementById(id);
}
var body_space = document.body;
var isMaster;

function expanded(){
    var expander = document.querySelectorAll('.expand');

    for (var i = 0; i < expander.length; ++i) {
        expander[i].onclick = function() {
            var ul = this.parentElement.querySelectorAll('ul')[0];
            if (ul.offsetHeight > 0) {
                ul.style.display = 'none';
            } 
            else {
                ul.style.display = 'block';
            }
        }
    }
}

$("btn-m").addEventListener('click', ()=>{
    console.log("master");
    isMaster = 1;
});
$("btn-s").addEventListener('click', ()=>{
    console.log("slave");
    isMaster = 2;
});
$("load").addEventListener('click', ()=>{
    switch(isMaster){
        case 1:
            var space = document.createElement('div'); 
            space.id = "space1";
            isMaster = 0;
            break;
        case 2:
            var space = document.createElement('div'); 
            space.id = "space2";
            isMaster = 0;
            break;
        default:
            return;
    }
    
    space.innerHTML = "<ul><li><input type='checkbox' class='expand' value='root'>Root<ul><li><input type='checkbox' class='expand' value='child'>Child<ul><li><input type='checkbox' class='expand' value='child1'>Child 1</li><li><input type='checkbox' class='expand' value='child2'>Child 2</li></ul></li></ul></li></ul><div class='form-group' style='padding-left: 15%'><input type='submit' class='submit-load' id='sent' value='sent'></div>";
    
    body_space.appendChild(space);
    expanded();

    $("sent").addEventListener('click', ()=>{
        var space_data = document.getElementsByClassName('expand').checked;
        console.log(typeof(space_data));
        // for(var i=0; i<space_data.length; i++) {
        //     console.log(space_data[i]);
        // };
    });

    // for (let i=0;i<space_data.length;i++) {
    //     var option = document.createElement("ul");
    //     var list_data = document.createElement("li");
    //     var data = document.createElement("a");
    //     data.className = "expand";
    //     expanded();
    //     data.value = space_data[i];
    //     data.text = space_data[i];
    //     list_data.appendChild(data);
    //     option.appendChild(list_data);

    //     space.appendChild(option);
    // };
});



