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
        
        