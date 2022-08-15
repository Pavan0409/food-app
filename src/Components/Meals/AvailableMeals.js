import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Susla",
    description: "Finest Breakfast of Uk",
    price: 20,
  },
  {
    id: "m2",
    name: "Shaungi",
    description: "A South-Indian specialty!",
    price: 15,
  },
  {
    id: "m3",
    name: " Mysore-Bonda",
    description: "Mysore's Special Snacks",
    price: 30,
  },
  {
    id: "m4",
    name: "Aloo Parata",
    description: "Punjab's Fav breakfast",
    price: 40,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map((meal) => (
    <MealItem
      id={meal.id}
      key={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
