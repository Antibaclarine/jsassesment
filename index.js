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
        

class Recipe{
    constructor(ingredients,preparation_time,cooking_method,nutritional){
        this.ingredients=ingredients
        this.preparation_time=preparation_time
        this.cooking_method=cooking_method
        this.nutritional=nutritional
    }
    recipe_details(){
        return 'spicy food are prepared with ${this.ingredients} within ${this.preparation_time} and has ${this.nutritional}'
    }
}
    class Morrocan extends Recipe{
        constructor(ingredients,preparation_time,cooking_method,nutritional){
        this.ingredients=ingredients
        this.preparation_time=preparation_time
        this.cooking_method=cooking_method
        this.nutritional=nutritional
        
                return "morrocan uses spicy ingredients"
        
    }
}
    class Ethiopian extends Recipe{
        constructor(ingredients,preparation_time,cooking_method,nutritional){
        this.ingredients=ingredients
        this.preparation_time=preparation_time
        this.cooking_method=cooking_method
        this.nutritional=nutritional 
        }
        ingredients_used(){
         return "ethiopian uses spicy ingredients"
        }
    }
    class Nigerian extends Recipe{
        constructor(ingredients,preparation_time,cooking_method,nutritional){
            this.ingredients=ingredients
            this.preparation_time=preparation_time
            this.cooking_method=cooking_method
            this.nutritional=nutritional 
            }
            ingredients_used(){
                 return "nigerian does not use spicy ingredients"
            }
    }
