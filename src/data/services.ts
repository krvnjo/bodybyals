import type { AstroComponentFactory } from "astro/runtime/server/index.js";
import { Dumbbell, UtensilsCrossed } from "@lucide/astro/icons/index";

export interface Service {
  title: string;
  icon: AstroComponentFactory;
  features: string[];
  delay: string | null;
}

export const services: Service[] = [
  {
    title: "Online Coaching & Nutrition Guide",
    icon: Dumbbell,
    features: [
      "Easy-to-follow workouts you can do anytime, anywhere — no gym required",
      "A sustainable nutrition guide — helps you pick the right foods and ingredients, know what to eat, when to eat, and what to avoid while still enjoying your favorite foods",
      "A complete program to help you get fit, healthy, and confident",
      "Chat support throughout the program",
      "Programs available: 3 months, 6 months, or 1 year Transformation Program",
    ],
    delay: null,
  },
  {
    title: "Meal Plan Service",
    icon: UtensilsCrossed,
    features: [
      "We focus on balancing hormones, not counting calories",
      "High-protein and low-carb meal plan",
      'Seed-oil free. Also known as the "Insulin Sensitivity Reset Diet"',
      "Features premium, high-quality ingredients like USDA Prime ribeye steak, fresh salmon, chicken, beef, eggs, and fresh salads",
      "Delivery within Metro Manila. Delivery fees apply depending on your location",
    ],
    delay: "0.2s",
  },
];
