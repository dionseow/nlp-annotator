
function sendAnnotation(){
    const formData = new FormData();
    const annotatedText = document.getElementById('commentable-container').innerHTML;
    formData.append('text', annotatedText);
    query_path = window.location.origin + '/annotated-text';
    fetch(query_path, {
        method: "POST", body: formData
    }).then(function(response){
        if(response.status=200){
            return response.json()
        }
        else{
            return {}
        }
    }).then(function(response){
        displayResults(response);
    });
}

function displayResults(response){
    if('done' in response){
        document.getElementById("submit").style.visibility = "hidden";
    }
    document.getElementById('commentable-container').innerHTML = response.text;
    document.getElementById('remaining').innerHTML = response.remaining;
}
