import React from 'react'
import Food from './Food'
import Sidebar from '../Sidebar/Sidebar';


const Recipe = () => {

    const styles = {
        container: `flex w-fit justify-items-center justify-center  	`,
        food: `flex justify-items-center`,
        text: `text-center justify `
    };
  return (
    <div className={styles.container}>
          <Sidebar />
          <div>
              <div className={styles.food}>
              <Food className={styles.text} Img="..\src\assets\1.png" text="100 gm Makhana,1 cup Peanuts,1 cup Almonds,1 cup Cashew nuts,1/2 cup Watermelon seeds,1 cup Raisins,1 cup Coconut pieces (thin and cut lengthwise),7-8 Curry leaves,3 Green chillies,1 tsp Black pepper,to taste Rock salt,2 tbsp Powdered sugar,1/2 tsp Red chilli,1 tsp Roasted jeera,3 tbsp Desi ghee" />
              
              <Food className={styles.text} Img="..\src\assets\2.png" text="1 cup Oats (powered in a mixture),2 tbsp Gram Flour,1 tsp Oil,1/2 tsp Green Chillies (chopped),1 cup Water,1/2 tsp Turmeric Powder,1/2 tsp Asafoetida,1 tbsp Coriander Leaves (chopped),to taste Salt,3 tsp Oil (for making the chilla),For the vegetable stuffing:1/2 cup Green Peas (boiled),1/2 cup Potatoes (peeled, boiled & chopped),1/2 tbsp Oil,1 tbsp Onions (chopped),1 tbsp Tomatoes (chopped),1/2 tsp Turmeric Powder,1/2 tsp Garam Masala,A pinch of Asafoetida,to taste Salt and Chilli Powder,1 cup Tamarind Chutney (for serving)" />

          
              <Food className={styles.text} Img="..\src\assets\3.png" text="250 gms Grated Paneer (Homemade Cottage Cheese),2 Whole Eggs , or Flax Meal Egg Replacer,3 Tbsp Sugar,1/2 tsp Baking powder,1/2 Cup Whole Wheat Flour,Salt , a pinch,3 Tbsp Milk,2 Tbsp Butter (Salted)" />
              </div>    
              
              <div className={styles.food}>
              <Food className={styles.text} Img="..\src\assets\4.png" text="1 Onion, finely chopped,2 tbsp Butter,2 cup Fresh spinach, chopped,3 medium Potatoes (½ kg), peeled and cut into 1-inch cubes,1 and a half cup Chicken or vegetable broth,2 Chicken or vegetable bouillon cubes,2 Half and half,1/2 tsp Salt,1/8 tsp Black Pepper,3/4 Sour cream,A pinch of Ground all-spice,3/4 cup Chopped chives for garnish" />

              <Food className={styles.text} Img="..\src\assets\5.png" text="1 Mango, peeled and chopped,1 and a half cup Muesli,1 and a half cup Hung Low fat yogurt,3 tbsp Low Calorie sweetener,1/2 tsp Green cardamom powder,A few saffron strands, soaked in water,4 tbsps + 4 tsps soaked basil seeds (sabza),Fresh mint sprigs for garnish" />

                  <Food className={styles.text} Img="..\src\assets\5.png" text="For outer coating,1 cup Hung Curd,3/4 cup Oats Powder,to taste Black Pepper,2 tsp Chopped green chilies,1 tsp Garam Masala,Salt to taste,2 tsp Chopped cilantro,For stuffing,1 cup Grated Paneer,1 tsp Chat masala,Salt to taste,Pinch of sugar,1 tsp Garam Masala,2 tsp Raisins,2 tsp Cashew Nuts" />
                  </div>
        </div>
          
      </div>
  )
}

export default Recipe
