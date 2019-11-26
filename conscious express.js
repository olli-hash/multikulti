
const port = 8080
const express = require('express')
const path = require('path')
var app = express()
var logger = require('morgan')
app.use(logger('combined'))
var cookieParser = require('cookie-parser');
app.use(cookieParser())
var bodyParser = require('body-parser');

app.use(express.static("a))
app.use("/script",express.static("script")) 

app.get("/cookies", function(req, res){
    // Cookies that have not been signed
    console.log('Cookies: ', req.cookies)
    // Cookies that have been signed
    console.log('Signed Cookies: ', req.signedCookies)
    res.send("Hallo")
})


app.get("", make_creation_gui)



function make_creation_gui(req, res) {
    
    
    
    
    
    
}





/*                      *

        Auslagern ?

*                       */  


//  Receive JSON-Objects?


ideas_of_creation = {

  superficial_consciousness : "",
  everything_that_is_a_need_is_listed_here : "",
  a_need_is_a_need : "",
  meaning : "",
  meaning_and_motivation : "",
  group_of_similarity : "",
  types_as_groups : "",
  similarity_across_bodys : "",
  capability_of_distinction : "",
  urge_for_distinction : "",
  human_reaction_to_discrimination : "",
  tendency_to_belief_and_ideology : "",
  needs : "",
  wishes : "",
  essentially_unfree : "",
  essentially_free : "",
  believing_in_race : "",
  believing_in_GOD : "",
  believing_in_ones_own_individuality : "",
  believing_in_the_GOOD_in_the_world : "",
  believing_in_the_GOOD_in_the_human : "",
  enjoying_race : "",
  identifying_with_race : "",
  thinking_with_conviction : "",
  thinking_with_less_conviction : "",
  beliefs_of_what_is_important_in_life : "",
  basic_intelligence : "",
  special_intelligence : "",
  good_will_unlocked : "",
  good_will_very_limited : "",
  negativity_locked : "",
  a_strong_morality_by_mind : "",
  a_good_morality_by_heart : "",
  honesty : "",
  evilness : "",
  EXPERIENCES : "",
  this_is_the_word_of_god : "",
  personal_doubts : "",
  uncertainties : "",
  THOUGHTS : "",
  ideas_as_codes : "",
  EMOTIONS : "",
  ASSOCIATED_BEVHAVIOUR : {},
  WORD_FIELDS_AND_TAGGED_OBJECTS : {},
  MACHINES_TO_HANDLE : {},
  WONDERFUL_OPINTIONS : {},
  
  
  
  
  
  
/*  
  1 : "",
  2 : "",
  3 : "",
  4 : "",
  5 : "",
  6 : "",
  7 : "",
  8 : "",
  9 : "",
  0 : "",
    */
  1 : "",
  2 : "",
  3 : "",
  4 : "",
  5 : "",
  6 : "",
  7 : "",
  8 : "",
  9 : "",
  0 : "",
  
  
  
  
  
  loving_nietzsche : {
    sayings_rather_short : ["","","","","","","","","","","","","","",""],
    sayings_rather_middlesized : ["","","","","","","","","","","","","","",""],
  },
}


