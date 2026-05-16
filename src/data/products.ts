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

// Keto Bread
import ketoBread01 from "@/assets/images/products/keto-bread/keto-bread-01.png";
import ketoBread02 from "@/assets/images/products/keto-bread/keto-bread-02.png";

// Meal Plan
import mealPlan01 from "@/assets/images/products/meal-plan/meal-plan-01.png";
import mealPlan02 from "@/assets/images/products/meal-plan/meal-plan-02.png";

// Shirataki Rice gallery
import shiratakiRice01 from "@/assets/images/products/shirataki-rice/shirataki-rice-01.png";
import shiratakiRice03 from "@/assets/images/products/shirataki-rice/shirataki-rice-03.png";
import shiratakiRice04 from "@/assets/images/products/shirataki-rice/shirataki-rice-04.png";
import shiratakiRice05 from "@/assets/images/products/shirataki-rice/shirataki-rice-05.webp";
import shiratakiRice06 from "@/assets/images/products/shirataki-rice/shirataki-rice-06.jpg";
import shiratakiRice07 from "@/assets/images/products/shirataki-rice/shirataki-rice-07.jpg";
import shiratakiRice08 from "@/assets/images/products/shirataki-rice/shirataki-rice-08.jpg";
import shiratakiRice09 from "@/assets/images/products/shirataki-rice/shirataki-rice-09.jpg";
import shiratakiRice10 from "@/assets/images/products/shirataki-rice/shirataki-rice-10.jpg";
import shiratakiRice11 from "@/assets/images/products/shirataki-rice/shirataki-rice-11.jpg";
import shiratakiRice12 from "@/assets/images/products/shirataki-rice/shirataki-rice-12.jpg";
import shiratakiRice13 from "@/assets/images/products/shirataki-rice/shirataki-rice-13.jpg";
import shiratakiRice14 from "@/assets/images/products/shirataki-rice/shirataki-rice-14.jpg";
import shiratakiRice15 from "@/assets/images/products/shirataki-rice/shirataki-rice-15.jpg";
import shiratakiRice16 from "@/assets/images/products/shirataki-rice/shirataki-rice-16.png";

export interface ProductDetail {
  icon: AstroComponentFactory;
  label: string;
  value: string;
}

export interface Product {
  slug: string;
  image: ImageMetadata;
  title: string;
  description: string;
  details: ProductDetail[];
  gallery: ImageMetadata[];
}

export const products: Product[] = [
  {
    slug: "dry-shirataki-rice",
    image: shiratakiRice01,
    title: "Dry Shirataki Rice",
    description:
      "Our Premium Dry Shirataki Rice is the perfect low-carb alternative to regular rice. Made from konjac, it's virtually calorie-free, high in fiber, and has no strong odor. Quick and easy to prepare, it pairs perfectly with any meal while helping you stay on track with your fitness and nutrition goals.",
    details: [
      { icon: Flame, label: "Calories", value: "28 calories per serving" },
      { icon: Timer, label: "Prep Time", value: "Quick and easy" },
      { icon: ArrowLeftRight, label: "Best For", value: "Rice replacement" },
      { icon: LeafyGreen, label: "Diet Friendly", value: "Great for keto & low-carb" },
    ],
    gallery: [
      shiratakiRice03,
      shiratakiRice04,
      shiratakiRice05,
      shiratakiRice06,
      shiratakiRice07,
      shiratakiRice08,
      shiratakiRice09,
      shiratakiRice10,
      shiratakiRice11,
      shiratakiRice12,
      shiratakiRice13,
      shiratakiRice14,
      shiratakiRice15,
      shiratakiRice16,
    ],
  },
  {
    slug: "keto-bread",
    image: ketoBread01,
    title: "Keto Bread",
    description:
      "Our Keto Bread, also known as Keto French Toast, is a low-carb, high-protein bread made with almond flour. It's a healthy alternative to regular bread—soft, satisfying, and perfect for sandwiches, toast, or enjoying with your favorite spreads. With BodyByAls Keto Bread, you can enjoy the foods you love while keeping your nutrition on track.",
    details: [
      { icon: Beef, label: "Protein", value: "17g of protein per slice" },
      { icon: Wheat, label: "Carbs", value: "Low-carb" },
      { icon: CookingPot, label: "Made With", value: "Almond flour" },
      { icon: Sandwich, label: "Best For", value: "Sandwiches & toast" },
    ],
    gallery: [ketoBread01, ketoBread02],
  },
  {
    slug: "meal-plan",
    image: mealPlan01,
    title: "Meal Plan",
    description:
      "Our Meal Plan is low-carb and high-protein, also known as the Insulin Sensitivity Reset Diet, designed to improve insulin sensitivity, reduce inflammation, and support overall metabolic health. We focus on balancing hormones, not counting calories, so you can enjoy every meal while staying on track. Premium packages feature USDA Prime Ribeye Steak and Salmon, while superior packages include a variety of beef, chicken, salads, and more.",
    details: [
      { icon: Salad, label: "Diet Type", value: "Low-carb, high-protein" },
      { icon: Droplets, label: "Focus", value: "Hormone balance" },
      { icon: UtensilsCrossed, label: "Premium", value: "Prime Ribeye & Salmon" },
      { icon: Sparkles, label: "Result", value: "Juicy, tasty, filling" },
    ],
    gallery: [mealPlan01, mealPlan02],
  },
];
