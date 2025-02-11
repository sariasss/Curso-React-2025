import mongoose from 'mongoose';

const pokemonSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  types: [{
    slot: Number,
    type: {
      name: { type: String, required: true },
      url: String
    }
  }],
  sprites: {
    front_default: String,
    other: {
      'official-artwork': {
        front_default: String
      }
    }
  },
  stats: [{
    base_stat: Number,
    stat: {
      name: String
    }
  }]
});

const favoriteSchema = new mongoose.Schema({
    favoriteId:  { type: Number, required: true, unique: true },
    pokemonId:  { type: Number, required: true},
    pokemon: pokemonSchema
});

export const Pokemon = mongoose.model('Pokemon', pokemonSchema);
export const Favorite = mongoose.model('Favorite', favoriteSchema);