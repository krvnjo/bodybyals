import type { ImageMetadata } from "astro";
import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import {
  Flame,
  Timer,
  ArrowLeftRight,
  LeafyGreen,
  Beef,
  Wheat,
  CookingPot,
  Sandwich,
  Salad,
  Droplets,
  UtensilsCrossed,
  Sparkles,
} from "@lucide/astro/icons/index";
import ketoBreadImage from "@/assets/images/products/keto-bread-2.png";
import shiratakiRice from "@/assets/images/products/shirataki-rice-2.png";
import mealPlan from "@/assets/images/products/meal-plan-2.png";

export interface ProductDetail {
  icon: AstroComponentFactory;
  label: string;
  value: string;
}

export interface Product {
  image: ImageMetadata;
  title: string;
  description: string;
  details: ProductDetail[];
}

export const products: Product[] = [
  {
    image: shiratakiRice,
    title: "Dry Shirataki Rice",
    description:
      "Our Premium Dry Shirataki Rice is the perfect low-carb alternative to regular rice. Made from konjac, it's virtually calorie-free, high in fiber, and has no strong odor. Quick and easy to prepare, it pairs perfectly with any meal while helping you stay on track with your fitness and nutrition goals.",
    details: [
      { icon: Flame, label: "Calories", value: "28 calories per serving" },
      { icon: Timer, label: "Prep Time", value: "Quick and easy" },
      { icon: ArrowLeftRight, label: "Best For", value: "Rice replacement" },
      { icon: LeafyGreen, label: "Diet Friendly", value: "Great for keto & low-carb" },
    ],
  },
  {
    image: ketoBreadImage,
    title: "Keto Bread",
    description:
      "Our Keto Bread, also known as Keto French Toast, is a low-carb, high-protein bread made with almond flour. It's a healthy alternative to regular bread—soft, satisfying, and perfect for sandwiches, toast, or enjoying with your favorite spreads. With BodyByAls Keto Bread, you can enjoy the foods you love while keeping your nutrition on track.",
    details: [
      { icon: Beef, label: "Protein", value: "17g of protein per slice" },
      { icon: Wheat, label: "Carbs", value: "Low-carb" },
      { icon: CookingPot, label: "Made With", value: "Almond flour" },
      { icon: Sandwich, label: "Best For", value: "Sandwiches & toast" },
    ],
  },
  {
    image: mealPlan,
    title: "Meal Plan",
    description:
      "Our Meal Plan is low-carb and high-protein, also known as the Insulin Sensitivity Reset Diet, designed to improve insulin sensitivity, reduce inflammation, and support overall metabolic health. We focus on balancing hormones, not counting calories, so you can enjoy every meal while staying on track. Premium packages feature USDA Prime Ribeye Steak and Salmon, while superior packages include a variety of beef, chicken, salads, and more.",
    details: [
      { icon: Salad, label: "Diet Type", value: "Low-carb, high-protein" },
      { icon: Droplets, label: "Focus", value: "Hormone balance" },
      { icon: UtensilsCrossed, label: "Premium", value: "Prime Ribeye & Salmon" },
      { icon: Sparkles, label: "Result", value: "Juicy, tasty, filling" },
    ],
  },
];
