import Input from '../ui/input';
import Filter from './filter';
import Button from '../ui/button';

import MapIcon from '../../assets/icons/map.svg';

import WindIcon from '../../assets/icons/wind.svg';
import DiagramIcon from '../../assets/icons/diagram.svg';
import CupIcon from '../../assets/icons/cup-hot.svg';
import TvIcon from '../../assets/icons/tv.svg';
import ShowerIcon from '../../assets/icons/ph_shower.svg';
import VanIcon from '../../assets/icons/bi_grid-1x2.svg';
import FullIcon from '../../assets/icons/bi_grid.svg';
import AlcoveIcon from '../../assets/icons/bi_grid-3x3-gap.svg';

const EQUIPMEBT_FILTERS = [
  { label: 'AC', icon: WindIcon, value: 'air_conditining' },
  { label: 'Automatic', icon: DiagramIcon, value: 'automatic' },
  { label: 'Kitchen', icon: CupIcon, value: 'kitchen' },
  { label: 'TV', icon: TvIcon, value: 'tv' },
  { label: 'Bathroom', icon: ShowerIcon, value: 'bathroom' },
];

const TYPE_FILTERS = [
  { label: 'Van', icon: VanIcon, value: 'van' },
  { label: 'Fully Integrated', icon: FullIcon, value: 'fully_integrated' },
  { label: 'Alcove', icon: AlcoveIcon, value: 'alcove' },
];

export default function Sidebar() {
  return (
    <div>
      <Input placeholder="City, Country" icon={MapIcon} label="Location" />
      <p className="pt-10">Filters</p>
      <div className="flex flex-col gap-8 pt-8">
        <Filter
          label="Vehicle equipment"
          list={EQUIPMEBT_FILTERS}
          selected={[]}
        />
        <Filter label="Vehicle type" list={TYPE_FILTERS} selected={[]} />
      </div>
      <Button className="mt-10">Search</Button>
    </div>
  );
}
