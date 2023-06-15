// # input
//    #story
//    #translator
//    #Story_teller
//    # length_of_story 
//    #moral_lesson
//    #age_group
// #process
//    #assign values of the object
//   #determine different classes
//   #create classes 
// #output
//     #

class Ancestral{
    constructor(story,storyteller,translator){
        this.story=story
        this.translator=translator
        this.storyteller=storyteller}
     story_roles(){
        return `${self.story} is told by ${self.storyteller} and has to be translated by ${self.translator}`
    }
    
}
class Storytype extends Ancestral{
    constructor( length,moral_lesson,age_group){
        super()
        this.length=length
        this.moral_lesson=moral_lesson
        this.age_group=age_group
    }
     type_story(){
        if(this.length >=100 && this.age_group >=10 && this.moral_lesson=="mature"){
            return `${this.story} that has ${this.length}  pages and teaches ${this.moral_lesson} belongs to children who are ${this.age_group}`
        }
        else{
            return `${this.story} that has ${this.length} pages and teaches ${this.moral_lesson} belongs to children who are above ${this.age_group}`
        }
        }
}  
let ancestral=new Ancestral("animation","Mother","Mary")
let storytype=new Storytype("animation","Mary","Joseph",50,"childish",5)
console.log(storytype.type_story())
        
        