// src/ai/generatedContent.ts

import { prompts } from "./prompts";

export const generatedContent = {
  retailVideo: {
    prompt: prompts.retailHero,
    youtubeSearch: "Mall of America walkthrough 4K",
    fallbackVideo: "/videos/retail/retail-bg.mp4",
  },

  aquariumVideo: {
    prompt: prompts.aquariumHero,
    youtubeSearch: "aquarium tunnel sharks 4K",
    fallbackVideo: "/videos/aquarium.mp4",
  },

  eventHero: {
    prompt: prompts.eventHero,
    youtubeSearch: "large event stage cinematic 4K",
    fallbackVideo: "/videos/event-hero.mp4",
  },
};
