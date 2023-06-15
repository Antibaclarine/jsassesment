# input
   #story
   #translator
   #Story_teller
   # length_of_story 
   #moral_lesson
   #age_group
#process
   #assign values of the object
  #determine different classes
  #create classes 
#output
    #

class Ancestral:
    def __init__(self,story,storyteller,translator):
        self.story=story
        self.translator=translator
        self.storyteller=storyteller
    def story_roles(self):
        return f"{self.story} is told by {self.storyteller} and has to be translated by {self.translator}"
    
class Storytype(Ancestral):
    def __init__(self, story, storyteller, translator,length,moral_lesson,age_group):
        super().__init__(story, translator, storyteller)
        self.length=length
        self.moral_lesson=moral_lesson
        self.age_group=age_group
    def type_story(self):
        if(self.length >=100 and self.age_group >=10 and self.moral_lesson=="mature"):
            return f"{self.story} that has {self.length}  pages and teaches {self.moral_lesson} belongs to children who are {self.age_group}"
        else:
            return f"{self.story} that has {self.length} pages and teaches {self.moral_lesson} belongs to children who are above {self.age_group}"
        
ancestral=Ancestral("animation","Mother","Mary")
storytype=Storytype("animation","Mary","Joseph",50,"childish",5)
print(storytype.type_story())
   

#determining class Recipe
#subclass

class Recipe:
    def __init__(self,ingredients,preparation_time,cooking_method,nutritional):
        self.ingredients=ingredients
        self.preparation_time=preparation_time
        self.cooking_method=cooking_method
        self.nutritional=nutritional
    def recipe_details(self):
        return f"spicy food are prepared with {self.ingredients} within {self.preparation_time} and has {self.nutritional}"
    class Morrocan (Recipe):
        def __init__(self,ingredients,preparation_time,cooking_method,nutritional):
         super().__init__(ingredients,preparation_time,cooking_method,nutritional)
         return f"morrocan uses spicy ingredients"
     
    class Ethiopian (Recipe):
        def __init__(self,ingredients,preparation_time,cooking_method,nutritional):
         super().__init__(ingredients,preparation_time,cooking_method,nutritional)
         return f"ethiopian uses spicy ingredients"
     
    class Nigerian (Recipe):
        def __init__(self,ingredients,preparation_time,cooking_method,nutritional):
         super().__init__(ingredients,preparation_time,cooking_method,nutritional)
         return f"nigerian does not use spicy ingredients"
        
            
            
        
             
        