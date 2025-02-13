import mongoose from 'mongoose';

const typeSchema = new mongoose.Schema({
  slot: Number,
  type: {
    name: { type: String, required: true },
    url: String
  }
});

const statSchema = new mongoose.Schema({
  base_stat: Number,
  effort: Number,
  stat: {
    name: String,
    url: String
  }
});

const pokemonSchema = new mongoose.Schema({
  id: { type: Number, required: true },
  name: { type: String, required: true },
  types: [typeSchema],
  sprites: {
    front_default: String,
    other: {
      dream_world: {
        front_default: String
      }
    }
  },
  stats: [statSchema]
});

const favoriteSchema = new mongoose.Schema({
    pokemonId: { type: Number, required: true },
    pokemon: pokemonSchema
});

export const Pokemon = mongoose.model('Pokemon', pokemonSchema);
export const Favorite = mongoose.model('Favorite', favoriteSchema);