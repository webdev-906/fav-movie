//step 1; ask the user what there favorite movie is

let favoriteMovie = prompt("What is your favorite movie?");



// step 2; take the results from favoriteMovie and store it into the div container

// if the user clicks cancel
const choices = () => {
  
  if(favoriteMovie == null){
    document.querySelector("#results").textContent = "You don't have a favorite movie?"
  }
  
  // if the user clicks ok without entering anything. 
  else if(favoriteMovie == ""){
    document.querySelector("#results").textContent = "Hmm it appears you haven't typed in anything...please refresh";
  }
  
  else {
   document.querySelector('#results').textContent = "Your favorite movies is " + favoriteMovie;
  }
}

choices()




// if(favoriteMovie == null){
//   document.querySelector("#results").textContent = "You don't have a favorite movie?"
// }

// // if the user clicks ok without entering anything. 
// else if(favoriteMovie == ""){
//   document.querySelector("#results").textContent = "Hmm it appears you haven't type in anything...please refresh";
// }

// else {
//   let results = document.querySelector('#results').textContent = "Your favorite movies is " + favoriteMovie;
// }




// https://docs.google.com/document/d/1KOP9g9fKV43W7NKSb7awszsOIXMi_QEPAU99xkPpB2o/edit