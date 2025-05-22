import WindIcon from '../assets/icons/wind.svg';
import TvIcon from '../assets/icons/tv.svg';
import ShowerIcon from '../assets/icons/ph_shower.svg';
import KitchenIcon from '../assets/icons/hugeicons_gas-stove.svg';
import RadioIcon from '../assets/icons/ui-radios.svg';
import RefrigeratorIcon from '../assets/icons/solar_fridge-outline.svg';
import GasIcon from '../assets/icons/fuel-pump.svg';
import MicrowaveIcon from '../assets/icons/lucide_microwave.svg';
import WaterIcon from '../assets/icons/ion_water-outline.svg';

const ICONS = {
  ac: WindIcon,
  bathroom: ShowerIcon,
  kitchen: KitchenIcon,
  tv: TvIcon,
  radio: RadioIcon,
  refrigerator: RefrigeratorIcon,
  microwave: MicrowaveIcon,
  gas: GasIcon,
  water: WaterIcon,
};

const target_categories = ['AC', 'bathroom', 'kitchen', 'TV', 'radio', 'refrigerator', 'microwave', 'gas', 'water'];

export function mapCategoriesByProduct(product) {
  if (!product) return [];

  return target_categories.reduce((acc, category) => {
    if (product[category]) {
      acc.push({
        label: category,
        icon: ICONS[category.toLowerCase()] || null,
      });
    }
    return acc;
  }, []);
}

const FAVORITES = 'favorites';

export function getFavorites() {
  return JSON.parse(localStorage.getItem(FAVORITES)) || [];
}

export function addOrRemoveFavoritProductById(id) {
  const favorites = getFavorites();
  if (!favorites.includes(id)) {
    favorites.push(id);
    localStorage.setItem(FAVORITES, JSON.stringify(favorites));
    return getFavorites();
  }

  if (favorites.includes(id)) {
    const newFavorites = favorites.filter((favorite) => favorite !== id);
    localStorage.setItem(FAVORITES, JSON.stringify(newFavorites));
  }

  return getFavorites();
}

export function getFiltersFromUrl(keys) {
  const searchParams = new URLSearchParams(window.location.search);
  return keys.reduce((acc, key) => {
    const value = searchParams.get(key);
    acc[key] = value ? value.split(',') : [];
    return acc;
  }, {});
}
