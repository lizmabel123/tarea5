$(document).ready(()=> {
    let videos=[]
    $.ajax({
        type: "GET",
        url: "/javascripts/ajax.json",
        dataType: "json",
        success: function (data) {
            $.each(data, (i, element)=> { 
                videos.push(element);
            });
        }
    });
    let counter=-1
    $("#cambiar").click( e=> {  
        e.preventDefault();
        if(counter<(videos.length-1)){
        counter++} else counter=0
            $("#video").html(`<strong>${videos[counter].title}</strong>
            <p>${videos[counter].content}</p>
            <iframe width="560" height="315" src="${videos[counter].url}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
            </iframe>
            <br>`);
            
       
        
    });
});